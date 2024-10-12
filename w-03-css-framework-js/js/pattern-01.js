// *
// * *
// * * *
// * * * *
// * * * * *

const NUM = 5;
let row;
let column;
let line;

for (row = 1; row <= NUM; row++) {
    line = "";
    for (column = 1; column <= row; column++) {
        line += "* ";
    }
    console.log(line);
}
