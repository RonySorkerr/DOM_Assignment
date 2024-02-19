let seatsLeft = 40;

const seatsLeftDisplay = document.getElementById('seatsLeft');

const seatSelected = document.getElementById('totalSeatSelected');
let selectedSeat = 0;

// appending the seats info
const seatInfo = document.getElementById('seatInfo')
const seatClass = 'Economy';
let perSeatPrice = 550;
let perSeatTotal = 0;

const perSeattotal = document.getElementById('perSeatTotal');



const allBtns = document.getElementsByClassName('seat_btn');

for (const button of allBtns) {
    // const seatNumber = button.innerText;

    button.addEventListener('click', function () {
        button.style.backgroundColor = 'rgb(34 197 94)';
        button.style.color = 'white'
        seatsLeft--;
        selectedSeat++;
        perSeatPrice +
            seatsLeftDisplay.innerText = seatsLeft;
        seatSelected.innerText = selectedSeat;
        seatSelected.style.backgroundColor = 'rgb(34 197 94)';
        seatSelected.style.color = 'white';
        seatSelected.style.padding = '4px';
        seatSelected.style.borderRadius = '10px'


        const selectedSeatsDetails = document.createElement('tr');
        selectedSeatsDetails.innerHTML = `
            <td>${button.innerText}</td>
            <td>${seatClass}</td>
            <td>${perSeatPrice}</td>
            
        `
        seatInfo.append(selectedSeatsDetails)
    })
}
