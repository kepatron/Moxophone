var archLife = {
    lastEntry: "",
    
    dmgDB: {},
      
    addEntry: function damageEntry( gameID, targetID, sourceID, deltaLife, isCommanderDamage ) {
        var entry = {
            "gameID": gameID,
            "sourceID": sourceID,
            "targetID": targetID,  
            "deltaLife": deltaLife, 
            "isCommanderDamage": isCommanderDamage
            };
        
            console.log("- Adding entry");
            console.log(entry);
            console.log("");
            timestamp = Date.now();
        
            // Adding the entry to the database
            archLife.dmgDB[ timestamp ] = entry;
        
            // Saving the timestamp for undo()-function
            archLife.lastEntry = timestamp;
        },
    
    // Dumps the content of a specified DB-ohject to the console
    // Usage example: archLife.dump( archLife.dmgDB )
    dumpDB: function dumpDB(DB) {
            console.log("- Beginning dump");
            for ( var key in DB ) {
             console.log( "-- Timestamp: " + key );
             console.log( DB[key] );
             console.log( "" );
              }
            console.log("- End of dump\n");
          },
    
    // undoes the last entry
    undo: function undo() {
        console.log("--- Undoing entry: " + archLife.lastEntry);
        console.log(archLife.dmgDB[archLife.lastEntry]);
        delete archLife.dmgDB[archLife.lastEntry];
        console.log("\n");
    },
    
    // Returns the damage received by specified player in specified game.
    getDmg: function getDmg( gameID, playerID ) {
            var playerDamage = 0;
            console.log("- Fetching damage for " + playerID);
            for ( var key in archLife.dmgDB ) {
                if ( archLife.dmgDB[key].targetID == playerID && 
                archLife.dmgDB[key].gameID == gameID &&
                archLife.dmgDB[key].deltaLife < 0) {
                    console.log("-- Accumulating damage: " + archLife.dmgDB[key].deltaLife);
                    playerDamage += archLife.dmgDB[key].deltaLife;
                }
            }
            console.log("- " + playerID + " has received " + (-1) * playerDamage + " damage in game " + gameID + ".\n");
            return playerDamage;
          },
    
    // Returns the life gained by specified player in specified game.
    getLifegain: function getLifegain( gameID, playerID ) {
            var playerLifegain = 0;
            console.log("- Fetching gained life for " + playerID + " in game " + gameID);
            for ( var key in archLife.dmgDB ) {
                if ( archLife.dmgDB[key].targetID == playerID && 
                archLife.dmgDB[key].gameID == gameID &&
                archLife.dmgDB[key].deltaLife > 0) {
                    console.log("-- Accumulating lifegain: " + archLife.dmgDB[key].deltaLife);
                    playerLifegain += archLife.dmgDB[key].deltaLife;
                }
            }
            console.log("- " + playerID + " has gained " + playerLifegain + " life in game " + gameID + ".\n");
            return playerLifegain;
          },
    
    // This function returns the commander damage received.
    // Returns an object with rows like this:
    //      { <source of damage>:<total amount of damage> }
    // Takes the game ID and the target player as inputs.
    // Usage example: archLife.getCmdrDmg( 1, "ilkka")
    getCmdrDmg: function getCmdrDmg( gameID, playerID ) {
        var cmdrDmg = {};
        console.log("- Fetching commander damage for " + playerID + " in game " + gameID);
        for ( var key in archLife.dmgDB ) {
                if ( archLife.dmgDB[key].targetID == playerID && 
                archLife.dmgDB[key].gameID == gameID &&
                archLife.dmgDB[key].isCommanderDamage ) {
                    console.log("-- Gathering commander damage: " + archLife.dmgDB[key].deltaLife + " from " +  archLife.dmgDB[key].sourceID);
                    if ( cmdrDmg[archLife.dmgDB[key].sourceID] === undefined ) {
                       cmdrDmg[archLife.dmgDB[key].sourceID] = archLife.dmgDB[key].deltaLife;
                    } else {
                       cmdrDmg[archLife.dmgDB[key].sourceID] += archLife.dmgDB[key].deltaLife;
                    }
                }
        }
        console.log("- Commander damage received by " + playerID + " in gameID " + gameID + ":");
        console.log(cmdrDmg);
        return cmdrDmg;
    }
};

var gameCore = {
    // Game mode (standard (0), EDH (1), two-headed giant (2), other (3))
    gameMode: 0,
    
    // Game ID, unique, will be generated from timestamp+location (or sth)
    gameID: 0,
    
    // Player list object
    players: {}
    
};

// Manuaalisia testirivejä
setTimeout( archLife.addEntry(1, "kepa", "erno", -3, false ), 10000);
setTimeout( archLife.addEntry(1, "erno", "kepa", -2, false ), 20000);
setTimeout( archLife.addEntry(1, "ilkka", "erno", -4, true ), 30000);
archLife.dumpDB( archLife.dmgDB );
archLife.undo();
archLife.dumpDB( archLife.dmgDB );
setTimeout( archLife.addEntry(1, "erno", "ilkka", -5, true ), 40000);
setTimeout( archLife.addEntry(1, "erno", "ilkka", 3, false ), 40000);
setTimeout( archLife.addEntry(1, "erno", "kimmo", -2, true ), 40000);
setTimeout( archLife.addEntry(1, "erno", "kimmo", -3, true ), 40000);
setTimeout( archLife.addEntry(1, "erno", "kimmo", -7, true ), 40000);
setTimeout( archLife.addEntry(1, "erno", "kimmo", -7, true ), 40000);
setTimeout( archLife.addEntry(1, "erno", "erno", 3, false ), 40000);
setTimeout( archLife.addEntry(1, "erno", "erno", 2, false ), 40000);
archLife.dumpDB( archLife.dmgDB );
archLife.getDmg( 1, "erno");
archLife.getLifegain( 1, "erno");
archLife.getCmdrDmg( 1, "erno");



