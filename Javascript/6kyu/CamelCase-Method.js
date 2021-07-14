String.prototype.camelCase = function() {
    let arg = this.toString()
        .trim()
        .split(" ")
    let arr = arg.map((word, i, arr) =>
        word ? word.slice(0,1).toUpperCase() + word.slice(1) : word
    )
    return arr.join("")
}

/*
Write simple .camelCase method (camel_case function in PHP,
CamelCase in C# or camelCase in Java) for strings.
All words must have their first letter capitalized without spaces.
For instance:
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
Don't forget to rate this kata! Thanks :)
*/