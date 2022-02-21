console.log(`here we start using loops`);
/* here we learn about for loop in java script--------------------------------------

for (let i = 0; i < 100; i++) {
    // const element = array[i];
    console.log(i);
    
}

/*  this is use of oprators -------------------------------------------------
 let age=16;
age+=1;
age++;
console.log(age);
*/
/* this is basic statement of while loop in java script----------------------------------------
let no = 0;
while(no<100)
{
    console.log(no);
    no+=2;
}
*/

/* this is basic statement of do while loop in java script----------------------------------------
let no =0;
do
{
    console.log(no);
    no+=2;
    if(no===50)
    {
        break;
    }
}while(no<100);
*/

/* array itration without using for loop-------------------------
*/
 let arr=[1,3,5,4,2,7];
 // method 1
arr.forEach(function(element){

    console.log(element);
});
// method 2
arr.forEach(function(element,index,array){
    console.log(element,index,array);
});


/* array itration using for loop-------------------------

let arr=[1,3,5,4,2,7,88,99,55,44,66];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
  }
   */

  /* itrate a obeject in java script using for loop-----------------
  let obeject = {
      name : `arpit`,
      age : `18`,
      type : `programer`,
      os : `window linex`
  }
  // method 1
  for(let key in obeject)
  {
      console.log( obeject[key]);
  }
  //method 2

  for(let key in obeject)
  {
      console.log(`the ${key} of obeject ${obeject[key]}`);
  }
  */


