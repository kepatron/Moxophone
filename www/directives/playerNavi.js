playernavi = (function () {

    return {

        init: function ($http, $log) {
            return {
                restrict: 'E',
                scope: {
                    players: '=players'
                },
                link: function (scope, element, attribs) {
                    scope.changeActivePlayer= function (player, players) {
                        for (i = 0; i < players.length; i++) {
                            players[i].active = false;
                        }
                        player.active = true;
                        $log.log(JSON.stringify(players));
                    }
                    
                },
                templateUrl: 'directives/playernavi.html'
            };
        }
        
        
    }
})();