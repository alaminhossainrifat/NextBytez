const images = document.querySelectorAll('.image-container img');
const commentDisplay = document.getElementById('comment');

const comments = {
    image1: ["Comment 1 for Person 1", "Comment 2 for Person 1", "Comment 3 for Person 1"],
    image2: ["Comment 1 for Person 2", "Comment 2 for Person 2", "Comment 3 for Person 2"],
    image3: ["Comment 1 for Person 3", "Comment 2 for Person 3", "Comment 3 for Person 3"],
    image4: ["Comment 1 for Person 4", "Comment 2 for Person 4", "Comment 3 for Person 4"]
};

let currentIndex = {
    image1: 0,
    image2: 0,
    image3: 0,
    image4: 0
};

images.forEach(image => {
    image.addEventListener('click', () => {
        const id = image.id;
        commentDisplay.textContent = comments[id][currentIndex[id]];
        currentIndex[id] = (currentIndex[id] + 1) % comments[id].length;
    });
});

const feedbackData = [
    {
        image: './image/1.png',
        rating: '★★★★★',
        text: 'Amazing experience! The service exceeded my expectations in every way possible.',
    },
    {
        image: './image/2 (1).png',
        rating: '★★★★★',
        text: 'Incredible attention to detail. Would definitely recommend to others!',
    },
    {
        image: './image/5.png',
        rating: '★★★★★',
        text: 'Outstanding service and support. Really impressed with the quality.',
    },
    {
        image: './image/79.png',
        rating: '★★★★★',
        text: 'Fantastic experience from start to finish. Could not be happier!',
    }
];

let currentSlide = 0;
const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.dots');

// Create feedback items
feedbackData.forEach((feedback, index) => {
    const feedbackItem = document.createElement('div');
    feedbackItem.className = `feedback-item ${index === 0 ? 'active' : ''}`;
    feedbackItem.innerHTML = `
        <img src="${feedback.image}" alt="Feedback ${index + 1}">
        <div class="rating">${feedback.rating}</div>
        <p class="text">${feedback.text}</p>
    `;
    slider.appendChild(feedbackItem);

    // Create dots
    const dot = document.createElement('div');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

function goToSlide(n) {
    const items = document.querySelectorAll('.feedback-item');
    const dots = document.querySelectorAll('.dot');
    
    items[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (n + items.length) % items.length;
    
    items[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

document.querySelector('.prev-btn').addEventListener('click', () => {
    goToSlide(currentSlide - 1);
});

document.querySelector('.next-btn').addEventListener('click', () => {
    goToSlide(currentSlide + 1);
});

// Auto-advance slides every 5 seconds
setInterval(() => {
    goToSlide(currentSlide + 1);
}, 5000);