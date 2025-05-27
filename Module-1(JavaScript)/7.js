// 7. DOM Manipulation

const events = [
  { name: "Community Cleanup", date: "2025-06-15", seats: 10 },
  { name: "Book Fair", date: "2025-06-20", seats: 0 }
];

const eventContainer = document.querySelector("#eventContainer");

function renderEvents() {
  eventContainer.innerHTML = ""; // clear container
  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "eventCard";
    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Seats available: ${event.seats}</p>
      <button ${event.seats <= 0 ? "disabled" : ""} onclick="register('${event.name}')">Register</button>
    `;
    eventContainer.appendChild(card);
  });
}

function register(eventName) {
  const event = events.find(e => e.name === eventName);
  if (event && event.seats > 0) {
    event.seats--;
    renderEvents();
    alert(`Registered for ${eventName}`);
  }
}

renderEvents();
