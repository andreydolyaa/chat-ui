

export const chatBotService = {
    sendMessage,
    getRandomInt
}


var gData = [
    { name: 'johnWiCK', msg: 'Yo ppl, whats up?', color: '#00BD8D', roomId: 'general' },
    { name: 'johnWiCK', msg: 'i like this chat app :>', color: '#00BD8D', roomId: 'general' },
    { name: 'hax0r', msg: 'Hi John, how are you mate?', color: '#FE8818', roomId: 'general' },
    { name: 'johnWiCK', msg: 'i\'m fine hax, thx, where\'s everybody?', color: '#00BD8D', roomId: 'general' },
    { name: 'Code_Girl^_^', msg: 'yo guys, im trying to hack candy crash, i need help pls!!', color: '#E000FF', roomId: 'general' },
    { name: 'hax0r', msg: 'code girl, i can reverse engineer it for you if you want...', color: '#FE8818', roomId: 'general' },
    { name: 'Code_Girl^_^', msg: 'hax0r can you help with that thing please?', color: '#E000FF', roomId: 'general' },
    { name: 'hax0r', msg: 'no problem, it will cost u 5 BTC. (-:', color: '#FE8818', roomId: 'general' },
    { name: 'Code_Girl^_^', msg: 'ARGGGGH!!!! 🤬🤬🤬🤬🤬', color: '#E000FF', roomId: 'general' },
    { name: 'alpha_centauri', msg: 'anyone heard about the signal coming from Proxima Centauri?!?! thats insane!', color: '#FF9B00', roomId: 'general' },
    { name: 'ManMadeMan81', msg: '^ yeah alpha its probably E.T calling for you 🤣🤣', color: '#7BA200', roomId: 'general' },
    { name: 'johnWiCK', msg: 'HAHAHAHAHAHAHAHA', color: '#00BD8D', roomId: 'general' },
    { name: 'hax0r', msg: 'lmao XDD', color: '#FE8818', roomId: 'general' },
    { name: 'hax0r', msg: '🤣🤣🤣🤣🤣🤣🤣🤣🤣', color: '#FE8818', roomId: 'general' },
    { name: 'hax0r', msg: 'nice one', color: '#FE8818', roomId: 'general' },
    { name: 'Code_Girl^_^', msg: 'LOL', color: '#E000FF', roomId: 'general' },
    { name: 'alpha_centauri', msg: 'yeah, i\'ll go to Alien Tech chat, maybe theyll understand me... you guys keep trying hack candy crush, rofl xD', color: '#FF9B00', roomId: 'general' },
    { name: 'alpha_centauri', msg: 'NO WAY MANN!!?', color: '#FF9B00', roomId: 'general' },
    { name: 'ANDREY_DOLYA_🦊', msg: 'Yo guys, I\'im looking for a Frontend \ Fullstack position, if you know someone recommend me please :)  my Email: dolya7kk@gmail.com , thanks guys :)!', color: '#5D00FF' },
    { name: 'ANDREY_DOLYA_🦊', msg: 'I\'m working on voice massages feature, soon it will be ready guys', color: '#5D00FF' },
    { name: 'Captaion_Philippa_Georgiou', msg: 'Bitcoin is skyrocketing today! $40,000!! omg..😵', color: '#81FF00' },
    { name: 'Matthew', msg: 'Guys does some1 tried Matter.js?', color: '#004068' },
    { name: 'hax0r', msg: 'Matthew i\'m working with to create animations for my games, great library', color: '#FE8818' },
    { name: 'johnWiCK', msg: 'hi matt whatsup?', color: '#00BD8D', roomId: 'general' },
    { name: 'ManMadeMan81', msg: 'hi matt long time no seen!🤠', color: '#7BA200' },
    { name: 'Code_Girl^_^', msg: 'Guys does some one knows how to get a random object from an array of objects?', color: '#E000FF' },
    { name: 'ManMadeMan81', msg: 'codegirl, try this ---- array[getRandomInt(0, array.length-1)]', color: '#7BA200' },
    { name: 'Alexander', msg: 'try this -> return script ? script.name : "none";}).filter(({name}) => name != "none");', color: '#FF0000' },
    { name: 'Alexander', msg: 'maybe this one? -> return `${Math.round(count * 100 / total)}% ${name}`;', color: '#FF0000' },
    { name: 'ANDREY_DOLYA_🦊', msg: 'Feel free to ask questions! 🤩', color: '#5D00FF' },
    { name: 'ANDREY_DOLYA_🦊', msg: 'Hello everybody! 🤩', color: '#5D00FF' },
    { name: 'hax0r', msg: 'Will Ethereum 2 still use Smart Contracts?', color: '#FE8818', roomId: 'general' },
    { name: 'johnWiCK', msg: 'bought 15,000 TRX today', color: '#00BD8D', roomId: 'general' },
    { name: 'Captaion_Philippa_Georgiou', msg: 'trx is worth 0.01 today, bad investment i think...', color: '#81FF00' },
    { name: 'Code_Girl^_^', msg: 'Vue3 is awesome !🐞🐞', color: '#E000FF' },
    { name: 'johnWiCK', msg: 'ye i like Vue also, not tried vue3 yet...', color: '#00BD8D' },
    { name: 'Kepler-B180', msg: 'Hi guys!', color: '#1A0068' },
    { name: 'ADMIN', msg: 'enjoy our chat! (DONT SHARE PERSONAL DATA, ITS STILL UNENCRYPTED :-) )', color: '#FF0000' },
    { name: 'ADMIN', msg: 'Don\'t spam please!', color: '#FF0000' },
    { name: 'ANDREY_DOLYA_🦊', msg: 'checkout my gitHub https://github.com/andreydolyaa?tab=repositories', color: '#5D00FF' },
    { name: 'ANDREY_DOLYA_🦊', msg: 'i\'m look for my first opportunity as a Frontend or Fullstack developer, i just love to code & learn new stuff, and i want to becomse a MASTER in this field! i just need the chance to prove myself! contact me on dolya7kk@gmail.com 🤩', color: '#5D00FF', admin: true },
    { name: 'ANDREY_DOLYA_🦊', msg: 'i\'m look for my first opportunity as a Frontend or Fullstack developer, i just love to code & learn new stuff, and i want to becomse a MASTER in this field! i just need the chance to prove myself! contact me on dolya7kk@gmail.com 🤩', color: '#5D00FF', admin: true },
    { name: 'Eilon_Shetrit', msg: 'HELLO !', color: '#414a4c' },
    { name: 'Conor1990', msg: 'guys, i\'m building a trading bot, anyone have an experience with Binance API? !', color: '#414a4c' },
    { name: 'Kepler-B180', msg: 'Conor use CCXT, its uses the same api for all the exchanges', color: '#1A0068' },
    { name: 'Kepler-B180', msg: 'Whats up guys?', color: '#1A0068' },
    { name: 'Kepler-B180', msg: 'Why Netflix didn\'t upload Star Trek episode 17 this week ?!?!🤬🤬🤬', color: '#1A0068' },
    { name: 'ADMIN', msg: 'Hi !', color: '#FF0000' },
    { name: 'ADMIN', msg: 'Bye Bye!🤩', color: '#FF0000' },
    { name: 'Alexander', msg: 'Anyone knows which blockchain has the most tokens on it?', color: '#FF0000' },
    { name: 'Eilon_Shetrit', msg: 'alexander, i think the Ethereum blockchain has the most tokens on it, everybodys building their crypto on th ERC-20 token...', color: '#414a4c' },
];


function sendMessage() {
    return gData[getRandomInt(0, gData.length - 1)];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
