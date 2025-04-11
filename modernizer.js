console.log("🔥 Modernizer activated via GitHub!");

(function applyModernizer() {
  const sidebar = document.querySelector("#mainSideMenu");
  const table = document.querySelector("#customersTable");
  const wrapper = document.querySelector("#customersTable_wrapper .datatable-scroll");

  if (!sidebar || !table || !wrapper) {
    console.warn("⏳ Waiting for required elements...");
    return setTimeout(applyModernizer, 500);
  }

  const style = document.createElement("style");
  style.innerHTML = `
    /* SIDEBAR MODERNIZATION */
    #mainSideMenu {
      background-color: #1e1e2f !important;
      color: #ffffff !important;
      font-family: 'Segoe UI', sans-serif;
      font-size: 14px;
      padding: 10px;
      width: 220px;
      transition: width 0.3s ease;
      overflow: hidden;
      position: relative;
    }
    #mainSideMenu.collapsed {
      width: 60px !important;
    }
    #mainSideMenu li {
      list-style: none;
      margin: 8px 0;
      padding: 8px 12px;
      border-radius: 6px;
      transition: background-color 0.2s ease;
      display: flex;
      align-items: center;
      gap: 8px;
      white-space: nowrap;
      cursor: pointer;
    }
    #mainSideMenu li:hover {
      background-color: #2e3240;
    }
    #mainSideMenu li i, #mainSideMenu li span {
      display: none !important;
    }
    #mainSideMenu li::before {
      content: "📁";
      font-size: 16px;
    }
    #mainSideMenu li:nth-child(1)::before { content: "🏠"; }
    #mainSideMenu li:nth-child(2)::before { content: "👥"; }
    #mainSideMenu li:nth-child(3)::before { content: "💳"; }
    #mainSideMenu li:nth-child(4)::before { content: "📈"; }

    /* SIDEBAR TOGGLE BUTTON */
    #sidebarToggle {
      position: fixed;
      top: 10px;
      left: 10px;
      background-color: #5055f1;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 6px 10px;
      z-index: 9999;
      font-size: 14px;
      cursor: pointer;
    }

    /* TABLE WRAPPER */
    #customersTable_wrapper .datatable-scroll {
      background: #f9f9fb;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 0 10px rgba(0,0,0,0.05);
      overflow-x: auto;
    }

    /* TABLE STYLING */
    #customersTable {
      width: 100%;
      border-collapse: collapse;
      background-color: #fff;
      font-family: 'Segoe UI', sans-serif;
      font-size: 13px;
    }
    #customersTable thead {
      background-color: #eeeeee;
    }
    #customersTable th, #customersTable td {
      padding: 10px 12px;
      border: 1px solid #ddd;
      text-align: left;
    }
    #customersTable tbody tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    #customersTable tbody tr:hover {
      background-color: #e6f0ff;
    }

    /* RESPONSIVE TABLE */
    @media (max-width: 768px) {
      #customersTable, #customersTable thead, #customersTable tbody, #customersTable th, #customersTable td, #customersTable tr {
        display: block;
      }
      #customersTable thead {
        display: none;
      }
      #customersTable tr {
        margin-bottom: 16px;
        background: #fff;
        border-radius: 8px;
        padding: 8px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.05);
      }
      #customersTable td {
        text-align: right;
        padding-left: 50%;
        position: relative;
      }
      #customersTable td::before {
        content: attr(data-label);
        position: absolute;
        left: 12px;
        top: 10px;
        white-space: nowrap;
        font-weight: bold;
        text-align: left;
      }
    }
  `;
  document.head.appendChild(style);

  // Add sidebar toggle
  if (!document.querySelector("#sidebarToggle")) {
    const toggle = document.createElement("button");
    toggle.id = "sidebarToggle";
    toggle.innerText = "☰";
    toggle.onclick = () => sidebar.classList.toggle("collapsed");
    document.body.appendChild(toggle);
  }

  // Add data-label attributes to support responsive layout
  const headers = Array.from(table.querySelectorAll("thead th")).map(th => th.textContent.trim());
  table.querySelectorAll("tbody tr").forEach(row => {
    row.querySelectorAll("td").forEach((td, i) => {
      if (headers[i]) td.setAttribute("data-label", headers[i]);
    });
  });

  console.log("✅ Modernizer applied!");
})();
