document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById('card-container');
    const apiUrl = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info';
    const apiKey = '7534531646msha5f167de56e9e8bp144389jsnc55df6d760a0';

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
            'x-rapidapi-key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        Object.keys(data).forEach(key => {
            const item = data[key];
            
            const card = document.createElement('div');
            card.className = 'card';

            const title = document.createElement('h2');
            title.className = 'card-title';
            title.innerText = key;

            const content = document.createElement('p');
            content.className = 'card-content';
            content.innerText = JSON.stringify(item);

            card.appendChild(title);
            card.appendChild(content);

            card.addEventListener('click', () => {
                card.classList.toggle('expanded');
            });

            cardContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});
