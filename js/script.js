// TASK 1
let a = 3;
let b = 5;
let c;

// alert( "description of alerted_value: " + alerted_value );
let d=`
a + b = ${a+b}; \n
a - b = ${a-b}; \n
a * b = ${a-b}; \n
a / b = ${a/b}; \n
a % b = ${a%b}; \n
a += b = ${a+=b}; \n
a -= b = ${a-=b}; \n
a *= b = ${a*=b}; \n
a /= b = ${a/=b}; \n
a %= b = ${a%=b}; \n
a == b = ${a==b}; \n
a != b = ${a!=b}; \n
a > b = ${a>b}; \n
a < b = ${a<b}; \n
!a && !c = ${!a && !c}; \n
!a || !c = ${!a || !c}; \n
`;
console.log(d);



// TASK 2
let first_name = 'Sana';
let last_name = 'Randhawa';
let email = 'rand0107@algonquinlive.com';

let output = `My name is ${first_name} ${last_name}. You can contact me at ${email}`; 
console.log(output);