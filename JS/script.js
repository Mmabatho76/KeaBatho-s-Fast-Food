// ---------------- HAMBURGER MENU ----------------
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
}

// ---------------- ACCORDION ----------------
const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    // Close other accordions
    document.querySelectorAll(".accordion-content").forEach(c => {
      if (c !== content) {
        c.classList.remove("open");
        c.style.maxHeight = null;
      }
    });

    // Toggle current accordion
    if (content.classList.contains("open")) {
      content.classList.remove("open");
      content.style.maxHeight = null;
    } else {
      content.classList.add("open");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});


// ---------------- LIGHTBOX ----------------
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

document.querySelectorAll(".popup-img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// ---------------- BACK TO TOP ----------------
const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


document.querySelectorAll(".popup-img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});




function updateTimestamp() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  document.getElementById("timestamp").textContent = now.toLocaleString("en-ZA", options);
}

setInterval(updateTimestamp, 1000);
updateTimestamp();






function validateForm() {
  let name = document.getElementById("name");
  let surname = document.getElementById("surname");
  let email = document.getElementById("email");
  let campus = document.getElementById("campus");
  let message = document.getElementById("message");
  let info = document.getElementById("info");

  // Reset
  info.innerHTML = "";
  info.style.display = "none";
  let isValid = true;
  document.querySelectorAll(".error").forEach(e => e.remove());

  // Helper to show error
  function showError(input, msg) {
    isValid = false;
    input.style.border = "2px solid red";

    let error = document.createElement("p");
    error.className = "error";
    error.style.color = "red";
    error.style.fontSize = "14px";
    error.innerText = msg;
    input.insertAdjacentElement("afterend", error);
  }

  // Clear borders
  [name, surname, email, campus, message].forEach(i => {
    i.style.border = "1px solid #ccc";
  });

  // VALIDATION RULES
  if (name.value.trim() === "") showError(name, "Full name is required.");
  if (surname.value.trim() === "") showError(surname, "Surname is required.");

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim()))
    showError(email, "Enter a valid email address.");

  if (campus.value === "0") showError(campus, "Please select your campus.");
  if (message.value.trim().length < 10)
    showError(message, "Message must be at least 10 characters long.");

  if (!isValid) return false;

  // SUCCESS MESSAGE (SHOW DETAILS ON SCREEN)
  info.style.display = "block";
  info.style.background = "#e8ffe8";
  info.style.padding = "15px";
  info.style.border = "2px solid #4CAF50";
  info.style.marginTop = "15px";
  info.style.borderRadius = "8px";
  info.style.fontSize = "15px";

  info.innerHTML = `
    <h3 style="color:green; margin-bottom:8px;">Enquiry Submitted Successfully!</h3>
    <p><strong>Full Name:</strong> ${name.value}</p>
    <p><strong>Surname:</strong> ${surname.value}</p>
    <p><strong>Email:</strong> ${email.value}</p>
    <p><strong>Campus:</strong> ${campus.options[campus.selectedIndex].text}</p>
    <p><strong>Message:</strong> ${message.value}</p>
  `;

  return false; // prevent page reload
}






function Main(){
            //event.preventDefault();
            var name = document.getElementById("name").value;
                var surname = document.getElementById("surname").value;
                var email = document.getElementById("email").value;
                var campus = document.getElementById("campus").value;
                var selectedCampus;
                //Form validation
                if (name === "") {
                    //errorElement.innerText = "Name cannot be empty.";
                    alert("Name cannot be empty.");
                } else if (surname === "") {
                    alert("Surname cannot be empty.");
                } else if(email === "") {
                    alert("Email cannot be empty.");
                }else if(campus == "0"){
                    selectedCampus = "No campus selected!!!";
                } else {
                    selectedCampus = document.getElementById("campus").options[document.getElementById("campus").selectedIndex].text;
                    var fullname = name + " " + surname;
                    alert(`Hello, ${fullname}! Your form is successfully submitted.`);
                    document.getElementById("info").innerText = "Names: " + fullname + "\nEmail: " + email + "\nCampus: " + selectedCampus;
                }
                
                // Prevent form submission
                return false;
            }



            function validateForm(){
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    //validate input fields
    if(name === '' || email === '' || password === ''){
        //errorMessage.textContent = 'All input fields are required!!!';
        alert("All input fields are required!!!");
        return false;
    }

    //validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(!email.match(emailPattern)){
        //errorMessage.textContent = 'Incorrect email format!!!';
        alert("Incorrect email format!!!");
        return false;
    }

    //validate password (6 characters or more)
    if(password.length < 6){
        //errorMessage.textContent = 'The password must be a minimum of 6 characters!!!';
        alert("The password must be a minimum of 6 characters!!!");
    }

    alert("Your form was submitted successfully!!!");
    return true;
}


//----Enquiry Form------
function submitEnquiry() {
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const enquiryType = document.getElementById('enquiryType').value;
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = '';

    if (!fullname || !email || !enquiryType || !message) {
        errorMessage.textContent = "All fields are required!";
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = "Invalid email format!";
        return false;
    }

    document.getElementById('info').innerText =
        `Full Name: ${fullname}\nEmail: ${email}\nEnquiry Type: ${enquiryType}\nMessage:\n${message}\n\nWe will respond with information regarding availability, cost, or sponsorship opportunities.`;

    alert("Enquiry submitted successfully!");

    return false; // prevent page reload
}

//---For messages---//
function validateContactForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    const info = document.getElementById('info');

    errorMessage.textContent = '';
    info.textContent = '';

    // Validate message
    if (message.length < 10) {
        errorMessage.textContent = "Message must be at least 10 characters long!";
        return false;
    }

    // Optionally display user input under the form
    info.textContent = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;

    alert("Your message has been validated successfully!");

    return false; // Prevent form submission for demonstration
}





//---for messages---
function validateContactForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    const info = document.getElementById('info');

    errorMessage.textContent = '';
    info.textContent = '';

    // Validate message length
    if (message.length < 10) {
        errorMessage.textContent = "Message must be at least 10 characters long!";
        return false;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = "Invalid email format!";
        return false;
    }

    // Display user input under form
    info.textContent = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;

    // Prepare mailto link
    const websiteEmail = "info@keabathosfastfood.co.za"; // Replace with your website email
    const subject = encodeURIComponent(`Contact Form Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage:\n${message}`);

    // Open email client (Gmail, Outlook, etc.)
    window.location.href = `mailto:${websiteEmail}?subject=${subject}&body=${body}`;

    return false; // Prevent actual form submission
}








//--menu---
const menu = {
    combo: [{name: "Family Combo", price: 25},{name: "Double Burger Combo", price: 15}],
    burgers: [{name: "Cheeseburger", price: 8},{name: "Veggie Burger", price: 7}],
    sides: [{name: "Fries", price: 3},{name: "Onion Rings", price: 4}],
    drinks: [{name: "Coke", price: 2},{name: "Water", price: 1.5}]
};
let cart = [];
let currentTab = 'combo';

function renderMenu(filter="") {
    const container = document.getElementById("menu-container");
    container.innerHTML = "";
    let itemsToShow = [];

    if(filter.trim() === "") {
        itemsToShow = menu[currentTab].map(item => ({...item, category: currentTab}));
    } else {
        for(const cat in menu) {
            menu[cat].forEach(item => {
                if(item.name.toLowerCase().includes(filter.toLowerCase())) {
                    itemsToShow.push({...item, category: cat});
                }
            });
        }
    }

    if(itemsToShow.length === 0) {
        container.innerHTML = `<div class="no-results">No results found!</div>`;
        return;
    }

    itemsToShow.forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.innerHTML = `<h4>${item.name}</h4><p>Price: $${item.price.toFixed(2)}</p>
        <button onclick="addToCart('${item.name}', ${item.price})">Order</button>`;
        container.appendChild(div);
    });
}

function addToCart(name, price) {
    cart.push({name, price});
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        const div = document.createElement("div");
        div.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(div);
    });
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("cart-total").textContent = `Total: $${total.toFixed(2)}`;
}

document.getElementById("checkout-btn").addEventListener("click", () => {
    if(cart.length === 0) { alert("Your cart is empty!"); return; }
    const modal = document.getElementById("checkout-modal");
    const modalItems = document.getElementById("modal-items");
    const modalTotal = document.getElementById("modal-total");
    modalItems.innerHTML = "";
    cart.forEach(item => {
        const div = document.createElement("div");
        div.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        modalItems.appendChild(div);
    });
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    modalTotal.textContent = `Total: $${total.toFixed(2)}`;
    modal.style.display = "block";
});

document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("checkout-modal").style.display = "none";
    cart = [];
    updateCart();
});

const tabButtons = document.querySelectorAll(".tab-button");
tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentTab = btn.getAttribute("data-tab");
        if(document.getElementById("search-input").value === "") renderMenu();
    });
});

document.getElementById("search-input").addEventListener("input", e => {
    renderMenu(e.target.value);
});

document.getElementById("sort-select").addEventListener("change", e => {
    const sortType = e.target.value;
    let items = [];
    const searchValue = document.getElementById("search-input").value.toLowerCase();
    if(searchValue) {
        for(const cat in menu) {
            menu[cat].forEach(item => {
                if(item.name.toLowerCase().includes(searchValue)) items.push({...item, category: cat});
            });
        }
    } else {
        items = menu[currentTab].map(item => ({...item, category: currentTab}));
    }
    if(sortType === "asc") items.sort((a,b)=> a.price - b.price);
    else if(sortType === "desc") items.sort((a,b)=> b.price - a.price);

    const container = document.getElementById("menu-container");
    container.innerHTML = "";
    if(items.length === 0) { container.innerHTML = `<div class="no-results">No results found!</div>`; return; }
    items.forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.innerHTML = `<h4>${item.name}</h4><p>Price: $${item.price.toFixed(2)}</p>
        <button onclick="addToCart('${item.name}', ${item.price})">Order</button>`;
        container.appendChild(div);
    });
});


renderMenu();
