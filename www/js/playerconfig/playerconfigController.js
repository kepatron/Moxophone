playerconfigController = (function () {
    return {
        init: function ($scope, $http, $log) {
            $scope.playerConfig = {};
            $scope.playerConfig.players = [];
            
            var baronSegnirDeck = { name: 'Vampire deck', commander: 'Baron Segnir' };
            var alaraDeck = { name: 'Land deck', commander: 'Child of alara' };
            var istvanDeck = { name: 'Istvan deck', commander: 'Uncle istvan' };
            var beeKeeperDeck = { name: 'Bee keeper deck', commander: 'Bee keeper' };
            
            var kepa = { name: "Kepa", active: true, decks: [] };
            $scope.playerConfig.players.push(kepa);
            
            var kenu = { name: "Kenu", active: false, decks: [baronSegnirDeck, alaraDeck, istvanDeck, beeKeeperDeck] };
            $scope.playerConfig.players.push(kenu);
            
            var ilkka = { name: "Ilkka", active: false, decks: [] };
            $scope.playerConfig.players.push(ilkka);
            
            $scope.playerConfig.activePlayer = kepa;
        }
    }
})();