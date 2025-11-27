function getPassword(length){
    var characters = "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789" +"!@#$%^&*()";

    var password="";




    for (var i=0; i < length; i++){
        var random = Math.floor(Math.random()* characters.length);
        password += characters[random];
    }

    return password
}

var test = getPassword(15);
console.log(test);