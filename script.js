class Message {
    constructor(author, time, text) {
        this.author = author;
        this.time = time;
        this.text = text;
    }
    toString () {
        return `${this.time} ${this.author} : ${this.text}`;
    }
}
class Messenger {
    constructor() {
        this.history = [];
    }
    show_history() {
        this.history.forEach( item => {
            console.log(item.toString());
        })
    }
    send(author, text) {

        let line = new Message(author, gettime(), text);
        this.history.push(line);
    }
}

function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}


let messenger = new Messenger()
messenger.send('Артем', 'Первое сообщение')
messenger.send('Мария', 'Второе сообщение')
messenger.show_history()