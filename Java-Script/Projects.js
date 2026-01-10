function openProject(projectId) {
    document.getElementById(projectId).classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevents scrolling
}

function closeProject(projectId) {
    document.getElementById(projectId).classList.remove('active');
    document.body.style.overflow = 'auto'; // Restores scrolling
}
// Close modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.querySelectorAll('.Project-modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}
// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const activeModal = document.querySelector('.Project-modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// Tabs
function filterProjects(category) {
    // Get all cards and buttons
    const cards = document.querySelectorAll('.Cards');
    const buttons = document.querySelectorAll('.Tab-btn');
    const noProjectsMsg = document.getElementById('noProjects');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter cards and count visible ones
    let visibleCount = 0;
    
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });
    
    // Show/hide "no projects" message
    if (visibleCount === 0) {
        noProjectsMsg.style.display = 'block';
    } else {
        noProjectsMsg.style.display = 'none';
    }
}

function openProject(projectId) {
    document.getElementById(projectId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProject(projectId) {
    document.getElementById(projectId).classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.Project-modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const activeModal = document.querySelector('.Project-modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});