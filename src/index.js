// Create and set up the entire HTML structure dynamically

document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80')";
document.body.style.backgroundSize = "cover";         // Optional: Cover entire area
document.body.style.backgroundPosition = "center";     // Optional: Center the image
document.body.style.backgroundRepeat = "no-repeat";    // Optional: Prevent tiling


// Create <header> and <nav> elements
const header = document.createElement('header');
const nav = document.createElement('nav');

// Define tab names
const tabs = ['Home', 'Menu', 'About'];

// Create buttons for each tab
tabs.forEach(tabName => {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = tabName;
  nav.appendChild(button);
});

// Append nav to header
header.appendChild(nav);

// Create the content div
const contentDiv = document.createElement('div');
contentDiv.id = 'content';



// Append header and content div to the body
document.body.appendChild(header);
document.body.appendChild(contentDiv);

console.log("hello");



// Get the content div


// Create an image element


// Create a headline element
const headline = document.createElement('h1');
headline.textContent = 'Welcome to Our Amazing Restaurant';

// Create a paragraph element with some text
const description = document.createElement('p');
description.textContent = 'At our restaurant, we serve the freshest ingredients and the most delicious meals, making every visit an unforgettable experience. Come and enjoy great food and warm hospitality!';

// Append all elements to the content div

contentDiv.appendChild(headline);
contentDiv.appendChild(description);
