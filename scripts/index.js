

const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com"
];

for(let i = 0; i < addresses.length; i++){
    const link = document.createElement('a');
    link.setAttribute('href', addresses[i]);
    link.textContent = addresses[i];
    const pageLink = document.querySelector('.js-link-container')
    pageLink.appendChild(link)
}
            
// const link2 = document.createElement('a');
// link2.setAttribute('href', addresses[1]);
// link2.textContent = addresses[1];
// const pageLink2 = document.querySelector('.js-link-container')
// pageLink2.appendChild(link2)

// const link3 = document.createElement('a');
// link3.setAttribute('href', addresses[2]);
// link3.textContent = addresses[2];
// const pageLink3 = document.querySelector('.js-link-container')
// pageLink3.appendChild(link3)

