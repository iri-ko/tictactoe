const fields = [
    "circle",
    "cross",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
];

function init() {
    render();
}

function render() {
    const content = document.getElementById("content");
    let html = "<table>";

    for (let row = 0; row < 3; row++) {
        html += "<tr>";
        for (let col = 0; col < 3; col++) {
            const index = row * 3 + col;
            const value = fields[index];
            let symbol = "";

            if (value === "circle") {
                symbol = generateAnimatedCircleSVG();
            } else if (value === "cross") {
                symbol = generateAnimatedXSVG();
            }

            html += `<td>${symbol}</td>`;
        }
        html += "</tr>";
    }

    html += "</table>";
    content.innerHTML = html;
}

function generateAnimatedCircleSVG() {
    return `
  <svg width="40" height="40" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="35" r="30"
            stroke="#00B0EF"
            stroke-width="5"
            fill="none"
            stroke-dasharray="188.4"
            stroke-dashoffset="188.4">
      <animate attributeName="stroke-dashoffset"
               from="188.4" to="0"
               dur="0.5s"
               fill="freeze"
               begin="0s"/>
    </circle>
  </svg>
    `;
}

function generateAnimatedXSVG() {
    return `
  <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <line x1="5" y1="5" x2="35" y2="35"
          stroke="#FFCC00"
          stroke-width="4"
          stroke-linecap="round"
          stroke-dasharray="42"
          stroke-dashoffset="42">
      <animate attributeName="stroke-dashoffset"
               from="42" to="0"
               dur="0.1s"
               fill="freeze"
               begin="0s"/>
    </line>
    <line x1="35" y1="5" x2="5" y2="35"
          stroke="#FFCC00"
          stroke-width="4"
          stroke-linecap="round"
          stroke-dasharray="42"
          stroke-dashoffset="42">
      <animate attributeName="stroke-dashoffset"
               from="42" to="0"
               dur="0.8s"
               fill="freeze"
               begin="0s"/>
    </line>
  </svg>
    `;
}
