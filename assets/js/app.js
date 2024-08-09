document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById('card-container');
    const apiUrl = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info';
    const apiKey = '7534531646msha5f167de56e9e8bp144389jsnc55df6d760a0';


    const loadingMessage = document.createElement('p');
    loadingMessage.innerText = "Please wait, loading the information...";
    loadingMessage.id = 'loading-message';
    cardContainer.appendChild(loadingMessage);

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
            'x-rapidapi-key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        cardContainer.removeChild(loadingMessage);

        Object.keys(data).forEach(key => {
            const item = data[key];

            const card = document.createElement('div');
            card.className = 'card';

            const title = document.createElement('h2');
            title.className = 'card-title';
            title.innerText = key;

            const content = document.createElement('div');
            content.className = 'card-content';

            if (typeof item === 'object' && !Array.isArray(item)) {
                Object.keys(item).forEach(subKey => {
                    const subItem = item[subKey];
                    const p = document.createElement('p');
                    p.innerText = `${subKey}: ${JSON.stringify(subItem)}`;
                    content.appendChild(p);
                });
            } else if (Array.isArray(item)) {
                item.forEach(element => {
                    const p = document.createElement('p');
                    p.innerText = element;
                    content.appendChild(p);
                });
            } else {
                const p = document.createElement('p');
                p.innerText = item;
                content.appendChild(p);
            }

            card.appendChild(title);
            card.appendChild(content);

            card.addEventListener('click', () => {
                card.classList.toggle('expanded');
            });

            cardContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        loadingMessage.innerText = "Failed to load information. Please try again later.";
    });
});
