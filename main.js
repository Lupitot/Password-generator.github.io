lettremin = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
lettremax = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
chiffre = ["0","1","2","3","4","5","6","7","8","9"];
caractereSpecial = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","=","?","@","[","]","^","_","`","{","|","}","~"];

document.getElementById("imaj").addEventListener("change", function() {
    let v = parseInt(this.value);
    if (v < 0) this.value = 0;
    if (v > 20) this.value = 20;
  });

document.getElementById("imin").addEventListener("change", function() {
    let v = parseInt(this.value);
    if (v < 0) this.value = 0;
    if (v > 20) this.value = 20;
});

document.getElementById("ichi").addEventListener("change", function() {
    let v = parseInt(this.value);
    if (v < 0) this.value = 0;
    if (v > 20) this.value = 20;
});

document.getElementById("icar").addEventListener("change", function() {
    let v = parseInt(this.value);
    if (v < 0) this.value = 0;
    if (v > 20) this.value = 20;
});

function makeRandom(liste) {
    return liste[Math.floor(Math.random()*liste.length)];
}



function getValue() {
    var nbmaj = document.getElementById("imaj").value;
    var nbmin = document.getElementById("imin").value;
    var nbchiffre = document.getElementById("ichi").value;
    var nbcaractereSpecial = document.getElementById("icar").value;
    total = parseInt(nbmaj) + parseInt(nbmin) + parseInt(nbchiffre) + parseInt(nbcaractereSpecial);
    console.log(total);
    if (total > 8) {

        var password = [];

        for (var i = 0; i < nbmaj; i++) {
            password.push(makeRandom(lettremax)); 
        }
        for (var i = 0; i < nbmin; i++) {
            password.push(makeRandom(lettremin));
        }
        for (var i = 0; i < nbchiffre; i++) {
            password.push(makeRandom(chiffre));
        }
        for (var i = 0; i < nbcaractereSpecial; i++) {
            password.push(makeRandom(caractereSpecial));
        }

        password = shuffle(password);
        password = password.join("");
        console.log(password);
        document.getElementById("password").innerHTML = password;
    }
    else {
        alert("il faut entrer 8 caractères minimum");
    }

}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

