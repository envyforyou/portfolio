//=============================================================================
// Plugin Name: QuestLog
// Author: Winthorp Darkrites (Winter Dream Games Creator)
// Description: Create a questlog to manage your quests
// Use: Feel free to use for private and commercial projects. Feel free to edit. Please give credits.
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Custom Quest Plugin for RPG Maker MZ
 * @version 1.5
 * @author Winthorp Darkrites
 * @url https://ko-fi.com/winterdream
 *
 * @param linebreak1
 * @text ===Main options===
 * @desc The main window options
 * @default ================
 *
 * @param Title
 * @text Title
 * @desc Set the title of the QuestLog
 * @default QuestLog
 *
 * @param fontsize
 * @text Title Font Size
 * @type number
 * @desc The size of the font for the Scene Title
 * @default 40
 * @min 1
 *
 * @param dynamicDescSize
 * @text Dynamic Description Font Size
 * @type boolean
 * @desc Use dynamic font size for description? The plugin will choose a fitting value from 100 to 10 font size
 * @default false
 * @on Activete
 * @off Deactivate
 *
 * @param paddingValue
 * @text Dynamic Size padding
 * @type number
 * @desc The padding from the left/right border for Auto Sizer
 * @default 50
 *
 * @param descriptionSize
 * @text Quest Description Font Size
 * @type number
 * @desc The size of the font for the description of the Quest (If not Dynamic)
 * @default 20
 * @min 1
 *
 * @param infoalign
 * @text Quest Info Alignment
 * @desc Select how to align the informations in the quest description
 * @type select
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @default center
 *
 * @param listSize
 * @text Font Size in the list
 * @type number
 * @desc The size of the font of the Quest's name in the quests list
 * @default 20
 * @min 1
 *
 * @param listAlign
 * @text Quest List Align
 * @desc Select how to align the quest in the QuestLog list
 * @type select
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @default center
 *
 * @param linebreak2
 * @text ===Text Options===
 * @desc Select your terms
 * @default ================
 *
 * @param giverprefix
 * @text Giver Prefix
 * @desc How the "From:" prefix is shown in the Quest Giver
 * @default From:
 *
 * @param areaprefix
 * @text Area Prefix
 * @desc How the "Area:" prefix is shown in the Quest Area
 * @default Area:
 *
 * @param statusname
 * @text Status Name
 * @desc How the "Status:" is shown for Quest Completion
 * @default Status:
 *
 * @param questcompleted
 * @text Quest Completed
 * @desc Word to show if quest is completed
 * @default Completed
 *
 * @param questongoing
 * @text Quest Ongoing
 * @desc Word to show if quest is ongoing
 * @default Ongoing
 *
 * @param questfailed
 * @text Quest Failed
 * @desc Word to show if quest is failed
 * @default Failed
 *
 * @param linebreak3
 * @text ===Command Button===
 * @desc Set the preferences for the menu command
 * @default ================
 *
 * @param menucommand
 * @type boolean
 * @text Menu Command
 * @desc Add the Quest command to the game menu
 * @default False
 * @on Show
 * @off Hide
 *
 * @param commandname
 * @text Command Name
 * @desc Set the name of the command (if activated)
 * @default QuestLog
 *
 * @param linebreak4
 * @text ===Graphic Settings===
 * @desc Set the graphic preferences
 * @default ================
 *
 * @param titleFlag
 * @text Show QuestLog Title?
 * @type boolean
 * @desc Choose if you want to show the QuestLog title
 * @default true
 * @on Show
 * @off Hide
 *
 * @param layoutAlign
 * @text QuestLog Layout
 * @desc Select the QuestLog Layout
 * @type select
 * @option Quest List on left, Info on right
 * @value layout1
 * @option Quest List on right, Info on left
 * @value layout2
 * @default layout1
 *
 * @param layoutSize
 * @text Layout Size
 * @desc Select the QuestLog Layout size
 * @type select
 * @option 100% of the Graphic Box (classic)
 * @value size1
 * @option 90% of the Graphic Box (RMMZ style)
 * @value size2
 * @default size1
 *
 * @param touchCancel
 * @text Show Touch Cancel Button?
 * @type boolean
 * @desc Choose if you want to show the touch cancel button (make sure the player has non touch commands if you don't)
 * @default true
 * @on Show
 * @off Hide
 *
 * @param skinSettings
 * @text Custom Skin
 * @type struct<skinSet>
 * @desc If you want to use a custom skin use this settings
 * @default {"skinFlag":"false","skinName":"","redT":"0","greenT":"0","blueT":"0"}
 *
 * @command line1
 * @text --- Quest Management ---
 * @desc Series of commands to manage your quests 
 *
 * @command CreateQuest
 * @text Create Quest
 * @desc Create a new quest.
 * @arg id
 * @type number
 * @text ID
 * @desc The ID of the quest. (Minimum 1)
 * @min 1
 *
 * @arg icon
 * @type number
 * @text Icon
 * @desc The icon index to display for the quest.
 *
 * @arg name
 * @type string
 * @text Name
 * @desc The name of the quest.
 *
 * @arg longTitle
 * @type string
 * @text Long Title
 * @desc A longer title for the description page, leave blank to use the Quest Name.
 *
 * @arg index
 * @type number
 * @text Index
 * @desc The indexing number for the quest in the list.
 *
 * @arg giver
 * @type string
 * @text Giver
 * @desc Information on the quest giver.
 *
 * @arg area
 * @type string
 * @text Area
 * @desc Information on the location of the quest.
 *
 * @arg description
 * @type string
 * @text Description
 * @desc Information on the quest.
 *
 * @arg status
 * @text Status
 * @type select
 * @option Ongoing
 * @value ongoing
 * @option Completed
 * @value completed
 * @option Failed
 * @value failed
 * @desc Whether the quest is completed, ongoing or failed.
 * @default ongoing
 *
 * @command RemoveQuestNew
 * @text Remove Quest
 * @desc Removes quest searching by ID or Name.
 *
 * @arg questID
 * @type number
 * @text Quest ID
 * @desc The ID of the quest to remove (leave 0 if using Name).
 *
 * @arg questName
 * @text Quest Name
 * @desc Name of the quest to be removed (leave blank if using ID).
 * @type text
 *
 * @command SetCompletion
 * @text Set Quest Completion Parameter
 * @desc Sets if a quest is completed or not searching by ID or Name.
 *
 * @arg questID
 * @type number
 * @text Quest ID
 * @desc The ID of the quest to edit. (Leave 0 if you use the name)
 * @default 0
 *
 * @arg questName
 * @text Quest Name
 * @desc The name of the quest to edit. (Must be exact name, leave blank if you use ID)
 * @default
 *
 * @arg status
 * @text Status
 * @type select
 * @option Ongoing
 * @value ongoing
 * @option Completed
 * @value completed
 * @option Failed
 * @value failed
 * @desc Whether the quest is completed, ongoing or failed.
 * @default ongoing
 *
 * @command EditQuestDescription
 * @text Edit Quest Description
 * @desc Edits the description of a quest by ID or name.
 *
 * @arg questID
 * @type number
 * @text Quest ID
 * @desc The ID of the quest to edit. (Leave 0 if you use the name)
 * @default 0
 *
 * @arg questName
 * @text Quest Name
 * @desc The name of the quest to edit. (Must be exact name, leave blank if you use ID)
 * @default
 *
 * @arg newDescription
 * @text New Description
 * @desc The new description for the quest.
 * @default
 *
 * @command EditQuestIcon
 * @text Edit Quest Icon
 * @desc Edits the Icon of a quest by ID or name.
 *
 * @arg questID
 * @type number
 * @text Quest ID
 * @desc The ID of the quest to edit. (Leave 0 if you use the name)
 * @default 0
 *
 * @arg questName
 * @text Quest Name
 * @desc The name of the quest to edit. (Must be exact name, leave blank if you use ID)
 * @default
 *
 * @arg iconID
 * @type number
 * @text New Icon #
 * @desc The new icon number.
 * @default 0
 *
 * @command line2
 * @text --- Plugin Functionality ---
 * @desc Series of command to change words and fonts.
 *
 * @command SetTitle
 * @text Set QuestLog Title
 * @desc Set the title of the QuestLog.
 *
 * @arg title
 * @text Title
 * @desc The new title of the QuestLog.
 * @type string
 *
 * @command SetQuestTitleFontSize
 * @text Set QuestLog Title's Font Size
 * @desc Sets the font size of the quest title.
 *
 * @arg fontSize
 * @type number
 * @text Font Size
 * @desc The new font size value for the quest title.
 *
 * @command SetQuestInfoFontSize
 * @text Set Quest Description Font Size
 * @desc Set the Font Size of the Quest Description.
 *
 * @arg fontSize
 * @type number
 * @text Font Size
 * @desc The new font size value for the quest title.
 *
 * @command SetQuestListFontSize
 * @text Set Quest List Font Size
 * @desc Set Quests' Name Font Size in the Quest List
 *
 * @arg fontSize
 * @type number
 * @text Font Size
 * @desc The new font size value for the quest title.
 *
 * @command SetGiverPrefix
 * @text Set Giver Prefix
 * @desc Set the prefix for the quest's "Giver:" descriptor.
 *
 * @arg prefix
 * @text Prefix
 * @desc The new prefix for the quest giver (include ":" if you want them).
 * @type string
 *
 * @command SetAreaPrefix
 * @text Set Area Prefix
 * @desc Set the prefix for the quest's "Area:" descriptor.
 *
 * @arg prefix
 * @text Prefix
 * @desc The new prefix for the quest area (include ":" if you want them).
 * @type string
 *
 * @command SetStatusName
 * @text Set Status Prefix
 * @desc Set the name for the quest "Status:" prefix.
 *
 * @arg name
 * @text Name
 * @desc The new name for the quest status (include ":" if you want them).
 * @type string
 *
 * @command SetQuestCompleted
 * @text Set word for "Completed"
 * @desc Set the word for a completed quest.
 *
 * @arg completed
 * @text Completed
 * @desc The word to show for a completed quest.
 * @type string
 *
 * @command SetQuestOngoing
 * @text Set word for "Ongoing"
 * @desc Set the word for an ongoing quest.
 *
 * @arg ongoing
 * @text Ongoing
 * @desc The word to show for an ongoing quest.
 * @type string
 *
 * @command SetCommandName
 * @text Set Command Name
 * @desc Sets the name of the quest command in the game menu.
 *
 * @arg commandName
 * @type string
 * @text Command Name
 * @desc The name to set for the quest command in the game menu.
 *
 * @command line3
 * @text --- Game Editor Functionality ---
 * @desc Series of command to change words and fonts.
 *
 * @command OpenQuestScene
 * @text Open Quest Scene
 * @desc Opens the Quest Scene.
 *
 * @command CheckQuestCompletion
 * @text Check if Quest is completed
 * @desc Checks if Quest is completed and stores result in a Switch or Variable.
 *
 * @arg selectMode
 * @text Use Switch or Variable
 * @type select
 * @option Switch
 * @option Variable
 * @desc Switch is TRUE if completed, FALSE if not. Variable is 0 (ongoing), 1 (completed) or 2 (failed)
 * @default Switch
 *
 * @arg questID
 * @type number
 * @text Quest ID
 * @desc The ID of the quest to check. (Leave 0 if you use the name)
 * @default 0
 *
 * @arg questName
 * @text Quest Name
 * @desc The name of the quest to check. (Must be exact name, leave blank if you use ID)
 * @default
 *
 * @arg switchID
 * @type number
 * @text Switch/Variable ID
 * @desc The ID of the switch or variable to set
 * @default 1
 * @min 1
 *
 * @command line4
 * @text --- Graphic Changes ---
 * @desc Plugin command to change the Graphic settings.
 *
 * @command changeGraphics
 * @text Change Graphic Settings
 * @desc Change to the desired Graphic Settings
 *
 * @arg titleFlag
 * @text Show QuestLog Title?
 * @type select
 * @option Don't change
 * @value title0
 * @option Show Title Window
 * @value title1
 * @option Hide Title Window
 * @value title2
 * @default title0
 * @desc Choose if you want to show the QuestLog title
 *
 * @arg layoutAlign
 * @text QuestLog Layout
 * @desc Select the QuestLog Layout
 * @type select
 * @option Don't change
 * @value layout0
 * @option Quest List on left, Info on right
 * @value layout1
 * @option Quest List on right, Info on left
 * @value layout2
 * @default layout0
 *
 * @arg layoutSize
 * @text Layout Size
 * @desc Select the QuestLog Layout size
 * @type select
 * @option Don't change
 * @value size0
 * @option 100% of the Graphic Box (classic)
 * @value size1
 * @option 90% of the Graphic Box (RMMZ style)
 * @value size2
 * @default size0
 *
 * @arg touchCancel
 * @text Show Touch Cancel Button?
 * @type select
 * @option Don't change
 * @value cancel0
 * @option Show Touch Cancel
 * @value cancel1
 * @option Hide Touch Cancel
 * @value cancel2
 * @default cancel0
 * @desc Choose if you want to show the touch cancel button (make sure the player has non touch commands if you don't)
 *
 * @arg skinSettings
 * @text Custom Skin
 * @type struct<skinSetArg>
 * @desc If you want to use a custom skin use this settings
 * @default {"skinFlag":"skin0","skinName":"","redT":"0","greenT":"0","blueT":"0"}
 *
 * @help WD_Quest.js
 *
 * The plugin creates a QuestLog that can will store your quests.
 *
 * The QuestLog can be called via script SceneManager.push(SceneManager.Scene_Quest);
 * or via Plugin Command or you can set the Parameter Menu Command true
 * to add a command in the game Menu
 *
 * You can edit both via parameter or plugin command (useful for translations)
 * the QuestLog title, the menu command text, the From: prefix, the Area:
 * prefix, the Status: prefix and the text used for "Completed" or "Ongoing"
 * quests
 *
 * The quest can be added via Plugin Command "Create Quest" and then they
 * will be displayed in the QuestLog ordered by their index.
 * Completed quest will still be visible but grayed out and pushed to the 
 * bottom of the list.
 *
 * Quests completion can be changed via Plugin Command, either by name
 * (must be exact name) or by quest ID
 *
 * Quests can also be completely removed (if you don't want to keep them
 * visible once completed or for whatever reason) via Plugin Command
 * either by name (must be exact name) or by quest ID
 *
 * If your game has a lot of quests I strongly advice to keep track of 
 * quest ID in some kind of note as the plugin doesn't show a full
 * list of the stored quest and their IDs
 *
 * NOTE: The Quest Description text can be split in different lines
 * by adding \n in the string. This works only for that field.
 *
 * You can find more scripts and games on my Ko-Fi page:
 * https://ko-fi.com/winterdream
 * and on my Itch.io page:
 * https://winterdreamgamescreator.itch.io/
 *
 * By using this plugin you accept the Terms of Use (https://drive.google.com/file/d/1l_GadoZh3ylSvRm4hAoT2WOUXTpePpHf/view?usp=sharing)
 *
 * //////////////////////////////////////////////////
 * VERSION 1.5 Changelog
 * - Fixed an unexpected behaviour in the Auto Size description text 
 *   that resets the font size after correctly finding the fitting 
 *   value
 * - Added a padding value to the text to have the desired look to 
 *   the text graphic
 * - Added a full support for RMMZ text codes while keeping the alignment
 *   options
 * - Minor tweaks to the Plugin Parameters
 * - Now the plugin will automatically support compatibility with v1.1
 *   or lower without having to choose different files
 * VERSION 1.4 Changelog
 * - Added the setting to show or hide the title in the QuestLog
 * - Added the possibility to switch the quest list / quest info layout
 * - Added the option to use 100% of the graphic box (standard setting
 *   for this plugin) or 90% (standard RPG Maker MZ scene compatible 
 *   with cancel touch button)
 * - Added the possibility to hide the cancel touch button (useful for 
 *   100% size, but make sure the player has access to non touch controls)
 * - Added the possibility to change the windows skin for the QuestLog only,
 *   also you can change the colors tone (by re-selecting the default skin 
 *   you can apply different color tones to it)
 * - Added a new plugin command to change all the above mid-game
 * VERSION 1.3.2 Changelog
 * - Fixed an old part of the code creating two problems: A black layer under
 *   the scene and no centering if the Game UI was changed from the System 2
 *   tab as reported from ryf and Puppet Knight
 * VERSION 1.3.1 Changelog
 * - Hotfix for a small bug that would turn the menu command name to "true",
 *   thanks to ryf for the report!
 * VERSION 1.3 Changelog
 * - Updated the code to a newer version with, but not limited to, tweaks
 *   to the save and load functionality.
 * - Added the "Failed" status to the Quests with the needed changes to 
 *   "Add Quest", "Set Completion" and "Check Completion". Added bits of
 *   code to allow retrocompatibility with the older versions.
 * - Added the option to Autoset the Description Font Size, the plugin will
 *   range from a font size of 100 to a font size of 10, trying to fit the
 *   text both in width and height. You still need to break the lines with
 *   \n as before. The autosize text is only left aligned due to a limitation
 *   of the DrawTextEx feature used. (On the positive side, it should accept
 *   the usual RMMZ text code like \I for icons, didn't tried it)
 * - Added the possibility to add a longer title that will be displayed in the
 *   Quest Informations window (while the short name will be used for the quest
 *   list on the left). If you don't need it just leave blank the field.
 * - Minor fix on a bug that could cause the menu button to change name due to
 *   a conflict with the Quest List items
 * VERSION 1.2.2 Changelog 
 * - Hotfix for changes made in 1.2.1 as Plugin Parameters from Plugin Manager
 *   where not correctly loaded (Report by Grillmonger)
 * VERSION 1.2.1 Changelog 
 * - Fixed an issue reported by Grillmonger where QuestList would wipe if game 
 *   was closed entrely and then reloaded. Upon further investigation the fix 
 *   was extended to the other Plugin Parameters too (Such as Title Font, etc..)
 *   who would not carry over the changes if done via Plugin Command
 * VERSION 1.2 Changelog
 * - Merged "Set Completion by ID / by Name" and "Remove Quest by ID / by Name"
 * - Changed font size for the Quest List and Quest Description, you can change
 *   them via Plugin Parameters or Plugin Command 
 * - Changed the alignemnt con Quest List from "left" to "Center", can be 
 *   changed via Plugin Parameter
 * - Created a command that checks if a quest is completed and stores the
 *   result in a Switch of your choice (ON for Complete, OFF for Ongoing)
 * - Created a plugin command to change the Quest Icon searching it by ID or 
 *   Name
 * VERSION 1.1 Changelog
 * - Added new plugin command to edit an existing quest 
 *   description by ID or Quest Name
 * - Added new Plugin Command to change FontSize
 * //////////////////////////////////////////////////
 *
 */
 /*~struct~skinSet:
 * @param skinFlag
 * @text Use special Window Skin?
 * @type boolean
 * @desc Choose if you want to use a different skin for the QuestLog
 * @default false
 *
 * @param skinName
 * @text Select the Skin
 * @type file
 * @dir img/system
 * @desc The new skin you want to use
 * @default
 * 
 * @param redT
 * @text Red Tone Regulation
 * @type number
 * @desc (Optional) Choose the red tone correction (from -255 to 255)
 * @default 0
 * @min -255
 * @max 255
 *
 * @param greenT
 * @text Green Tone Regulation
 * @type number
 * @desc (Optional) Choose the green tone correction (from -255 to 255)
 * @default 0
 * @min -255
 * @max 255
 *
 * @param blueT
 * @text Blue Tone Regulation
 * @type number
 * @desc (Optional) Choose the blue tone correction (from -255 to 255)
 * @default 0
 * @min -255
 * @max 255
 */
 /*~struct~skinSetArg:
 * @param skinFlag
 * @text Use special Window Skin?
 * @type select
 * @option Don't change
 * @value skin0
 * @option Use Custom
 * @value skin1
 * @option Use Default
 * @value skin2
 * @default skin0
 * @desc Choose if you want to use a different skin for the QuestLog
 *
 * @param skinName
 * @text Select the Skin
 * @type file
 * @dir img/system
 * @desc The new skin you want to use
 * @default
 * 
 * @param redT
 * @text Red Tone Regulation
 * @type number
 * @desc (Optional) Choose the red tone correction (from -255 to 255)
 * @default 0
 * @min -255
 * @max 255
 *
 * @param greenT
 * @text Green Tone Regulation
 * @type number
 * @desc (Optional) Choose the green tone correction (from -255 to 255)
 * @default 0
 * @min -255
 * @max 255
 *
 * @param blueT
 * @text Blue Tone Regulation
 * @type number
 * @desc (Optional) Choose the blue tone correction (from -255 to 255)
 * @default 0
 * @min -255
 * @max 255
 */

!function(){const t=PluginManager.parameters("WD_Quest");let e=t.Title||"QuestLog",n=t.giverprefix||"Dari:",i=t.areaprefix||"Lokasi:",s=t.statusname||"Status:",o=t.questcompleted||"Selesai",a=t.questongoing||"Belum Selesai",r=t.questfailed||"Gagal",u="true"===t.menucommand,c=t.commandname||"QuestLog",l=Number(t.fontsize)||40,g=t.infoalign||"left",h=Number(t.descriptionSize)||20,d=Number(t.listSize)||20,p="true"===t.dynamicDescSize,m=Number(t.paddingValue)||50;const f=t.listAlign||"center";let S="true"===t.titleFlag,y=t.layoutAlign||"layout1",w=t.layoutSize||"size1",W="true"===t.touchCancel,P=I(t.skinSettings),Q=[],b=-1;if(u){const t=Window_MenuCommand.prototype.addOriginalCommands;Window_MenuCommand.prototype.addOriginalCommands=function(){t.call(this),this.addCommand(c,"quest",!0)};const e=Scene_Menu.prototype.createCommandWindow;Scene_Menu.prototype.createCommandWindow=function(){e.call(this),this._commandWindow.setHandler("quest",this.commandQuest.bind(this))},Scene_Menu.prototype.commandQuest=function(){SceneManager.push(x)}}function x(){this.initialize(...arguments)}function _(){this.initialize(...arguments)}function z(){this.initialize(...arguments)}x.prototype=Object.create(Scene_MenuBase.prototype),x.prototype.constructor=x,x.prototype.initialize=function(){Scene_MenuBase.prototype.initialize.call(this)},x.prototype.create=function(){Scene_MenuBase.prototype.create.call(this),S&&this.createTitleWindow(),this.createQuestListWindow(),this.createQuestInfoWindow()},x.prototype.createTitleWindow=function(){const t=this.titleWindowRect();this._titleWindow=new _(t),this.addWindow(this._titleWindow)},x.prototype.titleWindowRect=function(){const t=Graphics.boxHeight*C("Anchor"),e=Graphics.boxWidth,n=.2*C("Height");return new Rectangle(0,t,e,n)},x.prototype.createQuestListWindow=function(){const t=this.questListWindowRect();this._questListWindow=new z(t),this._questListWindow.setHandler("ok",this.onQuestListOk.bind(this)),this._questListWindow.setHandler("cancel",this.onQuestListCancel.bind(this)),this.addWindow(this._questListWindow)},x.prototype.questListWindowRect=function(){const t="layout1"===y?0:.7*Graphics.boxWidth,e=Graphics.boxHeight*C("Anchor")+(S?.2*C("Height"):0),n=.3*Graphics.boxWidth,i=S?.8*C("Height"):C("Height");return new Rectangle(t,e,n,i)},x.prototype.createQuestInfoWindow=function(){const t=this.questInfoWindowRect();this._questInfoWindow=new k(t),this.addWindow(this._questInfoWindow)},x.prototype.questInfoWindowRect=function(){const t="layout1"===y?.3*Graphics.boxWidth:0,e=Graphics.boxHeight*C("Anchor")+(S?.2*C("Height"):0),n=.7*Graphics.boxWidth,i=S?.8*C("Height"):C("Height");return new Rectangle(t,e,n,i)},x.prototype.onQuestListOk=function(){this._questListWindow.activate()},x.prototype.onQuestListCancel=function(){this.popScene()},x.prototype.needsCancelButton=function(){return W},SceneManager.Scene_Quest=x,_.prototype=Object.create(Window_Base.prototype),_.prototype.constructor=_,_.prototype.initialize=function(t){Window_Base.prototype.initialize.call(this,t),H();const n=.25*this.height;this.fontSize=l,this.contents.fontSize=l,this.drawText(e,0,n,this.contentsWidth(),"center")},_.prototype.loadWindowskin=function(){this.windowskin=q()},_.prototype.updateTone=function(){const t=N();this.setTone(t[0],t[1],t[2])},z.prototype=Object.create(Window_Command.prototype),z.prototype.constructor=z,z.prototype.initialize=function(t){this.sortQuestList(),Window_Command.prototype.initialize.call(this,t)},z.prototype.loadWindowskin=function(){this.windowskin=q()},z.prototype.updateTone=function(){const t=N();this.setTone(t[0],t[1],t[2])},z.prototype.sortQuestList=function(){A();let t=[];const e=Q.map(function(t){t.hasOwnProperty("complete")&&!t.hasOwnProperty("status")&&(t.complete?t.status="completed":t.status="ongoing");return t});const n=e.filter(t=>"ongoing"===t.status);n.sort(function(t,e){return t.index-e.index});const i=e.filter(t=>"completed"===t.status);i.sort(function(t,e){return t.index-e.index});const s=e.filter(t=>"failed"===t.status);s.sort(function(t,e){return t.index-e.index}),t=n.concat(i,s),Q=t,R()},z.prototype.makeCommandList=function(){for(let t=0;t<Q.length;t++){const e=Q[t];H(),this.fontSize=d,this.contents.fontSize=d,this.addCommand(e.name,"questList",!0,t)}},z.prototype.itemTextAlign=function(){return f},z.prototype.drawItem=function(t){A();const e=this.itemRect(t),n=Q[t];if(n){const i=e.clone();n.hasOwnProperty("complete")&&!n.hasOwnProperty("status")&&(n.complete?n.status="completed":n.status="ongoing"),"completed"===n.status||!0===n.status?(this.changePaintOpacity(!1),this.changeTextColor("#808080")):"ongoing"===n.status||!1===n.status?(this.changePaintOpacity(!0),this.resetTextColor()):(this.changePaintOpacity(!1),this.changeTextColor("#B22222")),this.drawText(this.commandName(t),i.x,i.y,i.width,this.itemTextAlign())}};let T=z.prototype.update;function k(){this.initialize(...arguments)}function C(t){return"Width"===t?"size1"===w?Graphics.boxWidth:.9*Graphics.boxWidth:"Height"===t?"size1"===w?Graphics.boxHeight:.9*Graphics.boxHeight:"Anchor"===t?"size1"===w?0:.1:"MaxLines"===t?"size1"===w?11+(S?0:4):10+(S?0:3):void 0}function q(){return P.skinFlag&&""!==P.skinName?ImageManager.loadSystem(P.skinName):ImageManager.loadSystem("Window")}function N(){return P.skinFlag&&""!==P.skinName?[P.redT,P.greenT,P.blueT]:$gameSystem.windowTone()}function I(t){let e=JSON.parse(t);return e.skinFlag="true"===e.skinFlag,e.redT=parseInt(e.redT),e.greenT=parseInt(e.greenT),e.blueT=parseInt(e.blueT),e}function M(t){const e=t.length;let n=0,i=0,s="",o="Running",a="Waiting",r=!1;for(let u=0;u<e;u++){if("Waiting"===a)if("Running"===o)"Running"===o&&"\\"!==t[u]||(o="Locked");else if("Locked"===o)if("Locked"!==o||"V"!==t[u]&&"v"!==t[u])if("Locked"!==o||"I"!==t[u]&&"i"!==t[u])if("Locked"!==o||"N"!==t[u]&&"n"!==t[u])if("Locked"!==o||"P"!==t[u]&&"p"!==t[u])if("Locked"!==o||"G"!==t[u]&&"g"!==t[u])"Locked"!==o||"C"!==t[u]&&"c"!==t[u]?"Locked"!==o||"{"!==t[u]&&"}"!==t[u]&&"$"!==t[u]&&"."!==t[u]&&"|"!==t[u]&&"!"!==t[u]&&">"!==t[u]&&"<"!==t[u]&&"^"!==t[u]?"Locked"===o&&"\\"===t[u]?(n-=1,o="Running"):o="Locked"!==o||"F"!==t[u]&&"f"!==t[u]?"Running":"FontPt1":(n-=2,o="Running"):o="Color";else{n=n-2+TextManager.currencyUnit.length,o="Running"}else o="PartyOrPos";else o="Actor";else o="Icon";else o="Variable";else"Running"!==o&&"Locked"!==o&&"FontPt1"!==o&&"["===t[u]?a="Running":o="PartyOrPos"!==o||"X"!==t[u]&&"x"!==t[u]?"PartyOrPos"!==o||"Y"!==t[u]&&"y"!==t[u]?"FontPt1"!==o||"S"!==t[u]&&"s"!==t[u]?"Running":"FontSize":"PosY":"PosX";else isNaN(parseInt(t[u]))?"]"===t[u]&&0===i||isNaN(parseInt(t[u]))&&"]"!==t[u]?(n-="PosX"!==o&&"PosY"!==o&&"FontSize"!==o?2:3,o="Running",a="Waiting",i=0,s=""):"]"===t[u]&&0!==i&&(r=!0):(i++,s+=t[u]);if(r){switch(o){case"Variable":n=n-4-i+$gameVariables.value(parseInt(s)).toString().length;break;case"Icon":n=n-4-i+2;break;case"Actor":PartyOrPos;const t=$dataActors,e=parseInt(s);if(e<=t.length-1&&e>0){n=n-4-i+t[e].name.length}else n=n-4-i;break;case"PartyOrPos":const a=$gameParty,r=$dataActors,u=parseInt(s);if(u<=r.length-1&&u>0&&a._actors.includes(u)){n=n-4-i+r[u].name.length}else n=n-4-i;break;case"Color":n=n-4-i;break;case"PosX":case"PosY":case"FontSize":n=n-5-i}o="Running",a="Waiting",i=0,s=""}}return e+n}function L(t){return Q.find(function(e){return e.id===t})}function D(t){return Q.find(function(e){return e.name===t})}function F(t){for(let e=0;e<Q.length;e++)if(Q[e].id===t){Q.splice(e,1);break}}function O(t){for(let e=0;e<Q.length;e++)if(Q[e].name===t){Q.splice(e,1);break}}function R(){$gameSystem.saveQuestList(Q)}function A(){Q=$gameSystem.getQuestList()}function v(){$gameSystem.savePluginParams()}function H(){const t=$gameSystem.getPluginParams();e=t.questTitle,n=t.giverPrefix,i=t.areaPrefix,s=t.statusName,o=t.questCompleted,a=t.questOngoing,r=t.questFailed,c=t.questMenuCommandName,l=t.fontSize,h=t.descriptionSize,d=t.listSize,S=t.titleFlag,y=t.layoutAlign,w=t.layoutSize,P=t.skinSettings,W=t.touchCancel}z.prototype.update=function(){T.call(this);const t=this.index();b!==t&&(b=t,SceneManager._scene._questInfoWindow.refresh())},k.prototype=Object.create(Window_Base.prototype),k.prototype.constructor=k,k.prototype.initialize=function(t){Window_Base.prototype.initialize.call(this,t),this._quest=null,this.refresh()},k.prototype.loadWindowskin=function(){this.windowskin=q()},k.prototype.updateTone=function(){const t=N();this.setTone(t[0],t[1],t[2])},k.prototype.setQuest=function(t){this._quest!==t&&(this._quest=t,this.refresh())},k.prototype.clear=function(){this.setQuest(null)},k.prototype.refresh=function(){if(this.contents.clear(),this._quest){this.lineHeight();const t=this._quest;t.hasOwnProperty("complete")&&!t.hasOwnProperty("status")&&(t.status=t.complete),this.drawQuestIcon(t.icon),this.drawQuestName(t),this.drawQuestGiver(t.giver),this.drawQuestArea(t.area),this.drawQuestInfo(t.description),this.drawQuestStatus(t.status)}},k.prototype.checkQuestName=function(t){return t.hasOwnProperty("longTitle")?void 0===t.longTitle||""===t.longTitle||"undefined"===t.longTitle?t.name:t.longTitle:t.name},k.prototype.drawQuestIcon=function(t){const e=this.innerWidth/2;this.drawIcon(t,e,10)},k.prototype.drawQuestName=function(t){const e=1.5*this.lineHeight(),n=this.innerWidth,i=this.checkQuestName(t);this.resetFontSettings(),this.drawText(i,0,e,n,"center")},k.prototype.drawQuestGiver=function(t){const e=3*this.lineHeight(),i=this.innerWidth;this.resetFontSettings(),H(),this.drawText(n+" "+t,0,e,i,"left")},k.prototype.drawQuestArea=function(t){const e=4*this.lineHeight(),n=this.innerWidth;this.resetFontSettings(),H(),this.drawText(i+" "+t,0,e,n,"left")},k.prototype.drawQuestInfo=function(t){const e=6*this.lineHeight(),n=""===s&&""===a&&""===o&&""===r?0:2*this.lineHeight(),i=this.innerWidth,u=(this.lineHeight(),t.split("\\n").join("\n"));let c=26;if(this.resetFontSettings(),p){let t,i=!0,s=100;const o=this.exTextAligner(u,g);for(;i;)this.fontSize=s,this.contents.fontSize=s,(t=this.textSizeExNoReset(o,s)).width>this.innerWidth-2*m||t.height>this.innerHeight-e-n?--s<10&&(i=!1,c=s):(i=!1,c=s);const a=(this.innerWidth-t.width)/2;this.drawTextExSizable(o,a,e,this.innerWidth,c),this.resetFontSettings()}else{H();const t=this.exTextAligner(u,g),n=this.textSizeExNoReset(t,h);this.drawTextExSizable(t,(this.innerWidth-n.width)/2,e,i,h),this.resetFontSettings()}},k.prototype.textSizeExNoReset=function(t,e){this.fontSize=e,this.contents.fontSize=e;const n=this.createTextState(t,0,0,0);return n.drawing=!1,this.processAllText(n),{width:n.outputWidth,height:n.outputHeight}},Window_Base.prototype.drawTextExSizable=function(t,e,n,i,s){this.fontSize=s,this.contents.fontSize=s;const o=this.createTextState(t,e,n,i);return this.processAllText(o),o.outputWidth},k.prototype.exTextAligner=function(t,e){if(t.includes("\n")){const n=t.split("\n");let i=0,s=[];for(const t of n)M(t)>i&&(i=M(t));for(let t=0;t<n.length;t++)if(M(n[t])<i){const o=i-M(n[t]);switch(e){case"left":s.push(n[t]);break;case"center":for(let e=o;e>0;e--)n[t]=e%2==0?n[t]+" ":" "+n[t];s.push(n[t]);break;case"right":for(let e=o;e>0;e--)n[t]=" "+n[t];s.push(n[t])}}else s.push(n[t]);return s.join("\n")}return t},k.prototype.drawQuestStatus=function(t){const e=this.lineHeight()*C("MaxLines"),n=this.innerWidth;let i;switch(H(),this.resetFontSettings(),t){case"ongoing":case!1:i=s+" "+a;break;case"completed":case!0:i=s+" "+o;break;case"failed":i=s+" "+r}this.drawText(i,0,e,n,"right")},x.prototype.update=function(){Scene_Base.prototype.update.call(this),this.updateQuestInfo()},x.prototype.updateQuestInfo=function(){A();const t=this._questListWindow.index(),e=Q[t];this._questInfoWindow.setQuest(e)},z.prototype.currentQuest=function(){A();const t=this.index();return Q[t]},PluginManager.registerCommand("WD_Quest","CreateQuest",function(t){let e=t.status;if(void 0!==t.complete){e="true"===t.complete?"completed":"ongoing"}const n={id:Number(t.id),icon:Number(t.icon),name:String(t.name),longTitle:String(t.longTitle),index:Number(t.index),giver:String(t.giver),area:String(t.area),description:String(t.description),status:String(e)};Q.push(n),R()}),PluginManager.registerCommand("WD_Quest","SetTitle",function(t){e=String(t.title),v()}),PluginManager.registerCommand("WD_Quest","SetGiverPrefix",function(t){n=String(t.prefix),v()}),PluginManager.registerCommand("WD_Quest","SetAreaPrefix",function(t){i=String(t.prefix),v()}),PluginManager.registerCommand("WD_Quest","SetStatusName",function(t){s=String(t.name),v()}),PluginManager.registerCommand("WD_Quest","SetQuestCompleted",function(t){o=String(t.completed),v()}),PluginManager.registerCommand("WD_Quest","SetQuestOngoing",function(t){a=String(t.ongoing),v()}),PluginManager.registerCommand("WD_Quest","OpenQuestScene",function(){SceneManager.push(SceneManager.Scene_Quest)}),PluginManager.registerCommand("WD_Quest","SetCommandName",function(t){!function(t){c=t}(t.commandName),v()}),PluginManager.registerCommand("WD_Quest","EditQuestDescription",function(t){const e=Number(t.questID),n=String(t.questName),i=String(t.newDescription);let s=null;e>0?s=L(e):""!==n&&(s=D(n)),s&&(s.description=i,R())}),PluginManager.registerCommand("WD_Quest","SetQuestTitleFontSize",function(t){const e=Number(t.fontSize);l=e,v()}),PluginManager.registerCommand("WD_Quest","SetQuestInfoFontSize",function(t){const e=Number(t.fontSize);h=e,v()}),PluginManager.registerCommand("WD_Quest","SetQuestListFontSize",function(t){const e=Number(t.fontSize);d=e,v()}),PluginManager.registerCommand("WD_Quest","SetCompletion",function(t){const e=Number(t.questID),n=String(t.questName);let i=t.status;if(void 0!==t.completion&&!i){t.completion;i=t.completion?"completed":"ongoing"}let s=null;e>0?s=L(e):""!==n&&(s=D(n)),s&&(s.status=i,R())}),PluginManager.registerCommand("WD_Quest","RemoveQuestNew",function(t){const e=Number(t.questID),n=String(t.questName);e>0?(F(e),R()):""!==n&&(O(n),R())}),PluginManager.registerCommand("WD_Quest","CheckQuestCompletion",function(t){const e=Number(t.questID),n=String(t.questName),i=Number(t.switchID),s=String(t.selectMode);let o=null;if(e>0?o=L(e):""!==n&&(o=D(n)),o){let t;if(t=o.hasOwnProperty("complete")&&!o.hasOwnProperty("status")?o.complete?"completed":"ongoing":o.status,"Variable"===s)switch(t){case"completed":$gameVariables.setValue(i,0);break;case"ongoing":$gameVariables.setValue(i,1);break;case"failed":$gameVariables.setValue(i,2)}else switch(t){case"completed":$gameSwitches.setValue(i,!0);break;default:$gameSwitches.setValue(i,!1)}}}),PluginManager.registerCommand("WD_Quest","EditQuestIcon",function(t){const e=Number(t.questID),n=String(t.questName),i=Number(t.iconID);let s=null;e>0?s=L(e):""!==n&&(s=D(n)),s&&(s.icon=i,R())}),PluginManager.registerCommand("WD_Quest","changeGraphics",function(t){const e=t.titleFlag,n=t.layoutAlign,i=t.layoutSize,s=t.touchCancel,o=function(t){let e=JSON.parse(t);return e.redT=parseInt(e.redT),e.greenT=parseInt(e.greenT),e.blueT=parseInt(e.blueT),e}(t.skinSettings);switch(e){case"title1":S=!0;break;case"title2":S=!1}switch(n){case"layout1":case"layout2":y=n}switch(i){case"size1":case"size2":w=i}switch(s){case"cancel1":W=!0;break;case"cancel2":W=!1}switch(o.skinFlag){case"skin1":P.skinFlag=!0,P.skinName=o.skinName,P.redT=o.redT,P.greenT=o.greenT,P.blueT=o.blueT;break;case"skin2":P.skinFlag=!1}v()}),Game_System.prototype.saveQuestList=function(t){this._questList=t},Game_System.prototype.getQuestList=function(){return this._questList?this._questList:[]},Game_System.prototype.savePluginParams=function(){this._questPluginParams={questTitle:e,giverPrefix:n,areaPrefix:i,statusName:s,questCompleted:o,questOngoing:a,questFailed:r,questMenuCommandName:c,fontSize:l,descriptionSize:h,listSize:d,titleFlag:S,layoutAlign:y,layoutSize:w,skinSettings:P,touchCancel:W}},Game_System.prototype.getPluginParams=function(){return this._questPluginParams?this._questPluginParams:{questTitle:t.Title||"QuestLog",giverPrefix:t.giverprefix||"From:",areaPrefix:t.areaprefix||"Area:",statusName:t.statusname||"Status:",questCompleted:t.questcompleted||"Completed",questOngoing:t.questongoing||"Ongoing",questFailed:t.questfailed||"Failed",questMenuCommandName:t.commandname||"QuestLog",fontSize:Number(t.fontsize)||40,descriptionSize:Number(t.descriptionSize)||20,listSize:Number(t.listSize)||20,titleFlag:"true"===t.titleFlag,layoutAlign:t.layoutAlign||"layout1",layoutSize:t.layoutSize||"size1",skinSettings:I(t.skinSettings),touchCancel:"true"===t.touchCancel}},PluginManager.registerCommand("WD_Quest","SetCompletionByName",function(t){!function(t,e){for(var n=0;n<Q.length;n++)if(Q[n].name===t){Q[n].status=e;break}}(t.questName,"true"===t.completion?"completed":"ongoing"),R()}),PluginManager.registerCommand("WD_Quest","SetCompletionByID",function(t){!function(t,e){for(let n=0;n<Q.length;n++)if(Q[n].id===t){Q[n].status=e;break}}(Number(t.questID),"true"===t.completion?"completed":"ongoing"),R()}),PluginManager.registerCommand("WD_Quest","RemoveQuestByID",function(t){F(Number(t.questID)),R()}),PluginManager.registerCommand("WD_Quest","RemoveQuest",function(t){O(t.questName),R()})}();