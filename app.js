

let uMail="lfwf95@gmail.com"

let pattarn=/^[a-z0-9]*@[a-z-]*\.[a-z]{2,5}$/;

console.log(pattarn.test(uMail));


let user="1sShamim1995";

let userPattarn=/^[a-zA-Z0-9@_]*$/;

console.log(userPattarn.test(user));


let phone = "+8801995258522";

let phonePattarn=/^(01|880|8801|\+8801)[0-9]{9}$/;

console.log(phonePattarn.test(phone));




let pwd="%S1hamim5858@"


let pwdPattarn=/^[%?#@!&$()a-zA-Z]/;

