
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
//     console.log(calculateMoney(-130))




// function checkName(name) {
//  if(typeof name ==="string") {
//    const lastlatter = name[name.length-1].toLowerCase();
//    if(lastlatter === "a"|| 
//      lastlatter === "y"||
//      lastlatter === "i"||
//      lastlatter === "e"||
//      lastlatter === "o"|| 
//      lastlatter === "u"|| 
//      lastlatter === "w" )
//      {
//       return "Good Name"
//     }
//     else {
//       return 'Bad Name'
//     }
//  }else{
//    return "invalid"
//  }
// }



//  function deleteInvalids(array) {
//    if(!Array.isArray(array)) {
//       return "Invalid Array"
//    } else{
//       const filterarray = [];
//       for(let i = 0; i < array.length; i++){
//         const elements = array[i];
//         if (typeof elements === "number" && ! isNaN(elements)){
//          filterarray . push (elements);
//         } 
//    }
//    return filterarray ;
//    }
// }





// function password(obj) {
//     if(!obj.name || !obj.birthYear || !obj.siteName){
//         return "invalid"
//     }
//     else if ( obj.birthYear <= 200){
//         return "invalid"
//     }
//    return ` ${obj.siteName}#${obj.name}@${obj.birthYear}`;
//     }



function monthlySavings(arr, livingCost) {
   if (Array.isArray(arr) === true && typeof livingCost === "number") {
      let totalearn = 0;
      for (const payment of arr) {
         if (payment >= 3000) {
            const tax = payment * 20 / 100;
            const earningtax = payment - tax;
            totalearn += earningtax;
         }else {
            totalearn += payment;
         }
      }
      const saveings = totalearn - livingCost;
      // return saveings;
      if (saveings >= 0) {
         return saveings
      }else {
         return "earn more";
      }
   }
   else {
      return "invalid input"
   }

}






