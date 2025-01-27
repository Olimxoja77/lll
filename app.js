// Valuta kurslari va tegishli davlatlar haqida ma'lumot
const rates = {
    "usd": 1,
    "eur": 0.85,
    "rub": 75,
    "jpy": 110
};

const countries = {
    "usd": "AQSH",
    "eur": "Evropa Ittifoqi",
    "rub": "Rossiya",
    "jpy": "Yaponiya"
};

// Select elementlari va inputlar
const currency1Select = document.getElementById('currency1');
const currency2Select = document.getElementById('currency2');
const amountInput = document.getElementById('amount');
const exchangeRateDisplay = document.getElementById('exchangeRate');
const currencyInfoDisplay = document.getElementById('currencyInfo');
const convertedAmountDisplay = document.getElementById('convertedAmount');
const calculateButton = document.getElementById('calculateButton');

// Kursni va davlatni yangilash va hisoblash funksiyasi
function updateExchangeRate() {
    const currency1 = currency1Select.value;
    const currency2 = currency2Select.value;
    const amount = parseFloat(amountInput.value);

    const rate1 = rates[currency1];
    const rate2 = rates[currency2];

    // Kursni hisoblash
    const exchangeRate = rate2 / rate1;
    const convertedAmount = amount * exchangeRate;

    // Kursni ko'rsatish
    exchangeRateDisplay.textContent = `1 ${currency1.toUpperCase()} = ${exchangeRate.toFixed(4)} ${currency2.toUpperCase()}`;

    // Davlatlarni ko'rsatish
    const country1 = countries[currency1];
    const country2 = countries[currency2];
    currencyInfoDisplay.textContent = `${currency1.toUpperCase()} - ${country1}, ${currency2.toUpperCase()} - ${country2}`;

    // Konvertatsiya qilingan summani ko'rsatish
    convertedAmountDisplay.textContent = `${amount} ${currency1.toUpperCase()} = ${convertedAmount.toFixed(2)} ${currency2.toUpperCase()}`;
}

// Kalkulyatorni ishga tushurish
calculateButton.addEventListener('click', updateExchangeRate);

// Dastlabki hisoblash
updateExchangeRate();

