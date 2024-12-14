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

const projBtnDisplay = document.querySelector(".projBTN")
let projDisplay = document.querySelector(".projBox")

projBtnDisplay.addEventListener('click', function(){
    projDisplay.style.display = projBtnDisplay.checked ? "block" : "none";
});

const eduBtnDisplay = document.querySelector(".eduBTN")
let eduDisplay = document.querySelector(".eduBox")

eduBtnDisplay.addEventListener('click', function(){
    eduDisplay.style.display = eduBtnDisplay.checked ? "block" : "none";
});

const workEBtnDisplay = document.querySelector(".workEBox")
let workEDisplay = document.querySelector(".projBox")

workEBtnDisplay.addEventListener('click', function(){
    workEDisplay.style.display = workEBtnDisplay.checked ? "block" : "none";
});
const ghBTNDisplay = document.querySelector(".ghBTN")
let ghDisplay = document.querySelector(".ghBox")

ghBTNDisplay.addEventListener('click', function(){
    ghDisplay.style.display = ghBTNDisplay.checked ? "block" : "none";
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

// Call updateClock initially and set an interval
updateClock();
setInterval(updateClock, 1000);