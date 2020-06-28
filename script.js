var i = 0;
//Text I will use to portray to the screen
// var txt = ";
var name = "Hi, my name is Ian Wanjohi.";

function typeName() {
    var nameBlock = document.getElementById("demo");
    nameBlock.innerHTML += name.charAt(i);
    i += 1;
    setTimeout(typeName, 100)
}

document.body.onload = typeName
