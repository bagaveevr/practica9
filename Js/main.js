
document.getElementById('validation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    

    const name = document.getElementById('name').value.trim();
    const birthYear = document.getElementById('birth-year').value.trim();
    const currentYear = new Date().getFullYear();
    
    let hasError = false;


    if (name === '' || name.length < 2) {
        document.getElementById('name-error').textContent = 'Имя должно содержать минимум 2 символа';
        document.getElementById('name').classList.add('error-border');
        hasError = true;
    } else {
        document.getElementById('name-error').textContent = '';
        document.getElementById('name').classList.remove('error-border');
    }


    if (birthYear === '' || birthYear.length !== 4 || isNaN(birthYear)) {
        document.getElementById('birth-year-error').textContent = 'Введите корректный год рождения';
        document.getElementById('birth-year').classList.add('error-border');
        hasError = true;
    } else if (currentYear - birthYear < 18) {
        document.getElementById('birth-year-error').textContent = 'Вам должно быть не менее 18 лет';
        document.getElementById('birth-year').classList.add('error-border');
        hasError = true;
    } else {
        document.getElementById('birth-year-error').textContent = '';
        document.getElementById('birth-year').classList.remove('error-border');
    }


    if (!hasError) {
        alert('Форма успешно отправлена');
    }
});


const newsArray = [];


document.getElementById('news-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('news-title').value.trim();
    const text = document.getElementById('news-text').value.trim();
    let hasError = false;

    if (title === '' || title.length < 8) {
        document.getElementById('title-error').textContent = 'Название должно содержать минимум 8 символов';
        document.getElementById('news-title').classList.add('error-border');
        hasError = true;
    } else {
        document.getElementById('title-error').textContent = '';
        document.getElementById('news-title').classList.remove('error-border');
    }


    if (text === '' || text.length > 300) {
        document.getElementById('text-error').textContent = 'Текст новости должен быть менее 300 символов';
        document.getElementById('news-text').classList.add('error-border');
        hasError = true;
    } else {
        document.getElementById('text-error').textContent = '';
        document.getElementById('news-text').classList.remove('error-border');
    }


    if (!hasError) {
        newsArray.push({ title, text });
        displayNews();
        document.getElementById('news-title').value = '';
        document.getElementById('news-text').value = '';
    }
});


function displayNews() {
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = '';

    newsArray.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `<h3>${news.title}</h3><p>${news.text}</p>`;
        newsList.appendChild(newsItem);
    });
}


document.getElementById('dark-mode').addEventListener('click', function() {
    document.body.classList.add('dark-mode');
});

document.getElementById('light-mode').addEventListener('click', function() {
    document.body.classList.remove('dark-mode');
});
