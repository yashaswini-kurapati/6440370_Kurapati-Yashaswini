// 6. Arrays and Methods

const events = [
  { name: "Rock Concert", category: "Music" },
  { name: "Art Exhibition", category: "Art" },
  { name: "Jazz Festival", category: "Music" }
];

// Add new event
events.push({ name: "Dance Workshop", category: "Dance" });

// Filter music events
const musicEvents = events.filter(event => event.category === "Music");
console.log("Music Events:", musicEvents);

// Map formatted event names
const eventCards = events.map(event => `Event: ${event.name} (${event.category})`);
console.log("Event Cards:", eventCards);
