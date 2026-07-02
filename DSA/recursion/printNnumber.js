function temp(n) {

    if (n === 0) return;
    console.log(n)
    temp(n - 1);
}

temp(10);//from 10 to 1
console.log()

function series(n) {
    if (n === 0) return;
    series(n - 1);
    console.log(n);

}

series(10);//from 1 to 10