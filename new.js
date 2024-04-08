//   const head = document.querySelector(".header")
//   const headContent = document.querySelector("header-content")
//   const upLanguageBtn = document.querySelector("language-btn")
//   const upSigninBtn = document.querySelector("signin-btn")
//   const emailSignup = document.querySelector(".email-signup")
//   const emailInput = document.querySelector("#mail")
//   const getStartedBtn = document.querySelector(".get-started")
//   const features = document.querySelector("features")

let logo = document.querySelector("#punk");
let content = document.querySelector("#content");
let secondContent = document.querySelector("#one");
let thirdContent = document.querySelector("#two");
let fourthContent = document.querySelector("#three");
let fifthContent = document.querySelector("#four");
let sixthContent = document.querySelector("#five");
let first = document.querySelector("#first");
let languages = document.querySelector("#frank")
let languageBtn = document.querySelector(".language")
// let second = document.querySelector("#second")
// let third = document.querySelector("#third")


languageBtn.addEventListener("click", () => {
  languages.style.display = "block";
  languages.style.width = "20px";
  languages.style.maxHeight = "200px";
})

first.addEventListener("click", () => {
  content.style.maxHeight = "6500px";
  secondContent.style.maxHeight = "0px";
  thirdContent.style.maxHeight = "0px";
  fourthContent.style.maxHeight = "0px";
  fifthContent.style.maxHeight = "0px";
  sixthContent.style.maxHeight = "0px";
});

second.addEventListener("click", () => {
  content.style.maxHeight = "0px";
  secondContent.style.maxHeight = "6500px";
  thirdContent.style.maxHeight = "0px";
  fourthContent.style.maxHeight = "0px";
  fifthContent.style.maxHeight = "0px";
  sixthContent.style.maxHeight = "0px";
});

third.addEventListener("click", () => {
  content.style.maxHeight = "0px";
  secondContent.style.maxHeight = "0px";
  thirdContent.style.maxHeight = "6500px";
  fourthContent.style.maxHeight = "0px";
  fifthContent.style.maxHeight = "0px";
  sixthContent.style.maxHeight = "0px";
});
fourth.addEventListener("click", () => {
  content.style.maxHeight = "0px";
  secondContent.style.maxHeight = "0px";
  thirdContent.style.maxHeight = "0px";
  fourthContent.style.maxHeight = "6500px";
  fifthContent.style.maxHeight = "0px";
  sixthContent.style.maxHeight = "0px";
});

fifth.addEventListener("click", ()=>{
  content.style.maxHeight = "0px";
  secondContent.style.maxHeight = "0px";
  thirdContent.style.maxHeight = "0px";
  fourthContent.style.maxHeight = "0px";
  fifthContent.style.maxHeight = "6500px";
  sixthContent.style.maxHeight = "0px";
});

sixth.addEventListener("click", ()=>{
  content.style.maxHeight = "0px";
  secondContent.style.maxHeight = "0px";
  thirdContent.style.maxHeight = "0px";
  fourthContent.style.maxHeight = "0px";
  fifthContent.style.maxHeight = "0px";
  sixthContent.style.maxHeight = "6500px";
});

// second.addEventListener("click", ()=>{
//   contentBox.style.maxHeight = "6500px";
// })
logo.addEventListener("mouseover", () => {
  logo.style.width = "300px";
  logo.style.transition = "1s";
});

logo.addEventListener("mouseout", () => {
  logo.style.width = "200px";
  logo.style.transition = "1s";
  logo.style.transitionDelay = "1s";
});
//learning
//const age = 17;
//console.log(`you are ${age >= 18 ? 'eligible to sign up' : 'not eligible check back later'}`)

// const ages = 23;
// ages >= 18 ? console.log('i like to drink') : console.log('i dont like to drink.');
