export default class App {
    constructor() {
        this.name = 'App';
        this.sentenceList = [];
        this.sentenceTable = document.querySelector('#sentence-table');
        this.submitButton = document.querySelector('#submit-button');

        this.init();
    }

    init() {
        console.log(`${this.name} initialized`);
        this.submitButton.addEventListener('click', () => {
            let sentence = document.getElementById('sentence').value;
            this.addSentence(sentence);
        });
    }

    addSentence(sentence) {
        this.sentenceList.push(sentence);
        let sentenceRow = document.createElement('tr');
        let sentenceData = document.createElement('td');
        sentenceData.innerText = sentence;
        sentenceRow.appendChild(sentenceData);
        this.sentenceTable.appendChild(sentenceRow);
    } 


}