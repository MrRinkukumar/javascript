console.log(`welcome`);
/*
selectors :-
1. single element selector

// let element = document.getElementById('rinku');
//     // element =element.nodeName;
//     // element = element.childNodes;
//     // element = element.className;
//     element.style.color = `red`;
//     element.innerText= `welcome `;
//     element.innerHTML = '<b> welcome</b>';
//  console.log(element.innerHTML);
//  console.log(element.innerText);

let selector = document.querySelector(`#rinku`);

selector = document.querySelector(`.child`);
 selector = document.querySelector(`a`);

 selector.style.color = `green`;


console.log(selector);
*/


/*
2 .multiple multielement  selector

*/
// let sel2 = document.getElementsByClassName(`child`);
// console.log(sel2[0]);

// let sel2 = document.getElementsByClassName(`cantainer`);
// console.log(sel2[0].getElementsByClassName(`child`));


let sel2 = document.getElementsByTagName(`div`);
console.log(sel2);

// -------method 1-------------
// Array.from(sel2).forEach(function(element){

//     console.log(element);
//     element.style.color=`pink`;
// });

//-------------method2------------
for (let index = 0; index < sel2.length; index++) {
    const element = sel2[index];
    console.log(element);
    element.style.color= `green`;
    
}

