const formElement = document.getElementById("saveTransaction");

formElement.addEventListener("submit",(event)=>{
    event.preventDafault();
    let transactionDescription = document.getElementById("transctionDescription").value;
    let transactionprice = document.getElementById("transcationprice").value;
    let transaction={transctionDescription: transctionDescription, transcationprice: transcationprice}
    let transactionJson =JSON.stringify("transaction");
    //mandar la transactionJson datos al backend y guardarlos ahi
    fetch('http://localhost:3000/transactions',{
        method: 'post',
        body :transactionJson

    })
   
})