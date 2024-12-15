let mainInfo = document.querySelectorAll('.mainInfo');
let viewTheResumes = document.querySelectorAll(".viewTheResume");
let resumeCentral = document.querySelectorAll(".centralResume");
let interestsSection = document.querySelectorAll(".interests");
let infiniteSection = document.querySelectorAll(".infinite");
let inspoSection = document.querySelectorAll(".inspo");
let resourcesSection = document.querySelectorAll(".resources");

const userTimeElements = document.getElementsByClassName("userTime");

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString(); // Format the time as needed

    for (let element of userTimeElements) {
        element.textContent = timeString;
    }
}

//select desired section
function viewResumeBTN() {
    hideAllSections();
    hideMainInfo();
    viewTheResumes.forEach(element => {
        element.style.display = "";
    });
}

//hide all sections unless selected
function hideAllSections() {
    [viewTheResumes, resumeCentral, interestsSection, infiniteSection, inspoSection, resourcesSection].forEach(section => {
        section.forEach(element => {
            element.style.display = "none";
        });
    });
}

function hideMainInfo(){
    mainInfo.forEach(element => {
        element.style.display = "none";
    });
}

function showSection(){
    hideAllSections();
    hideMainInfo();
    section.style.display = "block";; 
}

function resumeBtn() {
    hideAllSections();
    hideMainInfo();
    resumeCentral.forEach(element => {
        element.style.display = "";
    });
}

function interestsBtn() {
    hideAllSections();
    hideMainInfo();
    interestsSection.forEach(element => {
        element.style.display = "";
    });
}

function infChaptBtn() {
    hideAllSections();
    hideMainInfo();
    infiniteSection.forEach(element => {
        element.style.display = "";
    });
}

function inspoBtn() {
    hideAllSections();
    hideMainInfo();
    inspoSection.forEach(element => {
        element.style.display = "";
    });
}

function resourcesBtn() {
    hideAllSections();
    hideMainInfo();
    resourcesSection.forEach(element => {
        element.style.display = "";
    });
}

const radioToBoxMap = {
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

document.querySelector('.tomBTN').addEventListener('click', function(){
    const tom = document.querySelector('.tom');
    tom.style.display = tom.style.display==='none'
        ? 'block' 
        : 'none';
});

document.querySelector('.knitBTN').addEventListener('click', function(){
    const knitting = document.querySelector('.knit');
    knitting.style.display = knitting.style.display==='none'
        ? 'block' 
        : 'none';
});
document.querySelector('.genshinBTN').addEventListener('click', function(){
    const genshinImpact = document.querySelector('.genshin');
    genshinImpact.style.display = genshinImpact.style.display==='none'
        ? 'block' 
        : 'none';
});

const gifPaths = [
    "gifBox/hamster-14608_256.gif",
    "gifBox/lofi-15951_256.gif",
    "gifBox/music-7778_256.gif",
    "gifBox/witch-8930_256.gif"
]
const gifBox = document.querySelector('.gifBox');

    function showRandomGif() {
        const randomGif = gifPaths[Math.floor(Math.random() * gifPaths.length)];

        gifBox.innerHTML = `<img src="${randomGif}" alt="Random Gif">`;
    }
    showRandomGif();
    setInterval(showRandomGif, 30000);


// Call updateClock initially and set an interval
updateClock();
setInterval(updateClock, 1000);
