function generateFancyFonts() {
    const inputText = document.getElementById("textInput").value;
    const outputDiv = document.getElementById("output");

    if (!inputText) {
        outputDiv.innerHTML = "<p>Provide text for font styling</p>";
        return;
    }

    const fancyFonts = {
        "Double Struck Font": text => text.split('').map(char => {
            if (/[A-Za-z]/.test(char)) {
                return String.fromCodePoint(char.charCodeAt(0) + (char >= 'a' ? 120120 - 97 : 120088 - 65));
            }
            return char;
        }).join(''),

        "Bold Fraktur Font": text => text.split('').map(char => {
            if (/[A-Za-z]/.test(char)) {
                return String.fromCodePoint(char.charCodeAt(0) + (char >= 'a' ? 120172 - 97 : 120144 - 65));
            }
            return char;
        }).join(''),

        "Bold Script Font": text => text.split('').map(char => {
            if (/[A-Za-z]/.test(char)) {
                return String.fromCodePoint(char.charCodeAt(0) + (char >= 'a' ? 120094 - 97 : 120066 - 65));
            }
            return char;
        }).join(''),

        "Zalgo Font": text => text.split('').map(char => {
            const zalgoChars = ['̍','̎','̄','̅','̿','̑','̆','̐','͒','͗','͑','̇','̈','̊','͂','̓','̈','͊','͋','͌','̃','̂','̌','͐','̀','́','̋','̏','̒','̓','̔','̽','̉','ͣ','ͤ','ͥ','ͦ','ͧ','ͨ','ͩ','ͪ','ͫ','ͬ','ͭ','ͮ','ͯ','̾','͛','͆','̚'];
            return char + zalgoChars.sort(() => Math.random() - 0.5).slice(0, Math.random() * 5 + 1).join('');
        }).join(''),

        "Handwriting Font": text => text.split('').map(char => {
            const handwritingMap = {
                'A': '𝒜', 'B': '𝐵', 'C': '𝒞', 'D': '𝒟', 'E': '𝐸', 'F': '𝐹', 'G': '𝒢', 'H': '𝐻', 'I': '𝐼', 'J': '𝒥',
                'K': '𝒦', 'L': '𝐿', 'M': '𝑀', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': '𝑅', 'S': '𝒮', 'T': '𝒯',
                'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
                'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
                'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
                'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏'
            };
            return handwritingMap[char] || char;
        }).join('')
    };

    const fontStyles = Object.entries(fancyFonts).map(([styleName, transform]) => {
        return `<p><strong>${styleName}:</strong> ${transform(inputText)}</p>`;
    }).join('');

    outputDiv.innerHTML = fontStyles;
}
