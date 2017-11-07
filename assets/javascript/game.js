var Maximus = {
    name: "Maximus",
    health: 100,
    ap: 20,
    cap: 15,
    isPlayer: false,
    isDefender: true,
    isEnemy: false,
    isAlive: true,
};


var Commodus = {
    name: "Commodus",
    health: 100,
    ap: 20,
    cap: 15,
    isPlayer: false,
    isDefender: true,
    isEnemy: false,
    isAlive: true,
};

var Tigris = {
    name: "Tigris of Gual",
    health: 100,
    ap: 20,
    cap: 15,
    isPlayer: false,
    isDefender: true,
    isEnemy: false,
    isAlive: true,
};

var Germanic = {
    name: "Germanic King",
    health: 100,
    ap: 20,
    cap: 15,
    isPlayer: false,
    isDefender: true,
    isEnemy: false,
    isAlive: true,
};
var Killed = 0;


$("#restart").hide()

if (Killed === 3) {
    $("#Message1").text(("YOU WIN!!!"))
    $("#restart").show()
    console.log("You win")
}

$("#character1").on("click", function() {
    $("#character1").appendTo("#playercharacter")
    $("#character2").appendTo("#defendersleft")
    $("#character3").appendTo("#defendersleft")
    $("#character4").appendTo("#defendersleft")
    $("#character1").attr("id", "player1");
    $("#character2").attr("id", "defender2");
    $("#character3").attr("id", "defender3");
    $("#character4").attr("id", "defender4");
    Maximus.isPlayer = true;
    console.log("Maximus is player " + Maximus.isPlayer);

});

$("#character2").on("click", function() {
    $("#character2").appendTo("#playercharacter")
    $("#character1").appendTo("#defendersleft")
    $("#character3").appendTo("#defendersleft")
    $("#character4").appendTo("#defendersleft")
    $("#character2").attr("id", "player2");
    $("#character1").attr("id", "defender1");
    $("#character3").attr("id", "defender3");
    $("#character4").attr("id", "defender4");
    Commodus.isPlayer = true;
    console.log("Commodus is player " + Commodus.isPlayer);
});

$("#character3").on("click", function() {
    $("#character3").appendTo("#playercharacter")
    $("#character2").appendTo("#defendersleft")
    $("#character1").appendTo("#defendersleft")
    $("#character4").appendTo("#defendersleft")
    $("#character3").attr("id", "player3");
    $("#character1").attr("id", "defender1");
    $("#character2").attr("id", "defender2");
    $("#character4").attr("id", "defender4");
    Tigris.isPlayer = true;
    console.log("Tigris is player " + Tigris.isPlayer);

});

$("#character4").on("click", function() {
    $("#character4").appendTo("#playercharacter")
    $("#character2").appendTo("#defendersleft")
    $("#character3").appendTo("#defendersleft")
    $("#character1").appendTo("#defendersleft")
    $("#character4").attr("id", "player4");
    $("#character1").attr("id", "defender1");
    $("#character3").attr("id", "defender3");
    $("#character2").attr("id", "defender2");
    Germanic.isPlayer = true;
    console.log("Germanic is player " + Germanic.isPlayer);
});


$(document).on('click', '#defender2', function() {
    $("#defender2").appendTo("#currentdefender")
    $("#defender2").attr("id", "enemy2");
    Commodus.isEnemy = true;
    Commodus.isPlayer = false;
    console.log(Commodus.isEnemy);
});

$(document).on('click', '#defender1', function() {
    $("#defender1").appendTo("#currentdefender")
    $("#defender1").attr("id", "enemy1");
    Maximus.isEnemy = true;
    Maximus.isPlayer = false;
});

$(document).on('click', '#defender3', function() {
    $("#defender3").appendTo("#currentdefender")
    $("#defender3").attr("id", "enemy3");
    Tigris.isEnemy = true;
    Tigris.isPlayer = false;
    console.log(Commodus.isEnemy);
    console.log(Tigris.isEnemy);
});

$(document).on('click', '#defender4', function() {
    $("#defender4").appendTo("#currentdefender")
    $("#defender4").attr("id", "enemy4");
    Germanic.isEnemy = true;
    Germanic.isPlayer = false;
});

$(".maximus").html(Maximus.name)
$(".maximushealth").html("Health: " + Maximus.health)

$(".commodus").html(Commodus.name)
$(".commodushealth").html("Health: " + Commodus.health)

$(".tigris").html(Tigris.name)
$(".tigrishealth").html("Health: " + Tigris.health)

$(".germanic").html(Germanic.name)
$(".germanichealth").html("Health: " + Germanic.health)

console.log("Commodus is enemy" + Commodus.isEnemy);
console.log("Tigris is enemy" + Tigris.isEnemy);
console.log("Germanic is enemy" + Germanic.isEnemy);
console.log("Maximus is player " + Maximus.isPlayer)

$("#attackbutton").on("click", function() {
    if ((Maximus.isPlayer === true) && (Commodus.isEnemy === true) && (Maximus.health > 0) && (Commodus.isAlive === true)) {
        Commodus.health = Commodus.health - Maximus.ap;
        $("#message1").html("You hit Commodus for " + Maximus.ap)
        $("#message2").html("Commodus hit you for " + Commodus.cap)
        Maximus.ap = Maximus.ap + Maximus.ap;
        $(".commodushealth").html("Health: " + Commodus.health);
        Maximus.health = Maximus.health - Commodus.cap;
        $(".maximushealth").html("Health: " + Maximus.health);
        console.log("Your attacking Commodus")
        if ((Commodus.isEnemy === true) && (Commodus.health <= 0)) {
            Commodus.isAlive = false;
            Killed++;
            $("#enemy2").remove()
            $("#message1").text("You killed Commodus!")
            $("#message2").text("Select a new enemy")
            console.log(Killed);
            console.log(Commodus.isAlive);
        }
    }


    if ((Maximus.isPlayer === true) && (Tigris.isEnemy === true) && (Maximus.health > 0) && (Tigris.isAlive === true)) {
        Tigris.health = Tigris.health - Maximus.ap;
        $("#message1").html("You hit Tigris for " + Maximus.ap)
        $("#message2").html("Tigris hit you for " + Tigris.cap)
        Maximus.ap = Maximus.ap + Maximus.ap;
        $(".tigrishealth").html("Health: " + Tigris.health);
        Maximus.health = Maximus.health - Tigris.cap;
        $(".maximushealth").html("Health: " + Maximus.health);
        console.log("Your attacking Tigris")
        if ((Tigris.isEnemy === true) && (Tigris.health <= 0)) {
            Tigris.isAlive = false;
            Killed++;
            $("#enemy3").remove()
            $("#message1").text("You killed Tigris!")
            $("#message2").text("Select a new enemy")
            console.log(Killed);
            console.log(Tigris.isAlive);
        }
    }

    if ((Maximus.isPlayer === true) && (Germanic.isEnemy === true) && (Maximus.health > 0) && (Germanic.isAlive === true)) {
        Germanic.health = Germanic.health - Maximus.ap;
        $("#message1").html("You hit the Germanic King for " + Maximus.ap)
        $("#message2").html("The Germanic King hit you for " + Germanic.cap)
        Maximus.ap = Maximus.ap + Maximus.ap;
        $(".germanichealth").html("Health: " + Germanic.health);
        Maximus.health = Maximus.health - Germanic.cap;
        $(".maximushealth").html("Health: " + Maximus.health);
        console.log("Your attacking the Germanic King")
        if ((Germanic.isEnemy === true) && (Germanic.health <= 0)) {
            Germanic.isAlive = false;
            Killed++;
            $("#enemy4").remove()
            $("#message1").text("You killed the Germanic King!")
            $("#message2").text("Select a new enemy")
            console.log(Killed);
            console.log(Germanic.isAlive);
        }
    }

    if ((Maximus.isPlayer === true) && (Maximus.health <= 0)) {
        $("#message1").text("YOU LOSE!")
        $("#restart").show()
        console.log("Commodus lost")
    }

    if ((Commodus.isPlayer === true) && (Germanic.isEnemy === true) && (Commodus.health > 0) && (Germanic.isAlive === true)) {
        Germanic.health = Germanic.health - Commodus.ap;
        $("#message1").html("You hit the Germanic King for " + Commodus.ap)
        $("#message2").html("The Germanic King hit you for " + Commodus.cap)
        Commodus.ap = Commodus.ap + Commodus.ap;
        $(".germanichealth").html("Health: " + Germanic.health);
        Commodus.health = Commodus.health - Germanic.cap;
        $(".commodushealth").html("Health: " + Commodus.health);
        console.log("Your attacking the Germanic King")
        if ((Germanic.isEnemy === true) && (Germanic.health <= 0)) {
            Germanic.isAlive = false;
            Killed++;
            $("#enemy4").remove()
            $("#message1").text("You killed the Germanic King!")
            $("#message2").text("Select a new enemy")
            console.log(Killed);
            console.log(Germanic.isAlive);
        }
    }

    if ((Commodus.isPlayer === true) && (Tigris.isEnemy === true) && (Commodus.health > 0) && (Tigris.isAlive === true)) {
        Tigris.health = Tigris.health - Commodus.ap;
        $("#message1").html("You hit Tigris for " + Commodus.ap)
        $("#message2").html("Tigris hit you for " + Tigris.cap)
        Commodus.ap = Commodus.ap + Commodus.ap;
        $(".tigrishealth").html("Health: " + Tigris.health);
        Commodus.health = Commodus.health - Tigris.cap;
        $(".commodushealth").html("Health: " + Commodus.health);
        console.log("Your attacking Tigris")
        if ((Tigris.isEnemy === true) && (Tigris.health <= 0)) {
            Tigris.isAlive = false;
            Killed++;
            $("#enemy3").remove()
            $("#message1").text("You killed Tigris!")
            $("#message2").text("Select a new enemy")
            console.log(Killed);
            console.log(Tigris.isAlive);
        }
    }

    if ((Commodus.isPlayer === true) && (Maximus.isEnemy === true) && (Commodus.health > 0) && (Maximus.isAlive === true)) {
        Maximus.health = Maximus.health - Commodus.ap;
        $("#message1").html("You hit Maximus for " + Commodus.ap)
        $("#message2").html("Maximus hit you for " + Maximus.cap)
        Commodus.ap = Commodus.ap + Commodus.ap;
        $(".maximushealth").html("Health: " + Maximus.health);
        Commodus.health = Commodus.health - Maximus.cap;
        $(".commodushealth").html("Health: " + Commodus.health);
        console.log("Your attacking Maximus")
        if ((Maximus.isEnemy === true) && (Maximus.health <= 0)) {
            Maximus.isAlive = false;
            Killed++;
            $("#enemy1").remove()
            $("#message1").text("You killed Tigris!")
            $("#message2").text("Select a new enemy")
            console.log(Killed);
            console.log(Maximus.isAlive);
        }
    }

    if ((Commodus.isPlayer === true) && (Commodus.health <= 0)) {
        $("#message1").text("YOU LOSE!")
        $("#restart").show()
        console.log("Commodus lost")
    }

    if ((Tigris.isPlayer === true) && (Maximus.isEnemy === true) && (Tigris.health > 0) && (Maximus.isAlive === true)) {
        Maximus.health = Maximus.health - Tigris.ap;
        $("#message1").html("You hit Maximus for " + Tigris.ap)
        $("#message2").html("Maximus hit you for " + Maximus.cap)
        Tigris.ap = Tigris.ap + Tigris.ap;
        $(".maximushealth").html("Health: " + Maximus.health);
        Tigris.health = Tigris.health - Maximus.cap;
        $(".tigrishealth").html("Health: " + Tigris.health);
        console.log("Your attacking Maximus")
        if ((Maximus.isEnemy === true) && (Maximus.health <= 0)) {
            Maximus.isAlive = false;
            Killed++;
            $("#enemy1").remove()
            $("#message1").text("You killed Maximus!")
            $("#message2").text("Select a new enemy")
            console.log(Killed);
            console.log(Maximus.isAlive);
        }
    }

    if ((Tigris.isPlayer === true) && (Commodus.isEnemy === true) && (Tigris.health > 0) && (Commodus.isAlive === true)) {
        Commodus.health = Commodus.health - Tigris.ap;
        $("#message1").html("You hit Commodus for " + Tigris.ap)
        $("#message2").html("Commodus hit you for " + Commodus.cap)
        Tigris.ap = Tigris.ap + Tigris.ap;
        $(".commodushealth").html("Health: " + Commodus.health);
        Tigris.health = Tigris.health - Commodus.cap;
        $(".tigrishealth").html("Health: " + Tigris.health);
        console.log("Your attacking Commodus")
        if ((Commodus.isEnemy === true) && (Commodus.health <= 0)) {
            Commodus.isAlive = false;
            Killed++;
            $("#enemy2").remove()
            $("#message1").text("You killed Commodus!")
            $("#message2").text("Select a new enemy")
            console.log(Killed);
            console.log(Commodus.isAlive);
        }
    }

    if ((Tigris.isPlayer === true) && (Germanic.isEnemy === true) && (Tigris.health > 0) && (Germanic.isAlive === true)) {
        Germanic.health = Germanic.health - Tigris.ap;
        $("#message1").html("You hit the Germanic for " + Tigris.ap)
        $("#message2").html("The Germanic hit you for " + Germanic.cap)
        Tigris.ap = Tigris.ap + Tigris.ap;
        $(".germanichealth").html("Health: " + Germanic.health);
        Tigris.health = Tigris.health - Germanic.cap;
        $(".tigrishealth").html("Health: " + Tigris.health);
        console.log("Your attacking Germanic")
        if ((Germanic.isEnemy === true) && (Germanic.health <= 0)) {
            Germanic.isAlive = false;
            Killed++;
            $("#enemy4").remove()
            $("#message1").text("You killed the Germanic King!")
            $("#message2").text("Select a new enemy")
            console.log(Killed);
            console.log(Germanic.isAlive);
        }
    }

    if ((Tigris.isPlayer === true) && (Tigris.health <= 0)) {
        $("#message1").text("YOU LOSE!")
        $("#restart").show()
        console.log("Tigris lost")
    }

    if ((Germanic.isPlayer === true) && (Maximus.isEnemy === true) && (Germanic.health > 0) && (Maximus.isAlive === true)) {
        Maximus.health = Maximus.health - Germanic.ap;
        $("#message1").html("You hit Maximus for " + Germanic.ap)
        $("#message2").html("Maximus hit you for " + Maximus.cap)
        Germanic.ap = Germanic.ap + Germanic.ap;
        $(".maximushealth").html("Health: " + Maximus.health);
        Germanic.health = Germanic.health - Maximus.cap;
        $(".germanichealth").html("Health: " + Germanic.health);
        console.log("Your attacking Maximus")
        if ((Maximus.isEnemy === true) && (Maximus.health <= 0)) {
            Maximus.isAlive = false;
            Killed++;
            $("#enemy1").remove()
            $("#message1").text("You killed Maximus!")
            $("#message2").text("Select a new enemy")
            console.log(Killed);
            console.log(Maximus.isAlive);
        }
    }

    if ((Germanic.isPlayer === true) && (Commodus.isEnemy === true) && (Germanic.health > 0) && (Commodus.isAlive === true)) {
        Commodus.health = Commodus.health - Germanic.ap;
        $("#message1").html("You hit Commodus for " + Germanic.ap)
        $("#message2").html("Commodus hit you for " + Commodus.cap)
        Germanic.ap = Germanic.ap + Germanic.ap;
        $(".commodushealth").html("Health: " + Commodus.health);
        Germanic.health = Germanic.health - Commodus.cap;
        $(".germanichealth").html("Health: " + Germanic.health);
        console.log("Your attacking Commodus")
        if ((Commodus.isEnemy === true) && (Commodus.health <= 0)) {
            Commodus.isAlive = false;
            Killed++;
            $("#enemy2").remove()
            $("#message1").text("You killed Commodus!")
            $("#message2").text("Select a new enemy")
            console.log(Killed);
            console.log(Commodus.isAlive);
        }
    }

    if ((Germanic.isPlayer === true) && (Tigris.isEnemy === true) && (Germanic.health > 0) && (Tigris.isAlive === true)) {
        Tigris.health = Tigris.health - Germanic.ap;
        $("#message1").html("You hit Tigris for " + Germanic.ap)
        $("#message2").html("Tigris hit you for " + Tigris.cap)
        Germanic.ap = Germanic.ap + Germanic.ap;
        $(".tigrishealth").html("Health: " + Tigris.health);
        Germanic.health = Germanic.health - Tigris.cap;
        $(".germanichealth").html("Health: " + Germanic.health);
        console.log("Your attacking Tigris")
        if ((Tigris.isEnemy === true) && (Tigris.health <= 0)) {
            Tigris.isAlive = false;
            Killed++;
            $("#enemy3").remove()
            $("#message1").text("You killed Tigris!")
            $("#message2").text("Select a new enemy")
            console.log(Killed);
            console.log(Tigris.isAlive);
        }
    }

    if ((Germanic.isPlayer === true) && (Germanic.health <= 0)) {
        $("#message1").text("YOU LOSE!")
        $("#restart").show()
        console.log("German lost")
    }
});
