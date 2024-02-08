
// function calculateMoney(ticketSale) {
//     if(ticketSale <= 0){
//         return "Invalid Number"
//     }
//     const perticketSale = 120
//     const daroanPay = 500
//     const perPerson = 50 * 8;
//     const totalticketSale = perticketSale * ticketSale;
//     const expenseTaka = daroanPay + perPerson;
//     const result = totalticketSale - expenseTaka;
//      return result;
//     }
//     console.log(calculateMoney(1055))




// function checkName(name) {
   
//     for(const item of name){
//     let nameEnd = "A, y, i , e , o , u, w"
//     if(nameEnd.includes(item)=== true){
//         return "good name"
//     }
//     else if(nameEnd.includes(item)=== false){
//         return "Bad Name"
//     }
   
//     }

// }
// console.log(checkName("RAFEE"));


// function password(obj) {
//     if(!obj.name || !obj.birthYear || !obj.siteName){
//         return "invalid"
//     }
//     else if ( obj.birthYear <= 200){
//         return "invalid u"
//     }
//    return ` ${obj.siteName}#${obj.name}@${obj.birthYear}`;
//     }


 function deleteInvalids(array) {
       for(const item of array){
        let allDelInvalids = array.filter(item);
        if(typeof item ==="number" && ! isNaN(item)){
           return allDelInvalids;
        }
    }
   
   
    }
    console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))


