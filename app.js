const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('#grid')
const result = document.querySelector('#result')
let cardChose = []
let cardChoseId = []
const cardWon = []

const createBoard = () => {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i  )
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

createBoard()

function checkMatch() {

    const cards = document.querySelectorAll('img')
    const optionOne = cardChoseId[0]
    const optiontwo = cardChoseId[1]

    console.log('check for match')

    if (optionOne == optiontwo) {
        cards[optionOne].setAttribute('src', 'images/blank.png')
        cards[optiontwo].setAttribute('src', 'images/blank.png')
        alert('You win')
    }
    if (cardChose[0] == cardChose[1]) {
        alert('You win')
        cards[optionOne].setAttribute('src', 'images/white.png')
        cards[optiontwo].setAttribute('src', 'images/white.png')
        cards[optionOne].removeEventListener('click', flipCard)
        cards[optiontwo].removeEventListener('click', flipCard) 
        cardWon.push(cardChose)
    }else {
        cards[optionOne].setAttribute('src', 'images/blank.png')
        cards[optiontwo].setAttribute('src', 'images/blank.png')
        alert('You lose, try again')
    }

    result.textContent = cardWon.length

    cardChose = []
    cardChoseId = []

    if (cardWon.length == cardArray.length / 2) {
        result.textContent = 'Congratulations you found them all'
    }

}

function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardChose.push(cardArray[cardId].name)
    cardChoseId.push(cardId)
    console.log('clicked', cardId)
    console.log(cardChose)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChose.length === 2) {
        setTimeout(checkMatch, 500)
    }


}