const mainContainer = document.querySelector("main");

let total = document.getElementById("total");
let totalInterview = document.getElementById("interview");
let totalRejected = document.getElementById("rejected");

let interview = [];
let rejected = [];

const cardContainer = document.getElementById("card-container");

function count() {
  total.innerText = cardContainer.childElementCount;
  totalInterview.innerText = interview.length;
  totalRejected.innerText = rejected.length;
}

count();

const allBtn = document.getElementById("allBtn");
const interviewBtn = document.getElementById("interviewBtn");
const rejectedBtn = document.getElementById("rejectedBtn");

function tabStyle(id) {
  allBtn.classList.remove("bg-primary", "text-white");
  interviewBtn.classList.remove("bg-primary", "text-white");
  rejectedBtn.classList.remove("bg-primary", "text-white");

  const selected = document.getElementById(id);
  selected.classList.add("bg-primary", "text-white");
}

mainContainer.addEventListener("click", function (event) {
  const parent = event.target.parentNode;
  const cardInfo = { parent };
  //   console.log(cardInfo.parent.id)
  //   interview.push(cardInfo);
  const cardExist = interview.find((item) => item.parent.id === "card-1");
  console.log(cardExist);
  if (!cardExist) {
    interview.push(cardInfo);
  }

  console.log(interview);
  //   if (cardInfo.parent.id === "card-1") {
  //     interview.push(cardInfo);
  //   }

  //   console.log(interview)
  //   const card1 = parent.querySelector("#card-1");
  //   console.log(parent)
  //   const cardTitle = parent.querySelector(".card-title").innerText;
});
