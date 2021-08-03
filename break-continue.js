var i = 0;
while (i < 10) {
    console.log(i);
    if (i == 5) {
        break;
    }
    i++;
}
for (var i = 0; i < 20; i++) {
    console.log(i);
    if (i > 10) {
        break;
    }
}
var numbers = [11, 12, 13, 14, 15, 16, 17];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
    if (number > 14) {
        break;
    }
}