export default class App {
    constructor() {
        this.name = 'App';
        this.sentenceList = [];
        this.sentenceTable = document.querySelector('#sentence-table');
        this.submitButton = document.querySelector('#submit-button');
        this.pickButton = document.querySelector('#pick-button');
        this.downloadButton = document.querySelector('#download-button');

        this.init();
    }

    init() {
        console.log(`${this.name} initialized`);
        
        this.submitButton.addEventListener('click', () => {
            let sentence = document.getElementById('sentence').value;
            this.addSentence(sentence);
        });

        this.pickButton.addEventListener('click', () => {
            let randomSentence = this.sentenceList[Math.floor(Math.random() * this.sentenceList.length)];
            document.getElementById('picked-sentence').innerText = randomSentence;
        });

        this.downloadButton.addEventListener('click', () => {
            this.download();
        });
    }

    addSentence(sentence) {
        this.sentenceList.push(sentence);
        let sentenceRow = document.createElement('tr');
        let sentenceData = document.createElement('td');
        let sentenceText = document.createElement('p');
        let deleteButton = document.createElement('button');

        deleteButton.addEventListener('click', () => {
            sentenceRow.remove();
            this.sentenceList.splice(this.sentenceList.indexOf(sentence), 1);
        });

        sentenceText.innerText = sentence;
        deleteButton.innerText = 'Delete';
        sentenceData.appendChild(sentenceText);
        sentenceData.appendChild(deleteButton);
        sentenceRow.appendChild(sentenceData);
        this.sentenceTable.appendChild(sentenceRow);
    } 

    download() {
        let text = '';
        this.sentenceList.forEach(sentence => {
            text += sentence + '\n';
        });

        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', 'sentences.txt');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }


}