console.log("🔥 Modernizer activated via GitHub!");

const sidebar = document.querySelector("#mainSideMenu");
if (sidebar) {
  sidebar.style.background = "#20232a";
  sidebar.style.color = "white";
  sidebar.style.border = "2px solid lime";
}

const table = document.querySelector("#customersTable");
if (table) {
  table.style.border = "2px solid red";
}
