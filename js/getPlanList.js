function fetchPlanList() {
  const cardContainer = document.querySelector("#cardContainer");

  $.ajax({
    url: `${WRAPPER_URL}/api/plan/list`,
    method: "GET",
    success: function (response) {
      if (response && response.data) {
        renderCards(response.data);
      } else {
        displayError(cardContainer, "No data available.");
      }
    },
    error: function (error) {
      displayError(cardContainer, `Error: ${error.message}`);
    },
  });
}

function displayError(container, message) {
  container.innerHTML = `<p style="color: red;">${message}</p>`;
}

function formatToMillions(number) {
  if (number >= 1000000) {
    return `${number / 1000000} triệu`;
  }
  return "Miễn Phí";
}

function renderChildItems(packageDetails) {
  return packageDetails
    .filter((detail) => detail.should_display === true)
    .map(
      (detail) => `
        <div class="item-6">
          <div class="strong-webflow-io-domain">${detail.title}</div>
          <div class="text-27">${detail.value}</div>
        </div>`
    )
    .join("");
}

function renderCard(item) {
  const cardBtn =
    item.price > 0
      ? `
        <div class="button primary noicon">
          <a href="#" class="button_text primary">Chọn gói này</a>
        </div>`
      : `
        <div class="button noicon">
          <a href="#" class="button_text">Dùng thử miễn phí</a>
        </div>`;

  const childItemsHTML = renderChildItems(item.package_details || []);

  return `
    <div class="item-5">
      <div class="div-pricing-card">
        <div class="badget">
          <div class="text_badget">${item.name}</div>
        </div>
        <div>
          <div class="text-pricing-card-title">
            ${formatToMillions(item.price)}
          </div>
          <div class="text-pricing-card-description" style="height: 40px;">
            ${item.description}
          </div>
        </div>
      </div>
      ${cardBtn}
      <div class="list---starter-site-plan-key-features">
        ${childItemsHTML}
      </div>
    </div>`;
}

function renderDefaultCard(item) {
  return `
    <div class="item-5">
      <div class="div-pricing-card">
        <div class="badget">
          <div class="text_badget">${item.name}</div>
        </div>
        <div>
          <div class="text-pricing-card-title">
            Liên Hệ
          </div>
          <div class="text-pricing-card-description" style="height: 40px;">
          </div>
        </div>
      </div>
      <div class="button primary noicon">
        <a href="#" class="button_text primary">Liên hệ</a>
      </div>
      <div class="list---starter-site-plan-key-features"></div>
    </div>`;
}

function renderCards(cards) {
  const cardContainer = document.querySelector("#cardContainer");
  cardContainer.innerHTML = "";

  cards.forEach((item) => {
    const cardHTML = item.is_on_premise === false ? renderCard(item) : renderDefaultCard(item);

    cardContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
}

function initializePage() {
  fetchPlanList();
}

window.onload = initializePage();
