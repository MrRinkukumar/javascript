console.log(`excrise 1 solutation`);
let str = `python`;
let Links = document.links;
console.log(Links);
let href;
Array.from(Links).forEach(function (element) {
  href = element.href;
  if (href.includes(str)) {
    console.log(href);
  }
});
