const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Sprječavamo da se stranica refresha prilikom slanja forme

    // Ovdje možete dodati dodatnu validaciju ako želite

    // Prikazujemo uspješnu poruku
    document.getElementById('success-message').style.display = 'block';

    // Ovdje možemo poslati podatke na server (npr. korištenjem AJAX-a ako želite stvarno slanje podataka)
    // U ovom primjeru samo prikazujemo poruku
});

