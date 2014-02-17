var playerconfig = window.playerconfig || {};

playerconfig.Apps = (function () {
    var self = this;

    self.playerconfigApp = angular.module('playerconfigApp', ['ui.bootstrap']);
    
    self.playerconfigApp.directive('playernavi', ['$http', '$log', playernavi.init]);
    self.playerconfigApp.directive('playerinfo', ['$http', '$log', playerinfo.init]);
    
    self.playerconfigApp.controller('playerconfigController', ['$scope', '$http', '$log', playerconfigController.init]);
    
})();