console.log(`basics of functions`);
/*function => it is a block of code which design for a paraticurly
 task repetely
use 
normal way to repeat multitime-----------------------------------
let Name =` rinku`;
let Name2 =`arpit `;
console.log (`hey ${Name} i am very thankfull for 
contecting with me `);
console.log (`hey ${Name2} i am very thankfull for 
contecting with me `);
*/

/*  by using function reapeat task multitime----------------------- 
function greeding(Name,thanks){
    console.log(`hey ${Name} i am very thankfull for 
    contecting with me . ${thanks} `)
    return `thank you bro`;

}
 let Name= `rinku`;
greeding(Name,"thanks a lot");
// you can directly pass a string
greeding('gajendra','thanks bro');
// when you not pass the both variables is show undefined 
greeding(Name);
// it use to return a value by function
let Return = greeding(Name,'thanks ');
console.log(Return);
// you can use default value to use when you can not pass variable value
function greeding(Name,thanks='thanks you'){
    console.log(`hey ${Name} i am very thankfull for 
    contecting with me . ${thanks} `)

}
 let Name2= `rinku`;
greeding(Name2);
// to return a msg by function we use this method
function greeding(Name,thanks='thanks you'){
    let msg =`hey ${Name} i am very thankfull for 
    contecting with me . ${thanks} `;
    return msg;

}
 let Name3= `arpit`;
let a = greeding(Name3);
console.log(a);
// function define as constant value
const mygreeding = function(Name,thanks='thanks you')
{
    let mag = `hey ${Name} i am very thankfull for 
    contecting with me . ${thanks} `;
    return mag;

}
let Name4= `gajendra`;
let b = mygreeding(Name4);
console.log(b);
 
// function is obeject
 
const obej ={
       mr:'arpit jangid',
       work : function(){
           return 'thanks'
       },
       os  :'windows'
}
 console.log(obej.work());
 */

