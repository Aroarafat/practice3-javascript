function bringsingara(taka) {
    console.log("singara khawa jonno", taka);
    console.log("singara den");
    var singaraprice = 10;
    var singaraquantity = taka / singaraprice;
    return singaraquantity;
}
var taka = 250;
var singara = bringsingara(taka);
console.log("ai nen singara", singara);
