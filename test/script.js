const seatButtons = document.querySelectorAll('.seat_btn');

let clickFullfil=0
seatButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (clickFullfil>=4) {
        seatButtons.forEach(btn => {
            btn.disabled = true;
        });

      }else {
            // Otherwise, increment clickedCount
            clickFullfil++;
            console.log(button.textContent, 'clicked');
            // Your event handling code here
        }
        
    });
});