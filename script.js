const jumpscare = document.getElementById("jumpscare");
const scare = document.getElementById("scare");
const result = document.getElementById("result");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const ticketsInput = document.getElementById("tickets");

function showScare(message) {
    scare.className = "boom";

    setTimeout(function () {
        scare.className = "";
        result.innerHTML = message;
    }, 3000);
}

function calculateTicket() {
    const name = nameInput.value;
    const age = Number(ageInput.value);
    const tickets = Number(ticketsInput.value);

    result.innerHTML = "";

    let message;

    if (name == "" || ageInput.value == "" || tickets < 1) {
        message = "Fill in everything... or they get you.";
    }
    else {
        let price;

        if (age < 12) {
            price = 5;
        }
        else if (age <= 17) {
            price = 7;
        }
        else {
            price = 10;
        }

        const total = price * tickets;

        message = name + "'s Ticket<br>" +
            "Price per ticket: $" + price + "<br>" +
            "Number of tickets: " + tickets + "<br>" +
            "Total: $" + total;
    }

    jumpscare.currentTime = 0;
    jumpscare.play().then(function () {
        showScare(message);
    }, function () {
        showScare(message);
    });
}

function clearTicket() {
    nameInput.value = "";
    ageInput.value = "";
    ticketsInput.value = "";
    result.innerHTML = "";
    scare.className = "";
}