// Show Profile Photo
document.getElementById("showPhoto").addEventListener("click", () => {
  const card = document.getElementById("photoCard");
  card.innerHTML = `<img src="Image.jpeg" alt="Profile Photo" 
                     style="width:520px;height:260px;border-radius:8px;">`;
});

// Show Bio
document.getElementById("showBio").addEventListener("click", () => {
  const bio = document.getElementById("bioText");
  bio.style.display = "block";
});

// Show Contact Form
document.getElementById("showForm").addEventListener("click", () => {
  const form = document.getElementById("contactForm");
  form.style.display = "flex";
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");

  if (name.value.trim() === "") {
    alert("Name is required");
    name.focus();
    return;
  }

  if (email.value.trim() === "") {
    alert("Email is required");
    email.focus();
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    alert("Invalid email format");
    email.focus();
    return;
  }

  alert("Message sent successfully!");
  e.target.reset(); // form reset
});
