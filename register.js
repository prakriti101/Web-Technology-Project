const params = new URLSearchParams(window.location.search);
const eventName = params.get("event");

document.getElementById("eventTitle").value = eventName;

const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const data = JSON.parse(localStorage.getItem("evoriaRegs")) || [];

  data.push({
    name: name,
    email: email,
    event: eventName,
  });

  localStorage.setItem("evoriaRegs", JSON.stringify(data));

  document.getElementById("msg").innerText =
    "Registered successfully for " + eventName + " 🎉";
});
