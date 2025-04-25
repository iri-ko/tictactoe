const fields = [
    "circle",
    "null",
    "null",
    "null",
    "null",
    "cross",
    "null",
    "null",
    "null",
];

function init(){
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
                symbol = "O";
            } else if (value === "cross") {
                symbol = "X";
            }

            html += `<td>${symbol}</td>`;
        }
        html += "</tr>";
    }

    html += "</table>";
    content.innerHTML = html;
}

render();
