const homeHandler = document.querySelector("#home");
const aboutHandler = document.querySelector("#about");
const tourHandler = document.querySelector("#tour-package");
const galleryHandler = document.querySelector("#gallery");
const contactHandler = document.querySelector("#contact");

const home = () => {
    location.href = "/public/index.html";
}

const about = () => {
    location.href = "/public/components/about/index.html";
}

const tour = () => {
    location.href = "/public/components/Tour package/index.html";
}

const gallery = () => {
    location.href = "/public/components/Gallery/index.html";
}

const contact = () => {
    location.href = "/public/components/Contact-us/index.html"
}


homeHandler.onclick = home;
aboutHandler.onclick = about;
tourHandler.onclick = tour;
galleryHandler.onclick = gallery;
contactHandler.onclick = contact;