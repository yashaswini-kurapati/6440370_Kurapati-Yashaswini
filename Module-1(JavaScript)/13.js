// 13. Debugging and Testing

// Example function with logs and breakpoint-friendly code
function submitForm(data) {
  console.log("Submitting form with data:", data);
  // Set breakpoint here in Dev Tools

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(response => {
      console.log("Response status:", response.status);
      return response.json();
    })
    .then(json => {
      console.log("Response JSON:", json);
    })
    .catch(error => {
      console.error("Fetch error:", error);
    });
}

// Example test call
submitForm({ name: "Test User", email: "test@user.com", event: "Test Event" });
