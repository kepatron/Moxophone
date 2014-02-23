var archLife = {
    lastEntry: "",
    
    dmgDB: {},
    
    lifeDB: {},
    
    addEntry: function damageEntry( gameID, targetID, sourceID, deltaLife, isCommanderDamage ) {
        var entry = {
            "gameID": gameID,
            "sourceID": sourceID,
            "targetID": targetID,  
            "deltaLife": deltaLife, 
            "isCommanderDamage": isCommanderDamage
            };
        
            console.log("Adding entry.");
            console.log(entry);
            timestamp = Date.now();
        
            // Adding the entry to the database
            archLife.dmgDB[ timestamp ] = entry;
        
            // Saving the timestamp for undo()-function
            archLife.lastEntry = timestamp;
        },
    
    // Dumps the content of a specified DB-ohject to the console
    // Usage example: archLife.dump( archLife.dmgDB )
    dumpDB: function dumpDB(DB) {
            console.log("--- Beginning dump ---");
            for ( var key in DB ) {
             console.log( key );
             console.log( DB[key] );
              }
            console.log("--- --- --- --- -- ---\n");
          },
    
    // undoes the last entry
    undo: function undo() {
        console.log("--- Undoing entry ---");
        console.log(archLife.dmgDB[archLife.lastEntry]);
        delete archLife.dmgDB[archLife.lastEntry];
        console.log("---  Done undoing ---");
        archLife.lastEntry = "";
    },
        
    getDmg: function getDmg( playerID ) {
            
          }
    
};

// Manuaalisia testirivejä
setTimeout( archLife.addEntry(1, "kepa", "erno", -3, true ), 1000);
setTimeout( archLife.addEntry(1, "erno", "kepa", -2, true ), 2000);
setTimeout( archLife.addEntry(1, "ilkka", "erno", -4, true ), 3000);
archLife.dumpDB( archLife.dmgDB );
archLife.undo();
archLife.dumpDB( archLife.dmgDB );
setTimeout( archLife.addEntry(1, "erno", "ilkka", -5, true ), 4000);
archLife.dumpDB( archLife.dmgDB );
















/* Sketchwork. Ignore.

// Placeholder for amount of life loss (deltaLife < 0) or gain (deltaLife > 0)
var deltaLife = "";

// Placeholder for player object/reference. This is the player whose life total is changed (target of damage or life gaining event)
var playerID = "";

// Boolean for commander damage
var isCommanderDamage = false;

// A timestamp for the life change event
var timeStamp = "YYYYMMDDHHMMSS";

// The unique ID number for the game in progress.
var gameID = "";

// One entry in the damage register
var damageEntry = {
    "gameID": gameID,
    "sourceID": sourceID,
    "targetID": targetID,  
    "deltaLife": deltaLife, 
    "isCommanderDamage": isCommanderDamage
}

// The actual damage register object, which will be populated with damageEntry -objects which have
var archLife = {
    "20140223202300" : {
            "gameID": "001",
            "sourceID": "ERNO_TOLONEN",
            "targetID": "KIMMO_KEIPINEN",  
            "deltaLife": "-4", 
            "isCommanderDamage": false
        }
}*/
    