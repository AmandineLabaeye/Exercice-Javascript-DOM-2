/**
 * Created by sstienface on 16/10/2018.
 */


var Prenom = document.getElementsByClassName("name-tag");



for(var i = 0; i < Prenom.length; i++) {

    var P = document.createElement("p");
    P.innerHTML = "HELLO WORLD";
    document.getElementsByClassName("name-tag")[i].appendChild(P);



}







