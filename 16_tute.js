console.log(`in this we leaen about element creating`);
console.log(`welcome tute 16`);
// here we crate elemnt by useing java script 
// and add class name , id  and text and 
// targe the element by is where we took it 
let element = document.createElement(`li`);
let text = document.createTextNode("thi si create by ari a");
element.appendChild(text);
element.className ='dummy';
element.id = 'ceated li';
element.setAttribute(`title`,`mytitle`);
// element.innerText=`hello this is  created`;
// element.innerHTML =`<b>hello this is ceated element </b>`;
let ul = document.querySelector(`ul.this`);
ul.appendChild(element);
// console.log(ul);
// console.log(element);
// here we ceate an element and id repalce with anothe elemnt
let ele2 =document.createElement(`h3`);
ele2.className=`ele2`;
ele2.id=`ele2`;
let tnode = document.createTextNode(`this is ceated for elemet 2`);
ele2.appendChild(tnode);
element.replaceWith(ele2);

// this is another method to repalce child by his id 
// this is required that element is may be chid
//here myul is parent id and fui lui is children is
// remove child = remove element from dom
let myul =document.getElementById(`myul`);
myul.replaceChild(element,document.getElementById(`fui`));
myul.removeChild(document.getElementById(`lui`));

let pr = ele2.hasAttribute(`herf`);
ele2.removeAttribute(`id`);
ele2.setAttribute(`title`, `mytitle`);

console.log(ele2, pr);

//quiz solve
let headintag = document.createElement(`a`);
// headintag.className =`heading`;
// headintag.id =`heading`;
headintag.setAttribute(`herf`,`//codewithharry.com`);
// headintag.setAttribute(`type`,`button`);
// headintag.innerText=`go code with harry`;
// console.log(headintag);
// console.log(headintag);
element.replaceWith(headintag);


let N =document.createElement(`h1`);
N.setAttribute(`title`,`go code with harray`);
N.innerHTML =`<a herf ='//codewithharry.com'></a>`;
// console.log(N);
element.replaceWith(N);




