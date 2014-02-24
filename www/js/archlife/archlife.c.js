$(document).ready( function() {
    $(".player").click( function() {
        var $player = $(this).text();
        $(".console").prepend( "<p class=\"return\">- Damage received by " + $player + ": "+ archLife.getDmg(1, $player)*(-1) + "</p>");
        $(".console").prepend( "<p class=\"return\">- Healing received by " + $player + ": "+ archLife.getLifegain(1, $player) + "</p>"); 
    });
    
    $(".addDmg").click( function() {
        var $dmg = 1;
        var $player = $(this).siblings(".player").text();
        $(".console").prepend( "<p>(" + Date.now() + "): Hitting " + $player + " with " + $dmg + " damage." + "</p>"); 
        archLife.addEntry(1, $player, "GOD", -1, false);
        
    });
    
    $(".addLife").click( function() {
        var $life = 1;
        var $player = $(this).siblings(".player").text();
        $(".console").prepend( "<p>(" + Date.now() + "): Healing " + $player + " for " + $life + " life." + "</p>"); 
        archLife.addEntry(1, $player, "GOD", 1, false);
        
    }); 
});