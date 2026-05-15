//=============================================================================
// VisuStella MZ - Events & Movement Core
// VisuMZ_1_EventsMoveCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_EventsMoveCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EventsMoveCore = VisuMZ.EventsMoveCore || {};
VisuMZ.EventsMoveCore.version = 1.59;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.59] [EventsMoveCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Events_and_Movement_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Events & Movement Core plugin adds a lot of new functionality in terms
 * of event flexibility and movement options to RPG Maker MZ. These range from
 * adding in old capabilities from previous iterations of RPG Maker to more
 * mainstream techniques found in other game engines. Movement options are also
 * expanded to support 8-directional movement as well as sprite sheets provided
 * that the VisuStella 8 format is used.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Event commands expanded upon to include old and new functions.
 * * Event templates for Copying Events, Morphing Events, and Spawning Events.
 * * 8-directional movement option available and sprite sheet support.
 * * Aesthetics for tilting the sprite when dashing and having shadows below.
 * * Pathfinding support for event movement through custom Move Route commands.
 * * Advanced switches and variable support to run code automatically.
 * * Turn regular Switches and Variables into Self Switches and Self Variables.
 * * Put labels and icons over events.
 * * Allow numerous ways to trigger events, through clicking, proximity, or by
 *   usage of Regions.
 * * Change the hitbox sizes of events to larger in any direction.
 * * Synchronize event movement options to move when player/other events move.
 * * The ability for the player to turn in place.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Features: Advanced Switches and Variables
 * ============================================================================
 *
 * Switches and variables can now run JavaScript code and return values
 * instantly. While at first glance, this may seem no different from using
 * the Control Variables event command's Script option, this can be used to
 * instantly set up Switch and/or Variable conditions for Parallel Common
 * Events, Event Page Conditions, Enemy Skill Conditions, and Troop Page
 * Conditions instantly without needing to make an event command to do so.
 *
 * ---
 *
 * <JS> code </JS>
 * - Used for: Switch and Variable names
 * - Replace 'code' with JavaScript code on what value to return.
 *
 * ---
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 *
 * ============================================================================
 * Features: Self Switches and Variables
 * ============================================================================
 *
 * RPG Maker MZ by default has 4 Self Switches: A, B, C, D. For some types of
 * games, this isn't enough. This plugin gives you the ability convert regular
 * Switches into Self Switches so you could have more.
 *
 * Self Variables also do not exist in RPG Maker MZ by default. Just like with
 * Switches, you can turn regular Variables into Self Variables.
 *
 * ---
 *
 * <Self>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Self Switch/Variable.
 *
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Self> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that event.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Self Switch or Self Variable's
 * value, you can use the following script calls.
 * 
 *   ---
 * 
 *   Get Self Switch Values:
 * 
 *   getSelfSwitchValue(mapID, eventID, switchID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - This will return the true/false value of the Self Switch.
 *   - Example: getSelfSwitchValue(12, 34, 56)
 *   - Example: getSelfSwitchValue(12, 34, 'B')
 * 
 *   ---
 * 
 *   Get Self Variable Values:
 * 
 *   getSelfVariableValue(mapID, eventID, variableID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - This will return whatever stored value is found in the Self Variable.
 *   - Example: getSelfVariableValue(12, 34, 56)
 * 
 *   ---
 * 
 *   Set Self Switch Values:
 * 
 *   setSelfSwitchValue(mapID, eventID, switchID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - This will change the Self Switch's value to true/false.
 *     - Example: setSelfSwitchValue(12, 34, 56, false)
 *     - Example: setSelfSwitchValue(12, 34, 'B', true)
 * 
 *   ---
 * 
 *   Set Self Variable Values:
 * 
 *   setSelfVariableValue(mapID, eventID, variableID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - Replace 'value' with the value you want to set the Self Variable to.
 *   - Example: setSelfVariableValue(12, 34, 56, 88888)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: Map Switches and Variables
 * ============================================================================
 * 
 * Similar to Self Switches and Self Variables, Map Switches and Map Variables
 * are switches and variables that retain data based on the map the player is
 * currently located in. In other words, they're self switches and variables
 * but for maps instead!
 * 
 * These features do not exist in RPG Maker MZ by default. Just like with the
 * Self Switches and Self Variables, you can turn regular Switches or Variables
 * into Map Switches and Map Variables using the following name tag:
 * 
 * ---
 * 
 * <Map>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Map Switch/Variable.
 * 
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Map> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that map.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Map Switch or Map Variable's
 * value, you can use the following script calls:
 * 
 *   ---
 * 
 *   Get Map Switch Values:
 * 
 *   getMapSwitchValue(mapID, switchID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Example: getMapSwitchValue(4, 20)
 * 
 *   ---
 * 
 *   Get Variable Switch Values:
 * 
 *   getMapVariableValue(mapID, variableID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Example: getMapVariableValue(6, 9)
 * 
 *   ---
 * 
 *   Set Map Switch Values:
 * 
 *   setMapSwitchValue(mapID, switchID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - Example: setMapSwitchValue(4, 20, true)
 *   - Example: setMapSwitchValue(6, 9, false)
 * 
 *   ---
 * 
 *   Set Map Variable Values:
 * 
 *   setMapVariableValue(mapID, variableID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Replace 'value' with the value you want to set the Map Variable to.
 *   - Example: setMapVariableValue(6, 9, 420)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: Character Sprite Filename Tags
 * ============================================================================
 * 
 * For the files located inside of your project's /img/characters/ folder, if
 * the filenames themselves have specific "tags" in them, special properties
 * will be applied to them. These tags can be combined together with a few
 * exceptions.
 * 
 * Some of these are new to VisuStella MZ, while others are default to MZ.
 * 
 * ---
 * 
 *   !filename.png
 *   - Tag: !
 *   - Causes this character's sprite to align with the tile grid instead of
 *     being lifted a few pixels higher.
 *   - This is primarily used for things like doors, chests, and floor plates.
 *   - Default to RPG Maker MZ.
 * 
 * ---
 * 
 *   $filename.png
 *   - Tag: $
 *   - Causes this character's sprite to use the "big character" format.
 *   - Primarily used for sprites like the big monsters and such which only
 *     have 3x4 cells as opposed to 12x8 cells that regular sprite sheets have.
 *   - Cannot be combined with the [VS8] tag.
 *   - Default to RPG Maker MZ.
 * 
 * ---
 * 
 *   filename[Invisible].png
 *   - Tag: [Invisible] or [Inv]
 *   - This character's sprite will become invisible on the map screen in-game
 *     while almost everything else about it is visible.
 *   - This is used for those who wish to use sprite labels for things such as
 *     autorun and parallel events.
 * 
 * ---
 * 
 *   filename[VS8].png
 *   - Tag: [VS8]
 *   - Converts this sprite into a VisuStella-Style 8-Direction Sprite Sheet.
 *   - Refer to the section below.
 *   - Cannot be combined with the $ tag.
 * 
 * ---
 *
 * ============================================================================
 * Features: VisuStella-Style 8-Directional Sprite Sheets
 * ============================================================================
 *
 * This plugin provides support for the VisuStella-Style 8-Directional Sprite
 * Sheets, also know as VS8. VS8 sprite sheets offer support for walking
 * frames, dashing frames, carrying frames, and emotes.
 *
 * ---
 *
 * To designate a sprite sheet as VS8, simply add [VS8] to the filename.
 * Something like Actor1.png would become Actor1_[VS8].png.
 *
 * ---
 *
 * VS8 sprites are formatted as such. Each block below is a set of 3 frames.
 *
 * Walk Down    Walk DL     Dash Down   Dash DL
 * Walk Left    Walk DR     Dash Left   Dash DR
 * Walk Right   Walk UL     Dash Right  Dash UL
 * Walk Up      Walk UR     Dash Up     Dash UR
 *
 * Carry Down   Carry DL    Ladder      Emotes 3
 * Carry Left   Carry DR    Rope        Emotes 4
 * Carry Right  Carry UL    Emotes 1    Emotes 5
 * Carry Up     Carry UR    Emotes 2    Emotes 6
 *
 * ---
 *
 * Here are how each of the emote sets are grouped from left to right.
 *
 * Emotes 1: Item, Hmph, Victory
 * Emotes 2: Hurt, Kneel, Collapse
 * Emotes 3: !, ?, Music Note
 * Emotes 4: Heart, Anger, Sweat
 * Emotes 5: Cobweb, ..., Light Bulb
 * Emotes 6: Sleep0, Sleep1, Sleep2
 *
 * ---
 *
 * ============================================================================
 * Features: Weighted Random Movement
 * ============================================================================
 * 
 * When creating events to place on the map, you can determine what type of
 * autonomous movement the event will have. When selecting "Random", the event
 * will move randomly across the map.
 * 
 * However, with the way "Random" movement works with the RPG Maker MZ default
 * code, the event is more likely to hit a wall and then hug the said wall as
 * it maps laps around the map's outer borders making it feel very unnatural
 * for any player who's been on the map long enough.
 * 
 * This is where "Weighted Random Movement" comes in. It changes up the random
 * movement behavior to function where the farther the event is, the more
 * likely the event is to step back towards its "home" position (aka where it
 * spawned upon loading the map). This is so that a housewife NPC doesn't
 * suddenly wander off into the middle of an army's training grounds on the
 * same town map.
 * 
 * The event will stay closer to its home value depending on how high the
 * weight's value is. There are a number of ways to adjust the weighted value.
 * 
 * ---
 * 
 * Plugin Parameters > Movement > Event Movement > Random Move Weight
 * 
 * This Plugin Parameter setting allows you to set the default weight for all
 * events with "Random" autonomous movement. It is set at a default value of
 * 0.10 to give the event an understandable degree of freedom.
 * 
 * Lower numbers give events more freedom to move. Larger numbers will make the
 * events stick closer to home.
 * 
 * Change this value to 0 to disable it.
 * 
 * ---
 * 
 * You can customize this individually per event by using Notetags and/or
 * Comment Tags for the events.
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * ============================================================================
 * Notetags and Comment Tags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * Some of these are comment tags. Comment tags are used for events to mark and
 * affect individual event pages rather than the whole event.
 *
 * === Map Notetags ===
 *
 * The following notetags are used for maps only. While some of these options
 * are also available in the Plugin Parameters, some of these notetags extend
 * usage to specific maps marked by these notetags as well.
 *
 * ---
 *
 * <Diagonal Movement: On>
 * <Diagonal Movement: Off>
 *
 * - Used for: Map Notetags
 * - Turns on/off diagonal movement for those maps.
 * - If notetag isn't present, use Plugin Parameter setting.
 *
 * ---
 *
 * <type Allow Region: x>
 * <type Allow Region: x, x, x>
 *
 * <type Forbid Region: x>
 * <type Forbid Region: x, x, x>
 *
 * <type Dock Region: x>
 * <type Dock Region: x, x, x>
 *
 * - Used for: Map Notetags
 * - Replace 'type' with 'All', 'Walk', 'Player', 'Event', 'Vehicle', 'Boat',
 *   'Ship', or 'Airship'.
 * - 'Allow' notetag variants allow that type to pass through them no matter
 *   what other passability settings are in place.
 * - 'Forbid' notetag variants forbid that type from passing through at all.
 * - 'Dock' notetag variants allow vehicles to dock there. Boats and ships must
 *   face the region direction while airships must land directly on top.
 *
 * ---
 * 
 * <Map Load Common Event: x>
 * <Map Load Common Events: x, x, x>
 * 
 * - Used for: Map Notetags
 * - When this map is loaded, run the specified Common Events once available.
 *   - Does NOT trigger if you transfer to a different part of the same map.
 * - Replace 'x' with a number representing the ID of the Common Event you wish
 *   to reserve and run once ready.
 * 
 * ---
 *
 * <Save Event Locations>
 *
 * - Used for: Maps Notetags
 * - Saves the locations of all events on the map so that when you return to
 *   that map at a later point, the events will be in the position they were
 *   last in.
 *
 * ---
 * 
 * <Hide Player>
 * <Show Player>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player sprite. This is so you don't need to
 *   manually turn the setting on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - If the player sprite is hidden, so are the player's followers.
 * - If the player sprite is visible, the player's followers will still depend
 *   on their settings.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * <Hide Followers>
 * <Show Followers>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player's followers. This is so you don't
 *   need to manually turn them on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * === Page Comment Tags ===
 * 
 * The following comment tags are to be put inside of the pages of events,
 * troops, and common events for them to work!
 * 
 * ---
 * 
 * <Page Conditions>
 *   conditions
 *   conditions
 *   conditions
 * </Page Conditions>
 * 
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - This allows you to create custom page conditions that utilize the
 *   Conditional Branch event command to see if the additional page conditions
 *   are met.
 * 
 * ---
 * 
 * <Conditions Met>
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - If used between the <Page Conditions> and </Page Conditions> comment tag,
 *   upon reaching this part of event command list, the custom page conditions
 *   will be considered met.
 * 
 * ---
 * 
 * Example:
 * 
 * ◆Comment：<Page Conditions>
 * ◆If：Reid has equipped Potion Sword
 *   ◆Comment：If Reid has equipped the Potion Sword
 * ：       ：<Condition Met>
 *   ◆
 * ：End
 * ◆Comment：</Page Conditions>
 * 
 * If Reid has the "Potion Sword" weapon equipped, then the additional custom
 * page conditions are met and the event page will be present/active.
 * 
 * If this is a troop condition, the troop page event will activate.
 * 
 * If this is a common event, there will be a parallel common event active.
 * 
 * ---
 *
 * === Event and Event Page Notetags ===
 *
 * The following notetags have comment tag variants (with a few exceptions).
 * If a notetag is used for an event, it will affect the event constantly.
 * If a comment tag is used, it will only affect the page the comment tag is
 * on and only that page.
 *
 * ---
 *
 * <Activation Region: x>
 * <Activation Regions: x,x,x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   standing within a tile marked by a designated region.
 * - Replace 'x' with the regions you wish to remotely activate this event in.
 *   - Action Button: Player must press OK while being in the region.
 *   - Player/Event Touch: Player must step onto the region.
 *   - Autorun/Parallel: Player be in the region.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Activation Square: x>
 * <Activation Circle: x>
 * <Activation Delta: x>
 * <Activation Row: x>
 * <Activation Column: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   within range of its activation type.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Delta: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Always Update Movement>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Events normally have to be within screen range for them to update their
 *   self movement. If this tag is present, the event is always updating.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Click Trigger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to activate upon being clicked on with the mouse.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Copy Event: Map x, Event y>
 * <Copy Event: x, y>
 *
 * <Copy Event: template>
 *
 * - Used for: Event Notetags ONLY
 * - Makes this event copy all of the event settings from a different event
 *   that can be found on a different map (as long as that map is registered
 *   inside of Plugin Parameters => Event Template Settings => Preloaded Maps).
 * - Replace 'x' with a number representing the copied event's Map ID.
 *   - If '0' is used for the Map ID, reference the current map.
 * - Replace 'y' with a number representing the copied event's Event ID.
 * - For the 'template' variant, replace 'template' with the name of the
 *   template made in Plugin Parameters => Event Template Settings =>
 *   Event Template List.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 *
 * ---
 * 
 * <Custom Z: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number value to determine the event sprite's Z value
 *   relative to the tilemap.
 * - For reference from rmmz_core.js:
 *   - 0 : Lower tiles
 *   - 1 : Lower characters
 *   - 3 : Normal characters
 *   - 4 : Upper tiles
 *   - 5 : Upper characters
 *   - 6 : Airship shadow
 *   - 7 : Balloon
 *   - 8 : Animation
 *   - 9 : Destination
 * - You can use numbers below 0 and above 9.
 *   - Values under 0 go below the tilemap.
 *   - Values above 9 go above everything else on the tilemap.
 *   - These values do NOT go below or above other screen objects that are
 *     NOT attached to the tilemap layer such as parallaxes or weather or
 *     windows because that's simply not how z-axis work with sprite layers.
 * 
 * ---
 * 
 * <Encounter Half Square: x>
 * <Encounter Half Circle: x>
 * <Encounter Half Delta: x>
 * <Encounter Half Row: x>
 * <Encounter Half Column: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If the player is within the 'x' area effect of this event, the random
 *   encounter rate will be halved.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Delta: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * Script Call Check:
 * 
 *   $isTileEncounterHalf(x, y)
 * 
 * - This can be used to check if a certain map tile (x, y) has an encounter
 *   rate halving effect on it.
 * - Returns a boolean (true or false) when used.
 * 
 * ---
 * 
 * <Encounter None Square: x>
 * <Encounter None Circle: x>
 * <Encounter None Delta: x>
 * <Encounter None Row: x>
 * <Encounter None Column: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If the player is within the 'x' area effect of this event, the random
 *   encounter rate will be suppressed completely.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Delta: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * Script Call Check:
 * 
 *   $isTileEncounterNone(x, y)
 * 
 * - This can be used to check if a certain map tile (x, y) has an encounter
 *   rate suppression effect on it.
 * - Returns a boolean (true or false) when used.
 * 
 * ---
 * 
 * <Erase if Encounter Half>
 * <Erase if Encounter None>
 * 
 * - Used for: Event Notetags ONLY
 * - Automatically erase this event if the player's party has an encounter half
 *   or encounter none effect, or if the event has spawned in an encounter half
 *   or encounter none area.
 * - This check only occurs in two situations: when the map is first loaded
 *   after being teleported into or when the player leaves a menu and returns
 *   back to the map.
 * - Events that have been erased due to this effect will NOT return even if
 *   the encounter half/none effect is removed while the player is still on the
 *   map. The event will return if the player exits the map and comes back.
 * 
 * ---
 * 
 * <Exit Reset Self Data>
 * 
 * - Used for: Event Notetags ONLY
 * - When the player leaves the current map, all Self Switches and Self
 *   Variables related to this event will be reset.
 * 
 * ---
 *
 * <Hitbox Left: x>
 * <Hitbox Right: x>
 * <Hitbox Up: x>
 * <Hitbox Down: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number to extend the hitbox of the event by that many
 *   tiles towards the listed direction.
 * - Use multiples of this notetag to extend them to different directions.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with the Icon ID you wish to put above this event.
 * - This will not override any Icons designated to the ID through a
 *   Plugin Command.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon Buffer X: +x>
 * <Icon Buffer X: -x>
 *
 * <Icon Buffer Y: +x>
 * <Icon Buffer Y: -x>
 *
 * <Icon Buffer: +x, +y>
 * <Icon Buffer: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the icon on the envent by buffers.
 * - Replace 'x' and 'y' with the values to adjust the position buffers by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label: text>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - Text codes can be used.
 *   - If text codes are used, avoid text codes that use < and > wrappers.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label>
 * text
 * text
 * </Label>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - This can display multiple lines.
 * - Text codes can be used.
 *   - You can use text codes with < and > wrappers.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets a range requirement for the player to be in order for the event's
 *   label to appear.
 * - Replace 'x' with a number value depicting the range in tiles.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Offset X: +x>
 * <Label Offset X: -x>
 *
 * <Label Offset Y: +x>
 * <Label Offset Y: -x>
 *
 * <Label Offset: +x, +y>
 * <Label Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the label on the envent by offsets.
 * - Replace 'x' and 'y' with the values to adjust the position offsets by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Label Hue Shift: +x>
 * <Label Hue Shift: -x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the hue of the event label by +x or -x every frame.
 *   - Keep in mind that since this is changing hue, this will appear to have
 *     no effect if you are using black and white labels.
 *   - Use labels with text codes that add color to them like '\C[4]text'
 * - This only works with the sprite version of event labels and does not work
 *   with the legacy version.
 * 
 * ---
 * 
 * <Mirror Sprite>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event sprite's visual appearance is mirrored.
 * 
 * ---
 * 
 * <Move Only Region: x>
 * <Move Only Regions: x,x,x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the move range of this event to only the region(s) marked by the
 *   notetag(s) or comment tag(s).
 * - This will bypass terrain passability.
 * - This will not bypass event collision.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Move Synch Target: Player>
 *
 * <Move Synch Target: Event x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Synchronizes the movement of this event with a target (either the player
 *   or another event). This event will only move whenever the synchronized
 *   target moves.
 * - For 'Event x' variant, replace 'x' with the ID of the event to synch to.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Type: Random>
 * <Move Synch Type: Approach>
 * <Move Synch Type: Away>
 * <Move Synch Type: Custom>
 *
 * <Move Synch Type: Mimic>
 * <Move Synch Type: Reverse Mimic>
 *
 * <Move Synch Type: Mirror Horizontal>
 * <Move Synch Type: Mirror Vertical>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Choose the type of movement the event will have if it is synchronized to
 *   a target.
 *   - Random: Move to a random position.
 *   - Approach: Approaches target.
 *   - Away: Flees from target.
 *   - Custom: Follows a custom move route.
 *   - Mimic: Imitates the target's movement style.
 *   - Reverse Mimic: Does the opposite of the target's movement.
 *   - Mirror Horizontal: Moves as if a mirror is placed horizontally.
 *   - Mirror Vertical: Moves as if a mirror is placed vertically.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Delay: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is present, the event will wait a bit after each move before
 *   moving again.
 * - Replace 'x' with the number of movement instances in between.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Move Synch Distance Opacity: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the opacity of the event based on the distance between it and its
 *   move synched target. Closer means more opaque. Further away means more
 *   transparent.
 * - Replace 'x' with a number representing the opacity change per pixel
 *   distance away. 'x' can use decimal values like 1.05 and 1.5.
 * 
 * ---
 * 
 * <Picture Filename: filename>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Applies a picture graphic from the /img/pictures/ folder of your project.
 * - This graphic will be on top of the character sprite but below the event
 *   icon sprite.
 *   - The picture priority will be the same as the event's priority.
 *   - If it is "below characters", the player can walk on top of it.
 *   - If it is "above characters", the player will behind it.
 *   - If it is "same as characters", the priority will be based on the
 *     current relative Y position. This also means, if the picture is big
 *     enough, it can clip into the top of tree tiles and such.
 * - Replace 'filename' with a filename from the game project's /img/pictures/
 *   folder. This is case sensitive. Do NOT include the file extension.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Max Size: x>
 * <Picture Scale: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - If the "Max Size" or "Scale" supplementary notetags are used, the picture
 *   graphic will be scaled proportionally to fit either the exact pixel size
 *   for "Max Size" or the "Scale" ratio.
 *   - Both the "Max Size" and "Scale" notetags require the "Filename" notetag.
 * - Replace 'x' with a number value representing the exact pixel size for the
 *   "Max Size" notetag.
 * - Replace 'y' with a number value representing the scale on which to shrink
 *   or enlarge the picture. 100% is normal size. 50% is half size. 200% is
 *   double size.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Picture Offset X: +x>
 * <Picture Offset X: -x>
 *
 * <Picture Offset Y: +x>
 * <Picture Offset Y: -x>
 *
 * <Picture Offset: +x, +y>
 * <Picture Offset: -x, -y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Offsets the X and Y position of the event picture relative to the event
 *   sprite's own position.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Wait Frames: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Requires VisuMZ_4_AnimatedPictures!
 * - "Wait Frames" is used with VisuMZ's Animated Pictures plugin. This
 *   determines the delay inbetween frame changes.
 * - Replace 'x' with a number representing the amount of frames to wait
 *   inbetween frame changes.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Playtest>
 * 
 * - Used for: Event Notetags.
 * - This does NOT work when it's in the Event Page Comment Tags.
 * - If this notetag is found in the event's notebox (NOT comments), then the
 *   event will only appear during a playtest session. It will not appear in a
 *   deployed game where the playtest flag is not on.
 * 
 * ---
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * ---
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * <Save Event Location>
 *
 * - Used for: Event Notetags ONLY
 * - Saves the locations of the event on the map so that when you return to
 *   that map at a later point, the event will be in the position it was
 *   last in.
 *
 * ---
 *
 * <Hide Shadow>
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Hides the shadow for the event.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Scale: x%>
 * 
 * <Scale X: x%>
 * <Scale Y: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the scale of the sprite to the designated size.
 * - For <Scale: x%> variant: replace 'x' with a number representing the
 *   scaling overall percentage to be used.
 * - For <Scale X: x%> variant, replace 'x' with a number representing the x
 *   factor for the horizontal scaling percentage to be used.
 * - For <Scale Y: y%> variant, replace 'y' with a number representing the y
 *   factor for the vertical scaling percentage to be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Shadow Filename: filename>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replaces the shadow graphic used with 'filename' found in the
 *   img/system/ project folder.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Sprite Offset X: +x>
 * <Sprite Offset X: -x>
 *
 * <Sprite Offset Y: +x>
 * <Sprite Offset Y: -x>
 *
 * <Sprite Offset: +x, +y>
 * <Sprite Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes how much the event's sprite is visibly offset by.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Step Pattern: Left to Right>
 * <Step Pattern: Right to Left>
 *
 * <Step Pattern: Spin Clockwise>
 * <Step Pattern: Spin CW>
 *
 * <Step Pattern: Spin CounterClockwise>
 * <Step Pattern: Spin CCW>
 * <Step Pattern: Spin AntiClockwise>
 * <Step Pattern: Spin ACW>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the way the event animates if a tag is present.
 *   - Left to Right: Makes the event sprite's step behavior go from frame 0 to
 *     1 to 2, then back to 0 instead of looping backward.
 *   - Right to Left: Makes the event sprite's step behavior go from frame 2 to
 *     1 to 0, then back to 2 instead of looping forward.
 *   - Spin Clockwise: Makes the event sprite's step behavior spin CW.
 *   - Spin CounterClockwise: Makes the event sprite's step behavior spin CCW.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Auto Movement Plugin Commands ===
 * 
 * ---
 *
 * Auto Movement: Events
 * - Allow/stop events from auto movement.
 *
 *   Value:
 *   - Allow events to move automatically?
 *
 * ---
 * 
 * === Call Event Plugin Commands ===
 * 
 * ---
 *
 * Call Event: Remote Read
 * - Runs the page of a different event remotely.
 * - This will run the page of the target event on the CURRENT event.
 * - This means that any "This Event" commands will be applied to the event
 *   using this Plugin Command and NOT the target event that page data is being
 *   retrieved from.
 * - Think of it as the current event using the target called event as a
 *   Common Event ala how RPG Maker 2003 works (for those familiar with it).
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Page ID:
 *   - The page of the remote event to run.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Dash Plugin Commands ===
 * 
 * ---
 *
 * Dash Enable: Toggle
 * - Enable/Disable Dashing on maps.
 *
 *   Value:
 *   - What do you wish to change dashing to?
 *
 * ---
 * 
 * === Event Icon Plugin Commands ===
 * 
 * ---
 *
 * Event Icon: Change (Temporary)
 * - Change the icon that appears on an event.
 * - This change is temporary and resets upon new events.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Change (Forced)
 * - Change the icon that appears on an event.
 * - This change is forced and needs to be restored.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Delete
 * - Delete the icon that appears on an event.
 * - This will remain deleted and invisible for events.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * Event Icon: Restore
 * - Restores a deleted or forced icon that appears on an event.
 * 
 *   Map ID: 
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * === Event Label Plugin Commands ===
 * 
 * ---
 *
 * Event Label: Refresh
 * - Refresh all Event Labels on screen.
 * - This is used to refresh page conditions for map changes that don't
 *   force a refresh.
 *
 * ---
 *
 * Event Label: Visible
 * - Change the visibility of Event Labels.
 *
 *   Visibility:
 *   - What do you wish to change visibility to?
 *
 * ---
 * 
 * === Event Location Plugin Commands ===
 * 
 * ---
 *
 * Event Location: Save
 * - Memorize an event's map location so it reappears there the next time the
 *   map is loaded.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Delete
 * - Deletes an event's saved map location.
 * - The event will reappear at its default location.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *   
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Create
 * - Creates a custom spawn location for a specific map's event so it appears
 *   there the next time the map is loaded.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   X Coordinate:
 *   - The X coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - The Y coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Direction:
 *   - The direction the event will be facing.
 *
 *   Optional:
 *
 *     Page ID:
 *     - The page of the event to set the move route to.
 *     - You may use JavaScript code.
 *
 *     Move Route Index:
 *     - The point in the move route for this event to be at if the page ID
 *       matches the rest of the page conditions.
 *
 * ---
 * 
 * === Event Popup Plugin Commands ===
 * 
 * ---
 * 
 * Event Popup: Player
 * - Makes a centered event popup on the player sprite.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second. You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Event Popup: Follower
 * - Makes a centered event popup on target follower sprite.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Follower Index:
 *   - Which follower index to play popup?
 *   - Index starts at 0.
 *   - You may use JavaScript code.
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second.
 *   - You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Event Popup: Event
 * - Makes a centered event popup on target event sprite.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Event ID:
 *   - The ID of the event to play popup on.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second. You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Event Popup: Target Tile
 * - Makes a centered event popup on target tile.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Map Tile X:
 *   Map Tile Y:
 *   - The x/y coordinate of the map tile.
 *   - You may use JavaScript code.
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second. You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Popup Settings
 * 
 *   Fade Settings:
 * 
 *     Fade In Duration:
 *     - How many frames does it take to fade in?
 *     - 60 frames = 1 second.
 * 
 *     Fade Out Duration:
 *     - How many frames does it take to fade out?
 *     - 60 frames = 1 second.
 * 
 *   Offset Settings:
 * 
 *     Starting Offset X:
 *     - Offsets the starting x position.
 *     - Negative: left. Positive: right.
 *     - You may use code.
 * 
 *     Starting Offset Y:
 *     - Offsets the starting y position. 
 *     - Negative: up. Positive: down.
 *     - You may use code.
 * 
 *     Ending Offset X:
 *     - Offsets the ending x position. 
 *     - Negative: left. Positive: right.
 *     - You may use code.
 * 
 *     Ending Offset Y:
 *     - Offsets the ending y position. 
 *     - Negative: up. Positive: down.
 *     - You may use code.
 * 
 *   Scaling Settings:
 * 
 *     Starting Scale X:
 *     - What is the starting scale x?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *     Starting Scale Y:
 *     - What is the starting scale y?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *     Ending Scale X:
 *     - What is the ending scale x?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *     Ending Scale Y:
 *     - What is the ending scale y?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *   Angle Settings:
 * 
 *     Starting Offset Angle:
 *     - What is the starting angle offset?
 *     - Use numbers between 0 and 360.
 *     - You may use code.
 * 
 *     Ending Offset Angle:
 *     - What is the ending angle offset?
 *     - Use numbers between 0 and 360.
 *     - You may use code.
 * 
 *   Misc Settings:
 * 
 *     Arc Peak:
 *     - This is the height of the popup's trajectory arc in pixels.
 *     - Positive: up. Negative: down.
 *     - You may use code.
 * 
 * ---
 * 
 * === Event Timer Plugin Commands ===
 * 
 * ---
 *
 * Event Timer: Change Speed
 * - Changes the timer frame decrease (or increase) speed.
 *
 *   Speed:
 *   - How many 1/60ths of a second does each frame increase or decrease by?
 *   - Negative decreases.
 *   - Positive increases.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Expire Event Assign
 * - Sets a Common Event to run upon expiration.
 * - Bypasses the default code if one is set.
 *
 *   Common Event ID:
 *   - Select the Common Event to run upon the timer's expiration.
 *
 * ---
 *
 * Event Timer: Expire Event Clear
 * - Clears any set to expire Common Event and instead, run the default
 *   Game_Timer expiration code.
 *
 * ---
 *
 * Event Timer: Frames Gain
 * - Chooses how many frames, seconds, minutes, or hours are gained or lost for
 *   the event timer.
 *
 *   Frames:
 *   - How many 1/60ths of a second are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - How many seconds are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - How many minutes are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - How many hours are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Frames Set
 * - Chooses how many frames, seconds, minutes, or hours are set for the event
 *   timer.
 *
 *   Frames:
 *   - Set frame count to this value.
 *   - Each frame is 1/60th of a second.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - Set seconds to this value.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - Set minutes to this value.
 *   - Each minute is 60 seconds.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - Set hours to this value.
 *   - Each hour is 60 minutes.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Pause
 * - Pauses the current event timer, but does not stop it.
 *
 * ---
 *
 * Event Timer: Resume
 * - Resumes the current event timer from the paused state.
 *
 * ---
 * 
 * === Follower Control Plugin Commands ===
 * 
 * ---
 *
 * Follower: Set Global Chase
 * - Disables all followers from chasing the player or reenables it.
 *
 *   Chase:
 *   - Sets all followers to chase the player or not.
 *
 * ---
 *
 * Follower: Set Target Chase
 * - Disables target follower from chasing the player or reenables it.
 *
 *   Follower ID:
 *   - Select which follower ID to disable/reenable chasing for.
 *
 *   Chase:
 *   - Sets target follower to chase its target or not.
 *
 * ---
 *
 * Follower: Set Control
 * - Sets the event commands to target a follower when "Player" is selected as
 *   the target.
 *
 *   Follower ID:
 *   - Select which follower ID to control.
 *   - 0 is the player.
 *
 * ---
 *
 * Follower: Reset
 * - Resets all follower controls. Event Commands that target the "Player"
 *   return to normal and followers chase again.
 *
 * ---
 * 
 * === Global Switch Plugin Commands ===
 * 
 * ---
 * 
 * Global Switch: Get Self Switch A B C D
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Letter:
 *   - Letter of the target event's Self Switch to obtain data from.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * Global Switch: Get Self Switch ID
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Switch ID:
 *   - The ID of the source switch.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * === Global Variable Plugin Commands ===
 * 
 * ---
 * 
 * Global Variable: Get Self Variable ID
 * - Gets the current stored value from a Self Variable and stores it onto a
 *   Global Variable.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Variable ID:
 *   - The ID of the source variable.
 * 
 *   -
 * 
 *   Target Variable ID:
 *   - The ID of the target variable.
 * 
 * ---
 * 
 * === Morph Event Plugin Commands ===
 * 
 * ---
 *
 * Morph Event: Change
 * - Runs the page of a different event remotely.
 *
 *   Step 1:
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Template Name:
 *     - Name of the target event template to morph into.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *     Preserve Morph:
 *     - Is the morph effect preserved?
 *     - Or does it expire upon leaving the map?
 *
 * ---
 *
 * Morph Event: Remove
 * - Remove the morph status of an event.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Remove Preservation:
 *   - Also remove the preservation effect?
 *
 * ---
 * 
 * === Player Icon Plugin Commands ===
 * 
 * ---
 *
 * Player Icon: Change
 * - Change the icon that appears on on the player.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Player Icon: Delete
 * - Delete the icon that appears on the player.
 *
 * ---
 * 
 * === Player Movement Plugin Commands ===
 * 
 * ---
 * 
 * Player Movement: Control
 * - Enable or disable player control over the player character's movement.
 * 
 *   Enable?:
 *   - Let the player control where the player character moves?
 * 
 * ---
 * 
 * Player Movement: Diagonal
 * - Override settings to for player diagonal movement.
 * 
 *   Setting:
 *   - How do you want to change diagonal movement?
 *   - Default: Whatever the Map Uses
 *   - Forcefully Disable Diagonal Movement
 *   - Forcefully Enable Diagonal Movement
 * 
 * ---
 * 
 * === Self Data Plugin Commands ===
 * 
 * ---
 * 
 * Self Data: Reset All
 * - Reset the Self Switch and Self Variable data of all events within the
 *   specified map.
 * 
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * === Self Switch Plugin Commands ===
 * 
 * ---
 *
 * Self Switch: A B C D
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Letter:
 *   - Letter of the target event's Self Switch to change.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 *
 * Self Switch: Switch ID
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Switch ID:
 *   - The ID of the target switch.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Self Variable Plugin Commands ===
 * 
 * ---
 *
 * Self Variable: Variable ID
 * - Change the Self Variable of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Variable ID:
 *   - The ID of the target variable.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Spawn Event Plugin Commands ===
 * 
 * ---
 *
 * Spawn Event: Spawn At X, Y
 * - Spawns desired event at X, Y location on the current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     X Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Y Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Region
 * - Spawns desired event at a random region-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Region ID(s):
 *     - Pick region(s) to spawn this event at.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Terrain Tag
 * - Spawns desired event at a random terrain tag-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Terrain Tag(s):
 *     - Pick terrain tag(s) to spawn this event at.
 *     - Insert numbers between 0 and 7.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Despawn Event ID
 * - Despawns the selected Event ID on the current map.
 *
 *   Event ID
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn At X, Y
 * - Despawns any spawned event(s) at X, Y location on the current map.
 *
 *   X Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn Region(s)
 * - Despawns the selected Region(s) on the current map.
 *
 *   Region ID(s):
 *   - Pick region(s) and despawn everything inside it.
 *
 * ---
 *
 * Spawn Event: Despawn Terrain Tag(s)
 * - Despawns the selected Terrain Tags(s) on the current map.
 *
 *   Terrain Tag(s):
 *   - Pick terrain tag(s) and despawn everything inside it.
 *   - Insert numbers between 0 and 7.
 *
 * ---
 *
 * Spawn Event: Despawn Everything
 * - Despawns all spawned events on the current map.
 *
 * ---
 *
 * ============================================================================
 * Move Route Custom Commands
 * ============================================================================
 *
 * Some custom commands have been added to the "Set Movement Route" event
 * command. These can be accessed by pressing the "Script..." command and
 * typing in the following, which don't need to be in code form.
 *
 * Keep in mind that since these are custom additions and RPG Maker MZ does not
 * allow plugins to modify the editor, the "Preview" button will not factor in
 * the effects of these commands.
 * 
 * If you wish to use a value from a variable, insert $gameVariables.value(x)
 * or \V[x] in place of the x in any of the below.
 * 
 * If you wish to use a value from a self variable, insert \SelfVar[x] in place
 * of the x in any of the below. This will only draw from the current event. If
 * you wish to draw data from outside event self variables, we recommend you
 * use the \V[x] variant after using the Plugin Commands to draw data from them
 * for the best accuracy.
 *
 * ---
 * 
 * Animation: x
 * - Replace 'x' with the ID of the animation to play on moving unit.
 *
 * ---
 * 
 * Balloon: name
 * - Replace 'name' with any of the following to play a balloon on that the
 *   target moving unit.
 * - '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep', 'User-Defined 1', 'User-Defined 2',
 *   'User-Defined 3', 'User-Defined 4', 'User-Defined 5'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: !
 *   - Balloon: Sleep
 *   - Balloon: Heart
 *
 * ---
 * 
 * Fade In: x
 * Fade Out: x
 * - Fades in/out the sprite's opacity.
 * - Fade In will continuously raise the opacity level until it reaches 255.
 * - Fade Out will continuously lower the opacity level until it reaches 0.
 * - Replace 'x' with the speed to fade in/out the sprite.
 * 
 * ---
 * 
 * Force Carry: On
 * Force Carry: Off
 * - For usage with the VS8 sprite sheet.
 * - Use ON to turn force carrying on.
 * - Use OFF to turn force carrying off.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Carry frames.
 * 
 * ---
 * 
 * Force Dash: On
 * Force Dash: Off
 * - Use ON to turn force dashing on.
 * - Use OFF to turn force dashing off.
 * - Forces dashing will prompt the player or event to be in the dashing state.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Dashing frames.
 * 
 * ---
 * 
 * Hug: Left
 * Hug: Right
 * - Causes the moving unit to hug the left/right side of the wall.
 *
 * ---
 * 
 * Index: x
 * - Replace 'x' with a number depicting the character index to change the
 *   moving unit's sprite to.
 *
 * ---
 * 
 * Index: +x
 * Index: -x
 * - Replace 'x' with the value to change the character index of the moving
 *   unit's sprite by.
 *
 * ---
 * 
 * Jump Forward: x
 * - Replace 'x' with the number of tiles for the unit to jump forward by.
 *
 * ---
 * 
 * Jump To: x, y
 * - Replace 'x' and 'y' with the coordinates for the unit to jump to.
 *
 * ---
 * 
 * Jump to Event: x
 * - Replace 'x' with the ID of the event for the unit to jump to.
 *
 * ---
 * 
 * Jump to Player
 * - Causes the moving unit to jump to the player.
 *
 * ---
 * 
 * Jump To Home
 * - Causes the event to jump to its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Move Lower Left Until Stop
 * Move Down Until Stop
 * Move Lower Right Until Stop
 * Move Left Until Stop
 * Move Right Until Stop
 * Move Upper Left Until Stop
 * Move Up Until Stop
 * Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events will stop moving before they make contact with the player.
 *
 * ---
 * 
 * Crash Move Lower Left Until Stop
 * Crash Move Down Until Stop
 * Crash Move Lower Right Until Stop
 * Crash Move Left Until Stop
 * Crash Move Right Until Stop
 * Crash Move Upper Left Until Stop
 * Crash Move Up Until Stop
 * Crash Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Player
 * - Moves the unit to the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Crash Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 * 
 * ---
 * 
 * Move Lower Left: x
 * Move Down: x
 * Move Lower Right: x
 * Move Left: x
 * Move Right: x
 * Move Upper Left: x
 * Move Up: x
 * Move Upper Right: x
 * - Replace 'x' with the number of times to move the unit by in the designated
 *   direction on the map.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Opacity: x%
 * - Replace 'x' with the percentage to change the unit's sprite opacity to.
 *
 * ---
 * 
 * Opacity: +x
 * Opacity: -x
 * - Replace 'x' with the increment to change the unit's sprite opacity by.
 *
 * ---
 *
 * Pattern Lock: x
 * - Replace 'x' with the step pattern to lock the unit's sprite to.
 *
 * ---
 *
 * Pattern Unlock
 * - Removes pattern lock effect.
 *
 * ---
 * 
 * Pose: name
 * - If using a VS8 sprite, this will cause the unit to strike a pose.
 * - Replace 'name' with any the following:
 * - 'Item', 'Hmph', 'Victory', 'Hurt', 'Kneel', 'Collapse',
 *   '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: Item
 *   - Balloon: Victory
 *   - Balloon: ?
 *
 * ---
 * 
 * Step Toward: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step towards.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Player
 * - Causes event to take one step towards the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Home
 * - Causes the event to take one step towards its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Step Away From: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step away from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Player
 * - Causes event to take one step away from the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Home
 * - Causes the event to take one step away from its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Turn To: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Event: x
 * - Replace 'x' with the ID of the event to turn the unit towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Player
 * - Causes the unit to turn towards the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Home
 * - Causes the event to turn towards its home position.
 * - This refers to the original position's X/Y on the map.
 * - The event will turn and face the tile that is its original X/Y location.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Away From: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Event: x
 * - Replace 'x' with the ID of the event to turn the unit away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Player
 * - Causes the unit to turn away from the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Home
 * - Causes the event to turn away from its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Lower Left
 * Turn Lower Right
 * Turn Upper Left
 * Turn Upper Right
 * - Causes the unit to turn to one of the diagonal directions.
 *
 * ---
 * 
 * Self Switch x: On
 * Self Switch x: Off
 * Self Switch x: Toggle
 * - Replace 'x' with 'A', 'B', 'C', 'D', or a <Self> Switch ID to adjust the
 *   unit's Self Switch.
 *
 * ---
 * 
 * Self Variable x: y
 * - Replace 'x' with a <Self> Variable ID to adjust the unit's Self Variable.
 * - Replace 'y' with a number value to set the Self Variable to.
 *
 * ---
 * 
 * Teleport To: x, y
 * - Replace 'x' and 'y' with the coordinates to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Event: x
 * - Replace 'x' with the ID of the event to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Player
 * - Instantly moves the unit to the player's location.
 *
 * ---
 * 
 * Teleport to Home
 * - Instantly teleports an event to its home position on the map.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * If none of the commands are detected above, then a script call will be ran.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Label Settings
 * ============================================================================
 *
 * Event Labels are small windows created to display text over an event's head.
 * They're set up using the <Label> notetags and/or comment tags. Event Labels
 * are a great way to instantly relay information about the event's role to
 * the player.
 *
 * ---
 *
 * Event Labels
 * 
 *   Sprite Based?:
 *   - Use sprite-based labels instead of legacy-window version.
 *   - Legacy-window version will not be supported in future.
 *   - Sprite-based labels are more memory efficient and work better
 *     compatibility-wise.
 * 
 *   Mobile-Enabled?:
 *   - Enable event labels for mobile devices?
 * 
 *   Font Size:
 *   - The font size used for the Event Labels.
 * 
 *   Icon Size:
 *   - The size of the icons used in the Event Labels.
 * 
 *   Line Height:
 *   - The line height used for the Event Labels.
 * 
 *   Offset X:
 *   - Globally offset all labels horizontally by this amount.
 * 
 *   Offset Y:
 *   - Globally offset all labels vertically by this amount.
 * 
 *   Fade Speed:
 *   - Fade speed for labels.
 * 
 *   Visible Range:
 *   - Range the player has to be within the event to make its label visible.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Icon Settings
 * ============================================================================
 *
 * Icons can be displayed over an event's head through the <Icon> notetags
 * and/or comment tags. These can be used for a variety of things such as
 * making them look like they're carrying an item or to indicate they have a
 * specific role.
 *
 * ---
 *
 * Event Icon
 * 
 *   Buffer X:
 *   - Default X position buffer for event icons.
 * 
 *   Buffer Y:
 *   - Default Y position buffer for event icons.
 * 
 *   Blend Mode:
 *   - Default blend mode for even icons.
 *     - 0 - Normal
 *     - 1 - Additive
 *     - 2 - Multiply
 *     - 3 - Screen
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Template Settings
 * ============================================================================
 *
 * Event Templates allow you to store specific maps and/or event data to bring
 * out on need while having a premade set base. They're similar to prefabs but
 * aren't things that can be altered individually as one setting for an event
 * template will serve as a blueprint for all of them that use them.
 *
 * Event Templates are used for the <Copy Event> notetags, the Morph Event and
 * Spawn Event Plugin Commands.
 *
 * ---
 *
 * Settings
 * 
 *   Preloaded Maps:
 *   - A list of all the ID's of the maps that will be preloaded to serve as
 *     template maps for this plugin.
 *
 * ---
 *
 * Templates
 * - A list of all the Event Templates used by this project. Used for notetags
 *   and Plugin Commands.
 * 
 *     Name:
 *     - Name of the template. It'll be used as anchor points for notetags and
 *       Plugin Commands.
 * 
 *     Map ID:
 *     - ID of the map the template event is stored on.
 *     - This will automatically add this ID to preloaded list.
 * 
 *     Event ID:
 *     - ID of the event the template event is based on.
 * 
 *     JavaScript:
 *       JS: Pre-Copy:
 *       JS: Post-Copy:
 *       JS: Pre-Morph:
 *       JS: Post-Morph:
 *       JS: Pre-Spawn:
 *       JS: Post-Spawn:
 *       - Code that's ran during certain circumstances.
 *       - The code will occur at the same time as the ones listed in the main
 *         Event Template Settings Plugin Parameters. However, the ones listed
 *         in these individual entries will only occur for these specific
 *         templates and only if the templates are used.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: Pre-Copy:
 *   JS: Post-Copy:
 *   JS: Pre-Morph:
 *   JS: Post-Morph:
 *   JS: Pre-Spawn:
 *   JS: Post-Spawn:
 *   - Code that's ran during certain circumstances.
 *   - These are global and are ran for all copies, morphs, and/or spawns.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Movement Settings
 * ============================================================================
 *
 * These plugin parameters allow you to control how movement works in your
 * game, toggling it from 4-directional to 8-directional, setting up rules to
 * stop self-movement from events while an event or message is present, and
 * other aesthetics such as tilting the sprite while dashing, setting shadows
 * beneath the sprites, and allow for turning in place.
 *
 * ---
 *
 * 8 Directional Movement
 * 
 *   Enable:
 *   - Allow 8-directional movement by default? Players can move diagonally.
 * 
 *   Strict Collision:
 *   - Enforce strict collission rules where the player must be able to pass
 *     both cardinal directions?
 * 
 *   Favor Horizontal:
 *   - Favor horizontal if cannot pass diagonally but can pass both
 *     horizontally and vertically?
 * 
 *   Slower Diagonals?
 *   - Enforce a slower movement speed when moving diagonally?
 * 
 *     Speed Multiplier
 *     - What's the multiplier to adjust movement speed when moving diagonally?
 *
 * ---
 *
 * Automatic Movement
 * 
 *   Stop During Events:
 *   - Stop automatic event movement while events are running.
 * 
 *   Stop During Messages:
 *   - Stop automatic event movement while a message is running.
 *
 * ---
 * 
 * Bitmap
 * 
 *   Smoothing:
 *   - Do you want to smooth or pixelate the map sprites?
 *   - Pixelating them is better for zooming and tilting.
 * 
 * ---
 *
 * Dash
 * 
 *   Dash Modifier:
 *   - Alters the dash speed modifier.
 * 
 *   Dash on Ladder?
 *   - Allow dashing while on a ladder or rope?
 * 
 *   Enable Dash Tilt?:
 *   - Tilt any sprites that are currently dashing?
 * 
 *     Tilt Left Amount:
 *     - Amount in radians when moving left (upper left, left, lower left).
 * 
 *     Tilt Right Amount:
 *     - Amount in radians when moving right (upper right, right, lower right).
 * 
 *     Tilt Vertical Amount:
 *     - Amount in radians when moving vertical (up, down).
 *
 * ---
 * 
 * Event Movement
 * 
 *   Random Move Weight:
 *   - Use numbers between 0 and 1.
 *   - Numbers closer to 1 stay closer to their home position.
 *   - 0 to disable it.
 * 
 *   Shift Y:
 *   - How many pixels should non-tile characters be shifted by?
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Path Finding
 * 
 *   Mobile-Enabled?:
 *   - Enable diagonal pathfinding for mobile devices?
 * 
 * ---
 *
 * Shadows
 * 
 *   Show:
 *   - Show shadows on all events and player-related sprites.
 * 
 *   Default Filename:
 *   - Default filename used for shadows found in img/system/ folder.
 *
 * ---
 *
 * Turn in Place
 * 
 *   Enable:
 *   - When not dashing, player will turn in place before moving.
 *   - This only applies with keyboard inputs.
 * 
 *   Delay in Frames:
 *   - The number of frames to wait before moving.
 *
 * ---
 * 
 * Vehicle Speeds
 * 
 *   Boat Speed:
 *   - Allows you to adjust the base speed of the boat vehicle.
 * 
 *   Ship Speed:
 *   - Allows you to adjust the base speed of the ship vehicle.
 * 
 *   Airship Speed:
 *   - Allows you to adjust the base speed of the airship vehicle.
 * 
 * ---
 * 
 * Wall Bump
 * 
 *   Enable?:
 *   - Enable the sound effect to be played when bumping into a wall?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: VisuStella 8-Dir Settings
 * ============================================================================
 *
 * These are settings for sprite sheets using the VS8 format.
 * For more information on the VS8 format, look in the help section above.
 *
 * ---
 *
 * Balloon Icon Settings
 * 
 *   Auto-Balloon Poses:
 *   - Automatically pose VS8 sprites when using balloon icons.
 * 
 *   Balloon Offset X:
 *   - Offset balloon icons on VS8 sprites by x pixels.
 * 
 *   Balloon Offset Y:
 *   - Offset balloon icons on VS8 sprites by y pixels.
 *
 * ---
 *
 * Icons
 * 
 *   Auto Buffer:
 *   - Automatically buffer the X and Y coordinates of VS8 sprites?
 * 
 *   Use Carry Pose:
 *   - Use the carry pose when moving with an icon overhead.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Region Rulings
 * ============================================================================
 *
 * These settings allow you to decide the passability of the player, events,
 * and various vehicles through the usage of Regions.
 *
 * ---
 *
 * Allow Regions
 * 
 *   All Allow:
 *   Walk Allow:
 *   Player Allow:
 *   Event Allow:
 *   Vehicle Allow:
 *   Boat Allow:
 *   Ship Allow:
 *   Airship Allow:
 *   - Insert Region ID's where the affected unit type can enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Forbid Regions
 * 
 *   All Forbid:
 *   Walk Forbid:
 *   Player Forbid:
 *   Event Forbid:
 *   Vehicle Forbid:
 *   Boat Forbid:
 *   Ship Forbid:
 *   Airship Forbid:
 *   - Insert Region ID's where the affected unit type cannot enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Dock Regions
 * 
 *   Vehicle Dock:
 *   Boat Dock:
 *   Ship Dock:
 *   Airship Dock:
 *   - Insert Region ID's where the affected vehicle can dock
 *   - Region ID's range from 0 to 255.
 * 
 *   Only Region Dockable:
 *   - Vehicles are only able to dock at designated regions.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on OK Button
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that activate using
 * Regions when pressing the OK button while standing on top of them or in
 * front of them. These let you create near universally interactable objects
 * using Regions, such as rivers to start up fishing events or locations to
 * places items on.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * Target Tile
 * 
 *   Target Tile:
 *   - Which tile should be checked for Common Event on OK Button?
 *     - Tile in front of player.
 *     - Tile player is standing on top of.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on Touch
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that trigger when
 * stepping onto Region-marked tiles. These let you create custom effects that
 * will occur such as customized damage floors, traps, and/or events.
 * 
 * Areas marked with these regions will not allow random encounters to occur.
 * This is how RPG Maker works. Assuming you are not using plugins at all, by
 * putting on touch events all over the map, tiles with those on touch events
 * will not let random encounters trigger.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Terrain Tag Settings
 * ============================================================================
 *
 * Terrain Tags are used in Database => Tilesets to mark certain tiles and
 * give them unique properties through terrain tags.
 *
 * ---
 *
 * Terrain Tag ID's
 * 
 *   Rope:
 *   - Which terrain tag number to use for ropes?
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.58: May 16, 2024
 * * Documentation Update!
 * ** Added "Features: Character Sprite Filename Tags" section.
 * * New Features!
 * ** [Invisible] tag added to character sprite filenames.
 * *** If a character sprite's filename has [invisible] in it, it will become
 *     invisible on the map screen in-game while almost everything else about
 *     it is visible. This is used for those who wish to use sprite labels for
 *     things such as autorun and parallel events.
 * 
 * Version 1.57: March 14, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Plugin Command: "Event Icon: Delete" will now keep an event icon cleared
 *    until the newly added Plugin Command: "Event Icon: Restore" is used.
 *    Update made by Arisu.
 * ** Plugin Command: "Event Icon: Change" is now renamed to have "(Temporary)"
 *    after its name in order to clarify the temporary changes made to it.
 * * New Features!
 * ** New Plugin Command added by Arisu:
 * *** Event Icon: Event Icon: Change (Forced)
 * **** Change the icon that appears on an event.
 * **** This change is forced and needs to be restored.
 * *** Event Icon: Restore
 * **** Restores a deleted or forced icon that appears on an event.
 * 
 * Version 1.56: February 15, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added fail safes for activation proximity notetags when loaded from past
 *    save files without Events and Movement Core installed. Added by Arisu.
 * * New Features!
 * ** New notetags added by Arisu:
 * *** <Encounter Half Square: x>
 * *** <Encounter Half Circle: x>
 * *** <Encounter Half Delta: x>
 * *** <Encounter Half Row: x>
 * *** <Encounter Half Column: x>
 * *** <Encounter None Square: x>
 * *** <Encounter None Circle: x>
 * *** <Encounter None Delta: x>
 * *** <Encounter None Row: x>
 * *** <Encounter None Column: x>
 * **** If the player is within the 'x' area effect of this event, the random
 *      encounter rate will be halved or suppressed completely depending on the
 *      notetag used.
 * **** These include script call checks.
 * *** <Erase if Encounter Half>
 * *** <Erase if Encounter None>
 * **** Automatically erase this event if the player's party has an encounter
 *      half or encounter none effect, or if the event has spawned in an
 *      encounter half or encounter none area.
 * **** This check only occurs in two situations: when the map is first loaded
 *      after being teleported into or when the player leaves a menu and
 *      returns back to the map.
 * **** Events that have been erased due to this effect will NOT return even if
 *      the encounter half/none effect is removed while the player is still on
 *      the map. The event will return if the player exits the map and comes
 *      back.
 * 
 * Version 1.55: December 14, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Event Popup: Player
 * *** Event Popup: Follower
 * *** Event Popup: Event
 * *** Event Popup: Target Tile
 * **** Makes a centered event popup on the player sprite, target follower
 *      sprite, target event sprite, or target tile.
 * **** All of these new Plugin Commands require VisuMZ_1_MessageCore and
 *      cannot be used in battle.
 * 
 * Version 1.54: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated to reduce confusion:
 * *** Call Event: Remote Read
 * **** This will run the page of the target event on the current event.
 * **** This means that any "This Event" commands will be applied to the event
 *      using this Plugin Command and NOT the target event that page data is
 *      being retrieved from.
 * **** Think of it as the current event using the target called event as a
 *      Common Event ala how RPG Maker 2003 works (for those familiar with it).
 * * Feature Update!
 * ** Renamed "Call Event: Remote Activation" to "Call Event: Remote Read" to
 *    reduce confusion.
 * * Feature Update!
 * ** <Activation Radius: x> notetag is now defined as <Activation Delta: x>
 * *** 'Radius' variant will still work and function as 'Delta' but will no
 *     longer be listed in the help file as 'Radius'
 * *** This is changed to avoid confusion with the new notetag.
 * * New Features!
 * ** New notetag added by Arisu and sponsored by AndyL:
 * *** <Activation Circle: x>
 * **** A circle-shaped range with the event at the center.
 * **** 'x' represents the distance from the center.
 * 
 * Version 1.53: August 17, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** <Map Load Common Event: x>
 * ** <Map Load Common Events: x, x, x>
 * *** When this map is loaded, run the specified Common Events once available.
 * **** Does NOT trigger if you transfer to a different part of the same map.
 * 
 * Version 1.52: July 13, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated help file for <Label: text> notetags:
 * *** If text codes are used, avoid text codes that use < and > wrappers.
 * ** Updated help file for <Label> sandwich notetags:
 * *** You can use text codes with < and > wrappers.
 * * Feature Update!
 * ** Event labels now work properly with scaling sprites.
 * * New Features!
 * ** New notetag added by Arisu and sponsored by Anon:
 * *** <Label Hue Shift: +x>
 * *** <Label Hue Shift: -x>
 * **** Changes the hue of the event label by +x or -x every frame.
 * **** Keep in mind that since this is changing hue, this will appear to have
 *      no effect if you are using black and white labels.
 * **** Use labels with text codes that add color to them like '\C[4]text'
 * **** This only works with the sprite version of event labels and does not
 *      work with the legacy version.
 * 
 * Version 1.51: June 15, 2023
 * * Bug Fixes!
 * ** Provided a fail safe for plugins using the scaling options from this
 *    plugin but do not have scaling parameters identified. The scaling ratio
 *    should now default to 1.0. Fix made by Olivia.
 * * Feature Update!
 * ** Diagonal pathfinding is now improved as to not get stuck on tight corners
 *    on the map. Feature update made by Arisu.
 * 
 * Version 1.50: April 13, 2023
 * * Bug Fixes!
 * ** <Icon: x> should now update correctly when changing pages through self
 *    switches or other event conditions. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Event Labels > Mobile-Enabled?
 * *** Plugin Parameters > Movement > Pathfinding > Mobile-Enabled?
 * **** These settings allow you to enable or disable certain features when
 *      played on mobile devices for better performance.
 * 
 * Version 1.49: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Event Notetag and Comment Tags added by Arisu:
 * *** <Scale: x%>
 * *** <Scale X: x%>
 * *** <Scale Y: y%>
 * **** Changes the scale of the sprite to the designated size.
 * 
 * Version 1.48: January 20, 2023
 * * Feature Update!
 * ** <Move Synch> for certain types will also copy facing directions even if
 *    there are no tile movements (ie changing directions when pressed up
 *    against and obstacle). Update made by Arisu.
 * 
 * Version 1.47: November 10, 2022
 * * Feature Update!
 * ** If "Follower: Set Global Chase" is set to false, followers will no longer
 *    jump towards the player location when the player jumps. This does NOT
 *    apply to gather or location changing players. Followers will still have
 *    to synchronize their positions there regardless in order to maintain
 *    consistency. Update made by Olivia.
 * 
 * Version 1.46: September 29, 2022
 * * Bug Fixes!
 * ** Altered the self switch auto-reset timing to reduce errors. Fix by Arisu.
 * * Feature Update!
 * ** Added self-movement prevention whenever scenes are deactivated. Update
 *    made by Arisu.
 * 
 * Version 1.45: August 18, 2022
 * * Bug Fixes!
 * ** Fixed a bug that caused event labels with variables from refreshing
 *    properly. Fix made by Arisu.
 * 
 * Version 1.44: July 21, 2022
 * * Bug Fixes!
 * ** Fixed a problem that caused <Exit Reset Self Data> notetag to not work.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Diagonal pathfinding is now disabled when there are too many events on a
 *    map, causing extra collission checks. This value is set to 100 for the
 *    time being until we can figure out a better way to calculate diagonal
 *    pathfinding. Update made by Irina.
 * 
 * Version 1.43: July 14, 2022
 * * Bug Fixes!
 * ** Move to Player for events should no longer cause hang ups. Fix by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added caching function for pathfinding when using touch movement for a
 *    smoother experience. When touch movement is held down, pathfinding will
 *    utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Update made by Arisu.
 * * New Features!
 * ** New notetag added by Arisu:
 * *** <Playtest>
 * **** If this notetag is found in the event's notebox (NOT comments), then
 *      the event will only appear during a playtest session. It will not
 *      appear in a deployed game where the playtest flag is not on.
 * 
 * Version 1.42: June 23, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added to <Copy Event: x, y> notetag help:
 * *** - If '0' is used for the Map ID, reference the current map.
 * * Feature Update!
 * ** Default MZ behavior would have "below characters" trigger events with
 *    only comments lock out facing "same as characters" trigger events. This
 *    is now bypassed. Update made by Arisu.
 * ** The <Copy Event: mapID, eventID> notetags now allow usage of '0' for the
 *    mapID to reference the current map. Update made by Arisu.
 * ** <Save Event Location> should now work more efficiently. Update by Arisu.
 * ** Dashing animations for followers will no longer look weird after having
 *    gathered up and then proceeding to dash. Update made by Irina.
 * * New Features!
 * ** New event notetag added by Arisu:
 * *** <Exit Reset Self Data>
 * **** When the player leaves the current map, all Self Switches and Self
 *      Variables related to this event will be reset.
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Self Data: Reset All
 * **** Reset the Self Switch and Self Variable data of all events within the
 *      specified map.
 * ** New Plugin Parameter added by Arisu and sponsored by Anon:
 * *** Plugin Params > Movement Settings > Dash > Dash on Ladder?
 * **** Allow dashing while on a ladder or rope?
 * 
 * Version 1.41: June 1, 2022
 * * Bug Fixes!
 * ** Parallel Process Common Events above 1000 should no longer crash the
 *    game. Bug fixed by Irina.
 * 
 * Version 1.40: May 19, 2022
 * * Bug Fixes!
 * ** Sprite Event Labels with distance properties will now work properly
 *    when changing from a non-met page condition to a met page condition.
 *    Fix made by Arisu.
 * 
 * Version 1.39: May 5, 2022
 * * Bug Fixes!
 * ** Save event location should now work properly with Set Event Location
 *    command. Fix made by Arisu.
 * ** Sprite Event Labels with distance properties will no longer be visible
 *    when constantly entering/exiting the Main Menu. Fix made by Arisu.
 * 
 * Version 1.38: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu and sponsored by Archeia:
 * *** Plugin Parameters > Movement Settings > Event Movement > Shift Y
 * **** How many pixels should non-tile characters be shifted by?
 * ** New Notetags added by Arisu and sponsored by Archeia:
 * *** <Picture Filename: filename>
 * **** applies a picture graphic from the /img/pictures/ folder of your
 *      game project.
 * **** This graphic will be on top of the character sprite but below the event
 *      icon sprite.
 * **** The picture priority will be the same as the event's priority. If it is
 *      "below characters", the player can walk on top of it. If it is "above
 *      characters", the player will behind it. If it is "same as characters",
 *      the priority will be based on the current relative Y position.
 * *** <Picture Max Size: x>
 * *** <Picture Scale: y%>
 * **** If the "Max Size" or "Scale" supplementary notetags are used, the
 *      picture graphic will be scaled proportionally to fit either the exact
 *      pixel size for "Max Size" or the "Scale" ratio.
 * *** <Picture Offset: +x, +y>
 * *** <Picture Offset: -x, -y>
 * **** Offsets the X and Y position of the event picture relative to the event
 *      sprite's own position.
 * *** <Picture Wait Frames: x>
 * **** Requires VisuMZ_4_AnimatedPictures! "Wait Frames" is used with VisuMZ's
 *      Animated Pictures plugin. This determines the delay inbetween
 *      frame changes.
 * 
 * Version 1.37: March 24, 2022
 * * Documentation Update!
 * ** Added extra clarity to "Turn to Home" Movement Command.
 * *** This refers to the original position's X/Y on the map.
 * *** The event will turn and face the tile that is its original X/Y location.
 * 
 * Version 1.36: March 17, 2022
 * * Bug Fixes!
 * ** "Turn To Home" movement command now properly faces the home position.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.35: March 3, 2022
 * * IMPORTANT! Compatibility Update!
 * ** Compatibility Update with RPG Maker MZ 1.4.4.
 * *** For some reason this update broke any saves made before 1.4.4 was
 *     updated and they cannot be loaded. The only way saves would load is if
 *     you made a safe after 1.4.4 was done. This should be fixed and saves
 *     made with 1.4.3 and before should now be working. Update made by Irina.
 * 
 * Version 1.34: February 17, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * New Features!
 * ** Arisu has created new event notetag/comment tags:
 * *** <Custom Z: x>
 * **** Replace 'x' with a number value to determine the event sprite's Z value
 *      relative to the tilemap.
 * **** View the helpfile for more information.
 * *** <Mirror Sprite>
 * **** The event sprite's visual appearance is mirrored.
 * *** <Move Synch Distance Opacity: x>
 * **** Changes the opacity of the event based on the distance between it and
 *      its move synched target. Closer means more opaque. Further away means
 *      more transparent.
 * ** Irina has created a more memory efficient version of Event Labels.
 * *** Plugin Parameters > Event Label Settings > Sprite Based?
 * **** Use sprite-based labels instead of legacy-window version.
 * **** Legacy-window version will not be supported in future.
 * 
 * Version 1.33: February 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu!
 * *** <Hide Player>
 * *** <Show Player>
 * **** Map Notetag. Forcefully hides or shows the player sprite. This is so
 *      you don't need to manually turn the setting on/off each time you enter
 *      a specific map.
 * *** <Hide Followers>
 * *** <Show Followers>
 * **** Map Notetag. Forcefully hides or shows the player's followers. This is
 *      so you don't need to manually turn them on/off each time you enter a
 *      specific map.
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Self Variable changes from custom move routes should no longer cause
 *    crashes. Fix made by Arisu.
 * ** Self Switch custom move route toggles should now work properly. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Better shadow tracking algorithm to remove any shadow twitching.
 *    Update made by Yanfly.
 * 
 * Version 1.31: January 6, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.30: November 25, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Map Switches and Map Variables added by Arisu:
 * *** Map Switches are self-switches for maps. Instead of using <Self>, use
 *     <Map> in the Switch name to designate it as a Map Switch. The ON/OFF
 *     data for that Switch will vary depending on the map the player is
 *     currently on.
 * *** Map Variables are self-variables for maps. Instead of using <Self>, use
 *     <Map> in the Variable name to designate it as a Map Switch. The number
 *     data for that Variable will vary depending on the map the player is
 *     currently on.
 * *** Script Calls have been added for these features as well.
 * **** See help file for them.
 * 
 * Version 1.29: October 7, 2021
 * * Bug Fixes!
 * ** Same map event spawning should now work properly without the need to add
 *    the current map ID to the preloaded map array. Update made by Arisu.
 * 
 * Version 1.28: September 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New move route commands added by Arisu:
 * *** Jump to Home
 * *** Move to Home
 * *** Crash Move to Home
 * *** Step Toward Home
 * *** Step Away From Home
 * *** Turn to Home
 * *** Turn Away From Home
 * *** Teleport to Home
 * **** These only work on events. Their actions should be reflective of what
 *      their command names suggest.
 * 
 * Version 1.27: September 17, 2021
 * * Bug Fixes!
 * ** Fixed event spawn templates so that they can work properly with Common
 *    Events. Fix made by Arisu.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** "Step Towards Player" custom command should now work properly. Fix made
 *    by Arisu.
 * ** Having multiple region restriction notetags for a map will no longer
 *    cause others to lock out. Fix made by Arisu.
 * 
 * Version 1.25: July 30, 2021
 * * Bug Fixes!
 * ** Fixed a problem that caused the 'setSelfSwitchValue' and
 *    'setSelfVariableValue' functions to not work properly. Fix made by Irina.
 * 
 * Version 1.24: June 4, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added extra clarification on which commands will go around the player
 *    character and which ones won't.
 * * New Move Route Custom Commands added by Arisu:
 * ** Crash Move (direction) Until Stop
 * ** Crash Move To: x, y
 * ** Crash Move To Event: x
 * *** These allow events to collide with the player character and trigger
 *     Event Touch events.
 * 
 * Version 1.23: May 21, 2021
 * * Bug Fixes!
 * ** Morphing by templates should no longer cause a crash. Fix made by Arisu.
 * 
 * Version 1.22: May 7, 2021
 * * Bug Fixes!
 * ** Plugin Commands for Event Label Visibility should now update without
 *    needing to take steps as per distance detection. Fix made by Arisu.
 * * Documentation Update!
 * ** Added clarity to "Common Event on Touch" Plugin Parameters.
 * *** Areas marked with these regions will not allow random encounters to
 *     occur. This is how RPG Maker works. Assuming you are not using plugins
 *     at all, by putting on touch events all over the map, tiles with those on
 *     touch events will not let random encounters trigger.
 * 
 * Version 1.21: March 12, 2021
 * * Bug Fixes!
 * ** Move until stop custom move routes should no longer cause crashes.
 *    Fix made by Arisu.
 * 
 * Version 1.20: February 26, 2021
 * * Bug Fixes!
 * ** Region Restrictions regarding Player Allow will no longer affect vehicle
 *    passability. Update made by Arisu.
 * 
 * Version 1.19: February 12, 2021
 * * Bug Fixes!
 * ** "Self Variable: Variable ID" plugin command's Map ID should now be able
 *    to use "0" to self reference the current map. Fix made by Olivia.
 * 
 * Version 1.18: February 5, 2021
 * * Bug Fixes!
 * ** Event icon plugin commands should now work properly. Fix made by Arisu.
 * * Documentation Update!
 * ** Added new "Features: Weighted Random Movement" section.
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Random Move Weight: x>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then the event will stick closer to their home location (where they are
 *      located upon spawning on the map). How close they stick to their home
 *      location will depend on the weighted 'x' value.
 * *** <True Random Move>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then that event will ignore the effects of weighted randomized
 *      movement.
 * ** New Plugin Commands added by Arisu and sponsored by AndyL:
 * *** Event Timer: Change Speed
 * *** Event Timer: Expire Event Assign
 * *** Event Timer: Expire Event Clear
 * *** Event Timer: Frames Gain
 * *** Event Timer: Frames Set
 * *** Event Timer: Pause
 * *** Event Timer: Resume
 * **** The above Plugin Commands allow you to control the game timer better.
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Movement > Event Movement > Random Move Weight
 * **** Use numbers between 0 and 1. Numbers closer to 1 stay closer to their
 *      home position.
 * 
 * Version 1.17: January 29, 2021
 * * Documentation Update!
 * ** Added "Do NOT insert quotes" to "Balloon: name" and "Pose: name".
 * ** Added Examples for extra clarification.
 * * Optimization Update!
 * ** When touch clicking an event on a map with multiple events, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.16: January 22, 2021
 * * Optimization Update!
 * ** When touch clicking multiple times on an impassable tile, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.15: January 1, 2021
 * * Bug Fixes!
 * ** Spawned events should now resume their automated self movement after
 *    being interacted with. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for updated features.
 * * Feature Updates!
 * ** Collission checks for the Spawn Event Plugin Commands now account for
 *    the spawning event's Hitbox, too. Update made by Yanfly.
 * ** Spawn Event Plugin Commands adds a new parameter "Success Switch ID" to
 *    check if the spawning has been successful or not.
 * * New Features!
 * ** New Plugin Commands added by Yanfly!
 * *** Spawn Event: Spawn At Terrain Tag
 * *** Spawn Event: Despawn Terrain Tag(s)
 * **** These function similar to their region counterparts except they target
 *      terrain tags instead.
 * 
 * Version 1.14: December 18, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for page index.
 *    Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the new features!
 * * New Features!
 * ** New Plugin Commands added by Irina.
 * *** Follower: Set Global Chase
 * *** Follower: Set Target Chase
 * *** Follower: Set Control
 * *** Follower: Reset
 * **** These plugin commands allow you to change whether or not the followers
 *      will chase their intended targets and/or shift control over their
 *      movement route from the "Player" to the target follower.
 * 
 * Version 1.13: December 4, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for one-screen maps.
 *    Fix made by Arisu.
 * 
 * Version 1.12: November 29, 2020
 * * Bug Fixes!
 * ** Click Triggers no longer work on erased events. Fix made by Arisu.
 * ** Erased events no longer have icons appear above their heads.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Initialization of the plugin's effects no only occur if the event's
 *    current page settings have been altered. Change made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 15, 2020
 * * Bug Fixes!
 * ** Morph plugin command should no longer cause crashes. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the updated features!
 * * Feature Updates!
 * ** Updates to these Plugin Commands made by Yanfly:
 * *** Call Event: Remote Activation
 * *** Event Icon: Change
 * *** Event Icon: Delete
 * *** Event Location: Create
 * *** Event Location: Delete
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * *** Morph Event: Change
 * *** Morph Event: Remove
 * *** Self Switch: A B C D
 * *** Self Switch: Switch ID
 * *** Self Variable: Variable ID
 * **** All of the above Plugin Commands can now use 0 for their Event ID's in
 *      order to refer to the running event's ID value.
 * 
 * Version 1.10: November 1, 2020
 * * Bug Fixes!
 * ** Spawned Event preserve function now works properly. Fix made by Arisu.
 * 
 * Version 1.09: October 25, 2020
 * * Documentation Update
 * ** Added clarity on the notetags and comment tags on when their effects
 *    are present.
 * * Feature Update!
 * ** Event icons now have an unsmoothing property to them to make them
 *    look better. Update made by Irina.
 * 
 * Version 1.08: October 11, 2020
 * * Compatibility Update
 * ** Added failsafes for better compatibility.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** Updated for the new features!
 * * Feature Update!
 * ** Data from deleted events will now be cleared and removed from maps if the
 *    events do not exist to prevent conflict with plugins from the VisuStella
 *    MZ library and other plugins. Feature added by Irina.
 * ** Move Route Custom Commands now support self variable values! If you wish
 *    to use a value from a self variable, insert \SelfVar[x] in place of the x
 *    in any of the below. This will only draw from the current event. If you 
 *    wish to draw data from outside event self variables, we recommend you
 *    use the \V[x] variant after using the Plugin Commands to draw data from
 *    them for the best accuracy.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly!
 * *** Movement > Bitmap > Smoothing
 * **** Do you want to smooth or pixelate the map sprites? Pixelating them is
 *      better for zooming and tilting.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Events & Movement Core no longer disables the Core Engine's Smart Event
 *    Collision plugin parameter. Fix made by Yanfly.
 * * Documentation Update!
 * ** Move Route Custom Commands updated with the new feature for inserting
 *    variable values.
 * * Feature Update!
 * ** Move Route Custom Commands now support $gameVariable.value(x) values.
 *    You can also just use \V[x] for variable values, too. Added by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** If player movement is disabled, mouse movement is disabled, too.
 *    Fix made by Arisu.
 * ** The region restriction notetags should be fixed and work again.
 *    Fix made by Arisu.
 * 
 * Version 1.04: September 13, 2020
 * * Feature Update!
 * * Some Move Route Custom Commands are updated to ignore spaces:
 * ** Jump To: x, y
 * ** Move To: x, y
 * ** Step Toward: x, y
 * ** Step Away From: x, y
 * ** Turn To: x, y
 * ** Turn Away From: x, y
 * ** Teleport To: x, y
 * *** These can now be written as x,y. There still needs to be a space between
 *     the : and x for parsing clarity, however.
 * *** Feature updated by Arisu with help from BlueMoon and Zeriab.
 * * New Features!
 * ** New 'Move Route Custom Commands' added by Arisu.
 * *** Fade In: x
 * *** Fade Out: x
 * *** Force Carry: On
 * *** Force Carry: Off
 * *** Force Dash: On
 * *** Force Dash: Off
 * ** New Plugin Commands added by Arisu.
 * *** Player Movement: Control
 * **** Enable or disable player control over the player character's movement.
 * *** Player Movement: Diagonal
 * **** Override settings to for player diagonal movement.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Sleeping pose is now fixed and working! Fix made by Yanfly.
 * * Documentation Update!
 * ** Extended "Features: Self Switches and Variables" to explain how to use
 *    script calls to grab self switch information.
 * * New Features!
 * ** New Plugin Commands added by Yanfly:
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * **** These plugin commands allow you to transfer data stored in a self
 *      switch or Self Variable into a global switch or global variable.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** <Diagonal Movement: Off> notetag now works properly. Fix made by Yanfly.
 * ** Plugin Command "Event Label: Visible" now works properly. Fix made by
 *    Shaz.
 * ** Custom Move Route commands should now be working properly. Fix made by
 *    Shaz.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Event Cache issues fixed upon loading a saved game. Fix made by Yanfly.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_AutoMove
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutoMoveEvents
 * @text Auto Movement: Events
 * @desc Allow/stop events from auto movement.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Allow
 * @value Allow
 * @option Stop
 * @value Stop
 * @option Toggle
 * @value Toggle
 * @desc Allow events to move automatically?
 * @default Allow
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_CallEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallEvent
 * @text Call Event: Remote Read
 * @desc Runs the page of a different event remotely. This will run
 * the page of the target event on the CURRENT event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to remotely run. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg PageId:eval
 * @text Page ID
 * @desc The page of the remote event to run.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_DashEnable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DashEnableToggle
 * @text Dash Enable: Toggle
 * @desc Enable/Disable Dashing on maps.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Enable
 * @value Enable
 * @option Disable
 * @value Disable
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change dashing to?
 * @default Enable
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChange
 * @text Event Icon: Change (Temporary)
 * @desc Change the icon that appears on an event.
 * This change is temporary and resets upon new events.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.  Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChangeForced
 * @text Event Icon: Change (Forced)
 * @desc Change the icon that appears on an event.
 * This change is forced and needs to be restored.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.  Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconDelete
 * @text Event Icon: Delete
 * @desc Delete the icon that appears on an event.
 * This will remain deleted and invisible for events.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconRestore
 * @text Event Icon: Restore
 * @desc Restores a deleted or forced icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLabel
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelRefresh
 * @text Event Label: Refresh
 * @desc Refresh all Event Labels on screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelVisible
 * @text Event Label: Visible
 * @desc Change the visibility of Event Labels.
 *
 * @arg Visibility:str
 * @text Visibility
 * @type select
 * @option Visible
 * @value Visible
 * @option Hidden
 * @value Hidden
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change visibility to?
 * @default Visible
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLocation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationSave
 * @text Event Location: Save
 * @desc Memorize an event's map location so it reappears there
 * the next time the map is loaded.
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationCreate
 * @text Event Location: Create
 * @desc Creates a custom spawn location for a specific map's event
 * so it appears there the next time the map is loaded.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent MapId:eval
 * @desc The X coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent MapId:eval
 * @desc The Y coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Direction:num
 * @text Direction
 * @parent MapId:eval
 * @type select
 * @option 1 - Lower Left
 * @value 1
 * @option 2 - Down
 * @value 2
 * @option 3 - Lower Right
 * @value 3
 * @option 4 - Left
 * @value 4
 * @option 6 - Right
 * @value 6
 * @option 7 - Upper Left
 * @value 7
 * @option 8 - Up
 * @value 8
 * @option 9 - Upper Right
 * @value 9
 * @desc The direction the event will be facing.
 * @default 2
 *
 * @arg Optional
 *
 * @arg PageId:eval
 * @text Page ID
 * @parent Optional
 * @desc The page of the event to set the move route to.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg MoveRouteIndex:eval
 * @text Move Route Index
 * @parent Optional
 * @desc The point in the move route for this event to be at
 * if the page ID matches the rest of the page conditions.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationDelete
 * @text Event Location: Delete
 * @desc Deletes an event's saved map location.
 * The event will reappear at its default location.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventPopup
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupPlayer
 * @text Event Popup: Player
 * @desc Makes a centered event popup on the player sprite.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "+\\LastGainObjQuantity\\LastGainObj"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-48","endOffsetX:eval":"+0","endOffsetY:eval":"-96","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupFollower
 * @text Event Popup: Follower
 * @desc Makes a centered event popup on target follower sprite.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg FollowerIndex:eval
 * @text Follower Index
 * @desc Which follower index to play popup?
 * Index starts at 0. You may use JavaScript code.
 * @default 0
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "\\I[23]"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-48","endOffsetX:eval":"+0","endOffsetY:eval":"-96","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupEvent
 * @text Event Popup: Event
 * @desc Makes a centered event popup on target event sprite.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to play popup on.
 * Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "Line1\nLine2"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-48","endOffsetX:eval":"+0","endOffsetY:eval":"-96","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupTargetTile
 * @text Event Popup: Target Tile
 * @desc Makes a centered event popup on target tile.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg TileX:eval
 * @text Map Tile X
 * @desc The x coordinate of the map tile.
 * You may use JavaScript code.
 * @default $gameMap.width() / 2
 *
 * @arg TileY:eval
 * @text Map Tile Y
 * @desc The y coordinate of the map tile.
 * You may use JavaScript code.
 * @default $gameMap.height() / 2
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "\\I[87]"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-24","endOffsetX:eval":"+0","endOffsetY:eval":"-24","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventTimer
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireEvent
 * @text Event Timer: Expire Event Assign
 * @desc Sets a Common Event to run upon expiration.
 * Bypasses the default code if one is set.
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Select the Common Event to run upon the timer's expiration.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerSpeed
 * @text Event Timer: Change Speed
 * @desc Changes the timer frame decrease (or increase) speed.
 *
 * @arg Speed:eval
 * @text Speed
 * @desc How many 1/60ths of a second does each frame increase or
 * decrease by? Negative decreases. Positive increases.
 * @default -1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireClear
 * @text Event Timer: Expire Event Clear
 * @desc Clears any set to expire Common Event and instead,
 * run the default Game_Timer expiration code.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesGain
 * @text Event Timer: Frames Gain
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are gained or lost for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc How many 1/60ths of a second are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc How many seconds are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc How many minutes are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc How many hours are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesSet
 * @text Event Timer: Frames Set
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are set for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc Set frame count to this value.
 * Each frame is 1/60th of a second. JavaScript allowed.
 * @default 0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc Set seconds to this value.
 * JavaScript allowed.
 * @default 0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc Set minutes to this value.
 * Each minute is 60 seconds. JavaScript allowed.
 * @default 0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc Set hours to this value.
 * Each hour is 60 minutes. JavaScript allowed.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerPause
 * @text Event Timer: Pause
 * @desc Pauses the current event timer, but does not stop it.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerResume
 * @text Event Timer: Resume
 * @desc Resumes the current event timer from the paused state.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Follower
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetGlobalChase
 * @text Follower: Set Global Chase
 * @desc Disables all followers from chasing the player
 * or reenables it.
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets all followers to chase the player or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetTargetChase
 * @text Follower: Set Target Chase
 * @desc Disables target follower from chasing the player
 * or reenables it.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to disable/reenable chasing for.
 * @default 1
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets target follower to chase its target or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetControl
 * @text Follower: Set Control
 * @desc Sets the event commands to target a follower when "Player"
 * is selected as the target.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to control.
 * 0 is the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerReset
 * @text Follower: Reset
 * @desc Resets all follower controls. Event Commands that target
 * the "Player" return to normal and followers chase again.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchABCD
 * @text Global Switch: Get Self Switch A B C D
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to obtain data from.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchID
 * @text Global Switch: Get Self Switch ID
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the source switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableGetSelfVariableID
 * @text Global Variable: Get Self Variable ID
 * @desc Gets the current stored value from a Self Variable and
 * stores it onto a Global Variable.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the source variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetVariableId:num
 * @text Target Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MorphEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventTo
 * @text Morph Event: Change
 * @desc Runs the page of a different event remotely.
 *
 * @arg Step1
 * @text Step 1: To Be Changed
 *
 * @arg Step1MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step1EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2
 * @text Step 2: Change Into
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step2
 * @desc Name of the target event template to morph into.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg Step2MapId:eval
 * @text Map ID
 * @parent Step2
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2EventId:eval
 * @text Event ID
 * @parent Step2
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2Preserve:eval
 * @text Preserve Morph
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the morph effect preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventRemove
 * @text Morph Event: Remove
 * @desc Remove the morph status of an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the event to remove morph from. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg RemovePreserve:eval
 * @text Remove Preservation
 * @parent Step2
 * @type boolean
 * @on Remove
 * @off Contain
 * @desc Also remove the preservation effect?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconChange
 * @text Player Icon: Change
 * @desc Change the icon that appears on on the player.
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconDelete
 * @text Player Icon: Delete
 * @desc Delete the icon that appears on the player.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerMovement
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementChange
 * @text Player Movement: Control
 * @desc Enable or disable player control over the player character's movement.
 *
 * @arg Enable:eval
 * @text Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Let the player control where the player character moves?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementDiagonal
 * @text Player Movement: Diagonal
 * @desc Override settings to for player diagonal movement.
 *
 * @arg Setting:str
 * @text Setting
 * @type select
 * @option Default: Whatever the Map Uses
 * @value default
 * @option Forcefully Disable Diagonal Movement
 * @value disable
 * @option Forcefully Enable Diagonal Movement
 * @value enable
 * @desc How do you want to change diagonal movement?
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfData
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfDataResetAll
 * @text Self Data: Reset All
 * @desc Reset the Self Switch and Self Variable data of all events
 * within the specified map.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchABCD
 * @text Self Switch: A B C D
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to change.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchID
 * @text Self Switch: Switch ID
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfVariableID
 * @text Self Variable: Variable ID
 * @desc Change the Self Variable of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Operation:str
 * @text Operation
 * @type select
 * @option = Set
 * @value =
 * @option + Add
 * @value +
 * @option - Subtract
 * @value -
 * @option * Multiply
 * @value *
 * @option / Divide
 * @value /
 * @option % Modulus
 * @value %
 * @desc Set the operation used.
 * @default =
 *
 * @arg Break2
 * @text -
 *
 * @arg Value:eval
 * @text Value
 * @desc Insert the value to modify the Self Variable by.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SpawnEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtXY
 * @text Spawn Event: Spawn At X, Y
 * @desc Spawns desired event at X, Y location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtRegion
 * @text Spawn Event: Spawn At Region
 * @desc Spawns desired event at a random region-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) to spawn this event at.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtTerrainTag
 * @text Spawn Event: Spawn At Terrain Tag
 * @desc Spawns desired event at a random terrain tag-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) to spawn this event at.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEventID
 * @text Spawn Event: Despawn Event ID
 * @desc Despawns the selected Event ID on the current map.
 *
 * @arg EventID:eval
 * @text Event ID
 * @type combo
 * @option $gameMap.firstSpawnedEventID()
 * @option $gameMap.lastSpawnedEventID()
 * @option 1001
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default $gameMap.lastSpawnedEventID()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnAtXY
 * @text Spawn Event: Despawn At X, Y
 * @desc Despawns any spawned event(s) at X, Y location on the current map.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnRegions
 * @text Spawn Event: Despawn Region(s)
 * @desc Despawns the selected Region(s) on the current map.
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) and despawn everything inside it.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnTerrainTags
 * @text Spawn Event: Despawn Terrain Tag(s)
 * @desc Despawns the selected Terrain Tags(s) on the current map.
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) and despawn everything inside it.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEverything
 * @text Spawn Event: Despawn Everything
 * @desc Despawns all spawned events on the current map.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param EventsMoveCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Label:struct
 * @text Event Label Settings
 * @type struct<Label>
 * @desc Choose settings regarding the Event Labels.
 * @default {"FontSize:num":"22","IconSize:num":"26","LineHeight:num":"30","OffsetX:num":"0","OffsetY:num":"12","OpacitySpeed:num":"16","VisibleRange:num":"30"}
 *
 * @param Icon:struct
 * @text Event Icon Settings
 * @type struct<Icon>
 * @desc Choose settings regarding the Event Icons.
 * @default {"BufferX:num":"0","BufferY:num":"12","BlendMode:num":"0"}
 *
 * @param Template:struct
 * @text Event Template Settings
 * @type struct<Template>
 * @desc Choose settings regarding Event Templates.
 * @default {"Settings":"","PreloadMaps:arraynum":"[\"1\"]","Prefabs":"","List:arraystruct":"[]","JavaScript":"","PreCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\""}
 *
 * @param EventBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Movement:struct
 * @text Movement Settings
 * @type struct<Movement>
 * @desc Change the rules regarding movement in the game.
 * @default {"Dir8":"","EnableDir8:eval":"true","StrictCollision:eval":"true","FavorHorz:eval":"true","SlowerSpeed:eval":"false","DiagonalSpeedMultiplier:num":"0.85","AutoMove":"","StopAutoMoveEvents:eval":"true","StopAutoMoveMessages:eval":"true","Bitmap":"","BitmapSmoothing:eval":"false","Dash":"","DashModifier:num":"+1.0","EnableDashTilt:eval":"true","TiltLeft:num":"-0.15","TiltRight:num":"0.15","TiltVert:num":"0.05","EventMove":"","RandomMoveWeight:num":"0.10","Shadows":"","ShowShadows:eval":"true","DefaultShadow:str":"Shadow1","TurnInPlace":"","EnableTurnInPlace:eval":"false","TurnInPlaceDelay:num":"10","Vehicle":"","BoatSpeed:num":"4.0","ShipSpeed:num":"5.0","AirshipSpeed:num":"6.0"}
 *
 * @param VS8:struct
 * @text VisuStella 8-Dir Settings
 * @type struct<VS8>
 * @desc Choose settings regarding VisuStella 8-Directional Sprites.
 * @default {"Balloons":"","AutoBalloon:eval":"true","BalloonOffsetX:num":"0","BalloonOffsetY:num":"12","Icons":"","AutoBuffer:eval":"true","CarryPose:eval":"true"}
 *
 * @param MovementBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Region:struct
 * @text Region Rulings
 * @type struct<Region>
 * @desc Choose settings regarding regions.
 * @default {"Allow":"","AllAllow:arraynum":"[]","WalkAllow:arraynum":"[]","PlayerAllow:arraynum":"[]","EventAllow:arraynum":"[]","VehicleAllow:arraynum":"[]","BoatAllow:arraynum":"[]","ShipAllow:arraynum":"[]","AirshipAllow:arraynum":"[]","Forbid":"","AllForbid:arraynum":"[]","WalkForbid:arraynum":"[]","PlayerForbid:arraynum":"[]","EventForbid:arraynum":"[]","VehicleForbid:arraynum":"[]","BoatForbid:arraynum":"[]","ShipForbid:arraynum":"[]","AirshipForbid:arraynum":"[]","Dock":"","VehicleDock:arraynum":"[]","BoatDock:arraynum":"[]","BoatDockRegionOnly:eval":"false","ShipDock:arraynum":"[]","ShipDockRegionOnly:eval":"false","AirshipDock:arraynum":"[]","AirshipDockRegionOnly:eval":"false"}
 *
 * @param RegionOk:struct
 * @text Common Event on OK Button
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon pressing the
 * OK button while standing on top of designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param RegionOkTarget:str
 * @text Target Tile
 * @parent RegionOk:struct
 * @type select
 * @option Tile in front of player.
 * @value front
 * @option Tile player is standing on top of.
 * @value standing
 * @desc Which tile should be checked for
 * Common Event on OK Button?
 * @default front
 *
 * @param RegionTouch:struct
 * @text Common Event on Touch
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon stepping the tiles
 * marked by the designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param TerrainTag:struct
 * @text Terrain Tag Settings
 * @type struct<TerrainTag>
 * @desc Choose settings regarding terrain tags.
 * @default {"TerrainTag":"","Rope:num":"1"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Label:
 *
 * @param SpriteBased:eval
 * @text Sprite Based?
 * @type boolean
 * @on Sprite-Based
 * @off Legacy-Window
 * @desc Use sprite-based labels instead of legacy-window version.
 * Legacy-window version will not be supported in future.
 * @default true
 *
 * @param MobileEnabled:eval
 * @text Mobile-Enabled?
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Enable event labels for mobile devices?
 * @default true
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc The font size used for the Event Labels.
 * @default 22
 *
 * @param IconSize:num
 * @text Icon Size
 * @type number
 * @min 1
 * @desc The size of the icons used in the Event Labels.
 * @default 26
 *
 * @param LineHeight:num
 * @text Line Height
 * @type number
 * @min 1
 * @desc The line height used for the Event Labels.
 * @default 26
 *
 * @param OffsetX:num
 * @text Offset X
 * @type number
 * @min 0
 * @desc Globally offset all labels horizontally by this amount.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @type number
 * @min 0
 * @desc Globally offset all labels vertically by this amount.
 * @default 12
 *
 * @param OpacitySpeed:num
 * @text Fade Speed
 * @type number
 * @min 1
 * @desc Fade speed for labels.
 * @default 16
 *
 * @param VisibleRange:num
 * @text Visible Range
 * @type number
 * @min 1
 * @desc Range the player has to be within the event to make its label visible.
 * @default 30
 *
 */
/* ----------------------------------------------------------------------------
 * Icon Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Icon:
 *
 * @param BufferX:num
 * @text Buffer X
 * @desc Default X position buffer for event icons.
 * @default 0
 *
 * @param BufferY:num
 * @text Buffer Y
 * @desc Default Y position buffer for event icons.
 * @default 12
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc Default blend mode for even icons.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Template Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Template:
 *
 * @param Settings
 *
 * @param PreloadMaps:arraynum
 * @text Preloaded Maps
 * @parent Settings
 * @type number[]
 * @desc A list of all the ID's of the maps that will be preloaded
 * to serve as template maps for this plugin.
 * @default ["1"]
 *
 * @param Templates
 *
 * @param List:arraystruct
 * @text Event Template List
 * @parent Templates
 * @type struct<EventTemplate>[]
 * @desc A list of all the Event Templates used by this project.
 * Used for notetags and Plugin Commands.
 * @default []
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Event Template
 * ----------------------------------------------------------------------------
 */
/*~struct~EventTemplate:
 *
 * @param Name:str
 * @text Name
 * @desc Name of the template. It'll be used as anchor points for
 * notetags and Plugin Commands.
 * @default Untitled
 *
 * @param MapID:num
 * @text Map ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the map the template event is stored on.
 * This will automatically add this ID to preloaded list.
 * @default 1
 *
 * @param EventID:num
 * @text Event ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the event the template event is based on.
 * @default 1
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Movement Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Movement:
 *
 * @param Dir8
 * @text 8 Directional Movement
 *
 * @param EnableDir8:eval
 * @text Enable
 * @parent Dir8
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Allow 8-directional movement by default? Players can move diagonally.
 * @default true
 *
 * @param StrictCollision:eval
 * @text Strict Collision
 * @parent Dir8
 * @type boolean
 * @on Strict
 * @off Flexible
 * @desc Enforce strict collission rules where the player must be able to pass both cardinal directions?
 * @default true
 *
 * @param FavorHorz:eval
 * @text Favor Horizontal
 * @parent StrictCollision:eval
 * @type boolean
 * @on Horizontal
 * @off Vertical
 * @desc Favor horizontal if cannot pass diagonally but can pass both horizontally and vertically?
 * @default true
 *
 * @param SlowerSpeed:eval
 * @text Slower Diagonals?
 * @parent Dir8
 * @type boolean
 * @on Slower
 * @off Normal
 * @desc Enforce a slower movement speed when moving diagonally?
 * @default false
 *
 * @param DiagonalSpeedMultiplier:num
 * @text Speed Multiplier
 * @parent SlowerSpeed:eval
 * @desc What's the multiplier to adjust movement speed when moving diagonally?
 * @default 0.85
 *
 * @param AutoMove
 * @text Automatic Movement
 *
 * @param StopAutoMoveEvents:eval
 * @text Stop During Events
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while events are running.
 * @default true
 *
 * @param StopAutoMoveMessages:eval
 * @text Stop During Messages
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while a message is running.
 * @default true
 *
 * @param Bitmap
 *
 * @param BitmapSmoothing:eval
 * @text Smoothing
 * @parent Bitmap
 * @type boolean
 * @on Smooth
 * @off Pixelated
 * @desc Do you want to smooth or pixelate the map sprites?
 * Pixelating them is better for zooming and tilting.
 * @default false
 *
 * @param Dash
 * @text Dash
 *
 * @param DashModifier:num
 * @text Dash Modifier
 * @parent Dash
 * @desc Alters the dash speed modifier.
 * @default +1.0
 *
 * @param DashOnLadder:eval
 * @text Dash On Ladder?
 * @parent Dash
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow dashing while on a ladder or rope?
 * @default false
 *
 * @param EnableDashTilt:eval
 * @text Enable Dash Tilt?
 * @parent Dash
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Tilt any sprites that are currently dashing?
 * @default true
 *
 * @param TiltLeft:num
 * @text Tilt Left Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving left (upper left, left, lower left).
 * @default -0.15
 *
 * @param TiltRight:num
 * @text Tilt Right Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving right (upper right, right, lower right).
 * @default 0.15
 *
 * @param TiltVert:num
 * @text Tilt Vertical Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving vertical (up, down).
 * @default 0.05
 * 
 * @param EventMove
 * @text Event Movement
 *
 * @param RandomMoveWeight:num
 * @text Random Move Weight
 * @parent EventMove
 * @desc Use numbers between 0 and 1. Numbers closer to 1 stay
 * closer to their home position. 0 to disable it.
 * @default 0.10
 *
 * @param ShiftY:num
 * @text Shift Y
 * @parent EventMove
 * @desc How many pixels should non-tile characters be shifted by?
 * Negative: up. Positive: down.
 * @default -6
 *
 * @param PathFind
 * @text Path Finding
 *
 * @param PathfindMobileEnabled:eval
 * @text Mobile-Enabled?
 * @parent PathFind
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Enable diagonal pathfinding for mobile devices?
 * @default false
 *
 * @param Shadows
 *
 * @param ShowShadows:eval
 * @text Show
 * @parent Shadows
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show shadows on all events and player-related sprites.
 * @default true
 *
 * @param DefaultShadow:str
 * @text Default Filename
 * @parent Shadows
 * @type file
 * @dir img/system/
 * @desc Default filename used for shadows found in img/system/ folder.
 * @default Shadow1
 *
 * @param TurnInPlace
 * @text Turn in Place
 *
 * @param EnableTurnInPlace:eval
 * @text Enable
 * @parent TurnInPlace
 * @type boolean
 * @on Turn in Place
 * @off Skip
 * @desc When not dashing, player will turn in place before moving.
 * This only applies with keyboard inputs.
 * @default false
 *
 * @param TurnInPlaceDelay:num
 * @text Delay in Frames
 * @parent TurnInPlace
 * @type number
 * @min 0
 * @desc The number of frames to wait before moving.
 * @default 10
 *
 * @param Vehicle
 * @text Vehicle Speeds
 *
 * @param BoatSpeed:num
 * @text Boat Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the boat vehicle.
 * @default 4.0
 *
 * @param ShipSpeed:num
 * @text Ship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the ship vehicle.
 * @default 5.0
 *
 * @param AirshipSpeed:num
 * @text Airship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the airship vehicle.
 * @default 6.0
 *
 */
/* ----------------------------------------------------------------------------
 * Region Rulings
 * ----------------------------------------------------------------------------
 */
/*~struct~Region:
 *
 * @param Allow
 * @text Allow Regions
 *
 * @param AllAllow:arraynum
 * @text All Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkAllow:arraynum
 * @text Walk Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerAllow:arraynum
 * @text Player Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventAllow:arraynum
 * @text Event Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleAllow:arraynum
 * @text Vehicle Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatAllow:arraynum
 * @text Boat Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipAllow:arraynum
 * @text Ship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipAllow:arraynum
 * @text Airship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Forbid
 * @text Forbid Regions
 *
 * @param AllForbid:arraynum
 * @text All Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkForbid:arraynum
 * @text Walk Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerForbid:arraynum
 * @text Player Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventForbid:arraynum
 * @text Event Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleForbid:arraynum
 * @text Vehicle Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where vehicles cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatForbid:arraynum
 * @text Boat Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipForbid:arraynum
 * @text Ship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipForbid:arraynum
 * @text Airship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Dock
 * @text Dock Regions
 *
 * @param VehicleDock:arraynum
 * @text Vehicle Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDock:arraynum
 * @text Boat Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent BoatDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Boats can only dock at designated regions.
 * @default false
 *
 * @param ShipDock:arraynum
 * @text Ship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent ShipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Ships can only dock at designated regions.
 * @default false
 *
 * @param AirshipDock:arraynum
 * @text Airship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent AirshipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Airships can only dock at designated regions.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Region Common Events
 * ----------------------------------------------------------------------------
 */
/*~struct~RegionCommonEvent:
 *
 * @param Region1:num
 * @text Region 1
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region2:num
 * @text Region 2
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region3:num
 * @text Region 3
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region4:num
 * @text Region 4
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region5:num
 * @text Region 5
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region6:num
 * @text Region 6
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region7:num
 * @text Region 7
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region8:num
 * @text Region 8
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region9:num
 * @text Region 9
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region10:num
 * @text Region 10
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region11:num
 * @text Region 11
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region12:num
 * @text Region 12
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region13:num
 * @text Region 13
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region14:num
 * @text Region 14
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region15:num
 * @text Region 15
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region16:num
 * @text Region 16
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region17:num
 * @text Region 17
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region18:num
 * @text Region 18
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region19:num
 * @text Region 19
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region20:num
 * @text Region 20
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region21:num
 * @text Region 21
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region22:num
 * @text Region 22
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region23:num
 * @text Region 23
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region24:num
 * @text Region 24
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region25:num
 * @text Region 25
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region26:num
 * @text Region 26
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region27:num
 * @text Region 27
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region28:num
 * @text Region 28
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region29:num
 * @text Region 29
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region30:num
 * @text Region 30
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region31:num
 * @text Region 31
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region32:num
 * @text Region 32
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region33:num
 * @text Region 33
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region34:num
 * @text Region 34
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region35:num
 * @text Region 35
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region36:num
 * @text Region 36
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region37:num
 * @text Region 37
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region38:num
 * @text Region 38
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region39:num
 * @text Region 39
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region40:num
 * @text Region 40
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region41:num
 * @text Region 41
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region42:num
 * @text Region 42
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region43:num
 * @text Region 43
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region44:num
 * @text Region 44
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region45:num
 * @text Region 45
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region46:num
 * @text Region 46
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region47:num
 * @text Region 47
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region48:num
 * @text Region 48
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region49:num
 * @text Region 49
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region50:num
 * @text Region 50
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region51:num
 * @text Region 51
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region52:num
 * @text Region 52
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region53:num
 * @text Region 53
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region54:num
 * @text Region 54
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region55:num
 * @text Region 55
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region56:num
 * @text Region 56
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region57:num
 * @text Region 57
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region58:num
 * @text Region 58
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region59:num
 * @text Region 59
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region60:num
 * @text Region 60
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region61:num
 * @text Region 61
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region62:num
 * @text Region 62
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region63:num
 * @text Region 63
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region64:num
 * @text Region 64
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region65:num
 * @text Region 65
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region66:num
 * @text Region 66
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region67:num
 * @text Region 67
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region68:num
 * @text Region 68
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region69:num
 * @text Region 69
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region70:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region71:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region72:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region73:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region74:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region75:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region76:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region77:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region78:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region79:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 90
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 91
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 92
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 93
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 94
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 95
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 96
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 97
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 98
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 99
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region100:num
 * @text Region 100
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region101:num
 * @text Region 101
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region102:num
 * @text Region 102
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region103:num
 * @text Region 103
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region104:num
 * @text Region 104
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region105:num
 * @text Region 105
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region106:num
 * @text Region 106
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region107:num
 * @text Region 107
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region108:num
 * @text Region 108
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region109:num
 * @text Region 109
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region110:num
 * @text Region 110
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region111:num
 * @text Region 111
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region112:num
 * @text Region 112
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region113:num
 * @text Region 113
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region114:num
 * @text Region 114
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region115:num
 * @text Region 115
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region116:num
 * @text Region 116
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region117:num
 * @text Region 117
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region118:num
 * @text Region 118
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region119:num
 * @text Region 119
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region120:num
 * @text Region 120
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region121:num
 * @text Region 121
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region122:num
 * @text Region 122
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region123:num
 * @text Region 123
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region124:num
 * @text Region 124
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region125:num
 * @text Region 125
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region126:num
 * @text Region 126
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region127:num
 * @text Region 127
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region128:num
 * @text Region 128
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region129:num
 * @text Region 129
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region130:num
 * @text Region 130
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region131:num
 * @text Region 131
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region132:num
 * @text Region 132
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region133:num
 * @text Region 133
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region134:num
 * @text Region 134
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region135:num
 * @text Region 135
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region136:num
 * @text Region 136
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region137:num
 * @text Region 137
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region138:num
 * @text Region 138
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region139:num
 * @text Region 139
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region140:num
 * @text Region 140
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region141:num
 * @text Region 141
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region142:num
 * @text Region 142
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region143:num
 * @text Region 143
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region144:num
 * @text Region 144
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region145:num
 * @text Region 145
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region146:num
 * @text Region 146
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region147:num
 * @text Region 147
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region148:num
 * @text Region 148
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region149:num
 * @text Region 149
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region150:num
 * @text Region 150
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region151:num
 * @text Region 151
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region152:num
 * @text Region 152
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region153:num
 * @text Region 153
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region154:num
 * @text Region 154
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region155:num
 * @text Region 155
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region156:num
 * @text Region 156
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region157:num
 * @text Region 157
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region158:num
 * @text Region 158
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region159:num
 * @text Region 159
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region160:num
 * @text Region 160
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region161:num
 * @text Region 161
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region162:num
 * @text Region 162
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region163:num
 * @text Region 163
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region164:num
 * @text Region 164
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region165:num
 * @text Region 165
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region166:num
 * @text Region 166
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region167:num
 * @text Region 167
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region168:num
 * @text Region 168
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region169:num
 * @text Region 169
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region170:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region171:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region172:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region173:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region174:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region175:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region176:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region177:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region178:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region179:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 190
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 191
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 192
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 193
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 194
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 195
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 196
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 197
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 198
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 199
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region200:num
 * @text Region 200
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region201:num
 * @text Region 201
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region202:num
 * @text Region 202
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region203:num
 * @text Region 203
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region204:num
 * @text Region 204
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region205:num
 * @text Region 205
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region206:num
 * @text Region 206
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region207:num
 * @text Region 207
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region208:num
 * @text Region 208
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region209:num
 * @text Region 209
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region210:num
 * @text Region 210
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region211:num
 * @text Region 211
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region212:num
 * @text Region 212
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region213:num
 * @text Region 213
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region214:num
 * @text Region 214
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region215:num
 * @text Region 215
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region216:num
 * @text Region 216
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region217:num
 * @text Region 217
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region218:num
 * @text Region 218
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region219:num
 * @text Region 219
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region220:num
 * @text Region 220
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region221:num
 * @text Region 221
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region222:num
 * @text Region 222
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region223:num
 * @text Region 223
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region224:num
 * @text Region 224
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region225:num
 * @text Region 225
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region226:num
 * @text Region 226
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region227:num
 * @text Region 227
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region228:num
 * @text Region 228
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region229:num
 * @text Region 229
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region230:num
 * @text Region 230
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region231:num
 * @text Region 231
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region232:num
 * @text Region 232
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region233:num
 * @text Region 233
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region234:num
 * @text Region 234
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region235:num
 * @text Region 235
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region236:num
 * @text Region 236
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region237:num
 * @text Region 237
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region238:num
 * @text Region 238
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region239:num
 * @text Region 239
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region240:num
 * @text Region 240
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region241:num
 * @text Region 241
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region242:num
 * @text Region 242
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region243:num
 * @text Region 243
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region244:num
 * @text Region 244
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region245:num
 * @text Region 245
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region246:num
 * @text Region 246
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region247:num
 * @text Region 247
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region248:num
 * @text Region 248
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region249:num
 * @text Region 249
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region250:num
 * @text Region 250
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region251:num
 * @text Region 251
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region252:num
 * @text Region 252
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region253:num
 * @text Region 253
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region254:num
 * @text Region 254
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region255:num
 * @text Region 255
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Terrain Tag Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TerrainTag:
 *
 * @param TerrainTag
 * @text Terrain Tag ID's
 *
 * @param Rope:num
 * @text Rope
 * @parent TerrainTag
 * @type number
 * @min 0
 * @max 7
 * @desc Which terrain tag number to use for ropes?
 * @default 1
 *
 */
/* ----------------------------------------------------------------------------
 * VisuStella 8-Dir Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VS8:
 *
 * @param Balloons
 * @text Balloon Icon Settings
 *
 * @param AutoBalloon:eval
 * @text Auto-Balloon Poses
 * @parent Balloons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically pose VS8 sprites when using balloon icons.
 * @default true
 *
 * @param BalloonOffsetX:num
 * @text Balloon Offset X
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by x pixels.
 * @default 0
 *
 * @param BalloonOffsetY:num
 * @text Balloon Offset Y
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by y pixels.
 * @default 10
 *
 * @param Icons
 * 
 * @param AutoBuffer:eval
 * @text Auto Buffer
 * @parent Icons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically buffer the X and Y coordinates of
 * VS8 sprites?
 * @default true
 * 
 * @param CarryPose:eval
 * @text Use Carry Pose
 * @parent Icons
 * @type boolean
 * @on Carry Pose
 * @off Normal
 * @desc Use the carry pose when moving with an icon overhead.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Popup Extra Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PopupExtra:
 *
 * @param Fade
 * @text Fade Settings
 *
 * @param fadeInDuration:eval
 * @text Fade In Duration
 * @parent Fade
 * @desc How many frames does it take to fade in?
 * 60 frames = 1 second.
 * @default 8
 *
 * @param fadeOutDuration:eval
 * @text Fade Out Duration
 * @parent Fade
 * @desc How many frames does it take to fade out?
 * 60 frames = 1 second.
 * @default 8
 *
 * @param Offset
 * @text Offset Settings
 *
 * @param startOffsetX:eval
 * @text Starting Offset X
 * @parent Offset
 * @desc Offsets the starting x position. You may use code.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param startOffsetY:eval
 * @text Starting Offset Y
 * @parent Offset
 * @desc Offsets the starting y position. You may use code.
 * Negative: up. Positive: down.
 * @default -48
 *
 * @param endOffsetX:eval
 * @text Ending Offset X
 * @parent Offset
 * @desc Offsets the ending x position. You may use code.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param endOffsetY:eval
 * @text Ending Offset Y
 * @parent Offset
 * @desc Offsets the ending y position. You may use code.
 * Negative: up. Positive: down.
 * @default -96
 *
 * @param Scale
 * @text Scaling Settings
 *
 * @param startScaleX:eval
 * @text Starting Scale X
 * @parent Scale
 * @desc What is the starting scale x? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param startScaleY:eval
 * @text Starting Scale Y
 * @parent Scale
 * @desc What is the starting scale y? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param endScaleX:eval
 * @text Ending Scale X
 * @parent Scale
 * @desc What is the ending scale x? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param endScaleY:eval
 * @text Ending Scale Y
 * @parent Scale
 * @desc What is the ending scale y? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param Angle
 * @text Angle Settings
 *
 * @param startAngle:eval
 * @text Starting Offset Angle
 * @parent Angle
 * @desc What is the starting angle offset?
 * Use numbers between 0 and 360. You may use code.
 * @default +0
 *
 * @param endAngle:eval
 * @text Ending Offset Angle
 * @parent Angle
 * @desc What is the ending angle offset?
 * Use numbers between 0 and 360. You may use code.
 * @default +0
 * 
 * @param Misc
 * @text Misc Settings
 * 
 * @param Arc:eval
 * @text Arc Peak
 * @parent Misc
 * @desc This is the height of the popup's trajectory arc
 * in pixels. Positive: up. Negative: down. Code allowed.
 * @default +0
 *
 */
//=============================================================================

const _0x3e3bd2=_0x4f69;(function(_0x21c397,_0x256885){const _0x1c6252=_0x4f69,_0x4ba7f1=_0x21c397();while(!![]){try{const _0x189ecc=-parseInt(_0x1c6252(0x731))/(0xa3*0xa+-0xea0+0x843)*(parseInt(_0x1c6252(0x37b))/(0x1dff*0x1+0x80a+-0x2607))+-parseInt(_0x1c6252(0x5e3))/(-0x9d*-0x2f+-0x12f+-0x1ba1)*(parseInt(_0x1c6252(0x448))/(0x1e23*-0x1+-0x3c5*0x2+0x25b1))+-parseInt(_0x1c6252(0x109))/(0xf*-0x223+0x1349+0xcc9)*(parseInt(_0x1c6252(0x6c6))/(0x1d30+-0x53b+-0x17ef))+-parseInt(_0x1c6252(0x4d2))/(-0xbff+0x74*-0x4+-0x6eb*-0x2)*(-parseInt(_0x1c6252(0x560))/(0xca+0xda6+-0xe68))+parseInt(_0x1c6252(0x106))/(0x19fc+0xf2c+-0x291f)+parseInt(_0x1c6252(0x837))/(0xf26+0x87+-0xfa3)+-parseInt(_0x1c6252(0x194))/(0x6a5+-0x1*-0x1b59+-0x3*0xb51);if(_0x189ecc===_0x256885)break;else _0x4ba7f1['push'](_0x4ba7f1['shift']());}catch(_0x5666db){_0x4ba7f1['push'](_0x4ba7f1['shift']());}}}(_0x320f,-0x14277+0x1f188+0x1429b));var label='EventsMove'+_0x3e3bd2(0x8da),tier=tier||0x28*-0xb2+0x9*-0xf+-0x5ab*-0x5,dependencies=[],pluginData=$plugins[_0x3e3bd2(0x118)](function(_0x558dfe){const _0x4e2f93=_0x3e3bd2,_0x2734a7={'JOLzs':function(_0xd2d9d7,_0x5c407a){return _0xd2d9d7+_0x5c407a;},'tyihl':function(_0x5dda57,_0x27ff1c){return _0x5dda57+_0x27ff1c;}};return _0x558dfe[_0x4e2f93(0x55f)]&&_0x558dfe['descriptio'+'n'][_0x4e2f93(0x1bf)](_0x2734a7['JOLzs'](_0x2734a7['tyihl']('[',label),']'));})[0xb5d+-0x720+-0x43d];VisuMZ[label][_0x3e3bd2(0x668)]=VisuMZ[label][_0x3e3bd2(0x668)]||{},VisuMZ['ConvertPar'+_0x3e3bd2(0x10b)]=function(_0x4cbb97,_0x589acb){const _0xa3b748=_0x3e3bd2,_0x2c56f3={'lKqdh':function(_0xce7e60,_0x1f6118){return _0xce7e60(_0x1f6118);},'KGoIw':function(_0x1fcabe,_0x303ee2){return _0x1fcabe(_0x303ee2);},'uONiL':'NUM','KPFoK':function(_0x1fa361,_0x3dfd56){return _0x1fa361!==_0x3dfd56;},'lxuKp':function(_0x1f41bb,_0x1ea7ad){return _0x1f41bb(_0x1ea7ad);},'lZbou':_0xa3b748(0x63b),'xejZu':function(_0xc5d7ea,_0x3dddbc){return _0xc5d7ea!==_0x3dddbc;},'hsNIR':_0xa3b748(0x195),'oqqxH':function(_0x481a46,_0x4af97){return _0x481a46!==_0x4af97;},'NtDCt':function(_0x2037eb,_0x4d413a){return _0x2037eb(_0x4d413a);},'bdOHC':_0xa3b748(0x23b),'FKLDs':_0xa3b748(0x3c6),'KrIpG':_0xa3b748(0x84e),'Efitg':_0xa3b748(0x30b),'vffFk':function(_0x146a83,_0x546116){return _0x146a83!==_0x546116;},'uHcgn':_0xa3b748(0x9d0),'CkAsW':'ARRAYFUNC','fXCyA':function(_0x3b09c9,_0x5b64fa){return _0x3b09c9!==_0x5b64fa;},'GDqDm':_0xa3b748(0x863),'IdGuQ':function(_0x108a90,_0x2c4a48){return _0x108a90(_0x2c4a48);},'IVqiZ':_0xa3b748(0x872),'auaMt':'STRUCT','GMVzM':_0xa3b748(0x647)+'T','bvCJI':function(_0xad616e,_0x5af961){return _0xad616e!==_0x5af961;}};for(const _0x538018 in _0x589acb){if(_0x538018[_0xa3b748(0x848)](/(.*):(.*)/i)){const _0x82ede0=_0x2c56f3['lKqdh'](String,RegExp['$1']),_0x198e98=_0x2c56f3['KGoIw'](String,RegExp['$2'])[_0xa3b748(0x936)+'e']()[_0xa3b748(0x66f)]();let _0xf55470,_0x1b9daf,_0x224c8b;switch(_0x198e98){case _0x2c56f3[_0xa3b748(0xa20)]:_0xf55470=_0x2c56f3[_0xa3b748(0x5c5)](_0x589acb[_0x538018],'')?_0x2c56f3[_0xa3b748(0x7da)](Number,_0x589acb[_0x538018]):0xde7*0x1+-0x220e+0x1427;break;case _0x2c56f3['lZbou']:_0x1b9daf=_0x2c56f3[_0xa3b748(0x24d)](_0x589acb[_0x538018],'')?JSON[_0xa3b748(0x17d)](_0x589acb[_0x538018]):[],_0xf55470=_0x1b9daf['map'](_0x701cc6=>Number(_0x701cc6));break;case _0x2c56f3[_0xa3b748(0x323)]:_0xf55470=_0x2c56f3['oqqxH'](_0x589acb[_0x538018],'')?_0x2c56f3['NtDCt'](eval,_0x589acb[_0x538018]):null;break;case _0x2c56f3['bdOHC']:_0x1b9daf=_0x2c56f3[_0xa3b748(0x5c5)](_0x589acb[_0x538018],'')?JSON[_0xa3b748(0x17d)](_0x589acb[_0x538018]):[],_0xf55470=_0x1b9daf[_0xa3b748(0x65f)](_0x33b000=>eval(_0x33b000));break;case _0x2c56f3[_0xa3b748(0x284)]:_0xf55470=_0x2c56f3[_0xa3b748(0x24d)](_0x589acb[_0x538018],'')?JSON[_0xa3b748(0x17d)](_0x589acb[_0x538018]):'';break;case _0x2c56f3['KrIpG']:_0x1b9daf=_0x2c56f3['oqqxH'](_0x589acb[_0x538018],'')?JSON[_0xa3b748(0x17d)](_0x589acb[_0x538018]):[],_0xf55470=_0x1b9daf[_0xa3b748(0x65f)](_0xe3dbb7=>JSON[_0xa3b748(0x17d)](_0xe3dbb7));break;case _0x2c56f3['Efitg']:_0xf55470=_0x2c56f3[_0xa3b748(0x25a)](_0x589acb[_0x538018],'')?new Function(JSON[_0xa3b748(0x17d)](_0x589acb[_0x538018])):new Function(_0x2c56f3[_0xa3b748(0x80c)]);break;case _0x2c56f3['CkAsW']:_0x1b9daf=_0x2c56f3[_0xa3b748(0x506)](_0x589acb[_0x538018],'')?JSON[_0xa3b748(0x17d)](_0x589acb[_0x538018]):[],_0xf55470=_0x1b9daf[_0xa3b748(0x65f)](_0xbeb666=>new Function(JSON['parse'](_0xbeb666)));break;case _0x2c56f3[_0xa3b748(0x8d1)]:_0xf55470=_0x2c56f3[_0xa3b748(0x5c5)](_0x589acb[_0x538018],'')?_0x2c56f3[_0xa3b748(0x1d0)](String,_0x589acb[_0x538018]):'';break;case _0x2c56f3[_0xa3b748(0x814)]:_0x1b9daf=_0x2c56f3['vffFk'](_0x589acb[_0x538018],'')?JSON[_0xa3b748(0x17d)](_0x589acb[_0x538018]):[],_0xf55470=_0x1b9daf['map'](_0xe337dc=>String(_0xe337dc));break;case _0x2c56f3[_0xa3b748(0x570)]:_0x224c8b=_0x2c56f3[_0xa3b748(0x25a)](_0x589acb[_0x538018],'')?JSON[_0xa3b748(0x17d)](_0x589acb[_0x538018]):{},_0x4cbb97[_0x82ede0]={},VisuMZ[_0xa3b748(0x6e1)+_0xa3b748(0x10b)](_0x4cbb97[_0x82ede0],_0x224c8b);continue;case _0x2c56f3[_0xa3b748(0x752)]:_0x1b9daf=_0x2c56f3[_0xa3b748(0x10a)](_0x589acb[_0x538018],'')?JSON[_0xa3b748(0x17d)](_0x589acb[_0x538018]):[],_0xf55470=_0x1b9daf[_0xa3b748(0x65f)](_0x20a9c5=>VisuMZ[_0xa3b748(0x6e1)+_0xa3b748(0x10b)]({},JSON[_0xa3b748(0x17d)](_0x20a9c5)));break;default:continue;}_0x4cbb97[_0x82ede0]=_0xf55470;}}return _0x4cbb97;},(_0x30b41c=>{const _0x4b3ca7=_0x3e3bd2,_0x3c9be4={'hIrUd':function(_0x37a6e2,_0xfa657a){return _0x37a6e2(_0xfa657a);},'uaqwA':_0x4b3ca7(0x23d)+_0x4b3ca7(0x22c)+_0x4b3ca7(0x3f9)+_0x4b3ca7(0x3cd)+_0x4b3ca7(0xa31)+'\x20into\x20the\x20'+'Plugin\x20Man'+_0x4b3ca7(0x21d),'ODmTG':function(_0x7dff71,_0xd828f0){return _0x7dff71!==_0xd828f0;},'ePpiD':function(_0x33644b,_0x5d08da){return _0x33644b(_0x5d08da);},'OAash':_0x4b3ca7(0x9b8)+_0x4b3ca7(0x9e3)+_0x4b3ca7(0x661)+_0x4b3ca7(0x5d7)+'ease\x20updat'+_0x4b3ca7(0x520)+_0x4b3ca7(0x9a9)+_0x4b3ca7(0x4f4),'sKlyv':function(_0x13a323,_0x54cb11){return _0x13a323(_0x54cb11);},'ZmMSK':function(_0xdd7ad8,_0x44a6fb){return _0xdd7ad8<_0x44a6fb;},'JqBAL':_0x4b3ca7(0x9d8)+_0x4b3ca7(0x688)+'aced\x20on\x20th'+_0x4b3ca7(0x221)+_0x4b3ca7(0x65b)+_0x4b3ca7(0x160)+_0x4b3ca7(0x13a)+_0x4b3ca7(0x7c5)+_0x4b3ca7(0x2d4)+'\x20%3\x20plugin'+'s.\x0aPlease\x20'+'reorder\x20th'+_0x4b3ca7(0x221)+_0x4b3ca7(0x19e)+_0x4b3ca7(0x1eb)+_0x4b3ca7(0x8a2)+'ier\x20number'+'s.'},_0x414766=_0x30b41c['name'];for(const _0x564a95 of dependencies){if(!Imported[_0x564a95]){_0x3c9be4[_0x4b3ca7(0x711)](alert,_0x3c9be4[_0x4b3ca7(0x463)][_0x4b3ca7(0x96d)](_0x414766,_0x564a95)),SceneManager['exit']();break;}}const _0x3e4a17=_0x30b41c['descriptio'+'n'];if(_0x3e4a17[_0x4b3ca7(0x848)](/\[Version[ ](.*?)\]/i)){const _0x5322b5=_0x3c9be4[_0x4b3ca7(0x711)](Number,RegExp['$1']);_0x3c9be4[_0x4b3ca7(0x473)](_0x5322b5,VisuMZ[label][_0x4b3ca7(0x31a)])&&(_0x3c9be4[_0x4b3ca7(0x735)](alert,_0x3c9be4['OAash'][_0x4b3ca7(0x96d)](_0x414766,_0x5322b5)),SceneManager[_0x4b3ca7(0x8d4)]());}if(_0x3e4a17[_0x4b3ca7(0x848)](/\[Tier[ ](\d+)\]/i)){const _0x3b2784=_0x3c9be4[_0x4b3ca7(0x274)](Number,RegExp['$1']);_0x3c9be4[_0x4b3ca7(0x435)](_0x3b2784,tier)?(_0x3c9be4[_0x4b3ca7(0x735)](alert,_0x3c9be4[_0x4b3ca7(0x92a)]['format'](_0x414766,_0x3b2784,tier)),SceneManager[_0x4b3ca7(0x8d4)]()):tier=Math['max'](_0x3b2784,tier);}VisuMZ[_0x4b3ca7(0x6e1)+'ams'](VisuMZ[label][_0x4b3ca7(0x668)],_0x30b41c[_0x4b3ca7(0x6a6)]);})(pluginData),VisuMZ[_0x3e3bd2(0x1ed)+_0x3e3bd2(0x468)]=function(_0x29ab10,_0x3f47e6,_0x20d500){const _0x503767=_0x3e3bd2,_0x21021c={'pIynw':function(_0x21a903,_0x294770){return _0x21a903+_0x294770;},'xYxGd':function(_0x2e88b3,_0x4bc943){return _0x2e88b3-_0x4bc943;},'YSYcS':function(_0x24129b,_0x3784fe){return _0x24129b*_0x3784fe;},'ZmBTP':function(_0x2b556e,_0x4ea994){return _0x2b556e/_0x4ea994;},'FVnqQ':function(_0x4dfbf6,_0x418160){return _0x4dfbf6%_0x418160;}};switch(_0x20d500){case'=':return _0x3f47e6;break;case'+':return _0x21021c[_0x503767(0x5ae)](_0x29ab10,_0x3f47e6);break;case'-':return _0x21021c[_0x503767(0x3a3)](_0x29ab10,_0x3f47e6);break;case'*':return _0x21021c[_0x503767(0x4a9)](_0x29ab10,_0x3f47e6);break;case'/':return _0x21021c[_0x503767(0x7b2)](_0x29ab10,_0x3f47e6);break;case'%':return _0x21021c[_0x503767(0x7a3)](_0x29ab10,_0x3f47e6);break;}return _0x29ab10;},PluginManager[_0x3e3bd2(0x4d9)+'mmand'](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x9bf)+'ents',_0x6c6b9a=>{const _0x33efc4=_0x3e3bd2,_0x365e0e={'zFxGZ':_0x33efc4(0x9c8),'ZVZuk':_0x33efc4(0x588),'iWewF':_0x33efc4(0x74a)};VisuMZ['ConvertPar'+_0x33efc4(0x10b)](_0x6c6b9a,_0x6c6b9a);switch(_0x6c6b9a[_0x33efc4(0x2e4)]){case _0x365e0e[_0x33efc4(0x640)]:$gameSystem[_0x33efc4(0x55b)+_0x33efc4(0x7b0)+_0x33efc4(0x571)](!![]);break;case _0x365e0e[_0x33efc4(0x368)]:$gameSystem[_0x33efc4(0x55b)+_0x33efc4(0x7b0)+_0x33efc4(0x571)](![]);break;case _0x365e0e[_0x33efc4(0x1d4)]:$gameSystem['setAllowEv'+'entAutoMov'+_0x33efc4(0x571)](!$gameSystem['isAllowEve'+_0x33efc4(0x7f5)+'ment']());break;}}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData['name'],_0x3e3bd2(0x2aa),_0x329f7f=>{const _0x4e6c2f=_0x3e3bd2,_0x29b572={'ZvBbp':function(_0x2c4e3c,_0x178e8c){return _0x2c4e3c<=_0x178e8c;}};VisuMZ['ConvertPar'+'ams'](_0x329f7f,_0x329f7f);const _0x4e13a7=$gameTemp[_0x4e6c2f(0x256)+'ginCommand'+_0x4e6c2f(0x6e6)+'r'](),_0x58746c={'mapId':_0x329f7f[_0x4e6c2f(0x150)],'eventId':_0x329f7f[_0x4e6c2f(0x617)]||_0x4e13a7['eventId'](),'pageId':_0x329f7f[_0x4e6c2f(0x54c)]};if(_0x29b572['ZvBbp'](_0x58746c[_0x4e6c2f(0x9ec)],-0x4*0x3cd+0x4f*-0x5+-0x1*-0x10bf))_0x58746c[_0x4e6c2f(0x9ec)]=$gameMap?$gameMap[_0x4e6c2f(0x9ec)]():0x1*0x1550+0x115*-0xd+-0x3*0x26a;$gameTemp[_0x4e6c2f(0x256)+_0x4e6c2f(0x546)+_0x4e6c2f(0x6e6)+'r']()[_0x4e6c2f(0x669)+_0x4e6c2f(0x890)+'nt'](_0x58746c);}),PluginManager['registerCo'+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],'DashEnable'+'Toggle',_0x3ad741=>{const _0x424664=_0x3e3bd2,_0x4353f8={'nKjwC':_0x424664(0x5f2),'uDBBj':'Disable','iYwwK':_0x424664(0x74a)};VisuMZ[_0x424664(0x6e1)+_0x424664(0x10b)](_0x3ad741,_0x3ad741);switch(_0x3ad741['Value']){case _0x4353f8[_0x424664(0x474)]:$gameSystem[_0x424664(0x17a)+_0x424664(0x6cb)](!![]);break;case _0x4353f8['uDBBj']:$gameSystem['setDashing'+_0x424664(0x6cb)](![]);break;case _0x4353f8[_0x424664(0x60a)]:$gameSystem[_0x424664(0x17a)+_0x424664(0x6cb)](!$gameSystem['isDashingE'+_0x424664(0x425)]());break;}}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData['name'],_0x3e3bd2(0x2a9)+_0x3e3bd2(0x8d6),_0x28b5b3=>{const _0x52fe0e=_0x3e3bd2;VisuMZ[_0x52fe0e(0x6e1)+_0x52fe0e(0x10b)](_0x28b5b3,_0x28b5b3);const _0xbe6429=$gameTemp[_0x52fe0e(0x256)+'ginCommand'+'Interprete'+'r']();_0x28b5b3[_0x52fe0e(0x150)]=_0x28b5b3['MapId']||$gameMap[_0x52fe0e(0x9ec)](),$gameSystem[_0x52fe0e(0x718)+_0x52fe0e(0x35d)](_0x28b5b3['MapId'],_0x28b5b3[_0x52fe0e(0x617)]||_0xbe6429[_0x52fe0e(0x363)](),_0x28b5b3[_0x52fe0e(0x984)],_0x28b5b3[_0x52fe0e(0x634)+'X'],_0x28b5b3[_0x52fe0e(0x634)+'Y'],_0x28b5b3['IconBlendM'+_0x52fe0e(0x24c)],![]);}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x2a9)+_0x3e3bd2(0x32c)+'d',_0x5bc67b=>{const _0x63693d=_0x3e3bd2;VisuMZ[_0x63693d(0x6e1)+'ams'](_0x5bc67b,_0x5bc67b);const _0x19f1c6=$gameTemp[_0x63693d(0x256)+_0x63693d(0x546)+_0x63693d(0x6e6)+'r']();_0x5bc67b['MapId']=_0x5bc67b['MapId']||$gameMap['mapId'](),$gameSystem[_0x63693d(0x718)+_0x63693d(0x35d)](_0x5bc67b[_0x63693d(0x150)],_0x5bc67b[_0x63693d(0x617)]||_0x19f1c6[_0x63693d(0x363)](),_0x5bc67b[_0x63693d(0x984)],_0x5bc67b[_0x63693d(0x634)+'X'],_0x5bc67b[_0x63693d(0x634)+'Y'],_0x5bc67b[_0x63693d(0x86a)+'ode'],!![]);}),PluginManager[_0x3e3bd2(0x4d9)+'mmand'](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x8d9)+_0x3e3bd2(0x71e),_0x5a99f5=>{const _0x55075a=_0x3e3bd2;VisuMZ['ConvertPar'+_0x55075a(0x10b)](_0x5a99f5,_0x5a99f5);const _0x555063=$gameTemp['getLastPlu'+_0x55075a(0x546)+_0x55075a(0x6e6)+'r']();_0x5a99f5[_0x55075a(0x150)]=_0x5a99f5[_0x55075a(0x150)]||$gameMap[_0x55075a(0x9ec)](),$gameSystem[_0x55075a(0x6e9)+'sOnEventsD'+_0x55075a(0x754)](_0x5a99f5[_0x55075a(0x150)],_0x5a99f5[_0x55075a(0x617)]||_0x555063[_0x55075a(0x363)]());}),PluginManager[_0x3e3bd2(0x4d9)+'mmand'](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x6fa)+'estore',_0x303828=>{const _0x15c0f8=_0x3e3bd2;VisuMZ[_0x15c0f8(0x6e1)+_0x15c0f8(0x10b)](_0x303828,_0x303828);const _0x3334ab=$gameTemp[_0x15c0f8(0x256)+'ginCommand'+_0x15c0f8(0x6e6)+'r']();_0x303828['MapId']=_0x303828[_0x15c0f8(0x150)]||$gameMap[_0x15c0f8(0x9ec)](),$gameSystem['restoreIco'+_0x15c0f8(0x390)+_0x15c0f8(0x1d5)](_0x303828['MapId'],_0x303828[_0x15c0f8(0x617)]||_0x3334ab[_0x15c0f8(0x363)]());}),PluginManager[_0x3e3bd2(0x4d9)+'mmand'](pluginData[_0x3e3bd2(0x16a)],'EventLabel'+'Refresh',_0x1a674b=>{const _0x632564=_0x3e3bd2;if($gameMap)for(const _0x3fbb39 of $gameMap[_0x632564(0x79a)]()){_0x3fbb39[_0x632564(0x90b)](),_0x3fbb39['updateEven'+_0x632564(0xa0c)]();}if(SceneManager['isSceneMap']()){const _0x5a6d1b=SceneManager[_0x632564(0x870)][_0x632564(0x2c3)];if(_0x5a6d1b)_0x5a6d1b['refreshEve'+_0x632564(0x391)]();}}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x1f6)+_0x3e3bd2(0x431),_0x242770=>{const _0x4754e6=_0x3e3bd2,_0x5dfed1={'idnfl':_0x4754e6(0x431),'KXYkF':_0x4754e6(0x65a),'UmgoZ':'Toggle'};VisuMZ[_0x4754e6(0x6e1)+_0x4754e6(0x10b)](_0x242770,_0x242770);switch(_0x242770[_0x4754e6(0x5b3)]){case _0x5dfed1['idnfl']:$gameSystem[_0x4754e6(0x263)+_0x4754e6(0x67d)+'e'](!![]);break;case _0x5dfed1[_0x4754e6(0x75f)]:$gameSystem['setEventLa'+_0x4754e6(0x67d)+'e'](![]);break;case _0x5dfed1[_0x4754e6(0x70c)]:$gameSystem[_0x4754e6(0x263)+_0x4754e6(0x67d)+'e'](!$gameSystem[_0x4754e6(0x353)+'sVisible']());break;}}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x636)+_0x3e3bd2(0x862),_0x4fc319=>{const _0x4e299f=_0x3e3bd2;VisuMZ[_0x4e299f(0x6e1)+_0x4e299f(0x10b)](_0x4fc319,_0x4fc319);const _0x1a4705=$gameTemp['getLastPlu'+_0x4e299f(0x546)+_0x4e299f(0x6e6)+'r']();if(!$gameMap)return;const _0x2d1148=$gameMap[_0x4e299f(0x620)](_0x4fc319[_0x4e299f(0x617)]||_0x1a4705[_0x4e299f(0x363)]());if(_0x2d1148)_0x2d1148[_0x4e299f(0x6f7)+_0x4e299f(0x313)]();}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],'EventLocat'+_0x3e3bd2(0xa1a),_0x467fc8=>{const _0x378035=_0x3e3bd2,_0x256a6e={'aOaki':function(_0x388f2f,_0x46567b){return _0x388f2f-_0x46567b;}};VisuMZ[_0x378035(0x6e1)+_0x378035(0x10b)](_0x467fc8,_0x467fc8);const _0x1d636d=$gameTemp[_0x378035(0x256)+_0x378035(0x546)+_0x378035(0x6e6)+'r'](),_0x5b849e=_0x467fc8[_0x378035(0x150)]||$gameMap['mapId'](),_0x1947d6=_0x467fc8[_0x378035(0x617)]||_0x1d636d[_0x378035(0x363)](),_0x2e91e3=_0x467fc8[_0x378035(0x2de)]||0x18c2+-0xa8f+-0xe33,_0x3db028=_0x467fc8[_0x378035(0x535)]||0x2*-0x1235+0xfda*0x2+-0x6*-0xc9,_0x4a2bb8=_0x467fc8[_0x378035(0x2f8)]||0x259a+-0x617*0x1+-0x1f81,_0x5db882=_0x256a6e[_0x378035(0x52e)](_0x467fc8[_0x378035(0x54c)]||0x1e*0x64+0x1ea+0x1*-0xda1,-0x1629+0x859+0xdd1)[_0x378035(0x795)](-0x1b9+-0x1bbe+0x1d77,-0x1435*0x1+0x400+0x1048),_0x51f1ff=_0x467fc8[_0x378035(0x83a)+_0x378035(0x751)]||0x2a2*-0xb+0x6bb+0x1*0x163b;$gameSystem[_0x378035(0x572)+_0x378035(0x636)+_0x378035(0x869)](_0x5b849e,_0x1947d6,_0x2e91e3,_0x3db028,_0x4a2bb8,_0x5db882,_0x51f1ff);}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x636)+_0x3e3bd2(0x922),_0x20dc95=>{const _0x7492d5=_0x3e3bd2;VisuMZ['ConvertPar'+_0x7492d5(0x10b)](_0x20dc95,_0x20dc95);const _0x4391c5=$gameTemp[_0x7492d5(0x256)+_0x7492d5(0x546)+_0x7492d5(0x6e6)+'r'](),_0x13fef5=_0x20dc95[_0x7492d5(0x150)]||$gameMap[_0x7492d5(0x9ec)](),_0x14a372=_0x20dc95[_0x7492d5(0x617)]||_0x4391c5[_0x7492d5(0x363)]();$gameSystem['deleteSave'+'dEventLoca'+_0x7492d5(0x8ff)](_0x13fef5,_0x14a372);}),VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)]['ApplyPopup'+_0x3e3bd2(0x3c0)+'ngs']=function(_0x237f92,_0x53dd9b){const _0x492263=_0x3e3bd2,_0x3fd3ca={'Jhznu':_0x492263(0x1db)+_0x492263(0x9fc),'YXJmD':function(_0x140a63,_0x334cc5){return _0x140a63||_0x334cc5;}},_0x39708f=_0x3fd3ca[_0x492263(0xa13)]['split']('|');let _0x4592d5=-0x4e9+0x13*-0x16a+0x1fc7;while(!![]){switch(_0x39708f[_0x4592d5++]){case'0':_0x237f92['startOffse'+'t']={'x':_0x53dd9b['startOffse'+'tX']||-0x1ea4*0x1+0x2d5+0x1bcf,'y':_0x53dd9b[_0x492263(0x239)+'tY']||0x104b+-0x130a+0x2bf};continue;case'1':_0x237f92['angle']={'start':_0x53dd9b['startAngle']||0x2*-0x1e6+0x18*0x27+0x24,'end':_0x53dd9b[_0x492263(0x23e)]||-0x15f+0x1*0x729+0x5ca*-0x1};continue;case'2':_0x237f92['startScale']={'x':_0x53dd9b[_0x492263(0x748)+'X']||0x1db5*-0x1+-0x57e+0x2333*0x1,'y':_0x53dd9b[_0x492263(0x748)+'Y']||-0x1759+0x601*0x1+-0x6*-0x2e4};continue;case'3':_0x237f92[_0x492263(0x692)]={'arc':_0x53dd9b[_0x492263(0x7b4)]||-0x12a0+-0xe3e*0x1+0x7*0x4b2};continue;case'4':_0x237f92[_0x492263(0x885)+'on']={'fadeIn':_0x53dd9b[_0x492263(0xdf)+_0x492263(0x6f3)]||-0x3f*-0x7+0x351+-0x50a,'fadeOut':_0x53dd9b['fadeOutDur'+_0x492263(0x61d)]||0x33*-0xb3+-0x1*0x59d+0x2946};continue;case'5':_0x53dd9b=_0x3fd3ca['YXJmD'](_0x53dd9b,{});continue;case'6':_0x237f92['endOffset']={'x':_0x53dd9b[_0x492263(0x2f4)]||0xe9*0x26+-0x1db1+-0x7*0xb3,'y':_0x53dd9b[_0x492263(0x6e8)]||-0x1cf5+0x183a+-0x1*-0x4bb};continue;case'7':_0x237f92['endScale']={'x':_0x53dd9b[_0x492263(0x6b1)]||0x53*0x33+-0x2140+0x185*0xb,'y':_0x53dd9b[_0x492263(0x94a)]||0x1*-0x229d+-0x1be2+-0x3*-0x14d5};continue;}break;}},PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x2b9)+_0x3e3bd2(0x759),_0x5804a8=>{const _0x23e27e=_0x3e3bd2,_0x43b073={'fvjdf':function(_0x342e9a,_0x6f52f6){return _0x342e9a(_0x6f52f6);},'YIXtx':function(_0x33f165,_0x453ef6){return _0x33f165+_0x453ef6;},'lHroX':'VisuMZ_1_M'+'essageCore'+_0x23e27e(0x225)+'ed\x20to\x20run\x20','jnSTq':_0x23e27e(0x693)+_0x23e27e(0x500)+_0x23e27e(0x65e)+_0x23e27e(0x3c3)};if(!SceneManager[_0x23e27e(0x4d8)+_0x23e27e(0x354)]())return;if(!Imported[_0x23e27e(0x2cd)+_0x23e27e(0x4d5)]){$gameTemp[_0x23e27e(0x9ce)]()&&_0x43b073[_0x23e27e(0x89f)](alert,_0x43b073[_0x23e27e(0x602)](_0x43b073[_0x23e27e(0x3c1)],_0x43b073[_0x23e27e(0x80f)]));return;}VisuMZ[_0x23e27e(0x6e1)+_0x23e27e(0x10b)](_0x5804a8,_0x5804a8);const _0x2ee29f={'text':_0x5804a8['MessageTex'+'t']||'','duration':Math[_0x23e27e(0x51d)](_0x5804a8['MsgDuratio'+'n']||0x1*0x3fb+-0x1b4e+0x1*0x178f,0x2d3+0x1dc+-0x4a3)},_0x19c9fe=_0x5804a8[_0x23e27e(0x4e3)]||{};VisuMZ[_0x23e27e(0x5eb)+_0x23e27e(0x8da)][_0x23e27e(0x9bb)+_0x23e27e(0x3c0)+'ngs'](_0x2ee29f,_0x19c9fe);const _0x12533e=SceneManager[_0x23e27e(0x870)]['_spriteset'];if(_0x12533e){const _0x1b445f=$gamePlayer;_0x12533e[_0x23e27e(0x14b)+_0x23e27e(0x437)+_0x23e27e(0xf8)+'up'](_0x1b445f,_0x2ee29f);}}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],'MsgPopupFo'+_0x3e3bd2(0x56c),_0x4e6c5b=>{const _0x59e38a=_0x3e3bd2,_0x5cb2c7={'crNhg':function(_0x8e19a7,_0x737195){return _0x8e19a7(_0x737195);},'GwyNW':function(_0x43de8e,_0x5b4740){return _0x43de8e+_0x5b4740;},'sVtLt':_0x59e38a(0x2cd)+'essageCore'+_0x59e38a(0x225)+_0x59e38a(0xa18),'CKCGc':_0x59e38a(0x693)+'up:\x20Player'+_0x59e38a(0x65e)+'ommand!'};if(!SceneManager[_0x59e38a(0x4d8)+_0x59e38a(0x354)]())return;if(!Imported[_0x59e38a(0x2cd)+_0x59e38a(0x4d5)]){$gameTemp[_0x59e38a(0x9ce)]()&&_0x5cb2c7[_0x59e38a(0x6db)](alert,_0x5cb2c7[_0x59e38a(0x24a)](_0x5cb2c7[_0x59e38a(0x82e)],_0x5cb2c7[_0x59e38a(0x2ce)]));return;}VisuMZ[_0x59e38a(0x6e1)+'ams'](_0x4e6c5b,_0x4e6c5b);const _0x854af2=_0x4e6c5b['FollowerIn'+_0x59e38a(0x2d5)]||-0x1333*-0x1+-0x6a9+-0x6*0x217,_0x514046={'text':_0x4e6c5b[_0x59e38a(0x328)+'t']||'','duration':Math[_0x59e38a(0x51d)](_0x4e6c5b[_0x59e38a(0x2f5)+'n']||-0x472*-0x1+0x485+-0x8bb,0x301*-0x6+-0x1*0x1c8d+0x6a9*0x7)},_0x3e6f12=_0x4e6c5b[_0x59e38a(0x4e3)]||{};VisuMZ[_0x59e38a(0x5eb)+_0x59e38a(0x8da)][_0x59e38a(0x9bb)+'ExtraSetti'+_0x59e38a(0x319)](_0x514046,_0x3e6f12);const _0x46f5f7=SceneManager[_0x59e38a(0x870)][_0x59e38a(0x2c3)];if(_0x46f5f7){const _0x2bd514=$gamePlayer[_0x59e38a(0x181)]()[_0x59e38a(0x51b)](_0x854af2);_0x46f5f7[_0x59e38a(0x14b)+_0x59e38a(0x437)+_0x59e38a(0xf8)+'up'](_0x2bd514,_0x514046);}}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],'MsgPopupEv'+_0x3e3bd2(0x498),_0x6a64ed=>{const _0x1ae1f7=_0x3e3bd2,_0x5bb21d={'OhGXG':function(_0x2af891,_0x413f27){return _0x2af891(_0x413f27);},'pUsVe':function(_0x2d1c5c,_0x4a992d){return _0x2d1c5c+_0x4a992d;},'NZGDP':'VisuMZ_1_M'+_0x1ae1f7(0x4d5)+'\x20is\x20requir'+_0x1ae1f7(0xa18),'bOQWV':_0x1ae1f7(0x693)+_0x1ae1f7(0x500)+_0x1ae1f7(0x65e)+_0x1ae1f7(0x3c3)};if(!SceneManager[_0x1ae1f7(0x4d8)+_0x1ae1f7(0x354)]())return;if(!Imported[_0x1ae1f7(0x2cd)+_0x1ae1f7(0x4d5)]){$gameTemp[_0x1ae1f7(0x9ce)]()&&_0x5bb21d[_0x1ae1f7(0x478)](alert,_0x5bb21d['pUsVe'](_0x5bb21d[_0x1ae1f7(0x98e)],_0x5bb21d[_0x1ae1f7(0x919)]));return;}VisuMZ[_0x1ae1f7(0x6e1)+_0x1ae1f7(0x10b)](_0x6a64ed,_0x6a64ed);const _0x3cdc78=$gameTemp['getLastPlu'+'ginCommand'+_0x1ae1f7(0x6e6)+'r'](),_0x3d6d8d=_0x6a64ed[_0x1ae1f7(0x617)]||(_0x3cdc78?_0x3cdc78[_0x1ae1f7(0x363)]():0xb88+-0x1*0x19cd+0xe46),_0x1f3c3b={'text':_0x6a64ed[_0x1ae1f7(0x328)+'t']||'','duration':Math[_0x1ae1f7(0x51d)](_0x6a64ed[_0x1ae1f7(0x2f5)+'n']||-0x83*0x2+0x6*-0x4bf+0xb*0x2b4,0x27c+0x285+-0x4f5)},_0x10bb60=_0x6a64ed[_0x1ae1f7(0x4e3)]||{};VisuMZ[_0x1ae1f7(0x5eb)+_0x1ae1f7(0x8da)]['ApplyPopup'+_0x1ae1f7(0x3c0)+_0x1ae1f7(0x319)](_0x1f3c3b,_0x10bb60);const _0x205d81=SceneManager['_scene'][_0x1ae1f7(0x2c3)];if(_0x205d81){const _0x397bd5=$gameMap['event'](_0x3d6d8d);_0x205d81['createEven'+'tsMoveCore'+_0x1ae1f7(0xf8)+'up'](_0x397bd5,_0x1f3c3b);}}),PluginManager['registerCo'+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x920)+'rgetTile',_0x5767c2=>{const _0x460eb2=_0x3e3bd2,_0x234274={'ozlTc':function(_0x50eda0,_0x19ae94){return _0x50eda0(_0x19ae94);},'IhKtZ':function(_0x2e749a,_0x39699e){return _0x2e749a+_0x39699e;},'hgfUg':_0x460eb2(0x2cd)+_0x460eb2(0x4d5)+'\x20is\x20requir'+_0x460eb2(0xa18),'RWGUL':'\x22Event\x20Pop'+'up:\x20Player'+_0x460eb2(0x65e)+_0x460eb2(0x3c3)};if(!SceneManager[_0x460eb2(0x4d8)+_0x460eb2(0x354)]())return;if(!Imported[_0x460eb2(0x2cd)+_0x460eb2(0x4d5)]){$gameTemp['isPlaytest']()&&_0x234274[_0x460eb2(0x1c1)](alert,_0x234274[_0x460eb2(0x6bc)](_0x234274[_0x460eb2(0xa07)],_0x234274[_0x460eb2(0x1f2)]));return;}VisuMZ[_0x460eb2(0x6e1)+_0x460eb2(0x10b)](_0x5767c2,_0x5767c2);const _0x54051e={'text':_0x5767c2[_0x460eb2(0x328)+'t']||'','duration':Math[_0x460eb2(0x51d)](_0x5767c2[_0x460eb2(0x2f5)+'n']||0x1a3*-0x17+0x98*-0x38+0x4721,-0x1f09+0x7*0x38f+0x62c),'tileCoordinates':{'x':Math[_0x460eb2(0x1f4)](_0x5767c2[_0x460eb2(0x301)]||-0xec1*-0x1+0x5d6+-0xfb*0x15),'y':Math[_0x460eb2(0x1f4)](_0x5767c2[_0x460eb2(0x32b)]||0x1*-0x2f5+0x1133+-0xe3e)}},_0x310c48=_0x5767c2[_0x460eb2(0x4e3)]||{};VisuMZ[_0x460eb2(0x5eb)+_0x460eb2(0x8da)][_0x460eb2(0x9bb)+_0x460eb2(0x3c0)+_0x460eb2(0x319)](_0x54051e,_0x310c48);const _0xf6cc73=SceneManager[_0x460eb2(0x870)][_0x460eb2(0x2c3)];_0xf6cc73&&_0xf6cc73['createEven'+_0x460eb2(0x437)+_0x460eb2(0x380)+'ePopup'](_0x54051e);}),PluginManager['registerCo'+_0x3e3bd2(0x74f)](pluginData['name'],'EventTimer'+'ExpireEven'+'t',_0xf97442=>{const _0x45f811=_0x3e3bd2;VisuMZ[_0x45f811(0x6e1)+_0x45f811(0x10b)](_0xf97442,_0xf97442);const _0x29b72b=_0xf97442[_0x45f811(0x1a7)+_0x45f811(0x875)];$gameTimer[_0x45f811(0x108)+_0x45f811(0x413)](_0x29b72b);}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],'EventTimer'+_0x3e3bd2(0x343)+'r',_0x20d9e8=>{const _0x470821=_0x3e3bd2;$gameTimer[_0x470821(0x108)+_0x470821(0x413)](0x1c82*-0x1+-0xf5a+-0x2*-0x15ee);}),PluginManager[_0x3e3bd2(0x4d9)+'mmand'](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x438)+_0x3e3bd2(0x658),_0x526b86=>{const _0x4c8e32=_0x3e3bd2,_0x53b9cb={'eYhfX':function(_0x24e75c,_0x500a94){return _0x24e75c*_0x500a94;},'iXEIy':function(_0x5e1385,_0x34fbf2){return _0x5e1385*_0x34fbf2;},'NddYi':function(_0x431635,_0x584d33){return _0x431635*_0x584d33;}};if(!$gameTimer[_0x4c8e32(0x50e)]())return;VisuMZ[_0x4c8e32(0x6e1)+'ams'](_0x526b86,_0x526b86);let _0xef75bc=-0x62+0x6d7+-0x675;_0xef75bc+=_0x526b86[_0x4c8e32(0x318)],_0xef75bc+=_0x53b9cb['eYhfX'](_0x526b86[_0x4c8e32(0x45a)],0x15c1+0x1a8e+0x3013*-0x1),_0xef75bc+=_0x53b9cb['eYhfX'](_0x53b9cb[_0x4c8e32(0x3dc)](_0x526b86[_0x4c8e32(0x48f)],0x1*-0x42d+0x1c08+-0x179f),0x16aa+-0x228e*-0x1+-0x1c7e*0x2),_0xef75bc+=_0x53b9cb[_0x4c8e32(0x4d6)](_0x53b9cb[_0x4c8e32(0x48b)](_0x53b9cb['eYhfX'](_0x526b86['Hours'],-0x1*-0x140b+0x20b7+-0x3486),-0x1*-0x130e+0x3*0x293+-0x1a8b),0x62e*-0x6+-0x1*-0x1327+0x1229),$gameTimer['gainFrames'](_0xef75bc);}),PluginManager['registerCo'+_0x3e3bd2(0x74f)](pluginData['name'],_0x3e3bd2(0x438)+_0x3e3bd2(0x29c),_0x14a55f=>{const _0x2a9374=_0x3e3bd2,_0x803bd8={'dFekO':function(_0x3be1d2,_0x28ac10){return _0x3be1d2*_0x28ac10;},'jwGjc':function(_0x5a6b83,_0x506045){return _0x5a6b83*_0x506045;}};if(!$gameTimer[_0x2a9374(0x50e)]())return;VisuMZ[_0x2a9374(0x6e1)+_0x2a9374(0x10b)](_0x14a55f,_0x14a55f);let _0x631bbc=-0x1a99+0xe92+0x1*0xc07;_0x631bbc+=_0x14a55f[_0x2a9374(0x318)],_0x631bbc+=_0x803bd8[_0x2a9374(0x5ed)](_0x14a55f['Seconds'],-0x355*-0x6+0x1641*-0x1+-0x1*-0x27f),_0x631bbc+=_0x803bd8[_0x2a9374(0x6f5)](_0x803bd8[_0x2a9374(0x5ed)](_0x14a55f[_0x2a9374(0x48f)],-0x574+0x238a+0x1*-0x1dda),-0x1b29+-0x2394+0x7*0x8ff),_0x631bbc+=_0x803bd8[_0x2a9374(0x5ed)](_0x803bd8[_0x2a9374(0x5ed)](_0x803bd8[_0x2a9374(0x5ed)](_0x14a55f[_0x2a9374(0x1a4)],0x1*-0x170b+0x1*-0x37e+0x59*0x4d),0x1*-0x481+-0xeab+0x1368),-0x11fa*0x1+-0x1998+-0x216*-0x15),$gameTimer[_0x2a9374(0x182)](_0x631bbc);}),PluginManager[_0x3e3bd2(0x4d9)+'mmand'](pluginData['name'],_0x3e3bd2(0x438)+_0x3e3bd2(0x6b4),_0x23c60d=>{const _0x44560f=_0x3e3bd2;if(!$gameTimer[_0x44560f(0x50e)]())return;$gameTimer['pause']();}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x438)+_0x3e3bd2(0x9c2),_0x26d790=>{const _0x23474a=_0x3e3bd2;if(!$gameTimer[_0x23474a(0x50e)]())return;$gameTimer[_0x23474a(0x307)]();}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],'EventTimer'+_0x3e3bd2(0x586),_0xc753fe=>{const _0x553d57=_0x3e3bd2;VisuMZ[_0x553d57(0x6e1)+_0x553d57(0x10b)](_0xc753fe,_0xc753fe);const _0xff2780=_0xc753fe[_0x553d57(0x586)]||0x4*-0x51d+0x45e*-0x3+0x218e;$gameTimer[_0x553d57(0x55d)+'d'](_0xff2780);}),PluginManager['registerCo'+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x8e7)+'tGlobalCha'+'se',_0x102f68=>{const _0x313641=_0x3e3bd2;VisuMZ['ConvertPar'+'ams'](_0x102f68,_0x102f68);const _0x59615e=!_0x102f68[_0x313641(0x52f)];$gameSystem[_0x313641(0x39c)+_0x313641(0x269)+'ng'](_0x59615e);}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData['name'],_0x3e3bd2(0x8e7)+_0x3e3bd2(0x3cb)+'se',_0xc33c06=>{const _0x1e0691=_0x3e3bd2,_0x50fa05={'QwKVV':function(_0x49b7a8,_0x4a4427){return _0x49b7a8-_0x4a4427;}};VisuMZ['ConvertPar'+_0x1e0691(0x10b)](_0xc33c06,_0xc33c06);const _0x5cd3ea=_0x50fa05[_0x1e0691(0x1a3)](_0xc33c06[_0x1e0691(0x472)]||0x2*-0x1113+-0x4*-0x3bf+0x132a,-0x78d*-0x1+0x133f+-0x1acb),_0x59e85b=!_0xc33c06['Chase'],_0x5f1e9d=$gamePlayer[_0x1e0691(0x181)]()[_0x1e0691(0x51b)](_0x5cd3ea);if(_0x5f1e9d)_0x5f1e9d[_0x1e0691(0x39d)+'f'](_0x59e85b);}),PluginManager['registerCo'+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x8e7)+_0x3e3bd2(0x5ce),_0x42330a=>{const _0x5d2969=_0x3e3bd2;VisuMZ[_0x5d2969(0x6e1)+_0x5d2969(0x10b)](_0x42330a,_0x42330a);const _0x3afdd1=_0x42330a[_0x5d2969(0x472)];$gameSystem[_0x5d2969(0x36f)+'ledFollowe'+_0x5d2969(0x1bc)](_0x3afdd1);}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData['name'],_0x3e3bd2(0x948)+'set',_0x37672e=>{const _0x1dabd1=_0x3e3bd2;VisuMZ[_0x1dabd1(0x6e1)+_0x1dabd1(0x10b)](_0x37672e,_0x37672e),$gameSystem[_0x1dabd1(0x36f)+_0x1dabd1(0xa10)+_0x1dabd1(0x1bc)](0x95*0x43+-0x810+-0x1eef*0x1),$gameSystem[_0x1dabd1(0x39c)+_0x1dabd1(0x269)+'ng'](![]);for(const _0x4baeac of $gamePlayer[_0x1dabd1(0x181)]()[_0x1dabd1(0x9b7)]){if(_0x4baeac)_0x4baeac[_0x1dabd1(0x39d)+'f'](![]);}}),PluginManager[_0x3e3bd2(0x4d9)+'mmand'](pluginData['name'],'SwitchGetS'+_0x3e3bd2(0x3d1)+_0x3e3bd2(0x2ba),_0x5c1f5d=>{const _0x62dc90=_0x3e3bd2;VisuMZ[_0x62dc90(0x6e1)+_0x62dc90(0x10b)](_0x5c1f5d,_0x5c1f5d);const _0x33f836=$gameTemp[_0x62dc90(0x256)+_0x62dc90(0x546)+'Interprete'+'r']();_0x5c1f5d[_0x62dc90(0x150)]=_0x5c1f5d[_0x62dc90(0x150)]||$gameMap[_0x62dc90(0x9ec)]();const _0xcee71c=[_0x5c1f5d[_0x62dc90(0x150)],_0x5c1f5d[_0x62dc90(0x617)]||_0x33f836[_0x62dc90(0x363)](),_0x5c1f5d['Letter']],_0x122dd3=_0x5c1f5d[_0x62dc90(0x1ca)+_0x62dc90(0x29e)],_0x26106e=$gameSelfSwitches[_0x62dc90(0x2e6)](_0xcee71c)||![];$gameSwitches[_0x62dc90(0xa00)](_0x122dd3,_0x26106e);}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x22b)+_0x3e3bd2(0x1ac)+'D',_0x1dfd27=>{const _0x4dabc4=_0x3e3bd2,_0x1f219b={'duoia':_0x4dabc4(0x230)+'h\x20%1'};VisuMZ[_0x4dabc4(0x6e1)+_0x4dabc4(0x10b)](_0x1dfd27,_0x1dfd27);const _0x32cbd4=$gameTemp[_0x4dabc4(0x256)+'ginCommand'+_0x4dabc4(0x6e6)+'r']();_0x1dfd27[_0x4dabc4(0x150)]=_0x1dfd27[_0x4dabc4(0x150)]||$gameMap[_0x4dabc4(0x9ec)]();const _0x4041a4=[_0x1dfd27[_0x4dabc4(0x150)],_0x1dfd27[_0x4dabc4(0x617)]||_0x32cbd4[_0x4dabc4(0x363)](),_0x1f219b[_0x4dabc4(0x71d)]['format'](_0x1dfd27[_0x4dabc4(0x514)])],_0x2cedba=_0x1dfd27[_0x4dabc4(0x1ca)+_0x4dabc4(0x29e)],_0x3f5797=$gameSelfSwitches[_0x4dabc4(0x2e6)](_0x4041a4)||![];$gameSwitches[_0x4dabc4(0xa00)](_0x2cedba,_0x3f5797);}),PluginManager['registerCo'+_0x3e3bd2(0x74f)](pluginData['name'],'VariableGe'+_0x3e3bd2(0x4b5)+'bleID',_0x365987=>{const _0x29e629=_0x3e3bd2,_0x1ffe8f={'RFTVQ':_0x29e629(0x694)+_0x29e629(0x3a7)};VisuMZ['ConvertPar'+'ams'](_0x365987,_0x365987);const _0x22f4dd=$gameTemp[_0x29e629(0x256)+_0x29e629(0x546)+'Interprete'+'r']();_0x365987[_0x29e629(0x150)]=_0x365987[_0x29e629(0x150)]||$gameMap[_0x29e629(0x9ec)]();const _0x43b829=[_0x365987[_0x29e629(0x150)],_0x365987['EventId']||_0x22f4dd['eventId'](),_0x1ffe8f['RFTVQ'][_0x29e629(0x96d)](_0x365987[_0x29e629(0x51a)])],_0x1a8abb=_0x365987[_0x29e629(0xe4)+'ableId'],_0x136743=$gameSelfSwitches[_0x29e629(0x2e6)](_0x43b829)||![];$gameVariables[_0x29e629(0xa00)](_0x1a8abb,_0x136743);}),PluginManager['registerCo'+'mmand'](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x6bf)+'To',_0x44699a=>{const _0x5881d1=_0x3e3bd2,_0xcf02={'rINwY':function(_0x4f852a,_0x11551e){return _0x4f852a!==_0x11551e;},'KFBJQ':function(_0x102cf1,_0x311c52){return _0x102cf1===_0x311c52;},'yKZOf':_0x5881d1(0x8af)};VisuMZ['ConvertPar'+_0x5881d1(0x10b)](_0x44699a,_0x44699a);if(!$gameMap)return;const _0x473aa9=$gameTemp[_0x5881d1(0x256)+_0x5881d1(0x546)+'Interprete'+'r'](),_0x55095c=_0x44699a[_0x5881d1(0x4e9)+_0x5881d1(0x8bb)];_0x44699a['Step1MapId']=_0x44699a[_0x5881d1(0x5a6)]||$gameMap[_0x5881d1(0x9ec)](),_0x44699a['Step2MapId']=_0x44699a[_0x5881d1(0x49d)]||$gameMap[_0x5881d1(0x9ec)](),_0x44699a[_0x5881d1(0x719)+'me']=_0x44699a[_0x5881d1(0x719)+'me']['toUpperCas'+'e']()[_0x5881d1(0x66f)]();if(!_0x55095c&&_0xcf02[_0x5881d1(0x629)](_0x44699a[_0x5881d1(0x5a6)],$gameMap['mapId']()))return;if(_0xcf02[_0x5881d1(0x26b)]($gameMap[_0x5881d1(0x9ec)](),_0x44699a[_0x5881d1(0x5a6)])){const _0x3b9347=$gameMap[_0x5881d1(0x620)](_0x44699a[_0x5881d1(0x57b)+'Id']||_0x473aa9['eventId']());if(!_0x3b9347)return;_0xcf02[_0x5881d1(0x629)](_0x44699a[_0x5881d1(0x719)+'me'],_0xcf02[_0x5881d1(0x135)])?_0x3b9347[_0x5881d1(0x103)+_0x5881d1(0x753)](_0x44699a['TemplateNa'+'me']):_0x3b9347['morphInto'](_0x44699a[_0x5881d1(0x49d)],_0x44699a[_0x5881d1(0x4a1)+'Id']||_0x473aa9[_0x5881d1(0x363)]());}_0x55095c&&$gameSystem[_0x5881d1(0x39e)+'vedMorphEv'+_0x5881d1(0x1e6)](_0x44699a[_0x5881d1(0x5a6)],_0x44699a[_0x5881d1(0x57b)+'Id'],_0x44699a['TemplateNa'+'me'],_0x44699a[_0x5881d1(0x49d)],_0x44699a[_0x5881d1(0x4a1)+'Id']);}),PluginManager[_0x3e3bd2(0x4d9)+'mmand'](pluginData['name'],'MorphEvent'+_0x3e3bd2(0x6c5),_0x53ebac=>{const _0x4ad93e=_0x3e3bd2,_0x1ff35c={'XuLUb':function(_0x53318c,_0x3f67f3){return _0x53318c===_0x3f67f3;}};VisuMZ[_0x4ad93e(0x6e1)+_0x4ad93e(0x10b)](_0x53ebac,_0x53ebac);if(!$gameMap)return;const _0x1e1492=$gameTemp['getLastPlu'+_0x4ad93e(0x546)+'Interprete'+'r']();_0x53ebac[_0x4ad93e(0x150)]=_0x53ebac[_0x4ad93e(0x150)]||$gameMap[_0x4ad93e(0x9ec)]();if(_0x1ff35c['XuLUb']($gameMap[_0x4ad93e(0x9ec)](),_0x53ebac[_0x4ad93e(0x150)])){const _0x3891b6=$gameMap['event'](_0x53ebac[_0x4ad93e(0x617)]||_0x1e1492[_0x4ad93e(0x363)]());_0x3891b6[_0x4ad93e(0x98d)+'h']();}_0x53ebac['RemovePres'+_0x4ad93e(0x593)]&&$gameSystem[_0x4ad93e(0x47b)+'ervedMorph'+'EventDataK'+'ey'](_0x53ebac[_0x4ad93e(0x150)],_0x53ebac['EventId']||_0x1e1492[_0x4ad93e(0x363)]());}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData['name'],_0x3e3bd2(0x40f)+_0x3e3bd2(0x81a),_0x56da78=>{const _0x1a9c75=_0x3e3bd2;VisuMZ[_0x1a9c75(0x6e1)+'ams'](_0x56da78,_0x56da78),$gameSystem[_0x1a9c75(0x718)+'onData']($gamePlayer,_0x56da78['IconIndex'],_0x56da78[_0x1a9c75(0x634)+'X'],_0x56da78[_0x1a9c75(0x634)+'Y'],_0x56da78[_0x1a9c75(0x86a)+_0x1a9c75(0x24c)]);}),PluginManager[_0x3e3bd2(0x4d9)+'mmand'](pluginData['name'],_0x3e3bd2(0x40f)+_0x3e3bd2(0x7fc),_0x22fc68=>{const _0xbda3a1=_0x3e3bd2;VisuMZ[_0xbda3a1(0x6e1)+_0xbda3a1(0x10b)](_0x22fc68,_0x22fc68),$gameSystem[_0xbda3a1(0x6e9)+_0xbda3a1(0x38f)+_0xbda3a1(0x5d2)]($gamePlayer);}),PluginManager[_0x3e3bd2(0x4d9)+'mmand'](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x700)+_0x3e3bd2(0x6b5),_0x3e9efd=>{const _0x5b4a0e=_0x3e3bd2;VisuMZ[_0x5b4a0e(0x6e1)+_0x5b4a0e(0x10b)](_0x3e9efd,_0x3e9efd),$gameSystem[_0x5b4a0e(0x553)+_0x5b4a0e(0x5a3)+'ble'](!_0x3e9efd[_0x5b4a0e(0x5f2)]);}),PluginManager['registerCo'+'mmand'](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x700)+_0x3e3bd2(0x28d)+'al',_0x548a6c=>{const _0x38114f=_0x3e3bd2;VisuMZ[_0x38114f(0x6e1)+_0x38114f(0x10b)](_0x548a6c,_0x548a6c),$gameSystem['setPlayerD'+_0x38114f(0x6af)+'ting'](_0x548a6c[_0x38114f(0x3d5)]);}),PluginManager['registerCo'+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],'SelfDataRe'+_0x3e3bd2(0xe2),_0x3e5b52=>{const _0x295587=_0x3e3bd2;VisuMZ[_0x295587(0x6e1)+'ams'](_0x3e5b52,_0x3e5b52);const _0x235360=_0x3e5b52[_0x295587(0x150)]||$gameMap[_0x295587(0x9ec)]();$gameSelfSwitches[_0x295587(0x5e4)+_0x295587(0x9f4)+_0x295587(0x859)](_0x235360);}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x537)+'ABCD',_0x2ee9e1=>{const _0x170952=_0x3e3bd2,_0x1e02f6={'alIKF':'OFF','oBjKQ':'Toggle'};VisuMZ[_0x170952(0x6e1)+_0x170952(0x10b)](_0x2ee9e1,_0x2ee9e1);const _0x56e8d9=$gameTemp['getLastPlu'+_0x170952(0x546)+_0x170952(0x6e6)+'r']();_0x2ee9e1[_0x170952(0x150)]=_0x2ee9e1[_0x170952(0x150)]||$gameMap[_0x170952(0x9ec)]();const _0x136bc0=[_0x2ee9e1[_0x170952(0x150)],_0x2ee9e1[_0x170952(0x617)]||_0x56e8d9[_0x170952(0x363)](),_0x2ee9e1[_0x170952(0x216)]];switch(_0x2ee9e1['Value']){case'ON':$gameSelfSwitches[_0x170952(0xa00)](_0x136bc0,!![]);break;case _0x1e02f6['alIKF']:$gameSelfSwitches[_0x170952(0xa00)](_0x136bc0,![]);break;case _0x1e02f6['oBjKQ']:$gameSelfSwitches[_0x170952(0xa00)](_0x136bc0,!$gameSelfSwitches[_0x170952(0x2e6)](_0x136bc0));break;}}),PluginManager['registerCo'+'mmand'](pluginData[_0x3e3bd2(0x16a)],'SelfSwitch'+'ID',_0x4a8641=>{const _0x270488=_0x3e3bd2,_0x2041e4={'kJeON':'Self\x20Switc'+_0x270488(0x7e7),'lxlqG':_0x270488(0x25c),'cgyrK':_0x270488(0x74a)};VisuMZ[_0x270488(0x6e1)+_0x270488(0x10b)](_0x4a8641,_0x4a8641);const _0x578297=$gameTemp[_0x270488(0x256)+'ginCommand'+'Interprete'+'r']();_0x4a8641[_0x270488(0x150)]=_0x4a8641[_0x270488(0x150)]||$gameMap[_0x270488(0x9ec)]();const _0x20db83=[_0x4a8641[_0x270488(0x150)],_0x4a8641['EventId']||_0x578297['eventId'](),_0x2041e4[_0x270488(0x4c8)][_0x270488(0x96d)](_0x4a8641[_0x270488(0x514)])];switch(_0x4a8641[_0x270488(0x2e4)]){case'ON':$gameSelfSwitches['setValue'](_0x20db83,!![]);break;case _0x2041e4[_0x270488(0x597)]:$gameSelfSwitches[_0x270488(0xa00)](_0x20db83,![]);break;case _0x2041e4['cgyrK']:$gameSelfSwitches['setValue'](_0x20db83,!$gameSelfSwitches[_0x270488(0x2e6)](_0x20db83));break;}}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x57a)+_0x3e3bd2(0x5c1),_0x1732d2=>{const _0x764c04=_0x3e3bd2,_0x5d9886={'JPFmp':_0x764c04(0x694)+_0x764c04(0x3a7)};VisuMZ[_0x764c04(0x6e1)+'ams'](_0x1732d2,_0x1732d2);const _0x414ff9=$gameTemp[_0x764c04(0x256)+_0x764c04(0x546)+'Interprete'+'r']();_0x1732d2[_0x764c04(0x150)]=_0x1732d2[_0x764c04(0x150)]||$gameMap[_0x764c04(0x9ec)]();const _0x1784cb=[_0x1732d2[_0x764c04(0x150)],_0x1732d2[_0x764c04(0x617)]||_0x414ff9[_0x764c04(0x363)](),_0x5d9886[_0x764c04(0x558)][_0x764c04(0x96d)](_0x1732d2[_0x764c04(0x51a)])],_0x199626=VisuMZ[_0x764c04(0x1ed)+_0x764c04(0x468)]($gameSelfSwitches[_0x764c04(0x2e6)](_0x1784cb),_0x1732d2[_0x764c04(0x2e4)],_0x1732d2['Operation']);$gameSelfSwitches['setValue'](_0x1784cb,_0x199626);}),PluginManager[_0x3e3bd2(0x4d9)+'mmand'](pluginData['name'],_0x3e3bd2(0x392)+'AtXY',_0x1fbbda=>{const _0x429076=_0x3e3bd2,_0x1294a1={'bdtBb':function(_0xe27d51,_0xae36e9){return _0xe27d51+_0xae36e9;},'VWCqB':function(_0x3d2b2a,_0x11c869){return _0x3d2b2a!==_0x11c869;},'YzIVO':'You\x20do\x20not'+_0x429076(0x32f)+_0x429076(0x3ed)+_0x429076(0x338)+'\x0a','wSunX':_0x429076(0x245)+'ed\x20Maps.\x0a\x0a','TyWqj':_0x429076(0x47d)+_0x429076(0x502)+'s\x20&\x20Moveme'+_0x429076(0x421),'tshlT':'Plugin\x20Par'+_0x429076(0x631)+_0x429076(0x340)+_0x429076(0x306)+'ngs\x20>\x0a','zzbas':_0x429076(0x7f3)+_0x429076(0x850)+_0x429076(0x470)+'%1','WnjCm':function(_0x388e60,_0x393e2f){return _0x388e60(_0x393e2f);}};VisuMZ[_0x429076(0x6e1)+_0x429076(0x10b)](_0x1fbbda,_0x1fbbda);const _0x49c10c=$gameTemp[_0x429076(0x256)+'ginCommand'+_0x429076(0x6e6)+'r'](),_0x3606a0={'template':_0x1fbbda[_0x429076(0x719)+'me'],'mapId':_0x1fbbda[_0x429076(0x150)]||$gameMap[_0x429076(0x9ec)](),'eventId':_0x1fbbda[_0x429076(0x617)]||_0x49c10c[_0x429076(0x363)](),'x':_0x1fbbda[_0x429076(0x2de)],'y':_0x1fbbda[_0x429076(0x535)],'spawnPreserved':_0x1fbbda[_0x429076(0x507)],'spawnEventId':_0x1294a1[_0x429076(0x549)]($gameMap[_0x429076(0x388)+_0x429076(0x876)][_0x429076(0x3cf)],-0x1*-0x1fd5+0x1*-0xb9f+0x104e*-0x1)},_0x1e72f6=_0x1fbbda['SuccessSwi'+'tchId']||0x56b+0xc7*-0x31+0x20ac;if(!VisuMZ[_0x429076(0x41f)+_0x429076(0x747)][_0x3606a0['mapId']]&&_0x1294a1[_0x429076(0x25f)](_0x3606a0[_0x429076(0x9ec)],$gameMap[_0x429076(0x9ec)]())){let _0x1fbe46=_0x1294a1[_0x429076(0x63c)][_0x429076(0x96d)](_0x3606a0[_0x429076(0x9ec)]);_0x1fbe46+=_0x1294a1['wSunX'],_0x1fbe46+=_0x1294a1['TyWqj'],_0x1fbe46+=_0x1294a1['tshlT'],_0x1fbe46+=_0x1294a1['zzbas'][_0x429076(0x96d)](_0x3606a0[_0x429076(0x9ec)]),_0x1294a1['WnjCm'](alert,_0x1fbe46);return;}const _0x13bc65=$gameMap[_0x429076(0x28f)+'wnedEventA'+_0x429076(0x91d)](_0x3606a0,_0x1fbbda['Collision'],_0x1fbbda[_0x429076(0x99d)+'y']);_0x1e72f6&&$gameSwitches['setValue'](_0x1e72f6,!!_0x13bc65);}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],'SpawnEvent'+_0x3e3bd2(0x3cc),_0x571d03=>{const _0x3262d9=_0x3e3bd2,_0x51aea8={'eicgm':function(_0x2ba341,_0x3034a7){return _0x2ba341+_0x3034a7;},'htmzh':function(_0x387245,_0x21c1ca){return _0x387245!==_0x21c1ca;},'qGlZR':_0x3262d9(0x3aa)+_0x3262d9(0x32f)+_0x3262d9(0x3ed)+_0x3262d9(0x338)+'\x0a','BGqoR':_0x3262d9(0x245)+'ed\x20Maps.\x0a\x0a','gnbfK':_0x3262d9(0x47d)+_0x3262d9(0x502)+_0x3262d9(0x991)+_0x3262d9(0x421),'hbHBF':_0x3262d9(0x601)+_0x3262d9(0x631)+_0x3262d9(0x340)+'late\x20Setti'+'ngs\x20>\x0a','DWnut':'Preloaded\x20'+_0x3262d9(0x850)+_0x3262d9(0x470)+'%1','agZeK':function(_0x3bc226,_0x54822b){return _0x3bc226(_0x54822b);}};VisuMZ[_0x3262d9(0x6e1)+_0x3262d9(0x10b)](_0x571d03,_0x571d03);const _0x27c2cc=$gameTemp[_0x3262d9(0x256)+_0x3262d9(0x546)+_0x3262d9(0x6e6)+'r'](),_0x36a198={'template':_0x571d03[_0x3262d9(0x719)+'me'],'mapId':_0x571d03[_0x3262d9(0x150)]||$gameMap[_0x3262d9(0x9ec)](),'eventId':_0x571d03[_0x3262d9(0x617)]||_0x27c2cc[_0x3262d9(0x363)](),'x':-(-0x152e+0x664+0xecb),'y':-(0x9a6+0x906*-0x1+-0x35*0x3),'spawnPreserved':_0x571d03[_0x3262d9(0x507)],'spawnEventId':_0x51aea8[_0x3262d9(0x376)]($gameMap[_0x3262d9(0x388)+_0x3262d9(0x876)][_0x3262d9(0x3cf)],-0x8b*-0xd+0x1*-0x716+0x13*0x35)},_0x50b972=_0x571d03[_0x3262d9(0x5f4)+_0x3262d9(0x85f)]||0x179f+0x93a+-0x20d9;if(!VisuMZ[_0x3262d9(0x41f)+_0x3262d9(0x747)][_0x36a198[_0x3262d9(0x9ec)]]&&_0x51aea8[_0x3262d9(0x577)](_0x36a198[_0x3262d9(0x9ec)],$gameMap[_0x3262d9(0x9ec)]())){let _0x5defd0=_0x51aea8[_0x3262d9(0x4ed)][_0x3262d9(0x96d)](_0x36a198[_0x3262d9(0x9ec)]);_0x5defd0+=_0x51aea8[_0x3262d9(0x757)],_0x5defd0+=_0x51aea8[_0x3262d9(0x730)],_0x5defd0+=_0x51aea8['hbHBF'],_0x5defd0+=_0x51aea8['DWnut'][_0x3262d9(0x96d)](_0x36a198[_0x3262d9(0x9ec)]),_0x51aea8['agZeK'](alert,_0x5defd0);return;}const _0x187ca3=$gameMap[_0x3262d9(0x28f)+_0x3262d9(0x6ee)+'tRegion'](_0x36a198,_0x571d03[_0x3262d9(0x905)],_0x571d03[_0x3262d9(0x70f)],_0x571d03[_0x3262d9(0x99d)+'y']);_0x50b972&&$gameSwitches[_0x3262d9(0xa00)](_0x50b972,!!_0x187ca3);}),PluginManager[_0x3e3bd2(0x4d9)+'mmand'](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x392)+_0x3e3bd2(0x7e2)+'ag',_0x37c7e8=>{const _0x49d323=_0x3e3bd2,_0x53b883={'FDiRW':function(_0x4d0abe,_0x4cac23){return _0x4d0abe+_0x4cac23;},'GgPlT':function(_0x320e08,_0x30f424){return _0x320e08!==_0x30f424;},'AEfvu':_0x49d323(0x3aa)+_0x49d323(0x32f)+'%1\x20added\x20t'+_0x49d323(0x338)+'\x0a','MkShc':'of\x20Preload'+_0x49d323(0x5ef),'lcLHk':_0x49d323(0x47d)+_0x49d323(0x502)+_0x49d323(0x991)+'nt\x20Core\x27s\x0a','TFydv':_0x49d323(0x601)+_0x49d323(0x631)+_0x49d323(0x340)+_0x49d323(0x306)+'ngs\x20>\x0a','MAZux':_0x49d323(0x7f3)+'Maps\x20and\x20a'+_0x49d323(0x470)+'%1','PjYNx':function(_0x5a1b8f,_0x12a9b3){return _0x5a1b8f(_0x12a9b3);}};VisuMZ[_0x49d323(0x6e1)+_0x49d323(0x10b)](_0x37c7e8,_0x37c7e8);const _0x542035=$gameTemp['getLastPlu'+_0x49d323(0x546)+_0x49d323(0x6e6)+'r'](),_0x29bb78={'template':_0x37c7e8[_0x49d323(0x719)+'me'],'mapId':_0x37c7e8[_0x49d323(0x150)]||$gameMap[_0x49d323(0x9ec)](),'eventId':_0x37c7e8[_0x49d323(0x617)]||_0x542035[_0x49d323(0x363)](),'x':-(-0x34*0x82+0x1a19+0x50),'y':-(0x1d1*-0x3+-0x706+0xc7a),'spawnPreserved':_0x37c7e8[_0x49d323(0x507)],'spawnEventId':_0x53b883[_0x49d323(0x578)]($gameMap[_0x49d323(0x388)+'ents'][_0x49d323(0x3cf)],0x8*0x1d8+-0x3*-0x85a+-0x23e6)},_0x3b8533=_0x37c7e8[_0x49d323(0x5f4)+_0x49d323(0x85f)]||-0x3c*-0xd+0xb2e+0x6*-0x25f;if(!VisuMZ[_0x49d323(0x41f)+_0x49d323(0x747)][_0x29bb78[_0x49d323(0x9ec)]]&&_0x53b883[_0x49d323(0x4f8)](_0x29bb78[_0x49d323(0x9ec)],$gameMap[_0x49d323(0x9ec)]())){let _0x40fac2=_0x53b883[_0x49d323(0x6d7)][_0x49d323(0x96d)](_0x29bb78['mapId']);_0x40fac2+=_0x53b883[_0x49d323(0x469)],_0x40fac2+=_0x53b883[_0x49d323(0x359)],_0x40fac2+=_0x53b883['TFydv'],_0x40fac2+=_0x53b883['MAZux'][_0x49d323(0x96d)](_0x29bb78[_0x49d323(0x9ec)]),_0x53b883[_0x49d323(0x82c)](alert,_0x40fac2);return;}const _0x42b65c=$gameMap['prepareSpa'+_0x49d323(0x6ee)+_0x49d323(0x821)+'g'](_0x29bb78,_0x37c7e8[_0x49d323(0x758)+'s'],_0x37c7e8[_0x49d323(0x70f)],_0x37c7e8[_0x49d323(0x99d)+'y']);_0x3b8533&&$gameSwitches['setValue'](_0x3b8533,!!_0x42b65c);}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData['name'],'SpawnEvent'+_0x3e3bd2(0x47f)+'ntID',_0x5876c8=>{const _0xe1a94=_0x3e3bd2;VisuMZ[_0xe1a94(0x6e1)+_0xe1a94(0x10b)](_0x5876c8,_0x5876c8);const _0x69bed8=$gameTemp[_0xe1a94(0x256)+_0xe1a94(0x546)+_0xe1a94(0x6e6)+'r']();$gameMap[_0xe1a94(0x161)+_0xe1a94(0x84b)](_0x5876c8[_0xe1a94(0x6e3)]||_0x69bed8[_0xe1a94(0x363)]());}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x392)+_0x3e3bd2(0x5c3)+'Y',_0x176815=>{const _0x47a0d7=_0x3e3bd2;VisuMZ[_0x47a0d7(0x6e1)+'ams'](_0x176815,_0x176815);const _0xb3d2d0=_0x176815['PosX'],_0x5eb47d=_0x176815['PosY'];$gameMap[_0x47a0d7(0x2bc)+'Y'](_0xb3d2d0,_0x5eb47d);}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x392)+_0x3e3bd2(0x841)+_0x3e3bd2(0xa28),_0x35fbc7=>{const _0x3e92d5=_0x3e3bd2;VisuMZ['ConvertPar'+'ams'](_0x35fbc7,_0x35fbc7),$gameMap[_0x3e92d5(0x226)+_0x3e92d5(0xa28)](_0x35fbc7[_0x3e92d5(0x905)]);}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x392)+_0x3e3bd2(0x127)+_0x3e3bd2(0x238),_0x477145=>{const _0x473ed7=_0x3e3bd2;VisuMZ[_0x473ed7(0x6e1)+_0x473ed7(0x10b)](_0x477145,_0x477145),$gameMap[_0x473ed7(0x56e)+_0x473ed7(0x238)](_0x477145[_0x473ed7(0x758)+'s']);}),PluginManager[_0x3e3bd2(0x4d9)+_0x3e3bd2(0x74f)](pluginData[_0x3e3bd2(0x16a)],_0x3e3bd2(0x392)+_0x3e3bd2(0x47f)+_0x3e3bd2(0x7c6),_0x1d6d38=>{const _0x1dfd52=_0x3e3bd2;VisuMZ['ConvertPar'+_0x1dfd52(0x10b)](_0x1d6d38,_0x1d6d38),$gameMap['despawnEve'+_0x1dfd52(0x7c6)]();}),VisuMZ['EventsMove'+_0x3e3bd2(0x8da)][_0x3e3bd2(0x914)+'_onDatabas'+'eLoaded']=Scene_Boot[_0x3e3bd2(0x294)][_0x3e3bd2(0x907)+_0x3e3bd2(0x59a)],Scene_Boot['prototype']['onDatabase'+_0x3e3bd2(0x59a)]=function(){const _0x513ae1=_0x3e3bd2;VisuMZ['EventsMove'+_0x513ae1(0x8da)][_0x513ae1(0x914)+'_onDatabas'+_0x513ae1(0x7bf)][_0x513ae1(0x3f6)](this),this['process_Vi'+'suMZ_Event'+_0x513ae1(0x930)+_0x513ae1(0x7e0)+'teMaps'](),this['process_Vi'+_0x513ae1(0x794)+'sMoveCore_'+_0x513ae1(0x295)+'ariables']();if(VisuMZ[_0x513ae1(0x5eb)+_0x513ae1(0x8da)]['CustomPage'+_0x513ae1(0x950)])VisuMZ['EventsMove'+_0x513ae1(0x8da)]['CustomPage'+_0x513ae1(0x950)][_0x513ae1(0x386)]();},VisuMZ['PreloadedM'+'aps']=[],VisuMZ['EventTempl'+_0x3e3bd2(0x3d3)]={},Scene_Boot[_0x3e3bd2(0x294)][_0x3e3bd2(0x1d3)+_0x3e3bd2(0x794)+_0x3e3bd2(0x930)+'LoadTempla'+_0x3e3bd2(0x1c0)]=function(){const _0x2f5c20=_0x3e3bd2,_0x287649={'NYYGQ':_0x2f5c20(0x1b3),'jpBFX':'$preloaded'+_0x2f5c20(0x9cb),'CBPyj':function(_0xd6b789,_0x4f0203,_0x3e8026){return _0xd6b789(_0x4f0203,_0x3e8026);}};if(DataManager['isBattleTe'+'st']()||DataManager[_0x2f5c20(0x7be)+'t']())return;const _0x50e8f6=VisuMZ['EventsMove'+_0x2f5c20(0x8da)][_0x2f5c20(0x668)][_0x2f5c20(0x34c)],_0x28225b=_0x50e8f6[_0x2f5c20(0x361)+'s'][_0x2f5c20(0x17f)](0x1c03+0x462+-0x2065);for(const _0x3ca1a5 of _0x50e8f6[_0x2f5c20(0x333)]){_0x3ca1a5[_0x2f5c20(0x1d8)]=_0x3ca1a5[_0x2f5c20(0x1d8)][_0x2f5c20(0x936)+'e']()[_0x2f5c20(0x66f)](),VisuMZ[_0x2f5c20(0x8cf)+'ates'][_0x3ca1a5[_0x2f5c20(0x1d8)]]=_0x3ca1a5;if(!_0x28225b[_0x2f5c20(0x1bf)](_0x3ca1a5[_0x2f5c20(0x881)]))_0x28225b['push'](_0x3ca1a5[_0x2f5c20(0x881)]);}for(const _0x4c4f10 of _0x28225b){if(VisuMZ[_0x2f5c20(0x41f)+'aps'][_0x4c4f10])continue;const _0xc8354d=_0x287649['NYYGQ'][_0x2f5c20(0x96d)](_0x4c4f10[_0x2f5c20(0x4f2)](-0xd5b*-0x1+0x204a+-0x2da2)),_0x5d2107=_0x287649['jpBFX']['format'](_0x4c4f10);DataManager[_0x2f5c20(0x285)+'le'](_0x5d2107,_0xc8354d),_0x287649[_0x2f5c20(0x79d)](setTimeout,this['VisuMZ_Set'+_0x2f5c20(0x7a9)+'_Map'][_0x2f5c20(0x696)](this,_0x4c4f10,_0x5d2107),-0x1796+0x1*-0x772+0x1*0x1f6c);}},Scene_Boot['prototype'][_0x3e3bd2(0x1cb)+_0x3e3bd2(0x7a9)+_0x3e3bd2(0x6fc)]=function(_0x2bad6b,_0x145191){const _0xc488d9=_0x3e3bd2,_0x5c3a8f={'wzMTb':function(_0x107bd1,_0x3e3375,_0x3511c6){return _0x107bd1(_0x3e3375,_0x3511c6);}};window[_0x145191]?(VisuMZ['PreloadedM'+_0xc488d9(0x747)][_0x2bad6b]=window[_0x145191],window[_0x145191]=undefined):_0x5c3a8f['wzMTb'](setTimeout,this['VisuMZ_Set'+_0xc488d9(0x7a9)+_0xc488d9(0x6fc)][_0xc488d9(0x696)](this,_0x2bad6b,_0x145191),0x8d2*0x2+-0x3*-0x7e6+-0x6*0x6d3);},VisuMZ['AdvancedSw'+_0x3e3bd2(0x47a)]=[],VisuMZ['SelfSwitch'+'es']=[],VisuMZ['MapSwitche'+'s']=[],VisuMZ[_0x3e3bd2(0x59e)+'riables']=[],VisuMZ[_0x3e3bd2(0x57a)+_0x3e3bd2(0x8dd)]=[],VisuMZ['MapVariabl'+'es']=[],Scene_Boot[_0x3e3bd2(0x294)]['process_Vi'+'suMZ_Event'+'sMoveCore_'+_0x3e3bd2(0x295)+'ariables']=function(){const _0x2db115=_0x3e3bd2,_0x289941={'YmbHT':function(_0x418e71,_0x2b30b2){return _0x418e71<_0x2b30b2;},'gecvg':function(_0x16c0a7,_0xf4c0ce){return _0x16c0a7<_0xf4c0ce;}};for(let _0x2b6249=-0x1527+0x97*-0xd+0x1cd3;_0x289941[_0x2db115(0x877)](_0x2b6249,$dataSystem[_0x2db115(0x399)]['length']);_0x2b6249++){if($dataSystem[_0x2db115(0x399)][_0x2b6249]['match'](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x2db115(0x41e)+_0x2db115(0x47a)]['push'](_0x2b6249);if($dataSystem[_0x2db115(0x399)][_0x2b6249]['match'](/<SELF>/i))VisuMZ[_0x2db115(0x537)+'es']['push'](_0x2b6249);if($dataSystem['switches'][_0x2b6249][_0x2db115(0x848)](/<MAP>/i))VisuMZ[_0x2db115(0x7a0)+'s'][_0x2db115(0x61a)](_0x2b6249);}for(let _0x3bbecd=-0x1*0x21c1+0x23*0x3b+0x1*0x19b1;_0x289941[_0x2db115(0x8b1)](_0x3bbecd,$dataSystem[_0x2db115(0x93b)]['length']);_0x3bbecd++){if($dataSystem[_0x2db115(0x93b)][_0x3bbecd][_0x2db115(0x848)](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x2db115(0x59e)+_0x2db115(0x539)]['push'](_0x3bbecd);if($dataSystem[_0x2db115(0x93b)][_0x3bbecd]['match'](/<SELF>/i))VisuMZ[_0x2db115(0x57a)+'les'][_0x2db115(0x61a)](_0x3bbecd);if($dataSystem[_0x2db115(0x93b)][_0x3bbecd][_0x2db115(0x848)](/<MAP>/i))VisuMZ['MapVariabl'+'es'][_0x2db115(0x61a)](_0x3bbecd);}},VisuMZ['EventsMove'+_0x3e3bd2(0x8da)]['CustomPage'+_0x3e3bd2(0x950)]={},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x810)+_0x3e3bd2(0x950)][_0x3e3bd2(0x386)]=function(){const _0x580788=_0x3e3bd2;this[_0x580788(0x81b)+'er']=new Game_CPCInterpreter(),this[_0x580788(0x418)+_0x580788(0x740)+_0x580788(0x28e)]();},VisuMZ[_0x3e3bd2(0x5eb)+'Core'][_0x3e3bd2(0x810)+_0x3e3bd2(0x950)][_0x3e3bd2(0x418)+_0x3e3bd2(0x740)+'sWithCPC']=function(){const _0x2d73bc=_0x3e3bd2,_0x583cf9={'OywpY':function(_0x15d818,_0x4804c1){return _0x15d818>_0x4804c1;}};this[_0x2d73bc(0x76c)+'nts']=[];for(const _0x3197a9 of $dataCommonEvents){if(!_0x3197a9)continue;VisuMZ[_0x2d73bc(0x5eb)+'Core'][_0x2d73bc(0x810)+_0x2d73bc(0x950)]['loadCPC'](_0x3197a9);if(_0x583cf9['OywpY'](_0x3197a9[_0x2d73bc(0x975)][_0x2d73bc(0x3cf)],0x1*-0x4ff+-0x3c5+0x8c4))this[_0x2d73bc(0x76c)+_0x2d73bc(0x5c9)][_0x2d73bc(0x61a)](_0x3197a9['id']);}},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x810)+_0x3e3bd2(0x950)]['metCPC']=function(_0x2509a9,_0x38028e,_0x10bca8){const _0xc154a1=_0x3e3bd2;return this[_0xc154a1(0x81b)+'er'][_0xc154a1(0x442)](_0x2509a9,_0x38028e),_0x10bca8?this[_0xc154a1(0x81b)+'er'][_0xc154a1(0x72f)+_0xc154a1(0x77b)](_0x10bca8):this[_0xc154a1(0x81b)+'er']['execute'](),this[_0xc154a1(0x81b)+'er'][_0xc154a1(0x50c)];},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x810)+_0x3e3bd2(0x950)][_0x3e3bd2(0x6de)]=function(_0x237b38){const _0x2ff018=_0x3e3bd2;let _0x4c451d=![];_0x237b38[_0x2ff018(0x975)]=[];for(const _0x1c45f7 of _0x237b38['list']){if([-0x6f4+0x36*0x21+0x6a,-0x56e+0x22cd*-0x1+0x29d3][_0x2ff018(0x1bf)](_0x1c45f7[_0x2ff018(0x377)])){const _0x263c76=_0x1c45f7[_0x2ff018(0x6a6)][-0x94+-0x2a*0x1+-0x1*-0xbe];if(_0x263c76[_0x2ff018(0x848)](/<PAGE (?:CONDITION|CONDITIONS)>/i))_0x4c451d=!![];else _0x263c76[_0x2ff018(0x848)](/<\/PAGE (?:CONDITION|CONDITIONS)>/i)&&(_0x4c451d=![]);}_0x4c451d&&_0x237b38[_0x2ff018(0x975)]['push'](_0x1c45f7);}},getSelfSwitchValue=function(_0x173749,_0x650e42,_0x1eda8a){const _0x340d48=_0x3e3bd2,_0x45cba7={'jWojt':'Self\x20Switc'+_0x340d48(0x7e7),'juTTq':function(_0x502f76,_0x5c5644){return _0x502f76===_0x5c5644;},'tqxps':_0x340d48(0x57f)};let _0x477a09=[_0x173749,_0x650e42,_0x45cba7[_0x340d48(0xa27)]['format'](_0x1eda8a)];return _0x45cba7[_0x340d48(0x516)](typeof _0x1eda8a,_0x45cba7['tqxps'])&&(_0x477a09=[_0x173749,_0x650e42,_0x1eda8a[_0x340d48(0x936)+'e']()['trim']()]),$gameSelfSwitches['value'](_0x477a09);},getMapSwitchValue=function(_0x460616,_0x5e56ef){const _0x1028d8=_0x3e3bd2,_0x20a9e4={'OLBSW':_0x1028d8(0x5c2)+_0x1028d8(0x5d9)};let _0x46d3a2=[0x5e7*0x5+-0x142b+-0x68*0x17,-0x255f+0x17e5*-0x1+0x3d44,_0x20a9e4['OLBSW'][_0x1028d8(0x96d)](_0x460616,_0x5e56ef)];return $gameSelfSwitches[_0x1028d8(0x2e6)](_0x46d3a2);},getMapVariableValue=function(_0x4e2fea,_0x48b3e0){const _0x56302f=_0x3e3bd2,_0x4109c7={'ETinW':_0x56302f(0x299)+_0x56302f(0x738)};let _0x422bff=[-0x1e6+0x151e+-0x1338,0x20ca+0x49f+0x1*-0x2569,_0x4109c7[_0x56302f(0x878)][_0x56302f(0x96d)](_0x4e2fea,_0x48b3e0)];return $gameSelfSwitches[_0x56302f(0x2e6)](_0x422bff);},getSelfVariableValue=function(_0x5ac003,_0x147519,_0xb12f77){const _0x3fdc11=_0x3e3bd2,_0x42ca75={'upRpu':'Self\x20Varia'+'ble\x20%1'},_0xf7f556=[_0x5ac003,_0x147519,_0x42ca75['upRpu'][_0x3fdc11(0x96d)](_0xb12f77)];return $gameSelfSwitches[_0x3fdc11(0x2e6)](_0xf7f556);},setSelfSwitchValue=function(_0xc8ba70,_0xc2eb8b,_0x5b159f,_0x27d997){const _0x154d5f=_0x3e3bd2,_0x4b93f8={'aQUNl':_0x154d5f(0x230)+_0x154d5f(0x7e7),'AFKkQ':function(_0x164bf4,_0x59b7bf){return _0x164bf4===_0x59b7bf;},'pOdph':_0x154d5f(0x57f)};let _0x222a79=[_0xc8ba70,_0xc2eb8b,_0x4b93f8[_0x154d5f(0x4fd)]['format'](_0x5b159f)];_0x4b93f8['AFKkQ'](typeof _0x5b159f,_0x4b93f8[_0x154d5f(0x93e)])&&(_0x222a79=[_0xc8ba70,_0xc2eb8b,_0x5b159f[_0x154d5f(0x936)+'e']()[_0x154d5f(0x66f)]()]),$gameSelfSwitches[_0x154d5f(0xa00)](_0x222a79,_0x27d997);},setSelfVariableValue=function(_0x1f9f98,_0x193709,_0x2e917a,_0x4e3d8c){const _0x4df445=_0x3e3bd2,_0x431821={'qGHpF':_0x4df445(0x694)+_0x4df445(0x3a7)},_0x18e793=[_0x1f9f98,_0x193709,_0x431821[_0x4df445(0x30d)][_0x4df445(0x96d)](_0x2e917a)];$gameSelfSwitches[_0x4df445(0xa00)](_0x18e793,_0x4e3d8c);},setMapSwitchValue=function(_0x1ca800,_0x334516,_0x302a66){const _0x24a53c=_0x3e3bd2,_0x106039={'GvNWD':'Map\x20%1\x20Swi'+_0x24a53c(0x5d9)};let _0x419506=[-0x10ee+-0x11c1+0x22af,-0xa12+0x21f9+-0x1*0x17e7,_0x106039[_0x24a53c(0x8ce)]['format'](_0x1ca800,_0x334516)];$gameSelfSwitches[_0x24a53c(0xa00)](_0x419506,_0x302a66);},setMapVariableValue=function(_0x2532fe,_0x408667,_0x39f3cb){const _0x26a252=_0x3e3bd2,_0x16de9f={'MaBsM':_0x26a252(0x299)+'iable\x20%2'};let _0x4005ea=[0x3a*-0x29+0x4*0xd+0x916*0x1,-0x1a6e+-0x1*-0x1e0b+-0xb9*0x5,_0x16de9f[_0x26a252(0x9af)]['format'](_0x2532fe,_0x408667)];$gameSelfSwitches[_0x26a252(0xa00)](_0x4005ea,_0x39f3cb);},DataManager[_0x3e3bd2(0x8b6)+'Switch']=function(_0x3f0905){const _0x26b84b=_0x3e3bd2,_0x199f3d={'TibcY':function(_0x10fc91,_0x40c0fb){return _0x10fc91===_0x40c0fb;}};if(_0x199f3d[_0x26b84b(0x58c)](SceneManager[_0x26b84b(0x870)][_0x26b84b(0x9f3)+'r'],Scene_Debug))return![];return VisuMZ[_0x26b84b(0x41e)+'itches'][_0x26b84b(0x1bf)](_0x3f0905);},DataManager[_0x3e3bd2(0x8b6)+'Variable']=function(_0x2b2998){const _0x4bc678=_0x3e3bd2,_0x5ef7d9={'FwqJk':function(_0x34605d,_0x549fa4){return _0x34605d===_0x549fa4;}};if(_0x5ef7d9['FwqJk'](SceneManager['_scene'][_0x4bc678(0x9f3)+'r'],Scene_Debug))return![];return VisuMZ[_0x4bc678(0x59e)+_0x4bc678(0x539)][_0x4bc678(0x1bf)](_0x2b2998);},DataManager[_0x3e3bd2(0x1fb)+'ch']=function(_0x3d3dcb){const _0x393aab=_0x3e3bd2,_0x5ed211={'BwYJT':function(_0x25ed7f,_0x1fc9c1){return _0x25ed7f===_0x1fc9c1;}};if(_0x5ed211[_0x393aab(0xa0e)](SceneManager[_0x393aab(0x870)]['constructo'+'r'],Scene_Debug))return![];return VisuMZ['SelfSwitch'+'es'][_0x393aab(0x1bf)](_0x3d3dcb);},DataManager[_0x3e3bd2(0x729)+_0x3e3bd2(0x4ec)]=function(_0x2e6815){const _0x191141=_0x3e3bd2,_0x510ece={'ibntF':function(_0x3c02e8,_0x15c78b){return _0x3c02e8===_0x15c78b;}};if(_0x510ece[_0x191141(0x33c)](SceneManager[_0x191141(0x870)][_0x191141(0x9f3)+'r'],Scene_Debug))return![];return VisuMZ[_0x191141(0x57a)+_0x191141(0x8dd)][_0x191141(0x1bf)](_0x2e6815);},DataManager[_0x3e3bd2(0x59c)+'h']=function(_0x1fec8c){const _0xff336b=_0x3e3bd2;if(BattleManager[_0xff336b(0x481)+'st']())return![];return VisuMZ[_0xff336b(0x7a0)+'s']['includes'](_0x1fec8c);},DataManager['isMapVaria'+_0x3e3bd2(0x3ff)]=function(_0x27811d){const _0x3da4b4=_0x3e3bd2;if(BattleManager['isBattleTe'+'st']())return![];return VisuMZ['MapVariabl'+'es'][_0x3da4b4(0x1bf)](_0x27811d);},ImageManager[_0x3e3bd2(0x5b4)+'eCharacter']=function(_0x4e1c8c){const _0x2df4f7=_0x3e3bd2;return _0x4e1c8c[_0x2df4f7(0x848)](/\[INV(?:|ISIBLE)\]/i);},SceneManager[_0x3e3bd2(0x2d9)]=function(){const _0x295bfd=_0x3e3bd2,_0x51ceb1={'XzPMb':function(_0x2130cd,_0x4d36f9){return _0x2130cd===_0x4d36f9;}};return this[_0x295bfd(0x870)]&&_0x51ceb1[_0x295bfd(0x9ef)](this[_0x295bfd(0x870)][_0x295bfd(0x9f3)+'r'],Scene_Map);},SceneManager['isInstance'+_0x3e3bd2(0x354)]=function(){const _0x1b6ada=_0x3e3bd2,_0x460a05={'Piexf':function(_0x3141c6,_0x385422){return _0x3141c6 instanceof _0x385422;}};return this['_scene']&&_0x460a05['Piexf'](this[_0x1b6ada(0x870)],Scene_Map);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x5fb)+_0x3e3bd2(0x4bf)+'tion']=Game_Temp[_0x3e3bd2(0x294)][_0x3e3bd2(0x4bf)+_0x3e3bd2(0x6f3)],Game_Temp[_0x3e3bd2(0x294)][_0x3e3bd2(0x4bf)+_0x3e3bd2(0x6f3)]=function(_0x5b6e61,_0x493554){const _0x23235d=_0x3e3bd2;if(this[_0x23235d(0x701)+_0x23235d(0x321)+'d'](_0x5b6e61,_0x493554))return;VisuMZ[_0x23235d(0x5eb)+_0x23235d(0x8da)][_0x23235d(0x5fb)+'setDestina'+_0x23235d(0x6f3)][_0x23235d(0x3f6)](this,_0x5b6e61,_0x493554);},Game_Temp[_0x3e3bd2(0x294)][_0x3e3bd2(0x701)+_0x3e3bd2(0x321)+'d']=function(_0xd6a025,_0x4d783e){const _0xceb1db=_0x3e3bd2,_0x51be1c={'ElLOv':function(_0x40aa56,_0x3d844e){return _0x40aa56>_0x3d844e;}},_0x2be8fa=$gameMap[_0xceb1db(0x8f7)](_0xd6a025,_0x4d783e);for(const _0xdfacf of _0x2be8fa){if(_0xdfacf&&_0xdfacf[_0xceb1db(0x4e4)+_0xceb1db(0x36e)]())return _0xdfacf[_0xceb1db(0x12e)+_0xceb1db(0x85e)](),!![];}return TouchInput[_0xceb1db(0x8c1)+_0xceb1db(0x91e)]()&&_0x51be1c[_0xceb1db(0x8f3)](_0x2be8fa[_0xceb1db(0x3cf)],-0x17*0x152+0x1*0x79a+-0x2*-0xb62)&&TouchInput[_0xceb1db(0x217)](),![];},Game_Temp['prototype'][_0x3e3bd2(0x4af)+_0x3e3bd2(0x546)+_0x3e3bd2(0x6e6)+'r']=function(_0x164de4){const _0x1836e8=_0x3e3bd2;this[_0x1836e8(0x1ec)+_0x1836e8(0x4c7)+'terpreter']=_0x164de4;},Game_Temp['prototype'][_0x3e3bd2(0x256)+_0x3e3bd2(0x546)+_0x3e3bd2(0x6e6)+'r']=function(){return this['_lastPlugi'+'nCommandIn'+'terpreter'];},Game_Temp[_0x3e3bd2(0x294)][_0x3e3bd2(0x951)+_0x3e3bd2(0xfc)]=function(_0xbc9daa){const _0x160e23=_0x3e3bd2;this[_0x160e23(0x726)+'t']=_0xbc9daa;},Game_Temp['prototype'][_0x3e3bd2(0x153)+'arget']=function(){const _0x23e6c6=_0x3e3bd2;this[_0x23e6c6(0x726)+'t']=undefined;},Game_Temp['prototype'][_0x3e3bd2(0x93d)+'get']=function(){const _0xb6a186=_0x3e3bd2;return this[_0xb6a186(0x726)+'t'];},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x48d)+_0x3e3bd2(0x138)+'ze']=Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0x386)],Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0x386)]=function(){const _0x45bd6f=_0x3e3bd2;VisuMZ[_0x45bd6f(0x5eb)+_0x45bd6f(0x8da)][_0x45bd6f(0x48d)+_0x45bd6f(0x138)+'ze'][_0x45bd6f(0x3f6)](this),this[_0x45bd6f(0xa1d)+_0x45bd6f(0x3f7)](),this[_0x45bd6f(0x62d)+'erControll'+'er']();},Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0xa1d)+'MoveCore']=function(){const _0x3f2302=_0x3e3bd2,_0x2f582b={'XCeLx':'4|2|6|5|1|'+_0x3f2302(0x5ec),'RtaaB':'default'},_0x570d1b=_0x2f582b[_0x3f2302(0x97a)]['split']('|');let _0x334de5=-0x16d6+0x15*-0x142+0x8*0x628;while(!![]){switch(_0x570d1b[_0x334de5++]){case'0':this[_0x3f2302(0x3d2)+_0x3f2302(0x9d9)+'l']=![];continue;case'1':this[_0x3f2302(0x864)+'tLocations']={};continue;case'2':this['_EventIcon'+'s']={};continue;case'3':this[_0x3f2302(0x3be)+_0x3f2302(0x915)+'ng']=_0x2f582b[_0x3f2302(0x372)];continue;case'4':this[_0x3f2302(0xa23)+_0x3f2302(0x7c8)+_0x3f2302(0x319)]={'DashingEnable':!![],'EventAutoMovement':!![],'VisibleEventLabels':!![]};continue;case'5':this[_0x3f2302(0x288)+_0x3f2302(0x405)+_0x3f2302(0x886)]={};continue;case'6':this['_MapSpawne'+_0x3f2302(0xed)]=[];continue;}break;}},Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0x519)+_0x3e3bd2(0x425)]=function(){const _0x2bfd55=_0x3e3bd2,_0x187a40={'RAmer':function(_0x126e4d,_0x248878){return _0x126e4d===_0x248878;}};if(_0x187a40[_0x2bfd55(0x838)](this[_0x2bfd55(0xa23)+_0x2bfd55(0x7c8)+_0x2bfd55(0x319)],undefined))this[_0x2bfd55(0xa1d)+_0x2bfd55(0x3f7)]();if(_0x187a40[_0x2bfd55(0x838)](this[_0x2bfd55(0xa23)+_0x2bfd55(0x7c8)+_0x2bfd55(0x319)][_0x2bfd55(0x783)+_0x2bfd55(0x3ff)],undefined))this['initEvents'+_0x2bfd55(0x3f7)]();return this[_0x2bfd55(0xa23)+_0x2bfd55(0x7c8)+_0x2bfd55(0x319)]['DashingEna'+'ble'];},Game_System[_0x3e3bd2(0x294)]['setDashing'+'Enabled']=function(_0x182aae){const _0x344322=_0x3e3bd2,_0x355cce={'ulGRA':function(_0x1023d1,_0x40e35){return _0x1023d1===_0x40e35;}};if(_0x355cce[_0x344322(0x7c7)](this[_0x344322(0xa23)+'eCoreSetti'+_0x344322(0x319)],undefined))this[_0x344322(0xa1d)+_0x344322(0x3f7)]();if(_0x355cce['ulGRA'](this[_0x344322(0xa23)+'eCoreSetti'+'ngs'][_0x344322(0x783)+_0x344322(0x3ff)],undefined))this[_0x344322(0xa1d)+_0x344322(0x3f7)]();this[_0x344322(0xa23)+_0x344322(0x7c8)+_0x344322(0x319)][_0x344322(0x783)+_0x344322(0x3ff)]=_0x182aae;},Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0x203)+_0x3e3bd2(0x7f5)+_0x3e3bd2(0x683)]=function(){const _0xc52f8b=_0x3e3bd2,_0x234ee4={'yMjEf':function(_0x214551,_0x569d09){return _0x214551===_0x569d09;},'dJENz':function(_0x46aa03,_0x1832c9){return _0x46aa03===_0x1832c9;}};if(_0x234ee4['yMjEf'](this[_0xc52f8b(0xa23)+_0xc52f8b(0x7c8)+'ngs'],undefined))this[_0xc52f8b(0xa1d)+_0xc52f8b(0x3f7)]();if(_0x234ee4[_0xc52f8b(0x3f2)](this[_0xc52f8b(0xa23)+'eCoreSetti'+_0xc52f8b(0x319)]['EventAutoM'+_0xc52f8b(0x6a5)],undefined))this[_0xc52f8b(0xa1d)+_0xc52f8b(0x3f7)]();return this[_0xc52f8b(0xa23)+'eCoreSetti'+_0xc52f8b(0x319)][_0xc52f8b(0x38a)+_0xc52f8b(0x6a5)];},Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0x55b)+_0x3e3bd2(0x7b0)+_0x3e3bd2(0x571)]=function(_0x5225b5){const _0x3de718=_0x3e3bd2,_0x390077={'lCBkJ':function(_0x11f17a,_0x4ec901){return _0x11f17a===_0x4ec901;},'FhiDC':function(_0xcf9e88,_0x3d82af){return _0xcf9e88===_0x3d82af;}};if(_0x390077['lCBkJ'](this[_0x3de718(0xa23)+_0x3de718(0x7c8)+_0x3de718(0x319)],undefined))this[_0x3de718(0xa1d)+_0x3de718(0x3f7)]();if(_0x390077[_0x3de718(0x279)](this[_0x3de718(0xa23)+'eCoreSetti'+_0x3de718(0x319)][_0x3de718(0x38a)+_0x3de718(0x6a5)],undefined))this[_0x3de718(0xa1d)+_0x3de718(0x3f7)]();this['_EventsMov'+_0x3de718(0x7c8)+'ngs'][_0x3de718(0x38a)+_0x3de718(0x6a5)]=_0x5225b5;},Game_System['prototype'][_0x3e3bd2(0x353)+'sVisible']=function(){const _0x557376=_0x3e3bd2,_0x1650cd={'BgAog':function(_0x240cf8,_0x2edbe4){return _0x240cf8===_0x2edbe4;}};if(_0x1650cd['BgAog'](this[_0x557376(0xa23)+_0x557376(0x7c8)+'ngs'],undefined))this['initEvents'+'MoveCore']();if(_0x1650cd[_0x557376(0x70a)](this[_0x557376(0xa23)+_0x557376(0x7c8)+_0x557376(0x319)][_0x557376(0x5bf)+'ntLabels'],undefined))this['initEvents'+_0x557376(0x3f7)]();return this[_0x557376(0xa23)+_0x557376(0x7c8)+_0x557376(0x319)][_0x557376(0x5bf)+_0x557376(0x391)];},Game_System['prototype'][_0x3e3bd2(0x263)+_0x3e3bd2(0x67d)+'e']=function(_0x438adf){const _0x33a30d=_0x3e3bd2,_0xbcf5f2={'qTbdl':function(_0x231032,_0x2df9f8){return _0x231032===_0x2df9f8;}};if(_0xbcf5f2[_0x33a30d(0x618)](this[_0x33a30d(0xa23)+_0x33a30d(0x7c8)+'ngs'],undefined))this[_0x33a30d(0xa1d)+_0x33a30d(0x3f7)]();if(_0xbcf5f2['qTbdl'](this[_0x33a30d(0xa23)+_0x33a30d(0x7c8)+_0x33a30d(0x319)][_0x33a30d(0x5bf)+'ntLabels'],undefined))this[_0x33a30d(0xa1d)+_0x33a30d(0x3f7)]();this[_0x33a30d(0xa23)+_0x33a30d(0x7c8)+_0x33a30d(0x319)][_0x33a30d(0x5bf)+_0x33a30d(0x391)]=_0x438adf;},Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0x2fb)+_0x3e3bd2(0x244)+_0x3e3bd2(0x599)]=function(){const _0x15b55a=_0x3e3bd2,_0xdb4c44={'IogfQ':function(_0x232c16,_0x10bc54){return _0x232c16===_0x10bc54;}};return _0xdb4c44[_0x15b55a(0x7d7)](this[_0x15b55a(0x3d2)+_0x15b55a(0x9d9)+'l'],undefined)&&(this[_0x15b55a(0x3d2)+_0x15b55a(0x9d9)+'l']=![]),this[_0x15b55a(0x3d2)+_0x15b55a(0x9d9)+'l'];},Game_System['prototype'][_0x3e3bd2(0x553)+_0x3e3bd2(0x5a3)+_0x3e3bd2(0x3ff)]=function(_0x1f33f4){const _0x37f6ef=_0x3e3bd2;this[_0x37f6ef(0x3d2)+_0x37f6ef(0x9d9)+'l']=_0x1f33f4;},Game_System['prototype']['getPlayerD'+_0x3e3bd2(0x6af)+_0x3e3bd2(0x4e7)]=function(){const _0x36a53d=_0x3e3bd2;return this[_0x36a53d(0x3be)+_0x36a53d(0x915)+'ng'];},Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0x316)+_0x3e3bd2(0x6af)+'ting']=function(_0x40b0ba){const _0x5a30eb=_0x3e3bd2,_0x3d30dd={'MoFrC':function(_0x1e0e7b,_0x3c9e15){return _0x1e0e7b(_0x3c9e15);}};this[_0x5a30eb(0x3be)+'gonalSetti'+'ng']=_0x3d30dd['MoFrC'](String,_0x40b0ba)[_0x5a30eb(0x12d)+'e']()[_0x5a30eb(0x66f)]();},Game_System['prototype']['getEventIc'+_0x3e3bd2(0x8f4)]=function(_0x28b584){const _0x175d7b=_0x3e3bd2,_0x2b7f6c={'mlohj':function(_0x15aef1,_0x7d96bf){return _0x15aef1===_0x7d96bf;},'ivhAK':function(_0x3f64ae,_0x1751a3){return _0x3f64ae===_0x1751a3;},'mQuSC':_0x175d7b(0x8bd),'MVgeX':_0x175d7b(0x706)+'t%2'};if(_0x2b7f6c[_0x175d7b(0x5d5)](this[_0x175d7b(0x8cc)+'s'],undefined))this[_0x175d7b(0xa1d)+'MoveCore']();if(!_0x28b584)return null;if(_0x2b7f6c[_0x175d7b(0x8a6)](_0x28b584,$gamePlayer))return this[_0x175d7b(0x8cc)+'s'][_0x2b7f6c[_0x175d7b(0xa35)]];else{const _0x220a63=VisuMZ[_0x175d7b(0x5eb)+_0x175d7b(0x8da)][_0x175d7b(0x668)],_0x4a838b=_0x2b7f6c[_0x175d7b(0x196)][_0x175d7b(0x96d)](_0x28b584['_mapId'],_0x28b584[_0x175d7b(0x4a0)]);return this[_0x175d7b(0x8cc)+'s'][_0x4a838b]=this[_0x175d7b(0x8cc)+'s'][_0x4a838b]||{'iconIndex':0x0,'bufferX':_0x220a63[_0x175d7b(0x99a)][_0x175d7b(0x126)],'bufferY':_0x220a63[_0x175d7b(0x99a)][_0x175d7b(0x47c)],'blendMode':_0x220a63[_0x175d7b(0x99a)][_0x175d7b(0x409)]},this['_EventIcon'+'s'][_0x4a838b];}},Game_System[_0x3e3bd2(0x294)]['setEventIc'+_0x3e3bd2(0x8f4)]=function(_0x399518,_0x507a3b,_0xc05d62,_0x33bf75,_0x29a367){const _0x4a069f=_0x3e3bd2,_0x4c8ec2={'LxlgK':function(_0x11083b,_0x3e7988){return _0x11083b===_0x3e7988;},'DMNwW':_0x4a069f(0x8bd),'pMDkU':_0x4a069f(0x706)+_0x4a069f(0x3bb)};if(_0x4c8ec2[_0x4a069f(0xa32)](this[_0x4a069f(0x8cc)+'s'],undefined))this[_0x4a069f(0xa1d)+_0x4a069f(0x3f7)]();const _0x4609bc=_0x4c8ec2[_0x4a069f(0xa32)](_0x399518,$gamePlayer)?_0x4c8ec2[_0x4a069f(0x7d9)]:_0x4c8ec2['pMDkU'][_0x4a069f(0x96d)](_0x399518[_0x4a069f(0x44a)],_0x399518['_eventId']);this[_0x4a069f(0x8cc)+'s'][_0x4609bc]={'iconIndex':_0x507a3b,'bufferX':_0xc05d62,'bufferY':_0x33bf75,'blendMode':_0x29a367};},Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0x718)+'onDataKey']=function(_0x37aa3a,_0x28b0b2,_0x3a478e,_0x582743,_0x275772,_0x4ca542,_0x1f3e48){const _0x45dd90=_0x3e3bd2,_0x7ea180={'KSBej':function(_0x2f6b9f,_0x4f407e){return _0x2f6b9f===_0x4f407e;},'LkRhW':_0x45dd90(0x706)+_0x45dd90(0x3bb)};if(_0x7ea180[_0x45dd90(0x248)](this[_0x45dd90(0x8cc)+'s'],undefined))this[_0x45dd90(0xa1d)+_0x45dd90(0x3f7)]();const _0x172513=_0x7ea180[_0x45dd90(0x564)][_0x45dd90(0x96d)](_0x37aa3a,_0x28b0b2);this[_0x45dd90(0x8cc)+'s'][_0x172513]={'iconIndex':_0x3a478e,'forced':_0x1f3e48,'bufferX':_0x582743,'bufferY':_0x275772,'blendMode':_0x4ca542};},Game_System[_0x3e3bd2(0x294)]['deleteIcon'+_0x3e3bd2(0x38f)+'ata']=function(_0x5cd814){const _0x2d8fb5=_0x3e3bd2,_0x2f9cf6={'dOeao':function(_0x21cad9,_0x437399){return _0x21cad9===_0x437399;},'Yysca':_0x2d8fb5(0x8bd)};if(_0x2f9cf6['dOeao'](this[_0x2d8fb5(0x8cc)+'s'],undefined))this['initEvents'+'MoveCore']();if(!_0x5cd814)return null;_0x2f9cf6[_0x2d8fb5(0x10c)](_0x5cd814,$gamePlayer)?delete this['_EventIcon'+'s'][_0x2f9cf6[_0x2d8fb5(0x6f4)]]:this[_0x2d8fb5(0x6e9)+_0x2d8fb5(0x38f)+_0x2d8fb5(0x754)](_0x5cd814[_0x2d8fb5(0x44a)],_0x5cd814[_0x2d8fb5(0x4a0)]);},Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0x6e9)+_0x3e3bd2(0x38f)+_0x3e3bd2(0x754)]=function(_0x5846d0,_0x2d4e7a){const _0xf94b0d=_0x3e3bd2,_0x2d9be4={'wzicX':function(_0x33c450,_0x3eb47d){return _0x33c450===_0x3eb47d;}};if(_0x2d9be4[_0xf94b0d(0x96c)](this['_EventIcon'+'s'],undefined))this[_0xf94b0d(0xa1d)+'MoveCore']();this[_0xf94b0d(0x718)+_0xf94b0d(0x35d)](_0x5846d0,_0x2d4e7a,-(-0xf*0x251+0x10ce+0x11f2),0xc3a+0x1db7+-0x29f1,-0x6ce+-0xdb5+0x1483,-0x6ed+0x2*0x3fd+-0x10d,![]);},Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0x970)+'OnEventsDa'+'ta']=function(_0x24fc5f){const _0x5c6c3a=_0x3e3bd2,_0x250b45={'ZBcEq':function(_0x21bdae,_0x24282b){return _0x21bdae===_0x24282b;},'LNeIC':function(_0x4750e0,_0x249621){return _0x4750e0===_0x249621;},'cCKIn':_0x5c6c3a(0x8bd)};if(_0x250b45['ZBcEq'](this[_0x5c6c3a(0x8cc)+'s'],undefined))this[_0x5c6c3a(0xa1d)+_0x5c6c3a(0x3f7)]();if(!_0x24fc5f)return null;_0x250b45[_0x5c6c3a(0x4f6)](_0x24fc5f,$gamePlayer)?delete this[_0x5c6c3a(0x8cc)+'s'][_0x250b45[_0x5c6c3a(0x141)]]:this[_0x5c6c3a(0x970)+_0x5c6c3a(0x2ed)+_0x5c6c3a(0xe7)](_0x24fc5f[_0x5c6c3a(0x44a)],_0x24fc5f[_0x5c6c3a(0x4a0)]);},Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0x970)+'OnEventsDa'+_0x3e3bd2(0xe7)]=function(_0xeab247,_0x277f81){const _0x20983a=_0x3e3bd2,_0x41ea44={'TaqvS':function(_0x32b6ea,_0x3efbd1){return _0x32b6ea===_0x3efbd1;},'srdoQ':'Map%1-Even'+'t%2','rcVfA':function(_0x491c9f,_0x5b97bc){return _0x491c9f<_0x5b97bc;}};if(_0x41ea44['TaqvS'](this[_0x20983a(0x8cc)+'s'],undefined))this[_0x20983a(0xa1d)+_0x20983a(0x3f7)]();const _0x5b140e=_0x41ea44['srdoQ']['format'](_0xeab247,_0x277f81);if(this[_0x20983a(0x8cc)+'s'][_0x5b140e]){if(_0x41ea44[_0x20983a(0x495)](this[_0x20983a(0x8cc)+'s'][_0x5b140e][_0x20983a(0x5b2)],-0x2bb*0x5+0x5b*0x39+-0xc*0x8d))return;if(this[_0x20983a(0x8cc)+'s'][_0x5b140e][_0x20983a(0x54e)])return;}delete this['_EventIcon'+'s'][_0x5b140e];},Game_System['prototype'][_0x3e3bd2(0x251)+_0x3e3bd2(0x390)+'DataKey']=function(_0x1ef0fc,_0x4b111e){const _0x1a8ba6=_0x3e3bd2,_0x3c0977={'LYqsu':function(_0x2a7922,_0x2521c5){return _0x2a7922===_0x2521c5;},'hRQBb':'Map%1-Even'+_0x1a8ba6(0x3bb),'BYpAM':function(_0x62b635,_0x11d596){return _0x62b635!==_0x11d596;}};if(_0x3c0977[_0x1a8ba6(0x2eb)](this['_EventIcon'+'s'],undefined))this['initEvents'+'MoveCore']();const _0x4c1e78=_0x3c0977[_0x1a8ba6(0x312)]['format'](_0x1ef0fc,_0x4b111e);delete this[_0x1a8ba6(0x8cc)+'s'][_0x4c1e78];if(_0x3c0977[_0x1a8ba6(0x9e0)](_0x1ef0fc,$gameMap[_0x1a8ba6(0x9ec)]()))return;const _0x22bd48=$gameMap[_0x1a8ba6(0x620)](_0x4b111e);if(!_0x22bd48)return;_0x22bd48[_0x1a8ba6(0x924)+_0x1a8ba6(0x21c)]();},Game_System['prototype'][_0x3e3bd2(0x82d)+_0x3e3bd2(0x114)+'n']=function(_0x5d96ad){const _0x4c14f7=_0x3e3bd2,_0xb1243c={'EfLPe':function(_0x2de574,_0x12c224){return _0x2de574===_0x12c224;},'zWRUR':_0x4c14f7(0x706)+'t%2'};if(_0xb1243c[_0x4c14f7(0x65d)](this[_0x4c14f7(0x864)+_0x4c14f7(0x709)],undefined))this[_0x4c14f7(0xa1d)+_0x4c14f7(0x3f7)]();if(!_0x5d96ad)return null;const _0x4c7c12=_0xb1243c[_0x4c14f7(0x8ec)][_0x4c14f7(0x96d)](_0x5d96ad[_0x4c14f7(0x44a)],_0x5d96ad[_0x4c14f7(0x4a0)]);return this[_0x4c14f7(0x864)+_0x4c14f7(0x709)][_0x4c7c12];},Game_System[_0x3e3bd2(0x294)]['saveEventL'+_0x3e3bd2(0x313)]=function(_0x29a45d){const _0x593e98=_0x3e3bd2,_0x20fa7c={'sogOk':function(_0x5d2d1f,_0x23af69){return _0x5d2d1f===_0x23af69;},'CnmqL':_0x593e98(0x706)+'t%2'};if(_0x20fa7c[_0x593e98(0x787)](this['_SavedEven'+'tLocations'],undefined))this[_0x593e98(0xa1d)+_0x593e98(0x3f7)]();if(!_0x29a45d)return;const _0x398a15=_0x20fa7c[_0x593e98(0x999)][_0x593e98(0x96d)](_0x29a45d[_0x593e98(0x44a)],_0x29a45d['_eventId']);this['_SavedEven'+'tLocations'][_0x398a15]={'direction':_0x29a45d[_0x593e98(0x580)](),'x':Math[_0x593e98(0x1f4)](_0x29a45d['x']),'y':Math['round'](_0x29a45d['y']),'pageIndex':_0x29a45d[_0x593e98(0x89c)],'moveRouteIndex':_0x29a45d[_0x593e98(0x32d)+_0x593e98(0x57e)]};},Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0x7f6)+_0x3e3bd2(0x52b)+_0x3e3bd2(0x6f3)]=function(_0x2fd81d){const _0x32cf2a=_0x3e3bd2,_0xd595db={'zdiCy':function(_0x419655,_0x4b8ba8){return _0x419655===_0x4b8ba8;}};if(_0xd595db['zdiCy'](this[_0x32cf2a(0x864)+'tLocations'],undefined))this[_0x32cf2a(0xa1d)+_0x32cf2a(0x3f7)]();if(!_0x2fd81d)return;this[_0x32cf2a(0x7f6)+'dEventLoca'+_0x32cf2a(0x8ff)](_0x2fd81d[_0x32cf2a(0x44a)],_0x2fd81d[_0x32cf2a(0x4a0)]);},Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0x7f6)+_0x3e3bd2(0x52b)+_0x3e3bd2(0x8ff)]=function(_0x53633b,_0x40fda2){const _0x36ffa6=_0x3e3bd2,_0x5229b3={'kUJSb':function(_0x33684d,_0x5a5f12){return _0x33684d===_0x5a5f12;},'OpFqN':'Map%1-Even'+_0x36ffa6(0x3bb)};if(_0x5229b3[_0x36ffa6(0x953)](this[_0x36ffa6(0x864)+_0x36ffa6(0x709)],undefined))this['initEvents'+'MoveCore']();const _0x4ffea3=_0x5229b3[_0x36ffa6(0x3b6)][_0x36ffa6(0x96d)](_0x53633b,_0x40fda2);delete this[_0x36ffa6(0x864)+_0x36ffa6(0x709)][_0x4ffea3];},Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0x572)+'EventLocat'+_0x3e3bd2(0x869)]=function(_0xee054f,_0x509bd8,_0x1ce17d,_0x3fda49,_0x97bbe,_0x1b6176,_0x2ade0f){const _0x1a90d4=_0x3e3bd2,_0x4f39a6={'TnTHc':function(_0x2006a9,_0x10b9fd){return _0x2006a9===_0x10b9fd;},'sDmxN':_0x1a90d4(0x706)+_0x1a90d4(0x3bb)};if(_0x4f39a6[_0x1a90d4(0x2e1)](this[_0x1a90d4(0x864)+_0x1a90d4(0x709)],undefined))this['initEvents'+_0x1a90d4(0x3f7)]();const _0x248ce1=_0x4f39a6['sDmxN'][_0x1a90d4(0x96d)](_0xee054f,_0x509bd8);this[_0x1a90d4(0x864)+_0x1a90d4(0x709)][_0x248ce1]={'direction':_0x97bbe,'x':Math[_0x1a90d4(0x1f4)](_0x1ce17d),'y':Math[_0x1a90d4(0x1f4)](_0x3fda49),'pageIndex':_0x1b6176,'moveRouteIndex':_0x2ade0f};},Game_System[_0x3e3bd2(0x294)]['getPreserv'+'edMorphEve'+_0x3e3bd2(0x9f7)]=function(_0x3ddb43){const _0x3d8cf9=_0x3e3bd2,_0x433ae0={'CSleD':function(_0x48e122,_0x5b60a5){return _0x48e122===_0x5b60a5;},'onfUy':_0x3d8cf9(0x706)+_0x3d8cf9(0x3bb)};if(_0x433ae0[_0x3d8cf9(0x5bc)](this[_0x3d8cf9(0x288)+_0x3d8cf9(0x405)+_0x3d8cf9(0x886)],undefined))this[_0x3d8cf9(0xa1d)+_0x3d8cf9(0x3f7)]();if(!_0x3ddb43)return;const _0x37c444=_0x433ae0[_0x3d8cf9(0x2dd)][_0x3d8cf9(0x96d)](_0x3ddb43[_0x3d8cf9(0x44a)],_0x3ddb43[_0x3d8cf9(0x4a0)]);return this[_0x3d8cf9(0x288)+_0x3d8cf9(0x405)+'Data'][_0x37c444];},Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0x39e)+_0x3e3bd2(0x213)+_0x3e3bd2(0x1e6)]=function(_0x144943,_0x53640c,_0x3a2258,_0x107d78,_0x29efe5){const _0x1ef95f=_0x3e3bd2,_0x19ca40={'ChYfO':function(_0x20543d,_0x2ecfe9){return _0x20543d===_0x2ecfe9;},'Rrfgs':_0x1ef95f(0x706)+_0x1ef95f(0x3bb)};if(_0x19ca40[_0x1ef95f(0x672)](this[_0x1ef95f(0x288)+_0x1ef95f(0x405)+_0x1ef95f(0x886)],undefined))this['initEvents'+_0x1ef95f(0x3f7)]();const _0x5b894e=_0x19ca40['Rrfgs'][_0x1ef95f(0x96d)](_0x144943,_0x53640c);this[_0x1ef95f(0x288)+_0x1ef95f(0x405)+_0x1ef95f(0x886)][_0x5b894e]={'template':_0x3a2258,'mapId':_0x107d78,'eventId':_0x29efe5};},Game_System['prototype'][_0x3e3bd2(0x47b)+_0x3e3bd2(0x1f3)+_0x3e3bd2(0x674)+'ey']=function(_0x19aed3,_0x1008f7){const _0x2e478a=_0x3e3bd2,_0x481f32={'MHJyN':function(_0x480a6d,_0x244ee6){return _0x480a6d===_0x244ee6;},'rvWJl':_0x2e478a(0x706)+_0x2e478a(0x3bb)};if(_0x481f32[_0x2e478a(0x49e)](this[_0x2e478a(0x288)+'EventMorph'+_0x2e478a(0x886)],undefined))this[_0x2e478a(0xa1d)+'MoveCore']();const _0x8e7b8c=_0x481f32['rvWJl'][_0x2e478a(0x96d)](_0x19aed3,_0x1008f7);delete this[_0x2e478a(0x288)+_0x2e478a(0x405)+_0x2e478a(0x886)][_0x8e7b8c];},Game_System['prototype'][_0x3e3bd2(0x5ba)+'nedEventDa'+'ta']=function(_0x1a6247){const _0x1b4e8e=_0x3e3bd2,_0x2a59d6={'CzdCU':function(_0x5d5a1d,_0x5ee3d1){return _0x5d5a1d===_0x5ee3d1;}};if(_0x2a59d6[_0x1b4e8e(0x982)](this['_MapSpawne'+_0x1b4e8e(0xed)],undefined))this['initEvents'+_0x1b4e8e(0x3f7)]();return this[_0x1b4e8e(0x36d)+_0x1b4e8e(0xed)][_0x1a6247]=this[_0x1b4e8e(0x36d)+'dEventData'][_0x1a6247]||[],this['_MapSpawne'+_0x1b4e8e(0xed)][_0x1a6247];},Game_System[_0x3e3bd2(0x294)]['removeTemp'+_0x3e3bd2(0x266)+_0x3e3bd2(0x246)+'s']=function(_0x5933bb){const _0x34934c=_0x3e3bd2,_0x26b488=this[_0x34934c(0x5ba)+'nedEventDa'+'ta'](_0x5933bb);for(const _0x348fb0 of _0x26b488){if(!_0x348fb0)continue;if(_0x348fb0['_spawnPres'+_0x34934c(0x7cc)])continue;const _0x33948d=_0x26b488['indexOf'](_0x348fb0);_0x26b488[_0x33948d]=null;}},Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0x62d)+_0x3e3bd2(0x265)+'er']=function(){const _0x457d0c=_0x3e3bd2;this[_0x457d0c(0x7eb)+_0x457d0c(0x397)]=0x1dc1+0x80e+-0x1*0x25cf,this[_0x457d0c(0x7eb)+_0x457d0c(0x38d)]=![];},Game_System['prototype'][_0x3e3bd2(0x332)+_0x3e3bd2(0xa10)+_0x3e3bd2(0x1bc)]=function(){const _0x2d7950=_0x3e3bd2,_0x42514c={'enEvK':function(_0x11e58b,_0x4bf73c){return _0x11e58b===_0x4bf73c;}};if(_0x42514c[_0x2d7950(0x828)](this[_0x2d7950(0x7eb)+_0x2d7950(0x397)],undefined))this[_0x2d7950(0x62d)+_0x2d7950(0x265)+'er']();return this[_0x2d7950(0x7eb)+_0x2d7950(0x397)];},Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0x36f)+_0x3e3bd2(0xa10)+'rID']=function(_0x525564){const _0x4d5a07=_0x3e3bd2,_0xc25a0d={'uYiGD':function(_0x11b95c,_0x906ad8){return _0x11b95c===_0x906ad8;}};if(_0xc25a0d['uYiGD'](this[_0x4d5a07(0x7eb)+_0x4d5a07(0x397)],undefined))this[_0x4d5a07(0x62d)+_0x4d5a07(0x265)+'er']();this[_0x4d5a07(0x7eb)+_0x4d5a07(0x397)]=_0x525564;;},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x14c)+_0x3e3bd2(0x784)+_0x3e3bd2(0x9c1)]=Game_Interpreter[_0x3e3bd2(0x294)][_0x3e3bd2(0x8fe)],Game_Interpreter[_0x3e3bd2(0x294)][_0x3e3bd2(0x8fe)]=function(_0x3b6595){const _0x2c0d5e=_0x3e3bd2,_0x5db3cd={'ovSMU':function(_0xa6143c,_0x1d3a22){return _0xa6143c<_0x1d3a22;},'oKsRd':function(_0x3756a4,_0x5e1cb7){return _0x3756a4>_0x5e1cb7;},'tshAS':function(_0x36174b,_0x2ec4bd){return _0x36174b-_0x2ec4bd;}};if(!$gameParty['inBattle']()&&_0x5db3cd[_0x2c0d5e(0x3a8)](_0x3b6595,-0x1*-0x10f+-0x3*0x98b+-0x1*-0x1b92)){let _0x5ec65e=$gameSystem[_0x2c0d5e(0x332)+'ledFollowe'+'rID']();if(_0x5db3cd[_0x2c0d5e(0x19b)](_0x5ec65e,-0x1975+0x310+0x31*0x75))return $gamePlayer[_0x2c0d5e(0x181)]()['follower'](_0x5db3cd[_0x2c0d5e(0x6f2)](_0x5ec65e,-0x182f+0xf2+-0x19*-0xee));}return VisuMZ['EventsMove'+_0x2c0d5e(0x8da)][_0x2c0d5e(0x14c)+_0x2c0d5e(0x784)+_0x2c0d5e(0x9c1)][_0x2c0d5e(0x3f6)](this,_0x3b6595);},Game_System['prototype'][_0x3e3bd2(0x504)+'owerChasin'+'g']=function(){const _0x4eaa54=_0x3e3bd2,_0xe88228={'BQWoZ':function(_0x38a804,_0x3c44df){return _0x38a804===_0x3c44df;}};if(_0xe88228[_0x4eaa54(0x50a)](this[_0x4eaa54(0x7eb)+_0x4eaa54(0x38d)],undefined))this[_0x4eaa54(0x62d)+_0x4eaa54(0x265)+'er']();return this[_0x4eaa54(0x7eb)+'haseOff'];},Game_System[_0x3e3bd2(0x294)][_0x3e3bd2(0x39c)+_0x3e3bd2(0x269)+'ng']=function(_0x5ef0fc){const _0x23829a=_0x3e3bd2,_0x595a25={'cuImb':function(_0x39669c,_0xa2f319){return _0x39669c===_0xa2f319;}};if(_0x595a25[_0x23829a(0x4ba)](this[_0x23829a(0x7eb)+_0x23829a(0x38d)],undefined))this[_0x23829a(0x62d)+_0x23829a(0x265)+'er']();this[_0x23829a(0x7eb)+_0x23829a(0x38d)]=_0x5ef0fc;;},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)]['Game_Follo'+_0x3e3bd2(0x7ed)+'ll']=Game_Followers[_0x3e3bd2(0x294)][_0x3e3bd2(0x4bd)],Game_Followers[_0x3e3bd2(0x294)][_0x3e3bd2(0x4bd)]=function(){const _0x59ff2c=_0x3e3bd2;if($gameSystem[_0x59ff2c(0x504)+_0x59ff2c(0x18d)+'g']())return;VisuMZ[_0x59ff2c(0x5eb)+_0x59ff2c(0x8da)][_0x59ff2c(0x61c)+_0x59ff2c(0x7ed)+'ll'][_0x59ff2c(0x3f6)](this);},VisuMZ['EventsMove'+'Core']['Game_Timer'+_0x3e3bd2(0x5a7)+'e']=Game_Timer[_0x3e3bd2(0x294)][_0x3e3bd2(0x386)],Game_Timer[_0x3e3bd2(0x294)]['initialize']=function(){const _0x57c84a=_0x3e3bd2;VisuMZ[_0x57c84a(0x5eb)+_0x57c84a(0x8da)][_0x57c84a(0x790)+_0x57c84a(0x5a7)+'e'][_0x57c84a(0x3f6)](this),this[_0x57c84a(0xa1d)+_0x57c84a(0x3f7)]();},Game_Timer['prototype'][_0x3e3bd2(0xa1d)+'MoveCore']=function(){const _0x238c20=_0x3e3bd2;this[_0x238c20(0x165)]=![],this[_0x238c20(0x3eb)]=-(-0x803+-0x83*0xb+0xda5*0x1),this[_0x238c20(0x14a)+_0x238c20(0x77b)]=-0x1*0x923+0x62f+0x2f4;},Game_Timer[_0x3e3bd2(0x294)][_0x3e3bd2(0x117)]=function(_0x55d983){const _0x22cdda=_0x3e3bd2,_0x2607f5={'YbIRC':_0x22cdda(0x960)+'0|5','Ilvrf':function(_0x235a3a,_0x4132c5){return _0x235a3a<=_0x4132c5;},'TMYUr':function(_0x6ed864,_0x5a1d2d){return _0x6ed864===_0x5a1d2d;}},_0x2f4dc6=_0x2607f5['YbIRC'][_0x22cdda(0x424)]('|');let _0x5ee365=0x1ac5+-0x272*0xf+0x9e9;while(!![]){switch(_0x2f4dc6[_0x5ee365++]){case'0':this[_0x22cdda(0x835)]+=this[_0x22cdda(0x3eb)];continue;case'1':if(!_0x55d983)return;continue;case'2':if(!this[_0x22cdda(0x6cc)])return;continue;case'3':if(_0x2607f5[_0x22cdda(0x371)](this['_frames'],0x22c2+-0x77*-0x2d+-0x37ad))return;continue;case'4':if(_0x2607f5['TMYUr'](this[_0x22cdda(0x3eb)],undefined))this[_0x22cdda(0xa1d)+_0x22cdda(0x3f7)]();continue;case'5':_0x2607f5[_0x22cdda(0x371)](this[_0x22cdda(0x835)],0x1c75+0x1c05+-0x387a)&&this[_0x22cdda(0x614)]();continue;case'6':if(this[_0x22cdda(0x165)])return;continue;}break;}},VisuMZ[_0x3e3bd2(0x5eb)+'Core'][_0x3e3bd2(0x790)+_0x3e3bd2(0x155)]=Game_Timer[_0x3e3bd2(0x294)][_0x3e3bd2(0x4e2)],Game_Timer[_0x3e3bd2(0x294)][_0x3e3bd2(0x4e2)]=function(_0x208685){const _0x196681=_0x3e3bd2,_0x36356d={'khWkj':function(_0x4a6663,_0x44235f){return _0x4a6663===_0x44235f;}};VisuMZ['EventsMove'+_0x196681(0x8da)][_0x196681(0x790)+'_start'][_0x196681(0x3f6)](this,_0x208685);if(_0x36356d[_0x196681(0x129)](this['_paused'],undefined))this[_0x196681(0xa1d)+'MoveCore']();this['_paused']=![];},VisuMZ[_0x3e3bd2(0x5eb)+'Core'][_0x3e3bd2(0x790)+_0x3e3bd2(0x15e)]=Game_Timer['prototype'][_0x3e3bd2(0x41a)],Game_Timer[_0x3e3bd2(0x294)][_0x3e3bd2(0x41a)]=function(){const _0x494558=_0x3e3bd2,_0xe46f46={'xcZrU':function(_0x1837ff,_0x43d2ca){return _0x1837ff===_0x43d2ca;}};VisuMZ[_0x494558(0x5eb)+_0x494558(0x8da)][_0x494558(0x790)+_0x494558(0x15e)]['call'](this);if(_0xe46f46[_0x494558(0x9d2)](this[_0x494558(0x165)],undefined))this[_0x494558(0xa1d)+_0x494558(0x3f7)]();this[_0x494558(0x165)]=![];},Game_Timer['prototype'][_0x3e3bd2(0x464)]=function(){const _0x5b4c44=_0x3e3bd2,_0x47cbc2={'hhdGC':function(_0x1258b7,_0x5d20b1){return _0x1258b7<=_0x5d20b1;}};if(_0x47cbc2[_0x5b4c44(0x646)](this[_0x5b4c44(0x835)],-0x2b*0x43+-0xf2a+0x1a6b))return;this[_0x5b4c44(0x165)]=!![],this[_0x5b4c44(0x6cc)]=!![];},Game_Timer[_0x3e3bd2(0x294)]['resume']=function(){const _0x32a4b6=_0x3e3bd2,_0x23ab1c={'fPnDL':function(_0x122c5c,_0x33a6f7){return _0x122c5c<=_0x33a6f7;}};if(_0x23ab1c[_0x32a4b6(0x6bd)](this['_frames'],-0x2443*0x1+0x1*-0x252f+0x4972))return;this[_0x32a4b6(0x165)]=![],this['_working']=!![];},Game_Timer[_0x3e3bd2(0x294)]['gainFrames']=function(_0x414b1a){const _0x39a293=_0x3e3bd2;this[_0x39a293(0x835)]=this[_0x39a293(0x835)]||0x1*-0x103c+-0xdd*0xa+-0x2*-0xc6f,this[_0x39a293(0x835)]+=_0x414b1a,this[_0x39a293(0x6cc)]=!![],this['_frames']=Math[_0x39a293(0x51d)](0x25d2+0x651+-0x2c22,this[_0x39a293(0x835)]);},Game_Timer[_0x3e3bd2(0x294)][_0x3e3bd2(0x182)]=function(_0x3b38f1){const _0xae79a4=_0x3e3bd2;this[_0xae79a4(0x835)]=this[_0xae79a4(0x835)]||0x13d5*0x1+-0x2586+-0x7*-0x287,this[_0xae79a4(0x835)]=_0x3b38f1,this[_0xae79a4(0x6cc)]=!![],this[_0xae79a4(0x835)]=Math[_0xae79a4(0x51d)](0x47a+0x3*-0x49b+0x958,this['_frames']);},Game_Timer[_0x3e3bd2(0x294)][_0x3e3bd2(0x55d)+'d']=function(_0x5a0154){const _0x312c08=_0x3e3bd2,_0x4a00c8={'pCjiZ':function(_0x24e9b2,_0x307080){return _0x24e9b2>_0x307080;}};this[_0x312c08(0x3eb)]=_0x5a0154,this['_working']=!![],_0x4a00c8[_0x312c08(0x455)](_0x5a0154,0xef9*0x2+-0x11*-0xe2+-0x2cf4)&&(this['_frames']=Math['max'](this[_0x312c08(0x835)],0x9b8+-0x1393*0x1+0x9dc));},Game_Timer['prototype'][_0x3e3bd2(0x108)+_0x3e3bd2(0x413)]=function(_0x56a7e7){const _0xf62005=_0x3e3bd2,_0x4fd33e={'LsJmB':function(_0x276afb,_0x22817c){return _0x276afb===_0x22817c;}};if(_0x4fd33e[_0xf62005(0x2b2)](this[_0xf62005(0x14a)+_0xf62005(0x77b)],undefined))this[_0xf62005(0xa1d)+'MoveCore']();this[_0xf62005(0x14a)+_0xf62005(0x77b)]=_0x56a7e7;},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x790)+_0x3e3bd2(0xa24)]=Game_Timer[_0x3e3bd2(0x294)][_0x3e3bd2(0x614)],Game_Timer['prototype'][_0x3e3bd2(0x614)]=function(){const _0x31dcc3=_0x3e3bd2,_0x10ba9a={'CRPuC':function(_0x5d5556,_0x29d29d){return _0x5d5556===_0x29d29d;}};if(_0x10ba9a[_0x31dcc3(0x815)](this[_0x31dcc3(0x14a)+_0x31dcc3(0x77b)],undefined))this['initEvents'+_0x31dcc3(0x3f7)]();this['_expireCom'+_0x31dcc3(0x77b)]?$gameTemp[_0x31dcc3(0x4f9)+_0x31dcc3(0x77b)](this['_expireCom'+_0x31dcc3(0x77b)]):VisuMZ[_0x31dcc3(0x5eb)+'Core']['Game_Timer'+_0x31dcc3(0xa24)][_0x31dcc3(0x3f6)](this);},VisuMZ[_0x3e3bd2(0x5eb)+'Core']['Game_Messa'+_0x3e3bd2(0x80b)]=Game_Message[_0x3e3bd2(0x294)][_0x3e3bd2(0x4b4)],Game_Message[_0x3e3bd2(0x294)][_0x3e3bd2(0x4b4)]=function(_0x40b819){const _0x116790=_0x3e3bd2;VisuMZ[_0x116790(0x5eb)+_0x116790(0x8da)][_0x116790(0x367)+'ge_add'][_0x116790(0x3f6)](this,_0x40b819),this[_0x116790(0xfb)]=$gameTemp['getSelfTar'+_0x116790(0x30e)]();},Game_Message[_0x3e3bd2(0x294)][_0x3e3bd2(0x951)+'lfEvent']=function(){const _0x2a87f6=_0x3e3bd2;$gameTemp[_0x2a87f6(0x951)+_0x2a87f6(0xfc)](this[_0x2a87f6(0xfb)]);},VisuMZ[_0x3e3bd2(0x5eb)+'Core'][_0x3e3bd2(0x559)+_0x3e3bd2(0x6a2)]=Game_Switches['prototype'][_0x3e3bd2(0x2e6)],Game_Switches[_0x3e3bd2(0x294)][_0x3e3bd2(0x2e6)]=function(_0x414ebb){const _0x17bc2d=_0x3e3bd2;if(DataManager[_0x17bc2d(0x8b6)+'Switch'](_0x414ebb))return!!this[_0x17bc2d(0x904)+_0x17bc2d(0x977)](_0x414ebb);else{if(DataManager['isSelfSwit'+'ch'](_0x414ebb))return!!this[_0x17bc2d(0x54d)](_0x414ebb);else return DataManager[_0x17bc2d(0x59c)+'h'](_0x414ebb)?!!this[_0x17bc2d(0x562)](_0x414ebb):VisuMZ[_0x17bc2d(0x5eb)+_0x17bc2d(0x8da)][_0x17bc2d(0x559)+'hes_value'][_0x17bc2d(0x3f6)](this,_0x414ebb);}},Game_Switches[_0x3e3bd2(0x87b)+'nc']={},Game_Switches[_0x3e3bd2(0x294)][_0x3e3bd2(0x904)+_0x3e3bd2(0x977)]=function(_0x2bc3ca){const _0x465cf9=_0x3e3bd2,_0x36bb03={'WGvgE':'return\x20%1','mgoEQ':function(_0x484bbf,_0x17da71){return _0x484bbf(_0x17da71);},'avegK':_0x465cf9(0x630)};if(!Game_Switches['advancedFu'+'nc'][_0x2bc3ca]){$dataSystem[_0x465cf9(0x399)][_0x2bc3ca][_0x465cf9(0x848)](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x522bcc=_0x36bb03[_0x465cf9(0x11e)]['format'](_0x36bb03[_0x465cf9(0x736)](String,RegExp['$1']));Game_Switches['advancedFu'+'nc'][_0x2bc3ca]=new Function(_0x36bb03[_0x465cf9(0x293)],_0x522bcc);}const _0x40a8bf=$gameTemp['getSelfTar'+_0x465cf9(0x30e)]()||this;return Game_Switches['advancedFu'+'nc'][_0x2bc3ca]['call'](_0x40a8bf,_0x2bc3ca);},Game_Switches[_0x3e3bd2(0x294)][_0x3e3bd2(0x54d)]=function(_0x370e1d){const _0x2311a6=_0x3e3bd2,_0x1219c5={'WZDbb':function(_0x2b8272,_0x58aebf){return _0x2b8272!==_0x58aebf;},'OrFOZ':_0x2311a6(0x230)+_0x2311a6(0x7e7)},_0x4912d0=$gameTemp[_0x2311a6(0x93d)+_0x2311a6(0x30e)]()||this;if(_0x1219c5['WZDbb'](_0x4912d0['constructo'+'r'],Game_Event))return VisuMZ[_0x2311a6(0x5eb)+_0x2311a6(0x8da)][_0x2311a6(0x559)+_0x2311a6(0x6a2)][_0x2311a6(0x3f6)](this,_0x370e1d);else{const _0x27db94=[_0x4912d0[_0x2311a6(0x44a)],_0x4912d0[_0x2311a6(0x4a0)],_0x1219c5[_0x2311a6(0x30f)]['format'](_0x370e1d)];return $gameSelfSwitches['value'](_0x27db94);}},Game_Switches[_0x3e3bd2(0x294)][_0x3e3bd2(0x562)]=function(_0x561f58){const _0x45a04b=_0x3e3bd2,_0x44e00d={'lrzNU':_0x45a04b(0x5c2)+'tch\x20%2'},_0x46cc9a=$gameMap?$gameMap['mapId']():-0x1a35+0x1e23+0x2*-0x1f7,_0x33cba1=[-0x23fa+-0xb*0x14c+-0x191f*-0x2,0x8b*-0x15+0x1*-0xf01+0x152*0x14,_0x44e00d['lrzNU']['format'](_0x46cc9a,_0x561f58)];return $gameSelfSwitches[_0x45a04b(0x2e6)](_0x33cba1);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x559)+_0x3e3bd2(0x3de)+'ue']=Game_Switches['prototype'][_0x3e3bd2(0xa00)],Game_Switches[_0x3e3bd2(0x294)]['setValue']=function(_0x43d9ca,_0x3049f3){const _0x5ccf6e=_0x3e3bd2;if(DataManager[_0x5ccf6e(0x1fb)+'ch'](_0x43d9ca))this[_0x5ccf6e(0x8c6)+'ue'](_0x43d9ca,_0x3049f3);else DataManager[_0x5ccf6e(0x59c)+'h'](_0x43d9ca)?this['setMapValu'+'e'](_0x43d9ca,_0x3049f3):VisuMZ[_0x5ccf6e(0x5eb)+_0x5ccf6e(0x8da)]['Game_Switc'+_0x5ccf6e(0x3de)+'ue'][_0x5ccf6e(0x3f6)](this,_0x43d9ca,_0x3049f3);},Game_Switches[_0x3e3bd2(0x294)][_0x3e3bd2(0x8c6)+'ue']=function(_0x112cb1,_0x51506e){const _0x65f6c3=_0x3e3bd2,_0x344d8d={'FZZKg':function(_0x16e914,_0x3831af){return _0x16e914!==_0x3831af;},'TXWQE':_0x65f6c3(0x230)+_0x65f6c3(0x7e7)},_0x2c5570=$gameTemp[_0x65f6c3(0x93d)+_0x65f6c3(0x30e)]()||this;if(_0x344d8d[_0x65f6c3(0x94c)](_0x2c5570[_0x65f6c3(0x9f3)+'r'],Game_Event))VisuMZ[_0x65f6c3(0x5eb)+_0x65f6c3(0x8da)]['Game_Switc'+'hes_setVal'+'ue'][_0x65f6c3(0x3f6)](this,_0x112cb1,_0x51506e);else{const _0x39d74d=[_0x2c5570[_0x65f6c3(0x44a)],_0x2c5570[_0x65f6c3(0x4a0)],_0x344d8d[_0x65f6c3(0x9eb)][_0x65f6c3(0x96d)](_0x112cb1)];$gameSelfSwitches[_0x65f6c3(0xa00)](_0x39d74d,_0x51506e);}},Game_Switches[_0x3e3bd2(0x294)][_0x3e3bd2(0x9bd)+'e']=function(_0x5ed41e,_0x582404){const _0xa1bd49=_0x3e3bd2,_0x54e12d={'TbZdw':'Map\x20%1\x20Swi'+_0xa1bd49(0x5d9)},_0x17f1d7=$gameMap?$gameMap[_0xa1bd49(0x9ec)]():-0x1ba6+0x1*0x3e4+-0x1*-0x17c2,_0x197c6c=[0x1c1f+-0xf1*-0x17+-0x31c6,-0x2*0x16+0x9*0x26f+-0x15bb*0x1,_0x54e12d[_0xa1bd49(0x462)][_0xa1bd49(0x96d)](_0x17f1d7,_0x5ed41e)];return $gameSelfSwitches[_0xa1bd49(0xa00)](_0x197c6c,_0x582404);},VisuMZ['EventsMove'+_0x3e3bd2(0x8da)][_0x3e3bd2(0x73c)+_0x3e3bd2(0x7b7)]=Game_Variables[_0x3e3bd2(0x294)][_0x3e3bd2(0x2e6)],Game_Variables[_0x3e3bd2(0x294)][_0x3e3bd2(0x2e6)]=function(_0x5d14f2){const _0x50459e=_0x3e3bd2;if(DataManager[_0x50459e(0x8b6)+_0x50459e(0x9e1)](_0x5d14f2))return this[_0x50459e(0x904)+_0x50459e(0x977)](_0x5d14f2);else{if(DataManager[_0x50459e(0x729)+_0x50459e(0x4ec)](_0x5d14f2))return this['selfValue'](_0x5d14f2);else return DataManager[_0x50459e(0x4eb)+_0x50459e(0x3ff)](_0x5d14f2)?this[_0x50459e(0x562)](_0x5d14f2):VisuMZ['EventsMove'+_0x50459e(0x8da)][_0x50459e(0x73c)+_0x50459e(0x7b7)][_0x50459e(0x3f6)](this,_0x5d14f2);}},Game_Variables['advancedFu'+'nc']={},Game_Variables[_0x3e3bd2(0x294)][_0x3e3bd2(0x904)+_0x3e3bd2(0x977)]=function(_0x44be5c){const _0x179d3e=_0x3e3bd2,_0x27323f={'GoaYn':_0x179d3e(0x446),'KtoGc':function(_0x3547a5,_0x130f9f){return _0x3547a5(_0x130f9f);},'oiNZY':_0x179d3e(0x19a)};if(!Game_Variables[_0x179d3e(0x87b)+'nc'][_0x44be5c]){$dataSystem[_0x179d3e(0x93b)][_0x44be5c]['match'](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x4b3297=_0x27323f['GoaYn'][_0x179d3e(0x96d)](_0x27323f[_0x179d3e(0x3c2)](String,RegExp['$1']));Game_Variables[_0x179d3e(0x87b)+'nc'][_0x44be5c]=new Function(_0x27323f['oiNZY'],_0x4b3297);}const _0x1ec78f=$gameTemp[_0x179d3e(0x93d)+'get']()||this;return Game_Variables[_0x179d3e(0x87b)+'nc'][_0x44be5c]['call'](_0x1ec78f,_0x44be5c);},Game_Variables[_0x3e3bd2(0x294)][_0x3e3bd2(0x54d)]=function(_0x58f9ad){const _0x193c46=_0x3e3bd2,_0x11518e={'WyBen':function(_0x43f75d,_0x434965){return _0x43f75d!==_0x434965;},'fmryc':_0x193c46(0x694)+_0x193c46(0x3a7)},_0x311536=$gameTemp[_0x193c46(0x93d)+_0x193c46(0x30e)]()||this;if(_0x11518e[_0x193c46(0x2cb)](_0x311536[_0x193c46(0x9f3)+'r'],Game_Event))return VisuMZ[_0x193c46(0x5eb)+_0x193c46(0x8da)][_0x193c46(0x73c)+_0x193c46(0x7b7)][_0x193c46(0x3f6)](this,_0x58f9ad);else{const _0x202579=[_0x311536['_mapId'],_0x311536['_eventId'],_0x11518e['fmryc']['format'](_0x58f9ad)];return $gameSelfSwitches[_0x193c46(0x2e6)](_0x202579);}},Game_Variables['prototype'][_0x3e3bd2(0x562)]=function(_0x3769ba){const _0x4da30f=_0x3e3bd2,_0x3bd611={'szsCl':_0x4da30f(0x299)+_0x4da30f(0x738)},_0x24a334=$gameMap?$gameMap[_0x4da30f(0x9ec)]():0xe9*0x2+0x51e+-0x1*0x6f0,_0x560cd1=[-0x8b*0x1b+-0x7*-0x41f+-0xe30,0x581*-0x7+0x1*0x10d+0x215*0x12,_0x3bd611['szsCl'][_0x4da30f(0x96d)](_0x24a334,_0x3769ba)];return $gameSelfSwitches[_0x4da30f(0x2e6)](_0x560cd1)||0x1f0f+0x22*-0x9f+-0x5*0x1fd;},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)]['Game_Varia'+_0x3e3bd2(0x561)+_0x3e3bd2(0x977)]=Game_Variables['prototype'][_0x3e3bd2(0xa00)],Game_Variables['prototype']['setValue']=function(_0xa3a4e7,_0x2c73a6){const _0x354ed3=_0x3e3bd2;if(DataManager[_0x354ed3(0x729)+'able'](_0xa3a4e7))this['setSelfVal'+'ue'](_0xa3a4e7,_0x2c73a6);else DataManager['isMapVaria'+_0x354ed3(0x3ff)](_0xa3a4e7)?this[_0x354ed3(0x9bd)+'e'](_0xa3a4e7,_0x2c73a6):VisuMZ[_0x354ed3(0x5eb)+'Core'][_0x354ed3(0x73c)+_0x354ed3(0x561)+_0x354ed3(0x977)][_0x354ed3(0x3f6)](this,_0xa3a4e7,_0x2c73a6);},Game_Variables[_0x3e3bd2(0x294)][_0x3e3bd2(0x8c6)+'ue']=function(_0x13f50f,_0xdc5fc4){const _0x1f2782=_0x3e3bd2,_0x3456ef={'BNtNT':function(_0x4c2d5f,_0x1b9478){return _0x4c2d5f!==_0x1b9478;},'PyhFn':'Self\x20Varia'+_0x1f2782(0x3a7)},_0x3585fa=$gameTemp[_0x1f2782(0x93d)+_0x1f2782(0x30e)]()||this;if(_0x3456ef[_0x1f2782(0x4dd)](_0x3585fa[_0x1f2782(0x9f3)+'r'],Game_Event))VisuMZ[_0x1f2782(0x5eb)+'Core'][_0x1f2782(0x73c)+_0x1f2782(0x561)+_0x1f2782(0x977)][_0x1f2782(0x3f6)](this,_0x13f50f,_0xdc5fc4);else{const _0x244b55=[_0x3585fa[_0x1f2782(0x44a)],_0x3585fa[_0x1f2782(0x4a0)],_0x3456ef[_0x1f2782(0x826)][_0x1f2782(0x96d)](_0x13f50f)];$gameSelfSwitches['setValue'](_0x244b55,_0xdc5fc4);}},Game_Variables[_0x3e3bd2(0x294)]['setMapValu'+'e']=function(_0x34181b,_0x58fd8a){const _0x3741c9=_0x3e3bd2,_0x267a74={'EWTfA':_0x3741c9(0x299)+_0x3741c9(0x738)},_0x38be75=$gameMap?$gameMap[_0x3741c9(0x9ec)]():0x1f63+0xb*-0x351+-0x28c*-0x2,_0x108d67=[0x1537+-0x783*-0x3+-0xaf0*0x4,0x1a3a+-0xac6+-0x17*0xac,_0x267a74['EWTfA'][_0x3741c9(0x96d)](_0x38be75,_0x34181b)];$gameSelfSwitches['setValue'](_0x108d67,_0x58fd8a);},VisuMZ['EventsMove'+_0x3e3bd2(0x8da)]['Game_SelfS'+'witches_va'+'lue']=Game_SelfSwitches['prototype']['value'],Game_SelfSwitches[_0x3e3bd2(0x294)][_0x3e3bd2(0x2e6)]=function(_0x478287){const _0x2b8447=_0x3e3bd2;if(_0x478287[0x11d5+-0x1f64+0xd91][_0x2b8447(0x848)](/(?:SELF|MAP)/i))return this[_0x2b8447(0x54d)](_0x478287);else{return VisuMZ[_0x2b8447(0x5eb)+_0x2b8447(0x8da)][_0x2b8447(0x739)+_0x2b8447(0x833)+_0x2b8447(0x977)][_0x2b8447(0x3f6)](this,_0x478287);;}},Game_SelfSwitches[_0x3e3bd2(0x294)]['selfValue']=function(_0x436166){const _0x3a1404=_0x3e3bd2;return _0x436166[0x2652+-0x749+0x2f*-0xa9][_0x3a1404(0x848)](/VAR/i)?this['_data'][_0x436166]||0x1*-0x22a5+-0x1bda+0x3e7f:!!this[_0x3a1404(0x9b7)][_0x436166];},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x739)+_0x3e3bd2(0x423)+_0x3e3bd2(0x68d)]=Game_SelfSwitches[_0x3e3bd2(0x294)]['setValue'],Game_SelfSwitches['prototype'][_0x3e3bd2(0xa00)]=function(_0x133204,_0x4f5ac4){const _0x272d2e=_0x3e3bd2;_0x133204[-0x1*0x23b5+0x1*-0x1157+0x350e][_0x272d2e(0x848)](/(?:SELF|MAP)/i)?this['setSelfVal'+'ue'](_0x133204,_0x4f5ac4):VisuMZ['EventsMove'+_0x272d2e(0x8da)][_0x272d2e(0x739)+_0x272d2e(0x423)+'tValue']['call'](this,_0x133204,_0x4f5ac4);},Game_SelfSwitches[_0x3e3bd2(0x294)][_0x3e3bd2(0x8c6)+'ue']=function(_0x1b4673,_0x73cddd){const _0x22b069=_0x3e3bd2;this[_0x22b069(0x9b7)][_0x1b4673]=_0x1b4673[-0x221*0x7+-0x161c+0x1*0x2505][_0x22b069(0x848)](/VAR/i)?_0x73cddd:!!_0x73cddd,this[_0x22b069(0x3ee)]();},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x900)+_0x3e3bd2(0x7cb)+_0x3e3bd2(0x6d3)]=Scene_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x7cb)+_0x3e3bd2(0x6d3)],Scene_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x7cb)+'layObjects']=function(){const _0x394ea8=_0x3e3bd2;$gameMap[_0x394ea8(0x4b3)+_0x394ea8(0x76f)+'s'](),VisuMZ[_0x394ea8(0x5eb)+_0x394ea8(0x8da)]['Scene_Map_'+'createDisp'+_0x394ea8(0x6d3)][_0x394ea8(0x3f6)](this);},Game_Map['prototype'][_0x3e3bd2(0x4b3)+_0x3e3bd2(0x76f)+'s']=function(){const _0x5f0e40=_0x3e3bd2;this[_0x5f0e40(0x12b)]=this['mapId'](),this[_0x5f0e40(0x6ce)+'e']=undefined;const _0x4d1a53=this[_0x5f0e40(0x79a)]();for(const _0x38ea20 of _0x4d1a53){if(_0x38ea20)$gameSelfSwitches[_0x5f0e40(0x5e4)+_0x5f0e40(0x9f4)+_0x5f0e40(0x6ff)](_0x38ea20);}},Game_SelfSwitches[_0x3e3bd2(0x294)]['resetSelfS'+_0x3e3bd2(0x9f4)+'Event']=function(_0x401dda){const _0x482abe=_0x3e3bd2,_0x3a375e={'SYFju':_0x482abe(0x59b),'mVBuJ':function(_0x99519,_0x4b96f4){return _0x99519>_0x4b96f4;}};if(!_0x401dda)return;if(!_0x401dda['event']())return;const _0x17f22e=_0x401dda[_0x482abe(0x620)]()['note']||'';if(_0x17f22e[_0x482abe(0x848)](/<(?:EXIT RESET|EXIT|TEMP|TEMPORARY) (?:SELF|SELF SWITCH|SELF SWITCHES|SELF DATA)>/i)){const _0x33014c=_0x3a375e[_0x482abe(0x2fc)][_0x482abe(0x96d)]($gameMap['_mapId'],_0x401dda[_0x482abe(0x4a0)]),_0x56bf78=Object['keys'](this[_0x482abe(0x9b7)])['filter'](_0x2a3328=>_0x2a3328[_0x482abe(0xa33)](_0x33014c));while(_0x3a375e[_0x482abe(0x6fd)](_0x56bf78['length'],0x1c75*-0x1+-0x1b60+0x1*0x37d5)){const _0x315ad6=_0x56bf78[_0x482abe(0x918)]();delete this[_0x482abe(0x9b7)][_0x315ad6];}}},Game_SelfSwitches[_0x3e3bd2(0x294)]['resetSelfS'+'witchesFor'+_0x3e3bd2(0x859)]=function(_0x46081f){const _0x3b1095=_0x3e3bd2,_0x7bb5d1={'ryvak':_0x3b1095(0x557),'WtuxG':function(_0x38f558,_0xd7986a){return _0x38f558>_0xd7986a;},'huSEB':function(_0x5da2b6,_0x12eeaa){return _0x5da2b6===_0x12eeaa;}},_0x4ee6f5=_0x7bb5d1[_0x3b1095(0x722)][_0x3b1095(0x96d)]($gameMap[_0x3b1095(0x44a)]),_0xb96939=Object['keys'](this[_0x3b1095(0x9b7)])[_0x3b1095(0x118)](_0xfb8df8=>_0xfb8df8['startsWith'](_0x4ee6f5));while(_0x7bb5d1[_0x3b1095(0x143)](_0xb96939[_0x3b1095(0x3cf)],0x3*0x4aa+0x1163+0x1f61*-0x1)){const _0x1cbcfc=_0xb96939[_0x3b1095(0x918)]();delete this[_0x3b1095(0x9b7)][_0x1cbcfc];}_0x7bb5d1['huSEB'](_0x46081f,$gameMap[_0x3b1095(0x9ec)]())&&$gameMap[_0x3b1095(0x540)+_0x3b1095(0x9f1)]();},VisuMZ[_0x3e3bd2(0x5eb)+'Core'][_0x3e3bd2(0x624)+_0x3e3bd2(0x7d4)+_0x3e3bd2(0x201)+'n']=Game_Enemy[_0x3e3bd2(0x294)][_0x3e3bd2(0x347)+_0x3e3bd2(0x92e)],Game_Enemy[_0x3e3bd2(0x294)][_0x3e3bd2(0x347)+_0x3e3bd2(0x92e)]=function(_0x33a7c3){const _0xd6e0ef=_0x3e3bd2;$gameTemp[_0xd6e0ef(0x951)+_0xd6e0ef(0xfc)](this);const _0x177a3c=VisuMZ['EventsMove'+_0xd6e0ef(0x8da)][_0xd6e0ef(0x624)+_0xd6e0ef(0x7d4)+_0xd6e0ef(0x201)+'n'][_0xd6e0ef(0x3f6)](this,_0x33a7c3);return $gameTemp['clearSelfT'+_0xd6e0ef(0x5d3)](),_0x177a3c;},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x83d)+_0x3e3bd2(0x162)+_0x3e3bd2(0x913)]=Game_Party[_0x3e3bd2(0x294)][_0x3e3bd2(0x70d)+_0x3e3bd2(0x8ef)],Game_Party[_0x3e3bd2(0x294)][_0x3e3bd2(0x70d)+_0x3e3bd2(0x8ef)]=function(){const _0x3db149=_0x3e3bd2;if(this[_0x3db149(0x8ca)+_0x3db149(0x8b9)+_0x3db149(0x2b3)+_0x3db149(0x5c9)]())return!![];return VisuMZ['EventsMove'+_0x3db149(0x8da)][_0x3db149(0x83d)+_0x3db149(0x162)+'terHalf'][_0x3db149(0x3f6)](this);},Game_Party[_0x3e3bd2(0x294)][_0x3e3bd2(0x8ca)+_0x3e3bd2(0x8b9)+_0x3e3bd2(0x2b3)+_0x3e3bd2(0x5c9)]=function(){const _0x1978ae=_0x3e3bd2,_0x5cdb30={'HjWyr':function(_0x3f244b,_0x2a9e6a,_0x4de302){return _0x3f244b(_0x2a9e6a,_0x4de302);}};if(this[_0x1978ae(0x29d)+_0x1978ae(0x86d)])return![];return _0x5cdb30[_0x1978ae(0x6dc)]($isTileEncounterHalf,$gamePlayer['x'],$gamePlayer['y']);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x83d)+_0x3e3bd2(0x162)+_0x3e3bd2(0x6e5)]=Game_Party[_0x3e3bd2(0x294)][_0x3e3bd2(0x70d)+_0x3e3bd2(0x3df)],Game_Party[_0x3e3bd2(0x294)][_0x3e3bd2(0x70d)+_0x3e3bd2(0x3df)]=function(){const _0x31bcc2=_0x3e3bd2;if(this['isPlayerWi'+_0x31bcc2(0x8b9)+_0x31bcc2(0x611)+_0x31bcc2(0x5c9)]())return!![];return VisuMZ['EventsMove'+_0x31bcc2(0x8da)][_0x31bcc2(0x83d)+_0x31bcc2(0x162)+_0x31bcc2(0x6e5)][_0x31bcc2(0x3f6)](this);},Game_Party[_0x3e3bd2(0x294)][_0x3e3bd2(0x8ca)+'thinEncoun'+_0x3e3bd2(0x611)+_0x3e3bd2(0x5c9)]=function(){const _0x1cf3e7=_0x3e3bd2,_0x53870d={'gXCyj':function(_0x3b40b8,_0x3ed32b,_0x211b94){return _0x3b40b8(_0x3ed32b,_0x211b94);}};if(this[_0x1cf3e7(0x29d)+_0x1cf3e7(0x86d)])return![];return _0x53870d[_0x1cf3e7(0x2ee)]($isTileEncounterNone,$gamePlayer['x'],$gamePlayer['y']);};var $isTileEncounterHalf=function(_0x42b8ac,_0x1165fe){const _0x2ca5ae=_0x3e3bd2,_0x37844={'IcqBv':function(_0x365239,_0x19ce9e){return _0x365239||_0x19ce9e;},'RVhJA':function(_0x5d3d2d,_0x1504c4){return _0x5d3d2d||_0x1504c4;}};if(!$gameMap)return![];_0x42b8ac=Math[_0x2ca5ae(0x1f4)](_0x37844[_0x2ca5ae(0x5c0)](_0x42b8ac,0x6f8+0xaf+-0x7a7)),_0x1165fe=Math[_0x2ca5ae(0x1f4)](_0x37844['RVhJA'](_0x1165fe,-0x2527+-0x1d4c+0x4273*0x1));const _0x51f157=$gameMap[_0x2ca5ae(0x79a)]();for(const _0x3791a9 of _0x51f157){if(!_0x3791a9)continue;if(_0x3791a9[_0x2ca5ae(0x116)])continue;const _0x572960=_0x3791a9[_0x2ca5ae(0x85d)+_0x2ca5ae(0x271)+'pe'](!![]),_0x20f1e9=_0x3791a9[_0x2ca5ae(0x85d)+_0x2ca5ae(0x43f)+_0x2ca5ae(0x959)](!![]);if($gameMap['checkEvent'+_0x2ca5ae(0x46d)](_0x42b8ac,_0x1165fe,_0x3791a9,_0x572960,_0x20f1e9))return!![];}return![];},$isTileEncounterNone=function(_0x5e12b2,_0x4cb876){const _0x22b13d=_0x3e3bd2,_0x1da5e5={'RLhGU':function(_0x1d2710,_0x3f06a2){return _0x1d2710||_0x3f06a2;}};if(!$gameMap)return![];_0x5e12b2=Math[_0x22b13d(0x1f4)](_0x1da5e5[_0x22b13d(0x6fe)](_0x5e12b2,0x21ce+-0x12ba+0xc1*-0x14)),_0x4cb876=Math[_0x22b13d(0x1f4)](_0x1da5e5[_0x22b13d(0x6fe)](_0x4cb876,-0xd79*0x1+-0x1f3*-0x1+0xb86));const _0x45200a=$gameMap[_0x22b13d(0x79a)]();for(const _0x24be4f of _0x45200a){if(!_0x24be4f)continue;if(_0x24be4f[_0x22b13d(0x116)])continue;const _0x4b8956=_0x24be4f[_0x22b13d(0x85d)+_0x22b13d(0x271)+'pe'](![]),_0x5d606b=_0x24be4f['encounterP'+_0x22b13d(0x43f)+'stance'](![]);if($gameMap['checkEvent'+_0x22b13d(0x46d)](_0x5e12b2,_0x4cb876,_0x24be4f,_0x4b8956,_0x5d606b))return!![];}return![];};VisuMZ['EventsMove'+'Core'][_0x3e3bd2(0x967)+'_meetsCond'+'itions']=Game_Troop[_0x3e3bd2(0x294)][_0x3e3bd2(0x9c7)+_0x3e3bd2(0x551)],Game_Troop[_0x3e3bd2(0x294)][_0x3e3bd2(0x9c7)+_0x3e3bd2(0x551)]=function(_0x50d3b3){const _0x1bb051=_0x3e3bd2;$gameTemp[_0x1bb051(0x951)+'lfTarget'](this);const _0x49bc65=VisuMZ['EventsMove'+_0x1bb051(0x8da)][_0x1bb051(0x967)+_0x1bb051(0x847)+_0x1bb051(0x32a)][_0x1bb051(0x3f6)](this,_0x50d3b3);return $gameTemp['clearSelfT'+'arget'](),_0x49bc65;},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0xff)+_0x3e3bd2(0x8ad)]=Game_Map[_0x3e3bd2(0x294)]['setup'],Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x442)]=function(_0x73257c){const _0x1b99fe=_0x3e3bd2,_0x1e666a={'SzQPJ':'10|11|0|4|'+'7|9|2|5|6|'+_0x1b99fe(0x780)},_0x5299ec=_0x1e666a[_0x1b99fe(0x4c3)]['split']('|');let _0x30cefd=-0x10b1+-0x4de+0x158f*0x1;while(!![]){switch(_0x5299ec[_0x30cefd++]){case'0':VisuMZ[_0x1b99fe(0x5eb)+_0x1b99fe(0x8da)][_0x1b99fe(0xff)+_0x1b99fe(0x8ad)][_0x1b99fe(0x3f6)](this,_0x73257c);continue;case'1':this[_0x1b99fe(0x7d2)+'LoadCommon'+_0x1b99fe(0x8a3)]();continue;case'2':this[_0x1b99fe(0x840)+_0x1b99fe(0x3e8)+'ons']();continue;case'3':this[_0x1b99fe(0x4db)+'seEncounte'+_0x1b99fe(0x5a4)]();continue;case'4':this['clearEvent'+_0x1b99fe(0x769)]();continue;case'5':this[_0x1b99fe(0x282)+_0x1b99fe(0x46c)]();continue;case'6':this['setupPlaye'+_0x1b99fe(0x57c)+'yOverrides']();continue;case'7':this[_0x1b99fe(0x6a1)+'nalSupport']();continue;case'8':this['setupFollo'+'werVisibil'+_0x1b99fe(0x5ad)+'es']();continue;case'9':this[_0x1b99fe(0x456)+_0x1b99fe(0x15a)+_0x1b99fe(0x19d)]();continue;case'10':this[_0x1b99fe(0x8e3)+_0x1b99fe(0x266)+_0x1b99fe(0x246)+'s'](_0x73257c);continue;case'11':this[_0x1b99fe(0x4a8)+_0x1b99fe(0x769)]();continue;case'12':this[_0x1b99fe(0x4a8)+_0x1b99fe(0x769)]();continue;}break;}},VisuMZ['EventsMove'+'Core'][_0x3e3bd2(0xff)+_0x3e3bd2(0x707)]=Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x961)+'s'],Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x961)+'s']=function(){const _0x4596f0=_0x3e3bd2;VisuMZ['EventsMove'+'Core'][_0x4596f0(0xff)+_0x4596f0(0x707)][_0x4596f0(0x3f6)](this),this[_0x4596f0(0x406)+_0x4596f0(0x85b)]();},Game_Map['_eventOver'+_0x3e3bd2(0x654)+_0x3e3bd2(0x929)]=-0x1d1*-0x1+0x1*-0x1d53+-0x8e*-0x33,Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x4ee)+_0x3e3bd2(0x9da)+'ad']=function(){const _0x43a20a=_0x3e3bd2,_0x1e968f={'lVqKB':function(_0x173743,_0x5cd404){return _0x173743>_0x5cd404;}},_0x3cd319=Game_Map['_eventOver'+_0x43a20a(0x654)+'old'];this['_eventOver'+'load']=_0x1e968f[_0x43a20a(0x198)](this[_0x43a20a(0x79a)]()[_0x43a20a(0x3cf)],_0x3cd319);if(this[_0x43a20a(0x2c4)+_0x43a20a(0x5d1)]&&$gameTemp[_0x43a20a(0x9ce)]()){}},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x37e)+'rloaded']=function(){const _0x554a26=_0x3e3bd2;return this[_0x554a26(0x2c4)+_0x554a26(0x5d1)];},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x4a8)+'Cache']=function(){const _0x56348e=_0x3e3bd2;this[_0x56348e(0x6ce)+'e']=undefined;},Game_Map[_0x3e3bd2(0x294)]['setupDiago'+_0x3e3bd2(0x8c7)]=function(){const _0x4b0319=_0x3e3bd2;this[_0x4b0319(0x2fd)+'upport']=VisuMZ['EventsMove'+_0x4b0319(0x8da)][_0x4b0319(0x668)][_0x4b0319(0x60e)][_0x4b0319(0x420)];const _0x1673f4=$dataMap[_0x4b0319(0x20a)]||'';if(_0x1673f4[_0x4b0319(0x848)](/<DIAGONAL MOVEMENT: ON>/i))this[_0x4b0319(0x2fd)+'upport']=!![];else _0x1673f4[_0x4b0319(0x848)](/<DIAGONAL MOVEMENT: OFF>/i)&&(this['_diagonalS'+_0x4b0319(0x70b)]=![]);},Game_Map['MOBILE_DIA'+_0x3e3bd2(0x53d)+'FINDING']=VisuMZ[_0x3e3bd2(0x5eb)+'Core'][_0x3e3bd2(0x668)][_0x3e3bd2(0x60e)][_0x3e3bd2(0x4ae)+_0x3e3bd2(0x1df)+'d']??![],Game_Map['prototype'][_0x3e3bd2(0x4fe)+_0x3e3bd2(0x824)+_0x3e3bd2(0x571)]=function(){const _0x2da3e1=_0x3e3bd2,_0xf80533={'plvsD':function(_0x5eafc7,_0x217f06){return _0x5eafc7===_0x217f06;},'ZbQem':_0x2da3e1(0x311),'IRXkd':_0x2da3e1(0x88f)};if(Utils[_0x2da3e1(0x528)+'vice']()){if(!Game_Map['MOBILE_DIA'+'GONAL_PATH'+_0x2da3e1(0x89d)])return![];}const _0xd880d7=$gameSystem[_0x2da3e1(0x25d)+_0x2da3e1(0x6af)+_0x2da3e1(0x4e7)]();if(_0xf80533['plvsD'](_0xd880d7,_0xf80533[_0x2da3e1(0x996)]))return!![];if(_0xf80533[_0x2da3e1(0x81f)](_0xd880d7,_0xf80533[_0x2da3e1(0x9db)]))return![];if(_0xf80533[_0x2da3e1(0x81f)](this['_diagonalS'+_0x2da3e1(0x70b)],undefined))this[_0x2da3e1(0x6a1)+_0x2da3e1(0x8c7)]();return this[_0x2da3e1(0x2fd)+'upport'];},Game_Map['prototype'][_0x3e3bd2(0x933)+_0x3e3bd2(0x2f8)]=function(_0x3c714b,_0x3f2dfb){const _0x12959a=_0x3e3bd2;if([0x210d+-0x1b*0x146+0x156,-0x136b*-0x1+0x38*-0x51+0x1*-0x1af,-0x5*-0x389+-0x26d1+0x152b][_0x12959a(0x1bf)](_0x3f2dfb))_0x3c714b-=-0x112a+0x3a0+0xd8b;if([0x17e2+0x2de*-0x7+-0x3cd*0x1,0x1055*-0x1+-0x985*0x4+-0x1225*-0x3,0xe*-0xad+-0x1ab*-0x16+-0x1b33][_0x12959a(0x1bf)](_0x3f2dfb))_0x3c714b+=-0x1*-0xc1f+0x36a+-0xf88;return this[_0x12959a(0x3d0)](_0x3c714b);},Game_Map['prototype'][_0x3e3bd2(0x98f)+_0x3e3bd2(0x2f8)]=function(_0x1843cc,_0x3cd8d8){const _0x5b8042=_0x3e3bd2;if([-0x25f5+0x116d+0x1489,-0xeae+0x313*0x5+-0xaf,0x1fc8+0x4*-0x745+0xd*-0x35][_0x5b8042(0x1bf)](_0x3cd8d8))_0x1843cc+=0x1e50+0x249e+0x164f*-0x3;if([-0x7fd+0x1b86+-0x1382,-0x1aea+-0xb0c+0x25fe,-0x1f*-0xdf+-0x59*-0x4a+0x47*-0xbe][_0x5b8042(0x1bf)](_0x3cd8d8))_0x1843cc-=0x15b5+-0x18d2+-0x10a*-0x3;return this[_0x5b8042(0x31e)](_0x1843cc);},Game_Map['prototype'][_0x3e3bd2(0x6a0)+'e']=function(_0xeaa79d,_0x111e0e,_0xe865ac,_0x9b92c){const _0x17ad71=_0x3e3bd2;return Math[_0x17ad71(0x51d)](Math['abs'](this[_0x17ad71(0x544)](_0xeaa79d,_0xe865ac)),Math[_0x17ad71(0x90a)](this['deltaY'](_0x111e0e,_0x9b92c)));},Game_Map['prototype']['setupRegio'+_0x3e3bd2(0x15a)+_0x3e3bd2(0x19d)]=function(){const _0x2145f3=_0x3e3bd2,_0x51068c={'uFUhG':_0x2145f3(0x9c8),'Choag':_0x2145f3(0xa06),'SdwzH':_0x2145f3(0x644),'lUXDC':_0x2145f3(0x4c1),'hjeHr':_0x2145f3(0x28b),'rdneQ':_0x2145f3(0x8bd),'LmlrW':_0x2145f3(0x6ff),'kIdhC':_0x2145f3(0x2a2),'ZNvbi':_0x2145f3(0x536),'rWLsw':_0x2145f3(0xe6),'RbPUU':_0x2145f3(0x670),'PnKtZ':_0x2145f3(0x5e0),'tkPSh':function(_0x463324,_0x11cc0e){return _0x463324(_0x11cc0e);},'CcrrO':function(_0x5cf165,_0x4a3ca4){return _0x5cf165+_0x4a3ca4;},'YqHXY':function(_0x4bc4c9,_0x3cb4b4){return _0x4bc4c9+_0x3cb4b4;},'Jgabx':function(_0x53688e,_0x3a9812){return _0x53688e+_0x3a9812;}},_0x2283a7=VisuMZ[_0x2145f3(0x5eb)+_0x2145f3(0x8da)][_0x2145f3(0x668)][_0x2145f3(0x905)],_0x39f66a={},_0x237d6d=[_0x51068c[_0x2145f3(0x42e)],_0x51068c['Choag'],_0x51068c[_0x2145f3(0x1a8)]],_0x30ca0f=[_0x51068c[_0x2145f3(0x662)],_0x51068c['hjeHr'],_0x51068c[_0x2145f3(0x8ab)],_0x51068c[_0x2145f3(0x56b)],_0x51068c[_0x2145f3(0x30c)],_0x51068c['ZNvbi'],_0x51068c['rWLsw'],_0x51068c[_0x2145f3(0x3d9)]];for(const _0x3b078f of _0x237d6d){for(const _0x4950ad of _0x30ca0f){const _0x51f676=_0x51068c[_0x2145f3(0x26a)][_0x2145f3(0x96d)](_0x4950ad,_0x3b078f);_0x2283a7[_0x51f676]&&(_0x39f66a[_0x51f676]=_0x2283a7[_0x51f676]['slice'](-0x35*-0x4+-0xa79*0x2+0x141e));}}const _0x2544d9=$dataMap[_0x2145f3(0x20a)]||'',_0x26d721=_0x2544d9[_0x2145f3(0x848)](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/gi);if(_0x26d721)for(const _0x5b8255 of _0x26d721){_0x5b8255[_0x2145f3(0x848)](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/i);let _0x7e6b71=_0x51068c[_0x2145f3(0x9ad)](String,RegExp['$1'])[_0x2145f3(0x12d)+'e']()[_0x2145f3(0x66f)](),_0x41275c=_0x51068c[_0x2145f3(0x9ad)](String,RegExp['$2'])['toLowerCas'+'e']()[_0x2145f3(0x66f)]();const _0x4f5719=JSON[_0x2145f3(0x17d)](_0x51068c['CcrrO'](_0x51068c['YqHXY']('[',RegExp['$3'][_0x2145f3(0x848)](/\d+/g)),']'));_0x7e6b71=_0x51068c['YqHXY'](_0x7e6b71[_0x2145f3(0x8a5)](0x2d*-0x19+-0xbe6+0x104b)[_0x2145f3(0x936)+'e'](),_0x7e6b71[_0x2145f3(0x17f)](-0xa2c+-0xd44*0x1+-0x1*-0x1771)),_0x41275c=_0x51068c[_0x2145f3(0x883)](_0x41275c['charAt'](-0x14ef+0xb9+0x1436)['toUpperCas'+'e'](),_0x41275c[_0x2145f3(0x17f)](0x2dd+0x46f+-0x1*0x74b));const _0x3f14d4=_0x51068c[_0x2145f3(0x26a)][_0x2145f3(0x96d)](_0x7e6b71,_0x41275c);if(_0x39f66a[_0x3f14d4])_0x39f66a[_0x3f14d4]=_0x39f66a[_0x3f14d4][_0x2145f3(0x73f)](_0x4f5719);}this[_0x2145f3(0x122)+'es']=_0x39f66a;},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x78d)+_0x3e3bd2(0x829)]=function(_0x2266eb,_0x402e24,_0x5bdb9e,_0x349f1e){const _0x4e71ff=_0x3e3bd2,_0x12f1b2={'OuLeE':function(_0xe72454,_0x24d8dd){return _0xe72454===_0x24d8dd;},'AoPcN':'player','DEPZS':function(_0x4d62c0,_0x4b9185){return _0x4d62c0===_0x4b9185;},'tQMzU':_0x4e71ff(0x620),'dnYhc':_0x4e71ff(0x8dc),'TQqHZ':function(_0x3ab34e,_0x4fb8e7){return _0x3ab34e+_0x4fb8e7;}},_0x3f2994=this[_0x4e71ff(0x933)+_0x4e71ff(0x2f8)](_0x2266eb,_0x5bdb9e),_0x3ca124=this[_0x4e71ff(0x98f)+_0x4e71ff(0x2f8)](_0x402e24,_0x5bdb9e),_0x456f48=this[_0x4e71ff(0x785)](_0x3f2994,_0x3ca124),_0x422632=this[_0x4e71ff(0x122)+'es'];if(_0x422632['AllAllow'][_0x4e71ff(0x1bf)](_0x456f48))return!![];else{if(_0x12f1b2['OuLeE'](_0x349f1e,_0x12f1b2[_0x4e71ff(0x9dc)]))return _0x422632[_0x4e71ff(0x66c)+'w'][_0x4e71ff(0x1bf)](_0x456f48)||_0x422632[_0x4e71ff(0x4ea)]['includes'](_0x456f48);else{if(_0x12f1b2[_0x4e71ff(0x90f)](_0x349f1e,_0x12f1b2[_0x4e71ff(0x134)]))return _0x422632[_0x4e71ff(0x565)][_0x4e71ff(0x1bf)](_0x456f48)||_0x422632[_0x4e71ff(0x4ea)][_0x4e71ff(0x1bf)](_0x456f48);else{if(_0x422632[_0x4e71ff(0x20c)+'ow'][_0x4e71ff(0x1bf)](_0x456f48))return!![];else{const _0x34fbfd=_0x12f1b2[_0x4e71ff(0x1cc)][_0x4e71ff(0x96d)](_0x12f1b2[_0x4e71ff(0x3e6)](_0x349f1e['charAt'](0x2*0x11f2+-0x9f4+-0x5*0x530)[_0x4e71ff(0x936)+'e'](),_0x349f1e[_0x4e71ff(0x17f)](0x6fe+-0x252c+0x1e2f*0x1)));if(_0x422632[_0x34fbfd])return _0x422632[_0x34fbfd][_0x4e71ff(0x1bf)](_0x456f48);}}}}return![];},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x9b4)+_0x3e3bd2(0x9b3)]=function(_0x51a80b,_0x34638c,_0x12eeba,_0x54289d){const _0x556c18=_0x3e3bd2,_0x7087ff={'Pnanx':function(_0x29fdd2,_0x1ed63c){return _0x29fdd2===_0x1ed63c;},'UjMLm':_0x556c18(0x4b6),'OdAqz':function(_0x10fa06,_0x13fc87){return _0x10fa06===_0x13fc87;},'sHpfI':'event','gUYfV':_0x556c18(0x802),'hoqct':function(_0x290eef,_0x41e5d0){return _0x290eef+_0x41e5d0;}},_0x2713d4=this[_0x556c18(0x933)+'Direction'](_0x51a80b,_0x12eeba),_0x517094=this[_0x556c18(0x98f)+_0x556c18(0x2f8)](_0x34638c,_0x12eeba),_0x6a9a3e=this[_0x556c18(0x785)](_0x2713d4,_0x517094),_0x2de1d4=this[_0x556c18(0x122)+'es'];if(_0x2de1d4[_0x556c18(0x465)][_0x556c18(0x1bf)](_0x6a9a3e))return!![];else{if(_0x7087ff[_0x556c18(0x902)](_0x54289d,_0x7087ff[_0x556c18(0x7d3)]))return _0x2de1d4['PlayerForb'+'id'][_0x556c18(0x1bf)](_0x6a9a3e)||_0x2de1d4[_0x556c18(0xee)][_0x556c18(0x1bf)](_0x6a9a3e);else{if(_0x7087ff[_0x556c18(0x63a)](_0x54289d,_0x7087ff[_0x556c18(0xec)]))return _0x2de1d4['EventForbi'+'d'][_0x556c18(0x1bf)](_0x6a9a3e)||_0x2de1d4[_0x556c18(0xee)][_0x556c18(0x1bf)](_0x6a9a3e);else{if(_0x2de1d4[_0x556c18(0x77e)+_0x556c18(0x925)][_0x556c18(0x1bf)](_0x6a9a3e))return!![];else{const _0x16e31b=_0x7087ff['gUYfV'][_0x556c18(0x96d)](_0x7087ff[_0x556c18(0x541)](_0x54289d[_0x556c18(0x8a5)](-0xedf*0x1+0xb9*0x25+-0x5ef*0x2)['toUpperCas'+'e'](),_0x54289d[_0x556c18(0x17f)](0xce5+-0xfd7+0x5*0x97)));if(_0x2de1d4[_0x16e31b])return _0x2de1d4[_0x16e31b][_0x556c18(0x1bf)](_0x6a9a3e);}}}}return![];},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x15c)+'ckable']=function(_0x56eb62,_0x5bcbc3,_0x4c171b,_0x41610e){const _0x2d8131=_0x3e3bd2,_0x59014e={'wynGm':function(_0x549653,_0x41fbd7){return _0x549653===_0x41fbd7;},'BUEbo':'airship','uQBLe':_0x2d8131(0x2bd),'wuqJY':function(_0x2dbce9,_0x25ea14){return _0x2dbce9+_0x25ea14;}};_0x4c171b=_0x59014e['wynGm'](_0x41610e,_0x59014e[_0x2d8131(0x6c0)])?0x16a5+-0x107e+0x1*-0x622:_0x4c171b;const _0x4871a3=this[_0x2d8131(0x933)+_0x2d8131(0x2f8)](_0x56eb62,_0x4c171b),_0x3609bd=this[_0x2d8131(0x98f)+_0x2d8131(0x2f8)](_0x5bcbc3,_0x4c171b),_0xc3c5f1=this[_0x2d8131(0x785)](_0x4871a3,_0x3609bd),_0x37dd01=this['_regionRul'+'es'];if(_0x37dd01[_0x2d8131(0x21e)+'k'][_0x2d8131(0x1bf)](_0xc3c5f1))return!![];else{const _0x1734e5=_0x59014e['uQBLe']['format'](_0x59014e[_0x2d8131(0x40b)](_0x41610e[_0x2d8131(0x8a5)](0x116*0x11+0x1805+-0x2a7b)[_0x2d8131(0x936)+'e'](),_0x41610e[_0x2d8131(0x17f)](-0xa*-0x2f+-0x431+0x25c)));if(_0x37dd01[_0x1734e5])return _0x37dd01[_0x1734e5][_0x2d8131(0x1bf)](_0xc3c5f1);}return![];},VisuMZ['EventsMove'+_0x3e3bd2(0x8da)]['Game_Map_r'+'efresh']=Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x90b)],Game_Map['prototype'][_0x3e3bd2(0x90b)]=function(){const _0x9c95cf=_0x3e3bd2;VisuMZ['EventsMove'+_0x9c95cf(0x8da)][_0x9c95cf(0x90c)+_0x9c95cf(0x9d4)]['call'](this),this[_0x9c95cf(0x678)+_0x9c95cf(0x554)+_0x9c95cf(0x756)]();},Game_Map[_0x3e3bd2(0x294)]['checkNeedF'+_0x3e3bd2(0x554)+_0x3e3bd2(0x756)]=function(){const _0x133368=_0x3e3bd2,_0x4bb001={'bePsR':'1|0|2|3|4'},_0x21f503=_0x4bb001[_0x133368(0x8e8)][_0x133368(0x424)]('|');let _0x3d05a4=-0x1817+0x13ba+0x1*0x45d;while(!![]){switch(_0x21f503[_0x3d05a4++]){case'0':if(this['events']()[_0x133368(0x50b)](_0x59e8a1=>_0x59e8a1[_0x133368(0xa21)+_0x133368(0x1ea)+'iable']())){this[_0x133368(0x927)+'odicRefres'+'h']=!![];return;}continue;case'1':this['_needsPeri'+'odicRefres'+'h']=![];continue;case'2':if(this[_0x133368(0x79a)]()[_0x133368(0x50b)](_0x2359ae=>_0x2359ae['hasCPCs']())){this[_0x133368(0x927)+_0x133368(0x715)+'h']=!![];return;}continue;case'3':if(this['_commonEve'+_0x133368(0x5c9)][_0x133368(0x50b)](_0x14d018=>_0x14d018[_0x133368(0xa21)+'dSwitchVar'+'iable']())){this[_0x133368(0x927)+_0x133368(0x715)+'h']=!![];return;}continue;case'4':if(this[_0x133368(0x76c)+_0x133368(0x5c9)][_0x133368(0x50b)](_0x498354=>_0x498354['hasCPCs']())){this[_0x133368(0x927)+_0x133368(0x715)+'h']=!![];return;}continue;}break;}},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x84a)+'pdate']=Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x117)],Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x117)]=function(_0x1153dc){const _0x1756c8=_0x3e3bd2;this[_0x1756c8(0x308)+_0x1756c8(0x715)+'h'](),VisuMZ[_0x1756c8(0x5eb)+_0x1756c8(0x8da)][_0x1756c8(0x84a)+_0x1756c8(0x3b3)][_0x1756c8(0x3f6)](this,_0x1153dc);},Game_Map['prototype']['updatePeri'+_0x3e3bd2(0x715)+'h']=function(){const _0x205d1a=_0x3e3bd2,_0x7fcae9={'WbxBr':function(_0x1dee56,_0x7ee594){return _0x1dee56<=_0x7ee594;}};if(!this['_needsPeri'+_0x205d1a(0x715)+'h'])return;this['_periodicR'+'efreshTime'+'r']=this['_periodicR'+_0x205d1a(0x64b)+'r']||-0xe7f*0x1+0x188b+-0x9d0,this['_periodicR'+'efreshTime'+'r']--,_0x7fcae9['WbxBr'](this[_0x205d1a(0x34d)+_0x205d1a(0x64b)+'r'],0x1789*0x1+-0x2509+0xd80)&&(this[_0x205d1a(0x540)+_0x205d1a(0x9f1)](),this[_0x205d1a(0x34d)+_0x205d1a(0x64b)+'r']=-0x238c+0x1666+-0x6b1*-0x2);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x965)+_0x3e3bd2(0x3bd)+_0x3e3bd2(0x599)]=Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x6eb)+_0x3e3bd2(0x3ad)],Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x6eb)+'bled']=function(){const _0x36b082=_0x3e3bd2;if(!$gameSystem[_0x36b082(0x519)+_0x36b082(0x425)]())return!![];return VisuMZ[_0x36b082(0x5eb)+'Core'][_0x36b082(0x965)+_0x36b082(0x3bd)+_0x36b082(0x599)]['call'](this);},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x840)+_0x3e3bd2(0x3e8)+'ons']=function(){const _0x24df90=_0x3e3bd2;this['_saveEvent'+_0x24df90(0x831)]=![];const _0x50d652=$dataMap[_0x24df90(0x20a)]||'';_0x50d652[_0x24df90(0x848)](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this['_saveEvent'+_0x24df90(0x831)]=!![]);},Game_Map['prototype'][_0x3e3bd2(0x30a)+'tLocations']=function(){const _0x4759c5=_0x3e3bd2,_0x5d64b6={'pBqqQ':function(_0x5e2cc6,_0x3dd316){return _0x5e2cc6===_0x3dd316;}};if(_0x5d64b6['pBqqQ'](this[_0x4759c5(0x952)+_0x4759c5(0x831)],undefined))this[_0x4759c5(0x840)+'ventLocati'+_0x4759c5(0x19d)]();return this['_saveEvent'+_0x4759c5(0x831)];},Game_Map['prototype'][_0x3e3bd2(0x8e3)+_0x3e3bd2(0x266)+_0x3e3bd2(0x246)+'s']=function(_0x3df1c2){const _0x6db3ba=_0x3e3bd2,_0x1668d3={'SBXvB':function(_0x152746,_0x38760d){return _0x152746!==_0x38760d;}};_0x1668d3[_0x6db3ba(0x6aa)](_0x3df1c2,this[_0x6db3ba(0x9ec)]())&&$gamePlayer&&$gameSystem['removeTemp'+_0x6db3ba(0x266)+_0x6db3ba(0x246)+'s'](this[_0x6db3ba(0x9ec)]());},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x282)+'edEvents']=function(){const _0x489b0e=_0x3e3bd2;this[_0x489b0e(0x388)+_0x489b0e(0x876)]=$gameSystem[_0x489b0e(0x5ba)+'nedEventDa'+'ta'](this[_0x489b0e(0x9ec)]()),this[_0x489b0e(0x355)+_0x489b0e(0x158)]=!![];},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x290)+_0x3e3bd2(0x4b0)]=Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x79a)],Game_Map[_0x3e3bd2(0x294)]['events']=function(){const _0x5e5b66=_0x3e3bd2;if(this[_0x5e5b66(0x6ce)+'e'])return this[_0x5e5b66(0x6ce)+'e'];const _0x23e4a2=VisuMZ[_0x5e5b66(0x5eb)+_0x5e5b66(0x8da)][_0x5e5b66(0x290)+_0x5e5b66(0x4b0)][_0x5e5b66(0x3f6)](this),_0x2ce8f0=_0x23e4a2['concat'](this[_0x5e5b66(0x388)+_0x5e5b66(0x876)]||[]);return this[_0x5e5b66(0x6ce)+'e']=_0x2ce8f0[_0x5e5b66(0x118)](_0x250c5b=>!!_0x250c5b),this['_eventCach'+'e'];},VisuMZ['EventsMove'+'Core']['Game_Map_e'+_0x3e3bd2(0x413)]=Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x620)],Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x620)]=function(_0x1934db){const _0x488f4e=_0x3e3bd2,_0x20fbed={'YEZbB':function(_0x16d2a1,_0x1f8e99){return _0x16d2a1>=_0x1f8e99;}};return _0x20fbed['YEZbB'](_0x1934db,0x173*-0x10+0xd98+0xd80)?(_0x1934db-=-0x6d1*0x2+-0x1*0x1c48+-0x1*-0x2dd2,this[_0x488f4e(0x388)+_0x488f4e(0x876)][_0x1934db]):VisuMZ[_0x488f4e(0x5eb)+_0x488f4e(0x8da)][_0x488f4e(0x290)+'vent']['call'](this,_0x1934db);},Game_Map[_0x3e3bd2(0x294)]['eraseEvent']=function(_0x4cd7a2){const _0x24f93f=this['event'](_0x4cd7a2);if(_0x24f93f)_0x24f93f['erase']();},Game_Map[_0x3e3bd2(0x294)]['setupSpawn'+_0x3e3bd2(0x5d4)]=function(){const _0x4fdcd5=_0x3e3bd2,_0x18417e={'Rwqhc':_0x4fdcd5(0x5c6),'djeKO':function(_0x52eaad,_0x5872f3){return _0x52eaad+_0x5872f3;},'hLtIL':function(_0x22ca07,_0x2a3901){return _0x22ca07+_0x2a3901;},'eyRTP':function(_0x2ef7eb,_0x165105){return _0x2ef7eb+_0x165105;}},_0x4a53d={'template':_0x18417e[_0x4fdcd5(0x699)],'mapId':0x1,'eventId':0xc,'x':_0x18417e['djeKO']($gamePlayer['x'],-0x24b*0x4+0x631+0x2fc),'y':_0x18417e['hLtIL']($gamePlayer['y'],-0x5*0x4c7+0xa4a*0x2+0x350),'spawnPreserved':!![],'spawnEventId':_0x18417e[_0x4fdcd5(0x7b8)](this[_0x4fdcd5(0x388)+_0x4fdcd5(0x876)][_0x4fdcd5(0x3cf)],0x1cf7+0x1af3+-0x3402)};this[_0x4fdcd5(0x1c9)+'nedEventWi'+_0x4fdcd5(0x350)](_0x4a53d);},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x77c)+_0x3e3bd2(0x6d2)+_0x3e3bd2(0x755)]=function(_0x40e0d5,_0x2ec0a7){const _0x3f9920=_0x3e3bd2,_0x3970f2={'JiEjx':_0x3f9920(0x4f0),'qHdAj':function(_0xd8ae00,_0x48b049){return _0xd8ae00===_0x48b049;},'XnhCu':function(_0x4119db,_0x599bc8){return _0x4119db===_0x599bc8;},'wCdRM':function(_0xdafcb5,_0x4746e3){return _0xdafcb5>_0x4746e3;}},_0x3e72cc=_0x3970f2[_0x3f9920(0x95b)][_0x3f9920(0x424)]('|');let _0x1e47cf=0xb*0x38b+0x135e+0x203*-0x1d;while(!![]){switch(_0x3e72cc[_0x1e47cf++]){case'0':if(this[_0x3f9920(0x231)]()[_0x3f9920(0x322)](_0x40e0d5,_0x2ec0a7))return!![];continue;case'1':if(_0x3970f2[_0x3f9920(0x169)]($gamePlayer['x'],_0x40e0d5)&&_0x3970f2[_0x3f9920(0x8cb)]($gamePlayer['y'],_0x2ec0a7))return!![];continue;case'2':if(this[_0x3f9920(0x3d7)]()['posNt'](_0x40e0d5,_0x2ec0a7))return!![];continue;case'3':return![];case'4':if(_0x3970f2[_0x3f9920(0x396)](this[_0x3f9920(0x8f7)](_0x40e0d5,_0x2ec0a7)['length'],0x3e2*-0x8+0x2e*0xca+0x4*-0x14f))return!![];continue;}break;}},Game_Map[_0x3e3bd2(0x294)]['isSpawnHit'+_0x3e3bd2(0x253)+_0x3e3bd2(0x6c8)]=function(_0x367f5e,_0x3e03c6,_0x4692b0){const _0x469e9c=_0x3e3bd2,_0x38b18f={'DRjPr':function(_0x159d84,_0x138ac0){return _0x159d84-_0x138ac0;},'NfhnJ':function(_0x2669b8,_0x36f2af){return _0x2669b8+_0x36f2af;},'lTCdv':function(_0x9c1a1b,_0x4df61d){return _0x9c1a1b+_0x4df61d;},'iCpEd':function(_0x20cba8,_0x410835){return _0x20cba8<=_0x410835;},'DqRUa':function(_0x3aeed4,_0x300a91){return _0x3aeed4<=_0x300a91;}};$gameTemp[_0x469e9c(0x112)]=_0x367f5e;const _0x22bb3d=new Game_Event(_0x367f5e['mapId'],_0x367f5e[_0x469e9c(0x363)]);$gameTemp[_0x469e9c(0x112)]=undefined,_0x22bb3d['refresh']();let _0x731e25=_0x38b18f[_0x469e9c(0x839)](_0x3e03c6,_0x22bb3d[_0x469e9c(0x177)+'ox'][_0x469e9c(0x34e)]),_0x1046a6=_0x38b18f[_0x469e9c(0x8b4)](_0x3e03c6,_0x22bb3d['_addedHitb'+'ox'][_0x469e9c(0x4ca)]),_0x168c6a=_0x38b18f['DRjPr'](_0x4692b0,_0x22bb3d[_0x469e9c(0x177)+'ox']['up']),_0x2583ce=_0x38b18f[_0x469e9c(0x2a8)](_0x4692b0,_0x22bb3d[_0x469e9c(0x177)+'ox'][_0x469e9c(0x68f)]);for(let _0x9f4f2c=_0x731e25;_0x38b18f[_0x469e9c(0x3fc)](_0x9f4f2c,_0x1046a6);_0x9f4f2c++){for(let _0x2df3a9=_0x168c6a;_0x38b18f['DqRUa'](_0x2df3a9,_0x2583ce);_0x2df3a9++){if(this[_0x469e9c(0x77c)+_0x469e9c(0x6d2)+_0x469e9c(0x755)](_0x9f4f2c,_0x2df3a9))return![];}}return!![];},Game_Map['prototype']['createSpaw'+'nedEventWi'+_0x3e3bd2(0x350)]=function(_0x193719){const _0x42316a=_0x3e3bd2;$gameTemp[_0x42316a(0x112)]=_0x193719;const _0x465337=new Game_Event(_0x193719['mapId'],_0x193719[_0x42316a(0x363)]);$gameTemp[_0x42316a(0x112)]=undefined,this[_0x42316a(0x388)+_0x42316a(0x876)][_0x42316a(0x61a)](_0x465337),_0x465337[_0x42316a(0x282)](_0x193719),this['clearEvent'+_0x42316a(0x769)]();},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x28f)+_0x3e3bd2(0x6ee)+'tXY']=function(_0x20a004,_0x4b08b0,_0xe7cc23){const _0x579f7d=_0x3e3bd2,_0x34b391={'anuAb':function(_0x455642,_0x17dda2){return _0x455642!==_0x17dda2;},'kgMOU':_0x579f7d(0x8af)},_0x53b911=_0x20a004[_0x579f7d(0x1d1)]['toUpperCas'+'e']()['trim']();if(_0x34b391[_0x579f7d(0x8eb)](_0x53b911,_0x34b391[_0x579f7d(0x7cf)])){const _0x1c4a5e=VisuMZ['EventTempl'+'ates'][_0x53b911];_0x1c4a5e&&(_0x20a004[_0x579f7d(0x9ec)]=_0x1c4a5e[_0x579f7d(0x881)],_0x20a004['eventId']=_0x1c4a5e[_0x579f7d(0x6e3)]);}const _0x3132f8=_0x20a004['x'],_0x2eb8c4=_0x20a004['y'];if(!this['isValid'](_0x3132f8,_0x2eb8c4))return![];if(_0x4b08b0){if(this[_0x579f7d(0x77c)+_0x579f7d(0x6d2)+_0x579f7d(0x755)](_0x3132f8,_0x2eb8c4))return![];if(!this[_0x579f7d(0xdd)+_0x579f7d(0x253)+'onOk'](_0x20a004,_0x3132f8,_0x2eb8c4))return![];}if(_0xe7cc23){if(!this[_0x579f7d(0x31b)+_0x579f7d(0x9fe)+_0x579f7d(0x6f3)](_0x3132f8,_0x2eb8c4))return![];}return this[_0x579f7d(0x1c9)+'nedEventWi'+'thData'](_0x20a004),!![];},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x28f)+_0x3e3bd2(0x6ee)+'tRegion']=function(_0x12a894,_0x25621c,_0x339341,_0x12b848){const _0x50dc6f=_0x3e3bd2,_0x199127={'tnMEZ':function(_0x18ee89,_0x9d3a58){return _0x18ee89!==_0x9d3a58;},'eulyK':_0x50dc6f(0x8af),'VnWCI':function(_0x36d5e3,_0x1428dc){return _0x36d5e3<_0x1428dc;},'upIsk':function(_0x159227,_0xb58f08){return _0x159227<_0xb58f08;},'wYlbX':function(_0x4c5814,_0x46465e){return _0x4c5814>_0x46465e;}},_0x2bf6c4=_0x12a894[_0x50dc6f(0x1d1)]['toUpperCas'+'e']()[_0x50dc6f(0x66f)]();if(_0x199127[_0x50dc6f(0x403)](_0x2bf6c4,_0x199127[_0x50dc6f(0xa17)])){const _0x5f18c1=VisuMZ[_0x50dc6f(0x8cf)+_0x50dc6f(0x3d3)][_0x2bf6c4];_0x5f18c1&&(_0x12a894[_0x50dc6f(0x9ec)]=_0x5f18c1[_0x50dc6f(0x881)],_0x12a894['eventId']=_0x5f18c1['EventID']);}const _0x1411bc=[],_0x2675db=this[_0x50dc6f(0x5df)](),_0x57cceb=this[_0x50dc6f(0x8e6)]();for(let _0x26f83f=0x2531*0x1+-0xf*-0x292+-0x1*0x4bbf;_0x199127[_0x50dc6f(0x623)](_0x26f83f,_0x2675db);_0x26f83f++){for(let _0x4e2e39=-0x11*-0x13e+-0x16*-0xe7+-0x4c*0x8a;_0x199127[_0x50dc6f(0xe9)](_0x4e2e39,_0x57cceb);_0x4e2e39++){if(!_0x25621c[_0x50dc6f(0x1bf)](this['regionId'](_0x26f83f,_0x4e2e39)))continue;if(!this[_0x50dc6f(0x9f9)](_0x26f83f,_0x4e2e39))continue;if(_0x339341){if(this[_0x50dc6f(0x77c)+_0x50dc6f(0x6d2)+_0x50dc6f(0x755)](_0x26f83f,_0x4e2e39))continue;if(!this[_0x50dc6f(0xdd)+_0x50dc6f(0x253)+_0x50dc6f(0x6c8)](_0x12a894,_0x26f83f,_0x4e2e39))continue;}if(_0x12b848){if(!this['isPassable'+_0x50dc6f(0x9fe)+_0x50dc6f(0x6f3)](_0x26f83f,_0x4e2e39))continue;}_0x1411bc[_0x50dc6f(0x61a)]([_0x26f83f,_0x4e2e39]);}}if(_0x199127['wYlbX'](_0x1411bc['length'],0x33d*0x9+-0x340+0x1*-0x19e5)){const _0x261dd5=_0x1411bc[Math[_0x50dc6f(0x9f2)](_0x1411bc['length'])];return _0x12a894['x']=_0x261dd5[0x18c9+0x30*-0x60+0x9*-0xc1],_0x12a894['y']=_0x261dd5[-0xabe+0x11e2+-0x723],this['createSpaw'+_0x50dc6f(0x1b6)+'thData'](_0x12a894),!![];}return![];},Game_Map[_0x3e3bd2(0x294)]['prepareSpa'+_0x3e3bd2(0x6ee)+_0x3e3bd2(0x821)+'g']=function(_0x1bf472,_0x410a9f,_0x467b63,_0x4c0fe0){const _0x2415f3=_0x3e3bd2,_0x2d8774={'ZWIvh':function(_0x66869c,_0x2b3f16){return _0x66869c!==_0x2b3f16;},'rWYGX':'UNTITLED','Rnjty':function(_0x130a53,_0x559dde){return _0x130a53<_0x559dde;},'wXeXM':function(_0x575581,_0x85e3c7){return _0x575581<_0x85e3c7;},'xoWRh':function(_0x589991,_0x40fdf0){return _0x589991>_0x40fdf0;}},_0x1d3fd0=_0x1bf472[_0x2415f3(0x1d1)]['toUpperCas'+'e']()[_0x2415f3(0x66f)]();if(_0x2d8774[_0x2415f3(0x860)](_0x1d3fd0,_0x2d8774['rWYGX'])){const _0xd35d20=VisuMZ[_0x2415f3(0x8cf)+_0x2415f3(0x3d3)][_0x1d3fd0];_0xd35d20&&(_0x1bf472[_0x2415f3(0x9ec)]=_0xd35d20[_0x2415f3(0x881)],_0x1bf472[_0x2415f3(0x363)]=_0xd35d20['EventID']);}const _0x1cf5d2=[],_0x2b2d5f=this[_0x2415f3(0x5df)](),_0x423d7e=this[_0x2415f3(0x8e6)]();for(let _0xf625=-0x18ca+-0x413+0x335*0x9;_0x2d8774[_0x2415f3(0x61b)](_0xf625,_0x2b2d5f);_0xf625++){for(let _0xbe5e3c=0xe6b*-0x2+0x180+0x2*0xdab;_0x2d8774['wXeXM'](_0xbe5e3c,_0x423d7e);_0xbe5e3c++){if(!_0x410a9f[_0x2415f3(0x1bf)](this[_0x2415f3(0x792)](_0xf625,_0xbe5e3c)))continue;if(!this['isValid'](_0xf625,_0xbe5e3c))continue;if(_0x467b63){if(this[_0x2415f3(0x77c)+_0x2415f3(0x6d2)+_0x2415f3(0x755)](_0xf625,_0xbe5e3c))continue;if(!this[_0x2415f3(0xdd)+'boxCollisi'+_0x2415f3(0x6c8)](_0x1bf472,_0xf625,_0xbe5e3c))continue;}if(_0x4c0fe0){if(!this['isPassable'+'ByAnyDirec'+_0x2415f3(0x6f3)](_0xf625,_0xbe5e3c))continue;}_0x1cf5d2[_0x2415f3(0x61a)]([_0xf625,_0xbe5e3c]);}}if(_0x2d8774[_0x2415f3(0x992)](_0x1cf5d2[_0x2415f3(0x3cf)],-0x9*0x419+-0x712+-0x1*-0x2bf3)){const _0x447794=_0x1cf5d2[Math[_0x2415f3(0x9f2)](_0x1cf5d2[_0x2415f3(0x3cf)])];return _0x1bf472['x']=_0x447794[0x1*-0x9d+0x1f75*-0x1+0x2012],_0x1bf472['y']=_0x447794[0x1f32+-0xb*-0x166+-0x2e93],this[_0x2415f3(0x1c9)+_0x2415f3(0x1b6)+_0x2415f3(0x350)](_0x1bf472),!![];}return![];},Game_Map[_0x3e3bd2(0x294)]['isPassable'+_0x3e3bd2(0x9fe)+'tion']=function(_0x40fb0e,_0x19884e){const _0x245a57=_0x3e3bd2,_0x2d357c={'hdxdH':_0x245a57(0x3f3)},_0x2693a7=_0x2d357c[_0x245a57(0x83e)][_0x245a57(0x424)]('|');let _0x555f5f=-0x76*-0x1a+-0x1169*-0x1+-0x2b*0xaf;while(!![]){switch(_0x2693a7[_0x555f5f++]){case'0':if(this[_0x245a57(0x31b)](_0x40fb0e,_0x19884e,-0x1311*0x2+-0x21c7*0x1+0x47ed))return!![];continue;case'1':return![];case'2':if(this[_0x245a57(0x31b)](_0x40fb0e,_0x19884e,-0x499+-0x2b*-0x97+-0x14bc))return!![];continue;case'3':if(this[_0x245a57(0x31b)](_0x40fb0e,_0x19884e,0x18fa+0x124b*0x2+-0x3d8e))return!![];continue;case'4':if(this[_0x245a57(0x31b)](_0x40fb0e,_0x19884e,-0xc*0x17b+0x230c+-0x1142))return!![];continue;}break;}},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x161)+_0x3e3bd2(0x84b)]=function(_0x316b1e){const _0x3d9e05=_0x3e3bd2,_0x79c4fb={'Wgqqn':function(_0x2af916,_0xec53ee){return _0x2af916<_0xec53ee;},'TbDYv':function(_0x32da37,_0x2c28e1){return _0x32da37-_0x2c28e1;}};if(_0x79c4fb['Wgqqn'](_0x316b1e,-0x24af*0x1+-0xc5*-0x2d+-0x1*-0x5f6))return;if(!this[_0x3d9e05(0x388)+_0x3d9e05(0x876)])return;const _0x4ba486=this[_0x3d9e05(0x620)](_0x316b1e);_0x4ba486[_0x3d9e05(0x3b7)](-(-0x15fa+-0x2259+0x3854),-(0x8e7*-0x1+0x2*0x85f+-0x11*0x76)),_0x4ba486[_0x3d9e05(0x19c)](),this['_spawnedEv'+_0x3d9e05(0x876)][_0x79c4fb[_0x3d9e05(0x2f0)](_0x316b1e,-0x7f9+0x235c*-0x1+0x1*0x2f3d)]=null,this[_0x3d9e05(0x4a8)+_0x3d9e05(0x769)]();},Game_Map[_0x3e3bd2(0x294)]['firstSpawn'+'edEvent']=function(){for(const _0x1e5061 of this['_spawnedEv'+'ents']){if(_0x1e5061)return _0x1e5061;}return null;},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x585)+'edEventID']=function(){const _0x275ba2=_0x3e3bd2,_0x172b3d=this['firstSpawn'+_0x275ba2(0x3b0)]();return _0x172b3d?_0x172b3d[_0x275ba2(0x4a0)]:0xbe2*0x3+-0x458+-0x1f4e;},Game_Map[_0x3e3bd2(0x294)]['lastSpawne'+_0x3e3bd2(0x542)]=function(){const _0x3cae15=_0x3e3bd2,_0x1f7482=this['_spawnedEv'+_0x3cae15(0x876)][_0x3cae15(0x17f)](0xd1+-0x2*0x2dd+0x4e9)['reverse']();for(const _0x320672 of _0x1f7482){if(_0x320672)return _0x320672;}return null;},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x93f)+_0x3e3bd2(0x207)]=function(){const _0x406dc0=_0x3e3bd2,_0x1492e9=this[_0x406dc0(0x93f)+_0x406dc0(0x542)]();return _0x1492e9?_0x1492e9[_0x406dc0(0x4a0)]:0x5*-0x44d+0x3*0x6e3+0x36*0x4;},Game_Map['prototype'][_0x3e3bd2(0x2bc)+'Y']=function(_0x2c98a4,_0x532a1e){const _0x5347c0=_0x3e3bd2,_0x39dca7=this['eventsXy'](_0x2c98a4,_0x532a1e);for(const _0x3afe61 of _0x39dca7){if(!_0x3afe61)continue;if(_0x3afe61['isSpawnedE'+_0x5347c0(0x413)]())this[_0x5347c0(0x161)+_0x5347c0(0x84b)](_0x3afe61[_0x5347c0(0x4a0)]);}},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x226)+_0x3e3bd2(0xa28)]=function(_0x307fa5){const _0x4c258b=_0x3e3bd2;for(const _0x1e73db of this['_spawnedEv'+_0x4c258b(0x876)]){if(!_0x1e73db)continue;_0x307fa5[_0x4c258b(0x1bf)](_0x1e73db['regionId']())&&this[_0x4c258b(0x161)+'ntId'](_0x1e73db[_0x4c258b(0x4a0)]);}},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x56e)+_0x3e3bd2(0x238)]=function(_0x31d7af){const _0x58eefd=_0x3e3bd2;for(const _0x114646 of this[_0x58eefd(0x388)+'ents']){if(!_0x114646)continue;_0x31d7af[_0x58eefd(0x1bf)](_0x114646[_0x58eefd(0x792)]())&&this[_0x58eefd(0x161)+_0x58eefd(0x84b)](_0x114646[_0x58eefd(0x4a0)]);}},Game_Map['prototype'][_0x3e3bd2(0x161)+'rything']=function(){const _0x2c011c=_0x3e3bd2;for(const _0x374323 of this['_spawnedEv'+_0x2c011c(0x876)]){if(!_0x374323)continue;this[_0x2c011c(0x161)+_0x2c011c(0x84b)](_0x374323[_0x2c011c(0x4a0)]);}},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x84a)+_0x3e3bd2(0x4b8)]=Game_Map['prototype']['unlockEven'+'t'],Game_Map[_0x3e3bd2(0x294)]['unlockEven'+'t']=function(_0x3be25c){const _0x4d7616=_0x3e3bd2,_0x4d41d3={'LDZeC':function(_0x4c9147,_0x86d120){return _0x4c9147>=_0x86d120;}};VisuMZ[_0x4d7616(0x5eb)+_0x4d7616(0x8da)]['Game_Map_u'+'nlockEvent'][_0x4d7616(0x3f6)](this,_0x3be25c);if(_0x4d41d3['LDZeC'](_0x3be25c,-0x1*-0x481+0x2048+-0x20e1)){const _0xe5c5a4=this[_0x4d7616(0x620)](_0x3be25c);if(_0xe5c5a4)_0xe5c5a4[_0x4d7616(0x7ab)]();}},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x9b1)+'rVisibilit'+_0x3e3bd2(0x139)]=function(){const _0x3869ba=_0x3e3bd2;this['_forceShow'+_0x3869ba(0x8bd)]=![],this[_0x3869ba(0x695)+_0x3869ba(0x8bd)]=![];if(!$dataMap)return;const _0x431854=$dataMap[_0x3869ba(0x20a)]||'';if(_0x431854['match'](/<HIDE PLAYER>/i))this[_0x3869ba(0xa25)+'Player']=![],this['_forceHide'+_0x3869ba(0x8bd)]=!![];else _0x431854['match'](/<SHOW PLAYER>/i)&&(this['_forceShow'+_0x3869ba(0x8bd)]=!![],this[_0x3869ba(0x695)+_0x3869ba(0x8bd)]=![]);},Game_Map['prototype'][_0x3e3bd2(0x357)+_0x3e3bd2(0x8e4)]=function(){const _0x14faf2=_0x3e3bd2,_0x104d59={'jfqkh':function(_0x297ed6,_0xd3d8a6){return _0x297ed6===_0xd3d8a6;}};return _0x104d59[_0x14faf2(0x72d)](this[_0x14faf2(0xa25)+_0x14faf2(0x8bd)],undefined)&&this[_0x14faf2(0x9b1)+_0x14faf2(0x57c)+_0x14faf2(0x139)](),this['_forceShow'+_0x14faf2(0x8bd)];},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x357)+_0x3e3bd2(0x7a1)]=function(){const _0x272a96=_0x3e3bd2,_0x581f42={'JrLNs':function(_0x15b5b1,_0x365233){return _0x15b5b1===_0x365233;}};return _0x581f42[_0x272a96(0x71f)](this['_forceHide'+_0x272a96(0x8bd)],undefined)&&this[_0x272a96(0x9b1)+'rVisibilit'+_0x272a96(0x139)](),this[_0x272a96(0x695)+_0x272a96(0x8bd)];},VisuMZ['EventsMove'+_0x3e3bd2(0x8da)][_0x3e3bd2(0x675)+_0x3e3bd2(0x566)+'sTranspare'+'nt']=Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0xf4)+_0x3e3bd2(0x498)],Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0xf4)+'ent']=function(){const _0x5dee63=_0x3e3bd2,_0x59e53a={'FyOYG':function(_0x49a6d1,_0x1991e5){return _0x49a6d1===_0x1991e5;}};if(_0x59e53a[_0x5dee63(0x732)](this,$gamePlayer)){if($gameMap[_0x5dee63(0x357)+_0x5dee63(0x8e4)]())return![];if($gameMap[_0x5dee63(0x357)+_0x5dee63(0x7a1)]())return!![];}return VisuMZ['EventsMove'+_0x5dee63(0x8da)][_0x5dee63(0x675)+_0x5dee63(0x566)+'sTranspare'+'nt']['call'](this);},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x75b)+_0x3e3bd2(0x592)+_0x3e3bd2(0x5ad)+'es']=function(){const _0x2856b5=_0x3e3bd2;this[_0x2856b5(0xa25)+'Follower']=![],this['_forceHide'+'Follower']=![];if(!$dataMap)return;const _0x48c838=$dataMap['note']||'';if(_0x48c838[_0x2856b5(0x848)](/<HIDE FOLLOWERS>/i))this[_0x2856b5(0xa25)+'Follower']=![],this[_0x2856b5(0x695)+_0x2856b5(0x379)]=!![];else _0x48c838[_0x2856b5(0x848)](/<SHOW FOLLOWERS>/i)&&(this[_0x2856b5(0xa25)+_0x2856b5(0x379)]=!![],this[_0x2856b5(0x695)+_0x2856b5(0x379)]=![]);},Game_Map['prototype'][_0x3e3bd2(0x9ab)+_0x3e3bd2(0x663)+'wn']=function(){const _0x405096=_0x3e3bd2,_0x250d09={'LAWGG':function(_0x3bbe49,_0x1f1cc1){return _0x3bbe49===_0x1f1cc1;}};return _0x250d09['LAWGG'](this[_0x405096(0xa25)+_0x405096(0x379)],undefined)&&this[_0x405096(0x75b)+'werVisibil'+_0x405096(0x5ad)+'es'](),this[_0x405096(0xa25)+_0x405096(0x379)];},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x9ab)+_0x3e3bd2(0x92c)+'den']=function(){const _0x219dde=_0x3e3bd2,_0x2f4a55={'dTenu':function(_0x285ce1,_0x10120e){return _0x285ce1===_0x10120e;}};return _0x2f4a55[_0x219dde(0x69f)](this['_forceHide'+_0x219dde(0x379)],undefined)&&this[_0x219dde(0x75b)+'werVisibil'+_0x219dde(0x5ad)+'es'](),this[_0x219dde(0x695)+_0x219dde(0x379)];},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x61c)+_0x3e3bd2(0x51c)+_0x3e3bd2(0x75d)]=Game_Followers['prototype']['isVisible'],Game_Followers[_0x3e3bd2(0x294)]['isVisible']=function(){const _0x1b88bc=_0x3e3bd2;if($gameMap[_0x1b88bc(0x9ab)+_0x1b88bc(0x663)+'wn']())return!![];if($gameMap[_0x1b88bc(0x9ab)+_0x1b88bc(0x92c)+'den']())return![];return VisuMZ['EventsMove'+'Core']['Game_Follo'+_0x1b88bc(0x51c)+_0x1b88bc(0x75d)][_0x1b88bc(0x3f6)](this);},Game_Map['prototype'][_0x3e3bd2(0x4db)+_0x3e3bd2(0x510)+'rEvents']=function(){const _0x11b7c6=_0x3e3bd2,_0x2bc479=this[_0x11b7c6(0x79a)](),_0x3b16fd=[];$gameParty[_0x11b7c6(0x29d)+'unterRaw']=!![];for(const _0x2d3cea of _0x2bc479){if(!_0x2d3cea)continue;if(_0x2d3cea[_0x11b7c6(0x116)])continue;_0x2d3cea[_0x11b7c6(0x4db)+_0x11b7c6(0x510)+_0x11b7c6(0xa0a)]()&&_0x3b16fd[_0x11b7c6(0x61a)](_0x2d3cea);}$gameParty[_0x11b7c6(0x29d)+_0x11b7c6(0x86d)]=undefined;for(const _0x2bec50 of _0x3b16fd){if(!_0x2bec50)continue;if(_0x2bec50[_0x11b7c6(0x116)])continue;this[_0x11b7c6(0x16d)](_0x2bec50[_0x11b7c6(0x363)]());}},Game_Event['prototype']['processEra'+'seEncounte'+_0x3e3bd2(0xa0a)]=function(){const _0x2bc105=_0x3e3bd2,_0x21a38a={'EUxmq':function(_0x44381b,_0x13ad30,_0x574731){return _0x44381b(_0x13ad30,_0x574731);},'EWpJN':function(_0x223e73,_0x18be5f,_0xa6a072){return _0x223e73(_0x18be5f,_0xa6a072);}},_0x42f2ed=this[_0x2bc105(0x620)]()[_0x2bc105(0x20a)]||'';if(_0x42f2ed['match'](/<ERASE IF ENC(?:|OUNTER) HALF>/i)){if($gameParty[_0x2bc105(0x70d)+'erHalf']())return!![];if(_0x21a38a['EUxmq']($isTileEncounterHalf,this['x'],this['y']))return!![];}if(_0x42f2ed[_0x2bc105(0x848)](/<ERASE IF ENC(?:|OUNTER) NONE>/i)){if($gameParty[_0x2bc105(0x70d)+_0x2bc105(0x3df)]())return!![];if(_0x21a38a[_0x2bc105(0x817)]($isTileEncounterNone,this['x'],this['y']))return!![];}return![];},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x900)+_0x3e3bd2(0x98a)+_0x3e3bd2(0x496)]=Scene_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x98a)+'d'],Scene_Map[_0x3e3bd2(0x294)]['onMapLoade'+'d']=function(){const _0x478609=_0x3e3bd2;VisuMZ['EventsMove'+'Core'][_0x478609(0x900)+_0x478609(0x98a)+_0x478609(0x496)][_0x478609(0x3f6)](this),$gameMap[_0x478609(0x4db)+_0x478609(0x510)+'rEvents']();},Game_Map[_0x3e3bd2(0x294)]['requestMap'+_0x3e3bd2(0x9d5)+_0x3e3bd2(0x8a3)]=function(){const _0x1d9022=_0x3e3bd2,_0x4015a5={'sXcFy':function(_0x3fe44f,_0x37000d){return _0x3fe44f(_0x37000d);}};if(!$dataMap)return;if(!$dataMap[_0x1d9022(0x20a)])return;const _0x755cf2=$dataMap['note'];if(_0x755cf2['match'](/<MAP LOAD COMMON EVENT(?:|S):[ ](.*)>/i)){const _0x1ba80b=_0x4015a5[_0x1d9022(0x9b0)](String,RegExp['$1'])['split'](',')[_0x1d9022(0x65f)](_0x5cd437=>Number(_0x5cd437));for(const _0x307311 of _0x1ba80b){$gameTemp['reserveCom'+_0x1d9022(0x77b)](_0x307311);}}},Game_CommonEvent[_0x3e3bd2(0x294)][_0x3e3bd2(0xa21)+_0x3e3bd2(0x1ea)+_0x3e3bd2(0x74c)]=function(){const _0x15374c=_0x3e3bd2,_0x8577a6={'ksuJb':function(_0x56bdc6,_0x5dd779){return _0x56bdc6>=_0x5dd779;}},_0x2f864d=this[_0x15374c(0x620)]();return this[_0x15374c(0x8ac)]()&&_0x8577a6[_0x15374c(0x27c)](_0x2f864d['trigger'],-0x11c3+-0x1f80+-0x3*-0x106c)&&DataManager[_0x15374c(0x8b6)+_0x15374c(0x40c)](_0x2f864d[_0x15374c(0x630)]);},Game_CommonEvent[_0x3e3bd2(0x294)][_0x3e3bd2(0x7a8)]=function(){const _0x708ba5=_0x3e3bd2;return VisuMZ['EventsMove'+_0x708ba5(0x8da)]['CustomPage'+_0x708ba5(0x950)][_0x708ba5(0x76c)+'nts'][_0x708ba5(0x1bf)](this[_0x708ba5(0x76c)+_0x708ba5(0x84b)]);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x6ae)+_0x3e3bd2(0x908)+_0x3e3bd2(0x5bd)]=Game_CommonEvent[_0x3e3bd2(0x294)][_0x3e3bd2(0x8ac)],Game_CommonEvent[_0x3e3bd2(0x294)][_0x3e3bd2(0x8ac)]=function(){const _0x200677=_0x3e3bd2;if(VisuMZ[_0x200677(0x5eb)+_0x200677(0x8da)][_0x200677(0x6ae)+_0x200677(0x908)+_0x200677(0x5bd)][_0x200677(0x3f6)](this))return!![];else{const _0x4e015a=this[_0x200677(0x620)]();return VisuMZ[_0x200677(0x5eb)+_0x200677(0x8da)]['CustomPage'+'Conditions'][_0x200677(0x9b9)](this['event']()[_0x200677(0x975)],this[_0x200677(0x76c)+'ntId'],_0x4e015a);}},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x2a1)+_0x3e3bd2(0x180)+_0x3e3bd2(0x779)]=Game_Map[_0x3e3bd2(0x294)]['parallelCo'+_0x3e3bd2(0x381)],Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x4e6)+_0x3e3bd2(0x381)]=function(){const _0x181ca4=_0x3e3bd2,_0x61057=VisuMZ['EventsMove'+_0x181ca4(0x8da)][_0x181ca4(0x2a1)+_0x181ca4(0x180)+_0x181ca4(0x779)][_0x181ca4(0x3f6)](this),_0x30402a=VisuMZ[_0x181ca4(0x5eb)+_0x181ca4(0x8da)][_0x181ca4(0x810)+'Conditions']['_commonEve'+_0x181ca4(0x5c9)][_0x181ca4(0x65f)](_0x206db6=>$dataCommonEvents[_0x206db6]);return _0x61057[_0x181ca4(0x73f)](_0x30402a)[_0x181ca4(0x118)]((_0x40a3b9,_0x3fca24,_0x300e08)=>_0x300e08['indexOf'](_0x40a3b9)===_0x3fca24);},Game_CharacterBase['ALLOW_LADD'+_0x3e3bd2(0xe8)]=VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x668)][_0x3e3bd2(0x60e)][_0x3e3bd2(0x685)+'er']??![],VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x675)+_0x3e3bd2(0x566)+'nitMembers']=Game_CharacterBase[_0x3e3bd2(0x294)]['initMember'+'s'],Game_CharacterBase[_0x3e3bd2(0x294)]['initMember'+'s']=function(){const _0x50454b=_0x3e3bd2;VisuMZ[_0x50454b(0x5eb)+'Core'][_0x50454b(0x675)+_0x50454b(0x566)+_0x50454b(0x60b)][_0x50454b(0x3f6)](this),this[_0x50454b(0xa1d)+_0x50454b(0x5b6)+_0x50454b(0x72a)]();},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0xa1d)+'MoveCoreSe'+'ttings']=function(){const _0x45d50a=_0x3e3bd2,_0x2b9500={'epMdb':_0x45d50a(0x7fd)+_0x45d50a(0x374)},_0x388254=_0x2b9500['epMdb'][_0x45d50a(0x424)]('|');let _0x4d3a70=-0x23c5+0x1*0x10fc+0x12c9;while(!![]){switch(_0x388254[_0x4d3a70++]){case'0':this[_0x45d50a(0x95d)+_0x45d50a(0x466)]();continue;case'1':this[_0x45d50a(0x334)+_0x45d50a(0x331)]();continue;case'2':this[_0x45d50a(0x297)]();continue;case'3':this['_scaleBase'+'Y']=-0x25f5*0x1+-0x152a+0x764*0x8;continue;case'4':this['_patternLo'+'cked']=![];continue;case'5':this['clearDashi'+'ng']();continue;case'6':this['_scaleBase'+'X']=-0x78c+0x2*0x382+0x89;continue;}break;}},VisuMZ['EventsMove'+_0x3e3bd2(0x8da)][_0x3e3bd2(0x675)+_0x3e3bd2(0x20f)+_0x3e3bd2(0x88b)]=Game_CharacterBase[_0x3e3bd2(0x294)]['opacity'],Game_CharacterBase['prototype']['opacity']=function(){const _0x3ceb09=_0x3e3bd2;let _0x10947d=VisuMZ[_0x3ceb09(0x5eb)+_0x3ceb09(0x8da)][_0x3ceb09(0x675)+_0x3ceb09(0x20f)+'pacity'][_0x3ceb09(0x3f6)](this);return _0x10947d=this['adjustMove'+_0x3ceb09(0x763)+_0x3ceb09(0x13c)](_0x10947d),_0x10947d;},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x2b5)+_0x3e3bd2(0x763)+_0x3e3bd2(0x13c)]=function(_0x1b8974){return _0x1b8974;},Game_CharacterBase[_0x3e3bd2(0x294)]['isSpriteVS'+_0x3e3bd2(0x6b0)]=function(){const _0x16a37b=_0x3e3bd2,_0xe86c81={'ktmPq':function(_0x3aef0e,_0x19168f){return _0x3aef0e===_0x19168f;}};if(_0xe86c81[_0x16a37b(0x772)](this[_0x16a37b(0x9f3)+'r'],Game_Player)&&this['isInVehicl'+'e']())return this['vehicle']()[_0x16a37b(0x77a)+_0x16a37b(0x66d)]()[_0x16a37b(0x848)](/\[VS8\]/i);else return Imported['VisuMZ_2_D'+_0x16a37b(0x123)+'Union']&&this[_0x16a37b(0x569)+_0x16a37b(0x8d7)]()?!![]:this[_0x16a37b(0x77a)+'ame']()[_0x16a37b(0x848)](/\[VS8\]/i);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x675)+_0x3e3bd2(0x8c2)+_0x3e3bd2(0x716)]=Game_CharacterBase[_0x3e3bd2(0x294)]['direction'],Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x580)]=function(){const _0x229e11=_0x3e3bd2;if(!$dataMap)return this[_0x229e11(0x58f)]||-0x353*0x4+0x15c8+-0x9b*0xe;if(this[_0x229e11(0x2f9)]()&&!this[_0x229e11(0x2be)]()&&this['isSpriteVS'+_0x229e11(0x6b0)]())return this[_0x229e11(0x84d)+_0x229e11(0x4b1)+_0x229e11(0x1bb)]();else{if(this['isOnLadder']()&&!this['isJumping']())return-0x2e9*-0xd+0xb79+-0x22*0x173;else return this[_0x229e11(0x43e)]()&&this[_0x229e11(0x443)+_0x229e11(0x6b0)]()?this[_0x229e11(0x447)+_0x229e11(0x4ef)+_0x229e11(0x241)]():VisuMZ[_0x229e11(0x5eb)+_0x229e11(0x8da)][_0x229e11(0x675)+_0x229e11(0x8c2)+_0x229e11(0x716)]['call'](this);}},VisuMZ[_0x3e3bd2(0x5eb)+'Core']['Game_Chara'+'cterBase_s'+_0x3e3bd2(0x1ad)+'n']=Game_CharacterBase['prototype'][_0x3e3bd2(0x5cb)+'on'],Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x5cb)+'on']=function(_0x5b06c1){const _0xe2c0cd=_0x3e3bd2;if(!this['isSpriteVS'+'8dir']())_0x5b06c1=this[_0xe2c0cd(0x488)+_0xe2c0cd(0x79b)+'on'](_0x5b06c1);VisuMZ['EventsMove'+_0xe2c0cd(0x8da)][_0xe2c0cd(0x675)+_0xe2c0cd(0x432)+_0xe2c0cd(0x1ad)+'n'][_0xe2c0cd(0x3f6)](this,_0x5b06c1),this[_0xe2c0cd(0x531)+_0xe2c0cd(0x484)+_0xe2c0cd(0x6f3)]();},Game_CharacterBase['prototype'][_0x3e3bd2(0x488)+_0x3e3bd2(0x79b)+'on']=function(_0x14d4d6){const _0x2cd67c=_0x3e3bd2,_0x29dd64={'YiOdA':_0x2cd67c(0x705),'oBPyE':function(_0x541386,_0xabdaa7){return _0x541386===_0xabdaa7;},'Mwgxh':function(_0x58e395,_0x586bf9){return _0x58e395===_0x586bf9;},'TrhUT':function(_0xef4c7d,_0x228031){return _0xef4c7d===_0x228031;},'VpvWj':function(_0x2149d2,_0x4ca4d2){return _0x2149d2===_0x4ca4d2;}},_0x31f7ab=_0x29dd64[_0x2cd67c(0x99e)][_0x2cd67c(0x424)]('|');let _0xd0680d=0x192f+-0x5ad*-0x3+-0x2a36*0x1;while(!![]){switch(_0x31f7ab[_0xd0680d++]){case'0':if(_0x29dd64[_0x2cd67c(0x23a)](_0x14d4d6,0x4f*0x47+0x1076+0x996*-0x4))return this[_0x2cd67c(0x1fa)](this['_x'],this['_y'],-0x943+-0x2*-0x11fb+0x1aaf*-0x1)?-0x25b*-0x6+-0x693*-0x1+-0x1*0x14b1:0x13e*0x6+-0x2*0x3c0+0x14;continue;case'1':return _0x14d4d6;case'2':if(_0x29dd64[_0x2cd67c(0x989)](_0x14d4d6,0x1*-0x1c65+0x112*-0x1f+-0x1*-0x3d96))return this[_0x2cd67c(0x1fa)](this['_x'],this['_y'],0xcf9+-0x1c55+0xf62)?-0x31d*0x1+0x5d*-0x49+0x1da8:-0x9*0x16f+-0xe7a+0x7b*0x39;continue;case'3':if(_0x29dd64[_0x2cd67c(0x414)](_0x14d4d6,0x1c4*0x10+-0x5b6+0x1*-0x1689))return this[_0x2cd67c(0x1fa)](this['_x'],this['_y'],0x932+0x1*0xd89+-0x5*0x48b)?-0x1*0x1392+0x3f7*-0x5+0xab*0x3b:-0x264b+0x3d8*-0x7+0x4135;continue;case'4':if(_0x29dd64[_0x2cd67c(0x8b0)](_0x14d4d6,0x2*0x6ba+0x1138+-0x1f*0xfd))return this[_0x2cd67c(0x1fa)](this['_x'],this['_y'],-0x16f+0x8bd+-0x748)?0x298*-0x4+0x26f9+-0x1c93:-0x1*-0x14e1+0x2498+0x11*-0x361;continue;}break;}},Game_CharacterBase[_0x3e3bd2(0x294)]['isDiagonal'+_0x3e3bd2(0x2f8)]=function(_0x5a86cf){const _0x29f63f=_0x3e3bd2;return[-0x9*-0x1a+-0x2366+-0x6d*-0x51,-0xa21*-0x1+-0x149+-0x8d5*0x1,-0x24b+-0x1*0x1d7+0x427,-0x19e5+0xf*-0x4c+0x1e60,0x6*0x3eb+0x73f*-0x1+-0x43*0x3e][_0x29f63f(0x1bf)](_0x5a86cf);},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x1b9)+_0x3e3bd2(0x716)]=function(){const _0x4c100d=_0x3e3bd2;return this['_lastMoved'+_0x4c100d(0x2f8)]||0x20c3+-0xd77+0xbe*-0x1a;},VisuMZ['EventsMove'+_0x3e3bd2(0x8da)][_0x3e3bd2(0x675)+_0x3e3bd2(0x4b9)+'oveStraigh'+'t']=Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x8a4)+'ht'],Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x8a4)+'ht']=function(_0x388952){const _0x5ad8ce=_0x3e3bd2;this['_lastMoved'+'Direction']=_0x388952,VisuMZ[_0x5ad8ce(0x5eb)+_0x5ad8ce(0x8da)][_0x5ad8ce(0x675)+'cterBase_m'+_0x5ad8ce(0x5fe)+'t'][_0x5ad8ce(0x3f6)](this,_0x388952);},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x741)+_0x3e3bd2(0x235)]=function(_0x4f9c38){const _0x340fee=_0x3e3bd2;if(!this['isDiagonal'+_0x340fee(0x2f8)](_0x4f9c38))return this['moveStraig'+'ht'](_0x4f9c38);let _0x58e978=-0xa9b*-0x1+0x15a2+-0x203d,_0x22576b=0x1*0x23cc+-0x1*0x231f+-0xad;switch(_0x4f9c38){case-0xaaf*0x2+0x1*-0x1fbb+0x1a8d*0x2:_0x58e978=-0x2*0x131c+-0x1084+0x36c0,_0x22576b=-0x12cd+0x97*-0x26+0xad*0x3d;break;case 0xd2e*-0x1+0x270f*-0x1+0x3440:_0x58e978=0x879+0x241b+-0x2c8e,_0x22576b=0x18f7+0x4e+-0xdf*0x1d;break;case-0x11dc+-0x263d+-0x704*-0x8:_0x58e978=-0x1*-0x2221+-0x1*0x2153+0x65*-0x2,_0x22576b=-0x149+0x343*0x1+-0x1f2;break;case 0x1f08+-0x1d99+-0x166:_0x58e978=0x14a1+-0x4dc+-0xfbf,_0x22576b=0x16b1+0x7f*-0x19+0x521*-0x2;break;}if(VisuMZ[_0x340fee(0x5eb)+'Core'][_0x340fee(0x668)][_0x340fee(0x60e)][_0x340fee(0x6e0)+_0x340fee(0x7d8)]){if(!this['canPass'](this['_x'],this['_y'],_0x58e978))return this['moveStraig'+'ht'](_0x22576b);if(!this[_0x340fee(0x1fa)](this['_x'],this['_y'],_0x22576b))return this[_0x340fee(0x8a4)+'ht'](_0x58e978);if(!this[_0x340fee(0x6fb)+'gonally'](this['_x'],this['_y'],_0x58e978,_0x22576b)){let _0xc1f5b6=VisuMZ[_0x340fee(0x5eb)+_0x340fee(0x8da)][_0x340fee(0x668)][_0x340fee(0x60e)][_0x340fee(0x3d6)]?_0x58e978:_0x22576b;return this[_0x340fee(0x8a4)+'ht'](_0xc1f5b6);}}this[_0x340fee(0xef)+_0x340fee(0x2f8)]=_0x4f9c38,this['moveDiagon'+'ally'](_0x58e978,_0x22576b);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)]['Game_Chara'+_0x3e3bd2(0x622)+_0x3e3bd2(0x1ee)+'ed']=Game_CharacterBase[_0x3e3bd2(0x294)]['realMoveSp'+_0x3e3bd2(0x461)],Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x775)+_0x3e3bd2(0x461)]=function(){const _0x5290d9=_0x3e3bd2;let _0x13f77b=this[_0x5290d9(0x6a3)];return this[_0x5290d9(0x7ad)]()&&(_0x13f77b+=this['dashSpeedM'+_0x5290d9(0x6d1)]()),this[_0x5290d9(0x296)+'MovementSp'+'eed'](_0x13f77b);},Game_CharacterBase['prototype'][_0x3e3bd2(0x21f)+_0x3e3bd2(0x6d1)]=function(){const _0x4ff555=_0x3e3bd2,_0x272f37={'oDoqf':function(_0x256de4,_0x44cf51){return _0x256de4!==_0x44cf51;},'qdcTi':function(_0x114f3b,_0x3e6f99){return _0x114f3b-_0x3e6f99;}},_0x539010=VisuMZ[_0x4ff555(0x5eb)+'Core'][_0x4ff555(0x668)][_0x4ff555(0x60e)];return _0x272f37[_0x4ff555(0x945)](_0x539010[_0x4ff555(0xa0b)+'er'],undefined)?_0x539010[_0x4ff555(0xa0b)+'er']:_0x272f37[_0x4ff555(0x100)](VisuMZ[_0x4ff555(0x5eb)+_0x4ff555(0x8da)][_0x4ff555(0x675)+_0x4ff555(0x622)+'ealMoveSpe'+'ed'][_0x4ff555(0x3f6)](this),this[_0x4ff555(0x6a3)]);},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x296)+'MovementSp'+_0x3e3bd2(0x461)]=function(_0x3d31f2){const _0x2f4c56=_0x3e3bd2,_0x6c3b24=VisuMZ[_0x2f4c56(0x5eb)+_0x2f4c56(0x8da)][_0x2f4c56(0x668)][_0x2f4c56(0x60e)];if(!_0x6c3b24['SlowerSpee'+'d'])return _0x3d31f2;return[-0x47f*0x2+-0x3*0x42d+-0xbe*-0x1d,0xba5+-0x26d9+0x1b37,0x151a+0x1ae4+-0x2ff7,0x2161*0x1+0x27*0xac+-0x3b8c]['includes'](this[_0x2f4c56(0xef)+_0x2f4c56(0x2f8)])&&(_0x3d31f2*=_0x6c3b24[_0x2f4c56(0x133)+_0x2f4c56(0x28a)+_0x2f4c56(0x2a4)]||0x2483*-0x1+-0x3*-0xb03+0x59*0xa+0.01),_0x3d31f2;},VisuMZ[_0x3e3bd2(0x5eb)+'Core'][_0x3e3bd2(0x675)+_0x3e3bd2(0x566)+_0x3e3bd2(0x2b6)]=Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x7ad)],Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x7ad)]=function(){const _0x48c872=_0x3e3bd2;if(!Game_CharacterBase['ALLOW_LADD'+_0x48c872(0xe8)]&&this['isOnLadder']())return![];if(this[_0x48c872(0xeb)+_0x48c872(0x1f0)])return!![];return VisuMZ['EventsMove'+_0x48c872(0x8da)][_0x48c872(0x675)+_0x48c872(0x566)+'sDashing'][_0x48c872(0x3f6)](this);},Game_CharacterBase[_0x3e3bd2(0x294)]['isDashingA'+_0x3e3bd2(0xa26)]=function(){const _0x58613e=_0x3e3bd2,_0x551abc={'XIMOP':function(_0x352393,_0x3f4626){return _0x352393===_0x3f4626;}};return this[_0x58613e(0x7ad)]()&&_0x551abc[_0x58613e(0xe0)](this[_0x58613e(0x5f1)],0x1ae+0x824+-0x9d2*0x1);},VisuMZ['EventsMove'+_0x3e3bd2(0x8da)][_0x3e3bd2(0x675)+_0x3e3bd2(0x56a)+_0x3e3bd2(0x466)]=Game_CharacterBase[_0x3e3bd2(0x294)]['pattern'],Game_CharacterBase[_0x3e3bd2(0x294)]['pattern']=function(){const _0x32f8a4=_0x3e3bd2;return this['isPosing']()?this[_0x32f8a4(0x447)+'haracterPa'+_0x32f8a4(0x29f)]():VisuMZ[_0x32f8a4(0x5eb)+_0x32f8a4(0x8da)][_0x32f8a4(0x675)+_0x32f8a4(0x56a)+_0x32f8a4(0x466)]['call'](this);},VisuMZ['EventsMove'+_0x3e3bd2(0x8da)][_0x3e3bd2(0x675)+_0x3e3bd2(0x566)+'ncreaseSte'+'ps']=Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x866)+_0x3e3bd2(0x968)],Game_CharacterBase[_0x3e3bd2(0x294)]['increaseSt'+'eps']=function(){const _0x538c2e=_0x3e3bd2;VisuMZ[_0x538c2e(0x5eb)+_0x538c2e(0x8da)][_0x538c2e(0x675)+_0x538c2e(0x566)+'ncreaseSte'+'ps'][_0x538c2e(0x3f6)](this),this[_0x538c2e(0x297)]();},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)]['Game_Chara'+'cterBase_c'+_0x3e3bd2(0x4c6)+_0x3e3bd2(0x2d5)]=Game_CharacterBase[_0x3e3bd2(0x294)]['characterI'+_0x3e3bd2(0x751)],Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x5f3)+_0x3e3bd2(0x751)]=function(){const _0x312478=_0x3e3bd2;if(this['isSpriteVS'+'8dir']())return this[_0x312478(0x5f3)+'ndexVS8']();return VisuMZ[_0x312478(0x5eb)+_0x312478(0x8da)][_0x312478(0x675)+_0x312478(0x9ba)+'haracterIn'+_0x312478(0x2d5)][_0x312478(0x3f6)](this);},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x5f3)+_0x3e3bd2(0x223)]=function(){const _0x38a3df=_0x3e3bd2,_0x3d6452=this[_0x38a3df(0x580)]();if(this[_0x38a3df(0x2be)]()){if([-0x18*-0x192+0x1597*0x1+-0x3b45,-0xbf*0x15+-0x23c6+0x3375,0x707*0x2+-0x7*0x13e+-0x556,-0x26a9*-0x1+0x1*-0x2534+-0x1*0x16d][_0x38a3df(0x1bf)](_0x3d6452))return 0x17ed+-0x24bc*0x1+0x43*0x31;if([0x8d*-0x5+-0xaf7*-0x1+-0xb*0xbf,0x1556+-0x2670+0x111d*0x1,0x13d3+-0x17d2+-0x2*-0x203,-0x73*0x2e+-0x69d+0x5c*0x4c][_0x38a3df(0x1bf)](_0x3d6452))return 0x9c5+-0xec9+0x509;}else{if(this[_0x38a3df(0x2f9)]())return 0x270f+0x7*-0x4d9+-0x51a;else{if(this[_0x38a3df(0x43e)]())return this[_0x38a3df(0x447)+_0x38a3df(0x4c6)+_0x38a3df(0x2d5)]();else{if(this['_forceCarr'+'ying']){if([-0xb0*-0x34+0x106d+0x342b*-0x1,0x162b+-0x3*-0x6af+0x1*-0x2a34,-0xb50+-0x2705+0x3*0x10c9,-0x1*0x1223+0x1*-0x9ad+0x1bd8][_0x38a3df(0x1bf)](_0x3d6452))return 0x36b+0x1bf3+-0x1f5a;if([-0x8f*-0x43+0x7*0xc7+-0x2add,-0x1*0xa34+0x243e+-0x1a07*0x1,-0x2*-0x2c1+0xcc5*0x1+-0x1240,0xa9b+-0x531*-0x3+-0x17*0x123][_0x38a3df(0x1bf)](_0x3d6452))return 0x89b*0x1+-0xb*0xbc+0x41*-0x2;}else{if(this[_0x38a3df(0x24e)+'on']()&&this['useCarryPo'+_0x38a3df(0x8be)]()){if([0x40*0x2a+-0x8e9+-0x195,0x190a+0x9cf+-0x22d5,-0x2*-0xb8a+0x1*-0x1db7+-0x5*-0x155,-0x40e+-0xa21+0xe37][_0x38a3df(0x1bf)](_0x3d6452))return-0xec6+0x25bd+-0x16f3;if([0x12d0*0x2+-0x234d+-0x252,0x98*-0x36+-0x156f+-0x11d6*-0x3,0x1750+0x7c6+0x1f0f*-0x1,-0x1*0x2da+-0x645+-0x24a*-0x4][_0x38a3df(0x1bf)](_0x3d6452))return-0x1efb+0xee3*0x2+0x13a;}else{if(this['isDashingA'+_0x38a3df(0xa26)]()){if([-0x2126+-0x1b42+0x3c6a,-0x2*-0x1037+0x1*-0x78b+-0x18df*0x1,0x1f31*0x1+-0x1*0x7d+-0x77*0x42,-0xb54*-0x3+-0x9*0xf9+0x1*-0x1933][_0x38a3df(0x1bf)](_0x3d6452))return 0x4b+0x8*0x289+-0x87*0x27;if([-0x67*0x8+0x1*-0x268f+-0x5f8*-0x7,0x53*-0x1f+0x677+0x133*0x3,0x2*0x4fe+-0x934*0x1+-0x1*0xc1,0x21d8+-0xa75*-0x2+-0x36b9][_0x38a3df(0x1bf)](_0x3d6452))return 0x529+-0x1*0x11d9+0xcb3*0x1;}else{if([0x15b+0x3b0+0x1*-0x509,0x4*0x698+-0x24d1+0x1*0xa75,-0x80*-0xb+-0x19a1+0x1427,0x63*-0x7+-0x1003+0x12c0][_0x38a3df(0x1bf)](_0x3d6452))return-0x252c+0x2574+-0x48;if([-0x23cb+0xa7*-0x2f+0x1627*0x3,-0xd4*0x2f+-0x2be*-0x9+0xe41,-0x624+-0x11f5+0x1820,0x19b*-0x13+0x11d7+-0xcb3*-0x1][_0x38a3df(0x1bf)](_0x3d6452))return 0x1d44+0x7*0x3fb+0x1*-0x3920;}}}}}}},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x98c)+_0x3e3bd2(0x8be)]=function(){const _0x392ed9=_0x3e3bd2;return VisuMZ[_0x392ed9(0x5eb)+_0x392ed9(0x8da)][_0x392ed9(0x668)]['VS8'][_0x392ed9(0x5f7)];},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x4cd)]=function(){const _0x412aed=_0x3e3bd2,_0x3271bb={'Pmikx':function(_0x189a61,_0xa54234){return _0x189a61===_0xa54234;}};return this[_0x412aed(0x2f9)]()&&_0x3271bb[_0x412aed(0x52d)](this['terrainTag'](),VisuMZ[_0x412aed(0x5eb)+_0x412aed(0x8da)][_0x412aed(0x668)][_0x412aed(0x758)][_0x412aed(0x2bf)]);},Game_CharacterBase['prototype'][_0x3e3bd2(0x84d)+'nLadderSpr'+_0x3e3bd2(0x1bb)]=function(){const _0xa38928=_0x3e3bd2;return this[_0xa38928(0x4cd)]()?-0x4*-0x849+-0x1f71+-0x1af*0x1:0x257f*0x1+-0xc7f+0xc7f*-0x2;},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)]['Game_Chara'+_0x3e3bd2(0x19f)+'pdate']=Game_CharacterBase[_0x3e3bd2(0x294)]['update'],Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x117)]=function(){const _0x4e2bdb=_0x3e3bd2;this[_0x4e2bdb(0x4bc)+'eBase'](),VisuMZ[_0x4e2bdb(0x5eb)+_0x4e2bdb(0x8da)]['Game_Chara'+_0x4e2bdb(0x19f)+_0x4e2bdb(0x3b3)]['call'](this),this[_0x4e2bdb(0x6a9)]();},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x4bc)+'eBase']=function(){const _0xa4b4f=_0x3e3bd2;this[_0xa4b4f(0x8f2)]=this[_0xa4b4f(0x513)+'X']??-0x805*-0x1+-0x114*-0xd+-0x18*0xeb,this[_0xa4b4f(0x250)]=this['_scaleBase'+'Y']??-0x503+-0x1f3d+0x2441;},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x675)+_0x3e3bd2(0x96b)+'ushDepth']=Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x2bb)],Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x2bb)]=function(){const _0x595104=_0x3e3bd2,_0x3712b5={'cGWmV':function(_0x550e36,_0x5ef5b3){return _0x550e36!==_0x5ef5b3;}};let _0x447dae=VisuMZ['EventsMove'+_0x595104(0x8da)][_0x595104(0x675)+'cterBase_b'+'ushDepth']['call'](this);return _0x3712b5['cGWmV'](this[_0x595104(0x250)],undefined)&&(_0x447dae/=Math[_0x595104(0x51d)](this[_0x595104(0x250)],-0xde8+0x1d3e+0x7ab*-0x2+0.00001)),Math[_0x595104(0x60f)](_0x447dae);},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x6a9)]=function(){const _0x47c58f=_0x3e3bd2,_0x52401b={'VXYms':function(_0x34bd95,_0x1acbfd){return _0x34bd95>_0x1acbfd;},'MvDPK':function(_0x3a1414,_0x46bcf8){return _0x3a1414<=_0x46bcf8;},'rNFhV':function(_0x367a8d,_0x599f0c){return _0x367a8d!==_0x599f0c;},'uTlJL':'ZZZ'};this[_0x47c58f(0x51f)+'ion']=this['_poseDurat'+_0x47c58f(0x96e)]||0x1*0x1952+0x2da+-0x1c2c;if(_0x52401b[_0x47c58f(0x42c)](this[_0x47c58f(0x51f)+_0x47c58f(0x96e)],-0x1f8*-0xc+-0x4*0x813+0x8ac)){this[_0x47c58f(0x51f)+'ion']--;if(_0x52401b['MvDPK'](this['_poseDurat'+_0x47c58f(0x96e)],0xda0+0xa9*0x8+-0x12e8)&&_0x52401b['rNFhV'](this['_pose'],_0x52401b['uTlJL']))this[_0x47c58f(0x297)]();}},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x675)+_0x3e3bd2(0x4b9)+_0x3e3bd2(0x74d)+_0x3e3bd2(0x1ae)]=Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x66b)+_0x3e3bd2(0x733)],Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x66b)+_0x3e3bd2(0x733)]=function(_0x41e9a9,_0x11a78c){const _0x34a5d0=_0x3e3bd2;VisuMZ[_0x34a5d0(0x5eb)+_0x34a5d0(0x8da)][_0x34a5d0(0x675)+'cterBase_m'+_0x34a5d0(0x74d)+'lly'][_0x34a5d0(0x3f6)](this,_0x41e9a9,_0x11a78c);if(this[_0x34a5d0(0x443)+'8dir']())this[_0x34a5d0(0x2ca)+_0x34a5d0(0x8c8)](_0x41e9a9,_0x11a78c);},Game_CharacterBase[_0x3e3bd2(0x294)]['setDiagona'+_0x3e3bd2(0x8c8)]=function(_0x290e0f,_0x4706b5){const _0x565bfc=_0x3e3bd2,_0x1d7394={'heaeL':function(_0xd59ce7,_0x2ccacf){return _0xd59ce7===_0x2ccacf;},'GKhgO':function(_0x5602f4,_0x1766e0){return _0x5602f4===_0x1766e0;},'KtxcP':function(_0x1de964,_0x3bf078){return _0x1de964===_0x3bf078;},'RtIqf':function(_0x1a203d,_0x55419a){return _0x1a203d===_0x55419a;},'duTTD':function(_0x24a08a,_0x139eef){return _0x24a08a===_0x139eef;},'uOOGh':function(_0xb7daae,_0x2b3741){return _0xb7daae===_0x2b3741;}};if(_0x1d7394[_0x565bfc(0x7ea)](_0x290e0f,0x8*0x472+0x240d+0x1*-0x4799)&&_0x1d7394['GKhgO'](_0x4706b5,0x63d+0xc7*-0x28+0x5f*0x43))this[_0x565bfc(0x5cb)+'on'](-0x573+-0x1*0x1412+0x1986);if(_0x1d7394[_0x565bfc(0x77f)](_0x290e0f,0x18c*0xf+-0x60*-0x53+-0x364e)&&_0x1d7394[_0x565bfc(0x7ea)](_0x4706b5,0x11c8+-0x1165+-0x61))this['setDirecti'+'on'](-0x31*-0xbc+-0x35b*-0x3+0x1705*-0x2);if(_0x1d7394[_0x565bfc(0x8e2)](_0x290e0f,0x1*0x19ca+-0x3a5+0x1621*-0x1)&&_0x1d7394[_0x565bfc(0x304)](_0x4706b5,-0x2*-0x18d+0xb8*-0x26+0x183e))this[_0x565bfc(0x5cb)+'on'](0x1616*0x1+-0x1836+0x227);if(_0x1d7394['duTTD'](_0x290e0f,0xa59+0x5f*-0x5b+0x1772)&&_0x1d7394['uOOGh'](_0x4706b5,0x1da1+-0xf*-0x93+-0x2636))this[_0x565bfc(0x5cb)+'on'](-0x1a0+0x1130+-0xf87);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x675)+_0x3e3bd2(0x44c)+_0x3e3bd2(0x9be)+'e']=Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x78f)+'me'],Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x78f)+'me']=function(){const _0x2498af=_0x3e3bd2,_0x2d43eb={'NNTCG':function(_0x5f18f9,_0x39ae4a){return _0x5f18f9===_0x39ae4a;},'EvIvo':_0x2498af(0x480)};if(this[_0x2498af(0x43e)]()&&_0x2d43eb['NNTCG'](this[_0x2498af(0x87d)](),_0x2d43eb[_0x2498af(0x4e8)]))return!![];return VisuMZ[_0x2498af(0x5eb)+'Core']['Game_Chara'+'cterBase_h'+'asStepAnim'+'e'][_0x2498af(0x3f6)](this);},Game_CharacterBase['prototype'][_0x3e3bd2(0x26e)]=function(_0x44121e,_0x2d88e2){const _0x4da4fd=_0x3e3bd2,_0x3eed08={'FNyQn':_0x4da4fd(0x480),'ilYAB':function(_0xac4f2b,_0x4db38c){return _0xac4f2b||_0x4db38c;}};if(_0x44121e[_0x4da4fd(0x848)](/Z/i))_0x44121e=_0x3eed08[_0x4da4fd(0x986)];if(_0x44121e[_0x4da4fd(0x848)](/SLEEP/i))_0x44121e=_0x3eed08[_0x4da4fd(0x986)];this['isSpriteVS'+_0x4da4fd(0x6b0)]()&&(this['_pose']=_0x44121e[_0x4da4fd(0x936)+'e']()['trim'](),this['_poseDurat'+'ion']=_0x3eed08[_0x4da4fd(0x55a)](_0x2d88e2,Infinity));},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x87d)]=function(){const _0x12ee16=_0x3e3bd2;return this['isSpriteVS'+'8dir']()?(this[_0x12ee16(0x3af)]||'')[_0x12ee16(0x936)+'e']()[_0x12ee16(0x66f)]():''[_0x12ee16(0x936)+'e']()[_0x12ee16(0x66f)]();},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x2ae)+_0x3e3bd2(0x1ce)]=function(_0xc7ac67,_0x132477){const _0x56dc36=_0x3e3bd2,_0x49d47a={'aQYso':_0x56dc36(0x5a2)+'N','TqCnZ':_0x56dc36(0x8aa),'DanAh':'MUSIC\x20NOTE','rKTYj':_0x56dc36(0x5f8),'rEhyU':_0x56dc36(0x7b6),'itpIV':_0x56dc36(0x6da),'FFCxQ':_0x56dc36(0x6ad),'dkXMZ':'SILENCE','MhUKq':'LIGHT\x20BULB','sIvSJ':_0x56dc36(0x480)};if(this['isSpriteVS'+_0x56dc36(0x6b0)]()){const _0x3ac8ee=['',_0x49d47a['aQYso'],_0x49d47a[_0x56dc36(0x17b)],_0x49d47a['DanAh'],_0x49d47a['rKTYj'],_0x49d47a[_0x56dc36(0x6f0)],_0x49d47a[_0x56dc36(0x113)],_0x49d47a[_0x56dc36(0x7bb)],_0x49d47a[_0x56dc36(0x1a1)],_0x49d47a[_0x56dc36(0x168)],_0x49d47a[_0x56dc36(0x91a)],'','','','',''][_0xc7ac67];this[_0x56dc36(0x26e)](_0x3ac8ee,_0x132477);}},Game_CharacterBase['prototype'][_0x3e3bd2(0x297)]=function(){const _0x312144=_0x3e3bd2;this['_pose']='',this[_0x312144(0x51f)+_0x312144(0x96e)]=0xbc3+-0x522+0x6a1*-0x1;},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x43e)]=function(){const _0x4348db=_0x3e3bd2;return this[_0x4348db(0x443)+'8dir']()&&!!this['_pose'];},Game_CharacterBase['prototype'][_0x3e3bd2(0x447)+_0x3e3bd2(0x4c6)+_0x3e3bd2(0x2d5)]=function(){const _0x29d9c7=_0x3e3bd2,_0x41b59c={'rymEx':'ITEM','pUYvq':_0x29d9c7(0x932),'hUdme':'VICTORY','wTYca':_0x29d9c7(0x6c9),'TCDCr':_0x29d9c7(0xa36),'srwGe':_0x29d9c7(0x267)},_0x34569c=this['_pose'][_0x29d9c7(0x936)+'e']();switch(this[_0x29d9c7(0x3af)][_0x29d9c7(0x936)+'e']()['trim']()){case _0x41b59c[_0x29d9c7(0x9a0)]:case _0x41b59c['pUYvq']:case _0x41b59c['hUdme']:case _0x41b59c[_0x29d9c7(0x1c3)]:case _0x41b59c['TCDCr']:case _0x41b59c[_0x29d9c7(0x8ba)]:return 0x5a7*-0x3+-0xfa7+0x20a2;break;default:return 0x1*-0xabb+0x499*-0x1+0xf5b*0x1;break;}},Game_CharacterBase[_0x3e3bd2(0x294)]['getPosingC'+'haracterDi'+'rection']=function(){const _0x2a76eb=_0x3e3bd2,_0x54b71a={'lPyfT':'EXCLAMATIO'+'N','DoVJp':_0x2a76eb(0x8aa),'DzBTA':'MUSIC\x20NOTE','UfQWw':_0x2a76eb(0x5f8),'sDGDS':'ANGER','UZUKB':_0x2a76eb(0x6da),'JbQWc':'ITEM','lyJUu':_0x2a76eb(0x932),'Eydsa':_0x2a76eb(0x8ee),'Orhbe':'COBWEB','KZxyS':'SILENCE','rjHIk':'LIGHT\x20BULB','dHZrt':_0x2a76eb(0x6c9),'WXlwL':_0x2a76eb(0xa36),'NoCSQ':_0x2a76eb(0x267),'ssxah':'ZZZ','bmWAb':'SLEEP'};switch(this[_0x2a76eb(0x3af)][_0x2a76eb(0x936)+'e']()){case _0x54b71a[_0x2a76eb(0x806)]:case _0x54b71a[_0x2a76eb(0x394)]:case _0x54b71a[_0x2a76eb(0x843)]:case'!':case'?':return-0x718*0x1+-0x14c6+0x1be0;break;case _0x54b71a['UfQWw']:case _0x54b71a['sDGDS']:case _0x54b71a['UZUKB']:return-0xab7+0x1d7*-0x2+0x11*0xd9;break;case _0x54b71a[_0x2a76eb(0x457)]:case _0x54b71a[_0x2a76eb(0xfd)]:case _0x54b71a[_0x2a76eb(0x734)]:case _0x54b71a[_0x2a76eb(0x486)]:case _0x54b71a[_0x2a76eb(0x3ba)]:case _0x54b71a[_0x2a76eb(0x3a6)]:return-0x80a*-0x4+-0x4*0x523+0xb96*-0x1;break;case _0x54b71a[_0x2a76eb(0x854)]:case _0x54b71a['WXlwL']:case _0x54b71a['NoCSQ']:case _0x54b71a[_0x2a76eb(0x83f)]:case _0x54b71a[_0x2a76eb(0x8e1)]:return 0x23a2+0x18f6+-0x3*0x1430;break;default:return VisuMZ[_0x2a76eb(0x5eb)+_0x2a76eb(0x8da)][_0x2a76eb(0x675)+_0x2a76eb(0x432)+_0x2a76eb(0x1ad)+'n'][_0x2a76eb(0x3f6)](this);break;}},Game_CharacterBase[_0x3e3bd2(0x294)]['getPosingC'+_0x3e3bd2(0xa09)+_0x3e3bd2(0x29f)]=function(){const _0x5e52b3=_0x3e3bd2,_0x2d703e={'dqOIB':_0x5e52b3(0x766),'pUoaz':_0x5e52b3(0x6c9),'Itmic':_0x5e52b3(0x5a2)+'N','HvpaJ':_0x5e52b3(0x5f8),'IYWRb':_0x5e52b3(0x6ad),'kxitF':_0x5e52b3(0x932),'APSRw':_0x5e52b3(0xa36),'TvlNy':_0x5e52b3(0x8aa),'sUBib':_0x5e52b3(0x7b6),'rlXFG':_0x5e52b3(0x97c),'iaGXf':_0x5e52b3(0x8ee),'NYGXk':'COLLAPSE','HkkRq':_0x5e52b3(0x9a5),'sNwqj':_0x5e52b3(0x6da),'JAweb':'LIGHT\x20BULB'};switch(this[_0x5e52b3(0x3af)]['toUpperCas'+'e']()){case _0x2d703e[_0x5e52b3(0x53c)]:case _0x2d703e['pUoaz']:case _0x2d703e[_0x5e52b3(0x1e3)]:case'!':case _0x2d703e[_0x5e52b3(0x954)]:case _0x2d703e['IYWRb']:return-0xa2a*0x3+0x3*0x15d+0x1*0x1a67;break;case _0x2d703e[_0x5e52b3(0x8bc)]:case _0x2d703e[_0x5e52b3(0x637)]:case _0x2d703e['TvlNy']:case'?':case _0x2d703e[_0x5e52b3(0x931)]:case _0x2d703e[_0x5e52b3(0x58d)]:return 0xc95+-0x241a+0x1786;break;case _0x2d703e[_0x5e52b3(0x2dc)]:case _0x2d703e['NYGXk']:case _0x2d703e['HkkRq']:case _0x2d703e[_0x5e52b3(0x995)]:case _0x2d703e[_0x5e52b3(0x8e5)]:return 0x2227+0x1bba+-0x3ddf;break;default:return VisuMZ[_0x5e52b3(0x5eb)+_0x5e52b3(0x8da)][_0x5e52b3(0x675)+_0x5e52b3(0x56a)+_0x5e52b3(0x466)][_0x5e52b3(0x3f6)](this);break;}},Game_CharacterBase[_0x3e3bd2(0x294)]['forceCarry'+_0x3e3bd2(0x1f0)]=function(){const _0xb36d65=_0x3e3bd2;this[_0xb36d65(0x219)+_0xb36d65(0x218)]=!![];},Game_CharacterBase['prototype'][_0x3e3bd2(0x7f9)+_0x3e3bd2(0x1f0)]=function(){const _0x43952b=_0x3e3bd2;this[_0x43952b(0x219)+_0x43952b(0x218)]=![];},Game_CharacterBase['prototype'][_0x3e3bd2(0x8c5)+'ng']=function(){const _0x37d750=_0x3e3bd2;this[_0x37d750(0xeb)+_0x37d750(0x1f0)]=!![];},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x830)+'ng']=function(){const _0x2c5866=_0x3e3bd2;this[_0x2c5866(0xeb)+_0x2c5866(0x1f0)]=![];},Game_CharacterBase['prototype'][_0x3e3bd2(0x45f)+_0x3e3bd2(0xe1)]=function(){const _0xc761ad=_0x3e3bd2,_0x25facd={'sEwLc':_0xc761ad(0x131)+'1','TwcTD':function(_0x2ab95c,_0x4fbbe1){return _0x2ab95c===_0x4fbbe1;}},_0x454433=_0x25facd[_0xc761ad(0x547)]['split']('|');let _0x43e962=0xccd+-0x2*-0x24a+0x3*-0x5cb;while(!![]){switch(_0x454433[_0x43e962++]){case'0':if(this['isTranspar'+_0xc761ad(0x498)]())return![];continue;case'1':return!![];case'2':if(_0x25facd[_0xc761ad(0x60c)](this[_0xc761ad(0x1dc)+_0xc761ad(0x1d8)],''))return![];continue;case'3':if(_0x25facd[_0xc761ad(0x60c)](this[_0xc761ad(0x9f3)+'r'],Game_Vehicle))return![];continue;case'4':if(this[_0xc761ad(0x522)+_0xc761ad(0x6cd)])return![];continue;case'5':if(this[_0xc761ad(0x8a0)]())return![];continue;}break;}},Game_CharacterBase[_0x3e3bd2(0x294)]['isShadowSh'+_0x3e3bd2(0x7ec)]=function(){const _0x2f30b9=_0x3e3bd2,_0x4da7d3={'dSPFD':function(_0x203797,_0x298eec){return _0x203797===_0x298eec;}};if(this[_0x2f30b9(0x2f9)]())return!![];if(_0x4da7d3[_0x2f30b9(0x214)](this[_0x2f30b9(0x9f3)+'r'],Game_Player)&&this[_0x2f30b9(0x7b1)+'e']())return!![];return![];},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x20e)+'name']=function(){const _0x5a4d33=_0x3e3bd2;return VisuMZ[_0x5a4d33(0x5eb)+'Core']['Settings'][_0x5a4d33(0x60e)]['DefaultSha'+'dow'];},Game_CharacterBase['prototype'][_0x3e3bd2(0x37d)]=function(){const _0x112f97=_0x3e3bd2;return this[_0x112f97(0x2e2)]();},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x533)]=function(){const _0x349211=_0x3e3bd2,_0x159a26={'AaWst':function(_0x5bbe72,_0x491d48){return _0x5bbe72+_0x491d48;},'zbRTg':function(_0x58d896,_0x31f7c7){return _0x58d896*_0x31f7c7;}},_0x4dd067=$gameMap[_0x349211(0x176)]();return Math[_0x349211(0x60f)](_0x159a26['AaWst'](_0x159a26[_0x349211(0x400)](this['scrolledY'](),_0x4dd067),_0x4dd067));},Game_CharacterBase[_0x3e3bd2(0x983)+_0x3e3bd2(0x73b)+_0x3e3bd2(0x1b0)+'IT']=0x4*0x4a+0x11b6+-0x127a,Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x34a)+_0x3e3bd2(0x7c9)+'on']=function(_0x2d9804,_0x245d44){const _0x37c723=_0x3e3bd2,_0x259cb9={'fnWJT':function(_0x153748,_0x396297){return _0x153748>_0x396297;},'qLIov':function(_0x27db7b,_0x33cab4){return _0x27db7b>=_0x33cab4;}};if(TouchInput[_0x37c723(0x851)]())return![];if(!$gameMap[_0x37c723(0x4fe)+_0x37c723(0x824)+'ement']())return![];if(_0x259cb9['fnWJT']($gameMap[_0x37c723(0x9df)](_0x2d9804,_0x245d44)[_0x37c723(0x3cf)],0xb89+0x4be*0x1+0x1cf*-0x9))return![];if(!$gameMap[_0x37c723(0x31b)+'ByAnyDirec'+_0x37c723(0x6f3)](_0x2d9804,_0x245d44))return![];const _0x56aeec=$gameMap[_0x37c723(0xe5)][_0x37c723(0x3cf)];if(_0x259cb9[_0x37c723(0x389)](_0x56aeec,Game_CharacterBase[_0x37c723(0x983)+_0x37c723(0x73b)+_0x37c723(0x1b0)+'IT']))return![];return!![];},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x774)+_0x3e3bd2(0x4a4)+_0x3e3bd2(0x882)]=function(_0x3f5e54,_0x456f45){const _0x186029=_0x3e3bd2,_0x3c3473={'zfjin':function(_0x1684e2,_0x6102e1){return _0x1684e2===_0x6102e1;},'VLVsD':function(_0x283139,_0x1d9f39){return _0x283139>_0x1d9f39;},'uWqdr':function(_0x3abec3,_0x5f5203){return _0x3abec3<_0x5f5203;},'NyOFs':function(_0x32d448,_0x4b2796){return _0x32d448>_0x4b2796;},'vpBqt':function(_0xda270f,_0x1d0a5c){return _0xda270f===_0x1d0a5c;},'pUqFS':function(_0x1d22fd,_0x761d16){return _0x1d22fd>_0x761d16;}};let _0x1c7056=this['findDirect'+_0x186029(0x46e)](_0x3f5e54,_0x456f45);if(!this['getDiagona'+_0x186029(0x7c9)+'on'](_0x3f5e54,_0x456f45))return _0x1c7056;if(this['isCollided'+_0x186029(0x712)](_0x3f5e54,_0x456f45))return _0x1c7056;const _0x51820e=_0x1c7056;if(_0x3c3473[_0x186029(0x5a0)](_0x1c7056,-0x17*-0x103+-0x2393+0xc50)){if(_0x3c3473[_0x186029(0x317)](_0x3f5e54,this['x'])&&this[_0x186029(0x1fa)](this['x'],this['y'],-0x255*0x3+-0xf43+0x7c*0x2e))_0x1c7056=0xdcb+-0x1*0xe9e+0x1*0xd6;if(_0x3c3473[_0x186029(0x997)](_0x3f5e54,this['x'])&&this['canPass'](this['x'],this['y'],0x1*-0x55e+0x4a5*0x1+-0x1*-0xbd))_0x1c7056=0x127f*0x1+-0x66e+-0x1*0xc10;}else{if(_0x3c3473[_0x186029(0x5a0)](_0x1c7056,0x1c31+-0x2212+-0x5e5*-0x1)){if(_0x3c3473[_0x186029(0x861)](_0x456f45,this['y'])&&this['canPass'](this['x'],this['y'],-0x2660+0x2681+-0x1d))_0x1c7056=-0x200a+0x10c*-0x19+0x3a37;if(_0x3c3473[_0x186029(0x997)](_0x456f45,this['y'])&&this[_0x186029(0x1fa)](this['x'],this['y'],-0x15af+0x18e*0x8+0x7*0x153))_0x1c7056=0x1*0x1dcb+0x10ee+0x116*-0x2b;}else{if(_0x3c3473[_0x186029(0x4f7)](_0x1c7056,-0x1184+-0x57e+0x1708)){if(_0x3c3473[_0x186029(0x861)](_0x456f45,this['y'])&&this[_0x186029(0x1fa)](this['x'],this['y'],-0x24b1+-0x2c*-0x71+-0x1*-0x1149))_0x1c7056=0x79+-0x7*-0x391+-0x196d;if(_0x3c3473[_0x186029(0x997)](_0x456f45,this['y'])&&this[_0x186029(0x1fa)](this['x'],this['y'],0x128*0x12+-0x1bbd+0x6f3))_0x1c7056=0x8da*-0x1+0x14a1+-0xbbe;}else{if(_0x3c3473['vpBqt'](_0x1c7056,-0x223+-0x1*-0x3c9+0x12*-0x17)){if(_0x3c3473[_0x186029(0x395)](_0x3f5e54,this['x'])&&this[_0x186029(0x1fa)](this['x'],this['y'],0x7fb*-0x3+-0x109+0x320*0x8))_0x1c7056=-0x47*-0x15+0x3*0x3bf+-0x1107*0x1;if(_0x3c3473[_0x186029(0x997)](_0x3f5e54,this['x'])&&this[_0x186029(0x1fa)](this['x'],this['y'],-0xe0f*-0x1+-0xbdc+0x22f*-0x1))_0x1c7056=0x2*-0xced+-0x12*-0x195+-0x1*0x299;}}}}if(!this['canPass'](this['x'],this['y'],_0x1c7056))return _0x51820e;const _0x39f543=$gameMap[_0x186029(0x933)+_0x186029(0x2f8)](this['x'],_0x1c7056),_0x2ef542=$gameMap[_0x186029(0x98f)+_0x186029(0x2f8)](this['y'],_0x1c7056);if(this[_0x186029(0x459)+_0x186029(0x712)](_0x39f543,_0x2ef542))_0x1c7056=_0x51820e;return _0x1c7056;},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x675)+_0x3e3bd2(0x9ba)+'anPass']=Game_CharacterBase['prototype'][_0x3e3bd2(0x1fa)],Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x1fa)]=function(_0x194ce8,_0x22d448,_0x4e6284){const _0x4c034c=_0x3e3bd2,_0x134982={'zmdRJ':function(_0x12a696,_0x7a51d8){return _0x12a696===_0x7a51d8;},'hVIWX':_0x4c034c(0x362)};return _0x134982[_0x4c034c(0x183)](this[_0x4c034c(0x81e)+'pe'],_0x134982[_0x4c034c(0x6c1)])?this[_0x4c034c(0x530)]()[_0x4c034c(0x9f8)+_0x4c034c(0x1ef)](_0x194ce8,_0x22d448,_0x4e6284):VisuMZ[_0x4c034c(0x5eb)+'Core'][_0x4c034c(0x675)+_0x4c034c(0x9ba)+_0x4c034c(0x349)][_0x4c034c(0x3f6)](this,_0x194ce8,_0x22d448,_0x4e6284);},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x334)+_0x3e3bd2(0x331)]=function(){const _0x6ce2a=_0x3e3bd2;this[_0x6ce2a(0x743)+_0x6ce2a(0x358)]=0x1cb1+-0xd*-0x1ea+-0x3593,this[_0x6ce2a(0x743)+_0x6ce2a(0x619)]=0x1d2e+0x71*0x1d+0x1*-0x29fb;},VisuMZ[_0x3e3bd2(0x5eb)+'Core']['Game_Chara'+_0x3e3bd2(0x432)+_0x3e3bd2(0x305)]=Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x2e2)],Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x2e2)]=function(){const _0x359b86=_0x3e3bd2,_0x79fb38={'vjIBQ':function(_0x4013f8,_0x543931){return _0x4013f8+_0x543931;}};return _0x79fb38['vjIBQ'](VisuMZ['EventsMove'+_0x359b86(0x8da)][_0x359b86(0x675)+_0x359b86(0x432)+_0x359b86(0x305)][_0x359b86(0x3f6)](this),this[_0x359b86(0x743)+_0x359b86(0x358)]||-0x1aa7+-0x153+0xdfd*0x2);},VisuMZ[_0x3e3bd2(0x5eb)+'Core'][_0x3e3bd2(0x675)+_0x3e3bd2(0x432)+_0x3e3bd2(0x771)]=Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0xa1e)],Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0xa1e)]=function(){const _0x47acf3=_0x3e3bd2,_0x393e06={'NHxZw':function(_0x331858,_0x58c720){return _0x331858+_0x58c720;}};return _0x393e06[_0x47acf3(0x4e0)](VisuMZ[_0x47acf3(0x5eb)+_0x47acf3(0x8da)][_0x47acf3(0x675)+'cterBase_s'+_0x47acf3(0x771)]['call'](this),this[_0x47acf3(0x743)+_0x47acf3(0x619)]||0x19e0+-0x9*0x2f+-0x1839);},Game_CharacterBase[_0x3e3bd2(0x993)+'IFT_Y']=VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)]['Settings'][_0x3e3bd2(0x60e)][_0x3e3bd2(0x605)]??-(-0xdc2+-0x5a*-0x26+0x6c),Game_CharacterBase['prototype']['shiftY']=function(){const _0x5ab7db=_0x3e3bd2;let _0x54f684=this['isObjectCh'+_0x5ab7db(0x70e)]()?-0x112*-0x22+-0x21ad+-0x2b7:-Game_CharacterBase[_0x5ab7db(0x993)+'IFT_Y'];return this[_0x5ab7db(0x250)]&&(_0x54f684*=this[_0x5ab7db(0x250)]),Math[_0x5ab7db(0x1f4)](_0x54f684);},Game_CharacterBase[_0x3e3bd2(0x294)]['clearStepP'+_0x3e3bd2(0x466)]=function(){const _0x2b74a5=_0x3e3bd2;this[_0x2b74a5(0x596)+'rn']='';},VisuMZ['EventsMove'+_0x3e3bd2(0x8da)]['Game_Chara'+_0x3e3bd2(0x19f)+'pdatePatte'+'rn']=Game_CharacterBase['prototype'][_0x3e3bd2(0x6e7)+_0x3e3bd2(0x16e)],Game_CharacterBase['prototype'][_0x3e3bd2(0x6e7)+_0x3e3bd2(0x16e)]=function(){const _0x36a58d=_0x3e3bd2;if(this[_0x36a58d(0x527)+_0x36a58d(0x856)])return;if(this['updatePatt'+_0x36a58d(0x943)+_0x36a58d(0x281)]())return;VisuMZ[_0x36a58d(0x5eb)+_0x36a58d(0x8da)][_0x36a58d(0x675)+_0x36a58d(0x19f)+_0x36a58d(0x6be)+'rn'][_0x36a58d(0x3f6)](this);},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x6e7)+'ernEventsM'+_0x3e3bd2(0x281)]=function(){const _0x49999e=_0x3e3bd2,_0x49ff74={'zjSwG':function(_0x574ebf,_0x34d676){return _0x574ebf>_0x34d676;},'WEmRh':function(_0x33410c,_0x66bb84){return _0x33410c(_0x66bb84);},'PxfxG':_0x49999e(0x2f6)+_0x49999e(0x33d),'LNSbA':function(_0x373806,_0x32d15e){return _0x373806>_0x32d15e;},'NRFip':_0x49999e(0x39b)+_0x49999e(0x7d5),'tznUS':function(_0x287a2c,_0x20b141){return _0x287a2c<_0x20b141;},'tNths':_0x49999e(0x233)+'WISE','IkYME':'SPIN\x20CW','SXmRU':'SPIN\x20COUNT'+_0x49999e(0x27e)+'E','DMmCD':_0x49999e(0x947),'jEqgC':_0x49999e(0x40d)+_0x49999e(0x1fe),'zGEaJ':_0x49999e(0x538)};if(!this[_0x49999e(0x78f)+'me']()&&_0x49ff74['zjSwG'](this[_0x49999e(0x5f1)],0x121+0x4*0x981+0x1*-0x2725))return![];switch(_0x49ff74[_0x49999e(0x1c8)](String,this[_0x49999e(0x596)+'rn'])[_0x49999e(0x936)+'e']()['trim']()){case _0x49ff74['PxfxG']:this['_pattern']+=-0x3*0x6b2+0x13*-0x1bd+0x351e;if(_0x49ff74[_0x49999e(0x289)](this[_0x49999e(0x909)],-0x77+-0x22a3+-0xe*-0x282))this['setPattern'](-0x11c8+0x252b+0x7*-0x2c5);break;case _0x49ff74[_0x49999e(0x75c)]:this[_0x49999e(0x909)]-=0xe9*-0x8+-0x17a9+0x1ef2;if(_0x49ff74[_0x49999e(0x89e)](this[_0x49999e(0x909)],-0x41c+-0x38e+-0x1*-0x7aa))this[_0x49999e(0x4c5)](-0x35*-0x7c+0xa22*0x1+-0x8f3*0x4);break;case _0x49ff74['tNths']:case _0x49ff74[_0x49999e(0x1e8)]:this[_0x49999e(0x2d0)+'0']();break;case _0x49ff74[_0x49999e(0x525)]:case _0x49ff74[_0x49999e(0x2b1)]:case _0x49ff74['jEqgC']:case _0x49ff74[_0x49999e(0x228)]:this[_0x49999e(0x923)]();break;default:return![];}return!![];},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x81c)+_0x3e3bd2(0x8f4)]=function(){const _0x51d696=_0x3e3bd2;return $gameSystem[_0x51d696(0x81c)+_0x51d696(0x8f4)](this);},Game_CharacterBase['prototype']['hasEventIc'+'on']=function(){const _0x402115=_0x3e3bd2,_0x3d9fc3={'OGJAT':function(_0x56b0f3,_0x36a1b8){return _0x56b0f3>_0x36a1b8;}},_0x3c62d9=this['getEventIc'+_0x402115(0x8f4)]();if(!_0x3c62d9)return![];return _0x3d9fc3[_0x402115(0x7ba)](_0x3c62d9[_0x402115(0x5b2)],0x75+-0x3*0xad6+0x200d);},Game_CharacterBase[_0x3e3bd2(0x294)]['frontX']=function(){const _0x1f6158=_0x3e3bd2,_0x25de8d=this[_0x1f6158(0x580)]();return $gameMap['roundXWith'+_0x1f6158(0x2f8)](this['x'],_0x25de8d);},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x206)]=function(){const _0x3b1aaa=_0x3e3bd2,_0x26e4fb=this[_0x3b1aaa(0x580)]();return $gameMap[_0x3b1aaa(0x98f)+_0x3b1aaa(0x2f8)](this['y'],_0x26e4fb);},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x364)]=function(){const _0x580e4f=_0x3e3bd2,_0x52f954=this['reverseDir'](this[_0x580e4f(0x580)]());return $gameMap[_0x580e4f(0x933)+_0x580e4f(0x2f8)](this['x'],_0x52f954);},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x467)]=function(){const _0x5d34ea=_0x3e3bd2,_0x3b0715=this[_0x5d34ea(0x2c8)](this['direction']());return $gameMap[_0x5d34ea(0x98f)+_0x5d34ea(0x2f8)](this['y'],_0x3b0715);},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x788)]=function(){const _0x38ce20=_0x3e3bd2,_0x12776c=[-0x5*-0x346+0x1*0xec6+-0x1f24,0x7c*-0x49+0x1bb*0x8+0x3*0x72d,-0xcb4*-0x2+0x1*-0x1517+-0x44b,-0x2e*0x78+0x1f9e+-0xa05,-0xd47*0x1+-0x2b*0xde+-0x79*-0x6b,-0xbe1+0x1c61*0x1+0x107b*-0x1,-0x2424+0x1367*0x1+0x10c5,-0x1d16+0x1*-0x1ecb+0x1b6*0x23,0x1feb+0x16ce+-0x36b5,0x2*-0x64d+0xd*0x1ed+0x4*-0x31a][this['direction']()];return $gameMap[_0x38ce20(0x933)+_0x38ce20(0x2f8)](this['x'],_0x12776c);},Game_CharacterBase['prototype'][_0x3e3bd2(0x677)]=function(){const _0x4eab90=_0x3e3bd2,_0x22a21e=[0x1a7d+0x5e6*0x2+0x79*-0x51,0x12b7+0x1*0x70+0x15e*-0xe,-0x1a9a+-0x142b*0x1+0x2ecb,-0x412*0x2+-0xca5+0x14d2,0x1c7c+0x5db+-0x2255,-0x1744*0x1+0x6d2+0x34b*0x5,0xb3d*0x2+-0x19*0x67+-0xc63,-0x1*0x1071+-0x925*-0x4+-0x1422,0x1d81+0xd*-0xd+-0x1cd4,-0x2*-0xe5f+0x3d*0x9e+-0x425d][this['direction']()];return $gameMap[_0x4eab90(0x98f)+_0x4eab90(0x2f8)](this['y'],_0x22a21e);},Game_CharacterBase[_0x3e3bd2(0x294)]['cwX']=function(){const _0x51f8ac=[0x7b8*0x5+0x29d+-0x7*0x5e3,0x26b5+0xc79+-0x9*0x5af,-0x1b79+-0xc8*0x1+0x1*0x1c45,-0x1a*0x101+-0x19af+0x33ca,-0x411+-0xae1*-0x1+0x7*-0xf8,0x1ba*0x3+-0x3d7+-0x152,-0x15a0+-0x1579+0x2b1b,0x3e9+-0x516+0x136,-0x240d+0x1463+0xfb0,0xe*0x272+-0x1f*0x1+-0x221a][this['direction']()];return $gameMap['roundXWith'+'Direction'](this['x'],_0x51f8ac);},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x292)]=function(){const _0x5dcf25=_0x3e3bd2,_0x1d7aa2=[0x153d+-0x1*0x20a5+-0xa*-0x124,0x67*-0x5b+-0x1999+0x3e3d,0xab3+-0xfe7+0x538,-0x1*-0xa61+0x466+0x763*-0x2,-0x1fbe+0x6c4+0x1902,-0x23c+-0x2474*0x1+0x26b5,0x1*-0x23e6+0x359*-0x1+-0x2741*-0x1,-0x79c+0xf64+-0x7bf,0x1601+-0x6e+-0x158d,0x8*0x9a+0x8*-0x3a9+0x187b][this['direction']()];return $gameMap[_0x5dcf25(0x98f)+_0x5dcf25(0x2f8)](this['y'],_0x1d7aa2);},VisuMZ[_0x3e3bd2(0x5eb)+'Core'][_0x3e3bd2(0x675)+'cter_setMo'+_0x3e3bd2(0x842)]=Game_Character['prototype']['setMoveRou'+'te'],Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x137)+'te']=function(_0x208173){const _0x4a528f=_0x3e3bd2;route=JsonEx['makeDeepCo'+'py'](_0x208173),VisuMZ[_0x4a528f(0x5eb)+_0x4a528f(0x8da)][_0x4a528f(0x675)+_0x4a528f(0x78c)+_0x4a528f(0x842)]['call'](this,route);},VisuMZ['EventsMove'+_0x3e3bd2(0x8da)][_0x3e3bd2(0x675)+_0x3e3bd2(0x600)+_0x3e3bd2(0x80e)]=Game_Character[_0x3e3bd2(0x294)]['forceMoveR'+'oute'],Game_Character[_0x3e3bd2(0x294)]['forceMoveR'+'oute']=function(_0x183588){const _0x41a206=_0x3e3bd2;route=JsonEx[_0x41a206(0x512)+'py'](_0x183588),VisuMZ[_0x41a206(0x5eb)+_0x41a206(0x8da)][_0x41a206(0x675)+_0x41a206(0x600)+'MoveRoute']['call'](this,route);},VisuMZ[_0x3e3bd2(0x5eb)+'Core']['Game_Chara'+_0x3e3bd2(0x149)+_0x3e3bd2(0x26f)+_0x3e3bd2(0x5a9)]=Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x532)+_0x3e3bd2(0x44b)],Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x532)+_0x3e3bd2(0x44b)]=function(_0x49e693){const _0x314eaa=_0x3e3bd2,_0x561cf2={'edFds':function(_0x3666b1,_0x1c252a){return _0x3666b1===_0x1c252a;}},_0x1428ee=Game_Character,_0x2e9331=_0x49e693[_0x314eaa(0x6a6)];if(_0x561cf2[_0x314eaa(0x1aa)](_0x49e693[_0x314eaa(0x377)],_0x1428ee[_0x314eaa(0x5de)+'PT'])){let _0x20bf98=_0x49e693[_0x314eaa(0x6a6)][-0x5b9+-0xd5*0x12+-0x14b3*-0x1];_0x20bf98=this['convertVar'+'iableValue'+_0x314eaa(0x56d)+_0x314eaa(0x9e5)](_0x20bf98),_0x20bf98=this[_0x314eaa(0x4b2)+_0x314eaa(0x326)+_0x314eaa(0x812)+'iptCall'](_0x20bf98),this[_0x314eaa(0x532)+_0x314eaa(0x1f1)+_0x314eaa(0x53f)+'re'](_0x49e693,_0x20bf98);}else VisuMZ[_0x314eaa(0x5eb)+_0x314eaa(0x8da)][_0x314eaa(0x675)+'cter_proce'+'ssMoveComm'+_0x314eaa(0x5a9)][_0x314eaa(0x3f6)](this,_0x49e693);},Game_Character[_0x3e3bd2(0x294)]['convertVar'+_0x3e3bd2(0x5d8)+_0x3e3bd2(0x56d)+_0x3e3bd2(0x9e5)]=function(_0x5bf9d4){const _0x190774=_0x3e3bd2,_0xbb4e40=/\$gameVariables\.value\((\d+)\)/gi,_0x4f46ae=/\\V\[(\d+)\]/gi;while(_0x5bf9d4[_0x190774(0x848)](_0xbb4e40)){_0x5bf9d4=_0x5bf9d4['replace'](_0xbb4e40,(_0x305ec5,_0x55784f)=>$gameVariables[_0x190774(0x2e6)](parseInt(_0x55784f)));}while(_0x5bf9d4[_0x190774(0x848)](_0x4f46ae)){_0x5bf9d4=_0x5bf9d4[_0x190774(0x18a)](_0x4f46ae,(_0x301209,_0xc781dc)=>$gameVariables[_0x190774(0x2e6)](parseInt(_0xc781dc)));}return _0x5bf9d4;},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x4b2)+'fVariableV'+_0x3e3bd2(0x812)+_0x3e3bd2(0x74b)]=function(_0x446743){const _0x4b47b5=_0x3e3bd2,_0x41a6e3=/\\SELFVAR\[(\d+)\]/gi;while(_0x446743['match'](_0x41a6e3)){_0x446743=_0x446743[_0x4b47b5(0x18a)](_0x41a6e3,(_0x2e211f,_0xc34898)=>getSelfVariableValue(this[_0x4b47b5(0x44a)],this[_0x4b47b5(0x4a0)],parseInt(_0xc34898)));}return _0x446743;},Game_Character['prototype'][_0x3e3bd2(0x532)+'eCommandEv'+'entsMoveCo'+'re']=function(_0x4340c8,_0x4db975){const _0x4fd28f=_0x3e3bd2,_0xe4c1df={'ToVlV':function(_0x18aef7,_0x415c6e){return _0x18aef7(_0x415c6e);},'vMUsZ':function(_0x43367b,_0x12acb1){return _0x43367b(_0x12acb1);},'gxECa':_0x4fd28f(0x34e),'zOMOX':'right','uuVdV':function(_0x4022bc,_0x49f814){return _0x4022bc+_0x49f814;},'XyQcA':function(_0x12eb84,_0x50ee8f){return _0x12eb84(_0x50ee8f);},'HUvUh':function(_0x26e176,_0x1212bd){return _0x26e176(_0x1212bd);},'pJnKN':function(_0x2a52e7,_0x5a816b){return _0x2a52e7(_0x5a816b);},'SAiUv':function(_0x43931d,_0x4820b5){return _0x43931d(_0x4820b5);},'mFFGp':function(_0x32d08a,_0x151bff){return _0x32d08a(_0x151bff);},'ivBmX':function(_0xdeea34,_0x19cb98){return _0xdeea34(_0x19cb98);},'roMyG':function(_0x251365,_0x20d37e){return _0x251365(_0x20d37e);},'YAkqo':function(_0x3b040b,_0x249f9b){return _0x3b040b(_0x249f9b);},'LXvQt':function(_0x450436,_0x329c16){return _0x450436(_0x329c16);},'UpnZU':function(_0x4970af,_0x3abfaf){return _0x4970af(_0x3abfaf);},'tpOVU':function(_0x4bb989,_0x3ecea1){return _0x4bb989(_0x3ecea1);},'FOdwi':function(_0x521500,_0x4c1caf){return _0x521500*_0x4c1caf;},'meOHR':function(_0x38eb6b,_0x168d4c){return _0x38eb6b/_0x168d4c;},'cXPOZ':function(_0x546a42,_0x47fc6f){return _0x546a42+_0x47fc6f;},'adSeT':function(_0x3d2add,_0x4d40d8){return _0x3d2add*_0x4d40d8;},'ldfkF':function(_0x10489e,_0x29a66a){return _0x10489e+_0x29a66a;},'arooS':function(_0x1b9348,_0x175f33){return _0x1b9348(_0x175f33);},'nwnWl':function(_0x2285a2,_0x17d35b){return _0x2285a2(_0x17d35b);},'RnsAN':function(_0x2a37cf,_0x54b328){return _0x2a37cf(_0x54b328);},'igCKK':function(_0x41431c,_0x511b74){return _0x41431c(_0x511b74);},'zsiyq':function(_0x4cac48,_0x1f64fe){return _0x4cac48(_0x1f64fe);},'ZQMVo':function(_0x467fb7,_0x35a6da){return _0x467fb7(_0x35a6da);},'kRCGs':function(_0x40d572,_0x1a7bf4){return _0x40d572(_0x1a7bf4);}};if(_0x4db975[_0x4fd28f(0x848)](/ANIMATION:[ ](\d+)/i))return this[_0x4fd28f(0x532)+_0x4fd28f(0x260)+'ation'](_0xe4c1df[_0x4fd28f(0x1a2)](Number,RegExp['$1']));if(_0x4db975['match'](/BALLOON:[ ](.*)/i))return this['processMov'+_0x4fd28f(0x2d1)+_0x4fd28f(0x76a)](_0xe4c1df['ToVlV'](String,RegExp['$1']));if(_0x4db975[_0x4fd28f(0x848)](/FADE IN:[ ](\d+)/i))return this['processMov'+_0x4fd28f(0x2a0)+'In'](_0xe4c1df[_0x4fd28f(0x1a2)](Number,RegExp['$1']));if(_0x4db975['match'](/FADE OUT:[ ](\d+)/i))return this[_0x4fd28f(0x532)+_0x4fd28f(0x2a0)+_0x4fd28f(0x8f8)](_0xe4c1df['vMUsZ'](Number,RegExp['$1']));if(_0x4db975['match'](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:TRUE|ON)/i))return this[_0x4fd28f(0x7ca)+_0x4fd28f(0x1f0)]();if(_0x4db975[_0x4fd28f(0x848)](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:FALSE|OFF)/i))return this[_0x4fd28f(0x7f9)+_0x4fd28f(0x1f0)]();if(_0x4db975[_0x4fd28f(0x848)](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:TRUE|ON)/i))return this[_0x4fd28f(0x8c5)+'ng']();if(_0x4db975[_0x4fd28f(0x848)](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:FALSE|OFF)/i))return this[_0x4fd28f(0x830)+'ng']();if(_0x4db975['match'](/HUG:[ ]LEFT/i))return this[_0x4fd28f(0x532)+'eRouteHugW'+_0x4fd28f(0x9e5)](_0xe4c1df[_0x4fd28f(0x475)]);if(_0x4db975[_0x4fd28f(0x848)](/HUG:[ ]RIGHT/i))return this[_0x4fd28f(0x532)+_0x4fd28f(0x84c)+_0x4fd28f(0x9e5)](_0xe4c1df[_0x4fd28f(0x102)]);if(_0x4db975[_0x4fd28f(0x848)](/INDEX:[ ](\d+)/i))return this[_0x4fd28f(0x532)+'eRouteSetI'+_0x4fd28f(0x751)](_0xe4c1df[_0x4fd28f(0x1a2)](Number,RegExp['$1']));if(_0x4db975[_0x4fd28f(0x848)](/INDEX:[ ]([\+\-]\d+)/i)){const _0x36c3c1=_0xe4c1df['uuVdV'](this[_0x4fd28f(0x1dc)+_0x4fd28f(0x57e)],_0xe4c1df['XyQcA'](Number,RegExp['$1']));return this[_0x4fd28f(0x532)+_0x4fd28f(0x171)+'ndex'](_0x36c3c1);}if(_0x4db975[_0x4fd28f(0x848)](/JUMP FORWARD:[ ](\d+)/i))return this[_0x4fd28f(0x532)+'eRouteJump'+_0x4fd28f(0x38b)](_0xe4c1df[_0x4fd28f(0x7e5)](Number,RegExp['$1']));if(_0x4db975[_0x4fd28f(0x848)](/JUMP TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x4fd28f(0x532)+'eRouteJump'+'To'](_0xe4c1df[_0x4fd28f(0x2df)](Number,RegExp['$1']),_0xe4c1df[_0x4fd28f(0x1dd)](Number,RegExp['$2']));if(_0x4db975['match'](/JUMP TO EVENT:[ ](\d+)/i)){const _0x2267c7=$gameMap['event'](_0xe4c1df[_0x4fd28f(0x2ad)](Number,RegExp['$1']));return this['processMov'+_0x4fd28f(0x765)+_0x4fd28f(0x589)+'r'](_0x2267c7);}if(_0x4db975[_0x4fd28f(0x848)](/JUMP TO PLAYER/i))return this[_0x4fd28f(0x532)+_0x4fd28f(0x765)+_0x4fd28f(0x589)+'r']($gamePlayer);if(_0x4db975['match'](/JUMP TO HOME/i)&&this['eventId']){const _0x3ab45b=this['_randomHom'+'eX'],_0x326f10=this['_randomHom'+'eY'];return this[_0x4fd28f(0x532)+'eRouteJump'+'To'](_0x3ab45b,_0x326f10);}if(_0x4db975[_0x4fd28f(0x848)](/MOVE[ ](.*)[ ]UNTIL STOP/i)){const _0xca204d=_0xe4c1df[_0x4fd28f(0x1a2)](String,RegExp['$1']),_0x1176f5=this['checkColli'+'sionKeywor'+'ds'](_0x4db975);return this[_0x4fd28f(0x532)+'eRouteMove'+_0x4fd28f(0x172)](_0xca204d,_0x1176f5);}if(_0x4db975[_0x4fd28f(0x848)](/MOVE TO:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0x54975b=_0xe4c1df['ivBmX'](Number,RegExp['$1']),_0xc32376=_0xe4c1df[_0x4fd28f(0x38c)](Number,RegExp['$2']),_0x5daa87=this[_0x4fd28f(0x3c7)+_0x4fd28f(0x401)+'ds'](_0x4db975);return this[_0x4fd28f(0x532)+_0x4fd28f(0x7ee)+'To'](_0x54975b,_0xc32376,_0x5daa87);}if(_0x4db975[_0x4fd28f(0x848)](/MOVE TO EVENT:[ ](\d+)/i)){const _0x47c2fa=$gameMap[_0x4fd28f(0x620)](_0xe4c1df[_0x4fd28f(0x7e5)](Number,RegExp['$1'])),_0x5e888f=this[_0x4fd28f(0x3c7)+'sionKeywor'+'ds'](_0x4db975);return this['processMov'+_0x4fd28f(0x7ee)+_0x4fd28f(0x589)+'r'](_0x47c2fa,_0x5e888f);}if(_0x4db975[_0x4fd28f(0x848)](/MOVE TO PLAYER/i)){const _0x2dfe54=this['checkColli'+'sionKeywor'+'ds'](_0x4db975);return this[_0x4fd28f(0x532)+_0x4fd28f(0x7ee)+_0x4fd28f(0x589)+'r']($gamePlayer,_0x2dfe54);}if(_0x4db975['match'](/MOVE TO HOME/i)&&this[_0x4fd28f(0x363)]){const _0x2e839a=this[_0x4fd28f(0x204)+'eX'],_0x296ed9=this[_0x4fd28f(0x204)+'eY'],_0x49e352=this[_0x4fd28f(0x3c7)+'sionKeywor'+'ds'](_0x4db975);return this[_0x4fd28f(0x532)+_0x4fd28f(0x7ee)+'To'](_0x2e839a,_0x296ed9,_0x49e352);}if(_0x4db975[_0x4fd28f(0x848)](/MOVE LOWER LEFT:[ ](\d+)/i))return this[_0x4fd28f(0x532)+_0x4fd28f(0x7ee)+_0x4fd28f(0x39a)](0xbdd*0x3+0x12b1+-0x1*0x3647,_0xe4c1df['YAkqo'](Number,RegExp['$1']));if(_0x4db975['match'](/MOVE DOWN:[ ](\d+)/i))return this[_0x4fd28f(0x532)+'eRouteMove'+_0x4fd28f(0x39a)](-0x5*0x3af+0x1a8c+0x1*-0x81f,_0xe4c1df[_0x4fd28f(0x5be)](Number,RegExp['$1']));if(_0x4db975[_0x4fd28f(0x848)](/MOVE LOWER RIGHT:[ ](\d+)/i))return this['processMov'+'eRouteMove'+_0x4fd28f(0x39a)](-0x17c3+0x14f0+0x2d6,_0xe4c1df['LXvQt'](Number,RegExp['$1']));if(_0x4db975['match'](/MOVE LEFT:[ ](\d+)/i))return this[_0x4fd28f(0x532)+_0x4fd28f(0x7ee)+_0x4fd28f(0x39a)](-0xfc1+-0xb*0x12f+-0x2*-0xe65,_0xe4c1df[_0x4fd28f(0x590)](Number,RegExp['$1']));if(_0x4db975[_0x4fd28f(0x848)](/MOVE RIGHT:[ ](\d+)/i))return this['processMov'+_0x4fd28f(0x7ee)+_0x4fd28f(0x39a)](0x3*0x92b+0x434+0x1*-0x1faf,_0xe4c1df[_0x4fd28f(0x5be)](Number,RegExp['$1']));if(_0x4db975[_0x4fd28f(0x848)](/MOVE UPPER LEFT:[ ](\d+)/i))return this['processMov'+_0x4fd28f(0x7ee)+'Repeat'](0x19d*-0xd+-0x4a3*-0x4+0x274,_0xe4c1df[_0x4fd28f(0x2ad)](Number,RegExp['$1']));if(_0x4db975[_0x4fd28f(0x848)](/MOVE UP:[ ](\d+)/i))return this['processMov'+_0x4fd28f(0x7ee)+'Repeat'](-0x1*0x187f+0x1133*-0x1+-0x14dd*-0x2,_0xe4c1df[_0x4fd28f(0x5be)](Number,RegExp['$1']));if(_0x4db975[_0x4fd28f(0x848)](/MOVE UPPER RIGHT:[ ](\d+)/i))return this['processMov'+_0x4fd28f(0x7ee)+'Repeat'](-0x1*0xf7b+0x12b0+-0x7*0x74,_0xe4c1df[_0x4fd28f(0x3e1)](Number,RegExp['$1']));if(_0x4db975[_0x4fd28f(0x848)](/OPACITY:[ ](\d+)([%％])/i)){const _0x5884b0=Math[_0x4fd28f(0x1f4)](_0xe4c1df[_0x4fd28f(0x964)](_0xe4c1df['meOHR'](_0xe4c1df[_0x4fd28f(0x92b)](Number,RegExp['$1']),-0x2602+-0x1a5c+-0x399*-0x12),0x4a*-0x71+0x12ea+0x1*0xebf));return this[_0x4fd28f(0x7fa)](_0x5884b0[_0x4fd28f(0x795)](-0x2471+0xcd1+0x17a0,-0x317*-0x8+-0xc3*-0x5+0x2*-0xdc4));}if(_0x4db975[_0x4fd28f(0x848)](/OPACITY:[ ]([\+\-]\d+)([%％])/i)){const _0x5999cb=_0xe4c1df['cXPOZ'](this[_0x4fd28f(0x9e4)],Math[_0x4fd28f(0x1f4)](_0xe4c1df[_0x4fd28f(0x9cc)](_0xe4c1df['meOHR'](_0xe4c1df[_0x4fd28f(0x2df)](Number,RegExp['$1']),-0x3*-0x683+0x9e2+-0x1d07),0x2*0x9f5+0x1*0x1d1b+0x1002*-0x3)));return this[_0x4fd28f(0x7fa)](_0x5999cb[_0x4fd28f(0x795)](-0x376*0x9+0x9e3+0x1543,-0x1*0x20e3+0x2*-0xb5c+0x64a*0x9));}if(_0x4db975['match'](/OPACITY:[ ]([\+\-]\d+)/i)){const _0x42caa9=_0xe4c1df[_0x4fd28f(0x33b)](this['_opacity'],_0xe4c1df[_0x4fd28f(0x110)](Number,RegExp['$1']));return this['setOpacity'](_0x42caa9[_0x4fd28f(0x795)](0x1*0x139+-0x2*0x1315+0x24f1*0x1,0x1484+0x10ea+-0x246f));}if(_0x4db975['match'](/PATTERN LOCK:[ ](\d+)/i))return this['processMov'+_0x4fd28f(0x651)+_0x4fd28f(0x27b)](_0xe4c1df[_0x4fd28f(0x1dd)](Number,RegExp['$1']));if(_0x4db975[_0x4fd28f(0x848)](/PATTERN UNLOCK/i))return this[_0x4fd28f(0x527)+_0x4fd28f(0x856)]=![];if(_0x4db975[_0x4fd28f(0x848)](/POSE:[ ](.*)/i)){const _0x3d6f2c=_0xe4c1df['arooS'](String,RegExp['$1'])[_0x4fd28f(0x936)+'e']()['trim']();return this[_0x4fd28f(0x26e)](_0x3d6f2c);}if(_0x4db975[_0x4fd28f(0x848)](/STEP TOWARD:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0x3bf090=_0xe4c1df['pJnKN'](Number,RegExp['$1']),_0x8fcca1=_0xe4c1df[_0x4fd28f(0x92b)](Number,RegExp['$2']);return this['processMov'+'eRouteStep'+'To'](_0x3bf090,_0x8fcca1);}if(_0x4db975[_0x4fd28f(0x848)](/STEP TOWARD EVENT:[ ](\d+)/i)){const _0x42a2e3=$gameMap[_0x4fd28f(0x620)](_0xe4c1df[_0x4fd28f(0x110)](Number,RegExp['$1']));return this[_0x4fd28f(0x532)+_0x4fd28f(0x383)+'ToCharacte'+'r'](_0x42a2e3);}if(_0x4db975[_0x4fd28f(0x848)](/STEP TOWARD PLAYER/i))return this[_0x4fd28f(0x532)+'eRouteStep'+_0x4fd28f(0x589)+'r']($gamePlayer);if(_0x4db975[_0x4fd28f(0x848)](/STEP TOWARD HOME/i)&&this[_0x4fd28f(0x363)]){const _0x30feea=this[_0x4fd28f(0x204)+'eX'],_0x336d19=this[_0x4fd28f(0x204)+'eY'];return this['processMov'+_0x4fd28f(0x383)+'To'](_0x30feea,_0x336d19);}if(_0x4db975[_0x4fd28f(0x848)](/STEP AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return this['moveAwayFr'+_0x4fd28f(0x867)](_0xe4c1df[_0x4fd28f(0x92b)](Number,RegExp['$1']),_0xe4c1df['nwnWl'](Number,RegExp['$2']));if(_0x4db975[_0x4fd28f(0x848)](/STEP AWAY FROM EVENT:[ ](\d+)/i)){const _0x5d932a=$gameMap[_0x4fd28f(0x620)](_0xe4c1df[_0x4fd28f(0x744)](Number,RegExp['$1']));return this[_0x4fd28f(0x208)+'omCharacte'+'r'](_0x5d932a);}if(_0x4db975[_0x4fd28f(0x848)](/STEP AWAY FROM PLAYER/i))return this['moveAwayFr'+'omCharacte'+'r']($gamePlayer);if(_0x4db975['match'](/STEP AWAY FROM HOME/i)&&this[_0x4fd28f(0x363)]){const _0x481115=this[_0x4fd28f(0x204)+'eX'],_0x5c9d5d=this[_0x4fd28f(0x204)+'eY'];return this[_0x4fd28f(0x208)+_0x4fd28f(0x867)](_0x481115,_0x5c9d5d);}if(_0x4db975[_0x4fd28f(0x848)](/TURN TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x4fd28f(0x897)+'Point'](_0xe4c1df[_0x4fd28f(0x667)](Number,RegExp['$1']),_0xe4c1df[_0x4fd28f(0x7f4)](Number,RegExp['$2']));if(_0x4db975[_0x4fd28f(0x848)](/TURN TO EVENT:[ ](\d+)/i)){const _0x13bc41=$gameMap[_0x4fd28f(0x620)](_0xe4c1df[_0x4fd28f(0x7e5)](Number,RegExp['$1']));return this['turnToward'+_0x4fd28f(0x3e5)](_0x13bc41);}if(_0x4db975[_0x4fd28f(0x848)](/TURN TO PLAYER/i))return this[_0x4fd28f(0xa01)+'Character']($gamePlayer);if(_0x4db975[_0x4fd28f(0x848)](/TURN TO HOME/i)&&this['eventId']){const _0x2cba39=this[_0x4fd28f(0x204)+'eX'],_0x33571f=this[_0x4fd28f(0x204)+'eY'];return this[_0x4fd28f(0xa01)+_0x4fd28f(0x5b8)](_0x2cba39,_0x33571f);}if(_0x4db975[_0x4fd28f(0x848)](/TURN AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x4fd28f(0x59d)+_0x4fd28f(0x867)](_0xe4c1df[_0x4fd28f(0xa04)](Number,RegExp['$1']),_0xe4c1df[_0x4fd28f(0x38c)](Number,RegExp['$2']));if(_0x4db975[_0x4fd28f(0x848)](/TURN AWAY FROM EVENT:[ ](\d+)/i)){const _0x3fdb5a=$gameMap['event'](_0xe4c1df[_0x4fd28f(0x38c)](Number,RegExp['$1']));return this[_0x4fd28f(0x59d)+_0x4fd28f(0x136)+'r'](_0x3fdb5a);}if(_0x4db975[_0x4fd28f(0x848)](/TURN AWAY FROM PLAYER/i))return this[_0x4fd28f(0x59d)+_0x4fd28f(0x136)+'r']($gamePlayer);if(_0x4db975['match'](/TURN AWAY FROM HOME/i)&&this[_0x4fd28f(0x363)]){const _0x58e636=this[_0x4fd28f(0x204)+'eX'],_0x16d617=this[_0x4fd28f(0x204)+'eY'];return this[_0x4fd28f(0x59d)+_0x4fd28f(0x867)](_0x58e636,_0x16d617);}if(_0x4db975[_0x4fd28f(0x848)](/TURN LOWER LEFT/i))return this[_0x4fd28f(0x5cb)+'on'](0x942+0x411+0xb*-0x136);if(_0x4db975[_0x4fd28f(0x848)](/TURN LOWER RIGHT/i))return this[_0x4fd28f(0x5cb)+'on'](0x51d+0x2dd*0x2+0x9*-0x134);if(_0x4db975[_0x4fd28f(0x848)](/TURN UPPER LEFT/i))return this['setDirecti'+'on'](-0x1*0x2027+-0x1527+0x3555);if(_0x4db975[_0x4fd28f(0x848)](/TURN UPPER RIGHT/i))return this[_0x4fd28f(0x5cb)+'on'](0xfaa+0x9db+-0x197c*0x1);if(_0x4db975[_0x4fd28f(0x848)](/Self Switch[ ](.*):[ ](.*)/i))return this[_0x4fd28f(0x532)+_0x4fd28f(0x7c1)+'Switch'](RegExp['$1'],RegExp['$2']);if(_0x4db975[_0x4fd28f(0x848)](/Self Variable[ ](.*):[ ](.*)/i))return this['processMov'+'eRouteSelf'+'Variable'](RegExp['$1'],RegExp['$2']);if(_0x4db975[_0x4fd28f(0x848)](/TELEPORT TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x4fd28f(0x532)+_0x4fd28f(0x460)+_0x4fd28f(0xa1c)](_0xe4c1df['ZQMVo'](Number,RegExp['$1']),_0xe4c1df[_0x4fd28f(0x439)](Number,RegExp['$2']));if(_0x4db975[_0x4fd28f(0x848)](/TELEPORT TO EVENT:[ ](\d+)/i)){const _0x4276e5=$gameMap['event'](_0xe4c1df[_0x4fd28f(0x3e1)](Number,RegExp['$1']));return this[_0x4fd28f(0x532)+_0x4fd28f(0x460)+'portToChar'+_0x4fd28f(0x41b)](_0x4276e5);}if(_0x4db975[_0x4fd28f(0x848)](/TELEPORT TO PLAYER/i))return this['processMov'+_0x4fd28f(0x460)+_0x4fd28f(0x887)+_0x4fd28f(0x41b)]($gamePlayer);if(_0x4db975[_0x4fd28f(0x848)](/TELEPORT TO HOME/i)&&this[_0x4fd28f(0x363)]){const _0x5a2f53=this[_0x4fd28f(0x204)+'eX'],_0x3186d7=this[_0x4fd28f(0x204)+'eY'];return this[_0x4fd28f(0x532)+_0x4fd28f(0x460)+'portTo'](_0x5a2f53,_0x3186d7);}try{VisuMZ[_0x4fd28f(0x5eb)+_0x4fd28f(0x8da)][_0x4fd28f(0x675)+_0x4fd28f(0x149)+_0x4fd28f(0x26f)+'and']['call'](this,_0x4340c8);}catch(_0x497b07){if($gameTemp['isPlaytest']())console[_0x4fd28f(0x8fa)](_0x497b07);}},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x532)+_0x3e3bd2(0x260)+_0x3e3bd2(0x61d)]=function(_0x3aeef6){const _0x4bae15=_0x3e3bd2;$gameTemp[_0x4bae15(0x2af)+_0x4bae15(0x33f)]([this],_0x3aeef6);},Game_Character['prototype'][_0x3e3bd2(0x532)+_0x3e3bd2(0x2d1)+'oon']=function(_0x4736bc){const _0x2cccc6=_0x3e3bd2,_0x34342b={'FPGXR':_0x2cccc6(0x5a2)+'N','EzQkN':_0x2cccc6(0x8aa),'DhGjm':'MUSIC','ylAeg':_0x2cccc6(0x270),'petUL':_0x2cccc6(0x9a5),'nMmDA':_0x2cccc6(0x309),'KCvwW':_0x2cccc6(0x47e),'zsxFv':_0x2cccc6(0x5f8),'mqkdL':_0x2cccc6(0x3fa),'yjNOU':_0x2cccc6(0x7b6),'SONXq':'SWEAT','azjok':'COBWEB','PbRot':_0x2cccc6(0x62b),'iwfFE':_0x2cccc6(0x3ae)+'N','JMDbu':_0x2cccc6(0x97c),'CAitD':'...','xfBEv':_0x2cccc6(0x398),'YoReB':_0x2cccc6(0x451),'onNVy':_0x2cccc6(0x5cc),'FtXSh':'LIGHT-BULB','LkvhV':_0x2cccc6(0x234),'fhdjF':_0x2cccc6(0x480),'REzEG':'SLEEP','arXAr':_0x2cccc6(0x42f)+_0x2cccc6(0x433),'qndsB':_0x2cccc6(0x42f)+_0x2cccc6(0x254),'ekVbW':_0x2cccc6(0x42f)+_0x2cccc6(0x5da),'iJiCl':_0x2cccc6(0x42f)+_0x2cccc6(0x336),'HBQDc':_0x2cccc6(0x42f)+_0x2cccc6(0x3f8)};let _0x1ee589=-0x2*0x1121+0xf59+-0x2f*-0x67;switch(_0x4736bc[_0x2cccc6(0x936)+'e']()[_0x2cccc6(0x66f)]()){case'!':case _0x34342b[_0x2cccc6(0x610)]:_0x1ee589=-0x2686*0x1+0x14f1+0x1196;break;case'?':case _0x34342b[_0x2cccc6(0x690)]:_0x1ee589=-0x26c*0x3+-0x1*-0x1201+-0xabb;break;case _0x34342b[_0x2cccc6(0xf0)]:case _0x34342b[_0x2cccc6(0x49f)]:case _0x34342b[_0x2cccc6(0x88e)]:case _0x34342b[_0x2cccc6(0x2fe)]:case _0x34342b[_0x2cccc6(0x278)]:_0x1ee589=0x1d5c+-0x1e8a+0x3d*0x5;break;case _0x34342b[_0x2cccc6(0x2b0)]:case _0x34342b[_0x2cccc6(0x980)]:_0x1ee589=-0xf1e+0x9bb*0x1+0x567;break;case _0x34342b[_0x2cccc6(0x9e6)]:_0x1ee589=0x1586+-0x26f*0x3+-0xe34;break;case _0x34342b[_0x2cccc6(0x807)]:_0x1ee589=0xa*-0x11c+0x20e5+-0x15c7*0x1;break;case _0x34342b[_0x2cccc6(0x99b)]:case _0x34342b[_0x2cccc6(0x339)]:case _0x34342b[_0x2cccc6(0x9b5)]:_0x1ee589=0x670*0x2+-0x114d+0xc*0x5f;break;case _0x34342b[_0x2cccc6(0x37c)]:case _0x34342b[_0x2cccc6(0x85a)]:_0x1ee589=-0x235*-0xd+-0x8f*-0x11+-0x2628;break;case _0x34342b[_0x2cccc6(0x2cc)]:case _0x34342b[_0x2cccc6(0x4d3)]:case _0x34342b[_0x2cccc6(0x1f5)]:case _0x34342b[_0x2cccc6(0x648)]:case _0x34342b[_0x2cccc6(0x633)]:_0x1ee589=0x2d7*0xd+0x209f+-0x4581;break;case'Z':case'ZZ':case _0x34342b[_0x2cccc6(0x7a7)]:case _0x34342b[_0x2cccc6(0x272)]:_0x1ee589=-0x348*-0x4+-0xd11+-0x5;break;case _0x34342b[_0x2cccc6(0x193)]:_0x1ee589=-0x17dc+0x131*-0x1+0x4*0x646;break;case _0x34342b[_0x2cccc6(0x764)]:_0x1ee589=-0x99c+0x1624+-0xc7c;break;case _0x34342b[_0x2cccc6(0x994)]:_0x1ee589=-0x4*-0xc1+0xb0f+-0xe06;break;case _0x34342b[_0x2cccc6(0x6b3)]:_0x1ee589=0xe1f+0x311+-0x33*0x56;break;case _0x34342b[_0x2cccc6(0x3b1)]:_0x1ee589=-0x718+-0x2*-0x454+0x23*-0xb;break;}$gameTemp[_0x2cccc6(0x173)+_0x2cccc6(0x6dd)](this,_0x1ee589);},Game_Character[_0x3e3bd2(0x294)]['processMov'+_0x3e3bd2(0x2a0)+'In']=function(_0x33c544){const _0x180cb1=_0x3e3bd2,_0x585daa={'fNaNg':function(_0x4b9718,_0xf9d84a){return _0x4b9718<_0xf9d84a;}};_0x33c544+=this[_0x180cb1(0x9e4)],this[_0x180cb1(0x7fa)](_0x33c544[_0x180cb1(0x795)](-0x8*0x87+0x1*0x26e7+-0x1*0x22af,0x53*0x39+-0x10bb+-0xc1*0x1));if(_0x585daa[_0x180cb1(0x54b)](this[_0x180cb1(0x9e4)],0xcc6+-0x17*0x25+-0x874))this[_0x180cb1(0x32d)+'Index']--;},Game_Character['prototype']['processMov'+_0x3e3bd2(0x2a0)+_0x3e3bd2(0x8f8)]=function(_0x442227){const _0x161cdd=_0x3e3bd2,_0x4e9339={'VlDFV':function(_0x6f6f23,_0x13cb47){return _0x6f6f23-_0x13cb47;},'hendH':function(_0x11cef5,_0x4a8109){return _0x11cef5>_0x4a8109;}};_0x442227=_0x4e9339[_0x161cdd(0x971)](this[_0x161cdd(0x9e4)],_0x442227),this[_0x161cdd(0x7fa)](_0x442227[_0x161cdd(0x795)](0x2282+-0x1ebe+0x1*-0x3c4,-0x11a9+-0x1d21*0x1+0x2fc9));if(_0x4e9339['hendH'](this[_0x161cdd(0x9e4)],-0x7d2+0x145*-0x7+0x10b5))this['_moveRoute'+'Index']--;},Game_Character[_0x3e3bd2(0x294)]['processMov'+'eRouteHugW'+_0x3e3bd2(0x9e5)]=function(_0x1b676c){const _0x5f10ac=_0x3e3bd2,_0x12c66={'iCopY':function(_0x489d9d,_0x2d6079){return _0x489d9d===_0x2d6079;},'VVQdk':_0x5f10ac(0x34e),'raOUg':function(_0x46491c,_0x59c776){return _0x46491c===_0x59c776;},'uzvAa':function(_0x39e2b2,_0x52bb68){return _0x39e2b2===_0x52bb68;},'uJxUu':function(_0x5518e9,_0x3a2754){return _0x5518e9===_0x3a2754;}},_0x28ccde=[0x10d*-0x15+0x1f*0x2a+0x10fb,-0x11ad*-0x2+-0x1a28+-0x92f,0xfe8+0xb*0x187+-0x20af,0x177b+-0x2710+0xf9e,0x1c77+0x1f54+-0x3bc9,-0x152a+-0x1d08+0x1*0x3232,0x1354+0x1*0x2263+-0x35af,-0x173a+-0x23ff*-0x1+-0xcc4,0x16fd+-0x1*0x1ae6+-0x43*-0xf,-0x242e*-0x1+0x8e6+0x1*-0x2d0d],_0x469403=[0x56*-0x35+0x2512+-0x1344,-0x7*0x428+0xbc3+0x1*0x115c,0xc78+0x670*0x2+0x1*-0x1954,0x689*0x2+0xb*0x113+-0x18e2,0x328+0x5d1+-0x8f1,0x1*0x20ae+-0xe8a+0xc*-0x183,-0xf16+-0xd2a+0x1c42,0x1e8+0xecc*0x1+0x11*-0xfb,0x45*0x6f+0x1*0xcc9+0x71d*-0x6,0x8a*-0x17+-0x8*-0x44c+-0x1*0x15f7],_0x4d20d4=this[_0x5f10ac(0x580)](),_0x1bf158=(_0x12c66[_0x5f10ac(0x34f)](_0x1b676c,_0x12c66[_0x5f10ac(0x41c)])?_0x28ccde:_0x469403)[_0x4d20d4],_0x4ec0f0=(_0x12c66[_0x5f10ac(0x8d8)](_0x1b676c,_0x12c66[_0x5f10ac(0x41c)])?_0x469403:_0x28ccde)[_0x4d20d4];if(this[_0x5f10ac(0x1fa)](this['x'],this['y'],_0x1bf158))_0x12c66[_0x5f10ac(0x166)](_0x1b676c,_0x12c66[_0x5f10ac(0x41c)])?this[_0x5f10ac(0x923)]():this[_0x5f10ac(0x2d0)+'0']();else!this[_0x5f10ac(0x1fa)](this['x'],this['y'],this['direction']())&&(this['canPass'](this['x'],this['y'],_0x4ec0f0)?_0x12c66['uJxUu'](_0x1b676c,_0x12c66[_0x5f10ac(0x41c)])?this[_0x5f10ac(0x2d0)+'0']():this['turnLeft90']():this[_0x5f10ac(0x280)]());this[_0x5f10ac(0x1fa)](this['x'],this['y'],this[_0x5f10ac(0x580)]())&&this[_0x5f10ac(0x13f)+'d']();},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x532)+_0x3e3bd2(0x171)+_0x3e3bd2(0x751)]=function(_0x37dbd8){const _0x44e3fd=_0x3e3bd2;if(ImageManager[_0x44e3fd(0x189)+_0x44e3fd(0x845)](this[_0x44e3fd(0x1dc)+_0x44e3fd(0x1d8)]))return;_0x37dbd8=_0x37dbd8[_0x44e3fd(0x795)](-0x83*0x17+0x1*-0x1326+0x1eeb,-0x25*0x100+0x5af+-0x7d6*-0x4),this[_0x44e3fd(0x1a6)](this[_0x44e3fd(0x1dc)+_0x44e3fd(0x1d8)],_0x37dbd8);},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x532)+_0x3e3bd2(0x765)+'Forward']=function(_0x50b13d){const _0x3f9732=_0x3e3bd2;switch(this[_0x3f9732(0x580)]()){case 0x26b8+-0x9d*0x1b+0x1628*-0x1:this['jump'](-_0x50b13d,_0x50b13d);break;case 0x62*0x42+0xb6a+-0x24ac:this[_0x3f9732(0x606)](0xf9*-0xe+-0x752*-0x5+-0x16fc,_0x50b13d);break;case 0x75a*0x2+-0x1*0x17c9+-0x184*-0x6:this[_0x3f9732(0x606)](_0x50b13d,_0x50b13d);break;case-0x8b9+0x1be3+-0x331*0x6:this[_0x3f9732(0x606)](-_0x50b13d,0x4*-0x9f+0x2642*0x1+-0x23c6);break;case 0xd31+0x449*-0x6+0xf7*0xd:this[_0x3f9732(0x606)](_0x50b13d,-0x15f3*-0x1+0x8e5*0x2+-0xd3f*0x3);break;case-0x239b+-0x1129+0x34cb:this[_0x3f9732(0x606)](-_0x50b13d,-_0x50b13d);break;case 0x3d1*-0x3+0x784*0x3+-0xb11:this[_0x3f9732(0x606)](-0x16c6+-0xd18+0x23de,-_0x50b13d);break;case-0x799+-0x579+0xd1b:this[_0x3f9732(0x606)](_0x50b13d,-_0x50b13d);break;}},Game_Character['prototype']['processMov'+_0x3e3bd2(0x765)+'To']=function(_0x30cf2f,_0x1e6fe0){const _0x46252f=_0x3e3bd2,_0x3436e6={'TiNlB':function(_0x1847ab,_0x2da13d){return _0x1847ab-_0x2da13d;},'jZLzj':function(_0x144d90,_0x5a3214){return _0x144d90-_0x5a3214;}},_0x1de2be=Math[_0x46252f(0x1f4)](_0x3436e6[_0x46252f(0x583)](_0x30cf2f,this['x'])),_0x718461=Math[_0x46252f(0x1f4)](_0x3436e6[_0x46252f(0x145)](_0x1e6fe0,this['y']));this[_0x46252f(0x606)](_0x1de2be,_0x718461);},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x532)+_0x3e3bd2(0x765)+_0x3e3bd2(0x589)+'r']=function(_0x654d7){const _0x2ff48d=_0x3e3bd2;if(_0x654d7)this[_0x2ff48d(0x532)+_0x2ff48d(0x765)+'To'](_0x654d7['x'],_0x654d7['y']);},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x532)+'eRouteStep'+'To']=function(_0x56ade7,_0x1d3592,_0x49a25e){const _0x1ed874=_0x3e3bd2;let _0x479236=0x1133+-0x1618+0x4e5;if(_0x49a25e)$gameTemp[_0x1ed874(0x82a)+_0x1ed874(0x4cb)+_0x1ed874(0x7d8)]=!![];$gameMap[_0x1ed874(0x4fe)+_0x1ed874(0x824)+_0x1ed874(0x571)]()?_0x479236=this['findDiagon'+'alDirectio'+_0x1ed874(0x882)](_0x56ade7,_0x1d3592):_0x479236=this[_0x1ed874(0x990)+'ionTo'](_0x56ade7,_0x1d3592);if(_0x49a25e)$gameTemp[_0x1ed874(0x82a)+_0x1ed874(0x4cb)+_0x1ed874(0x7d8)]=![];this[_0x1ed874(0x741)+_0x1ed874(0x235)](_0x479236),this[_0x1ed874(0x5e8)+_0x1ed874(0x517)](!![]);},Game_Character[_0x3e3bd2(0x294)]['processMov'+_0x3e3bd2(0x383)+_0x3e3bd2(0x589)+'r']=function(_0x46f21a){const _0x14035b=_0x3e3bd2;if(_0x46f21a)this[_0x14035b(0x532)+_0x14035b(0x383)+'To'](_0x46f21a['x'],_0x46f21a['y']);},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x532)+'eRouteStep'+_0x3e3bd2(0x154)]=function(_0x88fbc4,_0x3a85f6){const _0x521054=_0x3e3bd2,_0x4b4463=this[_0x521054(0x3ef)](_0x88fbc4),_0x50de3e=this[_0x521054(0x411)](_0x3a85f6);},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x3c7)+_0x3e3bd2(0x401)+'ds']=function(_0x134d1e){const _0x6c8811=_0x3e3bd2;if(_0x134d1e[_0x6c8811(0x848)](/(?:CRASH|COLLIDE|COLLISION|ENCOUNTER|TOUCH)/i))return!![];else return _0x134d1e[_0x6c8811(0x848)](/(?:AVOID|EVADE|DODGE)/i)?![]:![];},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x879)+_0x3e3bd2(0x6ba)+_0x3e3bd2(0x7d1)+_0x3e3bd2(0x2cf)+'s']=Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x459)+_0x3e3bd2(0x4f5)+_0x3e3bd2(0x4e5)],Game_Event[_0x3e3bd2(0x294)]['isCollided'+_0x3e3bd2(0x4f5)+'Characters']=function(_0x4ea5fb,_0x53313a){const _0xc87ac6=_0x3e3bd2;if($gameTemp['_moveAllow'+_0xc87ac6(0x4cb)+_0xc87ac6(0x7d8)])return![];return VisuMZ[_0xc87ac6(0x5eb)+_0xc87ac6(0x8da)]['Game_Event'+'_isCollide'+_0xc87ac6(0x7d1)+_0xc87ac6(0x2cf)+'s']['call'](this,_0x4ea5fb,_0x53313a);},Game_Character[_0x3e3bd2(0x294)]['processMov'+_0x3e3bd2(0x7ee)+'UntilStop']=function(_0x3d8112,_0x7d3e31){const _0x250a30=_0x3e3bd2,_0xb3ee4d={'KmfLI':_0x250a30(0x77d),'cPTAA':_0x250a30(0x43a),'YNNeh':_0x250a30(0xa12)+'T','RxxET':_0x250a30(0x62c),'mpvEU':_0x250a30(0x8cd),'yEyWT':_0x250a30(0x95f),'TrToC':_0x250a30(0x351)+'T','Zblnh':function(_0x47bdb1,_0x24e68c){return _0x47bdb1<=_0x24e68c;}},_0x15f097=['',_0xb3ee4d[_0x250a30(0x938)],_0xb3ee4d[_0x250a30(0xf5)],_0xb3ee4d[_0x250a30(0x702)],_0xb3ee4d[_0x250a30(0x666)],'',_0xb3ee4d[_0x250a30(0x27f)],_0xb3ee4d[_0x250a30(0x262)],'UP',_0xb3ee4d[_0x250a30(0x7d0)]],_0x11ffce=_0x15f097[_0x250a30(0x8fb)](_0x3d8112[_0x250a30(0x936)+'e']()[_0x250a30(0x66f)]());if(_0xb3ee4d[_0x250a30(0x11a)](_0x11ffce,-0x2*-0x883+-0x295*-0x6+-0x2084))return;if(_0x7d3e31)$gameTemp['_moveAllow'+_0x250a30(0x4cb)+_0x250a30(0x7d8)]=!![];if(this[_0x250a30(0x1fa)](this['x'],this['y'],_0x11ffce)){if(_0x7d3e31)$gameTemp[_0x250a30(0x82a)+'PlayerColl'+_0x250a30(0x7d8)]=![];this[_0x250a30(0x741)+'eDir8'](_0x11ffce),this['_moveRoute'+_0x250a30(0x57e)]-=-0x1*-0x1f5a+-0x1*0x1b31+-0x4*0x10a;}if(_0x7d3e31)$gameTemp[_0x250a30(0x82a)+_0x250a30(0x4cb)+_0x250a30(0x7d8)]=![];},Game_Character[_0x3e3bd2(0x294)]['processMov'+_0x3e3bd2(0x7ee)+'To']=function(_0x10fd4e,_0x2debb7,_0x11765c){const _0xeebdff=_0x3e3bd2,_0x43231b={'FIqfS':function(_0x224c93,_0x456e99){return _0x224c93!==_0x456e99;},'beTmy':function(_0x1c1c26,_0x3b0e5e){return _0x1c1c26!==_0x3b0e5e;}};this['processMov'+_0xeebdff(0x383)+'To'](_0x10fd4e,_0x2debb7,_0x11765c);if(_0x43231b[_0xeebdff(0x2c7)](this['x'],_0x10fd4e)||_0x43231b[_0xeebdff(0x526)](this['y'],_0x2debb7))this[_0xeebdff(0x32d)+'Index']--;},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x532)+_0x3e3bd2(0x7ee)+_0x3e3bd2(0x589)+'r']=function(_0x515c67,_0x31a018){const _0x17feaf=_0x3e3bd2,_0x920ee5={'MvknO':function(_0x168b81,_0x513653){return _0x168b81<=_0x513653;}};if(_0x515c67&&!_0x515c67['_erased']){this[_0x17feaf(0x532)+_0x17feaf(0x7ee)+'To'](_0x515c67['x'],_0x515c67['y'],_0x31a018);if(_0x515c67[_0x17feaf(0x67e)+_0x17feaf(0x4a2)]()&&this['isNormalPr'+_0x17feaf(0x4a2)]()){const _0x582424=$gameMap['distance'](this['x'],this['y'],_0x515c67['x'],_0x515c67['y']);if(_0x920ee5[_0x17feaf(0x742)](_0x582424,-0x2216+0x2558+-0x341*0x1))this[_0x17feaf(0x32d)+'Index']++;}}},Game_Character['prototype'][_0x3e3bd2(0x532)+_0x3e3bd2(0x7ee)+_0x3e3bd2(0x39a)]=function(_0x339656,_0x110eda){const _0x5cb799=_0x3e3bd2,_0x580bdb={'NmLEU':function(_0x20d69e,_0x163908){return _0x20d69e||_0x163908;},'tvMSn':function(_0x16be97,_0x418cc3){return _0x16be97+_0x418cc3;}};_0x110eda=_0x580bdb['NmLEU'](_0x110eda,-0xc7*0x3+-0x1813*0x1+-0x68*-0x41);const _0x1c34f3={'code':0x1,'indent':null,'parameters':[]};_0x1c34f3[_0x5cb799(0x377)]=[-0xeb*-0x4+0x44*0xc+-0x6dc,-0xc07+0x20e5+0x251*-0x9,-0x1ebe+-0x24eb+0x43aa,-0x192e+-0x21c7+0x3afb,0x5a*0x65+0x198*-0x4+0x748*-0x4,0xc7*-0x25+-0x1e5f+0x3*0x13b6,0x167*0x2+0xcaa+-0xf75,-0x632+-0xe09+-0x2*-0xa21,-0x1*0x1d75+0xff*-0x1d+0x3a5c,0x1f*-0x2e+0x1*-0xe8d+-0x7*-0x2e1][_0x339656],this[_0x5cb799(0x32d)][_0x5cb799(0x5f0)][this['_moveRoute'+_0x5cb799(0x57e)]][_0x5cb799(0x6a6)][-0x21b+-0x577*0x7+0x285c]='';while(_0x110eda--){this[_0x5cb799(0x32d)][_0x5cb799(0x5f0)][_0x5cb799(0x320)](_0x580bdb['tvMSn'](this[_0x5cb799(0x32d)+'Index'],-0x6*-0x1a1+0x381*0x2+-0x5*0x35b),-0x1e3+0x2574+-0x2391,_0x1c34f3);}},Game_Character['prototype'][_0x3e3bd2(0x532)+'eRoutePatt'+_0x3e3bd2(0x27b)]=function(_0x3ae7a0){const _0x2d0998=_0x3e3bd2;this[_0x2d0998(0x527)+_0x2d0998(0x856)]=!![],this[_0x2d0998(0x4c5)](_0x3ae7a0);},Game_Character['prototype'][_0x3e3bd2(0x532)+_0x3e3bd2(0x7c1)+_0x3e3bd2(0x40c)]=function(_0x439f91,_0x3ce61c){const _0x34ad54=_0x3e3bd2,_0x4f76e9={'yfGvN':function(_0x35a274,_0x3f9eb6){return _0x35a274===_0x3f9eb6;},'oXwsS':function(_0x4b7ad7,_0x402810){return _0x4b7ad7(_0x402810);},'HYBMi':_0x34ad54(0x230)+_0x34ad54(0x7e7),'WZwNE':_0x34ad54(0x428),'orwBG':_0x34ad54(0x25c),'eMyOi':'FALSE','XcbVm':'TOGGLE'};if(_0x4f76e9[_0x34ad54(0x21b)](this,$gamePlayer))return;const _0x49bf8d=[this[_0x34ad54(0x44a)],this['_eventId'],'A'];_0x439f91[_0x34ad54(0x848)](/\b[ABCD]\b/i)?_0x49bf8d[-0x1a71+0x7e1*-0x2+-0x2a35*-0x1]=_0x4f76e9['oXwsS'](String,_0x439f91)[_0x34ad54(0x8a5)](-0x732*0x1+-0x2530+0x2c62)[_0x34ad54(0x936)+'e']()[_0x34ad54(0x66f)]():_0x49bf8d[0x243a+0xb*0x149+-0x325b]=_0x4f76e9[_0x34ad54(0x187)][_0x34ad54(0x96d)](_0x439f91);switch(_0x3ce61c['toUpperCas'+'e']()['trim']()){case'ON':case _0x4f76e9[_0x34ad54(0x99f)]:$gameSelfSwitches[_0x34ad54(0xa00)](_0x49bf8d,!![]);break;case _0x4f76e9['orwBG']:case _0x4f76e9[_0x34ad54(0x5a1)]:$gameSelfSwitches[_0x34ad54(0xa00)](_0x49bf8d,![]);break;case _0x4f76e9[_0x34ad54(0x9ff)]:$gameSelfSwitches[_0x34ad54(0xa00)](_0x49bf8d,!$gameSelfSwitches[_0x34ad54(0x2e6)](_0x49bf8d));break;}},Game_Character['prototype'][_0x3e3bd2(0x532)+_0x3e3bd2(0x7c1)+_0x3e3bd2(0x9e1)]=function(_0x4c1340,_0x29a49f){const _0xa21767=_0x3e3bd2,_0x2869cf={'IIxIZ':function(_0x3b3c57,_0x3424b3){return _0x3b3c57===_0x3424b3;},'HwHuM':_0xa21767(0x694)+'ble\x20%1','KRwga':function(_0x47b8de,_0x1f41e2){return _0x47b8de(_0x1f41e2);}};if(_0x2869cf[_0xa21767(0x76b)](this,$gamePlayer))return;const _0x7a344f=[this['_mapId'],this[_0xa21767(0x4a0)],_0x2869cf[_0xa21767(0x8c4)][_0xa21767(0x96d)](_0x4c1340)];$gameSelfSwitches[_0xa21767(0xa00)](_0x7a344f,_0x2869cf[_0xa21767(0x4fc)](Number,_0x29a49f));},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x532)+_0x3e3bd2(0x460)+'portTo']=function(_0x52c1f3,_0x36c8c3){const _0x35fac4=_0x3e3bd2;this[_0x35fac4(0x3b7)](_0x52c1f3,_0x36c8c3);},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x532)+_0x3e3bd2(0x460)+'portToChar'+_0x3e3bd2(0x41b)]=function(_0x4a044b){const _0x4d5159=_0x3e3bd2;if(_0x4a044b)this[_0x4d5159(0x532)+_0x4d5159(0x460)+_0x4d5159(0xa1c)](_0x4a044b['x'],_0x4a044b['y']);},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x2d0)+'0']=function(){const _0x3f4837=_0x3e3bd2;switch(this['direction']()){case-0x20cd+0x5*0xd3+0x1caf:this['setDirecti'+'on'](-0x1176+0x6*0x4f9+-0xc59);break;case 0x1*-0x175+-0x885*0x4+0x1*0x238b:this['setDirecti'+'on'](0x1e24+0xb3*0x17+-0xf67*0x3);break;case-0x20f3+-0x763+0x2859:this['setDirecti'+'on'](-0x2*-0xacd+0x1f2d+-0x34c6);break;case-0x1c1b+0xd7*-0x17+0x2f70:this[_0x3f4837(0x5cb)+'on'](0x1*-0x19aa+0x1fa+0xbdc*0x2);break;case-0x1e25*0x1+-0x111b+0x2f46*0x1:this[_0x3f4837(0x5cb)+'on'](0x6c3*-0x5+0x13e1+0xdf0);break;case 0x1*-0x5af+0x12dd+-0xd27:this['setDirecti'+'on'](0x13d7+0x40*0x16+0x29*-0x9e);break;case-0x1*0x65+-0x174c+0x17b9:this[_0x3f4837(0x5cb)+'on'](-0x14b5+0x1*0x22d+0x128e);break;case-0x86c*0x3+-0x2386*-0x1+0x1*-0xa39:this[_0x3f4837(0x5cb)+'on'](0x15c7+-0x2222+0xc5e);break;}},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x923)]=function(){const _0x56a113=_0x3e3bd2;switch(this[_0x56a113(0x580)]()){case-0x2e1*0x2+-0x18f1+0x1eb4:this[_0x56a113(0x5cb)+'on'](0x7*-0x2ce+-0x1*-0x11a5+0x8*0x40);break;case 0x21d1+-0x1*0x23c9+0x1fa:this[_0x56a113(0x5cb)+'on'](-0x1*-0x13a5+-0xd4a+-0x1*0x655);break;case-0x12b4+-0x1a3b+0x2cf2:this[_0x56a113(0x5cb)+'on'](0xa+-0xca7+-0xca6*-0x1);break;case 0x21e9*-0x1+0x121a*-0x2+0x4621:this['setDirecti'+'on'](0x2636+0xa49*0x1+-0x307d);break;case 0x16c*-0xd+0x351+0xf31:this['setDirecti'+'on'](0xa7c*0x1+-0x1*0xc1f+-0x1ab*-0x1);break;case-0x17*0xbf+0x1d17*-0x1+0x2e47:this[_0x56a113(0x5cb)+'on'](-0x102f*0x2+-0xe65+0x2ec4);break;case 0x16a7+0x2*0xb57+-0x2d4d:this[_0x56a113(0x5cb)+'on'](0x1979+0x1*0x64d+-0x1fc2);break;case-0xdaa+0xdd*0xf+0xc0:this[_0x56a113(0x5cb)+'on'](0x23b9+0x110b+-0x34bd);break;}},Game_Character['prototype']['getDirecti'+_0x3e3bd2(0x949)]=function(_0x5e11ab,_0x4d62b4,_0x170f1a){const _0x5e1d33=_0x3e3bd2,_0x466d23={'NPmWN':function(_0x393e48,_0x36fcdc){return _0x393e48>_0x36fcdc;},'WZyUa':function(_0x4a8c53,_0x2960f1){return _0x4a8c53<_0x2960f1;},'zNsiC':function(_0x549055,_0x44c5cb){return _0x549055<_0x44c5cb;},'ACpsm':function(_0x3b7de2,_0x10034c){return _0x3b7de2<_0x10034c;},'vtXpI':function(_0x586ff7,_0x23a14c){return _0x586ff7>_0x23a14c;},'mMnpJ':function(_0x771477,_0x5a1039){return _0x771477>_0x5a1039;},'fQSYt':function(_0x3f1176,_0x4e4c50){return _0x3f1176<_0x4e4c50;},'BuHOu':function(_0x48c8ae,_0x9272f9){return _0x48c8ae>_0x9272f9;},'BRlrp':function(_0x1328db,_0x20efd4){return _0x1328db>_0x20efd4;},'mUCkQ':function(_0x8593d5,_0x5e5ea6){return _0x8593d5!==_0x5e5ea6;},'XOIVy':function(_0x5da1a1,_0x46de70){return _0x5da1a1>_0x46de70;}},_0x5e8b21=this[_0x5e1d33(0x3ef)](_0x5e11ab),_0x591f25=this['deltaYFrom'](_0x4d62b4);if($gameMap[_0x5e1d33(0x4fe)+_0x5e1d33(0x824)+'ement']()){if(_0x170f1a||this[_0x5e1d33(0x443)+_0x5e1d33(0x6b0)]()){if(_0x466d23['NPmWN'](_0x5e8b21,0x447*-0x7+-0xfa3*0x1+0x2d94)&&_0x466d23['WZyUa'](_0x591f25,0x1a2f*0x1+0x3b*-0x53+-0x1*0x70e))return-0x1698+0x91f+0xd7a;if(_0x466d23[_0x5e1d33(0x946)](_0x5e8b21,-0x1d50+0x91*-0x12+0x2782)&&_0x466d23[_0x5e1d33(0x509)](_0x591f25,0xd85+-0x3*-0x4b9+-0x1bb0))return 0x3*-0x6f4+0x1098+0x447;if(_0x466d23[_0x5e1d33(0x11b)](_0x5e8b21,-0x1*0x1e01+0x2*0x111b+-0x435)&&_0x466d23['mMnpJ'](_0x591f25,0x1*0xadf+0xe*-0x2a5+0x41*0x67))return 0xf33*-0x1+-0x175d+0x1*0x2697;if(_0x466d23[_0x5e1d33(0x97b)](_0x5e8b21,0x1*0x1521+-0xb*0x135+-0x3*0x29e)&&_0x466d23[_0x5e1d33(0x73a)](_0x591f25,0xb81+0x2380+0x15*-0x23d))return-0x1df5*0x1+0xac1+0x1*0x133d;}}if(_0x466d23['BRlrp'](Math[_0x5e1d33(0x90a)](_0x5e8b21),Math['abs'](_0x591f25)))return _0x466d23[_0x5e1d33(0x63f)](_0x5e8b21,-0x8c*0x7+0x55*0x23+0x5*-0x18f)?0x1*-0x1271+-0x11*0x6+0x12db:-0xe04+-0xa1b+0x1825;else{if(_0x466d23[_0x5e1d33(0x6ea)](_0x591f25,-0x1796+0x2e1+0x14b5))return _0x466d23[_0x5e1d33(0x8ea)](_0x591f25,-0x1140+0x20c+-0x7*-0x22c)?0x1c8a+0x713+-0x2395:-0x20*0x5c+-0xe79+0x9*0x2e3;}return 0x43*0x8f+-0x7dc*-0x3+0x17*-0x2a7;},Game_Character[_0x3e3bd2(0x294)]['getDirecti'+_0x3e3bd2(0x5a8)+'t']=function(_0x737ab8,_0x9b6071,_0x3dcbad){const _0x5f4c31=_0x3e3bd2,_0x41fb47={'iygAQ':function(_0x4d2a82,_0x1d0691){return _0x4d2a82>_0x1d0691;},'BWiom':function(_0xc4d504,_0x238f09){return _0xc4d504<_0x238f09;},'gHCwe':function(_0x3d02d3,_0x4766fe){return _0x3d02d3>_0x4766fe;},'gRJNp':function(_0x5bdfb4,_0x35d4ec){return _0x5bdfb4>_0x35d4ec;},'PIXVM':function(_0x230071,_0x531a27){return _0x230071>_0x531a27;},'YxNCh':function(_0x12820b,_0x451bfe){return _0x12820b!==_0x451bfe;},'UzlCH':function(_0x4c889b,_0x54f01c){return _0x4c889b>_0x54f01c;}},_0x45c8a7=this['deltaXFrom'](_0x737ab8),_0x444935=this['deltaYFrom'](_0x9b6071);if($gameMap[_0x5f4c31(0x4fe)+_0x5f4c31(0x824)+_0x5f4c31(0x571)]()){if(_0x3dcbad||this['isSpriteVS'+_0x5f4c31(0x6b0)]()){if(_0x41fb47[_0x5f4c31(0x9cf)](_0x45c8a7,0x13d0+-0x2bf*0x5+-0x615)&&_0x41fb47[_0x5f4c31(0x41d)](_0x444935,-0x19e7+0x10df*0x1+0x908))return-0x1*-0x9a3+-0x16b9+0xd1f*0x1;if(_0x41fb47['BWiom'](_0x45c8a7,0xdce+-0x19*-0x4+-0xe32)&&_0x41fb47[_0x5f4c31(0x41d)](_0x444935,-0x239f*0x1+0x7*-0x26+0x24a9))return-0x180f+0x228f+-0xa79;if(_0x41fb47[_0x5f4c31(0x9cf)](_0x45c8a7,-0x1213+-0xe05+0x2018)&&_0x41fb47[_0x5f4c31(0x9cf)](_0x444935,0x98*-0x5+-0x17*-0x12b+0x7f7*-0x3))return 0x88a*0x2+-0x23e*0xc+0x1*0x9d7;if(_0x41fb47[_0x5f4c31(0x41d)](_0x45c8a7,-0x173a+-0x1*-0x9f+0x3*0x789)&&_0x41fb47[_0x5f4c31(0x809)](_0x444935,0x14dd+-0x28*0xb5+0x9*0xd3))return 0x7*-0x3f8+0xa66+0x1163;}}if(_0x41fb47[_0x5f4c31(0x676)](Math['abs'](_0x45c8a7),Math[_0x5f4c31(0x90a)](_0x444935)))return _0x41fb47['PIXVM'](_0x45c8a7,0xb7*-0x30+-0x1c*0x8+0x2330)?0x23*-0x4d+0x1b7*0xc+0x97*-0x11:0x1*0x5db+-0x5c1+0x16*-0x1;else{if(_0x41fb47['YxNCh'](_0x444935,0xc*0x41+0x1610+0x191c*-0x1))return _0x41fb47[_0x5f4c31(0x69c)](_0x444935,-0x1*0x22d5+-0x17b9+0x3a8e)?-0x15*-0x87+0x41b*0x1+-0xf2c*0x1:0x4ad+0x15*0xcf+-0x15a0;}return-0x2*0xb37+-0xb66+0x21d4;},Game_Character['prototype'][_0x3e3bd2(0x897)+_0x3e3bd2(0x5b8)]=function(_0x25a5b3,_0x5b3cca){const _0x2708d3=_0x3e3bd2,_0x2b72cd=this[_0x2708d3(0x18f)+_0x2708d3(0x949)](_0x25a5b3,_0x5b3cca,!![]);if(_0x2b72cd)this[_0x2708d3(0x741)+'eDir8'](_0x2b72cd);},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x208)+_0x3e3bd2(0x867)]=function(_0x2660ab,_0x52da31){const _0x47cb06=_0x3e3bd2,_0x1b86ed=this[_0x47cb06(0x18f)+'onFromPoin'+'t'](_0x2660ab,_0x52da31,!![]);if(_0x1b86ed)this['executeMov'+_0x47cb06(0x235)](_0x1b86ed);},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0xa01)+_0x3e3bd2(0x5b8)]=function(_0x297ea3,_0x4a89d3){const _0x5d0e9b=_0x3e3bd2,_0x57659f=this[_0x5d0e9b(0x18f)+_0x5d0e9b(0x949)](_0x297ea3,_0x4a89d3,![]);if(_0x57659f)this[_0x5d0e9b(0x5cb)+'on'](_0x57659f);},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x59d)+_0x3e3bd2(0x867)]=function(_0x11fd3d,_0xab3c99){const _0x1097b4=_0x3e3bd2,_0x23b16b=this[_0x1097b4(0x18f)+_0x1097b4(0x5a8)+'t'](_0x11fd3d,_0xab3c99,![]);if(_0x23b16b)this[_0x1097b4(0x5cb)+'on'](_0x23b16b);},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x897)+_0x3e3bd2(0x3e5)]=function(_0x4fa558){const _0x31cb72=_0x3e3bd2;if(_0x4fa558)this['moveToward'+_0x31cb72(0x5b8)](_0x4fa558['x'],_0x4fa558['y']);},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x208)+_0x3e3bd2(0x136)+'r']=function(_0x368d14){const _0x4202cf=_0x3e3bd2;if(_0x368d14)this[_0x4202cf(0x208)+_0x4202cf(0x867)](_0x368d14['x'],_0x368d14['y']);},Game_Character['prototype'][_0x3e3bd2(0xa01)+_0x3e3bd2(0x3e5)]=function(_0x4ca05f){const _0x5b4bdf=_0x3e3bd2;if(_0x4ca05f)this[_0x5b4bdf(0xa01)+_0x5b4bdf(0x5b8)](_0x4ca05f['x'],_0x4ca05f['y']);},Game_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x59d)+_0x3e3bd2(0x136)+'r']=function(_0x4f8041){const _0x2010e7=_0x3e3bd2;if(_0x4f8041)this[_0x2010e7(0x59d)+_0x2010e7(0x867)](_0x4f8041['x'],_0x4f8041['y']);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x28c)+'r_isDashin'+'g']=Game_Player[_0x3e3bd2(0x294)][_0x3e3bd2(0x7ad)],Game_Player[_0x3e3bd2(0x294)][_0x3e3bd2(0x7ad)]=function(){const _0x2d9fc8=_0x3e3bd2;if(!Game_CharacterBase[_0x2d9fc8(0x917)+_0x2d9fc8(0xe8)]&&this[_0x2d9fc8(0x2f9)]())return![];if(this[_0x2d9fc8(0xeb)+_0x2d9fc8(0x1f0)])return!![];return VisuMZ[_0x2d9fc8(0x5eb)+_0x2d9fc8(0x8da)][_0x2d9fc8(0x28c)+_0x2d9fc8(0x6c3)+'g'][_0x2d9fc8(0x3f6)](this);},VisuMZ[_0x3e3bd2(0x5eb)+'Core'][_0x3e3bd2(0x28c)+_0x3e3bd2(0x4c2)+_0x3e3bd2(0x2f8)]=Game_Player['prototype'][_0x3e3bd2(0x10f)+_0x3e3bd2(0x241)],Game_Player[_0x3e3bd2(0x294)][_0x3e3bd2(0x10f)+_0x3e3bd2(0x241)]=function(){const _0x4136ef=_0x3e3bd2;return $gameMap[_0x4136ef(0x4fe)+_0x4136ef(0x824)+'ement']()?this['getInputDi'+'r8']():VisuMZ[_0x4136ef(0x5eb)+_0x4136ef(0x8da)]['Game_Playe'+_0x4136ef(0x4c2)+_0x4136ef(0x2f8)][_0x4136ef(0x3f6)](this);},Game_Player[_0x3e3bd2(0x294)]['getInputDi'+'r8']=function(){const _0x103d19=_0x3e3bd2;return Input[_0x103d19(0x681)];},Game_Player[_0x3e3bd2(0x294)][_0x3e3bd2(0x329)+'t']=function(){const _0x5060ad=_0x3e3bd2,_0x2baed6={'ptWUY':function(_0x49f20a,_0x7a1aad){return _0x49f20a>_0x7a1aad;}};if($gameSystem[_0x5060ad(0x2fb)+'ntrolDisab'+_0x5060ad(0x599)]())return-0x8*-0x4cd+-0x18*-0x172+-0x4918;if(!this['isMoving']()&&this[_0x5060ad(0x38e)]()){let _0x176e37=this[_0x5060ad(0x10f)+_0x5060ad(0x241)]();if(_0x2baed6['ptWUY'](_0x176e37,0x658+0x1*-0x115+-0x3*0x1c1))$gameTemp[_0x5060ad(0x4bb)+_0x5060ad(0x972)]();else{if($gameTemp['isDestinat'+_0x5060ad(0x5af)]()){const _0x1a3b6e=$gameTemp['destinatio'+'nX'](),_0x4e668f=$gameTemp[_0x5060ad(0x310)+'nY']();this[_0x5060ad(0x34a)+_0x5060ad(0x7c9)+'on'](_0x1a3b6e,_0x4e668f)?_0x176e37=this[_0x5060ad(0x774)+_0x5060ad(0x4a4)+'nTo'](_0x1a3b6e,_0x4e668f):_0x176e37=this[_0x5060ad(0x990)+'ionTo'](_0x1a3b6e,_0x4e668f);}}_0x2baed6[_0x5060ad(0x941)](_0x176e37,0x1027+0x8f*0x9+-0x152e*0x1)?(this[_0x5060ad(0x595)]=this[_0x5060ad(0x595)]||0x5*-0x1b1+0x1*0x1091+0x207*-0x4,this[_0x5060ad(0x8e0)+'ace']()?this[_0x5060ad(0x5cb)+'on'](_0x176e37):this[_0x5060ad(0x741)+'e'](_0x176e37),this[_0x5060ad(0x595)]++):this[_0x5060ad(0x595)]=0x3da+-0xc2c*-0x3+-0x285e;}},Game_Player[_0x3e3bd2(0x294)][_0x3e3bd2(0x8e0)+'ace']=function(){const _0x552f90=_0x3e3bd2,_0x47c4d9={'PeAlj':function(_0x59e4a8,_0x5306fa){return _0x59e4a8<_0x5306fa;}},_0x584763=VisuMZ[_0x552f90(0x5eb)+_0x552f90(0x8da)][_0x552f90(0x668)][_0x552f90(0x60e)];if(!_0x584763['EnableTurn'+_0x552f90(0x5cf)])return![];if($gameTemp[_0x552f90(0x8f6)+_0x552f90(0x5af)]())return![];if(this['isDashing']()||this[_0x552f90(0x7c4)]()||this[_0x552f90(0x2f9)]())return![];return _0x47c4d9[_0x552f90(0x8d0)](this[_0x552f90(0x595)],_0x584763['TurnInPlac'+_0x552f90(0x9b2)]);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x28c)+_0x3e3bd2(0x746)+'ove']=Game_Player[_0x3e3bd2(0x294)][_0x3e3bd2(0x741)+'e'],Game_Player[_0x3e3bd2(0x294)][_0x3e3bd2(0x741)+'e']=function(_0x4b45fd){const _0x4cbc64=_0x3e3bd2;$gameMap[_0x4cbc64(0x4fe)+_0x4cbc64(0x824)+_0x4cbc64(0x571)]()?this[_0x4cbc64(0x741)+_0x4cbc64(0x235)](_0x4b45fd):VisuMZ[_0x4cbc64(0x5eb)+_0x4cbc64(0x8da)][_0x4cbc64(0x28c)+_0x4cbc64(0x746)+_0x4cbc64(0x5ac)]['call'](this,_0x4b45fd);},VisuMZ[_0x3e3bd2(0x5eb)+'Core']['Game_Playe'+_0x3e3bd2(0xa08)+'sable']=Game_Player[_0x3e3bd2(0x294)]['isMapPassa'+_0x3e3bd2(0x3ff)],Game_Player[_0x3e3bd2(0x294)][_0x3e3bd2(0x75a)+_0x3e3bd2(0x3ff)]=function(_0x3ef0fb,_0x357cd1,_0x451e93){const _0xe48362=_0x3e3bd2,_0x10584c={'dQbgP':_0xe48362(0x4b6)};if($gameMap['isRegionAl'+_0xe48362(0x829)](_0x3ef0fb,_0x357cd1,_0x451e93,_0x10584c[_0xe48362(0x471)]))return this[_0xe48362(0x7b1)+'e']()&&this[_0xe48362(0x530)]()?this[_0xe48362(0x530)]()[_0xe48362(0x75a)+_0xe48362(0x3ff)](_0x3ef0fb,_0x357cd1,_0x451e93):!![];if($gameMap[_0xe48362(0x9b4)+_0xe48362(0x9b3)](_0x3ef0fb,_0x357cd1,_0x451e93,_0x10584c[_0xe48362(0x471)]))return![];return VisuMZ[_0xe48362(0x5eb)+_0xe48362(0x8da)]['Game_Playe'+_0xe48362(0xa08)+_0xe48362(0x7e4)][_0xe48362(0x3f6)](this,_0x3ef0fb,_0x357cd1,_0x451e93);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x28c)+_0x3e3bd2(0x58e)+_0x3e3bd2(0x9ae)+_0x3e3bd2(0x90e)]=Game_Player[_0x3e3bd2(0x294)]['checkEvent'+_0x3e3bd2(0x1a5)+'e'],Game_Player[_0x3e3bd2(0x294)][_0x3e3bd2(0x37a)+_0x3e3bd2(0x1a5)+'e']=function(_0x3af2e6){const _0x4b924e=_0x3e3bd2,_0x5719c7={'LrWSo':function(_0x29177a,_0x5c1405){return _0x29177a===_0x5c1405;},'mYGgf':'standing'};VisuMZ[_0x4b924e(0x5eb)+'Core'][_0x4b924e(0x28c)+'r_checkEve'+'ntTriggerH'+'ere'][_0x4b924e(0x3f6)](this,_0x3af2e6);if(this[_0x4b924e(0x981)+'calEvents']()){this['checkEvent'+'TriggerEve'+_0x4b924e(0x89b)+'e'](_0x3af2e6);if(_0x3af2e6[_0x4b924e(0x1bf)](0x597+0x2f8+0x88f*-0x1)&&_0x5719c7[_0x4b924e(0x479)](this[_0x4b924e(0x240)+'mmonEventO'+_0x4b924e(0x4b7)](),_0x5719c7[_0x4b924e(0x1c4)]))this[_0x4b924e(0x240)+'mmonEventO'+_0x4b924e(0x43d)](this['x'],this['y']);else(_0x3af2e6[_0x4b924e(0x1bf)](-0x3*0x7e1+0x398*0x1+-0x1*-0x140c)||_0x3af2e6[_0x4b924e(0x1bf)](-0x2304+0x1*-0x161f+0x3925))&&this['startMapCo'+_0x4b924e(0x534)+_0x4b924e(0x67f)]();}},VisuMZ[_0x3e3bd2(0x5eb)+'Core']['Game_Playe'+_0x3e3bd2(0x58e)+_0x3e3bd2(0x834)+_0x3e3bd2(0x660)]=Game_Player[_0x3e3bd2(0x294)][_0x3e3bd2(0x37a)+'TriggerThe'+'re'],Game_Player[_0x3e3bd2(0x294)]['checkEvent'+_0x3e3bd2(0x2c2)+'re']=function(_0x137db3){const _0x4193f7=_0x3e3bd2,_0x57ad2d={'TUqQM':function(_0x44433c,_0x2c9a49){return _0x44433c===_0x2c9a49;},'trEde':_0x4193f7(0x101)};VisuMZ[_0x4193f7(0x5eb)+_0x4193f7(0x8da)][_0x4193f7(0x28c)+'r_checkEve'+_0x4193f7(0x834)+'here'][_0x4193f7(0x3f6)](this,_0x137db3);if(this[_0x4193f7(0x981)+_0x4193f7(0x2ff)]()&&_0x137db3[_0x4193f7(0x1bf)](-0x200b*0x1+0x1519+-0x3*-0x3a6)&&_0x57ad2d[_0x4193f7(0x4d1)](this[_0x4193f7(0x240)+_0x4193f7(0x534)+_0x4193f7(0x4b7)](),_0x57ad2d['trEde'])){const _0x26a7e1=this[_0x4193f7(0x580)](),_0x2df076=$gameMap[_0x4193f7(0x933)+_0x4193f7(0x2f8)](this['x'],_0x26a7e1),_0x33d530=$gameMap['roundYWith'+_0x4193f7(0x2f8)](this['y'],_0x26a7e1);this[_0x4193f7(0x240)+'mmonEventO'+_0x4193f7(0x43d)](_0x2df076,_0x33d530);}},Game_Player[_0x3e3bd2(0x294)][_0x3e3bd2(0x37a)+_0x3e3bd2(0x202)+_0x3e3bd2(0x89b)+'e']=function(_0x4b849b){const _0x224d7a=_0x3e3bd2;if($gameMap['isEventRun'+'ning']())return;if($gameMap[_0x224d7a(0x277)+_0x224d7a(0x2e7)]())return;const _0xdea7ba=$gameMap['events']();for(const _0x46179a of _0xdea7ba){if(!_0x46179a)continue;if(!_0x46179a[_0x224d7a(0x857)+'n'](_0x4b849b))continue;if(this['meetActiva'+'tionRegion'+_0x224d7a(0x950)](_0x46179a))return _0x46179a[_0x224d7a(0x4e2)]();if(this[_0x224d7a(0x410)+'tionProxim'+'ityConditi'+'ons'](_0x46179a))return _0x46179a[_0x224d7a(0x4e2)]();}},Game_Player[_0x3e3bd2(0x294)]['meetActiva'+_0x3e3bd2(0x258)+_0x3e3bd2(0x950)]=function(_0x5e1ec1){const _0x4bf92a=_0x3e3bd2;if($gameMap[_0x4bf92a(0x935)+_0x4bf92a(0x48a)]())return![];if($gameMap[_0x4bf92a(0x277)+_0x4bf92a(0x2e7)]())return![];return _0x5e1ec1[_0x4bf92a(0x680)+_0x4bf92a(0x727)]()['includes'](this['regionId']());},Game_Player[_0x3e3bd2(0x294)][_0x3e3bd2(0x410)+_0x3e3bd2(0xa19)+_0x3e3bd2(0x31d)+_0x3e3bd2(0x19d)]=function(_0x4404c3){const _0x3f60a9=_0x3e3bd2,_0x2ef725={'ookSh':'none','nTODj':'region'};if($gameMap[_0x3f60a9(0x935)+'ning']())return![];if($gameMap['isAnyEvent'+_0x3f60a9(0x2e7)]())return![];if([_0x2ef725['ookSh'],_0x2ef725[_0x3f60a9(0x22a)]][_0x3f60a9(0x1bf)](_0x4404c3[_0x3f60a9(0x680)+_0x3f60a9(0x4aa)+'ype']()))return![];const _0x5f57b8=_0x4404c3[_0x3f60a9(0x680)+_0x3f60a9(0x4aa)+'ype'](),_0x42fcdf=_0x4404c3[_0x3f60a9(0x680)+_0x3f60a9(0x3db)+_0x3f60a9(0x13e)]();return this[_0x3f60a9(0x37a)+_0x3f60a9(0x46d)](_0x4404c3,_0x5f57b8,_0x42fcdf);},Game_Map['prototype']['checkEvent'+_0x3e3bd2(0x46d)]=function(_0x49cd5b,_0x13926a,_0x2e06fd,_0x5cad5e,_0x2983af){const _0x2bbd5e=_0x3e3bd2,_0x5e8c3a={'hUPAm':'square','BmVDs':function(_0x4498a8,_0x509153){return _0x4498a8>=_0x509153;},'xwrmi':_0x2bbd5e(0x5db),'HvWJb':function(_0x4ab42c,_0x3b0c3e){return _0x4ab42c-_0x3b0c3e;},'ShWIN':function(_0x210d5a,_0x20c413){return _0x210d5a>=_0x20c413;},'JUtTI':function(_0x336e88,_0x5e451c){return _0x336e88+_0x5e451c;},'kuPQV':_0x2bbd5e(0x816),'JkcBi':'delta','mTSOc':function(_0x457b27,_0x3f560e){return _0x457b27>=_0x3f560e;},'HLkeu':_0x2bbd5e(0x728),'ORNow':_0x2bbd5e(0x655)};switch(_0x5cad5e){case _0x5e8c3a[_0x2bbd5e(0x664)]:return _0x5e8c3a[_0x2bbd5e(0x36a)](_0x2983af,Math[_0x2bbd5e(0x90a)](_0x2e06fd[_0x2bbd5e(0x3ef)](_0x49cd5b)))&&_0x5e8c3a[_0x2bbd5e(0x36a)](_0x2983af,Math[_0x2bbd5e(0x90a)](_0x2e06fd[_0x2bbd5e(0x411)](_0x13926a)));break;case _0x5e8c3a['xwrmi']:const _0x560f34=Math[_0x2bbd5e(0x264)](_0x5e8c3a['HvWJb'](_0x2e06fd['x'],_0x49cd5b),-0xa8f+0x1b*0x161+-0x1aaa),_0x7cf44d=Math['pow'](_0x5e8c3a[_0x2bbd5e(0x1f9)](_0x2e06fd['y'],_0x13926a),0x2cd+0x1e56+0x2121*-0x1);return _0x5e8c3a['ShWIN'](_0x2983af,Math[_0x2bbd5e(0x1f4)](Math[_0x2bbd5e(0x404)](_0x5e8c3a[_0x2bbd5e(0x3b2)](_0x560f34,_0x7cf44d))));break;case _0x5e8c3a[_0x2bbd5e(0x4be)]:case _0x5e8c3a[_0x2bbd5e(0x1de)]:const _0xa08c40=$gameMap[_0x2bbd5e(0x6d8)](_0x49cd5b,_0x13926a,_0x2e06fd['x'],_0x2e06fd['y']);return _0x5e8c3a[_0x2bbd5e(0x5ea)](_0x2e06fd[_0x2bbd5e(0x680)+_0x2bbd5e(0x3db)+_0x2bbd5e(0x13e)](),_0xa08c40);break;case _0x5e8c3a[_0x2bbd5e(0x7a4)]:return _0x5e8c3a['mTSOc'](_0x2983af,Math[_0x2bbd5e(0x90a)](_0x2e06fd[_0x2bbd5e(0x411)](_0x13926a)));break;case _0x5e8c3a[_0x2bbd5e(0x6cf)]:return _0x5e8c3a[_0x2bbd5e(0x2b4)](_0x2983af,Math['abs'](_0x2e06fd[_0x2bbd5e(0x3ef)](_0x49cd5b)));break;}return![];},Game_Player[_0x3e3bd2(0x294)][_0x3e3bd2(0x37a)+'Proximity']=function(_0x1d0e81,_0x515896,_0x5acfd4){const _0x2a27b6=_0x3e3bd2,_0x40f3d9=this['x'],_0x470d2a=this['y'];return $gameMap['checkEvent'+_0x2a27b6(0x46d)](_0x40f3d9,_0x470d2a,_0x1d0e81,_0x515896,_0x5acfd4);},Game_Player[_0x3e3bd2(0x294)][_0x3e3bd2(0x240)+_0x3e3bd2(0x534)+_0x3e3bd2(0x43d)]=function(_0x45f96b,_0x28579b){const _0x473980=_0x3e3bd2,_0x25d2fe={'YHArX':_0x473980(0x2e8)};if($gameMap[_0x473980(0x935)+_0x473980(0x48a)]())return;if($gameMap[_0x473980(0x277)+_0x473980(0x2e7)]())return;let _0x494ae7=VisuMZ['EventsMove'+_0x473980(0x8da)][_0x473980(0x668)][_0x473980(0x232)],_0x22f2b9=$gameMap['regionId'](_0x45f96b,_0x28579b);const _0x13c7e7=_0x25d2fe[_0x473980(0x2ac)]['format'](_0x22f2b9);_0x494ae7[_0x13c7e7]&&$gameTemp['reserveCom'+_0x473980(0x77b)](_0x494ae7[_0x13c7e7]);},Game_Player[_0x3e3bd2(0x294)][_0x3e3bd2(0x240)+_0x3e3bd2(0x534)+_0x3e3bd2(0x4b7)]=function(){const _0x2d8a02=_0x3e3bd2;return VisuMZ[_0x2d8a02(0x5eb)+_0x2d8a02(0x8da)][_0x2d8a02(0x668)][_0x2d8a02(0x68c)+'rget'];},Game_Player[_0x3e3bd2(0x294)][_0x3e3bd2(0x240)+'mmonEventO'+_0x3e3bd2(0x67f)]=function(){const _0x41cb6f=_0x3e3bd2,_0x47952b={'ZEsVD':'Region%1'};if($gameMap[_0x41cb6f(0x935)+_0x41cb6f(0x48a)]())return;if($gameMap['isAnyEvent'+'Starting']())return;let _0xfb618=VisuMZ['EventsMove'+'Core'][_0x41cb6f(0x668)]['RegionTouc'+'h'];const _0x3eccc3=_0x47952b[_0x41cb6f(0x31f)][_0x41cb6f(0x96d)](this[_0x41cb6f(0x785)]());_0xfb618[_0x3eccc3]&&$gameTemp[_0x41cb6f(0x4f9)+_0x41cb6f(0x77b)](_0xfb618[_0x3eccc3]);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x28c)+_0x3e3bd2(0x3c8)+_0x3e3bd2(0x60d)]=Game_Player['prototype'][_0x3e3bd2(0x866)+_0x3e3bd2(0x968)],Game_Player[_0x3e3bd2(0x294)]['increaseSt'+_0x3e3bd2(0x968)]=function(){const _0x107d0c=_0x3e3bd2;VisuMZ['EventsMove'+'Core'][_0x107d0c(0x28c)+'r_increase'+_0x107d0c(0x60d)][_0x107d0c(0x3f6)](this),VisuMZ[_0x107d0c(0x3a0)+_0x107d0c(0xea)](0xc66+0x1f7c+-0x52*0x89);},Game_Player[_0x3e3bd2(0x294)][_0x3e3bd2(0x531)+'SynchDirec'+_0x3e3bd2(0x6f3)]=function(){const _0x530e82=_0x3e3bd2;VisuMZ[_0x530e82(0x1b7)+'llSynchTar'+_0x530e82(0x46b)](0x3d*0x50+-0x17c3+0x4b3);},VisuMZ[_0x3e3bd2(0x5eb)+'Core']['Game_Follo'+'wer_initia'+_0x3e3bd2(0x7f2)]=Game_Follower[_0x3e3bd2(0x294)][_0x3e3bd2(0x386)],Game_Follower['prototype']['initialize']=function(_0x770b45){const _0x2366a5=_0x3e3bd2;VisuMZ['EventsMove'+_0x2366a5(0x8da)]['Game_Follo'+_0x2366a5(0x1ff)+_0x2366a5(0x7f2)][_0x2366a5(0x3f6)](this,_0x770b45),this[_0x2366a5(0x786)]=![];},Game_Follower['prototype'][_0x3e3bd2(0x7ad)]=function(){const _0x212394=_0x3e3bd2;if(this['_chaseOff'])return Game_Character[_0x212394(0x294)][_0x212394(0x7ad)][_0x212394(0x3f6)](this);return $gamePlayer[_0x212394(0x7ad)]();},Game_Follower[_0x3e3bd2(0x294)][_0x3e3bd2(0x26d)+_0x3e3bd2(0xa26)]=function(){const _0xea5807=_0x3e3bd2;if(this[_0xea5807(0x786)])return Game_Character[_0xea5807(0x294)]['isDashingA'+'ndMoving'][_0xea5807(0x3f6)](this);return $gamePlayer['isDashingA'+'ndMoving']()&&this['_actuallyM'+_0xea5807(0x2f1)];},Game_Follower[_0x3e3bd2(0x294)]['realMoveSp'+_0x3e3bd2(0x461)]=function(){return $gamePlayer['realMoveSp'+'eed']();},Game_Follower[_0x3e3bd2(0x294)]['updateStop']=function(){const _0x31ba9f=_0x3e3bd2,_0x1f81e6={'cJAub':function(_0x56e484,_0x474112){return _0x56e484>_0x474112;}};Game_Character[_0x31ba9f(0x294)]['updateStop'][_0x31ba9f(0x3f6)](this),_0x1f81e6[_0x31ba9f(0x20b)](this[_0x31ba9f(0x5f1)],-0x1*-0x599+-0x1*0x1a65+0x2c*0x79)&&(this[_0x31ba9f(0x5b0)+_0x31ba9f(0x2f1)]=![]);},Game_Follower[_0x3e3bd2(0x294)][_0x3e3bd2(0x39d)+'f']=function(_0x47d1b4){this['_chaseOff']=_0x47d1b4;},VisuMZ['EventsMove'+_0x3e3bd2(0x8da)][_0x3e3bd2(0x61c)+_0x3e3bd2(0x20d)+_0x3e3bd2(0x6cd)]=Game_Follower[_0x3e3bd2(0x294)][_0x3e3bd2(0x642)+_0x3e3bd2(0x845)],Game_Follower[_0x3e3bd2(0x294)][_0x3e3bd2(0x642)+_0x3e3bd2(0x845)]=function(_0x30f818){const _0x10e711=_0x3e3bd2;if(this[_0x10e711(0x786)])return;if($gameSystem['isStopFoll'+_0x10e711(0x18d)+'g']())return;VisuMZ[_0x10e711(0x5eb)+'Core'][_0x10e711(0x61c)+_0x10e711(0x20d)+_0x10e711(0x6cd)][_0x10e711(0x3f6)](this,_0x30f818),this[_0x10e711(0x5b0)+'oving']=!![];},VisuMZ['EventsMove'+_0x3e3bd2(0x8da)][_0x3e3bd2(0x18c)+_0x3e3bd2(0x104)+_0x3e3bd2(0x5dc)]=Game_Vehicle[_0x3e3bd2(0x294)][_0x3e3bd2(0x75a)+_0x3e3bd2(0x3ff)],Game_Vehicle[_0x3e3bd2(0x294)][_0x3e3bd2(0x75a)+_0x3e3bd2(0x3ff)]=function(_0xbc53db,_0x3e7eb5,_0x4d893d){const _0x13764d=_0x3e3bd2;if($gameMap['isRegionAl'+_0x13764d(0x829)](_0xbc53db,_0x3e7eb5,_0x4d893d,this[_0x13764d(0x497)]))return!![];if($gameMap[_0x13764d(0x9b4)+_0x13764d(0x9b3)](_0xbc53db,_0x3e7eb5,_0x4d893d,this[_0x13764d(0x497)]))return![];return VisuMZ['EventsMove'+'Core'][_0x13764d(0x18c)+'le_isMapPa'+_0x13764d(0x5dc)][_0x13764d(0x3f6)](this,_0xbc53db,_0x3e7eb5,_0x4d893d);},Game_Vehicle[_0x3e3bd2(0x294)][_0x3e3bd2(0x9f8)+_0x3e3bd2(0x1ef)]=function(_0x4c9e00,_0x3c29c6,_0x4c68c2){const _0x3412e5=_0x3e3bd2;if($gameMap[_0x3412e5(0x78d)+'lowPass'](_0x4c9e00,_0x3c29c6,_0x4c68c2,this[_0x3412e5(0x497)]))return!![];if($gameMap[_0x3412e5(0x9b4)+_0x3412e5(0x9b3)](_0x4c9e00,_0x3c29c6,_0x4c68c2,this['_type']))return![];return VisuMZ[_0x3412e5(0x5eb)+_0x3412e5(0x8da)][_0x3412e5(0x675)+_0x3412e5(0x9ba)+_0x3412e5(0x349)]['call']($gamePlayer,_0x4c9e00,_0x3c29c6,_0x4c68c2);},VisuMZ['EventsMove'+'Core'][_0x3e3bd2(0x18c)+'le_isLandO'+'k']=Game_Vehicle['prototype'][_0x3e3bd2(0x896)],Game_Vehicle[_0x3e3bd2(0x294)][_0x3e3bd2(0x896)]=function(_0x1f1218,_0x5e6e02,_0x47e644){const _0x3c9b78=_0x3e3bd2,_0x3b1bbe={'zIbrB':function(_0x3a5d78,_0x4fa528){return _0x3a5d78+_0x4fa528;},'ynqwQ':_0x3c9b78(0x798)+_0x3c9b78(0x776)};if($gameMap[_0x3c9b78(0x15c)+'ckable'](_0x1f1218,_0x5e6e02,_0x47e644,this[_0x3c9b78(0x497)]))return!![];const _0x15772f=_0x3b1bbe[_0x3c9b78(0x7cd)](this[_0x3c9b78(0x497)][_0x3c9b78(0x8a5)](0x23a1+-0x5*-0x62b+-0x4278)['toUpperCas'+'e'](),this[_0x3c9b78(0x497)]['slice'](0x119f+0x22e5*-0x1+0x1147)),_0x4f817d=_0x3b1bbe[_0x3c9b78(0x901)][_0x3c9b78(0x96d)](_0x15772f);return VisuMZ['EventsMove'+'Core'][_0x3c9b78(0x668)][_0x3c9b78(0x905)][_0x4f817d]?![]:VisuMZ[_0x3c9b78(0x5eb)+_0x3c9b78(0x8da)][_0x3c9b78(0x18c)+_0x3c9b78(0x434)+'k'][_0x3c9b78(0x3f6)](this,_0x1f1218,_0x5e6e02,_0x47e644);},VisuMZ[_0x3e3bd2(0x5eb)+'Core'][_0x3e3bd2(0x18c)+_0x3e3bd2(0x25b)+_0x3e3bd2(0x96a)]=Game_Vehicle[_0x3e3bd2(0x294)][_0x3e3bd2(0x64a)+_0x3e3bd2(0x461)],Game_Vehicle[_0x3e3bd2(0x294)]['initMoveSp'+_0x3e3bd2(0x461)]=function(){const _0x12aff3=_0x3e3bd2;VisuMZ['EventsMove'+_0x12aff3(0x8da)][_0x12aff3(0x18c)+_0x12aff3(0x25b)+_0x12aff3(0x96a)][_0x12aff3(0x3f6)](this);const _0x4f62bc=VisuMZ[_0x12aff3(0x5eb)+_0x12aff3(0x8da)][_0x12aff3(0x668)]['Movement'];if(this[_0x12aff3(0x607)]()){if(_0x4f62bc[_0x12aff3(0x4f3)])this[_0x12aff3(0x224)+'ed'](_0x4f62bc[_0x12aff3(0x4f3)]);}else{if(this[_0x12aff3(0x934)]()){if(_0x4f62bc[_0x12aff3(0x704)])this['setMoveSpe'+'ed'](_0x4f62bc[_0x12aff3(0x704)]);}else{if(this[_0x12aff3(0x5ab)]()){if(_0x4f62bc[_0x12aff3(0x79f)+'ed'])this[_0x12aff3(0x224)+'ed'](_0x4f62bc[_0x12aff3(0x79f)+'ed']);}}}},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x879)+_0x3e3bd2(0x5a7)+'e']=Game_Event[_0x3e3bd2(0x294)]['initialize'],Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x386)]=function(_0x2148ef,_0xff0710){const _0x1c9b37=_0x3e3bd2;VisuMZ[_0x1c9b37(0x5eb)+_0x1c9b37(0x8da)][_0x1c9b37(0x879)+_0x1c9b37(0x5a7)+'e'][_0x1c9b37(0x3f6)](this,_0x2148ef,_0xff0710),this[_0x1c9b37(0x499)+_0x1c9b37(0x413)](),this[_0x1c9b37(0x3e2)+_0x1c9b37(0x6ff)](),this[_0x1c9b37(0x8fd)+_0x1c9b37(0x283)+_0x1c9b37(0x720)]();},Game_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x71c)]=function(_0x1ec10b,_0x4de976){const _0x532143=_0x3e3bd2,_0xc2cd5e={'vGKCo':function(_0x2dcc01,_0x41b1aa){return _0x2dcc01===_0x41b1aa;}};return _0xc2cd5e[_0x532143(0x6e2)](_0x1ec10b,$gameMap[_0x532143(0x9ec)]())?$dataMap[_0x532143(0x79a)][_0x4de976]:VisuMZ[_0x532143(0x41f)+_0x532143(0x747)][_0x1ec10b][_0x532143(0x79a)][_0x4de976];},VisuMZ['EventsMove'+'Core'][_0x3e3bd2(0x879)+_0x3e3bd2(0x93a)]=Game_Event[_0x3e3bd2(0x294)]['event'],Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x620)]=function(){const _0x445647=_0x3e3bd2,_0x4ddb71={'kdzfi':function(_0x18c241,_0x1341dc){return _0x18c241!==_0x1341dc;}};if(_0x4ddb71[_0x445647(0x57d)](this[_0x445647(0x3b4)+_0x445647(0x9d3)],undefined)){const _0x29f9c7=this[_0x445647(0x3b4)+_0x445647(0x9d3)][_0x445647(0x9ec)],_0x4d40fe=this[_0x445647(0x3b4)+_0x445647(0x9d3)][_0x445647(0x363)];return $gameMap[_0x445647(0x71c)](_0x29f9c7,_0x4d40fe);}if(_0x4ddb71[_0x445647(0x57d)](this['_eventCopy'+'Data'],undefined)){const _0x33d03e=this[_0x445647(0x452)+_0x445647(0x886)][_0x445647(0x9ec)],_0x14645b=this[_0x445647(0x452)+_0x445647(0x886)][_0x445647(0x363)];return $gameMap[_0x445647(0x71c)](_0x33d03e,_0x14645b);}if(_0x4ddb71[_0x445647(0x57d)](this[_0x445647(0x899)+_0x445647(0x69e)],undefined)){const _0x2f243d=this[_0x445647(0x899)+_0x445647(0x69e)]['mapId'],_0x2ba7a1=this[_0x445647(0x899)+_0x445647(0x69e)][_0x445647(0x363)];return $gameMap[_0x445647(0x71c)](_0x2f243d,_0x2ba7a1);}if(_0x4ddb71[_0x445647(0x57d)]($gameTemp[_0x445647(0x112)],undefined)){const _0x5d21a8=$gameTemp[_0x445647(0x112)][_0x445647(0x9ec)],_0x254343=$gameTemp[_0x445647(0x112)][_0x445647(0x363)];return $gameMap[_0x445647(0x71c)](_0x5d21a8,_0x254343);}return VisuMZ[_0x445647(0x5eb)+_0x445647(0x8da)][_0x445647(0x879)+_0x445647(0x93a)][_0x445647(0x3f6)](this);},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x4de)+_0x3e3bd2(0x805)]=function(_0x5c1e75,_0x1622f9){const _0x3f1934=_0x3e3bd2,_0x36df58={'BJZhL':function(_0x546be1,_0x5b83ef){return _0x546be1===_0x5b83ef;},'LRcgs':function(_0x1cf4f6,_0x3abc0d){return _0x1cf4f6===_0x3abc0d;},'vLYZe':function(_0x2b7ffa,_0x3a9da5){return _0x2b7ffa!==_0x3a9da5;},'kvahD':'ERROR:\x20Map'+_0x3f1934(0x325)+'t\x20been\x20pre'+_0x3f1934(0x793)+'\x20remove\x20us'+_0x3f1934(0x426)};if(_0x36df58[_0x3f1934(0x35b)](_0x5c1e75,-0x13a6+0x22e2+-0xf3c)||_0x36df58['LRcgs'](_0x1622f9,-0x169*-0x10+0x1e6e+-0x34fe))return![];if(_0x36df58['LRcgs'](_0x5c1e75,$gameMap[_0x3f1934(0x9ec)]()))return!![];if(!VisuMZ[_0x3f1934(0x41f)+_0x3f1934(0x747)][_0x5c1e75]&&_0x36df58['vLYZe'](_0x5c1e75,$gameMap[_0x3f1934(0x9ec)]()))return $gameTemp['isPlaytest']()&&console[_0x3f1934(0x8fa)](_0x36df58['kvahD'][_0x3f1934(0x96d)](_0x5c1e75)),![];return!![];},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x879)+_0x3e3bd2(0x155)]=Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x4e2)],Game_Event[_0x3e3bd2(0x294)]['start']=function(){const _0x22e1bd=_0x3e3bd2;VisuMZ['EventsMove'+_0x22e1bd(0x8da)][_0x22e1bd(0x879)+_0x22e1bd(0x155)][_0x22e1bd(0x3f6)](this),Imported[_0x22e1bd(0x2cd)+_0x22e1bd(0x4d5)]&&Input['isPressed'](VisuMZ[_0x22e1bd(0x9f6)+'e'][_0x22e1bd(0x668)][_0x22e1bd(0x5fd)]['FastForwar'+'dKey'])&&Input[_0x22e1bd(0x217)]();},Game_Event['prototype'][_0x3e3bd2(0x499)+_0x3e3bd2(0x413)]=function(){const _0x24d839=_0x3e3bd2,_0x54c58f={'tJtbr':function(_0x4b65bd,_0x45d964){return _0x4b65bd===_0x45d964;},'RzfwC':function(_0x4f3e55,_0x3aac80){return _0x4f3e55(_0x3aac80);},'hvRFP':function(_0x422ead,_0x190c7d){return _0x422ead(_0x190c7d);},'xswyn':function(_0x2a30b7,_0x3f4d42){return _0x2a30b7===_0x3f4d42;},'gyNZl':function(_0x362eb9,_0x41eb53){return _0x362eb9(_0x41eb53);},'ZVzQb':function(_0x34a6d1,_0x5a34a7){return _0x34a6d1===_0x5a34a7;},'swmOa':function(_0x170ce2,_0x2f29fe){return _0x170ce2(_0x2f29fe);}},_0x37fec9=this[_0x24d839(0x620)]()['note'];if(_0x54c58f['tJtbr'](_0x37fec9,''))return;if(DataManager[_0x24d839(0x481)+'st']()||DataManager[_0x24d839(0x7be)+'t']())return;const _0x1392fc=VisuMZ[_0x24d839(0x5eb)+_0x24d839(0x8da)][_0x24d839(0x668)][_0x24d839(0x34c)];let _0x360b30=null,_0x26f453=0x14c0+-0x40*0x83+0xc00,_0x5e3216=0x1c1d+-0xbed+-0x1030;if(_0x37fec9[_0x24d839(0x848)](/<COPY EVENT:[ ]MAP[ ](\d+),[ ]EVENT[ ](\d+)>/i)){_0x26f453=_0x54c58f[_0x24d839(0x2d3)](Number,RegExp['$1']),_0x5e3216=_0x54c58f['hvRFP'](Number,RegExp['$2']);if(_0x54c58f[_0x24d839(0x62f)](_0x26f453,0x4d5*-0x3+0x13cf*0x1+-0x550))_0x26f453=$gameMap[_0x24d839(0x9ec)]();}else{if(_0x37fec9[_0x24d839(0x848)](/<COPY EVENT:[ ](\d+),[ ](\d+)>/i)){_0x26f453=_0x54c58f[_0x24d839(0x2d3)](Number,RegExp['$1']),_0x5e3216=_0x54c58f[_0x24d839(0x613)](Number,RegExp['$2']);if(_0x54c58f[_0x24d839(0x96f)](_0x26f453,-0x2*0xe8a+-0x381+0x2095))_0x26f453=$gameMap[_0x24d839(0x9ec)]();}else{if(_0x37fec9['match'](/<COPY EVENT:[ ](.*?)>/i)){const _0x137948=_0x54c58f['swmOa'](String,RegExp['$1'])[_0x24d839(0x936)+'e']()[_0x24d839(0x66f)]();_0x360b30=VisuMZ[_0x24d839(0x8cf)+_0x24d839(0x3d3)][_0x137948];if(!_0x360b30)return;_0x26f453=_0x360b30[_0x24d839(0x881)],_0x5e3216=_0x360b30['EventID'];}}}if(!this['checkValid'+_0x24d839(0x805)](_0x26f453,_0x5e3216))return;_0x1392fc[_0x24d839(0x6d0)][_0x24d839(0x3f6)](this,_0x26f453,_0x5e3216,this);if(_0x360b30)_0x360b30[_0x24d839(0x6d0)][_0x24d839(0x3f6)](this,_0x26f453,_0x5e3216,this);this[_0x24d839(0x452)+'Data']={'mapId':_0x26f453,'eventId':_0x5e3216},this[_0x24d839(0x89c)]=-(-0x1121*-0x1+-0x1785+0x3*0x222),this[_0x24d839(0x90b)](),_0x1392fc[_0x24d839(0x912)][_0x24d839(0x3f6)](this,_0x26f453,_0x5e3216,this);if(_0x360b30)_0x360b30[_0x24d839(0x912)][_0x24d839(0x3f6)](this,_0x26f453,_0x5e3216,this);$gameMap['clearEvent'+_0x24d839(0x769)]();},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x3e2)+'Event']=function(){const _0x32ad15=_0x3e3bd2,_0x36e2d7={'GxWcX':function(_0x20e04b,_0xfce352){return _0x20e04b!==_0xfce352;},'PJLic':_0x32ad15(0x8af)},_0x1e6bb6=$gameSystem[_0x32ad15(0x92d)+_0x32ad15(0x649)+_0x32ad15(0x9f7)](this);if(!_0x1e6bb6)return;const _0x2dc8b4=_0x1e6bb6[_0x32ad15(0x1d1)][_0x32ad15(0x936)+'e']()[_0x32ad15(0x66f)]();_0x36e2d7[_0x32ad15(0x76e)](_0x2dc8b4,_0x36e2d7['PJLic'])?this[_0x32ad15(0x103)+_0x32ad15(0x753)](_0x2dc8b4,!![]):this[_0x32ad15(0x820)](_0x1e6bb6[_0x32ad15(0x9ec)],_0x1e6bb6[_0x32ad15(0x363)],!![]);},Game_Event['prototype']['morphInto']=function(_0x6329cc,_0x22c39e,_0x22690d){const _0x50b9e8=_0x3e3bd2;if(!this[_0x50b9e8(0x4de)+_0x50b9e8(0x805)](_0x6329cc,_0x22c39e))return;const _0x25714f=VisuMZ[_0x50b9e8(0x5eb)+_0x50b9e8(0x8da)][_0x50b9e8(0x668)][_0x50b9e8(0x34c)];if(!_0x22690d)_0x25714f[_0x50b9e8(0x373)][_0x50b9e8(0x3f6)](this,_0x6329cc,_0x22c39e,this);this[_0x50b9e8(0x3b4)+_0x50b9e8(0x9d3)]={'mapId':_0x6329cc,'eventId':_0x22c39e},this[_0x50b9e8(0x89c)]=-(0x5*-0x63+-0xd*-0x2f2+-0x2459),this[_0x50b9e8(0x90b)]();if(!_0x22690d)_0x25714f[_0x50b9e8(0x1f8)+'S'][_0x50b9e8(0x3f6)](this,_0x6329cc,_0x22c39e,this);$gameMap[_0x50b9e8(0x4a8)+'Cache']();},Game_Event[_0x3e3bd2(0x294)]['morphIntoT'+_0x3e3bd2(0x753)]=function(_0x1a2d44,_0x1e1f86){const _0x1670e4=_0x3e3bd2;_0x1a2d44=_0x1a2d44['toUpperCas'+'e']()['trim']();const _0xabd13d=VisuMZ['EventTempl'+'ates'][_0x1a2d44];if(!_0xabd13d)return;const _0x250b26=_0xabd13d[_0x1670e4(0x881)],_0x833d9e=_0xabd13d[_0x1670e4(0x6e3)];if(!this['checkValid'+_0x1670e4(0x805)](_0x250b26,_0x833d9e))return;if(!_0x1e1f86)_0xabd13d[_0x1670e4(0x373)][_0x1670e4(0x3f6)](this,_0x250b26,_0x833d9e,this);this['morphInto'](_0x250b26,_0x833d9e,_0x1e1f86);if(!_0x1e1f86)_0xabd13d[_0x1670e4(0x1f8)+'S'][_0x1670e4(0x3f6)](this,_0x250b26,_0x833d9e,this);if($gameMap)$gameMap[_0x1670e4(0x4a8)+'Cache']();},Game_Event[_0x3e3bd2(0x294)]['removeMorp'+'h']=function(){const _0x4c3d20=_0x3e3bd2;this[_0x4c3d20(0x3b4)+_0x4c3d20(0x9d3)]=undefined,this['_pageIndex']=-(0x100*-0x4+0x1300+-0xefe),this[_0x4c3d20(0x90b)]();},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x282)]=function(_0x965a76){const _0x580191=_0x3e3bd2,_0x39c38e={'SoKrN':_0x580191(0x8af)},_0x4da8d5=VisuMZ[_0x580191(0x5eb)+_0x580191(0x8da)][_0x580191(0x668)][_0x580191(0x34c)],_0x191ec1=_0x965a76[_0x580191(0x1d1)][_0x580191(0x936)+'e']()[_0x580191(0x66f)](),_0x3f8e40=!['',_0x39c38e[_0x580191(0x40a)]]['includes'](_0x191ec1);let _0x1a0791=0x1f1b*-0x1+-0x1190+0x1*0x30ab,_0x5d855b=0x1*0x144b+0x2228+-0x35*0x107;if(_0x3f8e40){const _0x5856c6=VisuMZ[_0x580191(0x8cf)+'ates'][_0x191ec1];if(!_0x5856c6)return;_0x1a0791=_0x5856c6['MapID'],_0x5d855b=_0x5856c6[_0x580191(0x6e3)];}else _0x1a0791=_0x965a76[_0x580191(0x9ec)],_0x5d855b=_0x965a76[_0x580191(0x363)];if(!this[_0x580191(0x4de)+_0x580191(0x805)](_0x1a0791,_0x5d855b))return;if(_0x3f8e40){const _0x2a201f=VisuMZ[_0x580191(0x8cf)+_0x580191(0x3d3)][_0x191ec1];_0x2a201f[_0x580191(0x8c9)][_0x580191(0x3f6)](this,_0x1a0791,_0x5d855b,this);}_0x4da8d5[_0x580191(0x8c9)][_0x580191(0x3f6)](this,_0x1a0791,_0x5d855b,this),this[_0x580191(0x899)+_0x580191(0x69e)]=_0x965a76,this[_0x580191(0x89c)]=-(-0x18bf+-0x7*-0x275+0x78e),this[_0x580191(0x44a)]=$gameMap[_0x580191(0x9ec)](),this['_eventId']=_0x965a76[_0x580191(0x152)+'Id'],this[_0x580191(0x345)+_0x580191(0x7cc)]=_0x965a76[_0x580191(0x105)+_0x580191(0x921)],this[_0x580191(0x3b7)](_0x965a76['x'],_0x965a76['y']),this[_0x580191(0x5cb)+'on'](_0x965a76['direction']),this[_0x580191(0x90b)]();if(_0x3f8e40){const _0x18a674=VisuMZ[_0x580191(0x8cf)+_0x580191(0x3d3)][_0x191ec1];if(!_0x18a674)return;_0x18a674[_0x580191(0x17c)+'S'][_0x580191(0x3f6)](this,_0x1a0791,_0x5d855b,this);}_0x4da8d5[_0x580191(0x17c)+'S'][_0x580191(0x3f6)](this,_0x1a0791,_0x5d855b,this);const _0x340bd8=SceneManager[_0x580191(0x870)];if(_0x340bd8&&_0x340bd8[_0x580191(0x2c3)])_0x340bd8['_spriteset'][_0x580191(0x1c9)+_0x580191(0x382)](this);},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x64d)+'vent']=function(){const _0x36c348=_0x3e3bd2;return!!this['_eventSpaw'+_0x36c348(0x69e)];},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x4e2)]=function(){const _0x9de37f=_0x3e3bd2,_0x53a60d={'ttCqV':function(_0x4193df,_0x196814){return _0x4193df>_0x196814;}};if(!this[_0x9de37f(0x5f0)]())return;const _0x35172d=this[_0x9de37f(0x5f0)]()['filter'](_0x1b59b8=>_0x1b59b8[_0x9de37f(0x377)]!==0xd*0x15c+-0x1*0x175b+0x209*0x3&&_0x1b59b8['code']!==0x202*-0xe+-0x25b2+0x4366);_0x53a60d[_0x9de37f(0x493)](_0x35172d[_0x9de37f(0x3cf)],-0x1bd*0xf+0x2181+-0x76d)&&(this[_0x9de37f(0x16c)]=!![],this[_0x9de37f(0x857)+'n']([0x2e*0x7+-0x1a*0xe5+0x1600,-0xcce+0x853+0x47c,-0x2444+-0x1255+0x369b])&&this[_0x9de37f(0x2ef)]());},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x879)+_0x3e3bd2(0x76d)+_0x3e3bd2(0x668)]=Game_Event[_0x3e3bd2(0x294)]['clearPageS'+_0x3e3bd2(0x21c)],Game_Event['prototype']['clearPageS'+'ettings']=function(){const _0x2ff51b=_0x3e3bd2;VisuMZ['EventsMove'+'Core'][_0x2ff51b(0x879)+_0x2ff51b(0x76d)+_0x2ff51b(0x668)]['call'](this),this['initEvents'+'MoveCoreEf'+_0x2ff51b(0x804)](),this['autosaveEv'+'entLocatio'+'n']();},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x879)+_0x3e3bd2(0x314)+'Settings']=Game_Event['prototype']['setupPageS'+_0x3e3bd2(0x21c)],Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x924)+'ettings']=function(){const _0xe46918=_0x3e3bd2,_0xbbaced={'ZijAi':_0xe46918(0x5aa)},_0x4d3418=_0xbbaced[_0xe46918(0x476)][_0xe46918(0x424)]('|');let _0x1009ff=-0x43d+-0x11*0x31+0x77e;while(!![]){switch(_0x4d3418[_0x1009ff++]){case'0':VisuMZ[_0xe46918(0x5eb)+'Core'][_0xe46918(0x879)+'_setupPage'+'Settings'][_0xe46918(0x3f6)](this);continue;case'1':this['_activatio'+'nProximity'+_0xe46918(0x11c)+_0xe46918(0xa0d)]=![];continue;case'2':this[_0xe46918(0x72e)+'nProximity'+_0xe46918(0x11c)+_0xe46918(0xa0d)]=!![];continue;case'3':this[_0xe46918(0x961)+'sMoveCoreE'+_0xe46918(0x188)]();continue;case'4':this[_0xe46918(0x94d)+'entLocatio'+'n']();continue;}break;}},Game_Event['prototype']['setupEvent'+_0x3e3bd2(0x966)+_0x3e3bd2(0x188)]=function(){const _0x5d0085=_0x3e3bd2,_0x31eacc={'ddZgh':_0x5d0085(0x49b)},_0x3f54fa=_0x31eacc['ddZgh'][_0x5d0085(0x424)]('|');let _0x204deb=-0x1*-0x1c1f+0x2665+-0x4284;while(!![]){switch(_0x3f54fa[_0x204deb++]){case'0':this['setupEvent'+'sMoveCoreC'+'ommentTags']();continue;case'1':this[_0x5d0085(0x69a)+_0x5d0085(0x437)+_0x5d0085(0x6b8)]();continue;case'2':this[_0x5d0085(0x961)+_0x5d0085(0x68b)+_0x5d0085(0x9d6)]();continue;case'3':if(!this[_0x5d0085(0x620)]())return;continue;case'4':this['initEvents'+_0x5d0085(0x1e5)+_0x5d0085(0x804)]();continue;}break;}},Game_Event[_0x3e3bd2(0x294)]['setupEvent'+_0x3e3bd2(0x68b)+_0x3e3bd2(0x9d6)]=function(){const _0x1dec3e=_0x3e3bd2,_0x590a1f={'HPdnQ':function(_0x48d347,_0x571adb){return _0x48d347===_0x571adb;}},_0x86c747=this['event']()[_0x1dec3e(0x20a)];if(_0x590a1f[_0x1dec3e(0x9fd)](_0x86c747,''))return;this[_0x1dec3e(0x37a)+_0x1dec3e(0x9c0)+_0x1dec3e(0x87e)](_0x86c747);},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x961)+'sMoveCoreC'+_0x3e3bd2(0x33e)]=function(){const _0x48960f=_0x3e3bd2,_0x357ea0={'WUmrc':function(_0x29499c,_0x4f0e77){return _0x29499c!==_0x4f0e77;}};if(!this['page']())return;const _0x44254b=this[_0x48960f(0x5f0)]();let _0x48fcf5='';for(const _0x8ff85 of _0x44254b){if([-0x5cf+-0x19c4+-0x1*-0x1fff,-0x81*0x37+-0x1e03+0x9e3*0x6][_0x48960f(0x1bf)](_0x8ff85[_0x48960f(0x377)])){if(_0x357ea0[_0x48960f(0x7f8)](_0x48fcf5,''))_0x48fcf5+='\x0a';_0x48fcf5+=_0x8ff85[_0x48960f(0x6a6)][-0x31*0x67+-0x1*0xab6+-0x1e6d*-0x1];}}this[_0x48960f(0x37a)+_0x48960f(0x9c0)+'tringTags'](_0x48fcf5);},Game_Event[_0x3e3bd2(0x294)]['initEvents'+_0x3e3bd2(0x1e5)+_0x3e3bd2(0x804)]=function(){const _0x7f95ce=_0x3e3bd2,_0x1ade48={'gFfyG':_0x7f95ce(0x71b),'nItms':_0x7f95ce(0x492)},_0x3531cc=VisuMZ[_0x7f95ce(0x5eb)+_0x7f95ce(0x8da)][_0x7f95ce(0x668)];this['_activatio'+_0x7f95ce(0x125)]={'type':_0x1ade48[_0x7f95ce(0x2c5)],'distance':0x0,'regionList':[]},this[_0x7f95ce(0x1e2)+_0x7f95ce(0x7db)]=![],this[_0x7f95ce(0x9a3)+_0x7f95ce(0x69b)+_0x7f95ce(0x72a)](),this[_0x7f95ce(0x45e)+'ger']=![],this[_0x7f95ce(0x710)]=![],this[_0x7f95ce(0x177)+'ox']={'up':0x0,'down':0x0,'left':0x0,'right':0x0},this[_0x7f95ce(0x128)+'HalfProxim'+'ity']={'type':_0x1ade48[_0x7f95ce(0x2c5)],'distance':0x0},this[_0x7f95ce(0x128)+_0x7f95ce(0x7a5)+'ity']={'type':_0x1ade48[_0x7f95ce(0x2c5)],'distance':0x0},$gameSystem[_0x7f95ce(0x970)+_0x7f95ce(0x2ed)+'ta'](this),this[_0x7f95ce(0x8db)]=$gameSystem[_0x7f95ce(0x81c)+_0x7f95ce(0x8f4)](this),this[_0x7f95ce(0x94b)+'ow']={'originalText':'','text':'','visibleRange':_0x3531cc[_0x7f95ce(0x5d0)][_0x7f95ce(0x800)+'ge'],'offsetX':_0x3531cc[_0x7f95ce(0x5d0)]['OffsetX'],'offsetY':_0x3531cc[_0x7f95ce(0x5d0)][_0x7f95ce(0x926)],'hueShift':0x0},this[_0x7f95ce(0x603)+_0x7f95ce(0x10d)]=![],this[_0x7f95ce(0x9c3)+_0x7f95ce(0x91b)]=[],this[_0x7f95ce(0x211)]={'target':-(-0x207f+0x12bd+0xdc3),'type':_0x1ade48[_0x7f95ce(0xa2f)],'delay':0x1,'opacityDelta':0x0},this['_randomMov'+_0x7f95ce(0x52c)]=_0x3531cc['Movement'][_0x7f95ce(0x86b)+_0x7f95ce(0x5a5)]??-0xaca+-0x3*-0x987+-0x11cb,this[_0x7f95ce(0x952)+_0x7f95ce(0x679)]=![],this[_0x7f95ce(0x513)+'X']=0xef*-0xf+0x40*-0x29+0x17*0x10e,this[_0x7f95ce(0x513)+'Y']=0xd50+-0x11e+-0xc31,this[_0x7f95ce(0x5b7)+_0x7f95ce(0x66e)]={'visible':!![],'filename':_0x3531cc['Movement'][_0x7f95ce(0x4d0)+_0x7f95ce(0x453)]},this['clearSprit'+_0x7f95ce(0x331)](),this[_0x7f95ce(0x95d)+_0x7f95ce(0x466)]();},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x37a)+_0x3e3bd2(0x9c0)+_0x3e3bd2(0x87e)]=function(_0x52ddd1){const _0x1886b3=_0x3e3bd2,_0x142cd3={'BntXo':function(_0x1db898,_0x1cc9bf){return _0x1db898+_0x1cc9bf;},'GEVfo':_0x1886b3(0x6ef),'LTJle':function(_0x6a102d,_0x4412f2){return _0x6a102d(_0x4412f2);},'kOoQu':function(_0x5b7fe8,_0x474bf9){return _0x5b7fe8(_0x474bf9);},'eAPhc':_0x1886b3(0x892),'pOMKa':_0x1886b3(0x6e4),'BGSlA':_0x1886b3(0x419),'Wbhbz':_0x1886b3(0x894),'JKkii':function(_0x1963e1,_0x34af60){return _0x1963e1(_0x34af60);},'kpGYx':function(_0x4b7846,_0x497bd1){return _0x4b7846(_0x497bd1);},'svrvV':function(_0x47bbcc,_0x5352d7){return _0x47bbcc*_0x5352d7;},'zpQJl':function(_0x5491d6,_0x1747b0){return _0x5491d6(_0x1747b0);},'MEDFq':function(_0x4a05c7,_0x48fdf7){return _0x4a05c7(_0x48fdf7);},'kbneB':function(_0x58ef62,_0x3f70da){return _0x58ef62(_0x3f70da);},'wktug':function(_0x1fc02,_0x53c4e3){return _0x1fc02>=_0x53c4e3;},'LBYCS':function(_0x4fc5a1,_0x56a054){return _0x4fc5a1(_0x56a054);},'uaBBB':function(_0x43b77e,_0xad8ffc){return _0x43b77e(_0xad8ffc);},'VumJo':function(_0x142d27,_0x186dd4){return _0x142d27(_0x186dd4);},'kAbwN':function(_0x206962,_0x5329f8){return _0x206962(_0x5329f8);},'IuhCl':function(_0x1fd1f3,_0x317dea){return _0x1fd1f3(_0x317dea);},'hCfSV':function(_0xf70afe,_0x14ccd9){return _0xf70afe(_0x14ccd9);},'AzbvX':function(_0x1166aa,_0x308639){return _0x1166aa(_0x308639);},'rzJeZ':function(_0x15406e,_0x3bc2d0){return _0x15406e(_0x3bc2d0);},'CoNCW':function(_0x101be4,_0x17bbb9){return _0x101be4(_0x17bbb9);},'HkZza':function(_0x4e6987,_0x306470){return _0x4e6987(_0x306470);},'ymxxW':function(_0x425d7a,_0x3c18e8){return _0x425d7a+_0x3c18e8;},'YVYVu':function(_0x541689,_0x17853e){return _0x541689(_0x17853e);},'Crfjy':function(_0x1f5e82,_0x2e18fd){return _0x1f5e82(_0x2e18fd);},'UIjBO':function(_0x4188de,_0x5f2563){return _0x4188de(_0x5f2563);},'hZRjn':function(_0x36c5a3,_0x2f1f5c){return _0x36c5a3*_0x2f1f5c;},'cTACw':function(_0x2e29c2,_0x28abd7){return _0x2e29c2(_0x28abd7);},'aJfeZ':function(_0x1b2dc4,_0x488ab3){return _0x1b2dc4*_0x488ab3;},'vLtsg':function(_0x4f6da8,_0x4052ed){return _0x4f6da8(_0x4052ed);},'RVCzJ':function(_0x101e87,_0x56a9d4){return _0x101e87(_0x56a9d4);}};if(_0x52ddd1[_0x1886b3(0x848)](/<ACTIVATION[ ](?:REGION|REGIONS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i))this['_activatio'+'nProximity'][_0x1886b3(0x940)]=JSON[_0x1886b3(0x17d)](_0x142cd3[_0x1886b3(0x485)](_0x142cd3['BntXo']('[',RegExp['$1']['match'](/\d+/g)),']')),this[_0x1886b3(0x72e)+_0x1886b3(0x125)][_0x1886b3(0x7fe)]=_0x142cd3[_0x1886b3(0x801)];else _0x52ddd1[_0x1886b3(0x848)](/<ACTIVATION[ ](.*?):[ ](\d+)>/i)&&(type=_0x142cd3['LTJle'](String,RegExp['$1'])[_0x1886b3(0x12d)+'e']()[_0x1886b3(0x66f)](),this[_0x1886b3(0x72e)+_0x1886b3(0x125)][_0x1886b3(0x7fe)]=type,this[_0x1886b3(0x72e)+'nProximity']['distance']=_0x142cd3[_0x1886b3(0xa05)](Number,RegExp['$2']));_0x52ddd1[_0x1886b3(0x848)](/<(?:ATTACH PICTURE|PICTURE) FILENAME:[ ](.*?)>/i)&&(this[_0x1886b3(0x43b)+_0x1886b3(0x14e)][_0x1886b3(0x868)]=_0x142cd3[_0x1886b3(0xa05)](String,RegExp['$1']));if(_0x52ddd1[_0x1886b3(0x848)](/<(?:ATTACH PICTURE|PICTURE) BLEND MODE:[ ](.*?)>/i)){const _0x4a9e23=_0x142cd3[_0x1886b3(0x8bf)](String,RegExp['$1'])[_0x1886b3(0x936)+'e']()[_0x1886b3(0x66f)](),_0x558af8=[_0x142cd3[_0x1886b3(0x555)],_0x142cd3['pOMKa'],_0x142cd3[_0x1886b3(0x4ac)],_0x142cd3[_0x1886b3(0x6ed)]];this[_0x1886b3(0x43b)+_0x1886b3(0x14e)][_0x1886b3(0x51e)]=_0x558af8[_0x1886b3(0x8fb)](_0x4a9e23)[_0x1886b3(0x795)](0x80c+-0x10c3*-0x1+-0x18cf,0x1d59+0x6d*-0x55+0x6db);}_0x52ddd1[_0x1886b3(0x848)](/<(?:ATTACH PICTURE|PICTURE) (?:SIZE|MAX SIZE|MAX):[ ](\d+)>/i)&&(this[_0x1886b3(0x43b)+_0x1886b3(0x14e)]['maxSize']=_0x142cd3[_0x1886b3(0x8bf)](Number,RegExp['$1']));_0x52ddd1['match'](/<(?:ATTACH PICTURE|PICTURE) OFFSET X:[ ]([\+\-]\d+)>/i)&&(this['_attachPic'+'ture'][_0x1886b3(0x612)]=_0x142cd3['kOoQu'](Number,RegExp['$1']));_0x52ddd1['match'](/<(?:ATTACH PICTURE|PICTURE) OFFSET Y:[ ]([\+\-]\d+)>/i)&&(this['_attachPic'+_0x1886b3(0x14e)][_0x1886b3(0x1d2)]=_0x142cd3['JKkii'](Number,RegExp['$1']));_0x52ddd1[_0x1886b3(0x848)](/<(?:ATTACH PICTURE|PICTURE) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x1886b3(0x43b)+'ture'][_0x1886b3(0x612)]=_0x142cd3[_0x1886b3(0xa05)](Number,RegExp['$1']),this[_0x1886b3(0x43b)+_0x1886b3(0x14e)][_0x1886b3(0x1d2)]=_0x142cd3[_0x1886b3(0x200)](Number,RegExp['$2']));_0x52ddd1[_0x1886b3(0x848)](/<(?:ATTACH PICTURE|PICTURE) SCALE:[ ](\d+)([%％])>/i)&&(this[_0x1886b3(0x43b)+_0x1886b3(0x14e)]['scale']=_0x142cd3[_0x1886b3(0x673)](_0x142cd3[_0x1886b3(0x9f5)](Number,RegExp['$1']),0xa84+0xd8a*-0x1+-0x2b*-0x12+0.01));_0x52ddd1[_0x1886b3(0x848)](/<ALWAYS UPDATE MOVEMENT>/i)&&(this['_alwaysUpd'+'ateMove']=!![]);_0x52ddd1[_0x1886b3(0x848)](/<CLICK TRIGGER>/i)&&(this[_0x1886b3(0x45e)+_0x1886b3(0x563)]=!![]);_0x52ddd1[_0x1886b3(0x848)](/<CUSTOM Z:[ ](.*?)>/i)&&(this[_0x1886b3(0x710)]=_0x142cd3[_0x1886b3(0x200)](Number,RegExp['$1'])||-0x1*0x115c+-0x1a2e+0x2b8a);_0x52ddd1[_0x1886b3(0x848)](/<ENC(?:|OUNTER) HALF[ ](.*?):[ ](\d+)>/i)&&(type=_0x142cd3[_0x1886b3(0x888)](String,RegExp['$1'])['toLowerCas'+'e']()['trim'](),this['_encounter'+_0x1886b3(0x9d7)+_0x1886b3(0x88c)][_0x1886b3(0x7fe)]=type,this[_0x1886b3(0x128)+_0x1886b3(0x9d7)+_0x1886b3(0x88c)][_0x1886b3(0x6d8)]=_0x142cd3['kbneB'](Number,RegExp['$2']));_0x52ddd1['match'](/<ENC(?:|OUNTER) NONE[ ](.*?):[ ](\d+)>/i)&&(type=_0x142cd3['kOoQu'](String,RegExp['$1'])[_0x1886b3(0x12d)+'e']()['trim'](),this[_0x1886b3(0x128)+_0x1886b3(0x7a5)+'ity']['type']=type,this[_0x1886b3(0x128)+'NoneProxim'+_0x1886b3(0x88c)][_0x1886b3(0x6d8)]=_0x142cd3[_0x1886b3(0x888)](Number,RegExp['$2']));const _0xd91c3f=_0x52ddd1[_0x1886b3(0x848)](/<HITBOX[ ](.*?):[ ](\d+)>/gi);if(_0xd91c3f)for(const _0x151f33 of _0xd91c3f){if(_0x151f33['match'](/<HITBOX[ ](.*?):[ ](\d+)>/i)){const _0x343b92=_0x142cd3[_0x1886b3(0x888)](String,RegExp['$1'])[_0x1886b3(0x12d)+'e']()[_0x1886b3(0x66f)](),_0x2d32da=_0x142cd3[_0x1886b3(0x200)](Number,RegExp['$2']);this['_addedHitb'+'ox'][_0x343b92]=_0x2d32da;}}if(_0x142cd3['wktug'](this[_0x1886b3(0x8db)][_0x1886b3(0x5b2)],-0x4d2+0xa83+-0x1*0x5b1)&&!this[_0x1886b3(0x8db)][_0x1886b3(0x54e)]){_0x52ddd1['match'](/<ICON:[ ](\d+)>/i)&&(this[_0x1886b3(0x8db)][_0x1886b3(0x5b2)]=_0x142cd3['LBYCS'](Number,RegExp['$1']));_0x52ddd1['match'](/<ICON (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this['_eventIcon'][_0x1886b3(0x9c4)]=_0x142cd3[_0x1886b3(0x54f)](Number,RegExp['$1']));_0x52ddd1['match'](/<ICON (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this[_0x1886b3(0x8db)][_0x1886b3(0x7a6)]=_0x142cd3[_0x1886b3(0x9f5)](Number,RegExp['$1']));_0x52ddd1[_0x1886b3(0x848)](/<ICON (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this['_eventIcon'][_0x1886b3(0x9c4)]=_0x142cd3[_0x1886b3(0x72c)](Number,RegExp['$1']),this[_0x1886b3(0x8db)][_0x1886b3(0x7a6)]=_0x142cd3['kAbwN'](Number,RegExp['$2']));if(_0x52ddd1[_0x1886b3(0x848)](/<ICON BLEND MODE:[ ](.*?)>/i)){const _0x3245be=_0x142cd3['zpQJl'](String,RegExp['$1'])[_0x1886b3(0x936)+'e']()['trim'](),_0x1fa037=[_0x142cd3[_0x1886b3(0x555)],_0x142cd3[_0x1886b3(0x9a1)],_0x142cd3[_0x1886b3(0x4ac)],_0x142cd3[_0x1886b3(0x6ed)]];this[_0x1886b3(0x8db)][_0x1886b3(0x51e)]=_0x1fa037[_0x1886b3(0x8fb)](_0x3245be)[_0x1886b3(0x795)](0x1*-0xf33+0x1*0x2037+-0x1104,0x17b0+0x1213+0x4*-0xa70);}$gameSystem[_0x1886b3(0x718)+_0x1886b3(0x8f4)](this,this['_eventIcon']['iconIndex'],this[_0x1886b3(0x8db)][_0x1886b3(0x9c4)],this[_0x1886b3(0x8db)][_0x1886b3(0x7a6)],this[_0x1886b3(0x8db)][_0x1886b3(0x51e)]);}if(_0x52ddd1[_0x1886b3(0x848)](/<LABEL:[ ](.*?)>/i)){let _0x122542=_0x142cd3[_0x1886b3(0x408)](String,RegExp['$1'])[_0x1886b3(0x66f)]();this[_0x1886b3(0x94b)+'ow'][_0x1886b3(0x657)]=_0x122542,this[_0x1886b3(0x94b)+'ow'][_0x1886b3(0x7f1)+'xt']=_0x122542;}if(_0x52ddd1['match'](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)){let _0x222e2f=_0x142cd3[_0x1886b3(0x200)](String,RegExp['$1'])[_0x1886b3(0x66f)]();this['_labelWind'+'ow']['text']=_0x222e2f,this['_labelWind'+'ow'][_0x1886b3(0x7f1)+'xt']=_0x222e2f;}_0x52ddd1['match'](/<LABEL (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this[_0x1886b3(0x94b)+'ow'][_0x1886b3(0x612)]=_0x142cd3[_0x1886b3(0x7e1)](Number,RegExp['$1']));_0x52ddd1[_0x1886b3(0x848)](/<LABEL (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this[_0x1886b3(0x94b)+'ow'][_0x1886b3(0x1d2)]=_0x142cd3[_0x1886b3(0x811)](Number,RegExp['$1']));_0x52ddd1[_0x1886b3(0x848)](/<LABEL (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this['_labelWind'+'ow'][_0x1886b3(0x612)]=_0x142cd3[_0x1886b3(0x524)](Number,RegExp['$1']),this[_0x1886b3(0x94b)+'ow'][_0x1886b3(0x1d2)]=_0x142cd3[_0x1886b3(0x9bc)](Number,RegExp['$2']));_0x52ddd1[_0x1886b3(0x848)](/<LABEL HUE SHIFT:[ ](.*?)>/i)&&(this[_0x1886b3(0x94b)+'ow']['hueShift']=_0x142cd3[_0x1886b3(0x8e9)](Number,RegExp['$1']));this[_0x1886b3(0x69a)+_0x1886b3(0xa0c)]();_0x52ddd1[_0x1886b3(0x848)](/<LABEL RANGE:[ ](\d+)>/i)&&(this[_0x1886b3(0x94b)+'ow'][_0x1886b3(0x745)+'ge']=_0x142cd3[_0x1886b3(0x9e2)](Number,RegExp['$1']));_0x52ddd1[_0x1886b3(0x848)](/<MIRROR SPRITE>/i)&&(this['_mirrorSpr'+_0x1886b3(0x10d)]=!![]);if(_0x52ddd1[_0x1886b3(0x848)](/<MOVE ONLY (?:REGION|REGIONS):[ ](\d+(?:\s*,\s*\d+)*)>/i)){const _0x5bee8b=JSON['parse'](_0x142cd3['ymxxW'](_0x142cd3[_0x1886b3(0x6ab)]('[',RegExp['$1'][_0x1886b3(0x848)](/\d+/g)),']'));this[_0x1886b3(0x9c3)+_0x1886b3(0x91b)]=this['_moveOnlyR'+'egions'][_0x1886b3(0x73f)](_0x5bee8b),this[_0x1886b3(0x9c3)+_0x1886b3(0x91b)]['remove'](-0x1ef6+0x29b*-0xb+-0x3b9f*-0x1);}if(_0x52ddd1[_0x1886b3(0x848)](/<MOVE SYNCH TARGET:[ ](.*?)>/i)){const _0x535eba=_0x142cd3[_0x1886b3(0x5e6)](String,RegExp['$1']);if(_0x535eba[_0x1886b3(0x848)](/PLAYER/i))this[_0x1886b3(0x211)]['target']=0x3b*0x3e+0x198*0x16+-0x315a;else _0x535eba['match'](/EVENT[ ](\d+)/i)&&(this[_0x1886b3(0x211)][_0x1886b3(0x7d6)]=_0x142cd3['Crfjy'](Number,RegExp['$1']));}_0x52ddd1[_0x1886b3(0x848)](/<MOVE SYNCH TYPE:[ ](.*?)>/i)&&(this[_0x1886b3(0x211)][_0x1886b3(0x7fe)]=_0x142cd3[_0x1886b3(0x524)](String,RegExp['$1'])['toLowerCas'+'e']()[_0x1886b3(0x66f)]());_0x52ddd1[_0x1886b3(0x848)](/<MOVE SYNCH DELAY:[ ](\d+)>/i)&&(this[_0x1886b3(0x211)][_0x1886b3(0x813)]=_0x142cd3['UIjBO'](Number,RegExp['$1']));_0x52ddd1[_0x1886b3(0x848)](/<MOVE SYNCH DISTANCE OPACITY:[ ](.*?)>/i)&&(this[_0x1886b3(0x211)][_0x1886b3(0x9a4)+'ta']=_0x142cd3['UIjBO'](Number,RegExp['$1']));if(_0x52ddd1['match'](/<TRUE RANDOM MOVE>/i))this[_0x1886b3(0x222)+_0x1886b3(0x52c)]=0x475+-0x30a*-0x5+0x9*-0x22f;else _0x52ddd1[_0x1886b3(0x848)](/<RANDOM MOVE WEIGHT:[ ](.*?)>/i)&&(this[_0x1886b3(0x222)+'eWeight']=_0x142cd3[_0x1886b3(0x408)](Number,RegExp['$1'])||-0x3*-0x8a8+0x19a2+-0x339a);_0x52ddd1[_0x1886b3(0x848)](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this[_0x1886b3(0x952)+'Location']=!![]);_0x52ddd1[_0x1886b3(0x848)](/<SCALE X:[ ](\d+)([%％])>/i)&&(this['_scaleBase'+'X']=_0x142cd3[_0x1886b3(0x8f0)](_0x142cd3[_0x1886b3(0x627)](Number,RegExp['$1']),-0x2048+-0x12e*-0x2+0x1dec+0.01));_0x52ddd1[_0x1886b3(0x848)](/<SCALE Y:[ ](\d+)([%％])>/i)&&(this['_scaleBase'+'Y']=_0x142cd3[_0x1886b3(0x8f0)](_0x142cd3['cTACw'](Number,RegExp['$1']),-0x175*0x3+0x1a37+-0x1d2*0xc+0.01));if(_0x52ddd1['match'](/<SCALE:[ ](\d+)([%％])>/i)){const _0x130944=_0x142cd3[_0x1886b3(0x8fc)](_0x142cd3[_0x1886b3(0x9e2)](Number,RegExp['$1']),0x218e+-0x8*-0x36f+-0x3d06+0.01);this['_scaleBase'+'X']=_0x130944,this[_0x1886b3(0x513)+'Y']=_0x130944;}_0x52ddd1['match'](/<HIDE SHADOW>/i)&&(this[_0x1886b3(0x5b7)+'phic'][_0x1886b3(0x576)]=![]),_0x52ddd1[_0x1886b3(0x848)](/<SHADOW FILENAME:[ ](.*?)>/i)&&(this[_0x1886b3(0x5b7)+_0x1886b3(0x66e)][_0x1886b3(0x868)]=_0x142cd3[_0x1886b3(0x72c)](String,RegExp['$1'])),_0x52ddd1[_0x1886b3(0x848)](/<SPRITE OFFSET X:[ ]([\+\-]\d+)>/i)&&(this[_0x1886b3(0x743)+_0x1886b3(0x358)]=_0x142cd3['kpGYx'](Number,RegExp['$1'])),_0x52ddd1[_0x1886b3(0x848)](/<SPRITE OFFSET Y:[ ]([\+\-]\d+)>/i)&&(this[_0x1886b3(0x743)+_0x1886b3(0x619)]=_0x142cd3[_0x1886b3(0x9e2)](Number,RegExp['$1'])),_0x52ddd1[_0x1886b3(0x848)](/<SPRITE OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this['_spriteOff'+'setX']=_0x142cd3[_0x1886b3(0x184)](Number,RegExp['$1']),this[_0x1886b3(0x743)+'setY']=_0x142cd3[_0x1886b3(0x556)](Number,RegExp['$2'])),_0x52ddd1['match'](/<STEP PATTERN:[ ](.*)>/i)&&(this['_stepPatte'+'rn']=_0x142cd3[_0x1886b3(0x4d7)](String,RegExp['$1'])[_0x1886b3(0x936)+'e']()['trim']());},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x69a)+_0x3e3bd2(0xa0c)]=function(){const _0xd5ebea=_0x3e3bd2;$gameTemp[_0xd5ebea(0x951)+_0xd5ebea(0xfc)](this),this['_labelWind'+'ow'][_0xd5ebea(0x657)]=this[_0xd5ebea(0x94b)+'ow']['originalTe'+'xt'];for(;;){if(this['_labelWind'+'ow'][_0xd5ebea(0x657)][_0xd5ebea(0x848)](/\\V\[(\d+)\]/gi))this[_0xd5ebea(0x94b)+'ow']['text']=this[_0xd5ebea(0x94b)+'ow'][_0xd5ebea(0x7f1)+'xt'][_0xd5ebea(0x18a)](/\\V\[(\d+)\]/gi,(_0x428871,_0x2bb344)=>$gameVariables['value'](parseInt(_0x2bb344)));else break;}$gameTemp['clearSelfT'+_0xd5ebea(0x5d3)]();},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x69a)+_0x3e3bd2(0x437)+_0x3e3bd2(0x6b8)]=function(){const _0x545bff=_0x3e3bd2;this[_0x545bff(0x645)+_0x545bff(0x9a6)]();},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x2d7)+_0x3e3bd2(0xf9)]=function(){const _0x99e84b=_0x3e3bd2;if(this['_alwaysUpd'+_0x99e84b(0x7db)])return!![];return Game_Character[_0x99e84b(0x294)][_0x99e84b(0x2d7)+_0x99e84b(0xf9)][_0x99e84b(0x3f6)](this);},VisuMZ[_0x3e3bd2(0x5eb)+'Core']['Game_Event'+_0x3e3bd2(0xa16)+_0x3e3bd2(0x12f)]=Game_Event['prototype'][_0x3e3bd2(0x832)+_0x3e3bd2(0x60e)],Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x832)+_0x3e3bd2(0x60e)]=function(){const _0x4a575b=_0x3e3bd2;if(this[_0x4a575b(0x151)+'elfMovemen'+'t']())return;VisuMZ['EventsMove'+'Core'][_0x4a575b(0x879)+_0x4a575b(0xa16)+_0x4a575b(0x12f)]['call'](this),this[_0x4a575b(0x7c4)]()&&VisuMZ[_0x4a575b(0x3a0)+_0x4a575b(0xea)](this[_0x4a575b(0x4a0)]);},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x151)+'elfMovemen'+'t']=function(){const _0x32a0c5=_0x3e3bd2,_0x3bc15b={'TppjQ':function(_0x4e586e,_0x54e3a5){return _0x4e586e>=_0x54e3a5;}},_0x5292ce=VisuMZ[_0x32a0c5(0x5eb)+_0x32a0c5(0x8da)][_0x32a0c5(0x668)][_0x32a0c5(0x60e)];if($gameMap[_0x32a0c5(0x935)+'ning']()&&_0x5292ce['StopAutoMo'+'veEvents'])return!![];if($gameMessage[_0x32a0c5(0x625)]()&&_0x5292ce[_0x32a0c5(0x236)+_0x32a0c5(0x5ca)])return!![];if(!$gameSystem['isAllowEve'+_0x32a0c5(0x7f5)+'ment']())return!![];if(_0x3bc15b['TppjQ'](this[_0x32a0c5(0x7f7)+_0x32a0c5(0x5d3)](),-0x20b3+-0x24bf+0x4572))return!![];if(!SceneManager[_0x32a0c5(0x870)][_0x32a0c5(0x7b3)])return!![];return![];},Game_Event['prototype'][_0x3e3bd2(0x645)+_0x3e3bd2(0x9a6)]=function(){const _0x36c973=_0x3e3bd2,_0x108d40={'nuKMQ':function(_0x36e56d,_0x2c3a77){return _0x36e56d!==_0x2c3a77;}},_0x4626ed=SceneManager['_scene'][_0x36c973(0x2c3)];if(_0x4626ed){const _0x2e6980=_0x4626ed['findTarget'+'Sprite'](this);_0x2e6980&&_0x2e6980['_shadowSpr'+'ite']&&_0x108d40['nuKMQ'](_0x2e6980['_shadowSpr'+_0x36c973(0x10d)][_0x36c973(0x337)],this[_0x36c973(0x20e)+_0x36c973(0x16a)]())&&(_0x2e6980[_0x36c973(0x1f7)+_0x36c973(0x10d)][_0x36c973(0x337)]=this[_0x36c973(0x20e)+'name'](),_0x2e6980[_0x36c973(0x1f7)+_0x36c973(0x10d)]['bitmap']=ImageManager[_0x36c973(0x3c4)](_0x2e6980['_shadowSpr'+'ite']['_filename']));}},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x20e)+'name']=function(){const _0x18b96d=_0x3e3bd2;return this[_0x18b96d(0x5b7)+_0x18b96d(0x66e)][_0x18b96d(0x868)];},Game_Event[_0x3e3bd2(0x294)]['isShadowVi'+_0x3e3bd2(0xe1)]=function(){const _0x5009c8=_0x3e3bd2;if(!this[_0x5009c8(0x5b7)+'phic']['visible'])return![];return Game_CharacterBase[_0x5009c8(0x294)][_0x5009c8(0x45f)+_0x5009c8(0xe1)][_0x5009c8(0x3f6)](this);},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x366)+_0x3e3bd2(0x412)]=function(){const _0x2ca37b=_0x3e3bd2;return this['_labelWind'+'ow'][_0x2ca37b(0x657)];},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x366)+'wRange']=function(){const _0xb1a9fc=_0x3e3bd2;return this['_labelWind'+'ow'][_0xb1a9fc(0x745)+'ge'];},Game_Event['prototype'][_0x3e3bd2(0x75a)+_0x3e3bd2(0x3ff)]=function(_0x35dfa1,_0x45c1fc,_0x5a5b7a){const _0x40f976=_0x3e3bd2,_0x251c55={'CzQwK':'event'};if(this[_0x40f976(0x2d2)+_0x40f976(0x1b8)]())return this[_0x40f976(0x7af)+_0x40f976(0xa2b)+'able'](_0x35dfa1,_0x45c1fc,_0x5a5b7a);if($gameMap[_0x40f976(0x78d)+_0x40f976(0x829)](_0x35dfa1,_0x45c1fc,_0x5a5b7a,_0x251c55[_0x40f976(0x6c7)]))return!![];if($gameMap[_0x40f976(0x9b4)+'rbidPass'](_0x35dfa1,_0x45c1fc,_0x5a5b7a,_0x251c55[_0x40f976(0x6c7)]))return![];return Game_Character[_0x40f976(0x294)][_0x40f976(0x75a)+_0x40f976(0x3ff)][_0x40f976(0x3f6)](this,_0x35dfa1,_0x45c1fc,_0x5a5b7a);},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x2d2)+'yRegions']=function(){const _0x4e8494=_0x3e3bd2,_0x1eb8ab={'nPNmp':function(_0x12d270,_0x1bf969){return _0x12d270===_0x1bf969;},'nAaWR':function(_0x35b2dd,_0x2496fa){return _0x35b2dd>_0x2496fa;}};if(_0x1eb8ab['nPNmp'](this[_0x4e8494(0x9c3)+_0x4e8494(0x91b)],undefined))this['initEvents'+'MoveCoreEf'+'fects']();return _0x1eb8ab[_0x4e8494(0x402)](this['_moveOnlyR'+_0x4e8494(0x91b)]['length'],-0x18cd*0x1+0x3*0x54a+-0x1*-0x8ef);},Game_Event['prototype'][_0x3e3bd2(0x7af)+'RegionPass'+_0x3e3bd2(0x4ec)]=function(_0x4bc480,_0x485ff0,_0x3ef640){const _0x14f9bb=_0x3e3bd2,_0x44670a=$gameMap[_0x14f9bb(0x933)+_0x14f9bb(0x2f8)](_0x4bc480,_0x3ef640),_0x559788=$gameMap[_0x14f9bb(0x98f)+_0x14f9bb(0x2f8)](_0x485ff0,_0x3ef640),_0x141365=$gameMap['regionId'](_0x44670a,_0x559788);return this[_0x14f9bb(0x9c3)+'egions'][_0x14f9bb(0x1bf)](_0x141365);},VisuMZ['EventsMove'+'Core'][_0x3e3bd2(0x879)+'_findPrope'+'rPageIndex']=Game_Event[_0x3e3bd2(0x294)]['findProper'+_0x3e3bd2(0x220)],Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0xa02)+_0x3e3bd2(0x220)]=function(){const _0x124d65=_0x3e3bd2;if(this[_0x124d65(0x620)]()&&!$gameTemp[_0x124d65(0x9ce)]()){if(this['event']()[_0x124d65(0x20a)]['match'](/<(?:PLAYTEST|PLAY TEST)>/i))return-(0x50f+0x1923+0x83*-0x3b);}return this[_0x124d65(0x119)+_0x124d65(0x703)+_0x124d65(0x3ff)]=![],this[_0x124d65(0x490)]=![],this['event']()?VisuMZ[_0x124d65(0x5eb)+_0x124d65(0x8da)][_0x124d65(0x879)+_0x124d65(0x63d)+_0x124d65(0x56f)][_0x124d65(0x3f6)](this):-(-0x1*0x176d+0x1f*0x4+0x16f2);},VisuMZ[_0x3e3bd2(0x5eb)+'Core'][_0x3e3bd2(0x879)+'_meetsCond'+_0x3e3bd2(0x32a)]=Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x9c7)+_0x3e3bd2(0x551)],Game_Event[_0x3e3bd2(0x294)]['meetsCondi'+_0x3e3bd2(0x551)]=function(_0x3c7787){const _0x33a05b=_0x3e3bd2;this[_0x33a05b(0x249)+'cedSwitchV'+'ariablePre'+'sent'](_0x3c7787),$gameTemp['registerSe'+'lfTarget'](this);const _0x3c0972=VisuMZ[_0x33a05b(0x5eb)+_0x33a05b(0x8da)]['Game_Event'+_0x33a05b(0x847)+_0x33a05b(0x32a)][_0x33a05b(0x3f6)](this,_0x3c7787);return $gameTemp[_0x33a05b(0x153)+_0x33a05b(0x5d3)](),_0x3c0972;},Game_Event[_0x3e3bd2(0x294)]['hasAdvance'+_0x3e3bd2(0x1ea)+_0x3e3bd2(0x74c)]=function(){const _0x456bad=_0x3e3bd2;return this[_0x456bad(0x119)+_0x456bad(0x703)+_0x456bad(0x3ff)];},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x249)+_0x3e3bd2(0x818)+_0x3e3bd2(0x247)+_0x3e3bd2(0x781)]=function(_0x327973){const _0x4edd6e=_0x3e3bd2,_0x1c5612=_0x327973[_0x4edd6e(0x652)];if(_0x1c5612['switch1Val'+'id']&&DataManager[_0x4edd6e(0x8b6)+_0x4edd6e(0x40c)](_0x1c5612[_0x4edd6e(0x422)]))this[_0x4edd6e(0x119)+_0x4edd6e(0x703)+_0x4edd6e(0x3ff)]=!![];else{if(_0x1c5612['switch2Val'+'id']&&DataManager['isAdvanced'+'Switch'](_0x1c5612[_0x4edd6e(0x212)]))this[_0x4edd6e(0x119)+'witchVaria'+_0x4edd6e(0x3ff)]=!![];else _0x1c5612[_0x4edd6e(0x66a)+_0x4edd6e(0x823)]&&DataManager[_0x4edd6e(0x8b6)+_0x4edd6e(0x9e1)](_0x1c5612[_0x4edd6e(0x19a)])&&(this[_0x4edd6e(0x119)+_0x4edd6e(0x703)+_0x4edd6e(0x3ff)]=!![]);}},Game_Event['prototype'][_0x3e3bd2(0x4e4)+'igger']=function(){const _0x26d0e4=_0x3e3bd2;if(this[_0x26d0e4(0x116)])return![];return this[_0x26d0e4(0x45e)+'ger'];},Game_Event[_0x3e3bd2(0x294)]['onClickTri'+_0x3e3bd2(0x85e)]=function(){const _0x4f3706=_0x3e3bd2;$gameTemp['clearDesti'+_0x4f3706(0x972)](),this[_0x4f3706(0x4e2)]();},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x255)]=function(_0x582a75,_0x21249d){const _0x2dd077=_0x3e3bd2;return this['_addedHitb'+'ox']?this['posEventsM'+_0x2dd077(0x281)](_0x582a75,_0x21249d):Game_Character[_0x2dd077(0x294)]['pos']['call'](this,_0x582a75,_0x21249d);},Game_Event['prototype'][_0x3e3bd2(0x584)+_0x3e3bd2(0x281)]=function(_0xee1cdb,_0x253e22){const _0x391d4d=_0x3e3bd2,_0x2ba3bf={'exogD':_0x391d4d(0x178),'UFfeb':function(_0x32a5b8,_0x1babd5){return _0x32a5b8+_0x1babd5;},'qEwBE':function(_0x48964b,_0x265590){return _0x48964b-_0x265590;},'hsWOB':function(_0xd98b8d,_0x29d6c2){return _0xd98b8d+_0x29d6c2;},'LqkhU':function(_0x249908,_0x334caf){return _0x249908<=_0x334caf;},'VVHHZ':function(_0x358c66,_0x3370cb){return _0x358c66-_0x3370cb;}},_0xc35d7b=_0x2ba3bf[_0x391d4d(0x2e3)][_0x391d4d(0x424)]('|');let _0x244d46=0x5e2*-0x2+0x19a5+-0x143*0xb;while(!![]){switch(_0xc35d7b[_0x244d46++]){case'0':var _0x1b875d=_0x2ba3bf[_0x391d4d(0x9cd)](this['x'],this['_addedHitb'+'ox'][_0x391d4d(0x4ca)]);continue;case'1':var _0xda51f9=_0x2ba3bf[_0x391d4d(0x142)](this['y'],this[_0x391d4d(0x177)+'ox']['up']);continue;case'2':var _0x118eba=_0x2ba3bf[_0x391d4d(0x865)](this['y'],this[_0x391d4d(0x177)+'ox'][_0x391d4d(0x68f)]);continue;case'3':return _0x2ba3bf[_0x391d4d(0x23c)](_0x4f4bac,_0xee1cdb)&&_0x2ba3bf[_0x391d4d(0x23c)](_0xee1cdb,_0x1b875d)&&_0x2ba3bf[_0x391d4d(0x23c)](_0xda51f9,_0x253e22)&&_0x2ba3bf['LqkhU'](_0x253e22,_0x118eba);case'4':var _0x4f4bac=_0x2ba3bf[_0x391d4d(0x852)](this['x'],this[_0x391d4d(0x177)+'ox'][_0x391d4d(0x34e)]);continue;}break;}},Game_Event[_0x3e3bd2(0x294)]['canPass']=function(_0x5bd019,_0x4eec5f,_0x46809d){const _0x5b1e4f=_0x3e3bd2,_0x4067d3={'rsnLk':function(_0x239aab,_0x361ff0){return _0x239aab<=_0x361ff0;},'UDDxK':function(_0x1fb320,_0x597890){return _0x1fb320+_0x597890;},'hUAsO':function(_0x4fb992,_0x1b2c8f){return _0x4fb992+_0x1b2c8f;}};for(let _0x1f93ba=-this['_addedHitb'+'ox'][_0x5b1e4f(0x34e)];_0x4067d3[_0x5b1e4f(0x44f)](_0x1f93ba,this[_0x5b1e4f(0x177)+'ox'][_0x5b1e4f(0x4ca)]);_0x1f93ba++){for(let _0x1fa0d6=-this[_0x5b1e4f(0x177)+'ox']['up'];_0x4067d3[_0x5b1e4f(0x44f)](_0x1fa0d6,this[_0x5b1e4f(0x177)+'ox']['down']);_0x1fa0d6++){if(!Game_Character['prototype']['canPass']['call'](this,_0x4067d3[_0x5b1e4f(0x4a3)](_0x5bd019,_0x1f93ba),_0x4067d3[_0x5b1e4f(0x2ab)](_0x4eec5f,_0x1fa0d6),_0x46809d))return![];}}return!![];},Game_Event['prototype']['isCollided'+'WithEvents']=function(_0x4ff1a8,_0x196015){const _0x527227=_0x3e3bd2,_0x3a9ed1={'qKIfc':function(_0x571bed,_0x3a2b14){return _0x571bed>_0x3a2b14;}};if(Imported[_0x527227(0x458)+'oreEngine']&&this[_0x527227(0x708)+_0x527227(0x26c)+_0x527227(0x4da)]())return this[_0x527227(0x16f)+_0x527227(0x628)+_0x527227(0x22d)](_0x4ff1a8,_0x196015);else{const _0x10c4c4=$gameMap['eventsXyNt'](_0x4ff1a8,_0x196015)[_0x527227(0x118)](_0x18b8c9=>_0x18b8c9!==this);return _0x3a9ed1[_0x527227(0x7ce)](_0x10c4c4[_0x527227(0x3cf)],-0x1abf+0x73*0x2+-0x1fd*-0xd);}},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x16f)+_0x3e3bd2(0x628)+'sion']=function(_0x36100c,_0x225f82){const _0x417da0=_0x3e3bd2,_0x1f1c05={'XxOnq':function(_0x54f0d9,_0x3ce971){return _0x54f0d9>_0x3ce971;}};if(!this[_0x417da0(0x67e)+_0x417da0(0x4a2)]())return![];else{const _0x1ff78c=$gameMap[_0x417da0(0x9df)](_0x36100c,_0x225f82)[_0x417da0(0x118)](_0x34e3d0=>_0x34e3d0!==this&&_0x34e3d0[_0x417da0(0x67e)+_0x417da0(0x4a2)]());return _0x1f1c05[_0x417da0(0x64f)](_0x1ff78c[_0x417da0(0x3cf)],-0x264f+0x3*0x1ff+0x2052);}},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x680)+_0x3e3bd2(0x4aa)+_0x3e3bd2(0x6df)]=function(){const _0x16face=_0x3e3bd2,_0x4d4c4f={'jcufi':'none'};if(!this['_activatio'+_0x16face(0x125)])return _0x4d4c4f['jcufi'];return this[_0x16face(0x72e)+_0x16face(0x125)]['type']||_0x4d4c4f[_0x16face(0x330)];},Game_Event['prototype'][_0x3e3bd2(0x680)+_0x3e3bd2(0x3db)+_0x3e3bd2(0x13e)]=function(){const _0xfa6ddc=_0x3e3bd2;if(!this[_0xfa6ddc(0x72e)+_0xfa6ddc(0x125)])return 0x2*-0xc5e+0xe09*-0x1+0x7c1*0x5;return this[_0xfa6ddc(0x72e)+_0xfa6ddc(0x125)]['distance']||0x1f6+0x12ae+-0x14a4;},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x680)+_0x3e3bd2(0x727)]=function(){const _0x1b2cf8=_0x3e3bd2;if(!this[_0x1b2cf8(0x72e)+_0x1b2cf8(0x125)])return[];return this[_0x1b2cf8(0x72e)+'nProximity'][_0x1b2cf8(0x940)]||[];},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x866)+_0x3e3bd2(0x968)]=function(){const _0x6d063d=_0x3e3bd2,_0x24fb68={'FkIkk':_0x6d063d(0x71b),'GbWOt':_0x6d063d(0x6ef)};Game_Character[_0x6d063d(0x294)][_0x6d063d(0x866)+_0x6d063d(0x968)]['call'](this);if([_0x24fb68[_0x6d063d(0x9fa)],_0x24fb68[_0x6d063d(0x45c)]][_0x6d063d(0x1bf)](this[_0x6d063d(0x680)+_0x6d063d(0x4aa)+'ype']()))return;$gamePlayer[_0x6d063d(0x37a)+'TriggerEve'+_0x6d063d(0x89b)+'e']([-0x1012+0x26a8+0x5*-0x484]);},VisuMZ[_0x3e3bd2(0x5eb)+'Core'][_0x3e3bd2(0x879)+_0x3e3bd2(0x4fa)+_0x3e3bd2(0x8b5)+'to']=Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x37a)+_0x3e3bd2(0x95a)+'o'],Game_Event[_0x3e3bd2(0x294)]['checkEvent'+_0x3e3bd2(0x95a)+'o']=function(){const _0x412abf=_0x3e3bd2,_0x1a747e={'cjZtD':_0x412abf(0x49b),'Kddqu':function(_0x58b68b,_0x19b8bf){return _0x58b68b!==_0x19b8bf;}},_0x41b037=_0x1a747e[_0x412abf(0xa14)][_0x412abf(0x424)]('|');let _0x480de1=0x13*-0x1d1+0x1bab+0x3*0x248;while(!![]){switch(_0x41b037[_0x480de1++]){case'0':if(!this['checkActiv'+_0x412abf(0x40e)+_0x412abf(0x179)](![]))return;continue;case'1':VisuMZ[_0x412abf(0x5eb)+_0x412abf(0x8da)][_0x412abf(0x879)+_0x412abf(0x4fa)+_0x412abf(0x8b5)+'to']['call'](this);continue;case'2':if(!this[_0x412abf(0x494)+_0x412abf(0x483)+_0x412abf(0x563)](![]))return;continue;case'3':if(_0x1a747e[_0x412abf(0x582)](this[_0x412abf(0x215)],-0x168a+-0x5*0x4f7+0x17b0*0x2))return;continue;case'4':if(this[_0x412abf(0x72e)+'nProximity'+_0x412abf(0x11c)+_0x412abf(0xa0d)])return;continue;}break;}},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x879)+_0x3e3bd2(0x9a2)+_0x3e3bd2(0x407)]=Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0xa1b)+'llel'],Game_Event['prototype']['updatePara'+'llel']=function(){const _0x2573c2=_0x3e3bd2;if(!this['_interpret'+'er'])return;if(!this[_0x2573c2(0x494)+_0x2573c2(0x483)+'ger'](!![]))return;if(!this[_0x2573c2(0x1e7)+_0x2573c2(0x40e)+_0x2573c2(0x179)](!![]))return;VisuMZ[_0x2573c2(0x5eb)+_0x2573c2(0x8da)][_0x2573c2(0x879)+_0x2573c2(0x9a2)+'allel']['call'](this);},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x494)+_0x3e3bd2(0x483)+'ger']=function(_0x1fb876){const _0x3fc407=_0x3e3bd2,_0xd54e9c={'hbbSW':function(_0x5271bb,_0x183e25){return _0x5271bb<=_0x183e25;}};if(!_0x1fb876&&$gameMap[_0x3fc407(0x935)+_0x3fc407(0x48a)]())return![];if(!_0x1fb876&&$gameMap[_0x3fc407(0x277)+_0x3fc407(0x2e7)]())return![];if(_0xd54e9c[_0x3fc407(0x737)](this[_0x3fc407(0x680)+_0x3fc407(0x727)](),0x175d+0x2664+0x1*-0x3dc1))return!![];return $gamePlayer[_0x3fc407(0x410)+'tionRegion'+_0x3fc407(0x950)](this);},Game_Event['prototype'][_0x3e3bd2(0x1e7)+_0x3e3bd2(0x40e)+'mity']=function(_0x4a1688){const _0x3be63b=_0x3e3bd2,_0x3b54ed={'VVEsV':_0x3be63b(0x71b),'oLymJ':_0x3be63b(0x6ef)};if(!_0x4a1688&&$gameMap[_0x3be63b(0x935)+_0x3be63b(0x48a)]())return![];if(!_0x4a1688&&$gameMap['isAnyEvent'+_0x3be63b(0x2e7)]())return![];if([_0x3b54ed[_0x3be63b(0x58b)],_0x3b54ed[_0x3be63b(0x567)]]['includes'](this[_0x3be63b(0x680)+_0x3be63b(0x4aa)+_0x3be63b(0x6df)]()))return!![];return $gamePlayer[_0x3be63b(0x410)+_0x3be63b(0xa19)+_0x3be63b(0x31d)+_0x3be63b(0x19d)](this);},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x85d)+_0x3e3bd2(0x271)+'pe']=function(_0x18f0d9){const _0x483a8b=_0x3e3bd2,_0x51cd1d={'hxtXk':_0x483a8b(0x71b)},_0x20f944=_0x18f0d9?this[_0x483a8b(0x128)+'HalfProxim'+'ity']:this[_0x483a8b(0x128)+_0x483a8b(0x7a5)+_0x483a8b(0x88c)];return _0x20f944?_0x20f944['type']:_0x51cd1d[_0x483a8b(0x568)];},Game_Event['prototype'][_0x3e3bd2(0x85d)+_0x3e3bd2(0x43f)+_0x3e3bd2(0x959)]=function(_0x2246e5){const _0xb3fb98=_0x3e3bd2,_0x34d972=_0x2246e5?this[_0xb3fb98(0x128)+_0xb3fb98(0x9d7)+_0xb3fb98(0x88c)]:this[_0xb3fb98(0x128)+_0xb3fb98(0x7a5)+_0xb3fb98(0x88c)];return _0x34d972?_0x34d972[_0xb3fb98(0x6d8)]:0xfe8+-0xa20+-0x5c8*0x1;},VisuMZ[_0x3e3bd2(0x3a0)+_0x3e3bd2(0xea)]=function(_0x1e9569){const _0x4dbcea=_0x3e3bd2,_0x3eea43={'scdIF':function(_0x291327,_0x51c3f3){return _0x291327===_0x51c3f3;}};for(const _0x1d0ea5 of $gameMap['events']()){if(!_0x1d0ea5)continue;_0x3eea43['scdIF'](_0x1d0ea5[_0x4dbcea(0x7f7)+_0x4dbcea(0x5d3)](),_0x1e9569)&&_0x1d0ea5[_0x4dbcea(0x531)+_0x4dbcea(0x770)]();}},VisuMZ['GetMoveSyn'+_0x3e3bd2(0x6ca)]=function(_0x351066){const _0x3b224e=_0x3e3bd2,_0x516380={'bdjyu':function(_0x327374,_0x28c5da){return _0x327374===_0x28c5da;}};if(_0x516380[_0x3b224e(0x5ff)](_0x351066,-0xfdc*0x2+0x1ac0+0x4f8))return $gamePlayer;return $gameMap['event'](_0x351066);},Game_CharacterBase['prototype'][_0x3e3bd2(0x531)+_0x3e3bd2(0x484)+_0x3e3bd2(0x6f3)]=function(){},Game_Event['prototype']['updateMove'+_0x3e3bd2(0x484)+_0x3e3bd2(0x6f3)]=function(){const _0x49eb61=_0x3e3bd2;VisuMZ[_0x49eb61(0x1b7)+_0x49eb61(0x89a)+_0x49eb61(0x46b)](this['_eventId']);},VisuMZ[_0x3e3bd2(0x1b7)+_0x3e3bd2(0x89a)+_0x3e3bd2(0x46b)]=function(_0x2ef598){const _0xf194e1=_0x3e3bd2,_0x1acece={'MirQH':function(_0x106c37,_0x186a63){return _0x106c37===_0x186a63;}};for(const _0x24bb3c of $gameMap[_0xf194e1(0x79a)]()){if(!_0x24bb3c)continue;_0x1acece['MirQH'](_0x24bb3c[_0xf194e1(0x7f7)+_0xf194e1(0x5d3)](),_0x2ef598)&&_0x24bb3c[_0xf194e1(0x532)+_0xf194e1(0x64c)+'ction']();}},Game_Event['prototype'][_0x3e3bd2(0x7f7)+'arget']=function(){const _0x147ff3=_0x3e3bd2;return this['_moveSynch'][_0x147ff3(0x7d6)];},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x7f7)+_0x3e3bd2(0x6df)]=function(){const _0x684fe=_0x3e3bd2;return this[_0x684fe(0x211)][_0x684fe(0x7fe)];},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x775)+_0x3e3bd2(0x461)]=function(){const _0x367a04=_0x3e3bd2,_0x1a1057={'YBVXZ':function(_0xcace96,_0x2f4997){return _0xcace96>=_0x2f4997;}};if(_0x1a1057[_0x367a04(0x9fb)](this[_0x367a04(0x7f7)+'arget'](),0x25e6+-0x245f+0x187*-0x1)){const _0x38f0b6=VisuMZ[_0x367a04(0x825)+_0x367a04(0x6ca)](this[_0x367a04(0x7f7)+_0x367a04(0x5d3)]());if(_0x38f0b6)return _0x38f0b6[_0x367a04(0x775)+'eed']();}return Game_Character[_0x367a04(0x294)][_0x367a04(0x775)+_0x367a04(0x461)]['call'](this);},Game_Event[_0x3e3bd2(0x294)]['updateMove'+_0x3e3bd2(0x770)]=function(){const _0x1837e1=_0x3e3bd2,_0x142be6={'FNlgT':_0x1837e1(0x8b8),'wZdWz':function(_0x10e5f9,_0xeefa45){return _0x10e5f9>_0xeefa45;}},_0x56a929=_0x142be6[_0x1837e1(0x6f9)][_0x1837e1(0x424)]('|');let _0x21fa74=-0x2099+0x1be1*-0x1+0x3c7a;while(!![]){switch(_0x56a929[_0x21fa74++]){case'0':this[_0x1837e1(0x211)][_0x1837e1(0x4ff)]--;continue;case'1':this[_0x1837e1(0x211)][_0x1837e1(0x4ff)]=this[_0x1837e1(0x211)][_0x1837e1(0x4ff)]||0x1eb9+-0x1*-0x1e67+-0x1e9*0x20;continue;case'2':this['processMov'+_0x1837e1(0x9a8)]();continue;case'3':this[_0x1837e1(0x211)][_0x1837e1(0x4ff)]=this[_0x1837e1(0x211)][_0x1837e1(0x813)];continue;case'4':if(_0x142be6[_0x1837e1(0x911)](this[_0x1837e1(0x211)][_0x1837e1(0x4ff)],-0x2491+-0x661*-0x1+-0x6*-0x508))return;continue;}break;}},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x2b5)+_0x3e3bd2(0x763)+_0x3e3bd2(0x13c)]=function(_0x46e7c2){const _0x4d7fe0=_0x3e3bd2,_0xd04e50={'aLqON':function(_0x29a4e7,_0x3f48e7){return _0x29a4e7>=_0x3f48e7;},'ccodf':function(_0x3abdbf,_0x5e66da){return _0x3abdbf-_0x5e66da;},'VLbiR':function(_0x2d028a,_0x105344){return _0x2d028a*_0x105344;},'AVuEX':function(_0x3aa3ab,_0x3e00ca){return _0x3aa3ab*_0x3e00ca;}};if(_0xd04e50[_0x4d7fe0(0x778)](this[_0x4d7fe0(0x7f7)+_0x4d7fe0(0x5d3)](),0x2d1*0xd+-0x2*-0x12b9+-0x4a0f*0x1)){const _0x1c3b0d=VisuMZ[_0x4d7fe0(0x825)+_0x4d7fe0(0x6ca)](this[_0x4d7fe0(0x7f7)+_0x4d7fe0(0x5d3)]());if(_0x1c3b0d){const _0x3a62ec=_0xd04e50[_0x4d7fe0(0x873)]($gameMap[_0x4d7fe0(0x6d8)](this[_0x4d7fe0(0x973)],this[_0x4d7fe0(0x3bf)],_0x1c3b0d[_0x4d7fe0(0x973)],_0x1c3b0d[_0x4d7fe0(0x3bf)]),0xb8*-0x17+0x7e3+-0x2e2*-0x3),_0x40afb2=Math[_0x4d7fe0(0xf1)]($gameMap[_0x4d7fe0(0x2c6)](),$gameMap[_0x4d7fe0(0x176)]()),_0xd9b7f0=this[_0x4d7fe0(0x211)][_0x4d7fe0(0x9a4)+'ta']||-0x5*-0x562+-0x21f*-0x3+-0x2147;_0x46e7c2-=_0xd04e50['VLbiR'](_0xd04e50[_0x4d7fe0(0x64e)](Math[_0x4d7fe0(0x51d)](0x86*0x3e+-0x1040+-0x2*0x81a,_0x3a62ec),_0x40afb2),_0xd9b7f0);}}return _0x46e7c2;},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x532)+'eSynch']=function(){const _0x4586f9=_0x3e3bd2,_0x28d90e={'QLkxn':_0x4586f9(0x492),'Rmdng':_0x4586f9(0x7ae),'ovuGr':_0x4586f9(0xa0f),'jPMVQ':_0x4586f9(0x9a7),'sAlxs':_0x4586f9(0x427),'Szcpa':_0x4586f9(0x3f1),'LJJiD':_0x4586f9(0x849)+_0x4586f9(0x370),'WUHHU':_0x4586f9(0x3d8)+'py','WfdTS':'mirror\x20hor'+_0x4586f9(0x82b),'BiCjC':'horizontal'+_0x4586f9(0x7e9),'wQcIV':_0x4586f9(0x8a7)+'z','iRMbA':_0x4586f9(0x29b)+'r','IQoOW':'mirror\x20ver'+'tical','BYwkI':'vertical\x20m'+_0x4586f9(0x768),'fRFAE':_0x4586f9(0x4a5)+'t','qmFLM':_0x4586f9(0x45b)+'r'};switch(this[_0x4586f9(0x7f7)+_0x4586f9(0x6df)]()){case _0x28d90e[_0x4586f9(0x121)]:this[_0x4586f9(0x532)+_0x4586f9(0xa30)+'om']();break;case _0x28d90e['Rmdng']:this[_0x4586f9(0x532)+'eSynchAppr'+_0x4586f9(0x5e9)]();break;case _0x28d90e[_0x4586f9(0x7b9)]:this[_0x4586f9(0x532)+'eSynchAway']();break;case _0x28d90e[_0x4586f9(0x4c9)]:this[_0x4586f9(0x532)+_0x4586f9(0x92f)+'om']();break;case _0x28d90e[_0x4586f9(0x955)]:case _0x28d90e[_0x4586f9(0x985)]:this[_0x4586f9(0x532)+_0x4586f9(0x6c4)+'c']();break;case _0x28d90e[_0x4586f9(0x335)]:case _0x28d90e[_0x4586f9(0x315)]:this[_0x4586f9(0x532)+_0x4586f9(0x49a)+_0x4586f9(0x13d)]();break;case _0x28d90e['WfdTS']:case _0x28d90e[_0x4586f9(0x7ff)]:case _0x28d90e[_0x4586f9(0x53e)]:case _0x28d90e[_0x4586f9(0x686)]:this['processMov'+'eSynchMirr'+_0x4586f9(0x1c5)]();break;case _0x28d90e[_0x4586f9(0x6b6)]:case _0x28d90e[_0x4586f9(0x52a)]:case _0x28d90e[_0x4586f9(0x50f)]:case _0x28d90e[_0x4586f9(0xf7)]:this['processMov'+_0x4586f9(0x587)+_0x4586f9(0x86e)]();break;default:this[_0x4586f9(0x532)+'eSynchRand'+'om']();break;}this['update']();},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x532)+_0x3e3bd2(0xa30)+'om']=function(){const _0x572dbc=_0x3e3bd2,_0x102fb7={'jkHTr':function(_0x8e6e7f,_0x361e0a){return _0x8e6e7f>_0x361e0a;}},_0x4419b9=[0xb76+0x1090+-0xb*0x28c,0x14da+-0x1*0x19a9+0x4d3,0x1*0x24b3+0x1*0x261f+-0x1*0x4acc,0x5*0x72b+0x55b*-0x3+-0x13be];$gameMap['isSupportD'+'iagonalMov'+_0x572dbc(0x571)]()&&_0x4419b9[_0x572dbc(0x61a)](-0x13ed+0x6ce+0xd20,0xe2+0x60f*-0x1+0x530,0x6*-0x6+-0xbbb+0x1*0xbe6,-0x10bf+-0x1*0x1e35+0x2efd);const _0x213c5a=[];for(const _0x29c156 of _0x4419b9){if(this[_0x572dbc(0x1fa)](this['x'],this['y'],_0x29c156))_0x213c5a[_0x572dbc(0x61a)](_0x29c156);}if(_0x102fb7[_0x572dbc(0x635)](_0x213c5a[_0x572dbc(0x3cf)],-0x1f*-0xdf+-0x8c1+-0x1240)){const _0x47f4a7=_0x213c5a[Math[_0x572dbc(0x9f2)](_0x213c5a['length'])];this[_0x572dbc(0x741)+_0x572dbc(0x235)](_0x47f4a7);}},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x532)+'eSynchAppr'+_0x3e3bd2(0x5e9)]=function(){const _0x3aa0a2=_0x3e3bd2,_0x424baa=VisuMZ[_0x3aa0a2(0x825)+_0x3aa0a2(0x6ca)](this[_0x3aa0a2(0x7f7)+_0x3aa0a2(0x5d3)]());this[_0x3aa0a2(0x897)+_0x3aa0a2(0x3e5)](_0x424baa);},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x532)+_0x3e3bd2(0x43c)]=function(){const _0x3f8746=_0x3e3bd2,_0x2cb90e=VisuMZ[_0x3f8746(0x825)+_0x3f8746(0x6ca)](this[_0x3f8746(0x7f7)+'arget']());this[_0x3f8746(0x208)+'omCharacte'+'r'](_0x2cb90e);},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x532)+_0x3e3bd2(0x92f)+'om']=function(){const _0x156f84=_0x3e3bd2;this[_0x156f84(0x4ad)+'ineMove']();},Game_Event['prototype'][_0x3e3bd2(0x532)+_0x3e3bd2(0x6c4)+'c']=function(){const _0x502edb=_0x3e3bd2,_0x3e19b5=VisuMZ['GetMoveSyn'+_0x502edb(0x6ca)](this[_0x502edb(0x7f7)+_0x502edb(0x5d3)]());this[_0x502edb(0x741)+_0x502edb(0x235)](_0x3e19b5[_0x502edb(0x1b9)+_0x502edb(0x716)]());},Game_Event['prototype'][_0x3e3bd2(0x532)+_0x3e3bd2(0x49a)+_0x3e3bd2(0x13d)]=function(){const _0x22dcae=_0x3e3bd2,_0x11b851=VisuMZ[_0x22dcae(0x825)+'chTarget'](this['moveSynchT'+_0x22dcae(0x5d3)]());this['executeMov'+_0x22dcae(0x235)](this['reverseDir'](_0x11b851['lastMovedD'+_0x22dcae(0x716)]()));},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x532)+_0x3e3bd2(0x587)+_0x3e3bd2(0x1c5)]=function(){const _0x5c4e9b=_0x3e3bd2,_0x2060ed=VisuMZ[_0x5c4e9b(0x825)+_0x5c4e9b(0x6ca)](this['moveSynchT'+'arget']()),_0x3e5836=[-0x2288+0x1641*0x1+0xc47,-0x10ae+0x1b6+0xeff,0x3*-0x45+0x14e3+-0x4*0x503,-0x2*-0x8e1+0x199f*-0x1+0x7e6,-0x1*0x1b02+0x12fc+-0x6*-0x157,-0x15d0+-0x3e*0x17+0x1*0x1b62,-0x31*-0xb8+0x998+-0x27d*0x12,0x2144*0x1+-0x5e5+-0x71*0x3e,-0xc87+0x192e+-0xca5,-0x5*-0x591+-0x41f*-0x1+-0xd*0x275][_0x2060ed[_0x5c4e9b(0x1b9)+_0x5c4e9b(0x716)]()];this['executeMov'+_0x5c4e9b(0x235)](_0x3e5836);},Game_Event['prototype'][_0x3e3bd2(0x532)+_0x3e3bd2(0x587)+'orVert']=function(){const _0xf26656=_0x3e3bd2,_0x4608a4=VisuMZ['GetMoveSyn'+_0xf26656(0x6ca)](this[_0xf26656(0x7f7)+_0xf26656(0x5d3)]()),_0x55ba59=[0x5*0x2fc+0xeee+-0x1dda,0x1*-0x1a1+0x1b02+-0x195e,-0x16d5+0x4*0x220+0xe57*0x1,0x2f*-0xc5+-0x9cb*-0x1+-0x1a61*-0x1,-0x533+0x33d*0x2+0x141*-0x1,-0x35+0x1470+-0x143b,-0x1d56+0x23da+-0x10*0x68,0x2*-0x619+-0x16bd+0xc*0x2ea,0x1*-0x1111+-0x1ba7+-0xb3*-0x40,-0x1*-0x1c81+-0x17cc+0x2*-0x257][_0x4608a4[_0xf26656(0x1b9)+_0xf26656(0x716)]()];this[_0xf26656(0x741)+_0xf26656(0x235)](_0x55ba59);},Game_Event[_0x3e3bd2(0x294)]['processMov'+_0x3e3bd2(0x64c)+_0x3e3bd2(0x9c6)]=function(){const _0xe58ab4=_0x3e3bd2,_0x2fbd15={'JxNnP':_0xe58ab4(0x427),'ItRrJ':_0xe58ab4(0x3f1),'komdM':_0xe58ab4(0x849)+_0xe58ab4(0x370),'xvMiK':_0xe58ab4(0x3d8)+'py','QUOSx':_0xe58ab4(0x8a7)+_0xe58ab4(0x82b),'cFwEC':_0xe58ab4(0x42b)+_0xe58ab4(0x7e9),'RHjmH':'mirror\x20hor'+'z','xrwOT':_0xe58ab4(0x29b)+'r','ONkHT':_0xe58ab4(0x4a5)+_0xe58ab4(0x4ab),'PwxbW':_0xe58ab4(0x3ab)+_0xe58ab4(0x768),'kSPVE':'mirror\x20ver'+'t','eyKne':_0xe58ab4(0x45b)+'r'},_0x244bbe=VisuMZ[_0xe58ab4(0x825)+_0xe58ab4(0x6ca)](this[_0xe58ab4(0x7f7)+'arget']()),_0x431859=_0x244bbe[_0xe58ab4(0x580)]();switch(this[_0xe58ab4(0x7f7)+_0xe58ab4(0x6df)]()){case _0x2fbd15[_0xe58ab4(0x2e5)]:case _0x2fbd15['ItRrJ']:this['setDirecti'+'on'](_0x431859);break;case _0x2fbd15[_0xe58ab4(0x7e8)]:case _0x2fbd15[_0xe58ab4(0x4cf)]:this[_0xe58ab4(0x5cb)+'on'](this['reverseDir'](_0x431859));break;case _0x2fbd15[_0xe58ab4(0x27d)]:case _0x2fbd15['cFwEC']:case _0x2fbd15['RHjmH']:case _0x2fbd15[_0xe58ab4(0x871)]:this[_0xe58ab4(0x5cb)+'on']([-0x49*0x3d+0x19*0xf2+-0x63d,0x1*0x521+0x1d04+-0x221e,0x9*-0x304+-0x23f9+-0x35*-0x131,0x1ca5+0x97b*0x3+0x73*-0x7f,0x1*-0x674+0x4*-0x7a6+0x2510,-0xa6a*-0x2+0x23*0x93+0x28ed*-0x1,0x4*-0x26b+-0x2eb*0x9+0x23f5,-0x1541+-0x4b4*0x4+0x2e*0xdf,-0x2663+0x1f36+0x72f,0x139*-0x15+-0x1*-0x2325+0x3*-0x327][_0x431859]);break;case _0x2fbd15['ONkHT']:case _0x2fbd15[_0xe58ab4(0x132)]:case _0x2fbd15[_0xe58ab4(0x74e)]:case _0x2fbd15[_0xe58ab4(0x573)]:this[_0xe58ab4(0x5cb)+'on']([-0x107*-0x23+-0xb6*-0xa+0x3f*-0xaf,0x22ff*0x1+0x2106+-0x4402,-0x1ae9*0x1+0xdf*0x17+-0x1*-0x6e2,-0x167a+0xa9*0x30+-0x935,-0x19da+-0x44f*-0x5+0x455,0x24b*0x2+0x1ac0+-0x1f56,-0x1e01+-0x203f*0x1+0x4*0xf91,-0x1b83+0x7*0x67+0xd*0x1e7,-0x13c5+-0x695*0x1+0x1*0x1a62,-0x76+0x1d62+-0x1ce5*0x1][_0x431859]);break;default:return;}this[_0xe58ab4(0x117)]();},Game_Event[_0x3e3bd2(0x294)]['restoreSav'+_0x3e3bd2(0x283)+_0x3e3bd2(0x720)]=function(){const _0x1bfa9c=_0x3e3bd2,_0x47025b={'Ehgme':function(_0x51ab9a,_0x350f84){return _0x51ab9a===_0x350f84;}},_0x5d91c0=$gameSystem[_0x1bfa9c(0x82d)+_0x1bfa9c(0x114)+'n'](this);if(!_0x5d91c0)return;this['setPositio'+'n'](_0x5d91c0['x'],_0x5d91c0['y']),this['refreshBus'+_0x1bfa9c(0x7e6)](),this['setDirecti'+'on'](_0x5d91c0[_0x1bfa9c(0x580)]),_0x47025b[_0x1bfa9c(0x1be)](this[_0x1bfa9c(0x89c)],_0x5d91c0['pageIndex'])&&(this['_moveRoute'+_0x1bfa9c(0x57e)]=_0x5d91c0['moveRouteI'+_0x1bfa9c(0x751)]);},VisuMZ[_0x3e3bd2(0x5eb)+'Core'][_0x3e3bd2(0x879)+_0x3e3bd2(0x1b2)]=Game_Event[_0x3e3bd2(0x294)]['update'],Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x117)]=function(){const _0x36b89d=_0x3e3bd2;VisuMZ[_0x36b89d(0x5eb)+_0x36b89d(0x8da)][_0x36b89d(0x879)+_0x36b89d(0x1b2)][_0x36b89d(0x3f6)](this),!Utils[_0x36b89d(0x528)+_0x36b89d(0x5e7)]()&&this['updateSave'+_0x36b89d(0x636)+_0x36b89d(0x96e)]();},Game_Event['prototype'][_0x3e3bd2(0x531)]=function(){const _0x321a6f=_0x3e3bd2;Game_Character[_0x321a6f(0x294)][_0x321a6f(0x531)][_0x321a6f(0x3f6)](this),this[_0x321a6f(0x94d)+'entLocatio'+'n']();},Game_Event['prototype'][_0x3e3bd2(0x30a)+_0x3e3bd2(0x626)]=function(){const _0x154a97=_0x3e3bd2;if($gameMap[_0x154a97(0x30a)+'tLocations']())return!![];return this['_saveEvent'+_0x154a97(0x679)];},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x94d)+'entLocatio'+'n']=function(){const _0x307a8f=_0x3e3bd2;if(!this['isSaveEven'+_0x307a8f(0x626)]())return;this[_0x307a8f(0x6f7)+_0x307a8f(0x313)]();},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x6f7)+'ocation']=function(){const _0x5eb633=_0x3e3bd2;this['_requestSa'+_0x5eb633(0x14f)+'ation']=!![];},Game_Event['prototype']['updateSave'+_0x3e3bd2(0x636)+'ion']=function(){const _0x246a7c=_0x3e3bd2;this[_0x246a7c(0x94f)+_0x246a7c(0x14f)+'ation']&&this[_0x246a7c(0x175)+'eEventLoca'+_0x246a7c(0x6f3)]();},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x175)+'eEventLoca'+'tion']=function(){const _0x2d83d4=_0x3e3bd2;this[_0x2d83d4(0x94f)+_0x2d83d4(0x14f)+'ation']=![],$gameSystem['saveEventL'+'ocation'](this);},Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x78b)+'tLocation']=function(){const _0x2e0ac0=_0x3e3bd2;$gameSystem[_0x2e0ac0(0x7f6)+_0x2e0ac0(0x52b)+_0x2e0ac0(0x6f3)](this);},Game_Event['prototype'][_0x3e3bd2(0x81c)+'onData']=function(){const _0x3e88db=_0x3e3bd2;return $gameSystem[_0x3e88db(0x81c)+_0x3e88db(0x8f4)](this)?Game_Character[_0x3e88db(0x294)][_0x3e88db(0x81c)+_0x3e88db(0x8f4)]['call'](this):{'iconIndex':0x0,'bufferX':settings[_0x3e88db(0x99a)][_0x3e88db(0x126)],'bufferY':settings['Icon']['BufferY'],'blendMode':settings['Icon'][_0x3e88db(0x409)]};},Game_Event[_0x3e3bd2(0x294)]['hasCPCs']=function(){return this['_CPCs'];},VisuMZ[_0x3e3bd2(0x5eb)+'Core'][_0x3e3bd2(0x879)+_0x3e3bd2(0x847)+'itionsCPC']=Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x9c7)+_0x3e3bd2(0x551)],Game_Event['prototype'][_0x3e3bd2(0x9c7)+_0x3e3bd2(0x551)]=function(_0x53778){const _0x4ae5d5=_0x3e3bd2,_0x41c8b4=VisuMZ[_0x4ae5d5(0x5eb)+_0x4ae5d5(0x8da)][_0x4ae5d5(0x879)+_0x4ae5d5(0x847)+_0x4ae5d5(0x604)]['call'](this,_0x53778);if(!_0x41c8b4)return![];return this[_0x4ae5d5(0x378)](_0x53778);},Game_Event['prototype'][_0x3e3bd2(0x378)]=function(_0x4e237a){const _0x44af55=_0x3e3bd2,_0x4f980d={'tKHHR':_0x44af55(0x822),'EuFck':function(_0x2f97fc,_0x5c8c26){return _0x2f97fc>_0x5c8c26;},'lWezH':function(_0x35dc4f,_0x199c20){return _0x35dc4f===_0x199c20;}},_0x158c68=_0x4f980d[_0x44af55(0x58a)][_0x44af55(0x424)]('|');let _0x6571b5=-0xa03+-0x2*-0x950+-0x3*0x2df;while(!![]){switch(_0x158c68[_0x6571b5++]){case'0':if(_0x4f980d[_0x44af55(0x10e)](_0x4e237a[_0x44af55(0x975)][_0x44af55(0x3cf)],-0x4e*-0x28+0x56b*-0x5+-0x2fb*-0x5))return $gameMap['event'](this[_0x44af55(0x4a0)])&&VisuMZ['EventsMove'+'Core'][_0x44af55(0x810)+_0x44af55(0x950)][_0x44af55(0x9b9)](_0x4e237a['CPC'],this[_0x44af55(0x4a0)]);continue;case'1':this['_CPCs']=_0x4f980d[_0x44af55(0x10e)](_0x4e237a['CPC'][_0x44af55(0x3cf)],-0x2501+-0x10b6*0x1+-0x35b7*-0x1);continue;case'2':VisuMZ[_0x44af55(0x5eb)+_0x44af55(0x8da)][_0x44af55(0x810)+_0x44af55(0x950)][_0x44af55(0x6de)](_0x4e237a);continue;case'3':_0x4f980d[_0x44af55(0x8f5)](_0x4e237a[_0x44af55(0x975)],undefined)&&VisuMZ[_0x44af55(0x5eb)+_0x44af55(0x8da)][_0x44af55(0x810)+_0x44af55(0x950)]['loadCPC'](_0x4e237a);continue;case'4':return!![];}break;}},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x967)+_0x3e3bd2(0x847)+'itionsCPC']=Game_Troop['prototype'][_0x3e3bd2(0x9c7)+_0x3e3bd2(0x551)],Game_Troop[_0x3e3bd2(0x294)][_0x3e3bd2(0x9c7)+_0x3e3bd2(0x551)]=function(_0xc858d7){const _0x415d05=_0x3e3bd2;var _0x29e8c1=VisuMZ[_0x415d05(0x5eb)+_0x415d05(0x8da)][_0x415d05(0x967)+_0x415d05(0x847)+_0x415d05(0x604)]['call'](this,_0xc858d7);return _0x29e8c1&&this[_0x415d05(0x988)](_0xc858d7);},Game_Troop[_0x3e3bd2(0x294)][_0x3e3bd2(0x988)]=function(_0x5fe25e){const _0x31ad19=_0x3e3bd2,_0x34996d={'nJLZM':function(_0x36782c,_0x15a501){return _0x36782c===_0x15a501;},'xxPyq':function(_0x2557a8,_0x51aea5){return _0x2557a8>_0x51aea5;}};_0x34996d[_0x31ad19(0x8f9)](_0x5fe25e[_0x31ad19(0x975)],undefined)&&VisuMZ[_0x31ad19(0x5eb)+_0x31ad19(0x8da)][_0x31ad19(0x810)+_0x31ad19(0x950)][_0x31ad19(0x6de)](_0x5fe25e);if(_0x34996d[_0x31ad19(0xa2c)](_0x5fe25e[_0x31ad19(0x975)][_0x31ad19(0x3cf)],-0x17e9*0x1+-0x226e+0x3a57))return VisuMZ['EventsMove'+_0x31ad19(0x8da)][_0x31ad19(0x810)+'Conditions'][_0x31ad19(0x9b9)](_0x5fe25e[_0x31ad19(0x975)],0x1ce8+0x1783*-0x1+-0x565*0x1);return!![];},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x879)+_0x3e3bd2(0x35f)]=Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x3b7)],Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x3b7)]=function(_0x5918ef,_0x5ea5f6){const _0x21970f=_0x3e3bd2;VisuMZ[_0x21970f(0x5eb)+_0x21970f(0x8da)][_0x21970f(0x879)+_0x21970f(0x35f)]['call'](this,_0x5918ef,_0x5ea5f6),this[_0x21970f(0x204)+'eX']=_0x5918ef,this[_0x21970f(0x204)+'eY']=_0x5ea5f6,this[_0x21970f(0x94d)+_0x21970f(0x114)+'n']();},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x879)+_0x3e3bd2(0x73e)+'andom']=Game_Event[_0x3e3bd2(0x294)][_0x3e3bd2(0x777)+_0x3e3bd2(0x1c7)],Game_Event[_0x3e3bd2(0x294)]['moveTypeRa'+'ndom']=function(){const _0x3c31c7=_0x3e3bd2,_0x24b64a={'OHhyt':function(_0x4a5ce5,_0x5cb6e3){return _0x4a5ce5*_0x5cb6e3;},'nrmni':function(_0x2b5689,_0x342f69){return _0x2b5689>=_0x342f69;}},_0x3618c9=$gameMap[_0x3c31c7(0x6d8)](this['x'],this['y'],this[_0x3c31c7(0x204)+'eX'],this[_0x3c31c7(0x204)+'eY']),_0x95f38c=_0x24b64a[_0x3c31c7(0x3e7)](_0x3618c9,this[_0x3c31c7(0x222)+'eWeight']||0x2*-0x62d+-0x8d0+0x152a);_0x24b64a[_0x3c31c7(0x36b)](Math[_0x3c31c7(0x492)](),_0x95f38c)?VisuMZ['EventsMove'+_0x3c31c7(0x8da)][_0x3c31c7(0x879)+_0x3c31c7(0x73e)+_0x3c31c7(0x2f3)][_0x3c31c7(0x3f6)](this):this['moveBackTo'+_0x3c31c7(0x8c0)]();},Game_Event['prototype'][_0x3e3bd2(0x8de)+'RandomHome']=function(){const _0x54bb84=_0x3e3bd2,_0xd58e70={'gcnew':function(_0x11e899,_0x2b2ff0){return _0x11e899>_0x2b2ff0;},'CMofy':function(_0x37f4ec,_0x232387){return _0x37f4ec>_0x232387;},'UBgRQ':function(_0x1a4f73,_0x3cfb48){return _0x1a4f73!==_0x3cfb48;},'AlgPs':function(_0x2dae01,_0x3b05df){return _0x2dae01!==_0x3b05df;}},_0x4a2d76=this['deltaXFrom'](this[_0x54bb84(0x204)+'eX']),_0xd8bcbd=this['deltaYFrom'](this['_randomHom'+'eY']);if(_0xd58e70[_0x54bb84(0x146)](Math[_0x54bb84(0x90a)](_0x4a2d76),Math[_0x54bb84(0x90a)](_0xd8bcbd)))this[_0x54bb84(0x8a4)+'ht'](_0xd58e70['CMofy'](_0x4a2d76,-0x341+0x1cf3*-0x1+0xe5*0x24)?-0xef*-0x8+0x7c9*-0x2+-0x40f*-0x2:0x1*-0x83c+-0x1e*0x9e+-0x1ac6*-0x1),!this[_0x54bb84(0x1b1)+_0x54bb84(0x639)]()&&_0xd58e70[_0x54bb84(0x36c)](_0xd8bcbd,0x1c44+-0x1*-0x2362+-0x3fa6)&&this[_0x54bb84(0x8a4)+'ht'](_0xd58e70[_0x54bb84(0x146)](_0xd8bcbd,0x2246+-0x11cf+-0x1077*0x1)?0x2*-0x581+-0x1*-0x4ed+0x61d:-0xfe7+0x22b+0xdbe);else _0xd58e70[_0x54bb84(0x8c3)](_0xd8bcbd,0x1*0x262d+0xdd9+0x1*-0x3406)&&(this[_0x54bb84(0x8a4)+'ht'](_0xd58e70[_0x54bb84(0x146)](_0xd8bcbd,0x12a3+0x1*0x5ab+-0x184e)?-0x1841+-0x5d5+0x1*0x1e1e:0x462+-0x1e*0x9c+-0x164*-0xa),!this['isMovement'+_0x54bb84(0x639)]()&&_0xd58e70[_0x54bb84(0x8c3)](_0x4a2d76,-0x2c*-0x19+0x1*-0x1112+0xcc6)&&this[_0x54bb84(0x8a4)+'ht'](_0xd58e70['gcnew'](_0x4a2d76,-0x15b0+0x759+0xe57)?0x951+0x5*-0x21e+-0x2f*-0x7:0x17cf+-0x1*-0x207d+-0x3846));},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x9a3)+_0x3e3bd2(0x69b)+_0x3e3bd2(0x72a)]=function(){const _0x3eb9bb=_0x3e3bd2;this[_0x3eb9bb(0x43b)+_0x3eb9bb(0x14e)]={'filename':'','blendMode':0x0,'maxSize':0x0,'offsetX':0x0,'offsetY':0x0,'scale':0x1};},Game_CharacterBase['prototype']['attachPict'+_0x3e3bd2(0x2e0)+'s']=function(){const _0x13189e=_0x3e3bd2,_0xea399e={'iiJQa':function(_0x2ce67a,_0x270f7d){return _0x2ce67a===_0x270f7d;}};if(_0xea399e[_0x13189e(0x1e4)](this[_0x13189e(0x43b)+_0x13189e(0x14e)],undefined))this[_0x13189e(0x9a3)+_0x13189e(0x69b)+_0x13189e(0x72a)]();return this[_0x13189e(0x43b)+'ture'];},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x969)+'ureFilenam'+'e']=function(){const _0x6ec833=_0x3e3bd2;return this['attachPict'+_0x6ec833(0x2e0)+'s']()[_0x6ec833(0x868)]??'';},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x969)+_0x3e3bd2(0x7ac)+'de']=function(){const _0x153ad1=_0x3e3bd2;return this[_0x153ad1(0x969)+'ureSetting'+'s']()[_0x153ad1(0x51e)]??-0x17*-0x192+-0x26f*0x1+-0x21af;},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x969)+'ureMaxSize']=function(){const _0x182712=_0x3e3bd2;return this['attachPict'+_0x182712(0x2e0)+'s']()[_0x182712(0x348)]??0x1*-0x647+-0x987+0xfce;},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x969)+_0x3e3bd2(0x352)]=function(){const _0x57f8fd=_0x3e3bd2;return this['attachPict'+_0x57f8fd(0x2e0)+'s']()[_0x57f8fd(0x612)]??-0x3*0x2e3+-0x12ef*0x2+0x2e87;},Game_CharacterBase['prototype']['attachPict'+_0x3e3bd2(0x48c)]=function(){const _0x44e7db=_0x3e3bd2;return this['attachPict'+_0x44e7db(0x2e0)+'s']()['offsetY']??-0x1*0x1ac6+0x1*-0x43f+0xa57*0x3;},Game_CharacterBase[_0x3e3bd2(0x294)][_0x3e3bd2(0x969)+'ureScale']=function(){const _0x26d5c0=_0x3e3bd2;return this[_0x26d5c0(0x969)+_0x26d5c0(0x2e0)+'s']()[_0x26d5c0(0x8ed)]??0x23*-0x14+-0x3*-0x68f+-0x1*0x10f0;},VisuMZ['EventsMove'+'Core'][_0x3e3bd2(0x14c)+_0x3e3bd2(0x5d6)+_0x3e3bd2(0x9dd)+'e']=Game_Interpreter['prototype'][_0x3e3bd2(0x3d4)+_0x3e3bd2(0x430)],Game_Interpreter[_0x3e3bd2(0x294)][_0x3e3bd2(0x3d4)+'Mode']=function(){const _0x4b4e5e=_0x3e3bd2,_0x38df44={'rPaWK':function(_0x409128,_0x47cae6){return _0x409128===_0x47cae6;},'HYCtL':'CallEvent'};if(_0x38df44[_0x4b4e5e(0x789)](this[_0x4b4e5e(0x797)],_0x38df44['HYCtL'])){if(window[this[_0x4b4e5e(0x3e3)+_0x4b4e5e(0x859)]])this[_0x4b4e5e(0x797)]='',this[_0x4b4e5e(0x608)+_0x4b4e5e(0x413)]();else return!![];}else return VisuMZ[_0x4b4e5e(0x5eb)+_0x4b4e5e(0x8da)]['Game_Inter'+'preter_upd'+_0x4b4e5e(0x9dd)+'e'][_0x4b4e5e(0x3f6)](this);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x14c)+_0x3e3bd2(0x415)+_0x3e3bd2(0x6a7)+'d']=Game_Interpreter[_0x3e3bd2(0x294)][_0x3e3bd2(0x72f)+_0x3e3bd2(0x46a)],Game_Interpreter['prototype']['executeCom'+_0x3e3bd2(0x46a)]=function(){const _0x81b9a3=_0x3e3bd2,_0x5c9bdb=$gameMap&&this[_0x81b9a3(0x4a0)]?$gameMap[_0x81b9a3(0x620)](this[_0x81b9a3(0x4a0)]):null;$gameTemp[_0x81b9a3(0x951)+_0x81b9a3(0xfc)](_0x5c9bdb);const _0x52810b=VisuMZ[_0x81b9a3(0x5eb)+_0x81b9a3(0x8da)][_0x81b9a3(0x14c)+_0x81b9a3(0x415)+'cuteComman'+'d'][_0x81b9a3(0x3f6)](this);return $gameTemp[_0x81b9a3(0x153)+'arget'](),_0x52810b;},VisuMZ['EventsMove'+_0x3e3bd2(0x8da)][_0x3e3bd2(0x14c)+_0x3e3bd2(0x7b5)+'ginCommand']=Game_Interpreter[_0x3e3bd2(0x294)][_0x3e3bd2(0x205)],Game_Interpreter['prototype'][_0x3e3bd2(0x205)]=function(_0x3733be){const _0x269c4a=_0x3e3bd2;return $gameTemp[_0x269c4a(0x4af)+'ginCommand'+'Interprete'+'r'](this),VisuMZ[_0x269c4a(0x5eb)+_0x269c4a(0x8da)][_0x269c4a(0x14c)+_0x269c4a(0x7b5)+_0x269c4a(0x546)][_0x269c4a(0x3f6)](this,_0x3733be);},Game_Interpreter[_0x3e3bd2(0x294)]['pluginComm'+_0x3e3bd2(0x890)+'nt']=function(_0x1dcd7f){const _0x2e6c53=_0x3e3bd2,_0x3ddb72={'NrmbR':'Map%1.json','CokBH':function(_0x26e464,_0x55d304){return _0x26e464+_0x55d304;},'jUUtO':function(_0x7dea3c,_0xa2e2de){return _0x7dea3c+_0xa2e2de;},'FtrXY':_0x2e6c53(0x1e9)+_0x2e6c53(0x859),'UkdxZ':_0x2e6c53(0x2aa)};this[_0x2e6c53(0x3e3)+_0x2e6c53(0x886)]=_0x1dcd7f;const _0x24314f=_0x3ddb72['NrmbR']['format'](_0x1dcd7f['mapId'][_0x2e6c53(0x4f2)](0xd8b+-0x2*-0x94+-0xeb0));this[_0x2e6c53(0x3e3)+_0x2e6c53(0x859)]=_0x3ddb72[_0x2e6c53(0x356)](_0x3ddb72[_0x2e6c53(0x67c)](_0x3ddb72[_0x2e6c53(0x67c)](_0x3ddb72[_0x2e6c53(0x665)],Graphics['frameCount']),'_'),this[_0x2e6c53(0x363)]()),DataManager[_0x2e6c53(0x285)+'le'](this[_0x2e6c53(0x3e3)+_0x2e6c53(0x859)],_0x24314f),window[this[_0x2e6c53(0x3e3)+_0x2e6c53(0x859)]]?this['startCallE'+_0x2e6c53(0x413)]():this[_0x2e6c53(0x449)+'e'](_0x3ddb72[_0x2e6c53(0x7f0)]);},Game_Interpreter[_0x3e3bd2(0x294)][_0x3e3bd2(0x608)+'vent']=function(){const _0x20834b=_0x3e3bd2,_0x55f96b={'nXGXH':function(_0x28aefc,_0x5df6d7){return _0x28aefc-_0x5df6d7;}},_0x5d25bd=this['_callEvent'+_0x20834b(0x886)],_0x489bbc=window[this['_callEvent'+_0x20834b(0x859)]],_0x271c62=_0x489bbc[_0x20834b(0x79a)][_0x5d25bd[_0x20834b(0x363)]];if(_0x271c62&&_0x271c62[_0x20834b(0x2d6)][_0x55f96b['nXGXH'](_0x5d25bd[_0x20834b(0x7a2)],0x263*-0x1+-0x5b2+0x5a*0x17)]){const _0x4f05df=_0x271c62[_0x20834b(0x2d6)][_0x55f96b[_0x20834b(0x5b9)](_0x5d25bd[_0x20834b(0x7a2)],-0xead*-0x1+-0x52c*-0x7+0xb*-0x4a0)][_0x20834b(0x5f0)];this[_0x20834b(0x111)](_0x4f05df,this[_0x20834b(0x363)]());}window[this[_0x20834b(0x3e3)+_0x20834b(0x859)]]=undefined,this['_callEvent'+_0x20834b(0x859)]=undefined,this[_0x20834b(0x3e3)+_0x20834b(0x886)]=undefined;};function _0x4f69(_0x543b6d,_0x67f316){const _0x4af06b=_0x320f();return _0x4f69=function(_0x32e6c7,_0x345cbe){_0x32e6c7=_0x32e6c7-(0x131*-0x1a+0x16c6+-0x1*-0x911);let _0x2dae98=_0x4af06b[_0x32e6c7];return _0x2dae98;},_0x4f69(_0x543b6d,_0x67f316);}function Game_CPCInterpreter(){const _0x1a84bd=_0x3e3bd2;this[_0x1a84bd(0x386)][_0x1a84bd(0x199)](this,arguments);};Game_CPCInterpreter[_0x3e3bd2(0x294)]=Object[_0x3e3bd2(0x671)](Game_Interpreter[_0x3e3bd2(0x294)]),Game_CPCInterpreter[_0x3e3bd2(0x294)][_0x3e3bd2(0x9f3)+'r']=Game_CPCInterpreter,Game_CPCInterpreter['prototype'][_0x3e3bd2(0x217)]=function(){const _0x31caa0=_0x3e3bd2;Game_Interpreter['prototype'][_0x31caa0(0x217)][_0x31caa0(0x3f6)](this),this[_0x31caa0(0x50c)]=![];},Game_CPCInterpreter[_0x3e3bd2(0x294)][_0x3e3bd2(0x83b)]=function(){const _0x3eb41d=_0x3e3bd2;while(this[_0x3eb41d(0x594)]()){this[_0x3eb41d(0x72f)+_0x3eb41d(0x46a)]();}},Game_CPCInterpreter[_0x3e3bd2(0x294)][_0x3e3bd2(0x72f)+_0x3e3bd2(0x77b)]=function(_0x130596){const _0x1f5f6b=_0x3e3bd2;while(this['isRunning']()){this[_0x1f5f6b(0x72f)+_0x1f5f6b(0x63e)+_0x1f5f6b(0x6ff)](_0x130596);}},Game_CPCInterpreter['prototype'][_0x3e3bd2(0x72f)+_0x3e3bd2(0x63e)+_0x3e3bd2(0x6ff)]=function(_0xe5efa7){const _0x5d5b1c=_0x3e3bd2,_0x1225e8=_0xe5efa7;$gameTemp[_0x5d5b1c(0x951)+'lfTarget'](_0x1225e8);const _0x1bf5e0=VisuMZ['EventsMove'+'Core'][_0x5d5b1c(0x14c)+_0x5d5b1c(0x415)+'cuteComman'+'d']['call'](this);return $gameTemp[_0x5d5b1c(0x153)+_0x5d5b1c(0x5d3)](),_0x1bf5e0;},Game_CPCInterpreter[_0x3e3bd2(0x294)][_0x3e3bd2(0x691)]=function(_0x37e7dd){const _0x4347a9=_0x3e3bd2;return Game_Interpreter[_0x4347a9(0x294)][_0x4347a9(0x691)][_0x4347a9(0x3f6)](this,_0x37e7dd),this[_0x4347a9(0xa22)]['some'](_0x2b4350=>_0x2b4350[_0x4347a9(0x848)](/<(?:CONDITION|CONDITIONS) MET>/i))&&(this[_0x4347a9(0x50c)]=!![]),!![];},VisuMZ['EventsMove'+_0x3e3bd2(0x8da)][_0x3e3bd2(0x900)+_0x3e3bd2(0x94e)+'nterEffect']=Scene_Map['prototype'][_0x3e3bd2(0x94e)+_0x3e3bd2(0x501)],Scene_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x94e)+_0x3e3bd2(0x501)]=function(){const _0x20bdc9=_0x3e3bd2;VisuMZ[_0x20bdc9(0x5eb)+_0x20bdc9(0x8da)][_0x20bdc9(0x900)+_0x20bdc9(0x94e)+_0x20bdc9(0x501)][_0x20bdc9(0x3f6)](this),this['_spriteset'][_0x20bdc9(0x86f)+'s']();},VisuMZ[_0x3e3bd2(0x5eb)+'Core'][_0x3e3bd2(0x115)+'_onLoadSuc'+_0x3e3bd2(0x87a)]=Scene_Load[_0x3e3bd2(0x294)][_0x3e3bd2(0x621)+_0x3e3bd2(0x529)],Scene_Load[_0x3e3bd2(0x294)][_0x3e3bd2(0x621)+'ess']=function(){const _0x35f519=_0x3e3bd2;if($gameMap)$gameMap[_0x35f519(0x4a8)+_0x35f519(0x769)]();VisuMZ[_0x35f519(0x5eb)+_0x35f519(0x8da)][_0x35f519(0x115)+_0x35f519(0x144)+_0x35f519(0x87a)]['call'](this);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x910)+_0x3e3bd2(0x450)+'tMembers']=Sprite_Character['prototype'][_0x3e3bd2(0x9b6)+'s'],Sprite_Character[_0x3e3bd2(0x294)]['initMember'+'s']=function(){const _0x51b89f=_0x3e3bd2;VisuMZ[_0x51b89f(0x5eb)+_0x51b89f(0x8da)][_0x51b89f(0x910)+_0x51b89f(0x450)+'tMembers'][_0x51b89f(0x3f6)](this),this[_0x51b89f(0x9b6)+'sEventsMov'+_0x51b89f(0x963)](),this[_0x51b89f(0x8d3)+_0x51b89f(0x723)+_0x51b89f(0x9ea)](),this[_0x51b89f(0x653)+'Sprite']();},Sprite_Character['prototype'][_0x3e3bd2(0x9b6)+_0x3e3bd2(0x545)+_0x3e3bd2(0x963)]=function(){const _0x5e14be=_0x3e3bd2;this[_0x5e14be(0x5c8)+_0x5e14be(0x750)]=-0x20b*-0x2+0x124+-0x43b;},Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x8d3)+_0x3e3bd2(0x723)+_0x3e3bd2(0x9ea)]=function(){const _0x8e5c41=_0x3e3bd2,_0x5c83c0={'RgAQL':_0x8e5c41(0x97d)},_0x560b55=_0x5c83c0[_0x8e5c41(0x574)][_0x8e5c41(0x424)]('|');let _0x638966=0x2121+-0x17*0x13+0x4*-0x7db;while(!![]){switch(_0x560b55[_0x638966++]){case'0':this[_0x8e5c41(0x43b)+_0x8e5c41(0x928)][_0x8e5c41(0x552)]['x']=-0x1543+-0x4b*0x1d+0x1dc2+0.5;continue;case'1':this['addChild'](this[_0x8e5c41(0x43b)+_0x8e5c41(0x928)]);continue;case'2':this['_attachPic'+'tureSprite']=new Sprite();continue;case'3':this['updateAtta'+'chPictureS'+'prite']();continue;case'4':this[_0x8e5c41(0x43b)+_0x8e5c41(0x928)][_0x8e5c41(0x552)]['y']=0x2*-0x80a+0x11*0x1f5+0xb0*-0x19;continue;}break;}},Sprite_Character[_0x3e3bd2(0x294)]['createIcon'+_0x3e3bd2(0x1c6)]=function(){const _0x21152a=_0x3e3bd2,_0x263294={'majvn':_0x21152a(0x68e)+'6|3','DkpqU':_0x21152a(0x17e)},_0x5e9f5a=_0x263294['majvn'][_0x21152a(0x424)]('|');let _0x3ba74d=0xbc*0x4+-0x169+-0x187;while(!![]){switch(_0x5e9f5a[_0x3ba74d++]){case'0':this[_0x21152a(0x8db)+_0x21152a(0x1c6)]=new Sprite();continue;case'1':this['_eventIcon'+_0x21152a(0x1c6)][_0x21152a(0x552)]['x']=-0x497+0x570+0x1f*-0x7+0.5;continue;case'2':this[_0x21152a(0x8db)+_0x21152a(0x1c6)][_0x21152a(0x5fc)]['smooth']=![];continue;case'3':this[_0x21152a(0x796)](this['_eventIcon'+_0x21152a(0x1c6)]);continue;case'4':this['_eventIcon'+_0x21152a(0x1c6)][_0x21152a(0x767)](-0x1dbd+0x1c50+0x49*0x5,-0x1195+0x4f1*0x7+-0x2*0x881,-0x92+0x7*0x45a+0x779*-0x4,-0x181*-0x16+-0x18da+-0x83c);continue;case'5':this['_eventIcon'+_0x21152a(0x1c6)][_0x21152a(0x5fc)]=ImageManager[_0x21152a(0x3c4)](_0x263294[_0x21152a(0x7bc)]);continue;case'6':this[_0x21152a(0x8db)+_0x21152a(0x1c6)][_0x21152a(0x552)]['y']=-0xeb*0x17+0x29*-0xa3+0x2f39;continue;}break;}},Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x443)+'8dir']=function(){const _0x1ec470=_0x3e3bd2;return this[_0x1ec470(0x1dc)+_0x1ec470(0x1d8)]&&this[_0x1ec470(0x1dc)+_0x1ec470(0x1d8)][_0x1ec470(0x848)](/\[VS8\]/i);},Sprite_Character[_0x3e3bd2(0x294)]['isAutoBuff'+'erIcon']=function(){const _0x213255=_0x3e3bd2;return this[_0x213255(0x443)+_0x213255(0x6b0)]()&&VisuMZ[_0x213255(0x5eb)+'Core'][_0x213255(0x668)][_0x213255(0x454)]['AutoBuffer'];},VisuMZ['EventsMove'+_0x3e3bd2(0x8da)][_0x3e3bd2(0x910)+'racter_upd'+_0x3e3bd2(0x16b)]=Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x117)],Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x117)]=function(){const _0x48b684=_0x3e3bd2;VisuMZ[_0x48b684(0x5eb)+_0x48b684(0x8da)][_0x48b684(0x910)+_0x48b684(0x273)+_0x48b684(0x16b)][_0x48b684(0x3f6)](this),this[_0x48b684(0x69a)+_0x48b684(0x3ea)+_0x48b684(0x327)]();},Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0xa34)+_0x3e3bd2(0x32e)]=function(){const _0x44f829=_0x3e3bd2;Sprite[_0x44f829(0x294)][_0x44f829(0xa34)+_0x44f829(0x32e)][_0x44f829(0x3f6)](this),this[_0x44f829(0x3a4)+_0x44f829(0x957)+_0x44f829(0xe1)]()&&(this[_0x44f829(0x576)]=![]);},Sprite_Character[_0x3e3bd2(0x294)]['isEventsMo'+_0x3e3bd2(0x957)+_0x3e3bd2(0xe1)]=function(){const _0x2c71fc=_0x3e3bd2,_0x1817e8={'wPBOj':function(_0x1bb937,_0x2247dd){return _0x1bb937>_0x2247dd;},'VtvSS':function(_0x1452b0,_0x5ab803){return _0x1452b0!==_0x5ab803;}};if(_0x1817e8[_0x2c71fc(0x84f)](this['getEventIc'+_0x2c71fc(0x8d2)](),-0xd9f*-0x1+0x252+0x7*-0x247))return![];if(this['_character']){if(_0x1817e8[_0x2c71fc(0x78e)](this['_character']['attachPict'+'ureFilenam'+'e'](),''))return![];}return this[_0x2c71fc(0x68a)+_0x2c71fc(0x9c1)]()||this['_character']&&this[_0x2c71fc(0x1dc)][_0x2c71fc(0xf4)+_0x2c71fc(0x498)]();},Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x69a)+_0x3e3bd2(0x3ea)+_0x3e3bd2(0x327)]=function(){const _0x5a3f14=_0x3e3bd2,_0x25edda={'seAqc':_0x5a3f14(0x1d6)+'4|1'},_0x3c71ac=_0x25edda[_0x5a3f14(0x7dd)][_0x5a3f14(0x424)]('|');let _0x2a79f7=0x1*-0x2177+-0x1a55+0x2*0x1de6;while(!![]){switch(_0x3c71ac[_0x2a79f7++]){case'0':this[_0x5a3f14(0x645)+'ow']();continue;case'1':this['updateAtta'+'chPictureS'+_0x5a3f14(0x9ea)]();continue;case'2':this[_0x5a3f14(0x69a)+'tCustomZ']();continue;case'3':this[_0x5a3f14(0x69a)+'tIconSprit'+'e']();continue;case'4':this[_0x5a3f14(0x69a)+'tMirrorSpr'+_0x5a3f14(0x10d)]();continue;case'5':this[_0x5a3f14(0x8b2)]();continue;case'6':this[_0x5a3f14(0x4bc)+_0x5a3f14(0x22e)]();continue;}break;}},VisuMZ['EventsMove'+_0x3e3bd2(0x8da)]['Sprite_Cha'+_0x3e3bd2(0x846)+_0x3e3bd2(0x6b7)]=Sprite_Character[_0x3e3bd2(0x294)]['setTileBit'+_0x3e3bd2(0x65f)],Sprite_Character[_0x3e3bd2(0x294)]['setTileBit'+_0x3e3bd2(0x65f)]=function(){const _0x3289b9=_0x3e3bd2;VisuMZ[_0x3289b9(0x5eb)+_0x3289b9(0x8da)][_0x3289b9(0x910)+_0x3289b9(0x846)+_0x3289b9(0x6b7)][_0x3289b9(0x3f6)](this),this[_0x3289b9(0x5fc)][_0x3289b9(0x3fe)+_0x3289b9(0x893)](this[_0x3289b9(0x24f)+'apSmoothin'+'g'][_0x3289b9(0x696)](this));},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)]['Sprite_Cha'+_0x3e3bd2(0x846)+'CharacterB'+_0x3e3bd2(0xa1f)]=Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x884)+'erBitmap'],Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x884)+_0x3e3bd2(0x385)]=function(){const _0x124b54=_0x3e3bd2;VisuMZ[_0x124b54(0x5eb)+_0x124b54(0x8da)][_0x124b54(0x910)+'racter_set'+_0x124b54(0x186)+'itmap']['call'](this),this['bitmap']['addLoadLis'+_0x124b54(0x893)](this['updateBitm'+_0x124b54(0x85c)+'g']['bind'](this));},Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x24f)+_0x3e3bd2(0x85c)+'g']=function(){const _0x41c68f=_0x3e3bd2;if(!this[_0x41c68f(0x5fc)])return;this[_0x41c68f(0x5fc)]['smooth']=!!VisuMZ[_0x41c68f(0x5eb)+_0x41c68f(0x8da)]['Settings'][_0x41c68f(0x60e)]['BitmapSmoo'+'thing'],ImageManager[_0x41c68f(0x5b4)+_0x41c68f(0x3ca)](this['_character'+_0x41c68f(0x1d8)])&&(this[_0x41c68f(0x5fc)]=new Bitmap(this[_0x41c68f(0x5fc)][_0x41c68f(0x5df)],this[_0x41c68f(0x5fc)]['height']),this['bitmap']['emptyBitma'+'p']=!![]);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)]['Sprite_Cha'+_0x3e3bd2(0x6f1)+_0x3e3bd2(0x53a)+_0x3e3bd2(0x174)]=Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x444)+_0x3e3bd2(0x5c4)],Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x444)+_0x3e3bd2(0x5c4)]=function(){const _0x23ed57=_0x3e3bd2;return this[_0x23ed57(0x443)+_0x23ed57(0x6b0)]()?this[_0x23ed57(0x444)+'atternYVS8']():this[_0x23ed57(0x444)+_0x23ed57(0x7ef)+'ic']();},Sprite_Character[_0x3e3bd2(0x294)]['characterP'+_0x3e3bd2(0x147)]=function(){const _0x147233=_0x3e3bd2,_0x1ec7b8={'pbjuo':function(_0x42065b,_0x3ff793){return _0x42065b/_0x3ff793;},'lLduG':function(_0x4157c0,_0x520e82){return _0x4157c0-_0x520e82;}},_0x595a94=this['_character']['direction']();let _0x282212=[-0x1ecd+0xc7e+0x1251,0x35d*0xb+-0x205f*-0x1+-0x182*0x2e,0x1907+0x4*0x54d+-0x2e39*0x1,-0x1727*-0x1+0x1a8c+-0x31af,-0x1bb4+0xa3*-0x3b+0x9*0x741,-0x3*-0x1d3+0x1*0x1051+-0x15c8,-0x12da+-0xfef*0x1+-0x4f9*-0x7,0x2421+0xca6*0x1+-0x30c1,-0x2501*0x1+-0x8d3+-0x496*-0xa,-0x2692*-0x1+0x304*0xb+-0x47b6];return this[_0x147233(0x1dc)][_0x147233(0x603)+'ite']&&(_0x282212=[-0xd0*-0x26+-0x2463+0x585,-0x1b77+0x176b+0xd0*0x5,0x358*0x7+0xacf+0xb67*-0x3,0xb3+-0x32d+0x27c,0x605*-0x2+-0x37a*-0x9+-0x133a,-0x2257+-0x200b+0x4264,0x1b*-0x118+-0x7*-0x16d+0x1391,0x812*-0x3+-0x186e+0x30ac,-0xd74+0x2*-0xb09+0x52*0x6f,0x6*-0x173+-0x1*-0x2072+-0x17ba]),_0x1ec7b8['pbjuo'](_0x1ec7b8[_0x147233(0x2ec)](_0x282212[_0x595a94],0x27*-0x11+0x4bb*-0x8+-0x2871*-0x1),0x93b+-0xb33+0x1fa);},Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x444)+_0x3e3bd2(0x7ef)+'ic']=function(){const _0x5da370=_0x3e3bd2,_0x596300={'rATkd':function(_0x2ac8aa,_0x28bf6e){return _0x2ac8aa===_0x28bf6e;},'eCqYy':function(_0x2a2a96,_0x4299b8){return _0x2a2a96/_0x4299b8;},'exzDE':function(_0x31b8d2,_0x41e99b){return _0x31b8d2-_0x41e99b;}};let _0x397dcd=this['_character']['direction']();if(this['_character'][_0x5da370(0x603)+'ite']){if(_0x596300[_0x5da370(0x159)](_0x397dcd,-0x1*0x26cb+-0xfc4+0x3693))_0x397dcd=-0x1*0x2383+-0x261f+0x935*0x8;else _0x596300[_0x5da370(0x159)](_0x397dcd,-0x1a8d+-0x17de+0x3271)&&(_0x397dcd=-0x1a9d+0x1d34+-0x293);}return _0x596300[_0x5da370(0x67a)](_0x596300[_0x5da370(0x799)](_0x397dcd,0x227d+-0x1525+-0xd56),0x45*-0x2b+-0x8*-0x29d+0x94f*-0x1);},Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x4bc)+_0x3e3bd2(0x22e)]=function(){const _0x543dda=_0x3e3bd2;this[_0x543dda(0x8ed)]['x']=this[_0x543dda(0x1dc)][_0x543dda(0x8f2)]??-0x157a+0x20fa+0x3*-0x3d5,this[_0x543dda(0x8ed)]['y']=this[_0x543dda(0x1dc)][_0x543dda(0x250)]??0x3b*0xa+0x1ae7+-0x1d34;},Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x8b2)]=function(){const _0x5aed12=_0x3e3bd2;if(!VisuMZ[_0x5aed12(0x5eb)+_0x5aed12(0x8da)][_0x5aed12(0x668)]['Movement'][_0x5aed12(0x9d1)+_0x5aed12(0x62e)])return;this[_0x5aed12(0x237)]=0x1*0x112f+0xf09+-0x2038;if(this[_0x5aed12(0x15d)+_0x5aed12(0x3e0)]()){const _0x88ebd3=VisuMZ[_0x5aed12(0x5eb)+'Core'][_0x5aed12(0x668)]['Movement'],_0x36ad82=this['_character'][_0x5aed12(0x580)]();let _0x5d183b=-0x13*-0x10d+0x417+-0x180e;if([0x1054+-0x686*-0x5+0x30f1*-0x1,-0x6b*-0x2f+0x178c+-0x62b*0x7,0x997+-0x5*0x2f3+0x52f]['includes'](_0x36ad82))_0x5d183b=_0x88ebd3[_0x5aed12(0x3b5)];if([0x2361+-0xe*0x52+-0x1*0x1ee2,0x540+-0x5*-0x116+-0xaa8,0x1*-0x26e+0x633+-0x1*0x3bc][_0x5aed12(0x1bf)](_0x36ad82))_0x5d183b=_0x88ebd3[_0x5aed12(0x976)];[0x1*0x1af+0x29*0x7b+-0x1560,0x25b*0xf+0x3*0xb6e+0x7*-0x9f1][_0x5aed12(0x1bf)](_0x36ad82)&&(_0x5d183b=[-_0x88ebd3[_0x5aed12(0x31c)],-0x6*-0x35d+-0x12ee+-0x140,_0x88ebd3['TiltVert']][this[_0x5aed12(0x1dc)][_0x5aed12(0x656)]()]);if(this[_0x5aed12(0x2a6)+'n'])_0x5d183b*=-(0x16c9+0x176f+-0x2e37);this[_0x5aed12(0x237)]=_0x5d183b;}},Sprite_Character[_0x3e3bd2(0x294)]['isAllowCha'+_0x3e3bd2(0x3e0)]=function(){const _0x5c2f93=_0x3e3bd2,_0x15346b={'GdLAw':function(_0x1efc77,_0x4b26bd){return _0x1efc77===_0x4b26bd;}};if(this[_0x5c2f93(0x61f)+'es'])return![];return this[_0x5c2f93(0x1dc)]['isDashingA'+_0x5c2f93(0xa26)]()&&!this[_0x5c2f93(0x1dc)][_0x5c2f93(0x2f9)]()&&!this['_character'][_0x5c2f93(0x43e)]()&&_0x15346b[_0x5c2f93(0x252)](this[_0x5c2f93(0x81c)+_0x5c2f93(0x8d2)](),-0xde4+-0x5*-0x385+-0x3b5);},Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x645)+'ow']=function(){const _0x3894a7=_0x3e3bd2,_0x52bc82={'dQxzy':'0|4|2|1|6|'+'5|3','QEzAj':function(_0xff1b6d,_0x239fe6){return _0xff1b6d-_0x239fe6;},'COSJc':function(_0x47e47d,_0x267b1a){return _0x47e47d-_0x267b1a;},'DbzJr':function(_0x70ca8,_0x1bd2b6){return _0x70ca8!==_0x1bd2b6;},'OYMBY':function(_0x2291df,_0x40ac28){return _0x2291df>_0x40ac28;},'wuhAu':function(_0x12c566,_0x15c80c){return _0x12c566+_0x15c80c;},'mPXTi':function(_0x2eb94f,_0x396c7f){return _0x2eb94f<_0x396c7f;},'WkEEy':function(_0x2a4fd7,_0x3a942f){return _0x2a4fd7>_0x3a942f;},'rRVmU':function(_0xfb57e,_0x3655e1){return _0xfb57e+_0x3655e1;},'pVLoS':function(_0xaa3858,_0x273725){return _0xaa3858<_0x273725;},'EavVR':function(_0x938513,_0x1f3ee8){return _0x938513-_0x1f3ee8;}},_0x30f98c=_0x52bc82[_0x3894a7(0x724)]['split']('|');let _0x884728=-0x558+-0xcae*0x3+0x4d2*0x9;while(!![]){switch(_0x30f98c[_0x884728++]){case'0':if(!this['_shadowSpr'+_0x3894a7(0x10d)])return;continue;case'1':this['_shadowSpr'+_0x3894a7(0x10d)]['opacity']=this[_0x3894a7(0x24b)];continue;case'2':this[_0x3894a7(0x1f7)+'ite']['y']=this['_character'][_0x3894a7(0x533)]();continue;case'3':if(this[_0x3894a7(0x1dc)][_0x3894a7(0x7aa)+_0x3894a7(0x7ec)]())this[_0x3894a7(0x1f7)+'ite'][_0x3894a7(0x8ed)]['x']=Math[_0x3894a7(0x51d)](0x9*0x29e+-0x1138+0x32b*-0x2,_0x52bc82[_0x3894a7(0x5f6)](this[_0x3894a7(0x1f7)+_0x3894a7(0x10d)]['scale']['x'],-0x1dfd+-0x95*0x6+0x217b+0.1)),this[_0x3894a7(0x1f7)+_0x3894a7(0x10d)][_0x3894a7(0x8ed)]['y']=Math[_0x3894a7(0x51d)](0x69*0x1f+-0x1*0x1d75+0x10be,_0x52bc82[_0x3894a7(0x80d)](this[_0x3894a7(0x1f7)+_0x3894a7(0x10d)]['scale']['y'],0x1*0x26b3+0x17b5+-0x3e68+0.1));else{if(_0x52bc82[_0x3894a7(0x1c2)](this[_0x3894a7(0x1f7)+'ite']['scale']['x'],this[_0x3894a7(0x8ed)]['x'])){if(_0x52bc82['OYMBY'](this[_0x3894a7(0x1f7)+_0x3894a7(0x10d)][_0x3894a7(0x8ed)]['x'],this[_0x3894a7(0x8ed)]['x']))this[_0x3894a7(0x1f7)+'ite']['scale']['x']=Math['min'](_0x52bc82[_0x3894a7(0x88d)](this[_0x3894a7(0x1f7)+_0x3894a7(0x10d)][_0x3894a7(0x8ed)]['x'],0x9f7+0x16*0x1c6+-0x30fb+0.1),this[_0x3894a7(0x8ed)]['x']);if(_0x52bc82[_0x3894a7(0x6ec)](this[_0x3894a7(0x1f7)+_0x3894a7(0x10d)][_0x3894a7(0x8ed)]['x'],this['scale']['x']))this[_0x3894a7(0x1f7)+_0x3894a7(0x10d)][_0x3894a7(0x8ed)]['x']=Math[_0x3894a7(0x51d)](_0x52bc82[_0x3894a7(0x80d)](this[_0x3894a7(0x1f7)+_0x3894a7(0x10d)][_0x3894a7(0x8ed)]['x'],0x339*-0xc+0x1*0x135a+-0x9a9*-0x2+0.1),this['scale']['x']);}if(_0x52bc82[_0x3894a7(0x1c2)](this['_shadowSpr'+'ite'][_0x3894a7(0x8ed)]['y'],this['scale']['y'])){if(_0x52bc82[_0x3894a7(0x2a5)](this[_0x3894a7(0x1f7)+'ite'][_0x3894a7(0x8ed)]['y'],this[_0x3894a7(0x8ed)]['y']))this['_shadowSpr'+_0x3894a7(0x10d)][_0x3894a7(0x8ed)]['y']=Math[_0x3894a7(0xf1)](_0x52bc82[_0x3894a7(0x808)](this[_0x3894a7(0x1f7)+_0x3894a7(0x10d)][_0x3894a7(0x8ed)]['y'],-0xf1*0x7+0x2b*0x45+-0x500+0.1),this[_0x3894a7(0x8ed)]['y']);if(_0x52bc82['pVLoS'](this[_0x3894a7(0x1f7)+_0x3894a7(0x10d)][_0x3894a7(0x8ed)]['y'],this['scale']['y']))this[_0x3894a7(0x1f7)+'ite'][_0x3894a7(0x8ed)]['y']=Math[_0x3894a7(0x51d)](_0x52bc82['EavVR'](this[_0x3894a7(0x1f7)+_0x3894a7(0x10d)][_0x3894a7(0x8ed)]['y'],0x14b4+-0x1a3*0x15+-0x1*-0xdab+0.1),this['scale']['y']);}}continue;case'4':this['_shadowSpr'+_0x3894a7(0x10d)]['x']=this[_0x3894a7(0x1dc)][_0x3894a7(0x37d)]();continue;case'5':this[_0x3894a7(0x1f7)+_0x3894a7(0x10d)]['_hidden']=this['_hidden'];continue;case'6':this[_0x3894a7(0x1f7)+_0x3894a7(0x10d)]['visible']=this[_0x3894a7(0x1dc)][_0x3894a7(0x45f)+_0x3894a7(0xe1)]();continue;}break;}},Sprite_Character['prototype'][_0x3e3bd2(0x69a)+_0x3e3bd2(0x858)+'e']=function(){const _0x362e53=_0x3e3bd2,_0x22768c={'KdHxw':function(_0x226c46,_0x2bdd7d){return _0x226c46<=_0x2bdd7d;},'LYpEw':function(_0x9d83d0,_0x3e6549){return _0x9d83d0*_0x3e6549;},'DQVJf':function(_0x35f4c7,_0x3b2a3c){return _0x35f4c7%_0x3b2a3c;},'ckOnH':function(_0x1a079f,_0x5f27ca){return _0x1a079f*_0x5f27ca;},'EarJq':function(_0x1be11d,_0x5c545b){return _0x1be11d/_0x5c545b;},'ymEZh':function(_0x2c0ca3,_0xab61dc){return _0x2c0ca3+_0xab61dc;}};if(!this[_0x362e53(0x8db)+'Sprite'])return;const _0x35a348=this[_0x362e53(0x8db)+_0x362e53(0x1c6)],_0x208bc7=this['getEventIc'+'onIndex']();if(_0x22768c['KdHxw'](_0x208bc7,0x17*-0x189+0x2*-0x7c9+-0x5*-0xa2d))return _0x35a348[_0x362e53(0x767)](-0x1825+0xb*0x7d+0x12c6,0x109d+0xf0f+-0x1fac,0x64b+0xe39*-0x2+0x35*0x6b,0x19a0+0x16*0x1bb+-0x3fb2);else{const _0x6ec5cf=ImageManager[_0x362e53(0x259)],_0x24e53b=ImageManager['iconHeight'],_0x2b4828=_0x22768c[_0x362e53(0x287)](_0x22768c[_0x362e53(0x286)](_0x208bc7,-0x14b*-0xf+-0x12a+-0x1*0x122b),_0x6ec5cf),_0x175740=_0x22768c['ckOnH'](Math[_0x362e53(0x60f)](_0x22768c[_0x362e53(0x83c)](_0x208bc7,0x1236+-0x1bcc+0x9a6)),_0x24e53b);_0x35a348['setFrame'](_0x2b4828,_0x175740,_0x6ec5cf,_0x24e53b),this[_0x362e53(0x576)]=!![];}const _0x3fbd13=this[_0x362e53(0x1dc)][_0x362e53(0x81c)+_0x362e53(0x8f4)]();this[_0x362e53(0x937)+_0x362e53(0x190)]()?this[_0x362e53(0x491)+_0x362e53(0x4a6)](_0x35a348):(_0x35a348['x']=_0x3fbd13?_0x3fbd13[_0x362e53(0x9c4)]:0x39d+-0x1f03+0x1b66,_0x35a348['y']=_0x3fbd13?_0x22768c[_0x362e53(0x1e1)](-this['height'],_0x3fbd13[_0x362e53(0x7a6)]):0x19f*-0x14+0x363*-0x2+0x2732),_0x35a348['blendMode']=_0x3fbd13?_0x3fbd13[_0x362e53(0x51e)]:0x18da*-0x1+0x1463+0x477,this[_0x362e53(0x2d8)+'d'](_0x35a348),this['addChild'](_0x35a348),_0x35a348[_0x362e53(0x237)]=-this[_0x362e53(0x237)];},Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x69a)+_0x3e3bd2(0x6b2)]=function(){const _0x4367e9=_0x3e3bd2,_0x582b7c={'idccF':'3|0|4|2|1','teapM':function(_0x6404e1,_0x9eeccb){return _0x6404e1===_0x9eeccb;},'jdXBz':function(_0x41669c,_0x15f53d){return _0x41669c<_0x15f53d;},'JDndx':function(_0x31a3e0,_0x3fae04){return _0x31a3e0-_0x3fae04;}},_0x2fbf45=_0x582b7c[_0x4367e9(0x6a4)][_0x4367e9(0x424)]('|');let _0x430b41=0x663*0x2+-0xa91*-0x1+-0x1757;while(!![]){switch(_0x2fbf45[_0x430b41++]){case'0':if(_0x582b7c['teapM'](this[_0x4367e9(0x1dc)][_0x4367e9(0x710)],undefined))return;continue;case'1':this[_0x4367e9(0x1f7)+'ite']&&(_0x582b7c[_0x4367e9(0x3fd)](this['z'],0x821+0x5b0*-0x2+0x33f)?this[_0x4367e9(0x1f7)+_0x4367e9(0x10d)]['z']=_0x582b7c[_0x4367e9(0x15b)](this['z'],0x12c2+0xf*-0xc9+-0x2*0x37d):this[_0x4367e9(0x1f7)+'ite']['z']=0x1120+0x3fe*0x9+-0x2*0x1a87);continue;case'2':this['z']=this[_0x4367e9(0x1dc)][_0x4367e9(0x710)];continue;case'3':if(!this['_character'])return;continue;case'4':if(_0x582b7c[_0x4367e9(0x598)](this[_0x4367e9(0x1dc)][_0x4367e9(0x710)],![]))return;continue;}break;}},Sprite_Character[_0x3e3bd2(0x294)]['updateEven'+_0x3e3bd2(0x93c)+_0x3e3bd2(0x10d)]=function(){const _0x27bf70=_0x3e3bd2,_0x2c33b1={'mebRt':function(_0x1836cb,_0x2c9c4f){return _0x1836cb*_0x2c9c4f;}};if(!this[_0x27bf70(0x1dc)])return;let _0x5a54a6=!!this[_0x27bf70(0x1dc)]['_mirrorSpr'+'ite'];this[_0x27bf70(0x8ed)]['x']=_0x2c33b1['mebRt'](Math['abs'](this[_0x27bf70(0x8ed)]['x']),_0x5a54a6?-(0x1094+0x22b5+-0x3348):-0xd08+0x2f*-0x81+-0x2f*-0xc8);},Sprite_Character['prototype'][_0x3e3bd2(0x491)+_0x3e3bd2(0x4a6)]=function(_0x5b7b83){const _0x346a3b=_0x3e3bd2,_0x5b09e7={'kZstT':function(_0x295a02,_0x110f7b){return _0x295a02+_0x110f7b;},'HktGg':function(_0x1c3436,_0x390d68){return _0x1c3436/_0x390d68;},'mVdXm':function(_0x2161c8,_0x59c37a){return _0x2161c8*_0x59c37a;},'NDxxE':function(_0x1073af,_0xa0c4cb){return _0x1073af!==_0xa0c4cb;}};_0x5b7b83['x']=0x4*0x63e+-0x5b1+-0x15*0xeb,_0x5b7b83['y']=_0x5b09e7[_0x346a3b(0x6ac)](-this[_0x346a3b(0x8e6)],_0x5b09e7[_0x346a3b(0xa11)](_0x5b09e7[_0x346a3b(0x895)](this[_0x346a3b(0x8e6)],0xffc+0x5d0*0x3+0x1*-0x216a),0x2b*0xb2+0xf18+-0x2cf9)),_0x5b09e7[_0x346a3b(0x1ab)](this[_0x346a3b(0x1dc)]['pattern'](),-0x1*0x1a7+-0x17*0x53+0x91d)&&(_0x5b7b83['y']+=-0x2d3+-0x648*-0x1+0xd*-0x44);},Sprite_Character[_0x3e3bd2(0x294)]['getEventIc'+_0x3e3bd2(0x8d2)]=function(){const _0x30b86a=_0x3e3bd2;if(!this[_0x30b86a(0x1dc)])return 0x1046*-0x2+0x1*0x37f+-0x6f*-0x43;if(this['_character'][_0x30b86a(0x116)])return-0x1*-0x225f+-0x793*-0x2+0x7*-0x713;const _0xf2729d=this[_0x30b86a(0x1dc)][_0x30b86a(0x81c)+_0x30b86a(0x8f4)]();return _0xf2729d?_0xf2729d[_0x30b86a(0x5b2)]||0x2e*-0xa3+0x756+0x15f4:-0x51*0x39+-0x1*-0x167a+-0x471;},Sprite_Character['prototype']['updateAtta'+_0x3e3bd2(0x723)+_0x3e3bd2(0x9ea)]=function(){const _0x4859ce=_0x3e3bd2;if(!this['_attachPic'+'tureSprite'])return;if(!this[_0x4859ce(0x1dc)])return;this[_0x4859ce(0x8a8)+'hPictureBi'+_0x4859ce(0x891)](),this[_0x4859ce(0x1a9)+_0x4859ce(0x2a3)+_0x4859ce(0xa1f)]();},Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x8a8)+_0x3e3bd2(0x6a8)+'tmap']=function(){const _0x5e8428=_0x3e3bd2,_0xce138b={'JzyQu':function(_0x456029,_0x216ec3){return _0x456029!==_0x216ec3;}};if(!this[_0x5e8428(0x9e8)+_0x5e8428(0x682)+_0x5e8428(0x157)]())return;const _0x3a5a3a=this[_0x5e8428(0x1dc)][_0x5e8428(0x969)+_0x5e8428(0x2e0)+'s']();this['_lastAttac'+_0x5e8428(0x99c)+_0x5e8428(0x209)]=_0x3a5a3a[_0x5e8428(0x868)],this['_lastAttac'+_0x5e8428(0x91f)+_0x5e8428(0x8b7)]=_0x3a5a3a[_0x5e8428(0x348)],this[_0x5e8428(0x416)+'hPictureSc'+_0x5e8428(0x650)]=_0x3a5a3a[_0x5e8428(0x8ed)];if(_0xce138b['JzyQu'](_0x3a5a3a[_0x5e8428(0x868)],'')){const _0xd432e5=ImageManager[_0x5e8428(0x185)+'e'](_0x3a5a3a[_0x5e8428(0x868)]);_0xd432e5[_0x5e8428(0x3fe)+_0x5e8428(0x893)](this[_0x5e8428(0x889)+_0x5e8428(0x543)][_0x5e8428(0x696)](this,_0xd432e5));}else this[_0x5e8428(0x43b)+_0x5e8428(0x928)][_0x5e8428(0x5fc)]=new Bitmap(-0x547*0x2+-0x1*0x231a+0x1*0x2da9,-0x1960+0x2140+-0x1f*0x41);},Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x1a9)+_0x3e3bd2(0x2a3)+'itmap']=function(){const _0x338e57=_0x3e3bd2,_0x3417d2=this[_0x338e57(0x43b)+_0x338e57(0x928)];_0x3417d2['x']=this[_0x338e57(0x1dc)]['attachPict'+_0x338e57(0x352)](),_0x3417d2['y']=this[_0x338e57(0x1dc)]['attachPict'+_0x338e57(0x48c)](),_0x3417d2['blendMode']=this['_character'][_0x338e57(0x969)+_0x338e57(0x7ac)+'de']();},Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x9e8)+'hPictureUp'+_0x3e3bd2(0x157)]=function(){const _0x2e3bc2=_0x3e3bd2,_0x3f2645={'ptUDm':function(_0x13ed1d,_0xf435b5){return _0x13ed1d!==_0xf435b5;},'dKLCO':function(_0x21afb8,_0x54ac38){return _0x21afb8!==_0x54ac38;}},_0x487f65=this['_character'][_0x2e3bc2(0x969)+_0x2e3bc2(0x2e0)+'s']();if(_0x487f65){if(_0x3f2645['ptUDm'](this['_lastAttac'+_0x2e3bc2(0x99c)+_0x2e3bc2(0x209)],_0x487f65[_0x2e3bc2(0x868)]))return!![];if(_0x3f2645[_0x2e3bc2(0x791)](this[_0x2e3bc2(0x416)+'hPictureMa'+_0x2e3bc2(0x8b7)],_0x487f65[_0x2e3bc2(0x348)]))return!![];if(_0x3f2645[_0x2e3bc2(0x261)](this['_lastAttac'+'hPictureSc'+'ale'],_0x487f65[_0x2e3bc2(0x8ed)]))return!![];}return![];},Sprite_Character[_0x3e3bd2(0x294)]['onLoadAtta'+_0x3e3bd2(0x543)]=function(_0x52c3cf){const _0xcbe556=_0x3e3bd2,_0x43bdb4={'rdJmr':function(_0x49c0ff,_0x26d303){return _0x49c0ff>_0x26d303;},'VTSXw':function(_0x28a096,_0x31006c){return _0x28a096/_0x31006c;},'rYjrK':function(_0x53e5cc,_0x29554b){return _0x53e5cc!==_0x29554b;}},_0x2431be=this[_0xcbe556(0x43b)+_0xcbe556(0x928)];_0x2431be[_0xcbe556(0x5fc)]=_0x52c3cf;const _0x264b48=this[_0xcbe556(0x1dc)][_0xcbe556(0x969)+'ureSetting'+'s'](),_0x52a60b=_0x264b48[_0xcbe556(0x348)],_0x3c01ef=_0x264b48[_0xcbe556(0x8ed)];let _0x12eaf4=0x65*-0xc+0x145c*0x1+0x1*-0xf9f;if(_0x43bdb4[_0xcbe556(0x73d)](_0x52a60b,0x1dd4+-0x1ca*0xf+-0x2fe)){let _0x4da9e9=this[_0xcbe556(0x50d)+_0xcbe556(0x75e)+'apWidth']()||0xadb*-0x2+-0x105c+0x39*0xab,_0x37860d=this[_0xcbe556(0x50d)+_0xcbe556(0x75e)+_0xcbe556(0x7fb)]()||-0x34a+0x164e+-0x1303;const _0x10a628=Math[_0xcbe556(0x51d)](0x21c4*0x1+0x8*0xe5+0x1a3*-0x19,_0x4da9e9,_0x37860d);_0x12eaf4=_0x43bdb4['VTSXw'](_0x52a60b,_0x10a628);}_0x12eaf4*=_0x3c01ef,_0x43bdb4['rYjrK'](_0x12eaf4,-0x3*-0xb9e+0x24c9+0x6a*-0xad)&&(this['_attachPic'+'tureSprite'][_0xcbe556(0x5fc)][_0xcbe556(0x998)]=!![]),_0x2431be['scale']['x']=_0x12eaf4,_0x2431be[_0xcbe556(0x8ed)]['y']=_0x12eaf4,this[_0xcbe556(0x576)]=!![],this[_0xcbe556(0x1a9)+_0xcbe556(0x2a3)+'itmap']();},Sprite_Character[_0x3e3bd2(0x294)][_0x3e3bd2(0x50d)+_0x3e3bd2(0x75e)+_0x3e3bd2(0x7dc)]=function(){const _0x8f3664=_0x3e3bd2,_0x1cdf1a=this[_0x8f3664(0x43b)+'tureSprite'];if(!_0x1cdf1a)return-0x20dd+0x6*-0x276+0x2fa1;return _0x1cdf1a[_0x8f3664(0x5fc)][_0x8f3664(0x5df)];},Sprite_Character['prototype'][_0x3e3bd2(0x50d)+_0x3e3bd2(0x75e)+_0x3e3bd2(0x7fb)]=function(){const _0x1da17f=_0x3e3bd2,_0x4fab54=this[_0x1da17f(0x43b)+'tureSprite'];if(!_0x4fab54)return 0x72*0x43+0x2168+-0x3f3e;return _0x4fab54[_0x1da17f(0x5fc)]['height'];},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x275)+_0x3e3bd2(0x3c5)]=Sprite_Balloon['prototype']['setup'],Sprite_Balloon[_0x3e3bd2(0x294)][_0x3e3bd2(0x442)]=function(_0x4dceb5,_0xedcbc9){const _0x24d032=_0x3e3bd2;VisuMZ[_0x24d032(0x5eb)+_0x24d032(0x8da)][_0x24d032(0x275)+'loon_setup']['call'](this,_0x4dceb5,_0xedcbc9),VisuMZ['EventsMove'+'Core'][_0x24d032(0x668)][_0x24d032(0x454)][_0x24d032(0x97e)+'n']&&this[_0x24d032(0x45d)]['_character']['setBalloon'+_0x24d032(0x1ce)](_0xedcbc9,this[_0x24d032(0x11d)]);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x275)+_0x3e3bd2(0x12c)+_0x3e3bd2(0x384)]=Sprite_Balloon['prototype']['updatePosi'+_0x3e3bd2(0x6f3)],Sprite_Balloon[_0x3e3bd2(0x294)]['updatePosi'+'tion']=function(){const _0x162010=_0x3e3bd2;VisuMZ[_0x162010(0x5eb)+_0x162010(0x8da)][_0x162010(0x275)+_0x162010(0x12c)+_0x162010(0x384)]['call'](this),this[_0x162010(0x9ee)+_0x162010(0x9de)+_0x162010(0x5c7)]();},Sprite_Balloon[_0x3e3bd2(0x294)][_0x3e3bd2(0x9ee)+_0x3e3bd2(0x9de)+'ets']=function(){const _0x1d008f=_0x3e3bd2;this['_target'][_0x1d008f(0x1dc)][_0x1d008f(0x443)+'8dir']()&&(this['x']+=VisuMZ['EventsMove'+_0x1d008f(0x8da)]['Settings']['VS8'][_0x1d008f(0x79e)+_0x1d008f(0x358)],this['y']+=VisuMZ[_0x1d008f(0x5eb)+_0x1d008f(0x8da)]['Settings']['VS8'][_0x1d008f(0x79e)+'setY']);},Sprite_Timer[_0x3e3bd2(0x294)][_0x3e3bd2(0x276)+'ap']=function(){const _0x422d60=_0x3e3bd2,_0x1082a4={'uTWxk':function(_0x237756,_0x464ee1){return _0x237756/_0x464ee1;}};this['bitmap']=new Bitmap(Math[_0x422d60(0x1f4)](_0x1082a4[_0x422d60(0x6d9)](Graphics[_0x422d60(0x429)],-0x3d*0x13+0x1c2*0x5+0x441*-0x1)),-0x125f+-0x329*0x1+0x15b8*0x1),this[_0x422d60(0x5fc)]['fontFace']=this[_0x422d60(0x760)](),this[_0x422d60(0x5fc)][_0x422d60(0x2b7)]=this[_0x422d60(0x2b7)](),this[_0x422d60(0x5fc)][_0x422d60(0x441)+'or']=ColorManager[_0x422d60(0x441)+'or']();},Sprite_Timer[_0x3e3bd2(0x294)][_0x3e3bd2(0x803)]=function(){const _0x56e6f0=_0x3e3bd2,_0x3a82f={'fVagD':function(_0x3251fc,_0x21b595){return _0x3251fc/_0x21b595;},'GHqQq':function(_0x447a67,_0x4a769d){return _0x447a67/_0x4a769d;},'zzWKi':function(_0x53ded0,_0xf52b1e){return _0x53ded0%_0xf52b1e;},'BwlQb':function(_0x12e057,_0x20edb5){return _0x12e057/_0x20edb5;},'qDNzX':function(_0x357555,_0x3840cc){return _0x357555%_0x3840cc;},'Hghdj':function(_0x260458,_0x4de893){return _0x260458+_0x4de893;},'SSIEu':function(_0x4f0f84,_0x5b13d4){return _0x4f0f84>_0x5b13d4;},'GMGBh':_0x56e6f0(0x974)},_0x41db3b=Math[_0x56e6f0(0x60f)](_0x3a82f['fVagD'](_0x3a82f['GHqQq'](this['_seconds'],-0x1967*0x1+-0x15be+0x2f61),-0xcf8+-0x1fb*0x13+0x32d5)),_0xf4d7ba=_0x3a82f[_0x56e6f0(0x25e)](Math['floor'](_0x3a82f[_0x56e6f0(0x9ca)](this['_seconds'],0x6*-0x1dd+-0x1854+0x23be)),-0x1*0xb47+-0x108f+0x1c12),_0x3d11bb=_0x3a82f['qDNzX'](this['_seconds'],-0x241*0x8+0x15cd+-0xb5*0x5);let _0x424afe=_0x3a82f[_0x56e6f0(0x641)](_0x3a82f['Hghdj'](_0xf4d7ba[_0x56e6f0(0x4f2)](-0xa88+0x417+0x673),':'),_0x3d11bb['padZero'](-0x1299+0x9af+0x8ec));if(_0x3a82f[_0x56e6f0(0x1da)](_0x41db3b,0xb*-0x4f+-0x5*0x361+-0x144a*-0x1))_0x424afe=_0x3a82f['GMGBh']['format'](_0x41db3b,_0x424afe);return _0x424afe;};function Sprite_EventLabel(){const _0x51fc0b=_0x3e3bd2;this[_0x51fc0b(0x386)](...arguments);}Sprite_EventLabel[_0x3e3bd2(0x294)]=Object['create'](Sprite[_0x3e3bd2(0x294)]),Sprite_EventLabel[_0x3e3bd2(0x294)]['constructo'+'r']=Sprite_EventLabel,Sprite_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x386)]=function(_0xd8de27){const _0x2ab776=_0x3e3bd2;this[_0x2ab776(0x93a)]=_0xd8de27,Sprite[_0x2ab776(0x294)][_0x2ab776(0x386)][_0x2ab776(0x3f6)](this),this[_0x2ab776(0x9b6)+'s'](),this[_0x2ab776(0x503)+'yWindow']();},Sprite_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x9b6)+'s']=function(){const _0x14aa71=_0x3e3bd2;this['anchor']['x']=0x1d49+0x953+-0x161*0x1c+0.5,this[_0x14aa71(0x552)]['y']=0xef3*0x1+0x2649+-0x353b*0x1;},Sprite_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x503)+_0x3e3bd2(0x148)]=function(){const _0x3cd90d=_0x3e3bd2,_0x42596a=new Rectangle(0x1*-0x1669+0xe48+0x821*0x1,0x394*-0x2+-0x1*0x232d+0x2a55,0x1*-0x229+0x115c+-0xf32,0xaa8+-0x2701+0x26*0xbf);this[_0x3cd90d(0x942)+'ow']=new Window_Base(_0x42596a),this[_0x3cd90d(0x942)+'ow']['padding']=-0x240a+-0x1073*-0x2+-0x324*-0x1,this[_0x3cd90d(0x24b)]=this['isLabelVis'+'ible']()?-0xcab+-0x1a5f+0x2809:0x671+-0x520*0x1+-0x151;},Sprite_EventLabel['prototype'][_0x3e3bd2(0x117)]=function(){const _0x27e973=_0x3e3bd2,_0xb69293={'RrMde':'0|5|4|2|1|'+'3'},_0x31c8d1=_0xb69293[_0x27e973(0x916)]['split']('|');let _0x26c105=0x3e1*-0xa+-0xb*0x2bd+0x44e9;while(!![]){switch(_0x31c8d1[_0x26c105++]){case'0':Sprite[_0x27e973(0x294)][_0x27e973(0x117)][_0x27e973(0x3f6)](this);continue;case'1':this['updateOpac'+_0x27e973(0x88c)]();continue;case'2':this[_0x27e973(0x393)+_0x27e973(0x6f3)]();continue;case'3':this[_0x27e973(0x365)+_0x27e973(0x827)]();continue;case'4':this[_0x27e973(0x4bc)+'e']();continue;case'5':this[_0x27e973(0x8ae)]();continue;}break;}},Sprite_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x8ae)]=function(){const _0x152a1e=_0x3e3bd2,_0x3c277={'IsBju':function(_0x315e1a,_0x28a265){return _0x315e1a!==_0x28a265;}};_0x3c277[_0x152a1e(0x609)](this[_0x152a1e(0x93a)][_0x152a1e(0x366)+_0x152a1e(0x412)](),this[_0x152a1e(0x3ce)])&&(this[_0x152a1e(0x3ce)]=this[_0x152a1e(0x93a)][_0x152a1e(0x366)+_0x152a1e(0x412)](),this[_0x152a1e(0x90b)]());},Sprite_EventLabel[_0x3e3bd2(0x294)]['refresh']=function(){const _0x473950=_0x3e3bd2;if(!this[_0x473950(0x942)+'ow'])return;this[_0x473950(0x29a)+'ow'](),this['drawText']();},Sprite_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x29a)+'ow']=function(){const _0x34150f=_0x3e3bd2,_0x24c967={'aqpGz':function(_0x29844e,_0x1b7078){return _0x29844e+_0x1b7078;},'uaGRn':function(_0x3dee37,_0x2cb90f){return _0x3dee37*_0x2cb90f;}},_0x36d627=this[_0x34150f(0x942)+'ow']['textSizeEx'](this[_0x34150f(0x3ce)]),_0x1ff3e3=this['_proxyWind'+'ow']['itemPaddin'+'g'](),_0x542d10=_0x24c967[_0x34150f(0x156)](_0x36d627[_0x34150f(0x5df)],_0x24c967[_0x34150f(0x9c5)](_0x1ff3e3,0x2200+0x963*0x4+-0x478a)),_0x139861=_0x36d627[_0x34150f(0x8e6)];this[_0x34150f(0x942)+'ow'][_0x34150f(0x2fa)](0x103d+0x2273+0x4*-0xcac,-0x1*-0x80b+-0x1f99+-0xa*-0x25b,_0x542d10,_0x139861),this[_0x34150f(0x942)+'ow'][_0x34150f(0x5b5)+_0x34150f(0x876)](),this[_0x34150f(0x5fc)]=this[_0x34150f(0x942)+'ow'][_0x34150f(0x9ed)];},Sprite_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x303)]=function(){const _0x46d438=_0x3e3bd2,_0x3179b8=this[_0x46d438(0x942)+'ow']['itemPaddin'+'g']();this[_0x46d438(0x942)+'ow'][_0x46d438(0x300)](this['_text'],_0x3179b8,-0x1*0x1b73+0xb34+0x103f);},Sprite_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x4bc)+'e']=function(){const _0x16a8e0=_0x3e3bd2,_0x25677b={'pizld':function(_0x4819d6,_0x37ca82){return _0x4819d6/_0x37ca82;}},_0x37a26c=VisuMZ[_0x16a8e0(0x5eb)+_0x16a8e0(0x8da)][_0x16a8e0(0x668)][_0x16a8e0(0x5d0)]['FontSize'],_0x1c4cb4=$gameSystem[_0x16a8e0(0x9f0)+'ze']()||0x41f*0x3+0x1*-0x1847+0xbeb;this['scale']['x']=this[_0x16a8e0(0x8ed)]['y']=_0x25677b[_0x16a8e0(0x7c3)](_0x37a26c,_0x1c4cb4);},Sprite_EventLabel[_0x3e3bd2(0x294)]['updatePosi'+_0x3e3bd2(0x6f3)]=function(){const _0x1b40c3=_0x3e3bd2,_0x270800={'PpYoV':function(_0x1b94e4,_0x57a6f1){return _0x1b94e4-_0x57a6f1;},'bYdat':function(_0x2fb428,_0x287c82){return _0x2fb428*_0x287c82;}};if(!SceneManager['_scene'])return;if(!SceneManager[_0x1b40c3(0x870)][_0x1b40c3(0x2c3)])return;const _0x531804=SceneManager[_0x1b40c3(0x870)]['_spriteset'][_0x1b40c3(0x341)+_0x1b40c3(0x1c6)](this[_0x1b40c3(0x93a)]);if(!_0x531804)return;this['x']=this[_0x1b40c3(0x93a)][_0x1b40c3(0x2e2)](),this['x']+=this[_0x1b40c3(0x93a)][_0x1b40c3(0x94b)+'ow'][_0x1b40c3(0x612)],this['y']=_0x270800[_0x1b40c3(0x782)](this[_0x1b40c3(0x93a)][_0x1b40c3(0xa1e)](),_0x270800[_0x1b40c3(0x192)](_0x531804['height'],_0x531804[_0x1b40c3(0x8ed)]['y'])),this['y']+=_0x270800[_0x1b40c3(0x192)]($gameSystem[_0x1b40c3(0x4a7)+_0x1b40c3(0x1f0)](),-(0x1faa+0x1fe1*0x1+0x3f8b*-0x1+0.5)),this['y']+=this[_0x1b40c3(0x93a)][_0x1b40c3(0x94b)+'ow'][_0x1b40c3(0x1d2)];},Sprite_EventLabel[_0x3e3bd2(0x294)]['updateOpac'+_0x3e3bd2(0x88c)]=function(){const _0x24db1d=_0x3e3bd2,_0x44c283={'GKSUr':function(_0x52812c,_0x362e87){return _0x52812c>_0x362e87;}};if(this['isLabelVis'+_0x24db1d(0x75d)]())this[_0x24db1d(0x24b)]+=this[_0x24db1d(0x35c)+'ed']();else _0x44c283[_0x24db1d(0x436)](SceneManager[_0x24db1d(0x870)][_0x24db1d(0x128)+_0x24db1d(0x5bb)+'tion'],-0x6d1*0x3+-0x239c+0x380f)?this['opacity']=-0x1*-0xe27+-0x1bea+0xdc3*0x1:this[_0x24db1d(0x24b)]-=this[_0x24db1d(0x35c)+'ed']();},Sprite_EventLabel['prototype'][_0x3e3bd2(0x365)+'hift']=function(){const _0x52d06f=_0x3e3bd2,_0x5d91ed={'ZeDNm':function(_0xced9a6,_0xd9dd0){return _0xced9a6+_0xd9dd0;}};if(this['isLabelVis'+_0x52d06f(0x75d)]()&&this[_0x52d06f(0x93a)]&&this['_event'][_0x52d06f(0x94b)+'ow'][_0x52d06f(0x9e9)]){const _0x5199c5=_0x5d91ed[_0x52d06f(0x819)](this[_0x52d06f(0x369)],this[_0x52d06f(0x93a)][_0x52d06f(0x94b)+'ow'][_0x52d06f(0x9e9)]||-0xb7c+-0xc07+0x1*0x1783);this[_0x52d06f(0x46f)](_0x5199c5);}},Sprite_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x713)+_0x3e3bd2(0x75d)]=function(){const _0x4b9dfd=_0x3e3bd2,_0x14645a={'pPbka':function(_0x3cbb6e,_0x191073){return _0x3cbb6e<_0x191073;},'HwyTN':function(_0x49e432,_0x44d6d6){return _0x49e432>_0x44d6d6;},'Obbov':function(_0x4d0830,_0x5bb39c){return _0x4d0830===_0x5bb39c;},'FJDLJ':function(_0x53b300,_0x35076e){return _0x53b300===_0x35076e;},'lDidD':function(_0x21635a,_0xdbd8f7){return _0x21635a>_0xdbd8f7;}};if(!$gameSystem[_0x4b9dfd(0x353)+_0x4b9dfd(0x906)]())return![];if(this['_event']?.[_0x4b9dfd(0x116)])return![];if(this['_event']&&_0x14645a[_0x4b9dfd(0x80a)](this[_0x4b9dfd(0x93a)][_0x4b9dfd(0x89c)],-0x1d53+0xa7e+0x12d5))return![];if(_0x14645a['HwyTN'](SceneManager['_scene'][_0x4b9dfd(0x128)+_0x4b9dfd(0x5bb)+_0x4b9dfd(0x6f3)],0x1e22+-0x997*-0x3+0x1*-0x3ae7))return![];const _0x31dae8=$gamePlayer['x'],_0x56e4d4=$gamePlayer['y'],_0x317fea=this[_0x4b9dfd(0x93a)]['x'],_0x82a3bc=this['_event']['y'];if(_0x14645a[_0x4b9dfd(0x3ac)](this[_0x4b9dfd(0x445)+_0x4b9dfd(0x6c2)],_0x31dae8)&&_0x14645a['FJDLJ'](this[_0x4b9dfd(0x445)+_0x4b9dfd(0x4c4)],_0x56e4d4)&&_0x14645a[_0x4b9dfd(0x3ac)](this[_0x4b9dfd(0x298)+_0x4b9dfd(0x55c)],_0x317fea)&&_0x14645a[_0x4b9dfd(0x3ac)](this[_0x4b9dfd(0x298)+_0x4b9dfd(0x8d5)],_0x82a3bc))return this[_0x4b9dfd(0xfa)+_0x4b9dfd(0x32e)];this[_0x4b9dfd(0x445)+_0x4b9dfd(0x6c2)]=$gamePlayer['x'],this[_0x4b9dfd(0x445)+_0x4b9dfd(0x4c4)]=$gamePlayer['y'],this[_0x4b9dfd(0x298)+_0x4b9dfd(0x55c)]=this[_0x4b9dfd(0x93a)]['x'],this[_0x4b9dfd(0x298)+'entY']=this[_0x4b9dfd(0x93a)]['y'];if(_0x14645a[_0x4b9dfd(0x505)]($gameMap[_0x4b9dfd(0x6a0)+'e'](_0x31dae8,_0x56e4d4,_0x317fea,_0x82a3bc),this[_0x4b9dfd(0x93a)][_0x4b9dfd(0x366)+_0x4b9dfd(0x268)]()))return this[_0x4b9dfd(0xfa)+'bility']=![],![];return this['_cacheVisi'+'bility']=!![],!![];},Sprite_EventLabel['prototype'][_0x3e3bd2(0x35c)+'ed']=function(){const _0x39adb7=_0x3e3bd2;return VisuMZ[_0x39adb7(0x5eb)+_0x39adb7(0x8da)][_0x39adb7(0x668)][_0x39adb7(0x5d0)]['OpacitySpe'+'ed'];};function Sprite_VisuMz_MessagePopup(){this['initialize'](...arguments);}function _0x320f(){const _0x54aa83=['mVdXm','isLandOk','moveToward','rLayer','_eventSpaw','llSynchTar','ntsMoveCor','_pageIndex','FINDING','tznUS','fvjdf','isTile','16|6|10|7|','\x20largest\x20t','Events','moveStraig','charAt','ivhAK','mirror\x20hor','setupAttac','SCHnu','QUESTION','rdneQ','isActive','etup','updateText','UNTITLED','VpvWj','gecvg','updateTilt','updateFade','NfhnJ','tTriggerAu','isAdvanced','xSize','1|0|4|3|2','thinEncoun','srwGe','rve','kxitF','Player','seForIcons','kOoQu','RandomHome','isLongPres','cterBase_d','AlgPs','HwHuM','forceDashi','setSelfVal','nalSupport','lDirection','PreSpawnJS','isPlayerWi','XnhCu','_EventIcon','RIGHT','GvNWD','EventTempl','PeAlj','GDqDm','onIndex','createAtta','exit','entY','hange','ones','raOUg','EventIconD','Core','_eventIcon','%1Allow','les','moveBackTo','bdbRF','isTurnInPl','bmWAb','GKhgO','removeTemp','rceShown','JAweb','height','FollowerSe','bePsR','CoNCW','XOIVy','anuAb','zWRUR','scale','VICTORY','erHalf','hZRjn','textSizeEx','_scaleX','ElLOv','onData','lWezH','isDestinat','eventsXy','Out','nJLZM','log','indexOf','aJfeZ','restoreSav','character','tionKey','Scene_Map_','ynqwQ','Pnanx','BdMQK','advancedVa','Region','sVisible','onDatabase','nEvent_isA','_pattern','abs','refresh','Game_Map_r','QmFlI','ere','DEPZS','Sprite_Cha','wZdWz','PostCopyJS','terHalf','Scene_Boot','gonalSetti','RrMde','ALLOW_LADD','shift','bOQWV','sIvSJ','egions','endOffset','tXY','sed','hPictureMa','MsgPopupTa','rved','ionDelete','turnLeft90','setupPageS','bid','OffsetY','_needsPeri','tureSprite','old','JqBAL','vMUsZ','rsForceHid','getPreserv','hCondition','eSynchCust','sMoveCore_','sUBib','HMPH','roundXWith','isShip','isEventRun','toUpperCas','isAutoBuff','KmfLI','uFNxX','_event','variables','tMirrorSpr','getSelfTar','pOdph','lastSpawne','regionList','ptWUY','_proxyWind','ernEventsM','iMhae','oDoqf','zNsiC','SPIN\x20CCW','FollowerRe','onToPoint','endScaleY','_labelWind','FZZKg','autosaveEv','startEncou','_requestSa','Conditions','registerSe','_saveEvent','kUJSb','HvpaJ','sAlxs','OzpRr','veCoreInvi','xofqb','stance','TriggerAut','JiEjx','_offsetX','clearStepP','UQKIa','UPPER\x20LEFT','1|2|6|3|4|','setupEvent','_targetX','eCore','FOdwi','Game_Map_i','sMoveCoreE','Game_Troop','eps','attachPict','eSpeed','cterBase_b','wzicX','format','ion','ZVzQb','resetIcons','VlDFV','nation','_realX','%1:%2','CPC','TiltRight','lue','_fadeOutDu','YMzDw','XCeLx','fQSYt','SILENCE','2|0|4|1|3','AutoBalloo','lOffsetX','mqkdL','canStartLo','CzdCU','DIAGONAL_P','IconIndex','Szcpa','FNyQn','angle','CPCsMet','Mwgxh','onMapLoade','_targetSca','useCarryPo','removeMorp','NZGDP','roundYWith','findDirect','s\x20&\x20Moveme','xoWRh','DEFAULT_SH','ekVbW','sNwqj','ZbQem','uWqdr','smooth','CnmqL','Icon','azjok','hPictureFi','Passabilit','YiOdA','WZwNE','rymEx','pOMKa','_updatePar','clearAttac','opacityDel','MUSIC\x20NOTE','owChanges','custom','eSynch','e\x20Plugin\x20M','ration','areFollowe','WDKBc','tkPSh','ntTriggerH','MaBsM','sXcFy','setupPlaye','eDelay','rbidPass','isRegionFo','iwfFE','initMember','_data','%1\x27s\x20versi','metCPC','cterBase_c','ApplyPopup','rzJeZ','setMapValu','asStepAnim','AutoMoveEv','sMoveCoreS','racter','Resume','_moveOnlyR','bufferX','uaGRn','ction','meetsCondi','Allow','lineHeight','BwlQb','Map_%1','adSeT','UFfeb','isPlaytest','iygAQ','return\x200','EnableDash','xcZrU','hData','efresh','LoadCommon','otetags','HalfProxim','%1\x20is\x20inco','ayerContro','ventOverlo','IRXkd','AoPcN','ateWaitMod','alloonOffs','eventsXyNt','BYpAM','Variable','HkZza','on\x20does\x20no','_opacity','all','yjNOU','2|4|1|0|3|','needsAttac','hueShift','prite','TXWQE','mapId','contents','updateVS8B','XzPMb','mainFontSi','resh','randomInt','constructo','witchesFor','zpQJl','MessageCor','ntData','isAirshipP','isValid','FkIkk','YBVXZ','2|1|3','HPdnQ','ByAnyDirec','XcbVm','setValue','turnToward','findProper','sage_start','LXvQt','LTJle','Forbid','hgfUg','r_isMapPas','haracterPa','rSpawn','DashModifi','tLabelText','rBypass','BwYJT','away','ledFollowe','HktGg','LOWER\x20RIGH','Jhznu','cjZtD','emWtT','_updateSel','eulyK','ed\x20to\x20run\x20','tionProxim','ionCreate','updatePara','portTo','initEvents','screenY','itmap','uONiL','hasAdvance','_comments','_EventsMov','_onExpire','_forceShow','ndMoving','jWojt','ions','rjIzd','BQJsZ','RegionPass','xxPyq','XmNmJ','isTargetEv','nItms','eSynchRand','install\x20%2','LxlgK','startsWith','updateVisi','mQuSC','KNEEL','isSpawnHit','artMessage','fadeInDura','XIMOP','sible','setAll','_textSprit','TargetVari','_events','Ship','taKey','ER_DASH','upIsk','chTargets','_forceDash','sHpfI','dEventData','WalkForbid','_lastMoved','DhGjm','min','OpBWw','Window_Eve','isTranspar','cPTAA','qrIcD','qmFLM','MessagePop','creen','_cacheVisi','_selfEvent','lfTarget','lyJUu','LzuMU','Game_Map_s','qdcTi','front','zOMOX','morphIntoT','le_isMapPa','spawnPrese','71082fdPQKL','ySYou','setCommonE','4570nHJZfr','bvCJI','ams','dOeao','ite','EuFck','getInputDi','arooS','setupChild','_spawnData','itpIV','entLocatio','Scene_Load','_erased','update','filter','_advancedS','Zblnh','vtXpI','AutoTrigge','_duration','WGvgE','vqsAK','HmLwC','QLkxn','_regionRul','ragonbones','_fadeInDur','nProximity','BufferX','DespawnTer','_encounter','khWkj','emVisible','_lastMapId','loon_updat','toLowerCas','onClickTri','fMovement','cIvHI','5|4|2|3|0|','PwxbW','DiagonalSp','tQMzU','yKZOf','omCharacte','setMoveRou','m_initiali','yOverrides','\x20plugin\x20pl','Target','tyDelta','rseMimic','istance','moveForwar','_counter','cCKIn','qEwBE','WtuxG','_onLoadSuc','jZLzj','gcnew','atternYVS8','yWindow','cter_proce','_expireCom','createEven','Game_Inter','refreshEve','ture','veEventLoc','MapId','isPreventS','spawnEvent','clearSelfT','From','_start','aqpGz','date','esh','rATkd','nRestricti','JDndx','isRegionDo','isAllowCha','_stop','kvIBc','\x20a\x20Tier\x20%2','despawnEve','_hasEncoun','_currentAr','ePopup','_paused','uzvAa','naoAX','MhUKq','qHdAj','name','ate','_starting','eraseEvent','ern','checkSmart','|17|9|1|10','eRouteSetI','UntilStop','requestBal','ernY','processSav','tileHeight','_addedHitb','4|0|1|2|3','mity','setDashing','TqCnZ','PostSpawnJ','parse','IconSet','slice','arallelCom','followers','setFrames','zmdRJ','kAbwN','loadPictur','CharacterB','HYBMi','ffects','isBigChara','replace','createShad','Game_Vehic','owerChasin','ancel','getDirecti','erIcon','HxWxQ','bYdat','arXAr','270424lFQUGh','EVAL','MVgeX','canUpdate','lVqKB','apply','variableId','oKsRd','erase','ons','ist\x20from\x20s','cterBase_u','berInput_p','dkXMZ','ToVlV','QwKVV','Hours','TriggerHer','setImage','CommonEven','SdwzH','updateAtta','edFds','NDxxE','elfSwitchI','etDirectio','lly','|11|7|3|4|','_EVENT_LIM','isMovement','_update','Map%1.json','6|4|3|1|2|','mnZRi','nedEventWi','FaceSynchA','yRegions','lastMovedD','processOk','iteVS8dir','rID','7|18|0','Ehgme','includes','teMaps','ozlTc','DbzJr','wTYca','mYGgf','orHorz','Sprite','ndom','WEmRh','createSpaw','TargetSwit','VisuMZ_Set','dnYhc','EJesB','Pose','|21|14|6','IdGuQ','template','offsetY','process_Vi','iWewF','DataKey','6|5|0|3|2|','lVaRS','Name','_wholeDura','SSIEu','5|4|0|6|7|','_character','SAiUv','JkcBi','bileEnable','Shadow','ymEZh','_alwaysUpd','Itmic','iiJQa','MoveCoreEf','entDataKey','checkActiv','IkYME','$callEvent','dSwitchVar','mallest\x20to','_lastPlugi','OperateVal','ealMoveSpe','assable','ing','eCommandEv','RWGUL','ervedMorph','round','onNVy','EventLabel','_shadowSpr','PostMorphJ','HvWJb','canPass','isSelfSwit','OfwKV','innerWidth','LOCKWISE','wer_initia','kpGYx','chConditio','TriggerEve','isAllowEve','_randomHom','command357','frontY','dEventID','moveAwayFr','lename','note','cJAub','VehicleAll','wer_chaseC','shadowFile','cterBase_o','destroy','_moveSynch','switch2Id','vedMorphEv','dSPFD','_trigger','Letter','clear','ying','_forceCarr','iconSize','yfGvN','ettings','ager.','VehicleDoc','dashSpeedM','PageIndex','e\x20plugin\x20l','_randomMov','ndexVS8','setMoveSpe','\x20is\x20requir','despawnReg','20|12|5|16','zGEaJ','Position','nTODj','SwitchGetS','ing\x20a\x20requ','sion','eBase','fadeOut','Self\x20Switc','boat','RegionOk','SPIN\x20CLOCK','LIGHTBULB','eDir8','StopAutoMo','rotation','rainTags','startOffse','oBPyE','ARRAYEVAL','LqkhU','%1\x20is\x20miss','endAngle','tePosition','startMapCo','rection','updateDura','JgSXY','ntrolDisab','of\x20Preload','awnedEvent','ariablePre','KSBej','checkAdvan','GwyNW','opacity','ode','xejZu','hasEventIc','updateBitm','_scaleY','restoreIco','GdLAw','boxCollisi','ED\x202','pos','getLastPlu','wIcon','tionRegion','iconWidth','vffFk','le_initMov','OFF','getPlayerD','zzWKi','VWCqB','eRouteAnim','dKLCO','yEyWT','setEventLa','pow','erControll','oraryMapSp','COLLAPSE','wRange','lowerChasi','PnKtZ','KFBJQ','ntCollisio','isDashingA','setPose','ssMoveComm','NOTE','roximityTy','REzEG','racter_upd','sKlyv','Sprite_Bal','createBitm','isAnyEvent','KCvwW','FhiDC','4|5|0|1|6|','ernLock','ksuJb','QUOSx','ERCLOCKWIS','mpvEU','turn180','oveCore','setupSpawn','edEventPos','FKLDs','loadDataFi','DQVJf','LYpEw','_Preserved','LNSbA','eedMultipl','Walk','Game_Playe','mentDiagon','sWithCPC','prepareSpa','Game_Map_e','OpacitySpe','cwY','avegK','prototype','Switches_V','adjustDir8','clearPose','_visibleEv','Map\x20%1\x20Var','resizeWind','horz\x20mirro','FramesSet','_checkEnco','chId','ttern','eRouteFade','Game_Map_p','Vehicle','chPictureB','ier','WkEEy','_reflectio','tSize','lTCdv','EventIconC','CallEvent','hUAsO','YHArX','mFFGp','setBalloon','requestAni','zsxFv','DMmCD','LsJmB','terHalfEve','ShWIN','adjustMove','sDashing','fontSize','Window_Scr','MsgPopupPl','BCD','bushDepth','despawnAtX','%1Dock','isJumping','Rope','TwglQ','tart','TriggerThe','_spriteset','_eventOver','gFfyG','tileWidth','FIqfS','reverseDir','iconHeight','setDiagona','WyBen','xfBEv','VisuMZ_1_M','CKCGc','rCharacter','turnRight9','eRouteBall','hasMoveOnl','RzfwC','other\x20Tier','dex','pages','isNearTheS','removeChil','isSceneMap','Sprites','_tilemap','iaGXf','onfUy','PosX','pJnKN','ureSetting','TnTHc','screenX','exogD','Value','JxNnP','value','Starting','Region%1','SpriteBase','15|13|0|18','LYqsu','lLduG','OnEventsDa','gXCyj','lock','TbDYv','oving','_startAngl','andom','endOffsetX','MsgDuratio','LEFT\x20TO\x20RI','_dummyWind','Direction','isOnLadder','move','isPlayerCo','SYFju','_diagonalS','nMmDA','calEvents','drawTextEx','TileX','MobileEnab','drawText','RtIqf','creenX','late\x20Setti','resume','updatePeri','MUSIC-NOTE','isSaveEven','FUNC','kIdhC','qGHpF','get','OrFOZ','destinatio','enable','hRQBb','ocation','_setupPage','WUHHU','setPlayerD','VLVsD','Frames','ngs','version','isPassable','TiltVert','ityConditi','roundY','ZEsVD','splice','ckTriggere','posNt','hsNIR','Choice','\x20%1\x20has\x20no','fVariableV','entCore','MessageTex','moveByInpu','itions','TileY','hangeForce','_moveRoute','bility','\x20have\x20Map\x20','jcufi','eOffsets','getControl','List','clearSprit','LJJiD','ED\x204','_filename','o\x20the\x20list','PbRot','defaultFon','ldfkF','ibntF','GHT','ommentTags','mation','Event\x20Temp','findTarget','acity','ExpireClea','itemPaddin','_spawnPres','Fxvgn','meetsSwitc','maxSize','anPass','getDiagona','MOBILE_EVE','Template','_periodicR','left','iCopY','thData','UPPER\x20RIGH','ureOffsetX','eventLabel','OfSceneMap','_needsRefr','CokBH','isPlayerFo','setX','lcLHk','_eventScre','BJZhL','opacitySpe','onDataKey','_targetY','_locate','udHJB','PreloadMap','airship','eventId','backX','updateHueS','labelWindo','Game_Messa','ZVZuk','_hue','BmVDs','nrmni','UBgRQ','_MapSpawne','igger','setControl','mic','Ilvrf','RtaaB','PreMorphJS','1|0','Spriteset_','eicgm','code','meetsCPC','Follower','checkEvent','2bGRAsO','JMDbu','shadowX','isEventOve','_cacheSyst','TileMessag','mmonEvents','nedEvent','eRouteStep','ePosition','erBitmap','initialize','9|1|5|12|7','_spawnedEv','qLIov','EventAutoM','Forward','roMyG','haseOff','canMove','sOnEventsD','nsOnEvents','ntLabels','SpawnEvent','updatePosi','DoVJp','pUqFS','wCdRM','ontrolID','LIGHT','switches','Repeat','RIGHT\x20TO\x20L','setStopFol','setChaseOf','savePreser','createLabe','MoveAllSyn','nates','enX','xYxGd','isEventsMo','tileCoordi','rjHIk','ble\x20%1','ovSMU','lWindowFor','You\x20do\x20not','vertical\x20m','Obbov','bled','FRUSTRATIO','_pose','edEvent','HBQDc','JUtTI','pdate','_eventMorp','TiltLeft','OpFqN','locate','_screenZoo','ZsVkM','KZxyS','t%2','needsUpdat','sDashDisab','_PlayerDia','_realY','ExtraSetti','lHroX','KtoGc','ommand!','loadSystem','loon_setup','JSON','checkColli','r_increase','Angle','eCharacter','tTargetCha','AtRegion','n.\x0aPlease\x20','_text','length','roundX','elfSwitchA','_DisablePl','ates','updateWait','Setting','FavorHorz','ship','reverse\x20co','RbPUU','xVgrN','ProximityD','iXEIy','createLowe','hes_setVal','erNone','racterTilt','tpOVU','setupMorph','_callEvent','blt','Character','TQqHZ','OHhyt','ventLocati','leY','tsAndMovem','_speed','12|1|8|4|1','%1\x20added\x20t','onChange','deltaXFrom','4|0|11|2','copy','dJENz','3|0|4|2|1','_arcPeak','_startY','call','MoveCore','ED\x205','ired\x20plugi','LOVE','3|9|14|11|','iCpEd','jdXBz','addLoadLis','ble','zbRTg','sionKeywor','nAaWR','tnMEZ','sqrt','EventMorph','refreshIfN','allel','IuhCl','BlendMode','SoKrN','wuqJY','Switch','SPIN\x20ANTIC','ationProxi','PlayerIcon','meetActiva','deltaYFrom','wText','vent','TrhUT','preter_exe','_lastAttac','_settings','determineC','MULTIPLY','stop','acter','VVQdk','BWiom','AdvancedSw','PreloadedM','EnableDir8','nt\x20Core\x27s\x0a','switch1Id','witches_se','split','nabled','age.','mimic','TRUE','boxWidth','XHyAq','horizontal','VXYms','createDumm','uFUhG','USER-DEFIN','Mode','Visible','cterBase_s','ED\x201','le_isLandO','ZmMSK','GKSUr','tsMoveCore','EventTimer','kRCGs','DOWN','_attachPic','eSynchAway','nOK','isPosing','roximityDi','JjoIv','outlineCol','setup','isSpriteVS','characterP','_visiblePl','return\x20%1','getPosingC','44388weOGQg','setWaitMod','_mapId','eCommand','cterBase_h','nput','DxHET','rsnLk','racter_ini','BULB','_eventCopy','dow','VS8','pCjiZ','setupRegio','JbQWc','VisuMZ_0_C','isCollided','Seconds','vert\x20mirro','GbWOt','_target','_clickTrig','isShadowVi','eRouteTele','eed','TbZdw','uaqwA','pause','AllForbid','attern','backY','ues','MkShc','mand','gets','edEvents','Proximity','ionTo','setHue','dd\x20in\x20Map\x20','dQbgP','FollowerID','ODmTG','nKjwC','gxECa','ZijAi','gSbyv','OhGXG','LrWSo','itches','deletePres','BufferY','Set\x20this\x20u','MUSICNOTE','DespawnEve','ZZZ','isBattleTe','FontSize','nEventTrig','SynchDirec','BntXo','Orhbe','resetFontS','correctFac','TlQaF','ning','NddYi','ureOffsetY','Game_Syste','TqVMV','Minutes','_CPCs','autoEventI','random','ttCqV','checkRegio','rcVfA','dEncErase','_type','ent','setupCopyE','eSynchReve','3|4|2|0|1','dBUkF','Step2MapId','MHJyN','ylAeg','_eventId','Step2Event','iority','UDDxK','alDirectio','mirror\x20ver','conBuffer','windowPadd','clearEvent','YSYcS','ProximityT','tical','BGSlA','updateRout','PathfindMo','setLastPlu','vents','nLadderSpr','convertSel','resetExitS','add','tSelfVaria','player','nOKTarget','nlockEvent','cterBase_m','cuImb','clearDesti','updateScal','jumpAll','kuPQV','setDestina','tItemChoic','All','r_getInput','SzQPJ','ayerY','setPattern','haracterIn','nCommandIn','kJeON','jPMVQ','right','PlayerColl','entValidFo','isOnRope','ge_setItem','xvMiK','DefaultSha','TUqQM','484498ihFmun','YoReB','BzVLJ','essageCore','eYhfX','RVCzJ','isInstance','registerCo','nOn','processEra','_startX','BNtNT','checkValid','lUfFK','NHxZw','npyqA','start','PopupExtra','hasClickTr','Characters','parallelCo','ting','EvIvo','Step2Prese','WalkAllow','isMapVaria','able','qGlZR','determineE','haracterDi','4|1|0|2|3','Scale','padZero','BoatSpeed','anager.','WithPlayer','LNeIC','vpBqt','GgPlT','reserveCom','_checkEven','ntItem_onC','KRwga','aQUNl','isSupportD','timer','up:\x20Player','nterEffect','p\x20in\x20Event','createProx','isStopFoll','lDidD','fXCyA','Preserve','undType','ACpsm','BQWoZ','some','_cpc','getAttachP','isWorking','fRFAE','seEncounte','ShowShadow','makeDeepCo','_scaleBase','SwitchId','OPexb','juTTq','tSuccess','setNumberI','isDashingE','VariableId','follower','wers_isVis','max','blendMode','_poseDurat','e\x20it\x20in\x20th','JjVAV','_isObjectC','contentsOp','AzbvX','SXmRU','beTmy','_patternLo','isMobileDe','ess','BYwkI','dEventLoca','eWeight','Pmikx','aOaki','Chase','vehicle','updateMove','processMov','shadowY','mmonEventO','PosY','Boat','SelfSwitch','SPIN\x20ACW','riables','racterPatt','IXkaO','dqOIB','GONAL_PATH','wQcIV','entsMoveCo','requestRef','hoqct','dEvent','chPicture','deltaX','sEventsMov','ginCommand','sEwLc','cgtBE','bdtBb','nrVBP','fNaNg','PageId','selfValue','forced','uaBBB','ge_setNumb','tions','anchor','setPlayerC','orPeriodic','eAPhc','vLtsg','%1,','JPFmp','Game_Switc','ilYAB','setAllowEv','entX','changeSpee','iSNrT','status','8hgSHBg','bles_setVa','mapValue','ger','LkRhW','EventAllow','cterBase_i','oLymJ','hxtXk','hasDragonb','cterBase_p','LmlrW','llower','sInScriptC','despawnTer','rPageIndex','auaMt','ement','createSave','eyKne','RgAQL','processDra','visible','htmzh','FDiRW','_fadeOutSt','SelfVariab','Step1Event','rVisibilit','kdzfi','Index','string','direction','jYHur','Kddqu','TiNlB','posEventsM','firstSpawn','Speed','eSynchMirr','Stop','ToCharacte','tKHHR','VVEsV','TibcY','rlXFG','r_checkEve','_direction','UpnZU','RyKKw','werVisibil','erve','isRunning','_inputTime','_stepPatte','lxlqG','teapM','led','Loaded','%1,%2,','isMapSwitc','turnAwayFr','AdvancedVa','art','zfjin','eMyOi','EXCLAMATIO','ontrolDisa','rEvents','Weight','Step1MapId','_initializ','onFromPoin','and','2|0|3|4|1','isAirship','ove','ityOverrid','pIynw','ionValid','_actuallyM','aZdDq','iconIndex','Visibility','isInvisibl','createCont','MoveCoreSe','_shadowGra','Point','nXGXH','getMapSpaw','EffectDura','CSleD','ctive','YAkqo','VisibleEve','IcqBv','leID','Map\x20%1\x20Swi','DespawnAtX','atternY','KPFoK','Button','ets','_shadowOpa','nts','veMessages','setDirecti','LIGHT\x20BULB','berInput_s','tControl','InPlace','Label','load','ata','arget','Test','mlohj','preter_upd','ugin\x27s.\x20Pl','iableValue','tch\x20%2','ED\x203','circle','ssable','rXBHV','ROUTE_SCRI','width','%1%2','lfEvent','createText','3MIfvPE','resetSelfS','_startScal','YVYVu','vice','setMovemen','oach','mTSOc','EventsMove','0|3','dFekO','drawIcon','ed\x20Maps.\x0a\x0a','list','_stopCount','Enable','characterI','SuccessSwi','updateOpac','QEzAj','CarryPose','HEART','enY','drawing','Game_Temp_','bitmap','General','oveStraigh','bdjyu','cter_force','Plugin\x20Par','YIXtx','_mirrorSpr','itionsCPC','ShiftY','jump','isBoat','startCallE','IsBju','iYwwK','nitMembers','TwcTD','Steps','Movement','floor','FPGXR','terNoneEve','offsetX','gyNZl','onExpire','NT_LABELS','duration','EventId','qTbdl','setY','push','Rnjty','Game_Follo','ation','qiLnl','_dragonbon','event','onLoadSucc','cterBase_r','VnWCI','Game_Enemy','isBusy','tLocation','Crfjy','EventColli','rINwY','tNumberInp','ANNOYED','LEFT','initFollow','Tilt','xswyn','switchId','ameters\x20>\x20','_eventPage','LkvhV','IconBuffer','jkHTr','EventLocat','APSRw','erInput','Succeeded','OdAqz','ARRAYNUM','YzIVO','_findPrope','mandCommon','BRlrp','zFxGZ','Hghdj','chaseChara','PVRVN','Dock','updateShad','hhdGC','ARRAYSTRUC','FtXSh','edMorphEve','initMoveSp','efreshTime','eSynchDire','isSpawnedE','AVuEX','XxOnq','ale','eRoutePatt','conditions','createIcon','loadThresh','column','pattern','text','FramesGain','arc','Hidden','ist.\x0aIt\x20is','poNVN','EfLPe','\x22\x20plugin\x20c','map','here','t\x20match\x20pl','lUXDC','rsForceSho','hUPAm','FtrXY','RxxET','igCKK','Settings','pluginComm','variableVa','moveDiagon','PlayerAllo','ame','phic','trim','Airship','create','ChYfO','svrvV','EventDataK','Game_Chara','gRJNp','ccwY','checkNeedF','Location','eCqYy','Window_Num','jUUtO','belsVisibl','isNormalPr','nTouch','activation','dir8','hPictureUp','ment','_offsetY','DashOnLadd','iRMbA','ows','rrectly\x20pl','Message','isEmptyCha','sMoveCoreN','RegionOkTa','tValue','0|5|2|4|1|','down','EzQkN','command108','misc','\x22Event\x20Pop','Self\x20Varia','_forceHide','bind','bkzrI','acterShado','Rwqhc','updateEven','hPictureSe','UzlCH','LoCnt','nData','dTenu','absDistanc','setupDiago','hes_value','_moveSpeed','idccF','ovement','parameters','cuteComman','hPictureBi','updatePose','SBXvB','ymxxW','kZstT','COBWEB','Game_Commo','iagonalSet','8dir','endScaleX','tCustomZ','iJiCl','Pause','mentChange','IQoOW','TileBitmap','TagChanges','startMessa','_isCollide','KIXti','IhKtZ','fPnDL','pdatePatte','MorphEvent','BUEbo','hVIWX','ayerX','r_isDashin','eSynchMimi','Remove','480WvHcsC','CzQwK','onOk','HURT','chTarget','Enabled','_working','haracter','_eventCach','ORNow','PreCopyJS','odifier','ingEntitie','layObjects','_eventLabe','4|5|9|1|2|','TSEfZ','AEfvu','distance','uTWxk','SWEAT','crNhg','HjWyr','loon','loadCPC','ype','StrictColl','ConvertPar','vGKCo','EventID','ADDITIVE','terNone','Interprete','updatePatt','endOffsetY','deleteIcon','mUCkQ','isDashDisa','mPXTi','Wbhbz','wnedEventA','region','rEhyU','racter_cha','tshAS','tion','Yysca','jwGjc','dplsm','saveEventL','spriteId','FNlgT','EventIconR','canPassDia','_Map','mVBuJ','RLhGU','Event','PlayerMove','isEventCli','YNNeh','witchVaria','ShipSpeed','3|2|0|4|1','Map%1-Even','etupEvents','isSmartEve','tLocations','BgAog','upport','UmgoZ','hasEncount','aracter','Collision','_customZ','hIrUd','WithEvents','isLabelVis','adjustY','odicRefres','irection','Map_create','setEventIc','TemplateNa','createChar','none','referEvent','duoia','elete','JrLNs','ition','mScale','ryvak','chPictureS','dQxzy','zoomScale','_selfTarge','RegionList','row','isSelfVari','ttings','_eventEras','VumJo','jfqkh','_activatio','executeCom','gnbfK','6257GWeliS','FyOYG','ally','Eydsa','ePpiD','mgoEQ','hbbSW','iable\x20%2','Game_SelfS','BuHOu','ATHFINDING','Game_Varia','rdJmr','_moveTypeR','concat','ommonEvent','executeMov','MvknO','_spriteOff','RnsAN','visibleRan','r_executeM','aps','startScale','Qggou','Toggle','iptCall','iable','oveDiagona','kSPVE','mmand','city','ndex','GMVzM','emplate','ataKey','sAt','Refresh','BGqoR','TerrainTag','ayer','isMapPassa','setupFollo','NRFip','ible','ictureBitm','KXYkF','fontFace','fWinx','setItemCho','SynchOpaci','qndsB','eRouteJump','ITEM','setFrame','irror','Cache','oon','IIxIZ','_commonEve','_clearPage','GxWcX','elfSwitche','Synch','creenY','ktmPq','LowerLayer','findDiagon','realMoveSp','onOnly','moveTypeRa','aLqON','monEvents','characterN','monEvent','checkExist','LOWER\x20LEFT','VehicleFor','KtxcP','8|3|1|12','sent','PpYoV','DashingEna','preter_cha','regionId','_chaseOff','sogOk','ccwX','rPaWK','lOffsetY','deleteEven','cter_setMo','isRegionAl','VtvSS','hasStepAni','Game_Timer','ptUDm','terrainTag','loaded\x20for','suMZ_Event','clamp','addChild','_waitMode','%1DockRegi','exzDE','events','ingDirecti','Ixmuu','CBPyj','BalloonOff','AirshipSpe','MapSwitche','rceHidden','pageId','FVnqQ','HLkeu','NoneProxim','bufferY','fhdjF','hasCPCs','up_Preload','isShadowSh','unlock','ureBlendMo','isDashing','approach','isMoveOnly','entAutoMov','isInVehicl','ZmBTP','_active','Arc','preter_Plu','ANGER','bles_value','eyRTP','ovuGr','OGJAT','FFCxQ','DkpqU','Dlims','isEventTes','eLoaded','OYHaa','eRouteSelf','QyLVG','pizld','isMoving','aced\x20over\x20','rything','ulGRA','eCoreSetti','lDestinati','forceCarry','createDisp','erved','zIbrB','qKIfc','kgMOU','TrToC','dWithPlaye','requestMap','UjMLm','_meetsSwit','EFT','target','IogfQ','ision','DMNwW','lxuKp','ateMove','apWidth','seAqc','rLabelWind','ice','LoadTempla','hCfSV','AtTerrainT','setBackgro','sable','HUvUh','hDepth','h\x20%1','komdM','\x20mirror','heaeL','_followerC','rink','wers_jumpA','eRouteMove','atternYBas','UkdxZ','originalTe','lize','Preloaded\x20','zsiyq','ntAutoMove','deleteSave','moveSynchT','WUmrc','clearCarry','setOpacity','apHeight','Delete','6|3|4|2|5|','type','BiCjC','VisibleRan','GEVfo','%1Forbid','timerText','fects','EventerMap','lPyfT','SONXq','rRVmU','gHCwe','pPbka','ge_add','uHcgn','COSJc','MoveRoute','jnSTq','CustomPage','kbneB','aluesInScr','delay','IVqiZ','CRPuC','radius','EWpJN','cedSwitchV','ZeDNm','Change','_interpret','getEventIc','QnJUZ','_vehicleTy','plvsD','morphInto','tTerrainTa','2|1|3|0|4','lid','iagonalMov','GetMoveSyn','PyhFn','hift','enEvK','lowPass','_moveAllow','izontal','PjYNx','getSavedEv','sVtLt','NWinL','clearDashi','Locations','updateSelf','witches_va','ntTriggerT','_frames','AKMzA','1653500OWFvnd','RAmer','DRjPr','MoveRouteI','execute','EarJq','Game_Party','hdxdH','ssxah','setupSaveE','DespawnReg','veRoute','DzBTA','rocessOk','cter','racter_set','_meetsCond','match','reverse\x20mi','Game_Map_u','ntId','eRouteHugW','directionO','ARRAYJSON','wPBOj','Maps\x20and\x20a','isPressed','VVHHZ','ollText_st','dHZrt','klnet','cked','isTriggerI','tIconSprit','Map','CAitD','eeded','apSmoothin','encounterP','gger','tchId','ZWIvh','NyOFs','ionSave','STR','_SavedEven','hsWOB','increaseSt','omPoint','filename','ionData','IconBlendM','RandomMove','ght','unterRaw','orVert','hideShadow','_scene','xrwOT','ARRAYSTR','ccodf','_targetAng','tID','ents','YmbHT','ETinW','Game_Event','cess','advancedFu','KtuQh','getPose','tringTags','fadeIn','sjqCT','MapID','nTo','Jgabx','setCharact','fadeDurati','Data','portToChar','MEDFq','onLoadAtta','ntItem_onO','pacity','ity','wuhAu','petUL','disable','andCallEve','tmap','NORMAL','tener','SCREEN'];_0x320f=function(){return _0x54aa83;};return _0x320f();}Sprite_VisuMz_MessagePopup[_0x3e3bd2(0x294)]=Object[_0x3e3bd2(0x671)](Sprite['prototype']),Sprite_VisuMz_MessagePopup['prototype'][_0x3e3bd2(0x9f3)+'r']=Sprite_VisuMz_MessagePopup,Sprite_VisuMz_MessagePopup[_0x3e3bd2(0x294)][_0x3e3bd2(0x386)]=function(_0x1918df){const _0x1a3b4a=_0x3e3bd2,_0x1f4679={'npyqA':'1|5|2|4|0|'+'3'},_0x46f867=_0x1f4679[_0x1a3b4a(0x4e1)][_0x1a3b4a(0x424)]('|');let _0x1f0d98=-0x256f+0xc4f+0x1920;while(!![]){switch(_0x46f867[_0x1f0d98++]){case'0':this[_0x1a3b4a(0x5e2)+'Sprite']();continue;case'1':this[_0x1a3b4a(0x417)]=_0x1918df;continue;case'2':this[_0x1a3b4a(0x9b6)+'s']();continue;case'3':this[_0x1a3b4a(0x117)]();continue;case'4':this[_0x1a3b4a(0x42d)+_0x1a3b4a(0x148)]();continue;case'5':Sprite[_0x1a3b4a(0x294)]['initialize'][_0x1a3b4a(0x3f6)](this);continue;}break;}},Sprite_VisuMz_MessagePopup[_0x3e3bd2(0x294)][_0x3e3bd2(0x9b6)+'s']=function(){const _0x272038=_0x3e3bd2,_0x440b43={'cIvHI':_0x272038(0x227)+'|19|8|22|2'+_0x272038(0x1af)+_0x272038(0x2ea)+_0x272038(0x170)+_0x272038(0x1cf),'AKMzA':function(_0x20fbc7,_0x4d5376){return _0x20fbc7>_0x4d5376;},'LoCnt':function(_0x4763dd,_0x36d3e3){return _0x4763dd>=_0x36d3e3;},'vfxpn':function(_0x18f112,_0x506892){return _0x18f112*_0x506892;},'XHyAq':function(_0x57ea86,_0x19011f){return _0x57ea86*_0x19011f;},'PVRVN':function(_0x117c75,_0x4ebb4f){return _0x117c75*_0x4ebb4f;},'gSbyv':function(_0x45cea5,_0x30bfab){return _0x45cea5*_0x30bfab;}},_0x42911f=_0x440b43[_0x272038(0x130)][_0x272038(0x424)]('|');let _0x24cff9=0x890*0x2+0xbfc*-0x2+0x6d8;while(!![]){switch(_0x42911f[_0x24cff9++]){case'0':this[_0x272038(0x684)]=this[_0x272038(0x3f5)];continue;case'1':this[_0x272038(0x98b)+_0x272038(0x3e9)]=this[_0x272038(0x417)]['endScale']['y'];continue;case'2':_0x440b43['AKMzA'](this[_0x272038(0x978)+'ration'],0x1298+0x1f9d+-0x3235)&&_0x440b43[_0x272038(0x69d)](this['_fadeOutDu'+_0x272038(0x9aa)],Math['floor'](_0x440b43['vfxpn'](this[_0x272038(0x11d)],0x8bf+0x4*-0x137+-0x3e3+0.48)))&&(this['_fadeOutDu'+_0x272038(0x9aa)]=Math[_0x272038(0x60f)](_0x440b43[_0x272038(0x42a)](this['_duration'],-0x43*-0x83+0x7b6+-0x29ff+0.48)));continue;case'3':this[_0x272038(0x3f5)]=this['_settings']['startOffse'+'t']['y'];continue;case'4':this[_0x272038(0x962)]=this[_0x272038(0x417)][_0x272038(0x91c)]['x'];continue;case'5':this['z']=0x1732+-0x19b4+0x288*0x1;continue;case'6':this['_currentAr'+'c']=-0x449*-0x3+0x1919+-0x25f4;continue;case'7':this[_0x272038(0x4dc)]=this[_0x272038(0x417)][_0x272038(0x239)+'t']['x'];continue;case'8':this[_0x272038(0x24b)]=_0x440b43[_0x272038(0x836)](this[_0x272038(0x124)+_0x272038(0x61d)],0x1e7*0x1+0x1*-0xc2e+-0xa47*-0x1)?-0x1e12+0x5a*-0x53+0xed0*0x4:-0x295*0x7+0x26e9+-0x13d7;continue;case'9':this[_0x272038(0x98b)+'leX']=this[_0x272038(0x417)]['endScale']['x'];continue;case'10':this['_startAngl'+'e']=-this['_settings'][_0x272038(0x987)][_0x272038(0x4e2)];continue;case'11':this['_fadeOutSt'+_0x272038(0x59f)]=this[_0x272038(0x978)+_0x272038(0x9aa)];continue;case'12':this[_0x272038(0x1d9)+_0x272038(0x6f3)]=this[_0x272038(0x417)][_0x272038(0x616)];continue;case'13':this[_0x272038(0x95c)]=this[_0x272038(0x4dc)];continue;case'14':this[_0x272038(0x3f4)]=-this[_0x272038(0x417)][_0x272038(0x692)][_0x272038(0x659)];continue;case'15':this[_0x272038(0x35e)]=this[_0x272038(0x417)]['endOffset']['y'];continue;case'16':this[_0x272038(0x124)+'ation']=this[_0x272038(0x417)][_0x272038(0x885)+'on'][_0x272038(0x87f)];continue;case'17':this[_0x272038(0x5e5)+'eY']=this[_0x272038(0x417)][_0x272038(0x748)]['y'];continue;case'18':this['_startScal'+'eX']=this[_0x272038(0x417)][_0x272038(0x748)]['x'];continue;case'19':_0x440b43['AKMzA'](this['_fadeInDur'+'ation'],-0xc7a+0x1*-0x47+-0x28d*-0x5)&&_0x440b43[_0x272038(0x69d)](this[_0x272038(0x124)+_0x272038(0x61d)],Math['floor'](_0x440b43[_0x272038(0x643)](this[_0x272038(0x11d)],0x6d*0xe+0xe50+-0x1446+0.48)))&&(this[_0x272038(0x124)+'ation']=Math['floor'](_0x440b43[_0x272038(0x477)](this[_0x272038(0x11d)],0x1*-0x1b19+-0x45*-0x3b+0x1*0xb32+0.48)));continue;case'20':this['_duration']=this[_0x272038(0x417)][_0x272038(0x616)];continue;case'21':this[_0x272038(0x874)+'le']=-this[_0x272038(0x417)]['angle']['end'];continue;case'22':this[_0x272038(0x978)+'ration']=this[_0x272038(0x417)][_0x272038(0x885)+'on'][_0x272038(0x22f)];continue;}break;}},Sprite_VisuMz_MessagePopup[_0x3e3bd2(0x294)]['createDumm'+_0x3e3bd2(0x148)]=function(){const _0x38ce12=_0x3e3bd2,_0x3865a7={'Ixmuu':function(_0x174469,_0x239ffa){return _0x174469+_0x239ffa;},'HmLwC':function(_0x101524,_0x1a7b22){return _0x101524*_0x1a7b22;}},_0x39a5e9=this[_0x38ce12(0x417)],_0x5ec2e7=new Rectangle(0x3*0x427+0x1*-0x7db+-0x24d*0x2,0x938+-0x1df5*0x1+0x14bd,Graphics['width'],Graphics[_0x38ce12(0x8e6)]);this[_0x38ce12(0x2f7)+'ow']=new Window_Base(_0x5ec2e7);const _0x57444f=this[_0x38ce12(0x2f7)+'ow'][_0x38ce12(0x8f1)](_0x39a5e9[_0x38ce12(0x657)]),_0x3af458=_0x57444f[_0x38ce12(0x5df)],_0x3769e2=_0x57444f[_0x38ce12(0x8e6)],_0x5759da=_0x3865a7[_0x38ce12(0x79c)](_0x3af458,_0x3865a7[_0x38ce12(0x120)]($gameSystem['windowPadd'+_0x38ce12(0x1f0)](),-0x1347+-0x45f+0x17a8)),_0xa27ddd=_0x3865a7['Ixmuu'](_0x3769e2,_0x3865a7[_0x38ce12(0x120)]($gameSystem[_0x38ce12(0x4a7)+_0x38ce12(0x1f0)](),-0x54f+0x57c+0x2b*-0x1));this[_0x38ce12(0x2f7)+'ow'][_0x38ce12(0x2fa)](-0x98*0x7+-0x125*0x19+0x20c5,0x1273+0x11*-0x184+-0x751*-0x1,_0x5759da,_0xa27ddd),this[_0x38ce12(0x2f7)+'ow'][_0x38ce12(0x5b5)+'ents'](),this['_dummyWind'+'ow'][_0x38ce12(0x300)](_0x39a5e9[_0x38ce12(0x657)],-0x918*-0x3+0x262a*0x1+-0x4172,-0xd91+0x1ef6+0x3d*-0x49);},Sprite_VisuMz_MessagePopup['prototype'][_0x3e3bd2(0x5e2)+_0x3e3bd2(0x1c6)]=function(){const _0x2c9f62=_0x3e3bd2,_0x1c1169={'OPexb':_0x2c9f62(0x6d5)+'3|0|6|7|8'},_0x2e8e33=_0x1c1169[_0x2c9f62(0x515)][_0x2c9f62(0x424)]('|');let _0x528cc1=-0x1d3*0x5+0x1*-0x11e6+-0x1b05*-0x1;while(!![]){switch(_0x2e8e33[_0x528cc1++]){case'0':this[_0x2c9f62(0xe3)+'e'][_0x2c9f62(0x8ed)]['x']=this[_0x2c9f62(0x5e5)+'eX'];continue;case'1':this[_0x2c9f62(0xe3)+'e'][_0x2c9f62(0x552)]['y']=-0xbcf*-0x1+0x53f+-0x110e+0.5;continue;case'2':this['_textSprit'+'e']['x']=this[_0x2c9f62(0x4dc)];continue;case'3':this['_textSprit'+'e']['y']=this[_0x2c9f62(0x3f5)];continue;case'4':this[_0x2c9f62(0xe3)+'e']=new Sprite();continue;case'5':this[_0x2c9f62(0xe3)+'e'][_0x2c9f62(0x5fc)]=this[_0x2c9f62(0x2f7)+'ow'][_0x2c9f62(0x9ed)];continue;case'6':this[_0x2c9f62(0xe3)+'e'][_0x2c9f62(0x8ed)]['y']=this[_0x2c9f62(0x5e5)+'eY'];continue;case'7':this[_0x2c9f62(0xe3)+'e'][_0x2c9f62(0x987)]=this[_0x2c9f62(0x2f2)+'e'];continue;case'8':this[_0x2c9f62(0x796)](this[_0x2c9f62(0xe3)+'e']);continue;case'9':this['_textSprit'+'e'][_0x2c9f62(0x552)]['x']=0x17c5*-0x1+-0x501*-0x4+0x1*0x3c1+0.5;continue;}break;}},Sprite_VisuMz_MessagePopup['prototype'][_0x3e3bd2(0x117)]=function(){const _0x1e7a0b=_0x3e3bd2,_0xfb1c91={'vqsAK':_0x1e7a0b(0x27a)+'3|2|7'},_0x56d4a7=_0xfb1c91[_0x1e7a0b(0x11f)][_0x1e7a0b(0x424)]('|');let _0x166f49=0x3e3+0x237c+-0x275f;while(!![]){switch(_0x56d4a7[_0x166f49++]){case'0':this['updateSpri'+_0x1e7a0b(0x23f)]();continue;case'1':this[_0x1e7a0b(0x8ae)+_0x1e7a0b(0x229)]();continue;case'2':this[_0x1e7a0b(0x5f5)+_0x1e7a0b(0x88c)]();continue;case'3':this['updateText'+'Angle']();continue;case'4':Sprite['prototype']['update'][_0x1e7a0b(0x3f6)](this);continue;case'5':if(!this[_0x1e7a0b(0x197)]())return;continue;case'6':this['updateText'+_0x1e7a0b(0x4f1)]();continue;case'7':this['updateDura'+_0x1e7a0b(0x6f3)]();continue;}break;}},Sprite_VisuMz_MessagePopup['prototype'][_0x3e3bd2(0x197)]=function(){return!!this['_textSprit'+'e'];},Sprite_VisuMz_MessagePopup['prototype']['updateSpri'+_0x3e3bd2(0x23f)]=function(){const _0x274c6c=_0x3e3bd2,_0x52a168={'XmNmJ':function(_0x263887,_0xf271a6){return _0x263887+_0xf271a6;},'nrVBP':function(_0x484167,_0x188a4d){return _0x484167*_0x188a4d;},'jHHvw':function(_0x4ea981,_0x43e884){return _0x4ea981/_0x43e884;}},_0xc020db=this[_0x274c6c(0x417)];{const _0x3bb913=$gameMap['tileWidth'](),_0x4433ef=_0xc020db[_0x274c6c(0x3a5)+'nates']['x'],_0x5b460e=$gameMap['adjustX'](_0x4433ef);this['x']=Math[_0x274c6c(0x60f)](_0x52a168[_0x274c6c(0xa2d)](_0x52a168[_0x274c6c(0x54a)](_0x5b460e,_0x3bb913),_0x52a168['jHHvw'](_0x3bb913,-0xafd+-0x89e*0x2+0x1c3b)));}{const _0x576c30=$gameMap[_0x274c6c(0x176)](),_0x55b1a7=_0xc020db['tileCoordi'+_0x274c6c(0x3a1)]['y'],_0x49b9e0=$gameMap[_0x274c6c(0x714)](_0x55b1a7);this['y']=Math[_0x274c6c(0x60f)](_0x52a168[_0x274c6c(0xa2d)](_0x52a168['nrVBP'](_0x49b9e0,_0x576c30),_0x576c30));}},Sprite_VisuMz_MessagePopup[_0x3e3bd2(0x294)][_0x3e3bd2(0x8ae)+_0x3e3bd2(0x229)]=function(){const _0x185f4d=_0x3e3bd2,_0x40a6fb={'KtuQh':function(_0x37b959,_0x27e568){return _0x37b959<=_0x27e568;},'HxWxQ':function(_0x44f4ce,_0x2b3942){return _0x44f4ce/_0x2b3942;},'TSEfZ':function(_0x4d3083,_0x19cb8a){return _0x4d3083+_0x19cb8a;},'TlQaF':function(_0x40b9dd,_0x4cea7b){return _0x40b9dd*_0x4cea7b;},'OpBWw':function(_0x9d589a,_0x3b00cf){return _0x9d589a-_0x3b00cf;},'EJesB':function(_0x133db2,_0x36cf18){return _0x133db2*_0x36cf18;},'TwglQ':function(_0x1f383b,_0x13504f){return _0x1f383b-_0x13504f;},'BQJsZ':function(_0x28a4cc,_0x37ac58){return _0x28a4cc+_0x37ac58;},'cgtBE':function(_0x1ba02e,_0x97f7dd){return _0x1ba02e*_0x97f7dd;},'uFNxX':function(_0x4e6ee4,_0x485c8a){return _0x4e6ee4-_0x485c8a;}};if(_0x40a6fb[_0x185f4d(0x87c)](this['_duration'],-0x18cf+-0x856+0x2125))return;const _0x2bfad7=this[_0x185f4d(0x11d)],_0x3034fa=this['_wholeDura'+_0x185f4d(0x6f3)];{this[_0x185f4d(0x95c)]=_0x40a6fb[_0x185f4d(0x191)](_0x40a6fb[_0x185f4d(0x6d6)](_0x40a6fb[_0x185f4d(0x489)](this[_0x185f4d(0x95c)],_0x40a6fb[_0x185f4d(0xf2)](_0x2bfad7,0x1004+-0x6*-0x2b0+-0x2023)),this[_0x185f4d(0x962)]),_0x2bfad7),this['_offsetY']=_0x40a6fb['HxWxQ'](_0x40a6fb[_0x185f4d(0x6d6)](_0x40a6fb[_0x185f4d(0x1cd)](this[_0x185f4d(0x684)],_0x40a6fb[_0x185f4d(0xf2)](_0x2bfad7,-0x2421+-0x87c+0x2c9e)),this[_0x185f4d(0x35e)]),_0x2bfad7);}{const _0x37d36f=_0x40a6fb[_0x185f4d(0x2c0)](_0x3034fa,_0x2bfad7),_0x5767d4=_0x40a6fb[_0x185f4d(0x191)](_0x3034fa,-0x4*0x8d2+0xa93*-0x2+0x12d0*0x3),_0x704c3=this['_arcPeak'],_0x4788ca=_0x40a6fb[_0x185f4d(0x191)](-_0x704c3,Math[_0x185f4d(0x264)](_0x5767d4,-0x1*0x12db+-0x1e7e+0x70d*0x7));this['_currentAr'+'c']=_0x40a6fb[_0x185f4d(0xa2a)](_0x40a6fb[_0x185f4d(0x548)](_0x4788ca,Math[_0x185f4d(0x264)](_0x40a6fb[_0x185f4d(0x939)](_0x37d36f,_0x5767d4),0x1*0x48b+-0x15e7+-0xd*-0x156)),_0x704c3);}this['_textSprit'+'e']['x']=this['_offsetX'],this[_0x185f4d(0xe3)+'e']['y']=_0x40a6fb[_0x185f4d(0x6d6)](this[_0x185f4d(0x684)],this[_0x185f4d(0x163)+'c']);},Sprite_VisuMz_MessagePopup[_0x3e3bd2(0x294)][_0x3e3bd2(0x8ae)+_0x3e3bd2(0x4f1)]=function(){const _0x2d9fec=_0x3e3bd2,_0x29383b={'jYHur':function(_0x36dc2f,_0x2cfc83){return _0x36dc2f<=_0x2cfc83;},'NWinL':function(_0x3b7b7c,_0x66522c){return _0x3b7b7c/_0x66522c;},'JjoIv':function(_0x1736dc,_0x25ea84){return _0x1736dc+_0x25ea84;},'lVaRS':function(_0x3ef9b7,_0x94b963){return _0x3ef9b7*_0x94b963;},'QmFlI':function(_0x2c6e08,_0x173cb5){return _0x2c6e08-_0x173cb5;},'naoAX':function(_0x34f5e9,_0x42c9ee){return _0x34f5e9/_0x42c9ee;},'MRpAe':function(_0x28cb56,_0x205c62){return _0x28cb56*_0x205c62;},'BzVLJ':function(_0x38c819,_0x36b855){return _0x38c819-_0x36b855;}};if(_0x29383b[_0x2d9fec(0x581)](this[_0x2d9fec(0x11d)],-0x859+0x542+0x7*0x71))return;const _0x411360=this['_duration'];this[_0x2d9fec(0xe3)+'e'][_0x2d9fec(0x8ed)]['x']=_0x29383b[_0x2d9fec(0x82f)](_0x29383b[_0x2d9fec(0x440)](_0x29383b[_0x2d9fec(0x1d7)](this['_textSprit'+'e'][_0x2d9fec(0x8ed)]['x'],_0x29383b[_0x2d9fec(0x90d)](_0x411360,0x7*0x17b+-0x1*-0x92b+-0x1387)),this['_targetSca'+'leX']),_0x411360),this[_0x2d9fec(0xe3)+'e'][_0x2d9fec(0x8ed)]['y']=_0x29383b[_0x2d9fec(0x167)](_0x29383b['JjoIv'](_0x29383b['MRpAe'](this['_textSprit'+'e'][_0x2d9fec(0x8ed)]['y'],_0x29383b[_0x2d9fec(0x4d4)](_0x411360,-0x14fd+-0x2474+0x3972)),this['_targetSca'+_0x2d9fec(0x3e9)]),_0x411360);},Sprite_VisuMz_MessagePopup[_0x3e3bd2(0x294)][_0x3e3bd2(0x8ae)+_0x3e3bd2(0x3c9)]=function(){const _0x832dc7=_0x3e3bd2,_0x4299a9={'LzuMU':function(_0x336d5c,_0x570e62){return _0x336d5c<=_0x570e62;},'SCHnu':function(_0x56b480,_0x2ca0fa){return _0x56b480/_0x2ca0fa;},'BdMQK':function(_0x5c70bf,_0x1481b1){return _0x5c70bf+_0x1481b1;},'mnZRi':function(_0x3b36f8,_0x3a681b){return _0x3b36f8*_0x3a681b;},'bkzrI':function(_0x328136,_0x55b335){return _0x328136-_0x55b335;}};if(_0x4299a9[_0x832dc7(0xfe)](this[_0x832dc7(0x11d)],0x2114+-0x2679+0x565))return;const _0x111848=this['_duration'];this[_0x832dc7(0xe3)+'e'][_0x832dc7(0x987)]=_0x4299a9[_0x832dc7(0x8a9)](_0x4299a9[_0x832dc7(0x903)](_0x4299a9[_0x832dc7(0x1b5)](this['_textSprit'+'e'][_0x832dc7(0x987)],_0x4299a9[_0x832dc7(0x697)](_0x111848,0x1a3e+0x11d4+-0x2c11)),this[_0x832dc7(0x874)+'le']),_0x111848);},Sprite_VisuMz_MessagePopup['prototype'][_0x3e3bd2(0x5f5)+'ity']=function(){this['updateFade'+'In'](),this['updateFade'+'Out']();},Sprite_VisuMz_MessagePopup['prototype'][_0x3e3bd2(0x8b3)+'In']=function(){const _0x3d8127=_0x3e3bd2,_0x145cac={'bdbRF':function(_0x3dca98,_0x95328){return _0x3dca98<=_0x95328;},'GGXRa':function(_0x14f72c,_0x3a5bf4){return _0x14f72c/_0x3a5bf4;},'WqRJh':function(_0x3c1ec0,_0x4c8aee){return _0x3c1ec0+_0x4c8aee;},'RyKKw':function(_0x4e54ba,_0xce251c){return _0x4e54ba*_0xce251c;},'YQvGk':function(_0xaadeca,_0x275a35){return _0xaadeca-_0x275a35;},'kvIBc':function(_0x3b97b1,_0x19ed96){return _0x3b97b1<=_0x19ed96;}};if(_0x145cac[_0x3d8127(0x8df)](this['_fadeInDur'+'ation'],-0x43*-0x44+0xbcf+-0x35*0x8f))return;const _0x1a243d=this[_0x3d8127(0x124)+_0x3d8127(0x61d)];this[_0x3d8127(0x24b)]=_0x145cac['GGXRa'](_0x145cac['WqRJh'](_0x145cac[_0x3d8127(0x591)](this['opacity'],_0x145cac['YQvGk'](_0x1a243d,-0x2145+-0x18e*-0x19+-0x598)),-0x15ce+0x207+0x14c6),_0x1a243d),this[_0x3d8127(0x124)+_0x3d8127(0x61d)]--,_0x145cac[_0x3d8127(0x15f)](this[_0x3d8127(0x124)+'ation'],0x1*-0x6b7+0x164c+0xf95*-0x1)&&(this[_0x3d8127(0x24b)]=-0x292*0xe+0x74*-0x1a+0x49*0xab);},Sprite_VisuMz_MessagePopup[_0x3e3bd2(0x294)]['updateFade'+'Out']=function(){const _0x385360=_0x3e3bd2,_0x21e2e5={'DxHET':function(_0x3c386e,_0x5223d6){return _0x3c386e<=_0x5223d6;},'CoQyC':function(_0x525d67,_0x506df1){return _0x525d67>_0x506df1;},'QyLVG':function(_0x1ed418,_0x47aebc){return _0x1ed418/_0x47aebc;},'dplsm':function(_0xaf0ff5,_0xeb13a8){return _0xaf0ff5+_0xeb13a8;},'Qggou':function(_0x181c4b,_0x334066){return _0x181c4b*_0x334066;},'OfwKV':function(_0x55036b,_0xf6ed1d){return _0x55036b-_0xf6ed1d;},'udHJB':function(_0x122dc3,_0x193d47){return _0x122dc3<=_0x193d47;}};if(_0x21e2e5[_0x385360(0x44e)](this[_0x385360(0x978)+_0x385360(0x9aa)],0x574+-0x1b97+0x1623))return;if(_0x21e2e5['CoQyC'](this[_0x385360(0x11d)],this[_0x385360(0x579)+_0x385360(0x59f)]))return;const _0x2d32eb=this['_fadeOutDu'+'ration'];this['opacity']=_0x21e2e5[_0x385360(0x7c2)](_0x21e2e5[_0x385360(0x6f6)](_0x21e2e5[_0x385360(0x749)](this[_0x385360(0x24b)],_0x21e2e5[_0x385360(0x1fc)](_0x2d32eb,-0xc7+0x11*0x59+-0x1*0x521)),0x8b*0x47+-0xd12+-0x197b),_0x2d32eb),this[_0x385360(0x978)+_0x385360(0x9aa)]--,_0x21e2e5[_0x385360(0x360)](this[_0x385360(0x978)+_0x385360(0x9aa)],0x1cc5*-0x1+-0x248a+0x414f)&&(this[_0x385360(0x24b)]=0x11d*-0x17+0x25d+0x173e);},Sprite_VisuMz_MessagePopup[_0x3e3bd2(0x294)][_0x3e3bd2(0x242)+'tion']=function(){const _0x4d8c3a=_0x3e3bd2,_0x5e75bf={'Dlims':function(_0x5d8fdf,_0x552465){return _0x5d8fdf<=_0x552465;}};if(_0x5e75bf[_0x4d8c3a(0x7bd)](this['_duration'],-0x896+0x18a2+-0x100c))return;this[_0x4d8c3a(0x11d)]--;if(_0x5e75bf[_0x4d8c3a(0x7bd)](this[_0x4d8c3a(0x11d)],-0x789*0x1+0xed+-0xbc*-0x9)){if(this['parent'])this['parent'][_0x4d8c3a(0x2d8)+'d'](this);this[_0x4d8c3a(0xe3)+'e'][_0x4d8c3a(0x5fc)]&&this[_0x4d8c3a(0xe3)+'e']['bitmap'][_0x4d8c3a(0x210)]();}},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x375)+'Map_create'+_0x3e3bd2(0x773)]=Spriteset_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x3dd)+_0x3e3bd2(0x898)],Spriteset_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x3dd)+_0x3e3bd2(0x898)]=function(){const _0x4abb03=_0x3e3bd2;VisuMZ[_0x4abb03(0x5eb)+_0x4abb03(0x8da)][_0x4abb03(0x375)+_0x4abb03(0x717)+_0x4abb03(0x773)]['call'](this),this[_0x4abb03(0x39f)+'lWindows']();},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x375)+_0x3e3bd2(0x717)+_0x3e3bd2(0x1e0)]=Spriteset_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x18b)+'ow'],Spriteset_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x18b)+'ow']=function(){const _0x5d5bf3=_0x3e3bd2;VisuMZ[_0x5d5bf3(0x5eb)+_0x5d5bf3(0x8da)][_0x5d5bf3(0x375)+'Map_create'+_0x5d5bf3(0x1e0)]['call'](this),this['createShad'+_0x5d5bf3(0x687)]();},Spriteset_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x18b)+_0x3e3bd2(0x687)]=function(){const _0x4e0778=_0x3e3bd2;if(!VisuMZ[_0x4e0778(0x5eb)+_0x4e0778(0x8da)][_0x4e0778(0x668)][_0x4e0778(0x60e)][_0x4e0778(0x511)+'s'])return;for(const _0x3d0040 of this[_0x4e0778(0x1dc)+'Sprites']){this[_0x4e0778(0x71a)+_0x4e0778(0x698)+'w'](_0x3d0040);}},Spriteset_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x71a)+_0x3e3bd2(0x698)+'w']=function(_0x2869d3){const _0x15a427=_0x3e3bd2,_0x55bbc9={'KIXti':_0x15a427(0x1b4)+'5|0'},_0x323109=_0x55bbc9[_0x15a427(0x6bb)][_0x15a427(0x424)]('|');let _0x154383=0x37*0xb4+-0xea2*0x1+0xc05*-0x2;while(!![]){switch(_0x323109[_0x154383++]){case'0':this[_0x15a427(0x2db)][_0x15a427(0x796)](_0x2869d3[_0x15a427(0x1f7)+'ite']);continue;case'1':_0x2869d3[_0x15a427(0x1f7)+_0x15a427(0x10d)][_0x15a427(0x552)]['x']=-0x2442+-0x262d*0x1+-0xee3*-0x5+0.5;continue;case'2':_0x2869d3[_0x15a427(0x1f7)+_0x15a427(0x10d)]['anchor']['y']=0x6be+0x613*0x1+-0xcd0*0x1;continue;case'3':_0x2869d3[_0x15a427(0x1f7)+_0x15a427(0x10d)]['bitmap']=ImageManager[_0x15a427(0x3c4)](_0x2869d3[_0x15a427(0x1f7)+'ite'][_0x15a427(0x337)]);continue;case'4':_0x2869d3[_0x15a427(0x1f7)+_0x15a427(0x10d)][_0x15a427(0x337)]=_0x2869d3[_0x15a427(0x1dc)][_0x15a427(0x20e)+_0x15a427(0x16a)]();continue;case'5':_0x2869d3[_0x15a427(0x1f7)+_0x15a427(0x10d)]['z']=-0x23ee+-0x75f+0x2b4d;continue;case'6':_0x2869d3[_0x15a427(0x1f7)+_0x15a427(0x10d)]=new Sprite();continue;}break;}},Spriteset_Map[_0x3e3bd2(0x294)]['hideShadow'+'s']=function(){const _0x26a608=_0x3e3bd2;if(!VisuMZ[_0x26a608(0x5eb)+_0x26a608(0x8da)][_0x26a608(0x668)][_0x26a608(0x60e)][_0x26a608(0x511)+'s'])return;for(const _0x553f00 of this[_0x26a608(0x1dc)+_0x26a608(0x2da)]){this[_0x26a608(0x2db)][_0x26a608(0x2d8)+'d'](_0x553f00[_0x26a608(0x1f7)+'ite']);}},Spriteset_Map['prototype'][_0x3e3bd2(0x39f)+'lWindows']=function(){const _0x30eb69=_0x3e3bd2;this[_0x30eb69(0x94b)+_0x30eb69(0x687)]=[];for(const _0x1d2f52 of $gameMap[_0x30eb69(0x79a)]()){this[_0x30eb69(0x39f)+_0x30eb69(0x3a9)+_0x30eb69(0x13b)](_0x1d2f52);}},Spriteset_Map[_0x3e3bd2(0x34b)+_0x3e3bd2(0x615)]=VisuMZ['EventsMove'+'Core']['Settings'][_0x3e3bd2(0x5d0)][_0x3e3bd2(0x302)+_0x3e3bd2(0x599)]??!![],Spriteset_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x39f)+_0x3e3bd2(0x3a9)+'Target']=function(_0x2db6f0){const _0xe51b30=_0x3e3bd2;if(!this[_0xe51b30(0xa2e)+_0xe51b30(0x4cc)+_0xe51b30(0x7de)+'ow'](_0x2db6f0))return;if(Utils[_0xe51b30(0x528)+_0xe51b30(0x5e7)]()){if(!Spriteset_Map[_0xe51b30(0x34b)+_0xe51b30(0x615)])return;}let _0x3a6449;const _0x4ceacf=VisuMZ[_0xe51b30(0x5eb)+_0xe51b30(0x8da)][_0xe51b30(0x668)][_0xe51b30(0x5d0)][_0xe51b30(0x2e9)+'d']??!![];_0x3a6449=_0x4ceacf?new Sprite_EventLabel(_0x2db6f0):new Window_EventLabel(_0x2db6f0),_0x3a6449['z']=0x2*-0x419+0x1864+-0x102a,_0x3a6449[_0xe51b30(0x6f8)]=Sprite[_0xe51b30(0x140)]++,this[_0xe51b30(0x2db)][_0xe51b30(0x796)](_0x3a6449),this[_0xe51b30(0x94b)+_0xe51b30(0x687)][_0xe51b30(0x61a)](_0x3a6449);},Spriteset_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0xa2e)+'entValidFo'+_0x3e3bd2(0x7de)+'ow']=function(_0x1f6576){const _0x4dc262=_0x3e3bd2,_0x3002fd=_0x1f6576[_0x4dc262(0x620)]();if(_0x3002fd[_0x4dc262(0x20a)][_0x4dc262(0x848)](/<LABEL:[ ](.*?)>/i))return!![];if(_0x3002fd['note'][_0x4dc262(0x848)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];for(const _0x5719ee of _0x3002fd[_0x4dc262(0x2d6)]){let _0x59f67d='';for(const _0x5c6493 of _0x5719ee[_0x4dc262(0x5f0)]){[0x16*0x73+-0x1*-0xb65+-0x14db,0x11fe*-0x1+-0xc13*-0x2+-0x490][_0x4dc262(0x1bf)](_0x5c6493[_0x4dc262(0x377)])&&(_0x59f67d+=_0x5c6493['parameters'][0x14*-0x1d6+-0xdb*0x29+-0x1*-0x47cb]);}if(_0x59f67d[_0x4dc262(0x848)](/<LABEL:[ ](.*?)>/i))return!![];if(_0x59f67d[_0x4dc262(0x848)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];}return![];},Spriteset_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x1c9)+_0x3e3bd2(0x382)]=function(_0x33d8d9){const _0x2de762=_0x3e3bd2;this[_0x2de762(0x1dc)+_0x2de762(0x2da)]=this[_0x2de762(0x1dc)+'Sprites']||[];const _0x454df8=new Sprite_Character(_0x33d8d9);this[_0x2de762(0x1dc)+_0x2de762(0x2da)][_0x2de762(0x61a)](_0x454df8),this[_0x2de762(0x2db)]['addChild'](_0x454df8),this[_0x2de762(0x71a)+_0x2de762(0x698)+'w'](_0x454df8),this[_0x2de762(0x39f)+_0x2de762(0x3a9)+_0x2de762(0x13b)](_0x33d8d9),_0x454df8[_0x2de762(0x117)]();},Spriteset_Map[_0x3e3bd2(0x294)][_0x3e3bd2(0x14d)+_0x3e3bd2(0x391)]=function(){const _0x390396=_0x3e3bd2;if(!this[_0x390396(0x94b)+_0x390396(0x687)])return;for(const _0x19e98d of this[_0x390396(0x94b)+_0x390396(0x687)]){_0x19e98d&&(_0x19e98d[_0x390396(0x445)+'ayerX']=undefined,_0x19e98d[_0x390396(0x90b)]());}},Spriteset_Map['prototype']['createEven'+_0x3e3bd2(0x437)+_0x3e3bd2(0xf8)+'up']=function(_0x17edfa,_0x228b64){const _0x104c4e=_0x3e3bd2;if(!_0x17edfa)return;_0x228b64[_0x104c4e(0x3a5)+_0x104c4e(0x3a1)]={'x':_0x17edfa['x'],'y':_0x17edfa['y']},this['createEven'+_0x104c4e(0x437)+_0x104c4e(0x380)+_0x104c4e(0x164)](_0x228b64);},Spriteset_Map[_0x3e3bd2(0x294)]['createEven'+_0x3e3bd2(0x437)+_0x3e3bd2(0x380)+_0x3e3bd2(0x164)]=function(_0xcd0135){const _0x44959b=_0x3e3bd2;if(!this[_0x44959b(0x2db)])return;const _0x56efb7=new Sprite_VisuMz_MessagePopup(_0xcd0135);this[_0x44959b(0x2db)][_0x44959b(0x796)](_0x56efb7);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x367)+_0x3e3bd2(0x550)+'erInput']=Game_Message[_0x3e3bd2(0x294)][_0x3e3bd2(0x518)+_0x3e3bd2(0x44d)],Game_Message[_0x3e3bd2(0x294)]['setNumberI'+'nput']=function(_0x4caa05,_0x4a9e0d){const _0x7fa02b=_0x3e3bd2;this['_selfTarge'+'tNumberInp'+'ut']=$gameTemp[_0x7fa02b(0x93d)+'get'](),VisuMZ[_0x7fa02b(0x5eb)+_0x7fa02b(0x8da)]['Game_Messa'+'ge_setNumb'+_0x7fa02b(0x638)][_0x7fa02b(0x3f6)](this,_0x4caa05,_0x4a9e0d);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x67b)+_0x3e3bd2(0x5cd)+'tart']=Window_NumberInput[_0x3e3bd2(0x294)][_0x3e3bd2(0x4e2)],Window_NumberInput[_0x3e3bd2(0x294)][_0x3e3bd2(0x4e2)]=function(){const _0x1eeee7=_0x3e3bd2;$gameTemp[_0x1eeee7(0x951)+_0x1eeee7(0xfc)]($gameMessage[_0x1eeee7(0x726)+_0x1eeee7(0x62a)+'ut']),VisuMZ[_0x1eeee7(0x5eb)+'Core'][_0x1eeee7(0x67b)+_0x1eeee7(0x5cd)+_0x1eeee7(0x2c1)]['call'](this),$gameTemp[_0x1eeee7(0x153)+'arget']();},VisuMZ['EventsMove'+_0x3e3bd2(0x8da)][_0x3e3bd2(0x67b)+'berInput_p'+_0x3e3bd2(0x844)]=Window_NumberInput[_0x3e3bd2(0x294)][_0x3e3bd2(0x1ba)],Window_NumberInput[_0x3e3bd2(0x294)]['processOk']=function(){const _0x18d985=_0x3e3bd2;$gameTemp[_0x18d985(0x951)+_0x18d985(0xfc)]($gameMessage[_0x18d985(0x726)+'tNumberInp'+'ut']),VisuMZ[_0x18d985(0x5eb)+'Core'][_0x18d985(0x67b)+_0x18d985(0x1a0)+'rocessOk'][_0x18d985(0x3f6)](this),$gameTemp[_0x18d985(0x153)+_0x18d985(0x5d3)](),$gameMessage[_0x18d985(0x726)+_0x18d985(0x62a)+'ut']=undefined;},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x367)+_0x3e3bd2(0x4ce)+_0x3e3bd2(0x324)]=Game_Message[_0x3e3bd2(0x294)][_0x3e3bd2(0x762)+_0x3e3bd2(0x7df)],Game_Message[_0x3e3bd2(0x294)][_0x3e3bd2(0x762)+'ice']=function(_0x54129c,_0x5d9a76){const _0x411ca5=_0x3e3bd2;this[_0x411ca5(0x726)+_0x411ca5(0x4c0)+'e']=$gameTemp[_0x411ca5(0x93d)+'get'](),VisuMZ[_0x411ca5(0x5eb)+_0x411ca5(0x8da)][_0x411ca5(0x367)+_0x411ca5(0x4ce)+_0x411ca5(0x324)][_0x411ca5(0x3f6)](this,_0x54129c,_0x5d9a76);},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0xf3)+_0x3e3bd2(0x88a)+'k']=Window_EventItem[_0x3e3bd2(0x294)]['onOk'],Window_EventItem['prototype'][_0x3e3bd2(0x6c8)]=function(){const _0x21bc60=_0x3e3bd2;$gameTemp[_0x21bc60(0x951)+_0x21bc60(0xfc)]($gameMessage['_selfTarge'+_0x21bc60(0x4c0)+'e']),VisuMZ['EventsMove'+_0x21bc60(0x8da)][_0x21bc60(0xf3)+_0x21bc60(0x88a)+'k']['call'](this),$gameTemp[_0x21bc60(0x153)+_0x21bc60(0x5d3)](),$gameMessage[_0x21bc60(0x726)+_0x21bc60(0x4c0)+'e']=undefined;},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0xf3)+_0x3e3bd2(0x4fb)+_0x3e3bd2(0x18e)]=Window_EventItem[_0x3e3bd2(0x294)]['onCancel'],Window_EventItem[_0x3e3bd2(0x294)]['onCancel']=function(){const _0x3ee5f3=_0x3e3bd2;$gameTemp[_0x3ee5f3(0x951)+_0x3ee5f3(0xfc)]($gameMessage[_0x3ee5f3(0x726)+_0x3ee5f3(0x4c0)+'e']),VisuMZ[_0x3ee5f3(0x5eb)+_0x3ee5f3(0x8da)][_0x3ee5f3(0xf3)+'ntItem_onC'+_0x3ee5f3(0x18e)]['call'](this),$gameTemp[_0x3ee5f3(0x153)+_0x3ee5f3(0x5d3)](),$gameMessage['_selfTarge'+_0x3ee5f3(0x4c0)+'e']=undefined;},VisuMZ[_0x3e3bd2(0x5eb)+'Core']['Window_Mes'+_0x3e3bd2(0xa03)+'Message']=Window_Message[_0x3e3bd2(0x294)][_0x3e3bd2(0x6b9)+'ge'],Window_Message[_0x3e3bd2(0x294)][_0x3e3bd2(0x6b9)+'ge']=function(){const _0x5eccd5=_0x3e3bd2;$gameMessage[_0x5eccd5(0x951)+_0x5eccd5(0x5e1)](),VisuMZ[_0x5eccd5(0x5eb)+_0x5eccd5(0x8da)]['Window_Mes'+'sage_start'+_0x5eccd5(0x689)]['call'](this),$gameTemp['clearSelfT'+'arget']();},VisuMZ[_0x3e3bd2(0x5eb)+_0x3e3bd2(0x8da)][_0x3e3bd2(0x2b8)+_0x3e3bd2(0x853)+_0x3e3bd2(0xde)]=Window_ScrollText[_0x3e3bd2(0x294)][_0x3e3bd2(0x6b9)+'ge'],Window_ScrollText[_0x3e3bd2(0x294)]['startMessa'+'ge']=function(){const _0x1b8ece=_0x3e3bd2;$gameMessage[_0x1b8ece(0x951)+'lfEvent'](),VisuMZ[_0x1b8ece(0x5eb)+'Core'][_0x1b8ece(0x2b8)+_0x1b8ece(0x853)+_0x1b8ece(0xde)]['call'](this),$gameTemp['clearSelfT'+_0x1b8ece(0x5d3)]();};function Window_EventLabel(){const _0x153cb6=_0x3e3bd2;this[_0x153cb6(0x386)](...arguments);}Window_EventLabel[_0x3e3bd2(0x294)]=Object[_0x3e3bd2(0x671)](Window_Base[_0x3e3bd2(0x294)]),Window_EventLabel[_0x3e3bd2(0x294)]['constructo'+'r']=Window_EventLabel,Window_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x386)]=function(_0x3f26a8){const _0x511552=_0x3e3bd2,_0x11c0a2={'qiLnl':function(_0x1c8739,_0x2f7a6a){return _0x1c8739/_0x2f7a6a;}};this[_0x511552(0x93a)]=_0x3f26a8;const _0x33a23d=new Rectangle(0x1087*0x2+0x4bd*0x3+-0x2f45,-0x1*0x2153+0x523+0xb0*0x29,_0x11c0a2[_0x511552(0x61e)](Graphics[_0x511552(0x429)],-0xef7+-0x75d+0x1658),this['fittingHei'+_0x511552(0x86c)](0x2250+-0x192a+-0x925*0x1));this['initMember'+'s'](),Window_Base[_0x511552(0x294)][_0x511552(0x386)][_0x511552(0x3f6)](this,_0x33a23d),this[_0x511552(0x523)+'acity']=-0xc92+-0x1052*0x1+0x1ce4,this[_0x511552(0x7e3)+_0x511552(0x508)](-0x2*-0x6bc+-0x797+-0xa7*0x9),this['_text']='';},Window_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x9b6)+'s']=function(){const _0x2bd830=_0x3e3bd2,_0x4a7ce8={'nvHDC':_0x2bd830(0x387)+'|3|8|10|6|'+_0x2bd830(0x3f0)},_0x58cbf3=_0x4a7ce8['nvHDC'][_0x2bd830(0x424)]('|');let _0x3a1e78=-0x2*-0x633+-0xb*-0x35f+-0x1*0x317b;while(!![]){switch(_0x58cbf3[_0x3a1e78++]){case'0':this[_0x2bd830(0x445)+_0x2bd830(0x4c4)]=$gamePlayer['y'];continue;case'1':this['_screenZoo'+_0x2bd830(0x721)]=$gameScreen['zoomScale']();continue;case'2':this[_0x2bd830(0x298)+_0x2bd830(0x8d5)]=this[_0x2bd830(0x93a)]['y'];continue;case'3':this[_0x2bd830(0x6d4)+_0x2bd830(0x78a)]=this[_0x2bd830(0x93a)][_0x2bd830(0x94b)+'ow'][_0x2bd830(0x1d2)];continue;case'4':this['_visiblePl'+'ayerX']=$gamePlayer['x'];continue;case'5':this['_eventScre'+_0x2bd830(0x3a2)]=this['_event']['screenX']();continue;case'6':this[_0x2bd830(0x37f)+_0x2bd830(0x12a)]=$gameSystem['eventLabel'+_0x2bd830(0x906)]();continue;case'7':this[_0x2bd830(0x6d4)+_0x2bd830(0x97f)]=this[_0x2bd830(0x93a)][_0x2bd830(0x94b)+'ow'][_0x2bd830(0x612)];continue;case'8':this[_0x2bd830(0x632)+_0x2bd830(0x57e)]=this['_event'][_0x2bd830(0x89c)];continue;case'9':this[_0x2bd830(0x72b)+'ed']=![];continue;case'10':this['_cacheVisi'+'bility']=this[_0x2bd830(0x713)+_0x2bd830(0x75d)]();continue;case'11':this['_visibleEv'+'entX']=this[_0x2bd830(0x93a)]['x'];continue;case'12':this[_0x2bd830(0x35a)+_0x2bd830(0x5f9)]=this[_0x2bd830(0x93a)]['screenY']();continue;}break;}},Window_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x117)]=function(){const _0x1a8071=_0x3e3bd2,_0x311c97={'OzpRr':_0x1a8071(0x9e7)+'5'},_0x250df8=_0x311c97[_0x1a8071(0x956)][_0x1a8071(0x424)]('|');let _0x6b7d40=0x1ef7*0x1+0x392*0x7+-0x37f5;while(!![]){switch(_0x250df8[_0x6b7d40++]){case'0':this[_0x1a8071(0x4bc)+'e']();continue;case'1':this['updateText']();continue;case'2':Window_Base[_0x1a8071(0x294)][_0x1a8071(0x117)][_0x1a8071(0x3f6)](this);continue;case'3':this[_0x1a8071(0x393)+_0x1a8071(0x6f3)]();continue;case'4':if(!this[_0x1a8071(0x3bc)+'e']())return;continue;case'5':this['updateOpac'+_0x1a8071(0x88c)]();continue;}break;}},Window_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x3bc)+'e']=function(){const _0x5df8ce=_0x3e3bd2,_0x31fa44={'iMhae':'3|5|2|15|1'+_0x5df8ce(0x3fb)+_0x5df8ce(0x8a1)+_0x5df8ce(0x3ec)+_0x5df8ce(0x1bd),'WDKBc':function(_0x5403b0,_0x27f3e5){return _0x5403b0!==_0x27f3e5;},'Fxvgn':function(_0x528918,_0x3f595d){return _0x528918!==_0x3f595d;},'YMzDw':function(_0x1fda12,_0x5b1aa5){return _0x1fda12<_0x5b1aa5;},'rXBHV':function(_0x571909,_0x59832c){return _0x571909!==_0x59832c;},'iSNrT':function(_0x1659e9,_0x17f5ff){return _0x1659e9!==_0x17f5ff;},'lUfFK':function(_0x420b16,_0x113010){return _0x420b16!==_0x113010;},'aZdDq':function(_0x11c0f2,_0x23fdb0){return _0x11c0f2!==_0x23fdb0;},'poNVN':function(_0x5db269,_0x3154ae){return _0x5db269!==_0x3154ae;},'UQKIa':function(_0x90dc0e,_0x55f060){return _0x90dc0e===_0x55f060;},'dBUkF':function(_0x37a31c,_0x25fed7){return _0x37a31c!==_0x25fed7;},'TqVMV':function(_0x1fcf87,_0x32e953){return _0x1fcf87>_0x32e953;}},_0x2e771a=_0x31fa44[_0x5df8ce(0x944)][_0x5df8ce(0x424)]('|');let _0x22b90c=-0x7*-0x1dd+-0x73a+0x1*-0x5d1;while(!![]){switch(_0x2e771a[_0x22b90c++]){case'0':return![];case'1':if(_0x31fa44[_0x5df8ce(0x9ac)](this['_visibleEv'+_0x5df8ce(0x8d5)],this[_0x5df8ce(0x93a)]['y']))return!![];continue;case'2':if(_0x31fa44['Fxvgn'](this[_0x5df8ce(0x632)+'Index'],this[_0x5df8ce(0x93a)][_0x5df8ce(0x89c)]))return!![];continue;case'3':if(!this[_0x5df8ce(0x93a)])return![];continue;case'4':if(this[_0x5df8ce(0xfa)+_0x5df8ce(0x32e)]&&_0x31fa44[_0x5df8ce(0x979)](this[_0x5df8ce(0x523)+_0x5df8ce(0x342)],0xe63+0x25e9+-0x334d))return!![];continue;case'5':if(!this['_event'][_0x5df8ce(0x94b)+'ow'])return![];continue;case'6':if(_0x31fa44[_0x5df8ce(0x346)](this[_0x5df8ce(0x6d4)+_0x5df8ce(0x78a)],this[_0x5df8ce(0x93a)]['_labelWind'+'ow']['offsetY']))return!![];continue;case'7':if(_0x31fa44[_0x5df8ce(0x5dd)](this[_0x5df8ce(0x445)+_0x5df8ce(0x4c4)],$gamePlayer['y']))return!![];continue;case'8':if(_0x31fa44['WDKBc'](this['_cacheSyst'+'emVisible'],$gameSystem[_0x5df8ce(0x353)+_0x5df8ce(0x906)]()))return!![];continue;case'9':if(_0x31fa44[_0x5df8ce(0x55e)](this[_0x5df8ce(0x3b8)+_0x5df8ce(0x721)],$gameScreen[_0x5df8ce(0x725)]()))return!![];continue;case'10':if(_0x31fa44[_0x5df8ce(0x4df)](this[_0x5df8ce(0x445)+_0x5df8ce(0x6c2)],$gamePlayer['x']))return!![];continue;case'11':if(_0x31fa44[_0x5df8ce(0x5b1)](this[_0x5df8ce(0x35a)+_0x5df8ce(0x5f9)],this[_0x5df8ce(0x93a)][_0x5df8ce(0xa1e)]()))return!![];continue;case'12':if(_0x31fa44[_0x5df8ce(0x65c)](this[_0x5df8ce(0x298)+_0x5df8ce(0x55c)],this[_0x5df8ce(0x93a)]['x']))return!![];continue;case'13':if(_0x31fa44[_0x5df8ce(0x95e)](this[_0x5df8ce(0x93a)]['_labelWind'+'ow'][_0x5df8ce(0x657)],''))return![];continue;case'14':if(_0x31fa44['dBUkF'](this[_0x5df8ce(0x35a)+_0x5df8ce(0x3a2)],this[_0x5df8ce(0x93a)][_0x5df8ce(0x2e2)]()))return!![];continue;case'15':if(this[_0x5df8ce(0x93a)][_0x5df8ce(0x116)]&&!this[_0x5df8ce(0x72b)+'ed'])return!![];continue;case'16':if(_0x31fa44[_0x5df8ce(0x49c)](this[_0x5df8ce(0x6d4)+_0x5df8ce(0x97f)],this['_event'][_0x5df8ce(0x94b)+'ow'][_0x5df8ce(0x612)]))return!![];continue;case'17':if(!this[_0x5df8ce(0xfa)+_0x5df8ce(0x32e)]&&_0x31fa44[_0x5df8ce(0x48e)](this['contentsOp'+_0x5df8ce(0x342)],0x2e*0x9d+-0x1776+-0x4c0*0x1))return!![];continue;case'18':if(_0x31fa44[_0x5df8ce(0x48e)](SceneManager[_0x5df8ce(0x870)]['_encounter'+_0x5df8ce(0x5bb)+'tion'],0x22d5+-0xdf2+-0x1*0x14e3))return!![];continue;}break;}},Window_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x8ae)]=function(){const _0x2c1264=_0x3e3bd2,_0x1935b4={'pTByV':function(_0x2c2fef,_0x36c7a6){return _0x2c2fef!==_0x36c7a6;}};_0x1935b4['pTByV'](this[_0x2c1264(0x93a)][_0x2c1264(0x366)+_0x2c1264(0x412)](),this['_text'])&&(this[_0x2c1264(0x3ce)]=this[_0x2c1264(0x93a)][_0x2c1264(0x366)+_0x2c1264(0x412)](),this[_0x2c1264(0x90b)]());},Window_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x4bc)+'e']=function(){const _0x2eac36=_0x3e3bd2,_0x58aa62={'QnJUZ':function(_0x3fb6d0,_0x2d5c6d){return _0x3fb6d0/_0x2d5c6d;}};this[_0x2eac36(0x8ed)]['x']=_0x58aa62[_0x2eac36(0x81d)](0xb*-0x83+0x17df+0x17*-0xcb,$gameScreen['zoomScale']()),this['scale']['y']=_0x58aa62[_0x2eac36(0x81d)](-0x1957+0x8de+0x107a,$gameScreen['zoomScale']()),this[_0x2eac36(0x3b8)+_0x2eac36(0x721)]=$gameScreen[_0x2eac36(0x725)]();},Window_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x393)+_0x3e3bd2(0x6f3)]=function(){const _0x53b243=_0x3e3bd2,_0x4b7bbc={'sjqCT':function(_0x3d1d8b,_0x2c1730){return _0x3d1d8b-_0x2c1730;},'dLvEk':function(_0x46e14b,_0x5df418){return _0x46e14b/_0x5df418;},'ZsVkM':function(_0x234347,_0xf5007){return _0x234347*_0xf5007;},'rjIzd':function(_0x4cb087,_0x426ac0){return _0x4cb087*_0x426ac0;}};if(!SceneManager[_0x53b243(0x870)])return;if(!SceneManager[_0x53b243(0x870)][_0x53b243(0x2c3)])return;const _0x53c0cb=SceneManager[_0x53b243(0x870)]['_spriteset']['findTarget'+_0x53b243(0x1c6)](this[_0x53b243(0x93a)]);if(!_0x53c0cb)return;this['x']=Math[_0x53b243(0x1f4)](_0x4b7bbc[_0x53b243(0x880)](this[_0x53b243(0x93a)][_0x53b243(0x2e2)](),Math[_0x53b243(0x60f)](_0x4b7bbc['dLvEk'](_0x4b7bbc[_0x53b243(0x3b9)](this['width'],this[_0x53b243(0x8ed)]['x']),0xb*-0x221+0x2*0x8bd+0x5f3)))),this['x']+=this['_event'][_0x53b243(0x94b)+'ow'][_0x53b243(0x612)],this['y']=_0x4b7bbc['sjqCT'](this[_0x53b243(0x93a)][_0x53b243(0xa1e)](),_0x53c0cb[_0x53b243(0x8e6)]),this['y']+=Math[_0x53b243(0x1f4)](_0x4b7bbc[_0x53b243(0x3b9)]($gameSystem[_0x53b243(0x4a7)+_0x53b243(0x1f0)](),-0x2143+-0x1ed6+0x4019+0.5)),this['y']-=Math['round'](_0x4b7bbc[_0x53b243(0xa29)](this[_0x53b243(0x8e6)],this['scale']['y'])),this['y']+=this[_0x53b243(0x93a)]['_labelWind'+'ow']['offsetY'],this[_0x53b243(0x72b)+'ed']=this[_0x53b243(0x93a)][_0x53b243(0x116)],this[_0x53b243(0x35a)+_0x53b243(0x3a2)]=this['_event'][_0x53b243(0x2e2)](),this[_0x53b243(0x35a)+'enY']=this[_0x53b243(0x93a)][_0x53b243(0xa1e)](),this['_eventLabe'+_0x53b243(0x97f)]=this[_0x53b243(0x93a)][_0x53b243(0x94b)+'ow'][_0x53b243(0x612)],this['_eventLabe'+_0x53b243(0x78a)]=this[_0x53b243(0x93a)][_0x53b243(0x94b)+'ow']['offsetY'],this[_0x53b243(0x632)+_0x53b243(0x57e)]=this[_0x53b243(0x93a)][_0x53b243(0x89c)],this[_0x53b243(0x72b)+'ed']&&(this[_0x53b243(0x523)+_0x53b243(0x342)]=-0xdb5*0x2+0x1445+-0x725*-0x1);},Window_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x5f5)+_0x3e3bd2(0x88c)]=function(){const _0x1219fc=_0x3e3bd2,_0x2dd0c7={'xofqb':function(_0x3cd61c,_0x44f2bf){return _0x3cd61c>_0x44f2bf;}};if(this[_0x1219fc(0x713)+_0x1219fc(0x75d)]())this[_0x1219fc(0x523)+_0x1219fc(0x342)]+=this[_0x1219fc(0x35c)+'ed']();else _0x2dd0c7[_0x1219fc(0x958)](SceneManager['_scene'][_0x1219fc(0x128)+_0x1219fc(0x5bb)+'tion'],-0x119b*0x2+0x1bdf+0x757)?this[_0x1219fc(0x523)+'acity']=0x1d7d*0x1+0x5*-0x158+-0x16c5:this[_0x1219fc(0x523)+_0x1219fc(0x342)]-=this['opacitySpe'+'ed']();},Window_EventLabel['prototype'][_0x3e3bd2(0x713)+_0x3e3bd2(0x75d)]=function(){const _0x56d7c7=_0x3e3bd2,_0x437a0c={'JjVAV':function(_0x283e33,_0x49b7a1){return _0x283e33>_0x49b7a1;},'fBLTP':function(_0x2d315c,_0x2bf5c9){return _0x2d315c===_0x2bf5c9;},'SpLtZ':function(_0x549b51,_0x2cf300){return _0x549b51===_0x2cf300;},'tlNax':function(_0x32d379,_0x2f1c5d){return _0x32d379===_0x2f1c5d;},'emWtT':function(_0x23273d,_0x260263){return _0x23273d===_0x260263;},'qrIcD':function(_0x267b78,_0x1683e4){return _0x267b78>_0x1683e4;}};if(!$gameSystem[_0x56d7c7(0x353)+'sVisible']())return![];if(this[_0x56d7c7(0x93a)]?.[_0x56d7c7(0x116)])return![];if(_0x437a0c[_0x56d7c7(0x521)](SceneManager[_0x56d7c7(0x870)][_0x56d7c7(0x128)+_0x56d7c7(0x5bb)+_0x56d7c7(0x6f3)],-0x7b5*0x1+0xe9*0xd+-0x420))return![];const _0x449743=$gamePlayer['x'],_0x5a0472=$gamePlayer['y'],_0x5abea3=this[_0x56d7c7(0x93a)]['x'],_0x11a3b8=this[_0x56d7c7(0x93a)]['y'];if(_0x437a0c['fBLTP'](this[_0x56d7c7(0x445)+'ayerX'],_0x449743)&&_0x437a0c['SpLtZ'](this[_0x56d7c7(0x445)+'ayerY'],_0x5a0472)&&_0x437a0c['tlNax'](this['_visibleEv'+'entX'],_0x5abea3)&&_0x437a0c[_0x56d7c7(0xa15)](this['_visibleEv'+_0x56d7c7(0x8d5)],_0x11a3b8))return this[_0x56d7c7(0xfa)+_0x56d7c7(0x32e)];this[_0x56d7c7(0x445)+_0x56d7c7(0x6c2)]=$gamePlayer['x'],this['_visiblePl'+'ayerY']=$gamePlayer['y'],this[_0x56d7c7(0x298)+_0x56d7c7(0x55c)]=this['_event']['x'],this['_visibleEv'+_0x56d7c7(0x8d5)]=this[_0x56d7c7(0x93a)]['y'];if(_0x437a0c[_0x56d7c7(0xf6)]($gameMap['absDistanc'+'e'](_0x449743,_0x5a0472,_0x5abea3,_0x11a3b8),this[_0x56d7c7(0x93a)][_0x56d7c7(0x366)+_0x56d7c7(0x268)]()))return this[_0x56d7c7(0xfa)+_0x56d7c7(0x32e)]=![],![];return this[_0x56d7c7(0xfa)+'bility']=!![],!![];},Window_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x35c)+'ed']=function(){const _0x556e8d=_0x3e3bd2;return VisuMZ['EventsMove'+_0x556e8d(0x8da)][_0x556e8d(0x668)][_0x556e8d(0x5d0)][_0x556e8d(0x291)+'ed'];},Window_EventLabel['prototype']['resizeWind'+'ow']=function(){const _0xc1d6a8=_0x3e3bd2,_0x48f0aa={'klnet':function(_0x344e69,_0x59e08f){return _0x344e69+_0x59e08f;},'ySYou':function(_0xcabba2,_0x1d6c87){return _0xcabba2*_0x1d6c87;},'fWinx':function(_0x524802,_0x20b023){return _0x524802+_0x20b023;}},_0x183fce=this['textSizeEx'](this['_text']);this[_0xc1d6a8(0x5df)]=_0x48f0aa[_0xc1d6a8(0x855)](_0x183fce['width'],_0x48f0aa['ySYou'](_0x48f0aa[_0xc1d6a8(0x855)]($gameSystem[_0xc1d6a8(0x4a7)+_0xc1d6a8(0x1f0)](),this[_0xc1d6a8(0x344)+'g']()),0x7*0x233+-0x21cb+0x1268)),this[_0xc1d6a8(0x8e6)]=_0x48f0aa[_0xc1d6a8(0x761)](Math[_0xc1d6a8(0x51d)](this['lineHeight'](),_0x183fce[_0xc1d6a8(0x8e6)]),_0x48f0aa[_0xc1d6a8(0x107)]($gameSystem['windowPadd'+'ing'](),-0x10d*0x19+0xcfe*0x1+0xd49)),this[_0xc1d6a8(0x5b5)+_0xc1d6a8(0x876)]();},Window_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x9c9)]=function(){const _0x151cd1=_0x3e3bd2;return VisuMZ['EventsMove'+'Core'][_0x151cd1(0x668)][_0x151cd1(0x5d0)]['LineHeight'];},Window_EventLabel['prototype'][_0x3e3bd2(0x487)+_0x3e3bd2(0x21c)]=function(){const _0x150cb7=_0x3e3bd2;Window_Base[_0x150cb7(0x294)]['resetFontS'+'ettings'][_0x150cb7(0x3f6)](this),this[_0x150cb7(0x9ed)][_0x150cb7(0x2b7)]=this[_0x150cb7(0x33a)+_0x150cb7(0x2a7)]();},Window_EventLabel['prototype'][_0x3e3bd2(0x33a)+_0x3e3bd2(0x2a7)]=function(){const _0x1ac73d=_0x3e3bd2;return VisuMZ['EventsMove'+_0x1ac73d(0x8da)][_0x1ac73d(0x668)][_0x1ac73d(0x5d0)][_0x1ac73d(0x482)];},Window_EventLabel['prototype'][_0x3e3bd2(0x90b)]=function(){const _0x5df1b5=_0x3e3bd2,_0x2a89e5={'umjRA':function(_0x42a8cc,_0x58effc){return _0x42a8cc/_0x58effc;},'ZaFqT':function(_0x5d6fd0,_0x2b7451){return _0x5d6fd0-_0x2b7451;}};this['resizeWind'+'ow'](),this[_0x5df1b5(0x9ed)][_0x5df1b5(0x217)]();const _0x6e43c7=this[_0x5df1b5(0x3ce)]['split'](/[\r\n]+/);let _0x5e779f=0x2*-0x641+-0x111a*0x2+0x2eb6;for(const _0x256409 of _0x6e43c7){const _0x6d4acb=this['textSizeEx'](_0x256409),_0x6f9545=Math[_0x5df1b5(0x60f)](_0x2a89e5['umjRA'](_0x2a89e5['ZaFqT'](this[_0x5df1b5(0x1fd)],_0x6d4acb[_0x5df1b5(0x5df)]),0xf0c+-0x818+-0x6f2));this[_0x5df1b5(0x300)](_0x256409,_0x6f9545,_0x5e779f),_0x5e779f+=_0x6d4acb['height'];}},Window_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x575)+_0x3e3bd2(0x257)]=function(_0x354cd1,_0x2e6dd7){const _0x54ac78=_0x3e3bd2,_0x39d22c={'OYHaa':function(_0x1d3698,_0x3e1f3e){return _0x1d3698+_0x3e1f3e;}};_0x2e6dd7[_0x54ac78(0x5fa)]&&this[_0x54ac78(0x5ee)](_0x354cd1,_0x39d22c[_0x54ac78(0x7c0)](_0x2e6dd7['x'],-0x2379+-0x10+-0xbd9*-0x3),_0x2e6dd7['y']),_0x2e6dd7['x']+=_0x39d22c['OYHaa'](Math['min'](this[_0x54ac78(0x21a)](),ImageManager[_0x54ac78(0x259)]),0x683+0x1f97+-0x3*0xcb2);},Window_EventLabel[_0x3e3bd2(0x294)][_0x3e3bd2(0x5ee)]=function(_0xdf989b,_0x3a6c77,_0x63f285){const _0x138820=_0x3e3bd2,_0x161b81={'cIFUm':_0x138820(0x17e),'IXkaO':function(_0x368c25,_0xcddc7f){return _0x368c25*_0xcddc7f;},'xVgrN':function(_0x4f9346,_0x1b6554){return _0x4f9346%_0x1b6554;},'JgSXY':function(_0x429ab1,_0x9c2fde){return _0x429ab1*_0x9c2fde;},'FNzzS':function(_0x256234,_0x41fdf0){return _0x256234/_0x41fdf0;}},_0x37323f=ImageManager['loadSystem'](_0x161b81['cIFUm']),_0x46fcd4=ImageManager[_0x138820(0x259)],_0x4e5bbf=ImageManager[_0x138820(0x2c9)],_0x47d313=_0x161b81[_0x138820(0x53b)](_0x161b81[_0x138820(0x3da)](_0xdf989b,-0x1c4b+-0x1d20+-0x1329*-0x3),_0x46fcd4),_0x5216d3=_0x161b81[_0x138820(0x243)](Math['floor'](_0x161b81['FNzzS'](_0xdf989b,0x623*0x1+0x32*0x95+-0x232d)),_0x4e5bbf),_0x90c2b=Math[_0x138820(0xf1)](this['iconSize']()),_0x3a8e42=Math[_0x138820(0xf1)](this['iconSize']());this[_0x138820(0x9ed)][_0x138820(0x3e4)](_0x37323f,_0x47d313,_0x5216d3,_0x46fcd4,_0x4e5bbf,_0x3a6c77,_0x63f285,_0x90c2b,_0x3a8e42);},Window_EventLabel['prototype'][_0x3e3bd2(0x21a)]=function(){const _0x3d8d0e=_0x3e3bd2;return VisuMZ[_0x3d8d0e(0x5eb)+_0x3d8d0e(0x8da)][_0x3d8d0e(0x668)][_0x3d8d0e(0x5d0)]['IconSize'];};