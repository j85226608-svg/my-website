document.addEventListener("DOMContentLoaded", function () {
  initNavigation();
  initContactForm();
});

function initNavigation() {
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.querySelector(".nav-list");

  if (!toggle || !navList) return;

  toggle.addEventListener("click", function () {
    toggle.classList.toggle("active");
    navList.classList.toggle("open");
  });

  navList.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      toggle.classList.remove("active");
      navList.classList.remove("open");
    });
  });

  document.addEventListener("click", function (e) {
    if (!toggle.contains(e.target) && !navList.contains(e.target)) {
      toggle.classList.remove("active");
      navList.classList.remove("open");
    }
  });
}

function initContactForm() {
  var form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = form.querySelector("#name").value.trim();
    var email = form.querySelector("#email").value.trim();
    var message = form.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    alert("Thank you for your message, " + name + "! We will get back to you shortly.");
    form.reset();
  });
}
