const FRONT = 'card-front'
const BACK = 'card-back'
const CARD = 'card'
const ICON = 'icon'


startGame();

function startGame() {
    initializeCards(gamer.createCardsFromAnimals());

}

function initializeCards(cards) {

    let gameBoard = document.getElementById("gameBoard"); //indx
    //console.log(gameBoard)
    
    gamer.cards.forEach(card => {

        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD); //listas da nossas classes
        //VERIFICA SE AS IMG SÃO IGUAIS:
        cardElement.dataset.icon = card.icon; //icon eu que to definindo 
        
        createCardContent(card, cardElement);

        cardElement.addEventListener('click', virarCarta)

        gameBoard.appendChild(cardElement); //appendChild vai add ao cardElement
    
    })
}

function createCardContent(card, cardElement){

    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);

}

function createCardFace(face, card, element){

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);

    if(face == FRONT){
        let iconElement = document.createElement('img');
        cardElementFace.classList.add(ICON);
        iconElement.src = "./assets/img/" + card.icon + '.svg';
        cardElementFace.appendChild(iconElement);
    }else{
        cardElementFace.innerHTML =  "&lt/&gt";
    }
    element.appendChild(cardElementFace);
}

function virarCarta() {
    
    this.classList.add('flip');
}