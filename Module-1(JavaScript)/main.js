// ==============================
// 1. JavaScript Basics & Setup
// ==============================
console.log("Welcome to the Community Portal");
window.onload = () => alert("Page is fully loaded");

// ==============================
// 2. Syntax, Data Types, and Operators
// ==============================
const eventName = "Community Clean-Up";
const eventDate = "2025-06-15";
let availableSeats = 20;

console.log(`Event: ${eventName}, Date: ${eventDate}, Seats Available: ${availableSeats}`);

// User registers, reduce seats by one
availableSeats--;
console.log(`Seats left after one registration: ${availableSeats}`);


// ==============================
// 3. Conditionals, Loops, and Error Handling
// ==============================
const events = [
  { name: "Music Fest", date: "2025-06-20", seats: 0 },
  { name: "Art Workshop", date: "2025-07-10", seats: 15 },
  { name: "Tech Talk", date: "2024-12-01", seats: 10 }
];

function displayUpcomingEvents(events) {
  const today = new Date();
  events.forEach(event => {
    try {
      const eventDate = new Date(event.date);
      if (eventDate < today) {
        console.log(`Skipping past event: ${event.name}`);
        return;
      }
      if (event.seats <= 0) {
        console.log(`Skipping full event: ${event.name}`);
        return;
      }
      console.log(`Upcoming Event: ${event.name} on ${event.date}, Seats left: ${event.seats}`);
    } catch (error) {
      console.error(`Error processing event ${event.name}:`, error);
    }
  });
}
displayUpcomingEvents(events);


// ==============================
// 4. Functions, Scope, Closures, Higher-Order Functions
// ==============================
const allEvents = [];

function addEvent(name, category, date) {
  allEvents.push({ name, category, date, registrations: 0 });
}

function registerUser(eventName) {
  const event = allEvents.find(e => e.name === eventName);
  if (event) {
    event.registrations++;
    console.log(`User registered for ${eventName}. Total registrations: ${event.registrations}`);
  } else {
    console.log(`Event ${eventName} not found`);
  }
}

// Closure to track total registrations for a category
function createCategoryTracker(category) {
  let totalRegistrations = 0;
  return function register() {
    totalRegistrations++;
    console.log(`Total registrations for ${category}: ${totalRegistrations}`);
  };
}

const musicTracker = createCategoryTracker("Music");

// Higher-order function: filter events by category and call callback
function filterEventsByCategory(category, callback) {
  const filtered = allEvents.filter(e => e.category === category);
  callback(filtered);
}

// Demo usage:
addEvent("Jazz Night", "Music", "2025-07-01");
addEvent("Cooking Class", "Workshop", "2025-06-10");

registerUser("Jazz Night");
musicTracker();

filterEventsByCategory("Music", events => {
  console.log("Filtered music events:", events);
});


// ==============================
// 5. Objects and Prototypes
// ==============================
class Event {
  constructor(name, date, seats) {
    this.name = name;
    this.date = date;
    this.seats = seats;
  }
}

Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};

const event1 = new Event("Book Reading", "2025-08-10", 10);
console.log(event1.name);
console.log("Available?", event1.checkAvailability());
console.log("Entries:", Object.entries(event1));


// ==============================
// 6. Arrays and Methods
// ==============================
const communityEvents = [
  { name: "Rock Concert", category: "Music" },
  { name: "Art Exhibition", category: "Art" },
  { name: "Jazz Festival", category: "Music" }
];

// Add new event
communityEvents.push({ name: "Dance Workshop", category: "Dance" });

// Filter music events
const musicEvents = communityEvents.filter(e => e.category === "Music");
console.log("Music Events:", musicEvents);

// Map formatted event cards
const eventCards = communityEvents.map(e => `Event: ${e.name} (${e.category})`);
console.log("Event Cards:", eventCards);


// ==============================
// 7. DOM Manipulation
// ==============================
// Assuming your HTML has <div id="eventContainer"></div>
function renderEventsOnPage(events) {
  const eventContainer = document.querySelector("#eventContainer");
  if (!eventContainer) {
    console.warn("No #eventContainer found in DOM");
    return;
  }
  eventContainer.innerHTML = ""; // Clear old cards

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

// Register function for button
window.register = function(eventName) {
  const event = events.find(e => e.name === eventName);
  if (event && event.seats > 0) {
    event.seats--;
    renderEventsOnPage(events);
    alert(`Registered for ${eventName}`);
  }
};

// Initial render call (commented if no #eventContainer in your page)
// renderEventsOnPage(events);


// ==============================
// 8. Event Handling
// ==============================
// Assuming your HTML has elements with #categoryFilter and #searchInput
document.addEventListener("DOMContentLoaded", () => {
  const categoryFilter = document.querySelector("#categoryFilter");
  const searchInput = document.querySelector("#searchInput");

  if (categoryFilter) {
    categoryFilter.onchange = function() {
      const category = this.value;
      const filtered = allEvents.filter(e => e.category === category || category === "all");
      renderEventsOnPage(filtered);
    };
  }

  if (searchInput) {
    searchInput.onkeydown = function(e) {
      if (e.key === "Enter") {
        const query = e.target.value.toLowerCase();
        const filtered = allEvents.filter(e => e.name.toLowerCase().includes(query));
        renderEventsOnPage(filtered);
      }
    };
  }
});


// ==============================
// 9. Async JS, Promises, Async/Await
// ==============================
const mockAPI = "https://jsonplaceholder.typicode.com/posts";

fetch(mockAPI)
  .then(res => res.json())
  .then(data => console.log("Fetched (then/catch):", data.slice(0, 3)))
  .catch(err => console.error("Fetch error:", err));

async function loadEventsAsync() {
  const spinner = document.querySelector("#loadingSpinner");
  if (spinner) spinner.style.display = "block";

  try {
    const response = await fetch(mockAPI);
    const data = await response.json();
    console.log("Fetched (async/await):", data.slice(0, 3));
  } catch (error) {
    console.error("Fetch error:", error);
  } finally {
    if (spinner) spinner.style.display = "none";
  }
}

// loadEventsAsync();


// ==============================
// 10. Modern JavaScript Features
// ==============================
const eventList = [
  { name: "Yoga Session", category: "Health", date: "2025-07-20" },
  { name: "Cooking Demo", category: "Food", date: "2025-07-22" }
];

function printEventDetails({ name = "Unnamed", date = "TBD" } = {}) {
  console.log(`Event: ${name} on ${date}`);
}

const clonedList = [...eventList];
const healthEvents = clonedList.filter(({ category }) => category === "Health");
healthEvents.forEach(printEventDetails);


// ==============================
// 11. Working with Forms
// ==============================
// Assuming <form id="registrationForm"> with inputs named name, email, eventSelect
const form = document.querySelector("#registrationForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const eventSelected = form.elements["eventSelect"].value;

    if (!name || !email || !eventSelected) {
      alert("Please fill all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    alert(`Thank you ${name}, you registered for ${eventSelected}`);
    form.reset();
  });
}


// ==============================
// 12. AJAX & Fetch API
// ==============================
function submitRegistration(data) {
  console.log("Sending registration data:", data);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .then(json => {
      console.log("Server response:", json);
      alert("Registration successful!");
    })
    .catch(() => alert("Registration failed. Please try again."))
    .finally(() => {
      setTimeout(() => console.log("Simulated delayed response complete."), 1000);
    });
}

// Example call:
// submitRegistration({ name: "John Doe", email: "john@example.com", event: "Music Fest" });


// ==============================
// 13. Debugging and Testing
// ==============================
function submitForm(data) {
  console.log("Submitting form with data:", data);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => {
      console.log("Response status:", response.status);
      return response.json();
    })
    .then(json => console.log("Response JSON:", json))
    .catch(error => console.error("Fetch error:", error));
}

// submitForm({ name: "Test User", email: "test@user.com", event: "Test Event" });


// ==============================
// 14. jQuery and JS Frameworks
// ==============================
// This part assumes jQuery is loaded on your page
if (window.jQuery) {
  $(document).ready(function() {
    $('#registerBtn').click(function() {
      alert('Register button clicked!');
    });

    $('.eventCard').fadeIn(500);

    $('.eventCard').click(function() {
      $(this).fadeOut(500);
    });
  });

  // Benefit note:
  // Frameworks like React or Vue provide component-based UI,
  // efficient state management, and better scalability for complex apps.
} else {
  console.warn("jQuery not loaded; skipping jQuery exercises.");
}
