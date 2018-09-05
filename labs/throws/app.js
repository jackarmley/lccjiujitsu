fetch('./throws.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        const throwsJson = JSON.parse(JSON.stringify(json));
        buildList(throwsJson);
    });
    
const buildList = function(data) {
    const container = document.querySelector('.technique-card-container');
    for (let key in data) {
        container.appendChild(buildCard(key, data[key]));
    }
}

const buildCard = function(name, details) {
    const card = document.createElement('article');
    card.classList.add('technique-card', 'grade--' + details.grade);
    card.innerHTML = 
    `   <div class="technique-card-content">
            <div class="technique-card-front">
                <h2 class="technique-card-header">${name}</h2>
            </div>
            <div class="technique-card-back">
                <p class="technique-card-subtext">(${details.en})</p>
            </div>
        </div>
    `
    return card;
}