// 11. Working with Forms

const form = document.querySelector("#registrationForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = form.elements["name"].value.trim();
  const email = form.elements["email"].value.trim();
  const eventSelected = form.elements["eventSelect"].value;

  if (!name || !email || !eventSelected) {
    alert("Please fill all fields");
    return;
  }

  // Simple email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email");
    return;
  }

  alert(`Thank you ${name}, you registered for ${eventSelected}`);
  form.reset();
});
        