console.log(`int this tuterial we learn about events and obejects`);
/* statement:- 
    Element.addeventlistener( 'moment',function{
    job shedouleing
    })
     by the event listenr we can add any event list very easly 
    */
document.getElementById(`title`).addEventListener(`click`,function(e){
    console.log(`you clicked on this`);
    // location.href ='//unlockcoder.com';
    let variable ;
    variable = e.target;
    variable = e.target.className;
    variable = e.target.id;
    variable = Array.from( e.target.classList);
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;


    console.log(variable);
});