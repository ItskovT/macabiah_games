function toggleNav() {
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}

var video;
var icon;

document.addEventListener('DOMContentLoaded', function () {
    video = document.getElementById("myVideo");
    icon = document.querySelector(".control-icon");
});

function togglePlayPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateIcon(src) {
    icon.src = "images/" + src;
}

function filterItems(category, button) {
    var items = document.querySelectorAll('.squere');

    if (button.classList.contains('active')) {
        items.forEach(function (item) {
            item.classList.remove('inactive');
        });

        var buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(function (btn) {
            btn.classList.remove('active');
        });
    } else {
        items.forEach(function (item) {
            item.classList.remove('inactive');
        });

        if (category) {
            items.forEach(function (item) {
                if (item.getAttribute('data-category') !== category) {
                    item.classList.add('inactive');
                }
            });
        }

        var buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(function (btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    }
}

function toggleFavorite(button) {
    var sportsItem = button.closest('.squere');
    var isFavorite = favoritesList.includes(sportsItem);

    if (isFavorite) {
        favoritesList = favoritesList.filter(item => item !== sportsItem);
        button.textContent = "♡";
    } else {
        favoritesList.push(sportsItem);
        button.textContent = "❤️";
    }

    updateFavoritesList();
}

var favoritesList = [];

function updateFavoritesList() {
    var favoritesContainer = document.getElementById('favorites-list');
    var emptyMessage = document.getElementById('empty-message');
    favoritesContainer.innerHTML = '';

    if (favoritesList.length === 0) {
        emptyMessage.style.display = 'block'; 
    } else {
        emptyMessage.style.display = 'none';  

        favoritesList.forEach(item => {
            var listItem = document.createElement('li');
            listItem.textContent = item.querySelector('.textStyle').textContent;
            favoritesContainer.appendChild(listItem);
        });
    }
}
