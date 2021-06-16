function differenceInAges(ages){
    return [Math.min(...ages), Math.max(...ages), Math.max(...ages)-Math.min(...ages)]
}

// OR
function differenceInAges(ages){
    let maxAge = Math.max(...ages)
    let minAge = Math.min(...ages)
    let difAge = maxAge - minAge
    return [minAge, maxAge, difAge]
}