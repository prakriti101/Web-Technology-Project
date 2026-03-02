const events = [
  {
    title: "AI Workshop",
    category: "Tech",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c"
  },
  {
    title: "Cultural Fest",
    category: "Cultural",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
  },
  {
    title: "Startup Meetup",
    category: "Tech",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786"
  },
  {
    title: "Dance Workshop",
    category: "Workshop",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a"
  }
];

const container = document.getElementById("eventContainer");

function displayEvents(list) {
  if (!container) return;

  container.innerHTML = "";

  list.forEach(event => {
    container.innerHTML += `
      <div class="event-card">
        <img src="${event.img}">
        <div class="event-info">
          <h3>${event.title}</h3>
          <p>${event.category}</p>
          <button onclick="openRegister('${event.title}')">
            Register
          </button>
        </div>
      </div>
    `;
  });
}


displayEvents(events);

function searchEvents() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  const query = input.value.toLowerCase();

  const filtered = events.filter(e =>
    e.title.toLowerCase().includes(query)
  );

  displayEvents(filtered);
}

function filterCategory(category) {
  const filtered = events.filter(e => e.category === category);
  displayEvents(filtered);
}

function scrollToEvents() {
  const section = document.getElementById("events");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function openRegister(title) {
  window.location.href =
    "register.html?event=" + encodeURIComponent(title);
}
