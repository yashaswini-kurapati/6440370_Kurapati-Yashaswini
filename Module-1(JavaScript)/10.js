// 10. Modern JavaScript Features

const events = [
  { name: "Yoga Session", category: "Health", date: "2025-07-20" },
  { name: "Cooking Demo", category: "Food", date: "2025-07-22" }
];

function printEventDetails({ name = "Unnamed", date = "TBD" } = {}) {
  console.log(`Event: ${name} on ${date}`);
}

const clonedEvents = [...events];

const filteredEvents = clonedEvents.filter(({ category }) => category === "Health");

filteredEvents.forEach(event => printEventDetails(event));
                