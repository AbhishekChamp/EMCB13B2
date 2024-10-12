//     *
//    ***
//   *****
//  *******
// *********

const SIZE = 5;
let row;
let column;

for (row = 1; row <= SIZE; row++) {
    line = "";

    // Add leading spaces
    for (column = 1; column <= SIZE - row; column++) {
        line += " ";
    }

    // Add stars
    for (column = 1; column <= 2 * row - 1; column++) {
        line += "*";
    }

    console.log(line);
}
