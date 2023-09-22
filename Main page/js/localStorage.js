let biSun = $.querySelector(".bi-sun");
let styleElem = $.querySelector("style");
let col_nazar = $.querySelector(".col_nazar");
let col_ertebat = $.querySelector(".col_ertebat");
let li_ertebat = $.querySelectorAll(".li_ertebat");
let leftHeader = $.querySelector(".leftHeader");
let sectionElem = $.querySelectorAll('.section')

if (localStorage.getItem('thems') === 'dark'){
    chengecolorfordark()
}else{
    chengecolorforwhite()
}
function chengecolorforwhite(){
    document.documentElement.style.setProperty("--color-cardblack","#1d1d1d");
    document.documentElement.style.setProperty("--color-lightgray", "lightgray");
    document.documentElement.style.setProperty("--color-dark", "#212121");
    document.documentElement.style.setProperty("--color-white" , "#fff");
    sectionElem[1].style.backgroundColor = 'rgb(33, 37, 41)'
    styleElemValue = styleElem.textContent;
    chengeColorSvg.style.fill = 'rgb(33, 37, 41)'
}
function chengecolorfordark(){
    document.documentElement.style.setProperty("--color-cardblack","lightgray");
    document.documentElement.style.setProperty("--color-lightgray", "#1d1d1d");
    document.documentElement.style.setProperty("--color-dark", "#bbb");
    document.documentElement.style.setProperty("--color-white" , "#000");
    sectionElem[1].style.backgroundColor = '#7c7c7c'
    styleElemValue = styleElem.textContent;
    chengeColorSvg.style.fill = '#7c7c7c'
}
biSun.addEventListener("click", function () {
  if (localStorage.getItem("thems") === "dark") {
    chengecolorforwhite()
    localStorage.setItem("thems", "light");
  } else if (localStorage.getItem("thems") === "light") {
    localStorage.setItem("thems", "dark");
    chengecolorfordark()
  } else {
    localStorage.setItem("thems", "dark");
  }
});
