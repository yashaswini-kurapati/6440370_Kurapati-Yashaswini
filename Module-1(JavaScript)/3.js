// 3. Conditionals, Loops, and Error Handling

const events = [
  { name: "Music Fest", date: "2025-06-20", seats: 0 },
  { name: "Art Workshop", date: "2025-05-10", seats: 15 },
  { name: "Tech Talk", date: "2024-12-01", seats: 10 }
];

function displayUpcomingEvents(events) {
  const today = new Date();
  events.forEach(event => {
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
  });
}

try {
  displayUpcomingEvents(events);
} catch (err) {
  console.error("Error displaying events:", err);
}
