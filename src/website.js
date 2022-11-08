import loadHome from "./home.js"
import loadMenu from "./menu.js"
import loadContact from "./contact.js"






function createHeader() {

    const header = document.createElement("header")
    const navBar = document.createElement("div")
    const navItems = document.createElement("ul")
    const brandContainer = document.createElement("div")
    const navBrandLink = document.createElement("li")
    const navBrand = document.createElement("a")
    const logo = document.createElement("i")

    navBar.classList.add("navBar")
    navItems.classList.add("navItems")
    brandContainer.classList.add("brandContainer")
    navBrandLink.classList.add('navBrandLink')
    navBrand.setAttribute("id", "nav-brand")
    navBrand.textContent = "Billionaire Burgers "
    navBrand.addEventListener('click', function () {
        loadHome()

    })
    logo.classList.add("fa-solid", "fa-burger")

    header.appendChild(navBar)
    navBar.appendChild(navItems)
    navItems.appendChild(brandContainer)
    brandContainer.appendChild(navBrandLink)
    navBrandLink.appendChild(navBrand)
    navBrand.appendChild(logo)


    navItems.appendChild(createDirectories())

    return header

}


function createDirectories() {


    const directories = document.createElement("div")
    const homeLink = document.createElement("li")
    const menuLink = document.createElement("li")
    const contactLink = document.createElement("li")
    const home = document.createElement("a")
    const menu = document.createElement("a")
    const contact = document.createElement("a")

    directories.classList.add("directories")
    home.setAttribute("id", "home")
    home.classList.add("navBtn", "buttonActive")
    home.innerHTML = "Home"

    menu.setAttribute("id", "menu")
    menu.classList.add("navBtn")
    menu.innerHTML = "Menu"

    contact.setAttribute("id", "contact")
    contact.classList.add('navBtn')
    contact.innerHTML = "Contact"


    directories.appendChild(homeLink)
    homeLink.appendChild(home)
    directories.appendChild(menuLink)
    menuLink.appendChild(menu)
    directories.appendChild(contactLink)
    contactLink.appendChild(contact)

    menu.addEventListener('click', function () {
        loadMenu()
        setActive()
    })
    home.addEventListener('click', function () {
        loadHome()
        setActive()
    })
    contact.addEventListener('click', function () {

        loadContact()
        setActive()
    })


    return directories
}

function createMain() {
    const main = document.createElement("main");
    main.setAttribute("id", "main");
    return main;
}

function setActive() {

    const navBtns = document.querySelectorAll(".navBtn")
    for (let i = 0; i < navBtns.length; i++) {
        navBtns[i].addEventListener('click', function () {
            let current = document.getElementsByClassName("buttonActive")
            current[0].className = current[0].className.replace(" buttonActive", "");
            this.className += " buttonActive";
        })

    }
}

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain())
    loadHome()
    setActive()
}



export default initializeWebsite;