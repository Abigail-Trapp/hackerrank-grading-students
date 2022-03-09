function diagonalDifference(arr) {
    let result = 0
    for(let i=0;i<arr.length;i++){
        result += arr[i][i] - arr[i][(arr.length-i)-1] // (arr.length-i)-1 reverses the array and iterates in reverse
    }
    return Math.abs(result)
}