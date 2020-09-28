const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//changing Nav Bar
const nav = document.querySelectorAll('a')
nav[0].textContent = 'Services'
nav[1].textContent = 'Product'
nav[2].textContent = 'Vision'
nav[3].textContent = 'Features'
nav[4].textContent = 'About'
nav[5].textContent = 'Contact'

//changing title
const title = document.querySelector('title')
title.textContent = 'Great Idea!'

//changing h1
const h1 = document.querySelector('h1')
const br = document.createElement('br')
const br2 = document.createElement('br')
const h1text1 = document.createTextNode('Dom')
const h1text2 = document.createTextNode('Is')
const h1text3 = document.createTextNode('Awesome')
h1.appendChild(h1text1)
h1.appendChild(br)
h1.appendChild(h1text2)
h1.appendChild(br2)
h1.appendChild(h1text3)

//changing button
const button = document.querySelector('button')
button.textContent = 'Get Started'

//changing circle image
const circleImage = document.querySelector('#cta-img')
circleImage.src = 'img/header-img.png'

//changing h4's
const h4 = document.querySelectorAll('h4')
h4[0].textContent = 'Features'
h4[1].textContent = 'About'
h4[2].textContent = 'Services'
h4[3].textContent = 'Product'
h4[4].textContent = 'Vision'
h4[5].textContent = 'Contact'

//changing p's except p[5]
const p = document.querySelectorAll('p')
p[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
p[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
p[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
p[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
p[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
//const address = p[5].textContent = '123 Way 456 Street'
p[6].textContent = '1 (888) 888-8888'
p[7].textContent = 'sales@greatidea.io'
p[8].textContent = 'Copyright Great Idea! 2018'

//applying breaks for address p[5]
const address = document.querySelectorAll('p')[5]
const br3 = document.createElement('br')
const address1 = document.createTextNode('123 Way 456 Street')
const address2 = document.createTextNode('Somewhere, USA')
address.appendChild(address1)
address.appendChild(br3)
address.appendChild(address2)

//changing main content img
const middleImage = document.querySelector('#middle-img')
middleImage.src = 'img/mid-page-accent.jpg'

//changing the color of the nav text to green
nav[0].style.color = 'green'
nav[1].style.color = 'green'
nav[2].style.color = 'green'
nav[3].style.color = 'green'
nav[4].style.color = 'green'
nav[5].style.color = 'green'

//adding two new nav items
const item1 = document.createElement('a')
item1.href = '#'
item1.textContent = 'Team'
document.querySelector('nav').appendChild(item1)

const item2 = document.createElement('a')
item2.href = '#'
item2.textContent = 'Mission'
document.querySelector('nav').prependChild(item2)

//turning two new nav items green
item1.style.color = 'green'
item2.style.color = 'green'