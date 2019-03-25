function Character(id, tag, name, health, ap, cap, isPlayer, isDefender, isEnemy, isAlive) {
    this.id = id;
    this.tag = tag;
    this.name = name;
    this.health = health;
    this.ap = ap;
    this.cap = cap;
    this.isPlayer = isPlayer;
    this.isDefender = isDefender;
    this.isEnemy = isEnemy;
    this.isAlive = isAlive;
    $(document).on("click", "#character" + this.id, () => {
        for (var i = 0; i < characters.length; i++) {
            if ((id) != characters[i].id) {
                $("#defenderslefttag").show();
                $("#playercharactertag").show();
                $("#currentdefendertag").show();
                var selector = "#character" + characters[i].id;

                $(selector).appendTo("#defendersleft");
                $(selector).attr("id", "defender" + characters[i].id);
            }
            else {
                selector = "#character" + this.id;
                $(selector).appendTo("#playercharacter");
                $(selector).attr("id", "player" + this.id);
                this.isPlayer = true;
                console.log(this.isPlayer);
            }
        }
    });
    $(document).on("click", "#defender" + this.id, () => {
        if (hasEnemy == false) {
            hasEnemy = true;
            var selector = "#defender" + this.id;
            $(selector).appendTo("#currentdefender");
            $(selector).attr("id", "enemy" + this.id);
            this.isEnemy = true;
            $("#attackbutton").show()
        }
    });
}
var Maximus = new Character("1", "maximus", "Maximus", 150, 20, 20, false, true, false, true);
var Commodus = new Character("2", "commodus", "Commodus", 100, 50, 50, false, true, false, true);
var Tigris = new Character("3", "tigris", "Tigris", 200, 25, 25, false, true, false, true);
var Germanic = new Character("4", "germanic", "Germanic King", 300, 10, 10, false, true, false, true);
var characters = [
    Maximus,
    Commodus,
    Tigris,
    Germanic
];
var Killed = 0;
var hasEnemy = false;

$("#restart").hide();
$("#attackbutton").hide();
$("#defenderslefttag").hide();
$("#playercharactertag").hide();
$("#currentdefendertag").hide();

$(".maximushealth").html("Health: " + Maximus.health);
$(".commodushealth").html("Health: " + Commodus.health);
$(".tigrishealth").html("Health: " + Tigris.health);
$(".germanichealth").html("Health: " + Germanic.health);
$("#maximusap").html("AP: " + Maximus.ap);
$("#commodusap").html("AP: " + Commodus.ap);
$("#tigrisap").html("AP: " + Tigris.ap);
$("#germanicap").html("AP: " + Germanic.ap);

$("#attackbutton").on("click", () => {
    var player;
    var enemy;
    for (var i = 0; i < characters.length; i++) {
        if (characters[i].isEnemy && characters[i].isAlive == true) {
            enemy = characters[i];
        }
        if (characters[i].isPlayer) {
            player = characters[i];
        }
    }
    console.log(player.health);
    console.log(enemy)
    if (player.health > 0 && enemy.isAlive) {
        enemy.health = enemy.health - player.ap;
        $("#message1").html("You hit " + enemy.name + " for " + player.ap);
        player.ap = Math.round(player.ap + (player.ap * .20));
        $("#" + player.tag + "ap").html("AP: " + player.ap)
        if (enemy.health > 0) {
            $("#message2").html(enemy.name + " hit you for " + enemy.cap);

            $("." + enemy.tag + "health").html("Health: " + enemy.health);
            player.health = player.health - enemy.cap;
            $("." + player.tag + "health").html("Health: " + player.health);
        }

        if (enemy.health <= 0) {
            enemy.isAlive = false;
            hasEnemy = false;
            Killed++;
            $("#enemy" + enemy.id).remove();
            $("#message1").text("You killed " + enemy.name + "!");
            $("#message2").text("Select a new enemy");
        }
    }
    if (player.health <= 0) {
        $("#message1").text("YOU LOSE!");
        $("#restart").show();
    }
    if (Killed > 2) {
        $("#message1").text(("YOU WIN!!!"));
        $("#restart").show();
    }
});

$("#restart").on("click", function() {
    window.location.reload();
});
