playerinfo = (function () {

    return {

        init: function ($http, $log) {
            return {
                restrict: 'E',
                scope: {
                    player: '=player'
                },
                link: function (scope, element, attribs) {
                    
                    scope.player.newDeck = {};
                    scope.addDeckVisible = false;
                    
                    scope.addDeck = function (player) {
                        var newDeck = { name: scope.player.newDeck.name, commander: scope.player.newDeck.commander };
                        
                        scope.player.decks.push(newDeck);
                        scope.player.newDeck = {};
                        
                        scope.addDeckVisible = false;
                    }
                    scope.showAddDeck = function (){
                        scope.addDeckVisible = true;
                    }
                    scope.hideAddDeck = function () {
                        scope.addDeckVisible = false;
                    }
                    scope.deleteDeck = function (deck) {
                        var index = scope.player.decks.indexOf(deck);
                        if (index > -1) {
                            scope.player.decks.splice(index, 1);
                        }
                    }
                    
                },
                templateUrl: 'directives/playerinfo.html'
            };
        }
        
        
    }
})();