const isolatedForms = {
    0x0621: 0xFE80, 0x0622: 0xFE81, 0x0623: 0xFE83, 0x0624: 0xFE85, 0x0625: 0xFE87, 0x0626: 0xFE89, 0x0627: 0xFE8D,
    0x0628: 0xFE8F, 0x0629: 0xFE93, 0x062A: 0xFE95, 0x062B: 0xFE99, 0x062C: 0xFE9D, 0x062D: 0xFEA1, 0x062E: 0xFEA5,
    0x062F: 0xFEA9, 0x0630: 0xFEAB, 0x0631: 0xFEAD, 0x0632: 0xFEAF, 0x0633: 0xFEB1, 0x0634: 0xFEB5, 0x0635: 0xFEB9,
    0x0636: 0xFEBD, 0x0637: 0xFEC1, 0x0638: 0xFEC5, 0x0639: 0xFEC9, 0x063A: 0xFECD, 0x0641: 0xFED1, 0x0642: 0xFED5,
    0x0643: 0xFED9, 0x0644: 0xFEDD, 0x0645: 0xFEE1, 0x0646: 0xFEE5, 0x0647: 0xFEE9, 0x0648: 0xFEED, 0x0649: 0xFEEF,
    0x064A: 0xFEF1, 0x066E: 0xFBE4, 0x066F: 0xFBE8, 0x0671: 0xFB50, 0x0679: 0xFB66, 0x067A: 0xFB5E, 0x067B: 0xFB52,
    0x067E: 0xFB56, 0x067F: 0xFB62, 0x0680: 0xFB5A, 0x0683: 0xFB76, 0x0684: 0xFB72, 0x0686: 0xFB7A, 0x0687: 0xFB7E,
    0x0688: 0xFB88, 0x068C: 0xFB84, 0x068D: 0xFB82, 0x068E: 0xFB86, 0x0691: 0xFB8C, 0x0698: 0xFB8A, 0x06A4: 0xFB6A,
    0x06A6: 0xFB6E, 0x06A9: 0xFB8E, 0x06AD: 0xFBD3, 0x06AF: 0xFB92, 0x06B1: 0xFB9A, 0x06B3: 0xFB96, 0x06BA: 0xFB9E,
    0x06BB: 0xFBA0, 0x06BE: 0xFBAA, 0x06C0: 0xFBA4, 0x06C1: 0xFBA6, 0x06C5: 0xFBE0, 0x06C6: 0xFBD9, 0x06C7: 0xFBD7,
    0x06C8: 0xFBDB, 0x06C9: 0xFBE2, 0x06CB: 0xFBDE, 0x06CC: 0xFBFC, 0x06D0: 0xFBE4, 0x06D2: 0xFBAE, 0x06D3: 0xFBB0
};

const initialForms = {
    0x0626: 0xFE8B, 0x0628: 0xFE91, 0x062A: 0xFE97, 0x062B: 0xFE9B, 0x062C: 0xFE9F, 0x062D: 0xFEA3, 0x062E: 0xFEA7,
    0x0633: 0xFEB3, 0x0634: 0xFEB7, 0x0635: 0xFEBB, 0x0636: 0xFEBF, 0x0637: 0xFEC3, 0x0638: 0xFEC7, 0x0639: 0xFECB,
    0x063A: 0xFECF, 0x0641: 0xFED3, 0x0642: 0xFED7, 0x0643: 0xFEDB, 0x0644: 0xFEDF, 0x0645: 0xFEE3, 0x0646: 0xFEE7,
    0x0647: 0xFEEB, 0x064A: 0xFEF3, 0x067A: 0xFB60, 0x067B: 0xFB54, 0x067E: 0xFB58, 0x067F: 0xFB64, 0x0680: 0xFB5C,
    0x0683: 0xFB78, 0x0684: 0xFB74, 0x0686: 0xFB7C, 0x0687: 0xFB80, 0x06A4: 0xFB6C, 0x06A6: 0xFB70, 0x06A9: 0xFB90,
    0x06AD: 0xFBD5, 0x06AF: 0xFB94, 0x06B1: 0xFB9C, 0x06B3: 0xFB98, 0x06BB: 0xFBA2, 0x06BE: 0xFBAC, 0x06C1: 0xFBA8,
    0x06CC: 0xFBFE, 0x06D0: 0xFBE6
};

const medialForms = {
    0x0626: 0xFE8C, 0x0628: 0xFE92, 0x062A: 0xFE98, 0x062B: 0xFE9C, 0x062C: 0xFEA0, 0x062D: 0xFEA4, 0x062E: 0xFEA8,
    0x0633: 0xFEB4, 0x0634: 0xFEB8, 0x0635: 0xFEBC, 0x0636: 0xFEC0, 0x0637: 0xFEC4, 0x0638: 0xFEC8, 0x0639: 0xFECC,
    0x063A: 0xFED0, 0x0641: 0xFED4, 0x0642: 0xFED8, 0x0643: 0xFEDC, 0x0644: 0xFEE0, 0x0645: 0xFEE4, 0x0646: 0xFEE8,
    0x0647: 0xFEEC, 0x064A: 0xFEF4, 0x067A: 0xFB61, 0x067B: 0xFB55, 0x067E: 0xFB59, 0x067F: 0xFB65, 0x0680: 0xFB5D,
    0x0683: 0xFB79, 0x0684: 0xFB75, 0x0686: 0xFB7D, 0x0687: 0xFB81, 0x06A4: 0xFB6D, 0x06A6: 0xFB71, 0x06A9: 0xFB91,
    0x06AD: 0xFBD6, 0x06AF: 0xFB95, 0x06B1: 0xFB9D, 0x06B3: 0xFB99, 0x06BB: 0xFBA3, 0x06BE: 0xFBAD, 0x06C1: 0xFBA9,
    0x06CC: 0xFBFF, 0x06D0: 0xFBE7
};

const finalForms = {
    0x0622: 0xFE82, 0x0623: 0xFE84, 0x0624: 0xFE86, 0x0625: 0xFE88, 0x0626: 0xFE8A, 0x0627: 0xFE8E, 0x0628: 0xFE90,
    0x0629: 0xFE94, 0x062A: 0xFE96, 0x062B: 0xFE9A, 0x062C: 0xFE9E, 0x062D: 0xFEA2, 0x062E: 0xFEA6, 0x062F: 0xFEAA,
    0x0630: 0xFEAC, 0x0631: 0xFEAE, 0x0632: 0xFEB0, 0x0633: 0xFEB2, 0x0634: 0xFEB6, 0x0635: 0xFEBA, 0x0636: 0xFEBE,
    0x0637: 0xFEC2, 0x0638: 0xFEC6, 0x0639: 0xFECA, 0x063A: 0xFECE, 0x0641: 0xFED2, 0x0642: 0xFED6, 0x0643: 0xFEDA,
    0x0644: 0xFEDE, 0x0645: 0xFEE2, 0x0646: 0xFEE6, 0x0647: 0xFEEA, 0x0648: 0xFEEE, 0x0649: 0xFEF0, 0x064A: 0xFEF2,
    0x0671: 0xFB51, 0x0679: 0xFB67, 0x067A: 0xFB5F, 0x067B: 0xFB53, 0x067E: 0xFB57, 0x067F: 0xFB63, 0x0680: 0xFB5B,
    0x0683: 0xFB77, 0x0684: 0xFB73, 0x0686: 0xFB7B, 0x0687: 0xFB7F, 0x0688: 0xFB89, 0x068C: 0xFB85, 0x068D: 0xFB83,
    0x068E: 0xFB87, 0x0691: 0xFB8D, 0x0698: 0xFB8B, 0x06A4: 0xFB6B, 0x06A6: 0xFB6F, 0x06A9: 0xFB8F, 0x06AD: 0xFBD4,
    0x06AF: 0xFB93, 0x06B1: 0xFB9B, 0x06B3: 0xFB97, 0x06BA: 0xFB9F, 0x06BB: 0xFBA1, 0x06BE: 0xFBAB, 0x06C0: 0xFBA5,
    0x06C1: 0xFBA7, 0x06C5: 0xFBE1, 0x06C6: 0xFBDA, 0x06C7: 0xFBD8, 0x06C8: 0xFBDC, 0x06C9: 0xFBE3, 0x06CB: 0xFBDF,
    0x06CC: 0xFBFD, 0x06D0: 0xFBE5, 0x06D2: 0xFBAF, 0x06D3: 0xFBB1
};

document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const copyButton = document.getElementById('copyButton');

    // Загрузка сохраненного текста из localStorage
    const savedText = localStorage.getItem('rtlText');
    if (savedText) {
        inputText.value = savedText;
        updateOutput();
    }

    // Обновление вывода при вводе текста
    inputText.addEventListener('input', () => {
        updateOutput();
        // Сохранение текста в localStorage
        localStorage.setItem('rtlText', inputText.value);
    });

    // Функционал копирования
    copyButton.addEventListener('click', () => {
        const textToCopy = outputText.innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Эффект подмигивания
            outputText.classList.add('blink');
            setTimeout(() => {
                outputText.classList.remove('blink');
            }, 1000);
        });
    });

    function updateOutput() {
        const input = inputText.value;
        const reversed = reverseRTLText(input);
        outputText.innerHTML = reversed;
    }

    function reverseRTLText(text) {
        const lines = text.split('\n');
        let result = '';

        for (let line of lines) {
            const rtlChars = /[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
            const nonReversibleChars = /[0-9a-zA-Z:]/;
            const punctuation = /[!@#$%^&*()_+\-=\[\]{};\\|:.,<>/?"""']/;
            const brackets = /[\(\)\[\]\{\}]/;
            
            let lineResult = '';
            let currentWord = '';
            let nonReversibleSequence = '';
            
            for (let i = line.length - 1; i >= 0; i--) {
                const char = line[i];
                if (rtlChars.test(char)) {
                    let processedChar = processArabicForm(char, i > 0 ? line[i-1] : '', i < line.length - 1 ? line[i+1] : '');
                    lineResult += nonReversibleSequence + currentWord;
                    currentWord = processedChar;
                    nonReversibleSequence = '';
                } else if (nonReversibleChars.test(char)) {
                    nonReversibleSequence = char + nonReversibleSequence;
                } else if (brackets.test(char)) {
                    const reversedBracket = reverseBracket(char);
                    lineResult += nonReversibleSequence + currentWord + reversedBracket;
                    currentWord = '';
                    nonReversibleSequence = '';
                } else if (punctuation.test(char)) {
                    lineResult += nonReversibleSequence + currentWord + char;
                    currentWord = '';
                    nonReversibleSequence = '';
                } else if (char === ' ') {
                    lineResult += nonReversibleSequence + currentWord + ' ';
                    currentWord = '';
                    nonReversibleSequence = '';
                }
            }
            
            lineResult += nonReversibleSequence + currentWord;
            result += createHTMLSpans(lineResult) + '<br>';
        }
        
        return result.trim();
    }

    function processArabicForm(char, prevChar, nextChar) {
        const charCode = char.charCodeAt(0);
        const arabicLetters = /[\u0621-\u063A\u0641-\u064A\u066E-\u066F\u0671-\u06D3\u06D5\u06EE-\u06EF\u06FA-\u06FC\u06FF]/;
        const prevIsArabic = arabicLetters.test(prevChar);
        const nextIsArabic = arabicLetters.test(nextChar);

        let newCharCode;
        if (!prevIsArabic && !nextIsArabic) {
            newCharCode = isolatedForms[charCode] || charCode;
        } else if (!prevIsArabic && nextIsArabic) {
            newCharCode = initialForms[charCode] || isolatedForms[charCode] || charCode;
        } else if (prevIsArabic && !nextIsArabic) {
            newCharCode = finalForms[charCode] || isolatedForms[charCode] || charCode;
        } else {
            newCharCode = medialForms[charCode] || isolatedForms[charCode] || charCode;
        }

        return String.fromCharCode(newCharCode);
    }

    function createHTMLSpans(text) {
        const rtlChars = /[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
        const nonReversibleChars = /[0-9a-zA-Z:.]/;
        let result = '';
        
        for (let char of text) {
            if (rtlChars.test(char)) {
                result += `<span>${char}</span>`;
            } else if (nonReversibleChars.test(char)) {
                result += `<span class="highlight-dark">${char}</span>`;
            } else {
                result += `<span class="highlight">${char}</span>`;
            }
        }
        
        return result;
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
