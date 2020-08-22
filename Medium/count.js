

//My answer
const count = deck => {
    const cards = {A:-1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:0, 8:0, 9:0,10:-1, J:-1, Q:-1, K:-1};
    let total = 0;
    for(let card of deck) {
        total += cards[card];
    }
    return total;  
}

//Other answer great logic
const count = deck => deck.reduce((a, c) => a + (c <= 6 ? 1 : c <= 9 ? 0 : -1), 0);

//Other answer using reduce I attempted this first but couldn't get reduce working
const count = deck => {
	const cards = {A:-1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:0, 8:0, 9:0,10:-1, J:-1, Q:-1, K:-1};
    return deck.reduce((a, b) => a + card[b], 0);
}
