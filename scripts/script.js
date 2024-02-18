// selecting all the seats
const allSeatBtns = document.getElementsByClassName('seat_btn');

// total seats left
const seatsLeftDisplay = document.getElementById('seatsLeft');
let seatsLeft = 40;

// getting wheer the seats info will be set
const seatInfo = document.getElementById('seatInfo');

// class of bus
const classOfBus = 'Economy'

// ticket price 
const price = 550;

// seats array
const arrayOfSeats = [
    'A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2', 'E1', 'E2',
    'F1', 'F2', 'G1', 'G2', 'H1', 'H2', 'I1', 'I2', 'J1', 'J2',
    'A3', 'A4', 'B3', 'B4', 'C3', 'C4', 'D3', 'D4', 'E3', 'E4',
    'F3', 'F4', 'G3', 'G4', 'H3', 'H4', 'I3', 'I4', 'J3', 'J4'
  ];

const selectedSeats = []


for (const seatBtns of allSeatBtns) {
    // push the seats to the array

    seatBtns.addEventListener('click', function (e) {
        // SEATS NAME
        const seatName = seatBtns.innerText;
        console.log('seat name : ', seatName)

        // selected seats
        selectedSeats.push(seatBtns);

        if (selectedSeats.includes(seatBtns > 1)) {
            console.log('already selected');
        }



        // seats left
        seatsLeft -= 1;
        seatsLeftDisplay.innerText = seatsLeft;

        // set background color
        setBackgroundColor(arrayOfSeats)
        


        console.log(selectedSeats);
    })
}

// for background color selecting
function setBackgroundColor(elementId){
    const element = document.target(elementId);
    element.classList.add('bg-[green]');
}

// for background color removing
function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#33b933]')
}


// appending the seat ditails

function setSeatInfo(id, value) {
    document.getElementById(id).innerText(value);
}