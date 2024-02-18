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

const selectedSeats = []


for (const seatBtns of allSeatBtns) {
    // push the seats to the array
    
    seatBtns.addEventListener('click', function (e) {
        // SEATS NAME
        const seatName = seatBtns.innerText;
        console.log('seat name : ',  seatName)
        
        // selected seats
        selectedSeats.push(seatBtns);

        if(selectedSeats.includes(seatName>1)){
            console.log('')
        }



        // seats left
        seatsLeft -= 1;
        seatsLeftDisplay.innerText = seatsLeft;

        // set background color
        seatBtns.classList.add('bg-[#33b933]');







        console.log(selectedSeats);
    })
}

function setSeatInfo(id, value) {
    document.getElementById(id).innerText(value);
}