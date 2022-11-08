function createMenu() {
    const grid = document.createElement('div')
    grid.setAttribute('id', 'grid')

    const menuTitle = document.createElement('h1')
    menuTitle.setAttribute('id', 'menuTitle')
    menuTitle.textContent = 'Our Menu';

    const br = document.createElement('br')

    const menuItems = document.createElement('div')
    menuItems.classList.add('menuItems')

    grid.appendChild(menuTitle)
    grid.appendChild(br)


    menuItems.appendChild(createMenuItem("Chipotle Dynamite Chicken Burger"))
    menuItems.appendChild(createMenuDesc("Buttermilk fried chicken in a brioche bun, topped with our very own Dynamite Chipotle"))

    menuItems.appendChild(createMenuItem("Classic Chicken Burger"))
    menuItems.appendChild(createMenuDesc("Double dredged, buttermilk fried chicken, mayo, homemade pickled red onions, lettuce and pickles."))

    menuItems.appendChild(createMenuItem("Vegan Supreme Burger"))
    menuItems.appendChild(createMenuDesc("Beyond Meat patty, our signature Billionaire vegan sauce, pickled red onions, lettuce and beef tomato slice."))

    menuItems.appendChild(createMenuItem("Classic Billionaire Burger"))
    menuItems.appendChild(createMenuDesc("6oz Byron beef patty, double American cheese, homemade pickled red onion, our signature Billionaire sauce, lettuce and pickles."))


    grid.appendChild(menuItems)

    const menuImgWrapper = document.createElement('div')
    menuImgWrapper.classList.add('menuImgWrapper')

    const menuImg = document.createElement('img')

    menuImg.setAttribute("id", "menuImg")
    menuImg.setAttribute("src", "burgers.jpg")

    menuImgWrapper.appendChild(menuImg)

    grid.appendChild(menuImgWrapper)

    return grid

}


function createMenuItem(name) {

    const burgerName = document.createElement('h4')
    burgerName.classList.add('burgerName')
    burgerName.textContent = name;


    // menuItems.appendChild(burgerName)
    // menuItems.appendChild(description)

    return burgerName

}


function createMenuDesc(itemDescription) {
    const description = document.createElement('p')
    description.classList.add('description')
    description.textContent = itemDescription;
    return description

}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;