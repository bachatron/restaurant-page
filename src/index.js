import './styles.css';
import Logo from './assets/logo.png';
import Presentation from './assets/presentation.txt';
import menu from './assets/menu.json';

function createHomePage () {
    const content = document.getElementById("content");
    const homeDiv = document.createElement("div");
    homeDiv.classList.add('homePage');
    
    const title = document.createElement('h1')
    title.innerText = 'SHIBA BITES';
    const logo = document.createElement('img');
    logo.src = Logo;
    logo.alt = 'logo'
    const paragraphs = Presentation.trim().split(/\r?\n\r?\n/);

    content.appendChild(homeDiv);
    content.appendChild(title);
    content.appendChild(logo);
    
    paragraphs.forEach(par => {
        const p = document.createElement('p');
        p.textContent = par.trim();
        content.appendChild(p);
    });

}

function createMenu () {
    const content = document.getElementById("content");

    menu.forEach(dish => {
        const dishDiv = document.createElement('div');
      
        const title = document.createElement('h3');
        title.textContent = dish.title;
      
        const description = document.createElement('p');
        description.textContent = dish.description;
      
        dishDiv.appendChild(title);
        dishDiv.appendChild(description);
        content.appendChild(dishDiv); // Or wherever it should go
    });

}

function createContact () {
    const content = document.getElementById("content");

    const contactSection = document.createElement("div");

    const address = document.createElement("p");
    address.textContent = "Av. del Sabor 1234, Palermo, Buenos Aires, Argentina";
    
    const phone = document.createElement("p");
    phone.textContent = "+54 11 4321-5678";
    
    const email = document.createElement("p");
    email.textContent = "hello@shibabites.com";
    
    contactSection.append(address, phone, email);
    content.appendChild(contactSection);
}

function switchTab (tab) {
    const content = document.getElementById("content");
    content.innerHTML = '';

    document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.nav-button')[tab - 1].classList.add('active');

    switch (tab) {
        case 1:
            createHomePage();
            break;
        case 2:
            createMenu();
            break;
        case 3: 
            createContact();
            break;
    }
}

document.querySelector(".nav-button.home").addEventListener("click", () => switchTab(1));
document.querySelector(".nav-button.menu").addEventListener("click", () => switchTab(2));
document.querySelector(".nav-button.contact").addEventListener("click", () => switchTab(3));

createHomePage()

