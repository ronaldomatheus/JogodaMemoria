let gamer = {

    animals : [
        'gato',
        'horse',
        'fish',
        'frog',
        'hippo',
        'cachorro',
        'passaro',
        'spider',
        'lomtra',
        'kiwi'
    ],

     cards : null,

     createCardsFromAnimals: function () {
        
        this.cards = [];

        this.animals.forEach((animal) => {
          
        this.cards.push(createPairFromAnimal(animal));
     }) 
        this.cards = this.cards.flatMap(pair => pair);
        this.embaralhaCards();
        return this.cards;     
    
    },
 
    createPairFromAnimal: function (animal){
        return [{
            id: this.createIdAnimal(animal), //valor randomico 
            icon: animal,
            flipped: false, //carta virada ou nao ? começa sempre ñ virada
        }, 
        {
            id: this.createIdAnimal(animal), //valor randomico 
            icon: animal,
            flipped: false, 
        }
    ]},

    createIdAnimal: function (animal){
        return animal + parseInt( Math.random() * 1000)

    },
    
    embaralhaCards: function (cards){
        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while(currentIndex !== 0){

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]] //substituir valor de duas variaveis
        }
    }
}