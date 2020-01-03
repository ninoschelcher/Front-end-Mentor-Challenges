const monthlyPrices = document.getElementsByClassName('monthly');
const annualPrices = document.getElementsByClassName('annual');
const priceSwitch = document.getElementById('priceswitch');

function updatePrices() {

        for (var i = 0; i < monthlyPrices.length; i += 1) {
            if (priceSwitch.checked) {
            monthlyPrices[i].style.display = "block";
            annualPrices[i].style.display = "none";
        } else {
            monthlyPrices[i].style.display = "none";
            annualPrices[i].style.display = "block";
        }
    }
}

priceSwitch.addEventListener("click", updatePrices);