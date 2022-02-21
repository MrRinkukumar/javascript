console.log(`IN THIS VIDEO WE LEARN ABOUT STORAGE`);
localStorage.setItem(`NAME`,`RINKU`);
localStorage.setItem(`NAME1`,`ARPIT`);
localStorage.setItem(`NAME2`,`GAJENDRA`);
// localStorage.clear();
localStorage.removeItem(`NAME`);
let IMPARRAY = [`rinku`,`arpit`,`gajendra`];
localStorage.setItem(`friend`,JSON.stringify(IMPARRAY));


let nam = localStorage.getItem(`NAME`);
nam = JSON.parse(localStorage.getItem(`friend`));
console.log(nam);



sessionStorage.setItem(`sessionNAME`,`RINKU`);
sessionStorage.setItem(session`NAME1`,`ARPIT`);
sessionStorage.setItem(`sessionNAME2`,`GAJENDRA`);
