let jumpscare = document.getElementById("jumpscare");
let scare = document.getElementById("scare");

jumpscare.onplaying = function () {
    scare.className = "boom";
};
jumpscare.onended = function () {
    scare.className = "";
};
function calculateTicket() {
    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let tickets = Number(document.getElementById("tickets").value);
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

    let total = price * tickets;

    document.getElementById("result").innerHTML = "";
    jumpscare.currentTime = 0;
    jumpscare.play();

    setTimeout(function () {
        document.getElementById("result").innerHTML = name + "'s Ticket<br>" +
            "Price per ticket: $" + price + "<br>" +
            "Number of tickets: " + tickets + "<br>" +
            "Total: $" + total;
    }, 3000);
}
function clearTicket() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("tickets").value = "";
    document.getElementById("result").innerHTML = "";
}