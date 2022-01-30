let i = 0;

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

function selectDessert(e){
    removeSelectedDessert();
    selectCheckMark(e);
    //Adiciona a classe 'selected'
    e.classList.add("selected");
}

function removeSelectedDrink(){
    const selectedDrink = document.querySelector(".drink .selected");
    if(selectedDrink !== null){
        selectedDrink.classList.remove("selected");
    }
}

function selectDrink(e){
    removeSelectedDrink();
    selectCheckMark(e);
    //Adiciona a classe 'selected'
    e.classList.add("selected");
}

function removeSelectedMeal(){
    const selectedDish = document.querySelector(".meal .selected");
    if(selectedDish !== null){
        selectedDish.classList.remove("selected");
    }
}

function selectMeal(e){
    removeSelectedMeal();
    //Chama a função para inserir o ícone de marcação
    selectCheckMark(e);
    //Adiciona a classe 'selected'
    e.classList.add("selected");
    console.log(e.classList);
}