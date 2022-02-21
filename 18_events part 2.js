console.log(`in this video we learn more about events`);
// let btn = document.getElementById(`btn`);
// btn.addEventListener(`click`,func1);
// btn.addEventListener(`dblclick`,func2);
// btn.addEventListener(`mousedown`,func3);


// function func1(e) {
//     console.log(`thanks`,e);
    
// }
// function func2(e) {
//     console.log(`you have double click`, e);
// }
// function func3(e) {
//     console.log('you have mouse move down' ,e);
    
// }
// document.querySelector(`.dummy`).addEventListener(`mouseleave`,function(e){

// console.log(`you have exited`,e);

// });
// document.querySelector(`.dummy`).addEventListener(`mouseenter`,function(e){

//     console.log(`you have entered`,e);
    
//     });
document.querySelector(`.container`).addEventListener(`mousemove`,function(e){

        console.log(`you have entered`,e);
        console.log(e.offsetX, e.offsetY);
        document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${e.offsetX})`
        
        });