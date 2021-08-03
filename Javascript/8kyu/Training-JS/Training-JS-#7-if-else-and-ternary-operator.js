function saleHotdogs(n){
    if(n<5){
        return n*100 
    }else if(n<10){
        return n*95
    }else if(n>=10){
        return n*90
    }
}

/*
https://www.codewars.com/kata/57202aefe8d6c514300001fd


Task:
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs,
function accept 1 parameters:n, n is the number of
customers to buy hotdogs, different numbers have
different prices (refer to the following table), return
a number that the customer need to pay how much money.
+---------------+-------------+
|  numbers n    | price(cents)|
+---------------+-------------+
|n<5            |    100      |
+---------------+-------------+
|n>=5 and n<10  |     95      |
+---------------+-------------+
|n>=10          |     90      |
+---------------+-------------+
*/