let $ = document;
let itemlistElem = $.querySelectorAll(".itemlist");
let divElem = $.querySelector(".div");
let header = $.querySelector(".header");
let spanElem = $.querySelectorAll(".span");
let input_form = $.querySelector(".input_form");
let formElem = $.querySelector(".form");
let section = $.querySelectorAll("section");
let BtnDown = $.querySelector(".BtnDown");
let bgLight50 = $.querySelectorAll(".bg-light-50");
let loader = $.querySelector(".loader");
let topElem = $.querySelectorAll(".topElem");
let h1Element = $.querySelector(".h1Element");
let h1Elem = $.querySelector(".h1Elem");
let getLoader = $.querySelector(".getLoader");
let chengeColorSvg = $.querySelector(".chengeColorSvg");
let ul_li = $.querySelectorAll(".ul_li");
let path = $.querySelectorAll("path");
let redColor, greenColor, blueColor;
let inputEmail = $.getElementById("inputEmail");
let textareaElem = $.getElementById("textareaElem ");
let getnum = 0;
let numBer = 0;
let number = 0;

// ///////////////////////////////////////////////////////
itemlistElem.forEach(function (item) {
  item.addEventListener("mousemove", function () {
    if (localStorage.getItem("thems") === "dark") {
      item.children[1].style.backgroundColor = "#000";
      item.children[1].style.right = "0%";
      item.children[1].style.width = "100%";
    } else {
      item.children[1].style.backgroundColor = "#fff";
      item.children[1].style.right = "0%";
      item.children[1].style.width = "100%";
    }
  });
  item.addEventListener("mouseleave", function () {
    item.children[1].style.width = "0%";
    item.children[1].style.right = "50%";
    item.children[1].style.backgroundColor = "#212121";
  });
});

// // ///////////////////////////////////////////////////////
divElem.addEventListener("click", function (event) {
  section.forEach(function (items) {
    if (number === 0) {
      items.style.filter = "blur(3px)";
    } else {
      items.style.filter = "blur(0px)";
    }
  });
  if (number === 0) {
    spanElem[0].style.translate = "-100%";
    spanElem[3].style.translate = "-100%";
    spanElem[1].style.transform = "rotate(45deg)";
    spanElem[2].style.transform = "rotate(-45deg)";
    header.style.display = "flex";
    divElem.style.left = "200px";
    header.style.left = 0;
    header.style.opacity = 1;
    body.style.overflowY = "hidden";
    number++;
  } else {
    divElem.style.left = "10px";
    spanElem[0].style.translate = "0%";
    spanElem[3].style.translate = "0%";
    spanElem[1].style.transform = "rotate(0deg)";
    spanElem[2].style.transform = "rotate(0deg)";
    header.style.left = "-250px";
    header.style.opacity = "0";
    body.style.overflowY = "scroll";
    header.style.display = "none";
    number--;
  }
});

///////////////////////////////////////////////////
let aTag = $.querySelectorAll("a");
aTag.forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.preventDefault();
  });
});

// ///////////////////////////////////////////////////////

function loded() {
  setInterval(() => {
    getnum++;
    getLoader.textContent = getnum + "%";
  }, 10);

  setTimeout(function () {
    loader.style.display = "none";
    h1Elem.style.opacity = 1;
    h1Element.style.marginTop = "100px";
  }, 1500);
}

//////////////////////////////////////////////////////
input_form.addEventListener("focus", function () {
  formElem.classList.add("sodw");
});
input_form.addEventListener("blur", function () {
  formElem.classList.remove("sodw");
});

/////////////////////////////////////////////////////
BtnDown.addEventListener("click", function () {
  let arrow = $.createElement("i");
  let styleElem = $.querySelector("style");
  bgLight50.forEach(function (itemed) {
    if (numBer === 0) {
      topElem.forEach(function (item) {
        if ($.documentElement.scrollTop >= 180) {
          item.style.marginBottom = " 30px";
        }
      });
      itemed.className = "card";
      itemed.style.opacity = 1;
    } else {
      itemed.className = "card bg-light-50";
      itemed.style.opacity = 0;
      document.documentElement.scrollTop = 620;
    }
  });
  if (numBer === 0) {
    styleElem.textContent = ".BtnDown::after{background-color: #ff3000;}";
    arrow.className = "bi bi-arrow-up-short";
    BtnDown.textContent = "کمتر";
    BtnDown.style.borderColor = "red";
    BtnDown.style.width = "75px";
    BtnDown.append(arrow);
    numBer++;
  } else {
    arrow.className = "bi bi-arrow-down-short";
    BtnDown.textContent = "بیشتر";
    BtnDown.style.width = "85px";
    BtnDown.append(arrow);
    BtnDown.style.borderColor = "green";
    styleElem.textContent = ".BtnDown::after{background-color: #26ff00;}";
    numBer--;
  }
  $.head.append(styleElem);
});

// ///////////////////////////////////////////////////////

function headerHndler(event) {
  console.log(event);
  topElem.forEach(function (item) {
    if ($.documentElement.scrollTop >= 180) {
      item.style.marginTop = 0;
      item.style.opacity = 1;
    }
  });
  if (document.documentElement.scrollTop >=950) {
    BtnDown.style.margin = "0 auto";
  }
}

////////////////////////////footer//////////////////////////////////

ul_li.forEach(function (item) {
  item.addEventListener("mouseover", function (event) {
    if (localStorage.getItem("thems") === "dark") {
      event.target.children[1].style.backgroundColor = "#000";
      event.target.children[1].style.width = "100%";
      event.target.children[1].style.right = "0%";
    } else {
      event.target.children[1].style.backgroundColor = "#fff";
      event.target.children[1].style.width = "100%";
      event.target.children[1].style.right = "0%";
    }
  });
  item.addEventListener("mouseleave", function (event) {
    event.target.children[1].style.backgroundColor = "#000";
    event.target.children[1].style.width = "0%";
    event.target.children[1].style.right = "50%";
  });
});

//////////////////////////////////////////////////////////////////
setInterval(function () {
  redColor = Math.floor(Math.random() * 255);
  greenColor = Math.floor(Math.random() * 255);
  blueColor = Math.floor(Math.random() * 255);
  path[1].style.transition = "0.5s";
  path[1].style.fill = `rgb(${redColor} , ${greenColor} , ${blueColor})`;
}, 2000);

function shodwHandler(event) {
  event.target.style.boxShadow = "0 0 5px #03ffae";
}
function unshodwHandler(event) {
  event.target.style.boxShadow = "0 0 0px #03ffae";
}
inputEmail.addEventListener("focus", shodwHandler);
inputEmail.addEventListener("blur", unshodwHandler);

//////////////////////////////////////////////////////

let srcImages = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg"];

let body = $.body;
let index = 0;
function nextImg() {
  index++;
  if (index > srcImages.length - 1) {
    index = 0;
  }
  body.style.backgroundImage = `url(${srcImages[index]})`;
}

setInterval(nextImg, 10000);
