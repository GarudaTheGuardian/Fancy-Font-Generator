function generateFancyFonts() {
    const inputText = document.getElementById("textInput").value;
    const outputDiv = document.getElementById("output");

    if (!inputText) {
        outputDiv.innerHTML = "<p>Please enter some text to generate fancy fonts.</p>";
        return;
    }

    const fancyFonts = {
        bold: text => text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 0x1D400 - 65)).join(''),
        italic: text => text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 0x1D434 - 65)).join(''),
        boldItalic: text => text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 0x1D468 - 65)).join(''),
        gothic: text => text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 0x1D504 - 65)).join(''),
    };

    const fontStyles = Object.entries(fancyFonts).map(([styleName, transform]) => {
        return `<p><strong>${styleName}:</strong> ${transform(inputText)}</p>`;
    }).join('');

    outputDiv.innerHTML = fontStyles;
}
