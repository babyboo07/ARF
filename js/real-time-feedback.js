function toggleAccordion(index) {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item, i) => {
    const content = item.querySelector(".accordion-content");
    const toggleBtn = item.querySelector(".toggle-btn");

    if (i === index) {
      const isActive = content.classList.toggle("active");
      toggleBtn.style.background = isActive ? "var(--primary--600)" : "none";
      toggleBtn.style.color = isActive ? "var(--white)" : "var(--primary--600)";
      toggleBtn.textContent = isActive ? "-" : "+";
    } else {
      content.classList.remove("active");
      toggleBtn.style.background = "none";
      toggleBtn.style.color = "var(--primary--600)";
      toggleBtn.textContent = "+";
    }
  });
}

function initializeCardScroller() {
  const cardWrapper = document.querySelector(".card-wrapper");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  let scrollAmount = 0;

  const updateButtonStates = () => {
    const containerWidth = document.querySelector(".list-5").offsetWidth;
    const maxScroll = -(cardWrapper.offsetWidth - containerWidth);

    prevButton.disabled = scrollAmount === 0;
    nextButton.disabled = scrollAmount <= maxScroll;

    prevButton.classList.toggle("disabled", scrollAmount === 0);
    nextButton.classList.toggle("disabled", scrollAmount <= maxScroll);
  };

  const scrollCards = (direction) => {
    const containerWidth = document.querySelector(".list-5").offsetWidth;
    const scrollStep = containerWidth - 50;

    if (direction === "next") {
      scrollAmount -= scrollStep;
      const maxScroll = -(cardWrapper.offsetWidth - containerWidth);
      scrollAmount = Math.max(scrollAmount, maxScroll);
    } else if (direction === "prev") {
      scrollAmount += scrollStep;
      scrollAmount = Math.min(scrollAmount, 0);
    }

    cardWrapper.style.transform = `translateX(${scrollAmount}px)`;
    updateButtonStates();
  };

  prevButton.addEventListener("click", () => scrollCards("prev"));
  nextButton.addEventListener("click", () => scrollCards("next"));

  updateButtonStates();
}


function toggleDetails(id) {
  const card = document.querySelector(`.card.${id}`);
  const cardContent = card.querySelector(".hidden-content");
  const cardSubtitle = card.querySelector(".feature-description.without-hover");
  const cardHiddenContent = card.querySelector(".div_card_keyfeature");
  const btnShowDetails = card.querySelector(".btn-show-content");

  const isHidden = cardContent.style.display === "none" || cardContent.style.display === "";

  card.style.background = isHidden
    ? "linear-gradient(0deg, #151515 0%, #151515 100%) lightgray 50% / cover no-repeat"
    : "";

  cardContent.style.display = isHidden ? "flex" : "none";
  cardHiddenContent.style.gap = isHidden ? "32px" : "16px";
  cardSubtitle.style.display = isHidden ? "none" : "block";
  btnShowDetails.style.backgroundImage = isHidden
    ? "url(../images/x-wrapper.svg)"
    : "url(../images/icon-wrapper.svg)";
}
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "flex";
    document.body.classList.add("no-scroll");
  } else {
    console.error(`No modal found with id: ${id}`);
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  } else {
    console.error(`No modal found with id: ${id}`);
  }
}

function changeContent(){
  const modal = document.querySelector(".modal-content-confirm");
  const modalSuccess = document.querySelector(".modal-content-success");
  modal.style.display = "none";
  modalSuccess.style.display = "block";
}

function confirmCode() {
  const form = document.getElementById("confirm-information-form");
  // const responseMessage = document.querySelector("#responseMessage");
  const linkElement = document.getElementById("dynamic-link");
  const formData = new FormData(form);
  const confirmCode = formData.get("code");
  
  const apiUrl = `${WRAPPER_URL}/api/info/get-link-arf?code=${confirmCode}`;
  
  $.ajax({
    url: apiUrl,
    method: "GET",
    success: function (response) {
      if (response.code == 200 && response.data) {
        const domain= response.data.domain;
        linkElement.href = domain
        changeContent();

        const countdown = document.getElementById("countdown");
        let remaining = 15
        const intervalId = setInterval(() => {
          remaining -= 1;
          countdown.textContent = remaining;
        }, 1000);

        setTimeout(() => {
          window.location.href = domain;
          clearInterval(intervalId);
        }, 15000);
      } else {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = "Thông tin chưa chính xác";
        const inputError = document.querySelector(".confirm-input");
        inputError.classList.add("error-input");
      }
    },
    error: function (error) {
      const errorMessage = document.getElementById("errorMessage");
      errorMessage.textContent = "Thông tin chưa chính xác";
      console.error("API Error:", error);
      displayError("Error fetching. Please try again.");
    },
  });
}

function confirmModal() {
  document.querySelector("#modal-confirm").addEventListener("submit", confirmCode());
}

$(document).ready(function () {
  initializeCardScroller();
});


document.getElementById("toggle-tab-bar").addEventListener("click", () => {
  const tabBar = document.getElementById("w-nav-overlay-0");
  const button = document.getElementById("toggle-tab-bar");
  if (tabBar.style.display === "none") {
    tabBar.style.display = "flex";
    tabBar.style.transition= "all, transform 400ms";
  } else {
    tabBar.style.display = "none";
    tabBar.style.transition= "all, transform 400ms";
  }
});

