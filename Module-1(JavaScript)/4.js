// 4. Functions, Scope, Closures, Higher-Order Functions

const events = [];

function addEvent(name, category, date) {
  events.push({ name, category, date, registrations: 0 });
}

function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  if (event) {
    event.registrations++;
    console.log(`User registered for ${eventName}. Total registrations: ${event.registrations}`);
  } else {
    console.log(`Event ${eventName} not found`);
  }
}

// Closure to track total registrations by category
function createCategoryTracker(category) {
  let totalRegistrations = 0;
  return function register() {
    totalRegistrations++;
    console.log(`Total registrations for ${category}: ${totalRegistrations}`);
  };
}

const musicTracker = createCategoryTracker('Music');

function filterEventsByCategory(category, callback) {
  const filtered = events.filter(e => e.category === category);
  callback(filtered);
}

// Example usage:
addEvent('Jazz Night', 'Music', '2025-07-01');
addEvent('Cooking Class', 'Workshop', '2025-06-10');

registerUser('Jazz Night');
musicTracker();

filterEventsByCategory('Music', filteredEvents => {
  console.log('Filtered music events:', filteredEvents);
});
