playerconfigController = (function () {
    return {
        init: function ($scope, $http, $log) {
            $scope.playerConfig = {};
            $scope.playerConfig.players = [];
            
            var baronSegnirDeck = { name: 'Vampire deck', commander: 'Baron Segnir' }
            
            var kepa = { name: "Kepa", active: true, decks: [] };
            $scope.playerConfig.players.push(kepa);
            
            var kenu = { name: "Kenu", active: false, decks: [baronSegnirDeck] };
            $scope.playerConfig.players.push(kenu);
            
            var ilkka = { name: "Ilkka", active: false, decks: [] };
            $scope.playerConfig.players.push(ilkka);
            
            $scope.playerConfig.activePlayer = kepa;
        }
    }
})();