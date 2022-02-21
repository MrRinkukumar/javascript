console.log(`traversing dom`);
let vari= document.querySelector(`.container`);
// it count space texet etc
// console.log(vari.childNodes);
// it only contain tagas
// console.log(vari.children);

// let nodeName = vari.childNodes[1].nodeName;
// let nodetype = vari.childNodes[0].nodeType;

// console.log(nodeName);
// console.log(nodetype);
/*
nodetypes:-
1.Element
2. atributtes
3. text node 
8. comment 
9. document
10. doc type
*/


// it use to target the child->child->child... element
// it called traversing  
let childNodes = document.querySelector(`.container`);
// console.log(childNodes.children[0].children);
// console.log(childNodes.firstChild);
// console.log(childNodes.firstElementChild);

// console.log(childNodes.lastChild);
// console.log(childNodes.lastElementChild);
// console.log(childNodes.childElementCount);
console.log(childNodes.firstElementChild.parentNode);
console.log(childNodes.firstElementChild.parentElement);
console.log(childNodes.firstElementChild.nextSibling);
console.log(childNodes.firstElementChild.nextElementSibling);





