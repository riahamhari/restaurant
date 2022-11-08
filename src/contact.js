function createContact() {

    const contact = document.createElement('div')
    contact.classList.add('contact')
    const restImgWrap = document.createElement('div')
    restImgWrap.setAttribute('id', 'restImgWrap')
    const restImg = document.createElement('img')
    restImg.setAttribute('id', 'restImg')
    restImg.setAttribute('src', 'restImg.jpg')



    const map = document.createElement('div')
    map.setAttribute('id', 'map')

    restImgWrap.appendChild(restImg)
    contact.appendChild(restImg)
    contact.appendChild(createContactInfo())
    contact.appendChild(map)



    return contact

}

function createContactInfo() {
    const contactInfo = document.createElement('div')
    contactInfo.classList.add('contactInfo')
    const openingHours = document.createElement('section')
    openingHours.setAttribute('id', 'openingHours')
    const hoursList = document.createElement('ul')
    hoursList.classList.add('hoursList')
    const weekDays = document.createElement('li')
    weekDays.classList.add('days')
    const weekDaySpan = document.createElement('span')
    weekDaySpan.textContent = "Monday - Thursday"
    const weekHoursSpan = document.createElement('span')
    weekHoursSpan.textContent = "11:30 am - 10:00 pm"
    const weekend = document.createElement('li')
    weekend.classList.add('days')
    const weekendSpan = document.createElement('span')
    weekendSpan.textContent = "Friday - Saturday"
    const weekendHoursSpan = document.createElement('span')
    weekendHoursSpan.textContent = "11:30 am - 11:00 pm"
    const sunday = document.createElement('li')
    sunday.classList.add('days')
    const sundaySpan = document.createElement('span')
    sundaySpan.textContent = "Sunday"
    const sundayHoursSpan = document.createElement('span')
    sundayHoursSpan.textContent = "11:30 am - 10:00 pm"
    const address = document.createElement('address')
    address.classList.add('address')
    const addressPhyiscal = document.createElement('a')
    addressPhyiscal.classList.add('addressPhysical')
    addressPhyiscal.setAttribute('href', 'https://www.google.co.uk/maps/search/Emirates+Stadium/@51.5548885,-0.1106267,17z')
    const addressRow1 = document.createElement('div')
    addressRow1.classList.add('addressRow')
    addressRow1.textContent = "123 Hornsey Rd"
    const addressRow2 = document.createElement('div')
    addressRow2.classList.add('addressRow')
    addressRow2.textContent = "London"
    const addressRow3 = document.createElement('div')
    addressRow3.classList.add('addressRow')
    addressRow3.setAttribute('id', 'postcode')
    addressRow3.textContent = "N7 7AJ"
    const addressPhone = document.createElement('a')
    addressPhone.classList.add('addressPhone')
    addressPhone.setAttribute('href', 'tel:01234 556677')
    addressPhone.textContent = "01234 556677"
    const addressEmail = document.createElement('a')
    addressEmail.classList.add('addressEmail')
    addressEmail.setAttribute('href', 'mailto:fakeemail@bburger.co.uk')
    addressEmail.textContent = 'fakeemail@bburger.co.uk'


    openingHours.appendChild(hoursList)
    hoursList.appendChild(weekDays)
    weekDays.append(weekDaySpan, weekHoursSpan)
    hoursList.appendChild(weekend)
    weekend.append(weekendSpan, weekendHoursSpan)
    hoursList.appendChild(sunday)
    sunday.append(sundaySpan, sundayHoursSpan)


    addressPhyiscal.append(addressRow1, addressRow2, addressRow3)
    address.append(addressPhyiscal, addressPhone, addressEmail)
    contactInfo.append(openingHours, address)
    return contactInfo

}



// Initialize and add the map

function initMap() {

    // The location of emirates
    const emirates = { lat: -51.554975200097964, lng: -0.10827706957576783 };
    // The map, centered at emirates
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: emirates,
    });
    // The marker, positioned at emirates
    const marker = new google.maps.Marker({
        position: emirates,
        map: map,
    });
}



function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    const contactTitle = document.createElement('h1')
    contactTitle.setAttribute('id', 'contactTitle')
    contactTitle.textContent = "Come and Dine With Us!"
    main.appendChild(contactTitle)
    main.appendChild(createContact())

    window.initMap = initMap;

}



// function loadMap() {
//     window.initMap = initMap;
// }



export default loadContact

