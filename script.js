// -------------------------

const containerBox = document.querySelector(".faq_accordion");

containerBox.addEventListener("click", function (e) {
  const faqItem = e.target.closest(".faq_accordion_item");
  const image = faqItem.querySelector(".faq_accordion_image");
  const content = faqItem.querySelector(".faq_answer");

  if (faqItem) {
    content.classList.toggle("hidden");
    content.classList.contains("hidden")
      ? (image.src = "./images/icon-arrow.svg")
      : (image.src = "./images/icon-close.svg");
  }
});
// -----------------------------------------------------email validation-------------

var emailField = document.getElementById("email-field");
var emailError = document.getElementById("email-error");

function validateEmailAddress() {
  if (
    !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailError.innerHTML = "Woops, make sure it's an email";
    emailError.style.bottom = "10px";
    // emailError.style.bottom = "22px";

    emailField.style.border = "2px solid hsl(0, 94%, 66%)";
    emailField.style.borderBottom = "solid 20px hsl(0, 94%, 66%)";

    return false;
  }
  emailError.innerHTML = "";
  emailField.style.border = "2px solid green";

  return true;
}
// =========================================================

const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
