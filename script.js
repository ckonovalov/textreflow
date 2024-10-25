document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const copyButton = document.getElementById('copyButton');

    // Загрузка сохраненного текста из localStorage
    const savedText = localStorage.getItem('hebrewText');
    if (savedText) {
        inputText.value = savedText;
        updateOutput();
    }

    // Обновление вывода при вводе текста
    inputText.addEventListener('input', () => {
        updateOutput();
        // Сохранение текста в localStorage
        localStorage.setItem('hebrewText', inputText.value);
    });

    // Функционал копирования
    copyButton.addEventListener('click', () => {
        const textToCopy = outputText.innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Эффект подмигивания
            outputText.classList.add('blink');
            setTimeout(() => {
                outputText.classList.remove('blink');
            }, 1000); // Изменено с 500 на 1000 мс
        });
    });

    function updateOutput() {
        const input = inputText.value;
        const reversed = reverseHebrewText(input);
        outputText.innerHTML = reversed;
    }

    function reverseHebrewText(text) {
        const lines = text.split('\n');
        let result = '';

        for (let line of lines) {
            const hebrewChars = /[\u0590-\u05FF]/;
            const nonReversibleChars = /[0-9a-zA-Z:.]/;
            const punctuation = /[!@#$%^&*()_+\-=\[\]{};\\|,<>/?"""']/;
            const brackets = /[\(\)\[\]\{\}]/;
            
            let lineResult = '';
            let currentWord = '';
            let nonReversibleSequence = '';
            
            for (let i = line.length - 1; i >= 0; i--) {
                const char = line[i];
                if (hebrewChars.test(char)) {
                    lineResult += nonReversibleSequence + currentWord;
                    currentWord = createCharSpan(char);
                    nonReversibleSequence = '';
                } else if (nonReversibleChars.test(char)) {
                    nonReversibleSequence = createCharSpan(char, true) + nonReversibleSequence;
                } else if (brackets.test(char)) {
                    const reversedBracket = reverseBracket(char);
                    lineResult += nonReversibleSequence + currentWord + createCharSpan(reversedBracket, true);
                    currentWord = '';
                    nonReversibleSequence = '';
                } else if (punctuation.test(char)) {
                    lineResult += nonReversibleSequence + currentWord + createCharSpan(char, true);
                    currentWord = '';
                    nonReversibleSequence = '';
                } else if (char === ' ') {
                    lineResult += nonReversibleSequence + currentWord + createCharSpan(' ');
                    currentWord = '';
                    nonReversibleSequence = '';
                }
            }
            
            lineResult += nonReversibleSequence + currentWord;
            result += lineResult + '<br>';
        }
        
        return result.trim();
    }

    function createCharSpan(char, highlight = false) {
        let className = '';
        if (highlight) {
            className = /[0-9a-zA-Z]/.test(char) ? 'highlight-dark' : 'highlight';
        }
        return `<span class="${className}">${char}</span>`;
    }

    function reverseBracket(bracket) {
        const bracketPairs = {
            '(': ')',
            ')': '(',
            '[': ']',
            ']': '[',
            '{': '}',
            '}': '{'
        };
        return bracketPairs[bracket] || bracket;
    }
});
