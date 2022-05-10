
/***************************************/
/***Function with Object as Parameter***/
/***************************************/


//The Cash Register
    
    /*
    Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
    Example
    
    // Input
    var cartForParty = {  
      banana: "1.25",
      handkerchief: ".99",
      Tshirt: "25.01",
      apple: "0.60",
      nalgene: "10.34",
      proteinShake: "22.36"
    };
    
    // Output
    cashRegister(cartForParty)); // 60.55
    
    */
    
    var cartForParty = {
        banana: "1.25",
        handkerchief: ".99",
        Tshirt: "25.01",
        apple: "0.60",
        nalgene: "10.34",
        proteinShake: "22.36"
    };
    let currentBalance = 0;
    
    function cashRegister(shoppingCart) {
    
        for (const key in shoppingCart) {
            if (Object.hasOwnProperty.call(object, key)) {
    
                currentBalance + object[key];
    
            }
        }
    
        currentBalance + object[key];
        console.log(currentBalance);
    }