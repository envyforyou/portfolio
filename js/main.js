/* ================================
   DENYA SONATA PORTFOLIO — main.js
   OPTIMIZED: compositor-only anims,
   no DOM rebuild on filter, passive
   listeners, rAF scroll reveal,
   lazy video loading
   ================================ */

// ── BOOT SEQUENCE ──────────────────────────────────────────
// Single source of truth — no race between setTimeout + events

const bootScreen = document.getElementById('boot-screen');
const mainSite   = document.getElementById('main-site');
const bootBar    = document.getElementById('boot-bar');
const bootSkip   = document.getElementById('boot-skip');
const bootLines  = document.querySelectorAll('.boot-line');
let bootDone = false;

function runBoot() {
  // Batch all setTimeout calls; store refs for cleanup
  const timers = [];

  bootLines.forEach(line => {
    const delay = parseInt(line.dataset.delay || 0, 10);
    timers.push(setTimeout(() => line.classList.add('visible'), delay));
  });

  // Progress bar milestones
  const barMilestones = [[300,20],[1000,40],[1500,45],[1900,60],[3000,100]];
  barMilestones.forEach(([ms, pct]) => {
    timers.push(setTimeout(() => { bootBar.style.width = pct + '%'; }, ms));
  });

  timers.push(setTimeout(() => { bootSkip.style.display = 'block'; }, 4000));
  timers.push(setTimeout(enterSite, 6000));

  // Store so enterSite can cancel remaining timers on early skip
  bootScreen._timers = timers;
}

function enterSite() {
  if (bootDone) return;
  bootDone = true;

  // Cancel any pending boot timers
  (bootScreen._timers || []).forEach(clearTimeout);

  bootScreen.classList.add('fade-out');

  // Wait for transition then swap — use transitionend for accuracy
  bootScreen.addEventListener('transitionend', () => {
    bootScreen.style.display = 'none';
    mainSite.classList.remove('hidden');
    initSite();
  }, { once: true });
}

// Passive: skip, key, click — none call preventDefault
document.addEventListener('keydown', enterSite, { passive: true });
bootScreen.addEventListener('click', enterSite, { passive: true });
runBoot();


// ── SITE INIT ──────────────────────────────────────────────

function initSite() {
  initTypewriter();
  initFilter();
  initSteamViewer();
  initLightbox();
  initLoadingIndicators();
  initProtection();
  initScrollReveal();
  initDecoCycler();
}


// ── LIGHTBOX ZOOM FOR COLLAB IMAGES ─────────────────────────
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbVideo = document.getElementById('lb-video');
const lbLabel = document.getElementById('lb-label');
const lbClose = document.getElementById('lb-close');
const lbBg = document.getElementById('lb-bg');
let previousBodyOverflow = '';

function initLightbox() {
  if (!lightbox || !lbImg || !lbVideo) return;

  document.querySelectorAll('.gallery-img-wrap').forEach(wrap => {
    const img = wrap.querySelector('img');
    const title = wrap.parentElement?.querySelector('.meta-title')?.textContent?.trim() || img?.alt || '';
    if (!img) return;
    wrap.addEventListener('click', () => openLightbox(img.src, title, 'image'), { passive: true });

    if (!wrap.querySelector('.zoom-btn')) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'zoom-btn';
      btn.setAttribute('aria-label', `Zoom ${title || 'image'}`);
      btn.textContent = '🔍';
      btn.addEventListener('click', (event) => {
        event.stopPropagation();
        openLightbox(img.src, title, 'image');
      }, { passive: true });
      wrap.appendChild(btn);
    }
  });

  document.querySelectorAll('.hero-img, .deco-inner img').forEach(img => {
    const title = img.alt || 'Illustration';
    img.addEventListener('click', () => openLightbox(img.src, title, 'image'), { passive: true });
  });

  document.querySelectorAll('.anim-preview').forEach(preview => {
    const video = preview.querySelector('video');
    if (!video) return;
    const title = preview.closest('.anim-card')?.querySelector('.anim-title')?.textContent?.trim() || video.getAttribute('aria-label') || '';
    preview.addEventListener('click', () => openLightbox(video.currentSrc || video.src, title, 'video'), { passive: true });
  });

  if (lbClose) lbClose.addEventListener('click', closeLightbox, { passive: true });
  if (lbBg) lbBg.addEventListener('click', closeLightbox, { passive: true });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox && !lightbox.classList.contains('hidden')) {
      closeLightbox();
    }
  }, { passive: true });
}

function initProtection() {
  document.body.addEventListener('contextmenu', event => event.preventDefault(), { passive: false });
  document.body.addEventListener('copy', event => event.preventDefault(), { passive: false });
  document.body.addEventListener('cut', event => event.preventDefault(), { passive: false });
  document.body.addEventListener('dragstart', event => {
    if (event.target instanceof HTMLElement && /^(IMG|VIDEO)$/.test(event.target.tagName)) {
      event.preventDefault();
    }
  }, { passive: false });

  document.querySelectorAll('img, video').forEach(media => {
    media.draggable = false;
  });
}

function initLoadingIndicators() {
  document.querySelectorAll('.gallery-img-wrap img').forEach(img => {
    const wrap = img.closest('.gallery-img-wrap');
    if (!wrap) return;

    const clearLoading = () => wrap.classList.remove('loading');
    if (img.complete && img.naturalWidth !== 0) {
      clearLoading();
      return;
    }

    wrap.classList.add('loading');
    img.addEventListener('load', clearLoading, { once: true, passive: true });
    img.addEventListener('error', () => {
      wrap.classList.remove('loading');
      wrap.classList.add('img-error');
    }, { once: true, passive: true });
  });

  document.querySelectorAll('.anim-preview video').forEach(video => {
    const wrap = video.closest('.anim-preview');
    if (!wrap) return;

    const clearLoading = () => wrap.classList.remove('loading');
    wrap.classList.add('loading');
    video.addEventListener('loadstart', () => wrap.classList.add('loading'), { passive: true });
    video.addEventListener('loadeddata', clearLoading, { once: true, passive: true });
    video.addEventListener('error', clearLoading, { once: true, passive: true });
    if (video.readyState >= 3) clearLoading();
  });
}

function openLightbox(src, label, type = 'image') {
  if (!lightbox || !lbImg || !lbVideo) return;
  previousBodyOverflow = document.body.style.overflow || '';
  lbLabel.textContent = label || '';

  if (type === 'video') {
    lbImg.classList.add('hidden');
    lbVideo.classList.remove('hidden');
    lbVideo.src = src;
    lbVideo.currentTime = 0;
    lbVideo.muted = true;
    lbVideo.play().catch(() => {});
  } else {
    lbVideo.pause();
    lbVideo.removeAttribute('src');
    lbVideo.load();
    lbVideo.classList.add('hidden');
    lbImg.classList.remove('hidden');
    lbImg.src = src;
    lbImg.alt = label || 'Zoomed image';
  }

  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.add('hidden');
  lbVideo.pause();
  if (lbVideo.src) {
    lbVideo.removeAttribute('src');
    lbVideo.load();
  }
  document.body.style.overflow = previousBodyOverflow;
}


// ── TYPEWRITER ─────────────────────────────────────────────

const phrases = [
  'Drawing worlds into existence.',
  'One frame at a time.',
  'Characters with stories to tell.',
  'Art is the language I speak best.',
];
let phraseIndex = 0, charIndex = 0, isDeleting = false;
const twEl = document.getElementById('hero-typewriter');
let twTimer = null;

function typewriter() {
  if (!twEl) return;
  const current = phrases[phraseIndex];
  if (!isDeleting) {
    twEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      isDeleting = true;
      twTimer = setTimeout(typewriter, 1800);
      return;
    }
  } else {
    twEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  twTimer = setTimeout(typewriter, isDeleting ? 40 : 70);
}

function initTypewriter() { typewriter(); }


// ── GALLERY FILTER ─────────────────────────────────────────
// Key fix: toggle .hidden class instead of rebuilding viewer DOM.
// populateImageViewer() is expensive — only call it once on build.

function initFilter() {
  const btns  = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      items.forEach(item => {
        item.classList.toggle('hidden', filter !== 'all' && item.dataset.cat !== filter);
      });

      // Rebuild viewer to respect filter — but defer to next frame
      // so the CSS visibility change settles first
      requestAnimationFrame(populateImageViewer);
    });
  });
}


// ── STEAM VIEWER INIT ──────────────────────────────────────

function initSteamViewer() {
  buildImageViewer();
  buildVideoViewer();
}


// ── IMAGE VIEWER ───────────────────────────────────────────
// Fix: thumbs are rebuilt on populateImageViewer but ONLY the strip
// is touched — main viewer HTML is built once and never replaced.
// setImgIndex uses cached NodeList, not querySelector on every call.

let imgItems = [], imgIndex = 0;

// Cached references — set once, reused forever
let svBigImg, svImgLabel, svStripImg, svPreviewWrap;
let svVideoPreviewWrap;

function buildImageViewer() {
  const gallerySection = document.getElementById('works');
  if (!gallerySection) return;

  const viewer = document.createElement('div');
  viewer.className = 'steam-viewer';
  viewer.tabIndex = 0;
  viewer.setAttribute('aria-label', 'image viewer');
  viewer.innerHTML = `
    <div class="sv-main">
      <button class="sv-prev sv-arrow" id="sv-prev-img" aria-label="Previous image">&#10094;</button>
      <div class="sv-preview-wrap">
        <img class="sv-big-img" id="sv-big-img" src="" alt="" decoding="async" fetchpriority="low">
        <button class="zoom-btn sv-zoom-btn" id="sv-zoom-img" type="button" aria-label="Zoom current image">🔍</button>
        <div class="sv-img-label" id="sv-img-label"></div>
      </div>
      <button class="sv-next sv-arrow" id="sv-next-img" aria-label="Next image">&#10095;</button>
    </div>
    <div class="sv-strip-wrap">
      <div class="sv-strip" id="sv-strip-img"></div>
    </div>`;

  const filterBar = gallerySection.querySelector('.filter-bar');
  filterBar.after(viewer);

  const grid = gallerySection.querySelector('.gallery-grid');
  if (grid) grid.style.display = 'none';

  // Cache DOM refs
  svBigImg       = document.getElementById('sv-big-img');
  svImgLabel     = document.getElementById('sv-img-label');
  svStripImg     = document.getElementById('sv-strip-img');
  svPreviewWrap  = viewer.querySelector('.sv-preview-wrap');

  // Arrow navigation
  document.getElementById('sv-prev-img').addEventListener('click', () => {
    setImgIndex((imgIndex - 1 + imgItems.length) % imgItems.length, true);
  }, { passive: true });

  document.getElementById('sv-next-img').addEventListener('click', () => {
    setImgIndex((imgIndex + 1) % imgItems.length, true);
  }, { passive: true });

  const svZoomImgBtn = document.getElementById('sv-zoom-img');
  if (svZoomImgBtn) {
    svZoomImgBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      if (imgItems[imgIndex]) {
        openLightbox(imgItems[imgIndex].src, imgItems[imgIndex].label, 'image');
      }
    }, { passive: true });
  }

  // Keyboard nav when viewer is focused
  viewer.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') setImgIndex((imgIndex - 1 + imgItems.length) % imgItems.length, true);
    if (e.key === 'ArrowRight') setImgIndex((imgIndex + 1) % imgItems.length, true);
  });

  populateImageViewer();
}

function populateImageViewer() {
  if (!svStripImg || !svBigImg) return;

  const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
  const allGalleryItems = document.querySelectorAll('.gallery-item, .collab-card');

  imgItems = Array.from(allGalleryItems)
    .filter(item => activeFilter === 'all' || item.dataset.cat === activeFilter)
    .map(item => ({
      src:   item.querySelector('img')?.src || '',
      label: item.querySelector('.meta-title')?.textContent?.trim() || '',
    }))
    .filter(i => i.src);

  // Rebuild strip with DocumentFragment — single reflow
  const frag = document.createDocumentFragment();
  imgItems.forEach((item, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'sv-thumb' + (i === 0 ? ' active' : '');
    const tImg = document.createElement('img');
    tImg.src     = item.src;
    tImg.loading = 'lazy';
    tImg.decoding = 'async';
    tImg.alt = item.label;
    thumb.appendChild(tImg);
    // Passive: thumbnails never call preventDefault
    thumb.addEventListener('click', () => setImgIndex(i, true), { passive: true });
    frag.appendChild(thumb);
  });

  // Single DOM write
  svStripImg.replaceChildren(frag);

  imgIndex = 0;
  if (imgItems.length > 0) setImgIndex(0, false);
}

// thumbScroll: whether to scroll the filmstrip to keep thumb visible
function setImgIndex(i, thumbScroll) {
  if (!imgItems.length || !svBigImg || !svStripImg) return;
  imgIndex = i;

  // Crossfade: fade out → swap src → fade in
  // opacity-only: stays on compositor thread
  if (svPreviewWrap) svPreviewWrap.classList.add('loading');
  svBigImg.style.opacity = '0';
  requestAnimationFrame(() => {
    svBigImg.src = imgItems[i].src;
    svBigImg.alt = imgItems[i].label;
    svImgLabel.textContent = imgItems[i].label;

    svBigImg.onload = () => {
      if (svPreviewWrap) svPreviewWrap.classList.remove('loading');
      svBigImg.style.opacity = '1';
    };
    svBigImg.onerror = () => {
      if (svPreviewWrap) svPreviewWrap.classList.remove('loading');
      svBigImg.style.opacity = '1';
    };
    // Fallback if already cached (no load event fires)
    if (svBigImg.complete) {
      if (svPreviewWrap) svPreviewWrap.classList.remove('loading');
      svBigImg.style.opacity = '1';
    }
  });

  // Update active thumb — update class only, no DOM rebuild
  const thumbs = svStripImg.children;
  for (let t = 0; t < thumbs.length; t++) {
    thumbs[t].classList.toggle('active', t === i);
  }

  // Scroll strip to thumb — scroll WITHIN the strip wrapper, not the page
  if (thumbScroll && thumbs[i]) {
    thumbs[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}


// ── VIDEO VIEWER ───────────────────────────────────────────
// Fix: video src is only set when visible (IntersectionObserver).
// Mute state preserved across video switches.
// All event listeners use passive where safe.

const allVids = [
  { src: 'assets/works/self/animations/basics/Turn Around.mov',         label: 'TURN AROUND' },
  { src: 'assets/works/self/animations/basics/Walk Cycle.mp4',          label: 'WALK CYCLE' },
  { src: 'assets/works/self/animations/basics/Angkat.mp4',              label: 'LIFT' },
  { src: 'assets/works/self/animations/basics/Dorong.mp4',              label: 'PUSH' },
  { src: 'assets/works/self/animations/basics/Lempar.mp4',              label: 'THROW' },
  { src: 'assets/works/self/animations/basics/Tarik.mp4',               label: 'PULL' },
  { src: 'assets/works/self/animations/oc/3nya - nasty song trend.mp4', label: '3NYA — NASTY SONG TREND' },
  { src: 'assets/works/self/animations/oc/First Look vs Last Look.mp4', label: 'FIRST LOOK VS LAST LOOK' },
];
let vidIndex = 0, vidLoopCount = 0;

// Cached refs
let svBigVideo, svVidLabel, svVidLoops, svVidHint, svStripVid;
let vidSectionVisible = false;

function buildVideoViewer() {
  const animSection = document.getElementById('animations');
  if (!animSection) return;

  const viewer = document.createElement('div');
  viewer.className = 'steam-viewer';
  viewer.tabIndex = 0;
  viewer.setAttribute('aria-label', 'video viewer');
  viewer.innerHTML = `
    <div class="sv-main">
      <button class="sv-prev sv-arrow" id="sv-prev-vid" aria-label="Previous video">&#10094;</button>
      <div class="sv-preview-wrap">
        <video class="sv-big-video" id="sv-big-video" playsinline muted preload="none"></video>
        <button class="zoom-btn sv-zoom-btn" id="sv-zoom-vid" type="button" aria-label="Zoom current video">🔍</button>
        <div class="sv-img-label"  id="sv-vid-label"></div>
        <div class="sv-vid-loops"  id="sv-vid-loops">LOOP 1/2</div>
        <div class="sv-unmute-hint" id="sv-unmute-hint">[ CLICK FOR SOUND ]</div>
      </div>
      <button class="sv-next sv-arrow" id="sv-next-vid" aria-label="Next video">&#10095;</button>
    </div>
    <div class="sv-strip-wrap">
      <div class="sv-strip" id="sv-strip-vid"></div>
    </div>`;

  const animTabs = animSection.querySelector('.anim-tabs');
  animTabs.after(viewer);

  // Hide old grid-based sections — viewer replaces them
  document.getElementById('anim-basics').style.display = 'none';
  document.getElementById('anim-oc').style.display    = 'none';
  animTabs.style.display = 'none';

  // Cache refs
  svBigVideo        = document.getElementById('sv-big-video');
  svVidLabel        = document.getElementById('sv-vid-label');
  svVidLoops        = document.getElementById('sv-vid-loops');
  svVidHint         = document.getElementById('sv-unmute-hint');
  svStripVid        = document.getElementById('sv-strip-vid');
  svVideoPreviewWrap = viewer.querySelector('.sv-preview-wrap');

  // Build thumbs once with DocumentFragment
  const frag = document.createDocumentFragment();
  allVids.forEach((v, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'sv-thumb sv-thumb-vid' + (i === 0 ? ' active' : '');
    thumb.innerHTML = `
      <div class="sv-thumb-vid-inner">
        <span class="sv-play-icon">▶</span>
        <span class="sv-thumb-title">${v.label}</span>
      </div>`;
    thumb.addEventListener('click', () => setVidIndex(i, true), { passive: true });
    frag.appendChild(thumb);
  });
  svStripVid.appendChild(frag);

  // Arrow navigation
  document.getElementById('sv-prev-vid').addEventListener('click', () => {
    setVidIndex((vidIndex - 1 + allVids.length) % allVids.length, true);
  }, { passive: true });
  document.getElementById('sv-next-vid').addEventListener('click', () => {
    setVidIndex((vidIndex + 1) % allVids.length, true);
  }, { passive: true });

  const svZoomVidBtn = document.getElementById('sv-zoom-vid');
  if (svZoomVidBtn) {
    svZoomVidBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const current = allVids[vidIndex];
      if (current) openLightbox(current.src, current.label, 'video');
    }, { passive: true });
  }

  // Auto-advance after 2 loops
  svBigVideo.addEventListener('ended', () => {
    vidLoopCount++;
    if (vidLoopCount < 2) {
      svVidLoops.textContent = `LOOP ${vidLoopCount + 1}/2`;
      svBigVideo.play().catch(() => {});
    } else {
      setVidIndex((vidIndex + 1) % allVids.length, false);
    }
  });

  // Loading indicator for the big video preview
  if (svVideoPreviewWrap) svVideoPreviewWrap.classList.add('loading');
  svBigVideo.addEventListener('loadstart', () => {
    if (svVideoPreviewWrap) svVideoPreviewWrap.classList.add('loading');
  }, { passive: true });
  svBigVideo.addEventListener('loadeddata', () => {
    if (svVideoPreviewWrap) svVideoPreviewWrap.classList.remove('loading');
  }, { passive: true });
  svBigVideo.addEventListener('error', () => {
    if (svVideoPreviewWrap) svVideoPreviewWrap.classList.remove('loading');
  }, { passive: true });

  // Mute toggle — passive: click on video never prevents default
  svBigVideo.addEventListener('click', () => {
    svBigVideo.muted = !svBigVideo.muted;
    svVidHint.textContent = svBigVideo.muted ? '[ CLICK FOR SOUND ]' : '[ CLICK TO MUTE ]';
  }, { passive: true });

  // Play/pause based on visibility — don't waste decode on off-screen
  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      vidSectionVisible = entry.isIntersecting;
      if (entry.isIntersecting) {
        // Only load src now — saves bandwidth until user scrolls here
        if (!svBigVideo.src || svBigVideo.src === window.location.href) {
          svBigVideo.src = allVids[0].src;
          svBigVideo.load();
        }
        svBigVideo.play().catch(() => {});
      } else {
        if (!svBigVideo.paused) svBigVideo.pause();
      }
    });
  }, { threshold: 0.25 });

  animObserver.observe(animSection);

  // Init first video metadata only (no src yet — lazy loaded by observer)
  setVidIndex(0, false, true /* metaOnly */);
}

// metaOnly: update UI without touching video src (used for init before visible)
function setVidIndex(i, thumbScroll, metaOnly) {
  if (!allVids.length || !svBigVideo) return;
  vidIndex     = i;
  vidLoopCount = 0;

  if (!metaOnly) {
    const wasMuted = svBigVideo.muted;
    if (svVideoPreviewWrap) svVideoPreviewWrap.classList.add('loading');
    svBigVideo.src   = allVids[i].src;
    svBigVideo.muted = wasMuted;
    svBigVideo.load();
    if (vidSectionVisible) svBigVideo.play().catch(() => {});
  }

  svVidLabel.textContent = allVids[i].label;
  svVidLoops.textContent = 'LOOP 1/2';

  // Update active — iterate children directly, no querySelectorAll
  const thumbs = svStripVid.children;
  for (let t = 0; t < thumbs.length; t++) {
    thumbs[t].classList.toggle('active', t === i);
  }

  if (thumbScroll && thumbs[i]) {
    thumbs[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}


// ── HERO DECO CYCLER ───────────────────────────────────────

const decoImages = [
  { src: 'assets/hero/big-icon.png', label: 'PROFILE.PNG' },
];
let decoIndex = 0;

function initDecoCycler() {
  const frame = document.getElementById('deco-frame');
  const img   = document.getElementById('deco-img');
  const hint  = document.getElementById('deco-hint');
  const lbl   = document.getElementById('deco-label');
  if (!frame || !img) return;

  img.src = decoImages[0].src;
  if (lbl)  lbl.textContent  = decoImages[0].label;
  if (hint) hint.style.display = 'none';
}


// ── SCROLL REVEAL ──────────────────────────────────────────
// Fix: removed nested rAF/ticking pattern — IntersectionObserver
// callbacks are already batched. Single rAF for class application is enough.

function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.stat-card, .section-header, .terminal-box, .steam-viewer'
  );

  const observer = new IntersectionObserver((entries) => {
    // Batch all class writes in one rAF to avoid multiple style recalcs
    requestAnimationFrame(() => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // unobserve immediately — no repeated firing
        }
      });
    });
  }, { threshold: 0.08 });

  targets.forEach(el => observer.observe(el));
}