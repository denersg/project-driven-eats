let meal, mealPrice, drink, drinkPrice, dessert, dessertPrice;

function showEndButton(){
    const endButton = document.querySelector(".blocked-button");
    
    //Para evitar possíveis erros
    if(endButton != null){
        if(meal != undefined && drink != undefined && dessert != undefined){
            console.log("ENTROOOUUU")
            endButton.classList.remove("blocked-button");
            endButton.classList.add("select-button");
            endButton.innerHTML = "Fechar pedido";
        }
    }
}

function selectCheckMark(e){
    //Adiciona o ícone de marcação
    e.classList.add("check");
}

function removeSelectedDessert(){
    const selectedDessert = document.querySelector(".dessert .selected");
    if(selectedDessert !== null){
        selectedDessert.classList.remove("selected");
    }
}

function selectDessert(e, chosenDessert){
    dessert = document.querySelector(`.${chosenDessert} .dish-content .title`).innerText;
    dessertPrice = document.querySelector(`.${chosenDessert} .dish-content .price`).innerText;
    // console.log(dessert)
    // console.log(dessertPrice)
    removeSelectedDessert();
    selectCheckMark(e);
    //Adiciona a classe 'selected'
    e.classList.add("selected");
    showEndButton();
}

function removeSelectedDrink(){
    const selectedDrink = document.querySelector(".drink .selected");
    if(selectedDrink !== null){
        selectedDrink.classList.remove("selected");
    }
}

function selectDrink(e, chosenDrink){
    drink = document.querySelector(`.${chosenDrink} .dish-content .title`).innerText;
    drinkPrice = document.querySelector(`.${chosenDrink} .dish-content .price`).innerText;
    // console.log(drink)
    // console.log(drinkPrice)
    removeSelectedDrink();
    selectCheckMark(e);
    //Adiciona a classe 'selected'
    e.classList.add("selected");
    showEndButton();
}

function removeSelectedMeal(){
    const selectedDish = document.querySelector(".meal .selected");
    if(selectedDish !== null){
        selectedDish.classList.remove("selected");
    }
}

function selectMeal(e, chosenMeal){
    meal = document.querySelector(`.${chosenMeal} .dish-content .title`).innerText;
    mealPrice = document.querySelector(`.${chosenMeal} .dish-content .price`).innerText;
    // console.log(meal)
    // console.log(mealPrice)
    
    removeSelectedMeal();
    selectCheckMark(e);
    
    e.classList.add("selected");
    showEndButton();
}