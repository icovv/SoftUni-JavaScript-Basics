function summerOutfit(input) {

    let degrees = Number(input[0]);
    let day = input[1];

    switch (day){
        case "Morning":
            if(degrees >= 10 && degrees <= 18){
                console.log(`It's ${degrees} degrees, get your Sweatshirt and Sneakers.`)
            } else if (degrees > 18 && degrees <= 24){
                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`)
            } else if (degrees >= 25){
                console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`)
            }
            break;
        case "Afternoon":
            if(degrees >= 10 && degrees <= 18){
                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`)
            } else if (degrees > 18 && degrees <= 24){
                console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`)
            } else if (degrees >= 25){
                console.log(`It's ${degrees} degrees, get your Swim Suit and Barefoot.`)
            }
            break;
        case "Evening":
            if(degrees >= 10 && degrees <= 18){
                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`)
            } else if (degrees > 18 && degrees <= 24){
                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`)
            } else if (degrees >= 25){
                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`)
            }
            break;
    }
}

//summerOutfit (["16", "Morning"])