function superSize(num){
    return Number(String(num).split("").sort().reverse().join(""))
}