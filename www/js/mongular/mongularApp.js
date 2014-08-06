(function (){
    var app = angular.module('mongular', []);
    
    app.controller('moxController', function() {
        this.players = players;
    });
    
    app.controller('PlayerController', function() {
        this.player = {
            name: "",
            life: 40,
            deck: "",
            avatar: "img/new.png"
        }
        
        this.addPlayer = function(player) {
            players.push(this.player);
        };
    });
    
    var players = [
        {
            name: "Bogdan",
            life: 40,
            avatar: "img/istvan.png",
            deck: "BU Control",
            lifeEntries: [
                { time: 5, amount: 0, isCommanderDamage: 0, source: 0 },
                { time: 6, amount: -2, isCommanderDamage: 1, source: 0 },
                { time: 7, amount: 1, isCommanderDamage: 0, source: 0 },
                { time: 8, amount: -4, isCommanderDamage: 0, source: 0 }
            ],

            dmgEntries: [
                { time: 0, amount: 0, isCommanderDamage: 0, target: 0 },
                { time: 0, amount: 0, isCommanderDamage: 0, target: 0 },
                { time: 0, amount: 0, isCommanderDamage: 0, target: 0 }
            ]
            
        },
        
       {
        name: "Sultan",
        life: 11,
        avatar: "img/beekeeper.png",
        deck: "WU Annoy",
        lifeEntries: [
            { time: 1, amount: 1, isCommanderDamage: 0, source: 0 },
            { time: 2, amount: -5, isCommanderDamage: 1, source: 0 },
            { time: 3, amount: -3, isCommanderDamage: 0, source: 0 },
            { time: 4, amount: -2, isCommanderDamage: 0, source: 0 }
        ],

        dmgEntries: [
            { time: 0, amount: 0, isCommanderDamage: 0, target: 0 },
            { time: 0, amount: 0, isCommanderDamage: 0, target: 0 },
            { time: 0, amount: 0, isCommanderDamage: 0, target: 0 }
        ]

    },
               {
        name: "Ivanovitz",
        life: 17,
        avatar: "img/roon.png",
        deck: "WU Blink",
        lifeEntries: [
            { time: 9, amount: 2, isCommanderDamage: 0, source: 0 },
            { time: 10, amount: -3, isCommanderDamage: 1, source: 0 },
            { time: 11, amount: -2, isCommanderDamage: 0, source: 0 },
            { time: 12, amount: -1, isCommanderDamage: 1, source: 0 }
        ],

        dmgEntries: [
            { time: 0, amount: 0, isCommanderDamage: 0, target: 0 },
            { time: 0, amount: 0, isCommanderDamage: 0, target: 0 },
            { time: 0, amount: 0, isCommanderDamage: 0, target: 0 }
        ]

    }
    ];
})();