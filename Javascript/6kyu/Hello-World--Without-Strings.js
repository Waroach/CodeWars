                            // OBJECT try || NOT WORKING
const helloWorld = () => {
    let hello = {
        '0': 'H',
        '1': 'e',
        '2': 'l',
        '3': 'l',
        '4': 'o',
        '5': ',',
        '6': ' ',
        '7': 'W',
        '8': 'o',
        '9': 'r',
        '10': 'l',
        '11': 'd',
        '12': '!',
    }
    return Object.values(hello).join('')
}


                            // FIRST TRY || NOT WORKING
// const helloWorld = () => {
//     return new String('Hello, World!')
// }


console.log(helloWorld(), "Hello, World!")


/*
https://www.codewars.com/kata/584c7b1e2cb5e1a727000047/train/javascript


You need to create a function, helloWorld,
that will return the String Hello,
World! without actually using raw strings.
This includes quotes, double quotes and template strings.
You can, however, use the String constructor and any related functions.
You cannot use the following:
"Hello, World!"
'Hello, World!'
`Hello, World!`
Good luck and try to be as creative as possible!
*/