playerinfo = (function () {

    return {

        init: function ($http, $log) {
            return {
                restrict: 'E',
                scope: {
                    player: '=player'
                },
                link: function (scope, element, attribs) {
                    scope.addDeck = function (player, deck) {
                        
                    }
                    
                },
                templateUrl: 'directives/playerinfo.html'
            };
        }
        
        
    }
})();