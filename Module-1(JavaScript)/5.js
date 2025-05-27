// 5. Objects and Prototypes

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

console.log(event1.name); // Book Reading
console.log("Available?", event1.checkAvailability());

console.log("Entries:", Object.entries(event1));
