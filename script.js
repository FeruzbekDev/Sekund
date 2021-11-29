let arr = ['bobur', 'abror', 'alish']
let a = prompt('del komanda kirit')
let b = a.split(', ')
if (b[0] == 'del') {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == b[1]) {
            console.log(arr);
            arr.splice(i, 1)
        }

    }
}
console.log(arr);