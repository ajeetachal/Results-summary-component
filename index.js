const scored = document.getElementById('scored');
const calculate = document.getElementById('calculate');

var targetcount = parseInt(scored.textContent);
var count = 0;
calculate.addEventListener('click', updatecount);
function updatecount() {
    if (count <= targetcount) {
        scored.textContent = Math.floor(count);
        count += 1; // You can adjust the increment as needed

        setTimeout(updatecount, 30); // Delay in milliseconds
    }
}

updatecount()