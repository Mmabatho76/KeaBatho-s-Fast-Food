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


