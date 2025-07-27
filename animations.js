
var number = 0;

function indexEval() {
    if (number % 2 == 1) {
        document.getElementById("page_style").setAttribute("href", "index2.css");
    }
    else {
        document.getElementById("page_style").setAttribute("href", "index.css");
    }

    localStorage.setItem("eval", number);
}

function switchStyleIndex(){
    ++number;

    indexEval();
}

function projectsEval() {
    if (number % 2 == 1) {
        document.getElementById("page_style").setAttribute("href", "projects2.css");
    }
    else {
        document.getElementById("page_style").setAttribute("href", "projects.css");
    }

    localStorage.setItem("eval", number);
}


function switchStyleProjects(){
    ++number;

    projectsEval();
}

function qualEval() {
    if (number % 2 == 1) {
        document.getElementById("page_style").setAttribute("href", "about_me2.css");
    }
    else {
        document.getElementById("page_style").setAttribute("href", "about_me.css");
    }

    localStorage.setItem("eval", number);
}

function switchStyleQual(){
    ++number;

    qualEval();
}

function serviceEval(){
    if (number % 2 == 1) {
        document.getElementById("page_style").setAttribute("href", "services2.css");
    }
    else {
        document.getElementById("page_style").setAttribute("href", "services.css");
    }

    localStorage.setItem("eval", number);
}

function switchStyleService(){
    ++number;

    serviceEval();
}

function aiEval(){
    if (number % 2 == 1) {
        document.getElementById("page_style").setAttribute("href", "aipage2.css");
    }
    else {
        document.getElementById("page_style").setAttribute("href", "aipage.css");
    }

    localStorage.setItem("eval", number);
}

function switchStyleAI(){
    ++number;

    aiEval();
}

window.onload = function(){
    let fileLocation = window.location.pathname;
    let file = fileLocation.substring(fileLocation.lastIndexOf("/") + 1);

    number = localStorage.getItem("eval");

    switch (file){
        case "index.html":
            indexEval();
            break;
        case "projects.html":
            projectsEval();
            break;
        case "aipage.html":
            aiEval();
            break;
        case "about_me.html":
            qualEval();
            break;
        case "services.html":
            serviceEval();
            break;

    }
}

window.onbeforeunload = function(){
    localStorage.setItem("eval", number);
}