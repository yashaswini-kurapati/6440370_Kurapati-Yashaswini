// 9. Async JS, Promises, Async/Await

const mockAPI = "https://jsonplaceholder.typicode.com/posts"; // example placeholder

// Using .then() and .catch()
fetch(mockAPI)
  .then(response => response.json())
  .then(data => console.log("Fetched data (then):", data.slice(0, 3)))
  .catch(error => console.error("Fetch error:", error));

// Using async/await with loading spinner simulation
async function loadEvents() {
  const spinner = document.querySelector("#loadingSpinner");
  spinner.style.display = "block";

  try {
    const response = await fetch(mockAPI);
    const data = await response.json();
    console.log("Fetched data (async/await):", data.slice(0, 3));
  } catch (error) {
    console.error("Fetch error:", error);
  } finally {
    spinner.style.display = "none";
  }
}

loadEvents();
