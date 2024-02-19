let seatsLeft = 40;

const seatsLeftDisplay = document.getElementById('seatsLeft');

const seatSelected = document.getElementById('totalSeatSelected');
let selectedSeat = 0;

// appending the seats info
const seatInfo = document.getElementById('')



const allBtns = document.getElementsByClassName('seat_btn');

for (const button of allBtns) {
    // const seatNumber = button.innerText;

    button.addEventListener('click', function () {
        button.style.backgroundColor= 'rgb(34 197 94)';
            button.style.color='white'
        seatsLeft --;
        selectedSeat++;
        seatsLeftDisplay.innerText = seatsLeft;
        seatSelected.innerText = selectedSeat;
    })
}
