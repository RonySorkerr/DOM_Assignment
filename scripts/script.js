let seatsLeft = 40;
const seatsLeftDisplay = document.getElementById('seatsLeft');
const seatSelected = document.getElementById('totalSeatSelected');
const numberField = document.getElementById('numberInput')

let selectedSeat = 0;
// appending the seats info
const seatInfo = document.getElementById('seatInfo')
const seatClass = 'Economy';
let perSeatPrice = 550;
let totalPrice = 0;
let selectedTotalSeat = 0;

let maxSelect = 0;

const perSeattotal = document.getElementById('perSeatTotal');

const grandTotalDisplay = document.getElementById('grandTotal');

const allBtns = document.getElementsByClassName('seat_btn');

for (const button of allBtns) {
    // const seatNumber = button.innerText;

    button.addEventListener('click', function () {
        if (maxSelect < 4) {
            maxSelect++;
            button.style.backgroundColor = 'rgb(34 197 94)';
            button.style.color = 'white'
            seatsLeft--;
            selectedSeat++;

            button.disabled = true;

            totalPrice += perSeatPrice;
            perSeattotal.innerText = totalPrice;

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
            grandTotalDisplay.innerText = totalPrice;

            numberField.disabled = false;

            if (maxSelect === 4) {
                couponApplyBtn.disabled = false;
            }
        }
    })
};


const couponInput = document.getElementById('couponInput');
const couponApplyBtn = document.getElementById('couponApply');
const coupon15 = 'NEW15';
const coupon20 = 'Couple 20';


couponApplyBtn.addEventListener('click', function () {
    const couponValue = couponInput.value;
    if (couponValue === coupon15 || couponValue === coupon20) {
        const discountAmount = totalPrice * 0.15;
        const grandTotal = totalPrice - discountAmount;
        grandTotalDisplay.innerText = grandTotal;
        couponApplyBtn.parentElement.remove();
    }

})

const nextbtn = document.getElementById('nextbtn');

numberField.addEventListener('input', function () {
    if (numberField.value.length === 11) {
        nextbtn.disabled = false;
    }
})