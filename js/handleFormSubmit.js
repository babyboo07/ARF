function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "flex";
    document.body.classList.add("no-scroll");
  } else {
    console.error(`No modal found with id: ${id}`);
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  const form = document.querySelector("#email-form");
  const responseMessage = document.querySelector("#responseMessage");

  const formData = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    company_name: form.company_name.value,
    business_field_id: form.business_field_id.value,
    note: form.note.value,
  };

  if (formData != null) {
    const apiUrl = `${WRAPPER_URL}/api/lead/save`;
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit form");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data);
        openModal('modal-notification');
        // responseMessage.innerHTML = `<div class="success-message w-form-done">
        //         <div>Thank you! Your submission has been received!</div>
        //       </div>`;
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        responseMessage.innerHTML = `<div class="w-form-fail">
                <div>${error.message}</div>
              </div>`;
      });
  }
}

document.querySelector("#email-form").addEventListener("submit", handleFormSubmit);
