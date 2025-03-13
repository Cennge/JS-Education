window.addEventListener('DOMContentLoaded', () => {
    const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const currencies = data.filter(currency => currency.cc === 'USD' || currency.cc === 'EUR');

            const tableBody = document.getElementById('currency-table-body');
            tableBody.innerHTML = '';

            currencies.forEach(currency => {
                const row = document.createElement('tr');
                row.innerHTML = `
                        <td>${currency.txt}</td>
                        <td>${currency.cc}</td>
                        <td>${currency.rate.toFixed(2)}</td>
                        <td>${currency.exchangedate}</td>
                    `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
        });
});
