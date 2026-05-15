//=============================================================================
// Plugin Name: Achievements
// Author: Winthorp Darkrites (Winter Dream Games Creator)
// Description: Create global game Achievements and pop-ups
// Terms of Use: By using this plugin you agree at our ToU (https://drive.google.com/file/d/1lG2Lep2Unme80ghZD7-fA-hPGWKLsiR7/view)
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Achievements Plugin for RPG Maker MZ
 * @version 1.0
 * @author Winthorp Darkrites
 * @url https://ko-fi.com/winterdream
 *
 * @param paramLine1
 * @text === Graphic Options ===
 * @desc Select your graphics options here
 * @default ==============
 *
 * @param picIconSel
 * @text Use Icons or Pics?
 * @type select
 * @option Pictures (48x48 px)
 * @value pictures
 * @option Icons
 * @value icons
 * @desc Choose if you want to use icons or pictures for your Achievements
 * @default pictures
 *
 * @param autoGray
 * @text Autogray Settings
 * @type struct<autogr>
 * @desc Select the Autogray settings for locked pictures
 * @default {"autoGrayFlag":"false","autoGrayBright":"0","autoGrayGrayscale":"255"}
 *
 * @param rewardsCol
 * @text Number of Columns in Rewards Windows
 * @type number
 * @min 1
 * @desc How many columns are used in the rewards informations (if used)
 * @default 2
 *
 * @param paramLine2
 * @text === Pop Up Options ===
 * @desc Select your pop up options here
 * @default ==============
 *
 * @param usePop
 * @text Show pop up when Achievement is done?
 * @type boolean
 * @desc Choose if you want to show popups for completed achievements
 * @default true
 *
 * @param unlockText
 * @text Unlock Text
 * @desc What text is shown when an achievement is completed?
 * @default Achievement Unlocked:
 *
 * @param unlockSE
 * @text Unlock Sound Effect
 * @type file
 * @dir audio/se
 * @desc Play an SE when the pop up is called? (Leave blank if no SE is played)
 * @default
 *
 * @param paramLine3
 * @text === Commands Options ===
 * @desc Select your commands options here
 * @default ==============
 *
 * @param titleCommand
 * @text Show Command in Title Menu?
 * @type boolean
 * @desc Show Command in Title Menu?
 * @default true
 *
 * @param menuCommand
 * @text Show Command in Game Menu?
 * @type boolean
 * @desc Show Command in Game Menu?
 * @default false
 *
 * @param commandName
 * @text Command Text
 * @desc The text for the command
 * @default Achievements
 *
 * @param paramLine4
 * @text === Utility Options ===
 * @desc Select your utility options here
 * @default ==============
 *
 * @param hiddenDefaults
 * @text Hidden Default Settings
 * @type struct<hiddenDef>
 * @desc Default Settings for Hidden Achievements
 * @default {"hiddenDefPic":"","hiddenDefIco":"0","hiddenDefSmallT":"","hiddenDefBigT":"","hiddenDefSmallD":"","hiddenDefBigD":""}
 *
 * @param encryptionFlag
 * @text Encrypt JSON data?
 * @type boolean
 * @desc Allow the plugin to soft encrypt the JSON to avoid tampering from non programmer users?
 * @default false
 *
 * @param compatibilitySlot
 * @text Add space for other commands in Title Menu?
 * @type number
 * @min 0
 * @desc Compatibility: If the plugin affects other plugins title commands layout, add more slots here
 * @default 0
 *
 * @command openAchi
 * @text Open achievements menu
 * @desc Opens the achievements scene
 *
 * @command AddAchievement
 * @text Add an Achievement
 * @desc Let the developer add an achievement.
 *
 * @arg id
 * @text ID
 * @type number
 * @min 0
 * @desc The Achievement ID and Index, it must be unique
 * @default 0
 *
 * @arg achiPic
 * @text Achievement Pictures
 * @type struct<achipics>
 * @desc Select the Pictures for your achievement
 * @default {"unlockPic":"","lockPic":"","hiddenPic":""}
 *
 * @arg achiIco
 * @text Achievement Icons
 * @type struct<achiicons>
 * @desc Select the Icons for your achievement
 * @default {"unlockIco":"0","lockIco":"0","hiddenIco":"0"}
 *
 * @arg achiTitles
 * @text Achievement Titles
 * @type struct<achititles>
 * @desc Select the Titles for your achievement
 * @default {"unlockSmallT":"","lockSmallT":"","hiddenSmallT":"","unlockBigT":"","lockBigT":"","hiddenBigT":""}
 *
 * @arg achiDescriptions
 * @text Achievement Descriptions
 * @type struct<achidescs>
 * @desc Select the Descriptions for your achievement
 * @default {"unlockSmallD":"","lockSmallD":"","hiddenSmallD":"","unlockBigD":"","lockBigD":"","hiddenBigD":""}
 *
 * @arg achiFulfill
 * @text Achievement Fulfillment
 * @type struct<achifullf>
 * @desc Choose if you want to display up to 3 fulfillment data
 * @default {"achiFulfill1":"{\"isActive\":\"false\",\"graphType\":\"text\",\"description\":\"\",\"startVal\":\"0\",\"targetVal\":\"10\"}","achiFulfill2":"{\"isActive\":\"false\",\"graphType\":\"text\",\"description\":\"\",\"startVal\":\"0\",\"targetVal\":\"10\"}","achiFulfill3":"{\"isActive\":\"false\",\"graphType\":\"text\",\"description\":\"\",\"startVal\":\"0\",\"targetVal\":\"10\"}"}
 *
 * @arg achiRewards
 * @text Achievement Rewards
 * @type struct<achireward>
 * @desc Select the Rewards for your achievement
 * @default {"achiExpRew":"[]","achiGoldRew":"[]","achiItemRew":"[]","achiWeaponRew":"[]","achiArmorRew":"[]","achiEventRew":"[]"}
 *
 * @arg isHidden
 * @text is Hidden?
 * @type boolean
 * @desc If true the Achievement will be an Hidden Achievement
 * @default false
 *
 * @command completeAchievement
 * @text Complete Achievement
 * @desc Unlock an achievement, setting it as "Done".
 *
 * @arg id
 * @text ID
 * @type number
 * @min 0
 * @desc The Achievement ID
 * @default 0
 *
 * @command dehiddenAchievement
 * @text Remove Hidden from Achievement
 * @desc Change an Achievement from hidden to locked (if not already done)
 *
 * @arg id
 * @text ID
 * @type number
 * @min 0
 * @desc The Achievement ID
 * @default 0
 *
 * @command rehiddenAchievement
 * @text Set an Achievement "Hidden"
 * @desc Change an Achievement to hidden (unless it's completed)
 *
 * @arg id
 * @text ID
 * @type number
 * @min 0
 * @desc The Achievement ID
 * @default 0
 *
 * @command changeFulfillment
 * @text Change Achievement Fulfillment
 * @desc Change the value for the fulfillment (must be active)
 *
 * @arg id
 * @text ID
 * @type number
 * @min 0
 * @desc The Achievement ID
 * @default 0
 *
 * @arg ful1
 * @text Value change for 1st fulfillment
 * @type number
 * @desc The value will be ADDED (or subtracted if negative) to the current value
 * @default 0
 *
 * @arg ful2
 * @text Value change for 2nd fulfillment
 * @type number
 * @desc The value will be ADDED (or subtracted if negative) to the current value
 * @default 0
 *
 * @arg ful3
 * @text Value change for 3rd fulfillment
 * @type number
 * @desc The value will be ADDED (or subtracted if negative) to the current value
 * @default 0
 *
 * @command showLoadedAchi
 * @text (DEVS ONLY) Show Loaded Achievements
 * @desc Get a list of the achievements from the JSON in the RMMZ console
 *
 * @command undoneAll
 * @text (DEVS ONLY) Reset all Achievements to "Not Done"
 * @desc It will turn all achievements as not done (if you manually de-hidden an achievement you must manually re-hide it)
 *
 * @command dataWipe
 * @text (DEVS ONLY) Wipe the Achievements JSON
 * @desc This will wipe the JSON to a blank state, NO TURNING BACK!
 *
 * @help
 * This plugin allows you to add Achievements to your game. Those Achievements will be 
 * store in a JSON and will be shared among all plays and savegames of your project
 *
 * Be sure to have installed the .js file in the js/plugins folder of your project and 
 * the .JSON file in the data folder of your project.
 * If at any time you want to wipe your achievements data, just open the JSON and write []
 *
 * PRO TIP: As the Achievments changes are PERMANENT it's useful to keep a hidden event in 
 *          that adds all the achievements, once you are ready to distribute your game you 
 *          can wipe and re-add the achievements to reset them.
 *
 * This plugin comes with the following features:
 * - Pictures or Icons: You can use pictures (48x48 px) or RMMZ icons for your achievements
 * - AutoGray Feature (only pictures): If you use pictures and you enable Autogray, the plugin 
 *                                     will turn pictures to grayscale if the achievement is 
 *                                     locked
 * - Fulfillments: You can add up to 3 fulfillments per Achievement and you can decide how 
 *                 every each of them is displayed (text, gauge or combination of both).
 *                 If ALL active fulfillments are met, the plugin will auto-unlock the 
 *                 achievement
 * - Hidden achievements: You can set Achievements to "Hidden", they will use a standard 
 *                        format and will hide fulfillments and rewards in the menu 
 * - PopUp Window: You can choose to show a popUp message when the achievement is unlocked,
 *                 it can also play a Sound Effect when popping. PopUp window have a built 
 *                 in queque and will display multiple unlocked achievements one by one
 * - JSON Auto-Encryption: The plugin offer the option to soft encrypt the JSON file, it's 
 *                         nothing a programmer can't decrypt but it should stop average
 *                         users from just changing "false" with "true" in the isDone field
 * 
 * //CALLING THE PLUGIN FROM EXTERNAL SOURCES:
 * The achievement completion can be also called from outside the plugin, for example you could
 * call it from the Title Screen if you want to create a "Start the game" achievement! 
 * To do so, just write the script call: window.WD_Interplugin_Achievements.complete(id);
 * Where "id" is the ID of the achievement!
 * Please make sure the database is ready and plugins are loaded before the external script call
 * commence.
 *
 * You can find more scripts and games on my Ko-Fi page:
 * https://ko-fi.com/winterdream
 * and on my Itch.io page:
 * https://winterdreamgamescreator.itch.io/
 *
 * By using this plugin you accept the Terms of Use (https://drive.google.com/file/d/1l_GadoZh3ylSvRm4hAoT2WOUXTpePpHf/view?usp=sharing)
 *
 * //////////////////////////////////////////////////
 * VERSION 1.3:
 * - Fixed pictures misplacements if using a different Screen vs UI resolution
 * - Investigated the possible issue of teleporting to another map while popping the
 *   achievement complete window, no issues have been recorded
 * - Investigated the possible issue of changing scene (menu, save, game over, title screen)
 *   while achievement windows is popping. No fatal error, but it would be better to
 *   avoid such simultaneous events or the pop window might be lost
 * - Added a script call to run the "Complete Achievement" command outside the plugin
 *   (see instructions in the description). Be sure to have the database and plugins
 *   ready before doing so.
 * - Investigated the possible issue about giving out rewards while not in the game.
 *   The game will IGNORE all the rewards, there is no way to recover them. That said,
 *   popping an achievement outside the game need the special external script call to
 *   be doable. So shame on you if you pop a rewarding achievement outside the game!
 * VERSION 1.2.1:
 * - Fixed a minor bug in the data load that shouldn't have caused any issues anyway
 * - Removed a couple of dead variables that were implemented but never used
 * VERSION 1.2:
 * - Added two Quality of Life plugin commands: Re-Hide an achievement (useful if you manually 
 *   de-hidden an achievement) and Reset all Achievements to Not Done, you can simply hit this 
 *   command to undo all achievements, hopefully this will speed up the pre-distribution process
 *   of your project
 * VERSION 1.1:
 * - Hotfix for a problem reported by Rizky Fauzy Ananda. The save/load feature of the JSON
 *   would crash on web distribution. Added a check to control if the game is played on a 
 *   local machine and added a new save/load method by key foraging in the event the game is 
 *   a web distribution. Thanks to Aerosys and caethyril for the help with this fix!
 * //////////////////////////////////////////////////
 *
 */
/*~struct~achipics:
 * @param unlockPic
 * @text Unlocked Picture
 * @type file
 * @dir img/pictures
 * @desc Select a pictures for when the achievement is Unlocked
 * @default
 *
 * @param lockPic
 * @text Locked Picture (if different)
 * @type file
 * @dir img/pictures
 * @desc Select a pictures for when the achievement is Locked (if different from unlocked)
 * @default
 *
 * @param hiddenPic
 * @text Hidden Picture (if different)
 * @type file
 * @dir img/pictures
 * @desc Select a pictures for when the achievement is Hidden (if different from standard hidden parameters)
 * @default
 */
/*~struct~achiicons:
 * @param unlockIco
 * @text Unlocked Icon
 * @type icon
 * @desc Select an icon for when the achievement is Unlocked
 * @default
 *
 * @param lockIco
 * @text Locked Icon (if different)
 * @type icon
 * @desc Select an icon for when the achievement is Locked (if different from unlocked)
 * @default
 *
 * @param hiddenIco
 * @text Hidden Icon (if different)
 * @type icon
 * @desc Select an icon for when the achievement is Hidden (if different from standard hidden parameters)
 * @default
 */
/*~struct~achititles:
 * @param unlockSmallT
 * @text Unlocked Short Title
 * @desc Short Title for the Achievement list (when unlocked)
 * @default
 *
 * @param lockSmallT
 * @text Locked Short Title (if different)
 * @desc Short Title for the Achievement list (when locked, if different from unlocked)
 * @default
 *
 * @param hiddenSmallT
 * @text Hidden Short Title (if different)
 * @desc Short Title for the Achievement list (when hidden, if not standard)
 * @default
 *
 * @param unlockBigT
 * @text Unlocked Long Title
 * @desc Long Title for the Achievement info (when unlocked)
 * @default
 *
 * @param lockBigT
 * @text Locked Long Title (if different)
 * @desc Long Title for the Achievement info (when locked, if different from unlocked)
 * @default
 *
 * @param hiddenBigT
 * @text Hidden Long Title (if different)
 * @desc Long Title for the Achievement info (when hidden, if not standard)
 * @default
 */
/*~struct~achidescs:
 * @param unlockSmallD
 * @text Unlocked Short Description
 * @desc Short Description for the Achievement list (when unlocked)
 * @default
 *
 * @param lockSmallD
 * @text Locked Short Description (if different)
 * @desc Short Description for the Achievement list (when locked, if different from unlocked)
 * @default
 *
 * @param hiddenSmallD
 * @text Hidden Short Description (if different)
 * @desc Short Description for the Achievement list (when hidden, if not standard)
 * @default
 *
 * @param unlockBigD
 * @text Unlocked Long Description
 * @desc Long Description for the Achievement info (when unlocked)
 * @default
 *
 * @param lockBigD
 * @text Locked Long Description (if different)
 * @desc Long Description for the Achievement info (when locked, if different from unlocked)
 * @default
 *
 * @param hiddenBigD
 * @text Hidden Long Description (if different)
 * @desc Long Description for the Achievement info (when hidden, if not standard)
 * @default
 */
/*~struct~achireward:
 * @param achiExpRew
 * @text Experience Rewards
 * @type struct<achiexp>[]
 * @desc Select the Experience for your achievement
 * @default []
 *
 * @param achiGoldRew
 * @text Gold Rewards
 * @type struct<achigold>[]
 * @desc Select the Gold for your achievement
 * @default []
 *
 * @param achiItemRew
 * @text Item Rewards
 * @type struct<achiitem>[]
 * @desc Select the Item for your achievement
 * @default []
 *
 * @param achiWeaponRew
 * @text Weapon Rewards
 * @type struct<achiwea>[]
 * @desc Select the Weapon for your achievement
 * @default []
 *
 * @param achiArmorRew
 * @text Armor Rewards
 * @type struct<achiarm>[]
 * @desc Select the Armor for your achievement
 * @default []
 *
 * @param achiEventRew
 * @text Common Event Rewards
 * @type struct<achievent>[]
 * @desc Select the Common Event for your achievement
 * @default []
 */
/*~struct~achiexp:
 * @param unlockExp
 * @type number
 * @min 0
 * @text Experience
 * @desc How much Experience is earned on Achievement completion
 * @default 0
 */
/*~struct~achigold:
 * @param unlockGold
 * @type number
 * @min 0
 * @text Gold
 * @desc How much Gold is earned on Achievement completion
 * @default 0
 */
/*~struct~achiitem:
 * @param unlockItem
 * @type item
 * @min
 * @text Item
 * @desc What Item is earned on Achievement completion
 * @default
 *
 * @param quantity
 * @type number
 * @min 1
 * @text Quantity
 * @desc How many are unlocked?
 * @default 1
 */
/*~struct~achiwea:
 * @param unlockWeapon
 * @type weapon
 * @text Weapon
 * @desc What Weapon is earned on Achievement completion
 * @default
 *
 * @param quantity
 * @type number
 * @min 1
 * @text Quantity
 * @desc How many are unlocked?
 * @default 1
 */
/*~struct~achiarm:
 * @param unlockArmor
 * @type armor
 * @text Armor
 * @desc What Armor is earned on Achievement completion
 * @default
 *
 * @param quantity
 * @type number
 * @min 1
 * @text Quantity
 * @desc How many are unlocked?
 * @default 1
 */
/*~struct~achievent:
 * @param unlockId
 * @type number
 * @min 1
 * @text Common Event ID
 * @desc The ID of the common event as in the Editor
 * @default 1
 *
 * @param textReward
 * @text Text to show
 * @desc The text to show in the reward recap
 * @default
 *
 * @param iconReward
 * @text Icon to show
 * @type icon
 * @desc The icon to show in the reward recap
 * @default
 */
/*~struct~autogr:
 * @param autoGrayFlag
 * @text Enable Automatic Gray Tint?
 * @type boolean
 * @desc Change locked pictures to gray tint automatically? (Doesn't work for Icons)
 * @default false
 *
 * @param autoGrayBright
 * @text Brightness Change
 * @type number
 * @min -255
 * @max 255
 * @desc Change in brightness for locked pictures
 * @default 0
 *
 * @param autoGrayGrayscale
 * @text Grayscale Change
 * @type number
 * @min -255
 * @max 255
 * @desc Change in grayscale for locked pictures
 * @default 255
 */
/*~struct~hiddenDef:
 * @param hiddenDefPic
 * @text Default Picture
 * @type file
 * @dir img/pictures
 * @desc Select the default picture for when an achievement is Hidden
 * @default
 *
 * @param hiddenDefIco
 * @text Default Icon
 * @type icon
 * @desc Select the default icon for when an achievement is Hidden
 * @default
 *
 * @param hiddenDefSmallT
 * @text Default Hidden Short Title
 * @desc Default Short Title for the Achievement list
 * @default
 *
 * @param hiddenDefBigT
 * @text Default Hidden Long Title
 * @desc Default Long Title for the Achievement info
 * @default
 *
 * @param hiddenDefSmallD
 * @text Default Hidden Short Description
 * @desc Default Short Description for the Achievement list
 * @default
 *
 * @param hiddenDefBigD
 * @text Default Hidden Long Description
 * @desc Default Long Description for the Achievement info
 * @default
 */
/*~struct~achifullf:
 * @param achiFulfill1
 * @text 1st Fulfillment
 * @type struct<achifulldet>
 * @desc Choose the details of first fulfillment
 * @default {"isActive":"false","graphType":"text","description":"","startVal":"0","targetVal":"10"}
 *
 * @param achiFulfill2
 * @text 2nd Fulfillment
 * @type struct<achifulldet>
 * @desc Choose the details of first fulfillment
 * @default {"isActive":"false","graphType":"text","description":"","startVal":"0","targetVal":"10"}
 *
 * @param achiFulfill3
 * @text 3rd Fulfillment
 * @type struct<achifulldet>
 * @desc Choose the details of first fulfillment
 * @default {"isActive":"false","graphType":"text","description":"","startVal":"0","targetVal":"10"}
 */
/*~struct~achifulldet:
 * @param isActive
 * @text Show this fulfillment?
 * @type boolean
 * @desc Choose if you want to show this fulfillment
 * @default false
 *
 * @param graphType
 * @text Graphic Style
 * @type select
 * @option Text Only (ex: Get 50 Potions: 0/50)
 * @value text
 * @option Gauge Only
 * @value gauge
 * @option Text over gauge
 * @value combo
 * @desc Choose how the progression is displayed
 * @default text
 *
 * @param description
 * @text Description
 * @desc The descritpion of the goal
 * @default 
 *
 * @param startVal
 * @text Starting Value
 * @type number
 * @desc The initial value
 * @default 0
 * @min 0
 *
 * @param targetVal
 * @text Target Value
 * @type number
 * @desc The target value
 * @default 10
 */
 
 var $dataWDAchievements=null;DataManager._databaseFiles.push({name:"$dataWDAchievements",src:"WD_Achievements.json"}),function(){const e=PluginManager.parameters("WD_Achievements");let t=e.unlockText||"Achievement Unlocked:";const i="pictures"===e.picIconSel,n=JSON.parse(e.autoGray),o="true"===n.autoGrayFlag,c=parseInt(n.autoGrayBright),a=parseInt(n.autoGrayGrayscale),l=parseInt(e.rewardsCol)||2,r="true"===e.titleCommand,s="true"===e.menuCommand,h=e.commandName||"Achievements",d=function(e){let t=JSON.parse(e);return t.hiddenDefIco=isNaN(parseInt(t.hiddenDefIco))?0:parseInt(t.hiddenDefIco),t}(e.hiddenDefaults),u="true"===e.encryptionFlag,f=r?4+parseInt(e.compatibilitySlot):3+parseInt(e.compatibilitySlot),p="true"===e.usePop,m=e.unlockSE||"";let w,y,g=!1,W=[],I=!1,D=-1,k=[],_=[],A=[],S=!1;function v(){if(g)W.sort((e,t)=>e.iD-t.iD);else{let e=$dataWDAchievements;StorageManager.isLocalMode()?(W=u?C(e,"decrypt"):e,g=!0,W.sort((e,t)=>e.iD-t.iD)):StorageManager.loadObject("WD_Achievements").then(t=>{null!==t&&(e=t),W=u?C(e,"decrypt"):e,g=!0,W.sort((e,t)=>e.iD-t.iD)}).catch(()=>{W=u?C(e,"decrypt"):e,g=!0,W.sort((e,t)=>e.iD-t.iD)})}}function b(){W.sort((e,t)=>e.iD-t.iD);const e=u?C(W,"encrypt"):W,t="WD_Achievements",i=JSON.stringify(e);if(StorageManager.isLocalMode()){const e=require("fs"),n=require("path"),o=n.dirname(process.mainModule.filename),c=n.join(o,"data/"),a=c+t+".json";e.existsSync(c)||e.mkdirSync(c),e.writeFileSync(a,i)}else StorageManager.saveObject(t,e)}function C(e,t){if(0===e.length)return[];function i(e,t){let i="";for(let n=0;n<e.length;n++){let o=e[n];if(o.match(/[a-z]/i)){const i=e.charCodeAt(n);i>=65&&i<=90?o=String.fromCharCode((i-65+t)%26+65):i>=97&&i<=122&&(o=String.fromCharCode((i-97+t)%26+97))}i+=o}return i}switch(t){case"encrypt":let n=[],o=[],c=[0,1,2,3,4,5,6,7,8,9];c.sort(()=>Math.random()-.5);let a,l=Math.floor(25*Math.random())+1;a=l<10?"X":l>=10&&l<=99?"R":"G";let r="A";for(let e=0;e<c.length;e++)r+=c[e];n.push({code:a+l+r});for(const t of e){o=[];for(let e=0;e<c.length;e++)switch(c[e]){case 0:o.push(t.iD);break;case 1:o.push(t.pictures);break;case 2:o.push(t.icons);break;case 3:o.push(t.titles);break;case 4:o.push(t.descriptions);break;case 5:o.push(t.isDone);break;case 6:o.push(t.isHidden);break;case 7:o.push(t.rewards);break;case 8:o.push(t.fulfillment);break;case 9:o.push({isDone:!1,isHidden:!1})}const e=JSON.stringify(o);n.push({code:i(e,l)})}return n;case"decrypt":if("object"!=typeof e[0]||!e[0].hasOwnProperty("code"))return e;let s;decryptionKeys=e[0].code;let h=[],d=[];switch(decryptionKeys[0]){case"X":s=parseInt(decryptionKeys[1]);break;case"R":s=parseInt(decryptionKeys[1]+decryptionKeys[2]);break;case"G":s=parseInt(decryptionKeys[1]+decryptionKeys[2]+decryptionKeys[3])}const u=decryptionKeys.split("A")[1];for(let e=0;e<u.length;e++)h.push(parseInt(u[e]));for(let t=1;t<e.length;t++){let n={iD:0,pictures:{},icons:{},titles:{},descriptions:{},fulfillment:{},rewards:{},isHidden:{},isDone:!1};const o=JSON.parse(i(e[t].code,26-s));for(let e=0;e<h.length;e++)switch(h[e]){case 0:n.iD=o[e];break;case 1:n.pictures=o[e];break;case 2:n.icons=o[e];break;case 3:n.titles=o[e];break;case 4:n.descriptions=o[e];break;case 5:n.isDone=o[e];break;case 6:n.isHidden=o[e];break;case 7:n.rewards=o[e];break;case 8:n.fulfillment=o[e]}d.push(n)}return d}}function x(){if(!w||null==w)return!1;if(w.isHidden)return!1;for(const e in w.rewards)if(0!==w.rewards[e].length)return!0;return!1}function T(e,t){const i=e;let n,o,c,a;return i.isDone?(n=i.icons.unlockIco,o=i.pictures.unlockPic,c="Small"===t?i.titles.unlockSmallT:i.titles.unlockBigT,a="Small"===t?i.descriptions.unlockSmallD:i.descriptions.unlockBigD):i.isHidden?(n=F(i.icons.hiddenIco)?d.hiddenDefIco:i.icons.hiddenIco,o=F(i.pictures.hiddenPic)?d.hiddenDefPic:i.pictures.hiddenPic,"Small"===t?(c=F(i.titles.lockSmallT)?d.hiddenDefSmallT:i.titles.lockSmallT,a=F(i.descriptions.lockSmallD)?d.hiddenDefSmallD:i.descriptions.lockSmallD):(c=F(i.titles.lockBigT)?d.hiddenDefBigT:i.titles.lockBigT,a=F(i.descriptions.lockBigD)?d.hiddenDefBigD:i.descriptions.lockBigD)):(n=F(i.icons.lockIco)?i.icons.unlockIco:i.icons.lockIco,o=F(i.pictures.lockPic)?i.pictures.unlockPic:i.pictures.lockPic,"Small"===t?(c=F(i.titles.lockSmallT)?i.titles.unlockSmallT:i.titles.lockSmallT,a=F(i.descriptions.lockSmallD)?i.descriptions.unlockSmallD:i.descriptions.lockSmallD):(c=F(i.titles.lockBigT)?i.titles.unlockBigT:i.titles.lockBigT,a=F(i.descriptions.lockBigD)?i.descriptions.unlockBigD:i.descriptions.lockBigD)),{currentIcon:n,currentPicture:o,currentTitle:c,currentDescription:a}}function F(e){return""===e||"0"===e||e<1}function R(){let e=0;if(!w||null==w)return 0;if(w.isHidden)return 0;for(const t in w.fulfillment)w.fulfillment[t].isActive&&e++;return e}function M(){const e=w;let t,n;return e.isDone?(t=e.icons.unlockIco,n=e.pictures.unlockPic):e.isHidden?(t=F(e.icons.hiddenIco)?d.hiddenDefIco:e.icons.hiddenIco,n=F(e.pictures.hiddenPic)?d.hiddenDefPic:e.pictures.hiddenPic):(t=F(e.icons.lockIco)?e.icons.unlockIco:e.icons.lockIco,n=F(e.pictures.lockPic)?e.pictures.unlockPic:e.pictures.lockPic),i?""!==n:""!==t&&0!==t}function H(e){if(S){let t=!1;for(const i of A)if(i===e){t=!0;break}t||(A.push(e),function e(){(t=100,new Promise(function(e,i){setTimeout(function(){e()},t)})).then(function(){if(A.length>0&&S)e();else if(A.length>0&&!S){const t=A.splice(0,1)[0];V(t),A.length>0&&e()}else A.length}).catch(function(){console.warn("WD_Achievements: Error in popUp Listener!")});var t}())}else V(e)}function V(e){S=!0,""!==m&&AudioManager.playSe({name:m,volume:90,pitch:100,pan:0}),y=e;const t=SceneManager._scene,i=new Rectangle((Graphics.boxWidth-350)/2,-110,350,110);t._WDApopWindow=new K(i),t.addWindow(t._WDApopWindow)}function P(e){return new Promise(function(t,i){setTimeout(function(){t()},1e3*e)})}function N(e){for(const t of e.rewards.achiExpRew)if(!t.isCollected){t.isCollected=!0;for(let e=1;e<$dataActors.length;e++)$gameActors.actor(e).gainExp(t.unlockExp)}for(const t of e.rewards.achiGoldRew)t.isCollected||(t.isCollected=!0,$gameParty.gainGold(t.unlockGold));for(const t of e.rewards.achiItemRew)t.unlockItem>0&&!t.isCollected&&(t.isCollected=!0,$gameParty.gainItem($dataItems[t.unlockItem],t.quantity));for(const t of e.rewards.achiWeaponRew)t.unlockWeapon>0&&!t.isCollected&&(t.isCollected=!0,$gameParty.gainItem($dataWeapons[t.unlockWeapon],t.quantity));for(const t of e.rewards.achiArmorRew)t.unlockArmor>0&&!t.isCollected&&(t.isCollected=!0,$gameParty.gainItem($dataArmors[t.unlockArmor],t.quantity));for(const t of e.rewards.achiEventRew)t.isCollected||(t.isCollected=!0,$gameTemp.reserveCommonEvent(t.unlockId))}function E(e){let t=0;return e?(t=(Graphics.width-Graphics.boxWidth)/2,console.log("X Correction: "+t)):(t=(Graphics.height-Graphics.boxHeight)/2,console.log("Y Correction: "+t)),t}function G(e){if(!(e>=0)||isNaN(e))throw new Error("WD_Achievements: Error in the Achievement ID, invalid entry: Text or below 0");{v();let t=!1;for(const i of W)if(i.iD===e){t=!0,i.isDone||(i.isDone=!0,N(i),p&&H(i));break}t?b():console.warn("WD_Achievements: Unable to find desidered ID in Complete Achievement command")}}PluginManager.registerCommand("WD_Achievements","AddAchievement",function(e){const t=parseInt(e.id),i=JSON.parse(e.achiPic),n=JSON.parse(e.achiIco),o=JSON.parse(e.achiTitles),c=JSON.parse(e.achiDescriptions),a=function(e){let t=JSON.parse(e);for(const e in t)t[e]=JSON.parse(t[e]),t[e].isActive="true"===t[e].isActive,t[e].startVal=parseInt(t[e].startVal),t[e].targetVal=parseInt(t[e].targetVal);return t}(e.achiFulfill),l=function(e){let t=JSON.parse(e);const i={type:"Temp",set:!1};for(const e in t){t[e]=JSON.parse(t[e]);for(let n=0;n<t[e].length;n++){switch(t[e][n]=JSON.parse(t[e][n]),e){case"achiArmorRew":i.type="unlockArmor",i.set=!0;case"achiWeaponRew":i.set||(i.type="unlockWeapon",i.set=!0);case"achiItemRew":i.set||(i.type="unlockItem",i.set=!0),t[e][n].quantity=parseInt(t[e][n].quantity),t[e][n][i.type]=parseInt(t[e][n][i.type]),i.set=!1;break;case"achiExpRew":t[e][n].unlockExp=parseInt(t[e][n].unlockExp);break;case"achiGoldRew":t[e][n].unlockGold=parseInt(t[e][n].unlockGold);break;case"achiEventRew":t[e][n].unlockId=parseInt(t[e][n].unlockId),t[e][n].iconReward=parseInt(t[e][n].iconReward)}t[e][n].isCollected=!1}}return t}(e.achiRewards),r="true"===e.isHidden;for(const e in n)""===n[e]||isNaN(parseInt(n[e]))?n[e]="":n[e]=parseInt(n[e]);if(!(t>=0)||isNaN(t))throw new Error("WD_Achievements: Error in the Achievement ID, invalid entry: Text or below 0");{v();let e=!1;for(const i of W)if(i.iD===t){e=!0;break}e?console.warn("WD_Achievements: Achievement has not been added, non-unique ID used"):(W.push({iD:t,pictures:i,icons:n,titles:o,descriptions:c,fulfillment:a,rewards:l,isHidden:r,isDone:!1}),b())}}),PluginManager.registerCommand("WD_Achievements","completeAchievement",function(e){G(parseInt(e.id))}),PluginManager.registerCommand("WD_Achievements","dehiddenAchievement",function(e){const t=parseInt(e.id);if(!(t>=0)||isNaN(t))throw new Error("WD_Achievements: Error in the Achievement ID, invalid entry: Text or below 0");{v();let e=!1;for(const i of W)if(i.iD===t){e=!0,i.isHidden=!1;break}e?b():console.warn("WD_Achievements: Unable to find desidered ID in Remove Hidden from Achievement command")}}),PluginManager.registerCommand("WD_Achievements","rehiddenAchievement",function(e){const t=parseInt(e.id);if(!(t>=0)||isNaN(t))throw new Error("WD_Achievements: Error in the Achievement ID, invalid entry: Text or below 0");{v();let e=!1;for(const i of W)if(i.iD===t){e=!0,i.isHidden=!0;break}e?b():console.warn("WD_Achievements: Unable to find desidered ID in Remove Hidden from Achievement command")}}),PluginManager.registerCommand("WD_Achievements","undoneAll",function(e){v();for(const e of W)e.isDone=!1;b()}),PluginManager.registerCommand("WD_Achievements","dataWipe",function(e){W=[],b()}),PluginManager.registerCommand("WD_Achievements","showLoadedAchi",function(e){v(),console.log("WD_Achievements: Here is the list of the current loaded Achievements"),console.dir(W)}),PluginManager.registerCommand("WD_Achievements","openAchi",function(e){SceneManager.push($)}),PluginManager.registerCommand("WD_Achievements","changeFulfillment",function(e){const t=parseInt(e.id),i=parseInt(e.ful1),n=parseInt(e.ful2),o=parseInt(e.ful3);if(!(t>=0)||isNaN(t))throw new Error("WD_Achievements: Error in the Achievement ID, invalid entry: Text or below 0");{v();let e=!1;for(const c of W)if(c.iD===t){if(e=!0,c.fulfillment.achiFulfill1.isActive||c.fulfillment.achiFulfill1.isActive||c.fulfillment.achiFulfill1.isActive){c.fulfillment.achiFulfill1.startVal=c.fulfillment.achiFulfill1.startVal+i,c.fulfillment.achiFulfill1.startVal<0?c.fulfillment.achiFulfill1.startVal=0:c.fulfillment.achiFulfill1.startVal=c.fulfillment.achiFulfill1.startVal,c.fulfillment.achiFulfill1.startVal>c.fulfillment.achiFulfill1.targetVal?c.fulfillment.achiFulfill1.startVal=c.fulfillment.achiFulfill1.targetVal:c.fulfillment.achiFulfill1.startVal=c.fulfillment.achiFulfill1.startVal,c.fulfillment.achiFulfill2.startVal=c.fulfillment.achiFulfill2.startVal+n,c.fulfillment.achiFulfill2.startVal<0?c.fulfillment.achiFulfill2.startVal=0:c.fulfillment.achiFulfill2.startVal=c.fulfillment.achiFulfill2.startVal,c.fulfillment.achiFulfill2.startVal>c.fulfillment.achiFulfill2.targetVal?c.fulfillment.achiFulfill2.startVal=c.fulfillment.achiFulfill2.targetVal:c.fulfillment.achiFulfill2.startVal=c.fulfillment.achiFulfill2.startVal,c.fulfillment.achiFulfill3.startVal=c.fulfillment.achiFulfill3.startVal+o,c.fulfillment.achiFulfill3.startVal<0?c.fulfillment.achiFulfill3.startVal=0:c.fulfillment.achiFulfill3.startVal=c.fulfillment.achiFulfill3.startVal,c.fulfillment.achiFulfill3.startVal>c.fulfillment.achiFulfill3.targetVal?c.fulfillment.achiFulfill3.startVal=c.fulfillment.achiFulfill3.targetVal:c.fulfillment.achiFulfill3.startVal=c.fulfillment.achiFulfill3.startVal;const e=(c.fulfillment.achiFulfill1.isActive?1:0)+(c.fulfillment.achiFulfill2.isActive?1:0)+(c.fulfillment.achiFulfill3.isActive?1:0);let t=0;c.fulfillment.achiFulfill1.isActive&&c.fulfillment.achiFulfill1.startVal===c.fulfillment.achiFulfill1.targetVal&&t++,c.fulfillment.achiFulfill2.isActive&&c.fulfillment.achiFulfill2.startVal===c.fulfillment.achiFulfill2.targetVal&&t++,c.fulfillment.achiFulfill3.isActive&&c.fulfillment.achiFulfill3.startVal===c.fulfillment.achiFulfill3.targetVal&&t++,t===e&&(c.isDone||(c.isDone=!0,N(c),p&&H(c)));break}e=!1,console.warn("WD_Achievements: Selected achievement for fulfillment changes has no fulfillment rules active!");break}e?b():console.warn("WD_Achievements: Unable to find desidered ID in Remove Hidden from Achievement command")}});let O=Scene_Title.prototype.createCommandWindow;Scene_Title.prototype.createCommandWindow=function(){O.call(this),r&&this._commandWindow.setHandler("achievements",this.commandWDAchi.bind(this))};let B=Window_TitleCommand.prototype.makeCommandList;Window_TitleCommand.prototype.makeCommandList=function(){B.call(this),r&&this.addCommand(h,"achievements")},Scene_Title.prototype.commandWindowRect=function(){const e=$dataSystem.titleCommandWindow.offsetX,t=$dataSystem.titleCommandWindow.offsetY,i=this.mainCommandWidth(),n=this.calcWindowHeight(f,!0),o=(Graphics.boxWidth-i)/2+e,c=Graphics.boxHeight-n-96+t;return new Rectangle(o,c,i,n)},Scene_Title.prototype.commandWDAchi=function(){this._commandWindow.close(),SceneManager.push($)};const q=Window_MenuCommand.prototype.addOriginalCommands;Window_MenuCommand.prototype.addOriginalCommands=function(){q.call(this),s&&this.addCommand(h,"WD_AchiMenu",!0)};const z=Scene_Menu.prototype.createCommandWindow;function $(){this.initialize(...arguments)}function J(){this.initialize(...arguments)}function U(){this.initialize(...arguments)}function j(){this.initialize(...arguments)}function K(){this.initialize(...arguments)}Scene_Menu.prototype.createCommandWindow=function(){z.call(this),s&&this._commandWindow.setHandler("WD_AchiMenu",this.commandWDachiMenu.bind(this))},Scene_Menu.prototype.commandWDachiMenu=function(){SceneManager.push($)},$.prototype=Object.create(Scene_MenuBase.prototype),$.prototype.constructor=$,$.prototype.initialize=function(){Scene_MenuBase.prototype.initialize.call(this),v()},$.prototype.create=function(){Scene_MenuBase.prototype.create.call(this),this.createAchiShowroomWindow()},$.prototype.createAchiShowroomWindow=function(){const e=this.achiShowroomWindowRect();this._achiShowroomWindow=new J(e),this._achiShowroomWindow.setHandler("ok",this.onAchiShowroomOk.bind(this)),this._achiShowroomWindow.setHandler("cancel",this.onAchiShowroomCancel.bind(this)),this.addWindow(this._achiShowroomWindow)},$.prototype.achiShowroomWindowRect=function(){const e=.1*Graphics.boxWidth,t=.1*Graphics.boxHeight,i=.8*Graphics.boxWidth,n=.8*Graphics.boxHeight;return new Rectangle(e,t,i,n)},$.prototype.onAchiShowroomOk=function(){I=!1,function(){for(const e of k)SceneManager._scene.removeChild(e);k=[]}(),this.createAchiInfoWindow(),x()&&this.createAchiRewardWindow(),D=this._achiShowroomWindow.index(),this._achiShowroomWindow.destroy()},$.prototype.onAchiShowroomCancel=function(){this.popScene()},$.prototype.createAchiInfoWindow=function(){const e=x(),t=this.achiInfoWindowRect(e);this._achiInfoWindow=new U(t),this._achiInfoWindow.setHandler("cancel",this.onAchiInfoCancel.bind(this)),this.addWindow(this._achiInfoWindow)},$.prototype.achiInfoWindowRect=function(e){const t=M()?0:.1,i=.1*Graphics.boxWidth,n=e?.1*Graphics.boxHeight:.25*Graphics.boxHeight,o=.8*Graphics.boxWidth,c=Graphics.boxHeight*(.35+.1*R()-t);return new Rectangle(i,n,o,c)},$.prototype.createAchiRewardWindow=function(){const e=this.achiRewardWindowRect();this._achiRewardWindow=new j(e),this._achiRewardWindow.setHandler("ok",this.onRewardOk.bind(this)),this._achiRewardWindow.setHandler("cancel",this.onAchiInfoCancel.bind(this)),this.addWindow(this._achiRewardWindow)},$.prototype.achiRewardWindowRect=function(){const e=M()?0:.1,t=.1*Graphics.boxWidth,i=Graphics.boxHeight*(.45+.1*R()-e),n=.8*Graphics.boxWidth,o=Graphics.boxHeight*(.45-.1*R()+e);return new Rectangle(t,i,n,o)},$.prototype.onAchiInfoCancel=function(){I||(I=!0,function(){for(const e of _)SceneManager._scene.removeChild(e);_=[]}(),this.createAchiShowroomWindow(),this._achiInfoWindow.destroy(),x()&&this._achiRewardWindow.destroy(),w=void 0,this._achiShowroomWindow.select(D),this._achiShowroomWindow.activate())},$.prototype.onRewardOk=function(){this._achiRewardWindow.activate()},SceneManager.Scene_WDAchi=$,J.prototype=Object.create(Window_Selectable.prototype),J.prototype.constructor=J,J.prototype.initialize=function(e){Window_Scrollable.prototype.initialize.call(this,e),this._index=0,this._cursorFixed=!1,this._cursorAll=!1,this._helpWindow=null,this._handlers={},this._doubleTouch=!1,this._canRepeat=!0,this.paint(),this.activate()},J.prototype.maxItems=function(){return W.length},J.prototype.drawItem=function(e){const t=W[e],n=this.itemRect(e),l=T(t,"Small"),r=l.currentIcon,s=l.currentPicture,h=l.currentTitle,d=l.currentDescription;let u=0;if(i){if(""!==s){let e=new Sprite(ImageManager.loadPicture(s));e.x=this.x+n.x+24+E(!0),e.y=this.y+n.y+30+E(!1),t.isDone||t.isHidden||!o||(e._colorTone=[c,c,c,a],e._updateColorFilter()),SceneManager._scene.addChild(e),k.push(e),u=e.width+56}}else""!==r&&0!==r&&(this.drawIcon(r,n.x+16,n.y+24),u=48);t.isDone||this.changeTextColor("#696969"),this.drawText(h,n.x+u,n.y+8,n.width-u-8,"center"),this.drawText(d,n.x+u,n.y+40,n.width-u-8,"center"),this.resetTextColor()},J.prototype.maxCols=function(){return 2},J.prototype.itemHeight=function(){return Window_Scrollable.prototype.itemHeight.call(this)+48},J.prototype.processOk=function(){if(this.isCurrentItemEnabled()){const e=this.index();w=W[e],this.playOkSound(),this.updateInputData(),this.deactivate(),this.callOkHandler()}else this.playBuzzerSound()},U.prototype=Object.create(Window_Base.prototype),U.prototype.constructor=U,U.prototype.initialize=function(e){Window_Base.prototype.initialize.call(this,e),this._handlers={},this.drawAchievementInformations()},U.prototype.drawAchievementInformations=function(){const e=T(w,"Big"),t=e.currentIcon,n=e.currentPicture,l=e.currentTitle,r=e.currentDescription,s=R();let h=0;if(i){if(""!==n){let e=new Sprite(ImageManager.loadPicture(n));e.x=this.x+(this.contentsWidth()-e.width)/2+E(!0),e.y=this.y+24+E(!1),w.isDone||w.isHidden||!o||(e._colorTone=[c,c,c,a],e._updateColorFilter()),SceneManager._scene.addChild(e),_.push(e),h=e.height+24+8}}else if(""!==t&&0!==t){const e=(this.contentsWidth()-ImageManager.iconWidth)/2;this.drawIcon(t,e,8),h=ImageManager.iconHeight+8+8}if(w.isDone||this.changeTextColor("#696969"),this.drawText(l,0,h,this.contentsWidth(),"center"),this.drawText(r,0,h+64,this.contentsWidth(),"center"),s>0&&!w.isHidden){const e=w.fulfillment;let t=[];for(const i in e)e[i].isActive&&t.push(i);for(let i=0;i<t.length;i++){const n=t[i];if(this.drawText(e[n].description,5,h+128+64*i,this.contentsWidth()/2-10,"center"),"gauge"!==e[n].graphType&&"combo"!==e[n].graphType||this.drawFfBar(this.contentsWidth()/2+5,h+128+64*i,this.contentsWidth()/2-10,40,e[n].startVal,e[n].targetVal),"text"===e[n].graphType||"combo"===e[n].graphType){const t=e[n].startVal+"/"+e[n].targetVal,o="text"===e[n].graphType?"left":"center";this.drawText(t,this.contentsWidth()/2+5,h+128+64*i,this.contentsWidth()/2-10,o)}}}this.resetTextColor()},U.prototype.drawFfBar=function(e,t,i,n,o,c){const a=this.contents.outlineColor;this.contents.clearRect(e,t,i,n),this.contents.clearRect(e+1,t+1,i-2,n-2);const l=o/c>1?1:o/c,r=i*l<2?2:i*l;this.contents.fillRect(e,t,i,n,a),this.contents.fillRect(e+1,t+1,r-2,n-2,"#1AA7EC")},U.prototype.processCancel=function(){SoundManager.playCancel(),this.callCancelHandler()},U.prototype.callCancelHandler=function(){this.callHandler("cancel")},U.prototype.callHandler=function(e){this.isHandled(e)&&this._handlers[e]()},U.prototype.setHandler=function(e,t){this._handlers[e]=t},U.prototype.update=function(){this.processHandling(),this.processTouch()},U.prototype.processHandling=function(){if(this.isCancelEnabled()&&this.isCancelTriggered())return this.processCancel()},U.prototype.isCancelEnabled=function(){return this.isHandled("cancel")},U.prototype.isCancelTriggered=function(){return Input.isRepeated("cancel")},U.prototype.isHandled=function(e){return!!this._handlers[e]},U.prototype.processTouch=function(){TouchInput.isClicked()||TouchInput.isCancelled()&&this.onTouchCancel()},U.prototype.onTouchCancel=function(){this.isCancelEnabled()&&this.processCancel()},j.prototype=Object.create(Window_Selectable.prototype),j.prototype.constructor=j,j.prototype.initialize=function(e){Window_Scrollable.prototype.initialize.call(this,e),this._rewards=[],this.createRewardsList(),this._index=0,this._cursorFixed=!1,this._cursorAll=!1,this._helpWindow=null,this._handlers={},this._doubleTouch=!1,this._canRepeat=!0,this.paint(),this.activate()},j.prototype.createRewardsList=function(){let e=[];for(const t of w.rewards.achiExpRew)e.push({type:"Exp",item:"None",quantity:t.unlockExp,icon:"None"});for(const t of w.rewards.achiGoldRew)e.push({type:"Gold",item:"None",quantity:t.unlockGold,icon:"None"});for(const t of w.rewards.achiItemRew)t.unlockItem>0&&e.push({type:"Item",item:t.unlockItem,quantity:t.quantity,icon:"None"});for(const t of w.rewards.achiWeaponRew)t.unlockWeapon>0&&e.push({type:"Weapon",item:t.unlockWeapon,quantity:t.quantity,icon:"None"});for(const t of w.rewards.achiArmorRew)t.unlockArmor>0&&e.push({type:"Armor",item:t.unlockArmor,quantity:t.quantity,icon:"None"});for(const t of w.rewards.achiEventRew)e.push({type:"Event",item:t.textReward,quantity:t.unlockId,icon:t.iconReward});this._rewards=e},j.prototype.maxItems=function(){return this._rewards.length},j.prototype.drawItem=function(e){const t=this._rewards[e],i=this.itemRect(e);switch(t.type){case"Exp":const e=TextManager.exp;this.drawCurrencyValue(t.quantity,e,i.x+10,i.y,i.width-20);break;case"Gold":const n=TextManager.currencyUnit;this.drawCurrencyValue(t.quantity,n,i.x+10,i.y,i.width-20);break;case"Item":const o=$dataItems[t.item];this.drawItemName(o,i.x+10,i.y,i.width-20);break;case"Weapon":const c=$dataWeapons[t.item];this.drawItemName(c,i.x+10,i.y,i.width-20);break;case"Armor":const a=$dataArmors[t.item];this.drawItemName(a,i.x+10,i.y,i.width-20);break;case"Event":this.drawEventModName(t,i.x+10,i.y,i.width-20)}},j.prototype.maxCols=function(){return l},j.prototype.drawEventModName=function(e,t,i,n){if(e){const o=i+(this.lineHeight()-ImageManager.iconHeight)/2,c=ImageManager.iconWidth+4,a=Math.max(0,n-c);this.resetTextColor(),this.drawIcon(e.icon,t,o),this.drawText(e.item,t+c,i,a)}},K.prototype=Object.create(Window_Base.prototype),K.prototype.constructor=K,K.prototype.initialize=function(e){Window_Base.prototype.initialize.call(this,e),this.infoWrite(),this.popUp(-109)},K.prototype.infoWrite=function(){const e=T(y,"Small"),n=e.currentIcon,l=e.currentPicture,r=e.currentTitle;let s=0;if(i){if(""!==l){let e=new Sprite(ImageManager.loadPicture(l));e.x=5,e.y=36,y.isDone||y.isHidden||!o||(e._colorTone=[c,c,c,a],e._updateColorFilter()),this.addInnerChild(e),s=e.width+25}}else""!==n&&0!==n&&(this.drawIcon(n,10,36),s=ImageManager.iconWidth+20);this.drawText(t,0,0,this.contentsWidth(),"center"),this.drawText(r,s,36,this.contentsWidth()-s,"center")},K.prototype.popUp=function(e){const t=this;this.move(this.x,e,350,110),0===e?P(1).then(function(){t.destroy(),S=!1}).catch(function(){console.warn("WD_Achievements: Error in Window PopUp!")}):(e++,P(.01).then(function(){t.popUp(e)}).catch(function(){console.warn("WD_Achievements: Error in Window PopUp!")}))},window.WD_Interplugin_Achievements={complete:function(e){G(e)}}}();