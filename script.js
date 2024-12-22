// script.js
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    if (name && email) {
        alert("Terima kasih, " + name + "! Formulir Anda telah terkirim.");
        document.getElementById("contact-form").reset(); // Reset form
    } else {
        alert("Harap isi semua kolom.");
    }
});
