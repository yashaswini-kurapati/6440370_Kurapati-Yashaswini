// 8. Event Handling

document.querySelector("#categoryFilter").onchange = function() {
  const selectedCategory = this.value;
  filterEvents(selectedCategory);
};

document.querySelector("#searchInput").onkeydown = function(e) {
  if (e.key === "Enter") {
    const query = e.target.value.toLowerCase();
    filterEventsByName(query);
  }
};

function filterEvents(category) {
  console.log("Filter events by category:", category);
  // Filtering logic here
}

function filterEventsByName(name) {
  console.log("Search events by name:", name);
  // Search logic here
}

document.querySelectorAll(".registerBtn").forEach(btn => {
  btn.onclick = function() {
    alert("Register button clicked for " + btn.dataset.event);
  };
});
