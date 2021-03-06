function horses(totalHorses, totalWinners = 3) {
    if (!Number.isInteger(totalHorses)) return undefined
    if (totalHorses < totalWinners) return totalHorses

    return totalHorses * (totalHorses - 1) * (totalHorses - 2)
}


console.log(horses(12), 1320, true)
console.log(horses(15), 2730, true)
console.log(horses(2), 0, true)
console.log(horses(11), 5, true)
console.log(horses(2.5), undefined, false)
console.log(horses("a"), 5, true)


/*
https://www.codewars.com/kata/563b8a23b554206f49000059/train/javascript



My mate Dave LOVES gambling.
He goes to the horse races every Saturday and bets money on which horses will finish FIRST, SECOND and THIRD place.
I'm a good friend, so I said I'd help him figure out how many different ways the gold,
silver and bronze could be handed out to the competitors so he can calculate his odds of winning.
Problem is, Dave never knows how many horses will be entering the race until he gets to the track.
I guess I'll have to design a funciton to help me!
Write a programme that can take any number of horses as its only argument and returns the total
number of different combinations of competitors winning gold silver and bronze.
For example:
horses(15)  ->  2730
There are effectively 2730 different combinations of 1st, 2nd and 3rd finishers.
The function should return undefined if the object entered isn't an integer.
If number of horses is lower than 3, return the input value.
Other examples:
horses(4)  ->  24
horses(1)  ->  1
*/