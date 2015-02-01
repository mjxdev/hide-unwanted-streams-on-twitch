// Application start

var husot = husot || {};

husot.main = function () {
    // Run only in top frame
    if (window.top !== window.self) {
        return;
    }

    //husot.debug.cleanSettings();
    //husot.debug.setBlockedChannelsList();
    //husot.debug.setBlockedGamesList();

    husot.settings.blockedChannels = new husot.settings.BlockedItems(husot.constants.blockedChannelsSettingsKey);
    husot.settings.blockedGames = new husot.settings.BlockedItems(husot.constants.blockedGamesSettingsKey);
    husot.thumbs.streamThumbsManager = new husot.thumbs.StreamThumbsManager();
    husot.thumbs.gameThumbsManager = new husot.thumbs.GameThumbsManager();

    husot.modalDialog.initOverlay();
    husot.settings.ui.window = new husot.settings.ui.Window();
    husot.injector.addScripts();
    husot.domListener.start();
};

$(document).ready(function () {
    husot.main();
});
