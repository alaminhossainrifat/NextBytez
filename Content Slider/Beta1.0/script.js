document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    const mainImage = document.querySelector('.main-image img');
    const nameElement = document.querySelector('.text-content p strong');
    const locationElement = document.querySelector('.text-content p[style]');
    const quoteElement = document.querySelector('.text-content blockquote');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');

    let currentIndex = 0;

    const sliderData = [
        {
            image: './image/main-image.jpg',
            name: 'Miriam R.',
            location: 'aus Niedersachsen',
            quote: '„Unsere Abireise nach Lloret de Mar war einfach unvergesslich! Die Reiseleiter waren super freundlich und immer ansprechbar. Wir hatten die beste Zeit bei den Partys im Megapark!"'
        },
        {
            image: './image/thumb1.jpg',
            name: 'Jonas K.',
            location: 'aus Bayern',
            quote: '„Die Strandpartys waren der absolute Wahnsinn! Tolle Musik, coole Leute und eine unglaubliche Atmosphäre. Definitiv die beste Entscheidung für unsere Abireise!"'
        },
        {
            image: './image/thumb2.jpg',
            name: 'Laura M.',
            location: 'aus Berlin',
            quote: '„Lloret de Mar ist einfach perfekt für Abireisen! Die Clubs, das Wetter und die gesamte Stimmung waren unglaublich. Würde es sofort wieder machen!"'
        },
        {
            image: './image/thumb3.jpg',
            name: 'Tim S.',
            location: 'aus Hamburg',
            quote: '„Eine Woche voller unvergesslicher Momente! Die Organisation war top und wir konnten die Zeit mit unseren Freunden richtig genießen."'
        }
    ];

    const updateContent = () => {
        const currentData = sliderData[currentIndex];
        mainImage.src = currentData.image;
        nameElement.textContent = currentData.name;
        locationElement.textContent = currentData.location;
        quoteElement.textContent = currentData.quote;
    };

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateContent();
        });
    });

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? sliderData.length - 1 : currentIndex - 1;
        updateContent();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex === sliderData.length - 1) ? 0 : currentIndex + 1;
        updateContent();
    });

    // Initialize with first slide
    updateContent();
});
