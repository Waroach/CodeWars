function bitsWar(nums) {
    if (!nums.length) return 'tie'
    let odd = 0
    let even = 0
    nums.filter(n => {
        //Math.sign(n)
        if (n % 2 === 0) {
            if (Math.sign(n) === 1) n.toString(2).split('').filter(bit => bit === '1' ? even++ : null)
            if (Math.sign(n) === -1) n.toString(2).split('').filter(bit => bit === '1' ? even-- : null)
        }
        if (n % 2 !== 0) {
            if (Math.sign(n) === 1) n.toString(2).split('').filter(bit => bit === '1' ? odd++ : null)
            if (Math.sign(n) === -1) n.toString(2).split('').filter(bit => bit === '1' ? odd-- : null)
        }
    })
    if (odd === even) return 'tie'
    return odd > even ? 'odds win' : 'evens win'
}



                            // PSEUDOCODE
// if the array length is zero then 'tie'
// step thru the array of numbers and check if odd or even
// if odd
    // convert to binary string
    // split string and step thru
        // if 1
        // if POSITIVE add 1 to the oddCount
        // if NEGATIVE minus 1 to the oddCount
// if even
    // convert to binary string
    // split string and step thru
        // if 0
        // if POSITIVE add 1 to the evenCount
        // if NEGATIVE minus 1 to the evenCount
// check who has a higher count even or odd



console.log(bitsWar([1, 5, 12]), "odds win");
console.log(bitsWar([7, -3, 20]), "evens win");
console.log(bitsWar([7, -3, -2, 6]), "tie");
console.log(bitsWar([-3, -5]), "evens win");
console.log(bitsWar([]), "tie");



/*
https://www.codewars.com/kata/58865bfb41e04464240000b0/train/javascript


Variation of this nice kata (Bits-Battle.js 7kyu), the war has expanded and become dirtier and meaner;
both even and odd numbers will fight with their pointy 1s.
And negative integers are coming into play as well, with, ça va sans dire,
a negative contribution (think of them as spies or saboteurs).
A number's strength is determined by the number of set bits (1s) in its binary representation.
Negative integers work against their own side so their strength is negative.
For example -5 = -101 has strength -2 and +5 = +101 has strength +2.
The side with the largest cumulated strength wins.
Again, three possible outcomes: odds win, evens win and tie.
Examples:
bitsWar([1,5,12]) => "odds win" //1+101 vs 1100, 3 vs 2
bitsWar([7,-3,20]) => "evens win" //111-11 vs 10100, 3-2 vs 2
bitsWar([7,-3,-2,6]) => "tie" //111-11 vs -1+110, 3-2 vs -1+2
*/