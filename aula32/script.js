//  obter os elementos html
const searchButton = document.getElementById('searchButton');
const countryInput = document.getElementById('countryInput');
const countryInfoContainer = document.getElementById('countryInfoContainer');

//adiciona enetro de clique ao botão
searchButton.addEventListener('click', async () => {
    const countryName = countryInput.value;
    console.log (`https://restcountries.com/v3.1/name/${countryName}`);
    const response = await fetch (`https://restcountries.com/v3.1/name/${countryName}`);
    const data = await response.json();

    if(data.length > 0) {
        const country = data[0];
        const {name,capital,region,population,flags} = country;
        countryInfoContainer.innerHTML = `
        <h2>Informações do país</h2>
        <ul>
            <li><strong>nome:</strong>${name.common}</li>
            <li><strong>Capital:</strong>${capital}</li>
            <li><strong>Região:</strong>${region}</li>
            <li><strong>População:</strong>${population}</li>
            <li><img src="${flags.png}"</li>

        </ul>
        `;
    } else {
        countryInfoContainer.innerHTML =`Nenhum país encontrado`;

    }
});