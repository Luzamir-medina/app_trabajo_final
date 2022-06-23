const formElement = document.getElementById("saveTransaction");

formElement.addEventListener("submit",(event)=>{
    event.preventDefault();
    let transactionDescription = document.getElementById("transactionDescription").value;
    let transactionprice = document.getElementById("transactionprice").value;
    let transaction ={transactionDescription: transactionDescription, transactionprice: transactionprice}
    let transactionJson =JSON.stringify("transaction");
    //mandar la transactionJson datos al backend y guardarlos ahi
    fetch('http://localhost:3000/transactions',{
        method: 'post',
        body :transactionJson

    })
   
})
fetch('http://localhost:3000/transactions').then(x =>x.json()).then(console.log)