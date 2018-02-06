// scripts.js

var a = prompt("First number: ");
var b = prompt("Second number: ");
var value = (a * a) - (2 * a * b) - (b * b);


if ( value < 0 ) {
    alert('wynik ujemny');
    console.log('wynik ujemny');
} else if ( value > 0 ) {
    alert('wynik dodatni');
    console.log('wynik dodatni');
} else if ( value == 0 ) {
    alert('wynik równy 0');
    console.log('wynik równy 0');
}
