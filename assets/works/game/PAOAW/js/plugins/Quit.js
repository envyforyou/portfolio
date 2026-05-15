/*:
 * @target MZ
 * @author Dhenias
 * @plugindesc Quit Button
 * @help Shows Quit Button when activated
 */

(() => {
    const _Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        _Scene_Title_createCommandWindow.call(this);
        this._commandWindow.setHandler('quit', this.commandQuit.bind(this));
    };

    const _Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
    Window_TitleCommand.prototype.makeCommandList = function() {
        _Window_TitleCommand_makeCommandList.call(this);
        this.addCommand('Quit', 'quit');
    };

    Scene_Title.prototype.commandQuit = function() {
        SceneManager.push(Scene_Quit);
    };

    function Scene_Quit() {
        this.initialize(...arguments);
    }

    Scene_Quit.prototype = Object.create(Scene_Base.prototype);
    Scene_Quit.prototype.constructor = Scene_Quit;

    Scene_Quit.prototype.initialize = function() {
        Scene_Base.prototype.initialize.call(this);
    };

    Scene_Title.prototype.commandQuit = function() {
        window.close();
    };

})();