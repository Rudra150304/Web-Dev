//Create a business name generator by combining list of adjactives and shop name and another word

// Adjectives:
//     Crazy, Amazing, Fire

// Shopname:
//     Engine, Foods, Garments

// Another word:
//     Bros, Limited, Hub

let first, second, third;

{
    let r = Math.random();
    if(r<0.33){
        first = "Crazy";
    }
    else if(r<0.66){
        first = "Amazing";
    }
    else{
        first = "Fire";
    }
}
{
    let r = Math.random();
    if(r<0.33){
        second = "Engine";
    }
    else if(r<0.66){
        second = "Foods";
    }
    else{
        second = "Garments";
    }
}
{
    let r = Math.random();
    if(r<0.33){
        third = "Bros";
    }
    else if(r<0.66){
        third = "Limited";
    }
    else{
        third = "Hub";
    }
}

console.log(`${first} ${second} ${third}`);