let events = [];

// Add Event Function
function addEvent() {
  let title = document.getElementById("title").value;
  let date = document.getElementById("date").value;
  let category = document.getElementById("category").value;
  let desc = document.getElementById("description").value;

  if (title === "" || date === "") {
    alert("Please fill all required fields!");
    return;
  }

  let event = { title, date, category, desc };
  events.push(event);

  displayEvents();
  clearForm();
}

// Display Events
function displayEvents() {
  let list = document.getElementById("eventList");
  list.innerHTML = "";

  if (events.length === 0) {
    list.innerHTML = "No events yet!";
    return;
  }

  events.forEach((e, index) => {
    list.innerHTML += `
      <div class="event">
        <b>${e.title}</b><br>
        📅 ${e.date} | ${e.category}<br>
        ${e.desc}
      </div>
    `;
  });
}

// Clear Input Fields
function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";
}

// Clear All Events
function clearEvents() {
  events = [];
  displayEvents();
}

// Add Sample Event
function addSample() {
  events.push({
    title: "AI Workshop",
    date: "2026-02-20",
    category: "Workshop",
    desc: "Hands-on AI tools training"
  });
  displayEvents();
}

// DOM Manipulation Example
document.addEventListener("keydown", function(e) {
  document.getElementById("keyOutput").innerText =
    "You Pressed: " + e.key;
});
