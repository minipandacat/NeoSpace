let viewTheResumes = document.querySelectorAll(".viewTheResume");
let resumeCentral = document.querySelectorAll(".centralResume");
let interestsSection = document.querySelectorAll(".interests");
let infiniteSection = document.querySelectorAll(".infinite");
let inspoSection = document.querySelectorAll(".inspo");
let resourcesSection = document.querySelectorAll(".resources");

//hide all sections unless selected
function hideAllSections() {
    [viewTheResumes, resumeCentral, interestsSection, infiniteSection, inspoSection, resourcesSection].forEach(section => {
        section.forEach(element => {
            element.style.display = "none";
        });
    });
}

//select desired section
function viewResumeBTN() {
    hideAllSections();
    viewTheResumes.forEach(element => {
        element.style.display = "";
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
