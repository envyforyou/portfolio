/*:
 * @target MZ
 * @author Dhenias
 * @plugindesc Adds a controls screen with an image to the title menu.
 * @help This plugin adds a button on the title screen that displays a controls image when clicked.
 */

(() => {
    // Extend Scene_Title to include a new button
    const _Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        _Scene_Title_createCommandWindow.call(this);
        this._commandWindow.setHandler('controls', this.commandControls.bind(this));
    };

    const _Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
    Window_TitleCommand.prototype.makeCommandList = function() {
        _Window_TitleCommand_makeCommandList.call(this);
        this.addCommand('Controls', 'controls');
    };

    Scene_Title.prototype.commandControls = function() {
        SceneManager.push(Scene_Controls);
    };

    function Scene_Controls() {
        this.initialize(...arguments);
    }

    Scene_Controls.prototype = Object.create(Scene_Base.prototype);
    Scene_Controls.prototype.constructor = Scene_Controls;

    Scene_Controls.prototype.initialize = function() {
        Scene_Base.prototype.initialize.call(this);
    };

    Scene_Controls.prototype.create = function() {
        Scene_Base.prototype.create.call(this);
        this.createBackground();
        this.createControlsImage();
    };

    Scene_Controls.prototype.createBackground = function() {
        this._backgroundSprite = new Sprite();
        this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
        this.addChild(this._backgroundSprite);
    };

    Scene_Controls.prototype.createControlsImage = function() {
        const bitmap = ImageManager.loadPicture('TutorialPage'); // Change 'TutorialPage' to the name of your image file without extension
        bitmap.addLoadListener(() => {
            this._controlsSprite = new Sprite(bitmap);
            this._controlsSprite.x = (Graphics.width - bitmap.width) / 2; // Center horizontally
            this._controlsSprite.y = (Graphics.height - bitmap.height) / 2; // Center vertically
            this.addChild(this._controlsSprite);
        });
    };

    Scene_Controls.prototype.commandBackToTitle = function() {
        SceneManager.goto(Scene_Title);
    };
})();