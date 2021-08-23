function domainName(url){
    //your code here
}

console.log(domainName("http://google.com"), "google")
console.log(domainName("http://google.co.jp"), "google")
console.log(domainName("www.xakep.ru"), "xakep")
console.log(domainName("https://youtube.com"), "youtube")

/*
https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript


Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/