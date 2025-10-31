document.addEventListener("DOMContentLoaded", () => {
  const greetButton = document.getElementById("greet-btn");
  const greetMessage = document.getElementById("greet-msg");

  greetButton.addEventListener("click", () => {
    const greetings = [
      "Hello from Angad and Keshav!",
      "Welcome to our Azure Static Web App!",
      "Hope you're having a great day!",
      "Thanks for visiting our project!",
      "Greetings from A00192048 and A00199749!"
    ];

    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    greetMessage.textContent = randomGreeting;
  });
});
