

export const chatBotService = {
    sendMessage,
    stopBotService,
    getRandomInt
}

var gIsWorking = true;
var gData = [
    { name: 'johnWiCK', msg: 'Yo ppl, whats up?', color: '#00BD8D', roomId: 'general' },
    { name: 'johnWiCK', msg: 'i like this chat app :>', color: '#00BD8D', roomId: 'general' },
    { name: 'hax0r', msg: 'Hi John, how are you mate?', color: '#FE8818', roomId: 'general' },
    { name: 'johnWiCK', msg: 'i\'m fine hax, thx, where\'s everybody?', color: '#00BD8D', roomId: 'general' },
];


function sendMessage() {
    if (gIsWorking) {
        return gData[getRandomInt(0, gData.length - 1)];
    }
    else {
        return;
    }
}

function stopBotService(command) {
    gIsWorking = command;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
