let viewTheResumes = document.querySelectorAll(".viewTheResume");
let resumeCentral = document.querySelectorAll(".centralResume");
let interestsSection = document.querySelectorAll(".interests");
let infiniteSection = document.querySelectorAll(".infinite");
let inspoSection = document.querySelectorAll(".inspo");
let resourcesSection = document.querySelectorAll(".resources");

//select desired section
function viewResumeBTN() {
    hideAllSections();
    viewTheResumes.forEach(element => {
        element.style.display = "";
    });
}

const radioToBoxMap1 = {
    "projBTN": "projBox",
    "eduBTN": "eduBox",
    "workEBTN": "workEBox",
    "ghBTN": "ghBox",
    "cdBTN":"cdBox"
};

function handleRadioClick(event) {
   
    Object.values(radioToBoxMap).forEach((boxClass) => {
        document.querySelector(`.${boxClass}`).style.display = "none";
    });

    const selectedBoxClass = radioToBoxMap[event.target.className];
    if (selectedBoxClass) {
        document.querySelector(`.${selectedBoxClass}`).style.display = "block";
    }
}

Object.keys(radioToBoxMap).forEach((radioClass) => {
    const radioButton = document.querySelector(`.${radioClass}`);
    radioButton.addEventListener('click', handleRadioClick);
});

const userTimeElements = document.getElementsByClassName("userTime");

//hide all sections unless selected
function hideAllSections() {
    [viewTheResumes, resumeCentral, interestsSection, infiniteSection, inspoSection, resourcesSection].forEach(section => {
        section.forEach(element => {
            element.style.display = "none";
        });
    });
}

function resumeBtn() {
    hideAllSections();
    resumeCentral.forEach(element => {
        element.style.display = "";
    });
}

function interestsBtn() {
    hideAllSections();
    interestsSection.forEach(element => {
        element.style.display = "";
    });
}

function infChaptBtn() {
    hideAllSections();
    infiniteSection.forEach(element => {
        element.style.display = "";
    });
}

function inspoBtn() {
    hideAllSections();
    inspoSection.forEach(element => {
        element.style.display = "";
    });
}

function resourcesBtn() {
    hideAllSections();
    resourcesSection.forEach(element => {
        element.style.display = "";
    });
}

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString(); // Format the time as needed

    for (let element of userTimeElements) {
        element.textContent = timeString;
    }
}

// Get the button and the body element
const toggleButton = document.getElementById('toggleSparkles');
const sparklesContainer = document.querySelector('.sparkles-container');

// Start with sparkles enabled
let sparklesEnabled = true;

toggleButton.addEventListener('click', () => {
    sparklesEnabled = !sparklesEnabled;

    if (sparklesEnabled) {
        // Show sparkles
        sparklesContainer.style.display = 'block';
    } else {
        // Hide sparkles
        sparklesContainer.style.display = 'none';
    }
});


// Call updateClock initially and set an interval
updateClock();
setInterval(updateClock, 1000);
