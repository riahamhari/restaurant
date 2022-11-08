





function createHome() {
    const imageContainer = document.createElement("div");
    const burgerImg = document.createElement("img");
    const intro = document.createElement("div");
    const details = document.createElement("p")

    imageContainer.classList.add("imageContainer")
    burgerImg.setAttribute("src", "mainBurger.jpg")
    intro.classList.add("intro")
    details.setAttribute("id", "details")


    imageContainer.appendChild(burgerImg)
    imageContainer.appendChild(intro)
    intro.textContent = "BILLIONAIRE BURGERS"
    details.textContent = "MODERN SOUL FOOD FUSION IN THE HEART OF LONDON"
    intro.appendChild(details)
    return imageContainer

}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;