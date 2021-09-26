const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector(".check-btn")
const errorMessage = document.querySelector(".error-message")
const notes = document.querySelectorAll(".no-of-notes")


const avilableNotes = [2000, 500, 100, 50, 20, 10, 5, 1]


checkButton.addEventListener("click", function billCashAmount() {
    hideMessage();

    let billAmountValue = billAmount.value;
    let cashGivenValue = cashGiven.value

    if (billAmountValue > 0) {
        if (cashGivenValue > billAmountValue || cashGivenValue === billAmountValue) {
            const amountReturn = cashGivenValue - billAmountValue
            calculateChange(amountReturn)
        } else {
            showMessage("Entered amount atleast should be equal to bill amount")
        }
    } else {
        showMessage("Invalid Entered Amount ")
    }
})

function calculateChange(amountReturn){
    for(let i = 0; i<avilableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountReturn/avilableNotes[i])
        // amountReturn %= avilableNotes[i]
        amountReturn = amountReturn % avilableNotes[i]
        notes[i].innerText = numberOfNotes;
    }

}

function hideMessage() {
    errorMessage.style.display = "none";
}

function showMessage(msg) {
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
}