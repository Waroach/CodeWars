String.prototype.capitalize = function() {
    let dict = {
        a: "A",
        b: "B",
        c: "C",
        d: "D",
        e: "E",
        f: "F",
        g: "G",
        h: "H",
        i: "I",
        j: "J",
        k: "K",
        l: "L",
        m: "M",
        n: "N",
        o: "O",
        p: "P",
        q: "Q",
        r: "R",
        s: "S",
        t: "T",
        u: "U",
        v: "V",
        w: "W",
        x: "X",
        y: "Y",
        z: "Z"
    }
    return (
        this.toString()[0].replace(/[a-z]/, v => dict[v]) + this.toString().slice(1)
    )
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