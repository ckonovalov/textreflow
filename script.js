document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');

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

    function updateOutput() {
        const input = inputText.value;
        const reversed = reverseHebrewText(input);
        outputText.innerHTML = reversed;
    }

    function reverseHebrewText(text) {
        const hebrewChars = /[\u0590-\u05FF]/;
        const nonReversibleChars = /[0-9a-zA-Z:]/;
        const punctuation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/;
        const brackets = /[\(\)\[\]\{\}]/;
        
        let result = '';
        let currentWord = '';
        let nonReversibleSequence = '';
        
        for (let i = text.length - 1; i >= 0; i--) {
            const char = text[i];
            if (hebrewChars.test(char)) {
                if (nonReversibleSequence) {
                    currentWord = nonReversibleSequence + currentWord;
                    nonReversibleSequence = '';
                }
                currentWord += createCharSpan(char);
            } else if (nonReversibleChars.test(char)) {
                nonReversibleSequence = createCharSpan(char, true) + nonReversibleSequence;
            } else if (brackets.test(char)) {
                const reversedBracket = reverseBracket(char);
                if (currentWord || nonReversibleSequence) {
                    result += nonReversibleSequence + currentWord + createCharSpan(reversedBracket, true);
                    currentWord = '';
                    nonReversibleSequence = '';
                } else {
                    result += createCharSpan(reversedBracket, true);
                }
            } else if (punctuation.test(char)) {
                if (nonReversibleSequence) {
                    nonReversibleSequence = createCharSpan(char, true) + nonReversibleSequence;
                } else {
                    currentWord = createCharSpan(char, true) + currentWord;
                }
            } else if (char === ' ') {
                result += nonReversibleSequence + currentWord + createCharSpan(' ');
                currentWord = '';
                nonReversibleSequence = '';
            }
        }
        
        result += nonReversibleSequence + currentWord;
        
        return result;
    }

    function createCharSpan(char, highlight = false) {
        const className = highlight ? 'highlight' : '';
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
