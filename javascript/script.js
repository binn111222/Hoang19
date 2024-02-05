"use strict";
const btnEle = document.querySelector("#submit");
const infoEle = document.querySelector("#info");
const emailFormEle = document.querySelector("#emailForm");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
console.log(btnEle);
btnEle.addEventListener("click", function () {
  const inputEle = document.querySelector("#email");
  if (inputEle.value.match(regex)) {
    infoEle.classList.remove("d-none");
    emailFormEle.classList.add("d-none");
  } else {
    alert("email khong hop le");
  }
});
const viewMorebtns = document.querySelectorAll(".view-more");

for (let i = 0; i < viewMorebtns.length; i++) {
  viewMorebtns[i].addEventListener("click", function () {
    const expEle = viewMorebtns[i].parentNode.parentNode.querySelector(".exp");
    expEle.classList.remove("d-none");
    viewMorebtns[i].classList.add("d-none");
    const viewLessBtn =
      viewMorebtns[i].parentNode.parentNode.querySelector(".view-less");
    viewLessBtn.classList.remove("d-none");
  });
}

const viewLessbtns = document.querySelectorAll(".view-less");

console.log(viewLessbtns);

for (let i = 0; i < viewLessbtns.length; i++) {
  viewLessbtns[i].addEventListener("click", function () {
    console.log("click view less");
    const expEle = viewLessbtns[i].parentNode.parentNode.querySelector(".exp");
    expEle.classList.add("d-none");
    viewLessbtns[i].classList.add("d-none");
    const viewMoreBtn =
      viewLessbtns[i].parentNode.parentNode.querySelector(".view-more");
    viewMoreBtn.classList.remove("d-none");
  });
}
