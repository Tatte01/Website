// Define all variables first
let myText = document.getElementById('Welcome-header');
let texthead = document.getElementById('Text-header');
let textinfo = document.getElementById('info-header');

let texts = ["Welcome!"];
let text = ["This is my portfolio"];
let info = ["Click here to see my Projects →"];
let typingSpeed = 100;

// Separate indices for each text
let letterIndex = 0;
let secondLetterIndex = 0;
let thirdLetterIndex = 0;
let firstDone = false;
let secDone = false;

const style = document.createElement('style');
let currentElement = null;

function typeText() {
    if (!firstDone) {
        // Remove cursor from previous element, add to current
        if (currentElement) {
            currentElement.classList.remove('typing-cursor');
        }
        currentElement = myText;
        currentElement.classList.add('typing-cursor');
        
        // Type first text
        if (letterIndex < texts[0].length) {
            myText.innerText = texts[0].substring(0, letterIndex + 1);
            letterIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            firstDone = true;
            setTimeout(typeText, 500);
        }
    } else if (!secDone) {
        // Move cursor to second element
        currentElement.classList.remove('typing-cursor');
        currentElement = texthead;
        currentElement.classList.add('typing-cursor');
        
        // Type second text
        if (secondLetterIndex < text[0].length) {
            texthead.innerText = text[0].substring(0, secondLetterIndex + 1);
            secondLetterIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            secDone = true;
            setTimeout(typeText, 500);
        }
    } else {
        // Move cursor to third element
        currentElement.classList.remove('typing-cursor');
        
        // Type third text
        if (thirdLetterIndex < info[0].length) {
            textinfo.innerText = info[0].substring(0, thirdLetterIndex + 1);
            thirdLetterIndex++;
            setTimeout(typeText, 50);
        }
    }
}

// Create the style once
style.textContent = `
    .typing-cursor::after {
        content: '|';
        animation: blink 1s infinite;
        margin-left: 2px;
    }
    
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
`;
document.head.appendChild(style);

function filterProjects(category) {
    // Get all cards and buttons
    const cards = document.querySelectorAll('.Cards');
    const buttons = document.querySelectorAll('.Tab-btn');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter cards
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Start typing
typeText();