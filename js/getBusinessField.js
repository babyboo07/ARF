function fetchBusinessFields(selectedLocale = "vi") {
  const apiUrl = `${WRAPPER_URL}/api/business-field/list?locale=${selectedLocale}`;

  $.ajax({
    url: apiUrl,
    method: "GET",
    success: function (response) {
      if (response && response.data) {
        updateBusinessSelect(response.data);
      } else {
        console.warn("No data received from API.");
      }
    },
    error: function (error) {
      console.error("API Error:", error);
      displayError("Error fetching business fields. Please try again.");
    },
  });
}

function updateBusinessSelect(data) {
  const businessSelect = document.querySelector("#business_field_id");

  if (!businessSelect) {
    console.error("Business field select element not found.");
    return;
  }

  businessSelect.innerHTML = ""; 

  const defaultOption = new Option("Select a business field", "");
  businessSelect.appendChild(defaultOption);

  data.forEach((item) => {
    const option = new Option(item.title, item.id);
    businessSelect.appendChild(option);
  });
}


function displayError(message) {
  const cardContainer = document.querySelector("#cardContainer");
  if (cardContainer) {
    cardContainer.innerHTML = `<p style="color: red;">${message}</p>`;
  } else {
    console.error("Card container element not found.");
  }
}

function initializeLanguageSelector() {
  const languageSelector = document.querySelector("#language");

  if (!languageSelector) {
    console.error("Language selector not found.");
    return;
  }

  languageSelector.addEventListener("change", (event) => {
    const selectedLocale = event.target.value;
    fetchBusinessFields(selectedLocale);
  });
}

function initializePage() {
  initializeLanguageSelector();
  fetchBusinessFields(); 
}

window.onload = initializePage;
