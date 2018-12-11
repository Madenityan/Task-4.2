function arrayPath(rows, columns, rStart, cStart) {
    let arrCord = [];
    let currentRow = 3;
    let currentColumn = 3;

// кожен елемент масиву зроблений масивом
    for(let i = 0; i < rows; i++) {
        arrCord[i] = new Array(columns).fill(0);
    }
    return arrCord;


}
let array = arrayPath(6, 6);
console.log(array);

