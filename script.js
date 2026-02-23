let currentStatus = "all";
let appliedList = [];
let interviewList = [];
let rejectedList = [];

let total = document.getElementById("totalCount");
let appliedCount = document.getElementById("appliedCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const allBtn = document.getElementById("allBtn");
const appliedBtn = document.getElementById("appliedBtn");
const interviewBtn = document.getElementById("interviewBtn");
const rejectedBtn = document.getElementById("rejectedBtn");

const mainContainer = document.querySelector("main");
const cardContainer = document.getElementById("card-container");
const filterSection = document.getElementById("filtered-section");

function count() {
  total.innerText = cardContainer.children.length;
  appliedCount.innerText = appliedList.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

count();

function tabStyle(id) {
  allBtn.classList.remove("bg-primary", "text-white");
  appliedBtn.classList.remove("bg-primary", "text-white");
  interviewBtn.classList.remove("bg-primary", "text-white");
  rejectedBtn.classList.remove("bg-primary", "text-white");

  const selected = document.getElementById(id);
  selected.classList.add("bg-primary", "text-white");

  currentStatus = id;

  if (id === "appliedBtn") {
    cardContainer.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderApplied();
  } else if (id === "allBtn") {
    cardContainer.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else if (id === "interviewBtn") {
    cardContainer.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderInterview();
  } else if (id === "rejectedBtn") {
    cardContainer.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderRejected();
  }
}

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("applied-btn")) {
    const card = event.target.closest(".job-card");

    const cardTitle = card.querySelector(".card-title").innerText;
    const designation = card.querySelector(".designation").innerText;
    const salary = card.querySelector(".salary").innerText;
    let status = card.querySelector(".status-text");
    const description = card.querySelector(".description").innerText;

    status.innerText = "APPLIED";

    const cardInfo = {
      cardTitle,
      designation,
      salary,
      status: "APPLIED",
      description,
    };

    const cardExist = appliedList.find(
      (item) => item.cardTitle === cardInfo.cardTitle
    );

    if (!cardExist) {
      appliedList.push(cardInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.cardTitle !== cardInfo.cardTitle
    );
    rejectedList = rejectedList.filter(
      (item) => item.cardTitle !== cardInfo.cardTitle
    );

    tabStyle(currentStatus);

    count();
  } else if (event.target.classList.contains("interview-btn")) {
    const card = event.target.closest(".job-card");

    const cardTitle = card.querySelector(".card-title").innerText;
    const designation = card.querySelector(".designation").innerText;
    const salary = card.querySelector(".salary").innerText;
    let status = card.querySelector(".status-text");
    const description = card.querySelector(".description").innerText;

    status.innerText = "INTERVIEW";

    const cardInfo = {
      cardTitle,
      designation,
      salary,
      status: "INTERVIEW",
      description,
    };

    const cardExist = interviewList.find(
      (item) => item.cardTitle === cardInfo.cardTitle
    );

    if (!cardExist) {
      interviewList.push(cardInfo);
    }

    appliedList = appliedList.filter(
      (item) => item.cardTitle !== cardInfo.cardTitle
    );
    rejectedList = rejectedList.filter(
      (item) => item.cardTitle !== cardInfo.cardTitle
    );

    tabStyle(currentStatus);

    count();
  } else if (event.target.classList.contains("rejected-btn")) {
    const card = event.target.closest(".job-card");

    const cardTitle = card.querySelector(".card-title").innerText;
    const designation = card.querySelector(".designation").innerText;
    const salary = card.querySelector(".salary").innerText;
    let status = card.querySelector(".status-text");
    const description = card.querySelector(".description").innerText;

    status.innerText = "REJECTED";

    const cardInfo = {
      cardTitle,
      designation,
      salary,
      status: "REJECTED",
      description,
    };

    const cardExist = rejectedList.find(
      (item) => item.cardTitle === cardInfo.cardTitle
    );

    if (!cardExist) {
      rejectedList.push(cardInfo);
    }

    appliedList = appliedList.filter(
      (item) => item.cardTitle !== cardInfo.cardTitle
    );
    interviewList = interviewList.filter(
      (item) => item.cardTitle !== cardInfo.cardTitle
    );

    tabStyle(currentStatus);

    count();
  }

  if (event.target.classList.contains("delete-btn")) {
    const card = event.target.closest(".job-card");
    const cardTitle = card.querySelector(".card-title").innerText;
    card.remove();

    appliedList = appliedList.filter((item) => item.cardTitle !== cardTitle);
    interviewList = interviewList.filter(
      (item) => item.cardTitle !== cardTitle
    );
    rejectedList = rejectedList.filter((item) => item.cardTitle !== cardTitle);
  }

  count();
});

function renderApplied() {
  filterSection.innerHTML = "";

  for (let apply of appliedList) {
    let div = document.createElement("div");
    div.className =
      "job-card card-body bg-base-100 card w-full min-h-72 shadow-sm";
    div.innerHTML = `
    <div class="flex justify-between">
    <h2 class="card-title text-[#002C5C] font-semibold text-xl mb-1">
      ${apply.cardTitle}
    </h2>
    <button class="btn btn-circle">
      <svg
        class="size-[1.2em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
      >
        <!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
        <path
          d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z"
        />
      </svg>
    </button>
  </div>
  <p class="text-[#64748B] designation text-xl mb-5">
    ${apply.designation}
  </p>
  <p class="text-[#64748B] mb-5 salary">
    ${apply.salary}
  </p>
  <p
    class="text-[#002C5C] status-text font-medium px-3 py-3 bg-[#EEF4FF] rounded max-w-max mb-2"
  >
    ${apply.status}
  </p>
  <p class="mb-5 text-[#323B49] description">
    ${apply.description}
  </p>
  <!-- Actionable Card Button -->
  <div class="card-actions">
    <button class="btn applied-btn btn-outline btn-primary">
      APPLIED
    </button>
    <button class="btn interview-btn btn-outline btn-success">
      INTERVIEW
    </button>
    <button class="btn rejected-btn btn-outline btn-error">
      REJECTED
    </button>
  </div>
    `;
    filterSection.appendChild(div);
  }
}

function renderInterview() {
  filterSection.innerHTML = "";

  for (let apply of interviewList) {
    let div = document.createElement("div");
    div.className =
      "job-card card-body bg-base-100 card w-full min-h-72 shadow-sm";
    div.innerHTML = `
    <div class="flex justify-between">
    <h2 class="card-title text-[#002C5C] font-semibold text-xl mb-1">
      ${apply.cardTitle}
    </h2>
    <button class="btn btn-circle">
      <svg
        class="size-[1.2em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
      >
        <!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
        <path
          d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z"
        />
      </svg>
    </button>
  </div>
  <p class="text-[#64748B] designation text-xl mb-5">
    ${apply.designation}
  </p>
  <p class="text-[#64748B] mb-5 salary">
    ${apply.salary}
  </p>
  <p
    class="text-[#002C5C] status-text font-medium px-3 py-3 bg-[#EEF4FF] rounded max-w-max mb-2"
  >
    ${apply.status}
  </p>
  <p class="mb-5 text-[#323B49] description">
    ${apply.description}
  </p>
  <!-- Actionable Card Button -->
  <div class="card-actions">
    <button class="btn applied-btn btn-outline btn-primary">
      APPLIED
    </button>
    <button class="btn interview-btn btn-outline btn-success">
      INTERVIEW
    </button>
    <button class="btn rejected-btn btn-outline btn-error">
      REJECTED
    </button>
  </div>
    `;
    filterSection.appendChild(div);
  }
}

function renderRejected() {
  filterSection.innerHTML = "";

  for (let apply of rejectedList) {
    let div = document.createElement("div");
    div.className =
      "job-card card-body bg-base-100 card w-full min-h-72 shadow-sm";
    div.innerHTML = `
    <div class="flex justify-between">
    <h2 class="card-title text-[#002C5C] font-semibold text-xl mb-1">
      ${apply.cardTitle}
    </h2>
    <button class="btn btn-circle">
      <svg
        class="size-[1.2em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
      >
        <!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
        <path
          d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z"
        />
      </svg>
    </button>
  </div>
  <p class="text-[#64748B] designation text-xl mb-5">
    ${apply.designation}
  </p>
  <p class="text-[#64748B] mb-5 salary">
    ${apply.salary}
  </p>
  <p
    class="text-[#002C5C] status-text font-medium px-3 py-3 bg-[#EEF4FF] rounded max-w-max mb-2"
  >
    ${apply.status}
  </p>
  <p class="mb-5 text-[#323B49] description">
    ${apply.description}
  </p>
  <!-- Actionable Card Button -->
  <div class="card-actions">
    <button class="btn applied-btn btn-outline btn-primary">
      APPLIED
    </button>
    <button class="btn interview-btn btn-outline btn-success">
      INTERVIEW
    </button>
    <button class="btn rejected-btn btn-outline btn-error">
      REJECTED
    </button>
  </div>
    `;
    filterSection.appendChild(div);
  }
}

document.getElementById("jobCount").innerText =
  cardContainer.querySelectorAll(".job-card").length;
