// $(document).ready(function () {
//   function enableHorizontalScrollOnVerticalScroll(selector) {
//     const scrollContainer = document.querySelector(`${selector} .flex-block-5`);
//     const section = document.querySelector(selector);

//     if (!scrollContainer || !section) return;

//     // Calculate maximum scroll width and height once
//     const maxScrollX = scrollContainer.scrollWidth - scrollContainer.parentElement.clientWidth;

//     // Add scroll event listener
//     window.addEventListener("scroll", () => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.offsetHeight;
//       const viewportHeight = window.innerHeight;

//       if (window.innerWidth <= 821) {
//         // Reset transform on mobile
//         scrollContainer.style.transform = "none";
//         return;
//       }

//       // Check if the section is in view
//       var x =
//         document.getElementById("heroSection").offsetHeight +
//         document.getElementById("Solution").offsetHeight -
//         document.getElementById("header").offsetHeight * 2;
//       if (window.scrollY >= x && window.scrollY <= sectionTop + sectionHeight) {
//         // Calculate the scroll progress within the section (from 0 to 1)
//         const scrollPercent = (window.scrollY - x) / (sectionHeight + viewportHeight);

//         // Apply horizontal scroll based on percentage
//         const scrollX = maxScrollX * scrollPercent;
//         scrollContainer.style.transform = `translateX(${-scrollX}px)`;
//       }
//     });
//   }

//   // Initialize the function with your specific section selector
//   enableHorizontalScrollOnVerticalScroll("#Key-feature");
// });

function toggleAccordion(index) {
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((item, i) => {
    const content = item.querySelector(".accordion-content");
    const toggleBtn = item.querySelector(".toggle-btn");

    if (i === index) {
      content.classList.toggle("active");
      toggleBtn.style.background =
        toggleBtn.style.background === "var(--primary--600)" ? "none" : "var(--primary--600)";
      toggleBtn.style.color =
        toggleBtn.style.color === "var(--white)" ? "var(--primary--600)" : "var(--white)";
      toggleBtn.textContent = toggleBtn.textContent === "+" ? "-" : "+";
    } else {
      content.classList.remove("active");
      toggleBtn.style.background = "none";
      toggleBtn.style.color = "var(--primary--600)";
      toggleBtn.textContent = "+";
    }
  });
}

$(document).ready(function () {
  const cardWrapper = document.querySelector(".card-wrapper");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  let scrollAmount = 0;
  
  const scrollCards = (direction) => {
    const containerWidth = document.querySelector(".list-5").offsetWidth;
    const scrollStep = containerWidth - 50; // Adjust step for better alignment
  
    if (direction === "next") {
      scrollAmount -= scrollStep;
      if (Math.abs(scrollAmount) >= cardWrapper.offsetWidth - containerWidth) {
        scrollAmount = -(cardWrapper.offsetWidth - containerWidth);
      }
    } else if (direction === "prev") {
      scrollAmount += scrollStep;
      if (scrollAmount > 0) scrollAmount = 0;
    }
    cardWrapper.style.transform = `translateX(${scrollAmount}px)`;
  };
  
  prevButton.addEventListener("click", () => scrollCards("prev"));
  nextButton.addEventListener("click", () => scrollCards("next"));
})

function toggleDetails(id) {
  const card = document.querySelector(`.card.${id}`);
  const cardContent = card.querySelector(".hidden-content");
  const cardSubtitle = card.querySelector(".feature-description.without-hover");
  const btnShowDetails = card.querySelector(".btn-show-content");

  const isHidden = cardContent.style.display === "none" || cardContent.style.display === "";

  card.style.background = isHidden 
    ? "linear-gradient(0deg, #151515 0%, #151515 100%) lightgray 50% / cover no-repeat" 
    : "";

  cardContent.style.display = isHidden ? "flex" : "none";
  cardSubtitle.style.display = isHidden ? "none" : "block";
  btnShowDetails.style.backgroundImage = isHidden 
    ? "url(../images/x-wrapper.svg)" 
    : "url(../images/icon-wrapper.svg)";
}