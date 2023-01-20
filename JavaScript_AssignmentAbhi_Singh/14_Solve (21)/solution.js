let str1 = "Hello  Script";
let str2 = "Hello  Sccript";

let fun=(str)=>{
    return str.includes("Script");
}
let ans1= fun(str1);
let ans2= fun(str2);
console.log(ans1);
console.log(ans2);