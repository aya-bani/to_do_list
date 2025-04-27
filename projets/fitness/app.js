const workouts = [
    {
        id: "yoga-1",
        title: "30-Min Beginner Yoga Flow",
        description: "Perfect yoga session for beginners focusing on fundamental poses and proper breathing techniques.",
        category: "Yoga",
        duration: "30 min",
        thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
        youtubeUrl: "https://www.youtube.com/watch?v=v7AYKMP6rOE",
        difficulty: "Beginner"
    },
    {
        id: "yoga-1",
        title: "30-Min Beginner Yoga Flow",
        description: "Perfect yoga session for beginners focusing on fundamental poses and proper breathing techniques.",
        category: "Yoga",
        duration: "30 min",
        thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
        youtubeUrl: "https://www.youtube.com/watch?v=v7AYKMP6rOE",
        difficulty: "Beginner"
    },
    {
        id: "yoga-1",
        title: "30-Min Beginner Yoga Flow",
        description: "Perfect yoga session for beginners focusing on fundamental poses and proper breathing techniques.",
        category: "Yoga",
        duration: "30 min",
        thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
        youtubeUrl: "https://www.youtube.com/watch?v=v7AYKMP6rOE",
        difficulty: "Beginner"
    },
    {
        id: "cardio-1",
        title: "30-Min Beginner cardio Flow",
        description: "Perfect cardio session for beginners focusing on fundamental poses and proper breathing techniques.",
        category: "Cardio",
        duration: "30 min",
        thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
        youtubeUrl: "https://www.youtube.com/watch?v=v7AYKMP6rOE",
        difficulty: "Beginner"
    },
    {
        id: "cardio-1",
        title: "30-Min Beginner cardio Flow",
        description: "Perfect cardio session for beginners focusing on fundamental poses and proper breathing techniques.",
        category: "Cardio",
        duration: "30 min",
        thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
        youtubeUrl: "https://www.youtube.com/watch?v=v7AYKMP6rOE",
        difficulty: "Beginner"
    },
    {
        id: "cardio-1",
        title: "30-Min Beginner cardio Flow",
        description: "Perfect cardio session for beginners focusing on fundamental poses and proper breathing techniques.",
        category: "Cardio",
        duration: "30 min",
        thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
        youtubeUrl: "https://www.youtube.com/watch?v=v7AYKMP6rOE",
        difficulty: "Beginner"
    },
    {
        id: "Strength Training-1",
        title: "30-Min Beginner Strength Training Flow",
        description: "Perfect Strength Training session for beginners focusing on fundamental poses and proper breathing techniques.",
        category: "Strength",
        duration: "30 min",
        thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
        youtubeUrl: "https://www.youtube.com/watch?v=v7AYKMP6rOE",
        difficulty: "Beginner"
    },
    {
        id: "Strength Training-1",
        title: "30-Min Beginner Strength Training Flow",
        description: "Perfect Strength Training session for beginners focusing on fundamental poses and proper breathing techniques.",
        category: "Strength",
        duration: "30 min",
        thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
        youtubeUrl: "https://www.youtube.com/watch?v=v7AYKMP6rOE",
        difficulty: "Beginner"
    },
    {
        id: "Strength Training-1",
        title: "30-Min Beginner Strength Training Flow",
        description: "Perfect Strength Training session for beginners focusing on fundamental poses and proper breathing techniques.",
        category: "Strength",
        duration: "30 min",
        thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
        youtubeUrl: "https://www.youtube.com/watch?v=v7AYKMP6rOE",
        difficulty: "Beginner"
    },
];

const categories = [
    {
        title: "Yoga",
        description: "Improve flexibility, build strength, and find inner peace with these yoga workouts",
        workouts: workouts.filter(w => w.category === "Yoga")
    },
    {
        title: "Cardio",
        description: "Boost your heart rate and burn calories with these energetic cardio sessions",
        workouts: workouts.filter(w => w.category === "Cardio")
    },
    {
        title:"Strength Training",
        description: "Build muscle and increase power with these strength-focused workouts",
        workouts: workouts.filter(w => w.category === "Strength")
    }
];

// DOM Elements
const categoriesSection = document.querySelector('.categories');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');

// Create workout card
function createWorkoutCard(workout) {
    return `
        <div class="workout-card">
            <img src="${workout.thumbnail}" alt="${workout.title}" class="workout-image">
            <div class="workout-content">
                <h3 class="workout-title">${workout.title}</h3>
                <div class="workout-meta">
                    <span>${workout.duration}</span>
                    <span>${workout.difficulty}</span>
                </div>
                <p>${workout.description}</p>
                <a href="${workout.youtubeUrl}" target="_blank" class="cta-button">Watch Workout</a>
            </div>
        </div>
    `;
}

function createCategorySection(category) {
    const div = document.createElement('div');
    div.className = 'category';
    div.innerHTML = `
        <div class="category-header">
            <div>
                <h2>${category.title}</h2>
                <p>${category.description}</p>
            </div>
            <button class="toggle-btn">
                <span class="chevron"></span>
            </button>
        </div>
        <div class="workouts-grid">
            ${category.workouts.map(workout => createWorkoutCard(workout)).join('')}
        </div>
    `;
    return div;
}

function initCategories() {
    categories.forEach(category => {
        categoriesSection.appendChild(createCategorySection(category));
    });
}

categoriesSection.addEventListener('click', (e) => {
    if (e.target.closest('.category-header')) {
        const category = e.target.closest('.category');
        category.classList.toggle('active');
    }
});

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const categories = document.querySelectorAll('.category');
    
    categories.forEach(category => {
        const workoutCards = category.querySelectorAll('.workout-card');
        let hasVisibleWorkouts = false;
        
        workoutCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            const isVisible = text.includes(query);
            card.style.display = isVisible ? 'block' : 'none';
            if (isVisible) hasVisibleWorkouts = true;
        });
        
        category.style.display = hasVisibleWorkouts ? 'block' : 'none';
    });
});

sortSelect.addEventListener('change', (e) => {
    const sortBy = e.target.value;
    const categories = document.querySelectorAll('.category');
    
    categories.forEach(category => {
        const workoutsGrid = category.querySelector('.workouts-grid');
        const workoutCards = [...workoutsGrid.children];
        
        workoutCards.sort((a, b) => {
            const titleA = a.querySelector('.workout-title').textContent;
            const titleB = b.querySelector('.workout-title').textContent;
            const durationA = a.querySelector('.workout-meta span').textContent;
            const durationB = b.querySelector('.workout-meta span').textContent;
            
            switch(sortBy) {
                case 'alphabetical':
                    return titleA.localeCompare(titleB);
                case 'duration-asc':
                    return parseInt(durationA) - parseInt(durationB);
                case 'duration-desc':
                    return parseInt(durationB) - parseInt(durationA);
                default:
                    return 0;
            }
        });
        
        workoutCards.forEach(card => workoutsGrid.appendChild(card));
    });
});

document.addEventListener('DOMContentLoaded', () => {
    initCategories();
});