playerconfigController = (function () {
    return {
        init: function ($scope, $http, $log) {
            $scope.playerConfig = {};
            $scope.playerConfig.players = [];
            
            var kepa = { name: "Kepa", active: false };
            $scope.playerConfig.players.push(kepa);
            
            var kenu = { name: "Kenu", active: false  };
            $scope.playerConfig.players.push(kenu);
            
            var ilkka = { name: "Ilkka", active: false  };
            $scope.playerConfig.players.push(ilkka);
            
           
        }
    }
})();