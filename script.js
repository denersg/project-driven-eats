// let i = 0;

// function clicado(){
//     const selected = document.querySelector(".botao");
//     selected.classList.toggle("selecionado");
//     // i++;
//     // console.log(i)
// }

let i = 0;
function selectItem(e){
    if(i === 0){
        if(e.classList.contains("selected")){
            e.classList.remove("selected");
        }
        else{
            e.classList.add("selected");
        }
        i++;
    }
    // const item = document.querySelector(".dish");
    // item.classList.toggle("selected");
}

// ************* PODE AJUDAR MUITO *************

{/* <div id="item1" onclick=selecionar("item1")> */}