const container = document.getElementById("registrationList");

const data = JSON.parse(localStorage.getItem("evoriaRegs")) || [];

if (data.length === 0) {
  container.innerHTML = "<p>No registrations yet!</p>";
} else {
  data.forEach((r, index) => {
    container.innerHTML += `
    <div class="event-card">
      <div class="event-info">
        <h3>${r.event}</h3>
        <p>Name: ${r.name}</p>
        <p>Email: ${r.email}</p>

        <button onclick="deleteRegistration(${index})" class="delete-btn">
          Delete
        </button>
      </div>
    </div>
  `;
  });
}

function deleteRegistration(index) {
  let data = JSON.parse(localStorage.getItem("evoriaRegs")) || [];

  data.splice(index, 1);

  localStorage.setItem("evoriaRegs", JSON.stringify(data));

  location.reload();
}
