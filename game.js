//List of Chocolates
let chocs = [
    {
      chocName: "Plain Milk",
      description: "Smooth milk chocolate",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream",
      img: "plain_milk.jpg",
    },
    {
      chocName: "Plain Dark",
      description: "Dark chocolate",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream",
      img: "plain_dark.jpg",
    },
    {
      chocName: "Bailey's Cup",
      description: "Dark chocolate with Bailey's Cream Filling",
      calories: 100,
      ingredients: "Cocoa butter, Milk, Cream, baileys",
      img: "baileys_cup.jpg",
    },
    {
      chocName: "Cappuccino Cup",
      description: "Dark chocolatewith Cappuccino style cream filling",
      calories: 120,
      ingredients: "Cocoa butter, Milk, Cream, Cappuccino fondant",
      img: "cappuccino_cup.jpg",
    },
    {
      chocName: "Nutter Butter",
      description: "Dark chocolate with peanut butter",
      calories: 190,
      ingredients: "Cocoa butter, Milk, Cream, peanut butter",
      img: "nutter_butter.jpg",
    },
    {
      chocName: "Orange Fondant",
      description: "Dark chocolate folded with orange fondant",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, orange peel, orange fondant",
      img: "orange_fondant.jpg",
    },
    {
      chocName: "Pistachio Cup",
      description: "Dark chocolate with nuggets of pistachio",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, chunks of pistachio nut",
      img: "pistachio_diamond.jpg",
    },
    {
      chocName: "Rum Barrel",
      description: "Dark chocolate with a decadent rum filling",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, rum paste and rum flavourings",
      img: "rum_barrel.jpg",
    },
    {
      chocName: "Toffee Crunch",
      description: "Dark chocolate with brittle toffee candy",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, toffee",
      img: "toffee_crunch.jpg",
    },
    {
      chocName: "Plain Supreme",
      description: "Dark chocolate with slivers of milk chocolate",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream",
      img: "plain_hybrid.jpg",
    },
  ];

  const base = () => {
    // creates a flex wrapper for the chocs
    let theWrapper = document.createElement("div");
    console.log("Wrapper: ", theWrapper); // make sure to view this

    chocs.forEach((choc) => {

    //card info
    console.log(choc);
    let chocDiv = document.createElement("div");
    chocDiv.classList.add("box");

    //name
    let chocHeader = document.createElement("h3");
    chocHeader.textContent = choc.chocName;
    chocDiv.append(chocHeader);

    //images
    let pChocImg = document.createElement("img");
    pChocImg.src = choc.img;
    chocDiv.appendChild(pChocImg);

    //description
    let pChocDescription = document.createElement("p");
    pChocDescription.textContent = choc.description;
    chocDiv.appendChild(pChocDescription);


    //create the calories 
    let pChocCalories = document.createElement("p");
    pChocCalories.textContent = "Calories : " + choc.calories;
    chocDiv.appendChild(pChocCalories);


    //create the ingredients
    let pChocIngredients = document.createElement("p");
    pChocIngredients.textContent = choc.ingredients;
    chocDiv.appendChild(pChocIngredients);

    // add classes so that they can be targeted using jQuery or JavaScript
    pChocDescription.classList.add("chocolateDescription");
    pChocCalories.classList.add("chocolateCalories");
    pChocIngredients.classList.add("chocolateIngredients");

    theWrapper.append(chocDiv);
});

$("p:last").after(theWrapper);

theWrapper.classList.add("chocolateWrapper");
};

$(document).ready(base);


let showDetails = true;
const toggleDetails = () => {
    showDetails = !showDetails;
    if (showDetails) {
    $(
    "p.chocolateCalories, p.chocolateIngredients, p.chocolateDescription"
    ).show();
    } else {
    $(
    "p.chocolateCalories, p.chocolateIngredients, p.chocolateDescription"
    ).hide();
    }
    };

const RandomChocolateChoice = () => {
    let randomIndex = Math.floor(Math.random() * chocs.length);
    console.log(randomIndex);

    $(".chocolateWrapper .box:eq(" + randomIndex + ")").css(
    "background-color","#FFF985");

    alert("Give this number to cashier, let cashier know " +
    chocs[randomIndex].chocName + ": " + (randomIndex + 1)
    );
    };
