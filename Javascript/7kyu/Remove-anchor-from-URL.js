// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
                            // First Try
// function removeUrlAnchor(url){
//     return url.split('#')[0]
// }

                            // Cleaned up
removeUrlAnchor=url=>url.split('#')[0]

console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
console.log(removeUrlAnchor('www.codewars.com?page=1') , 'www.codewars.com?page=1')