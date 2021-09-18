var bill = document.querySelector("#bill");
var cash = document.querySelector("#cash");
var check = document.querySelector("#check");
var message = document.querySelector("#message");
var noOfNotes = document.querySelectorAll(".no-of-notes");

var notes = [2000, 500, 100, 20, 10, 5, 1];




check.addEventListener("click", function(){
    hideMessage();
    if(bill.value > 0)
    {
        if(Number(cash.value) >= Number(bill.value))
        {
            var returnAmount = cash.value - bill.value;
            console.log(returnAmount);
            calculateChange(returnAmount);
        }
        else
        {
            showErrorMessage("Give more cash!");
        }
    }
    else
    {
        showErrorMessage("Invalid Input");
    }
})


function calculateChange(amount) {
    var i = 0;

    while(i < 7)
    {
        var numberofNote = Math.trunc((amount/notes[i]));
        amount = amount % notes[i];
        noOfNotes[i].innerText = numberofNote.toString();
        i++;
    }
}




function hideMessage()
{
    message.style.display = "none";
}


function showErrorMessage(errorMessage){
    message.style.display = "block";

    message.innerText = errorMessage;
}

