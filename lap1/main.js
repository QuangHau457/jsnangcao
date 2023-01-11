const football = {
    team1: 'vietnam',
    team2: 'thailan',
    players: [
        [
            'cong phương', 
            'quang hai',
            'quang hau',
            'van hau',
            'tan tai',
            'tan dung',
            'van lam',
            'tien linh',
            'hoang duc',
            'ngoc hai',
            'tuan anh',

        ],
        [
            'Theerathon Bunmathan',
            'Naruebodin',
            'Weerawatnodom',
            'Manuel Tom',
            'Songkrasin',
            'Sarach Yooyen',
            ' Supachok Sarachat',
            'Adisak Kraisorn',
            'Supachai Jaided',
            'Theerathon Bunmathan',
            'Supachok Sarachat',
        ],
    ],
    score: '4:0',
    scored: ['tien linh', 'cong phuong', 'quang hai', 'van hau'],
    date: '30/11/2003',
    odds : {
        team1: 4,
        x: 3.5,
        team2: 5.5,
    },
};
// 1: 
const [players1, players2] = football.players;
console.log(players1, players2);
// 2: 
const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers);
// 3: 
const allPlayer = [...players1, ...players2];
console.log(allPlayer);
// 4: 
const players1Final = [...players1, 'tuan hai', 'quang quy', 'quyen dan'];
console.log(players1Final);
// 5:
const {
    odds: {
    team1, x:draw, team2 },
} = football;
console.log(team1, draw, team2);
// 6. 
const printGoals = function(...players){
    console.log('${players.length} bàn thắng đã được ghi');
   
};
printGoals(...football.scored);
// 7. 
team1 < team2 && console.log('Team 1 có khả năng chiến thắng');
team1 > team2 && console.log('Team 2 có khả năng chiến thắng');