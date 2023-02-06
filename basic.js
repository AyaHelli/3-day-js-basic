let num = [1, 7, -3, 9];
let max = num[0];
for (let val of num) {
    if (max < val) {
        max = val
    }
}
document.write(max)