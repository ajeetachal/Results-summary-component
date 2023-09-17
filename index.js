document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    const scored = document.getElementById('scored');
   

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

    updatecount();
});
const calculate = document.getElementById('calculate');