// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

const NUM = 5;
let row;
let column;
let number = 1;
let line = "";
for (row = 1; row <= NUM; row++) {
    line = "";
    for (column = 1; column <= row; column++) {
        line += number + " ";
        number++;
    }
    console.log(line);
}
