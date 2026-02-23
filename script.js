let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");

const cardContainer = document.getElementById("card-container");

function count(total) {
  const card = cardContainer.childElementCount;
  total.innerText = card;
  return total;
}

count(total);
count(interview);
