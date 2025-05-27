// 12. AJAX & Fetch API

function submitRegistration(data) {
  console.log("Sending data:", data);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(response => response.json())
    .then(json => {
      console.log("Server response:", json);
      alert("Registration successful!");
    })
    .catch(() => alert("Registration failed. Please try again."))
    .finally(() => {
      setTimeout(() => console.log("Simulated delayed response done."), 1000);
    });
}

// Example usage
submitRegistration({ name: "John", email: "john@example.com", event: "Music Fest" });
