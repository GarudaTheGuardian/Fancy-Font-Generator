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
    }).join(''),

    // Add 30 more fancy fonts here
    "Monospace": text => `\`\`\`${text}\`\`\``,
    "Small Caps": text => text.toUpperCase().replace(/[A-Z]/g, char => char.toLowerCase() + String.fromCharCode(char.charCodeAt(0) - 32)),
    "Italic": text => `<i>${text}</i>`,
    "Bold": text => `<b>${text}</b>`,
    "Underline": text => `<u>${text}</u>`,
    "Strikethrough": text => `<strike>${text}</strike>`,
    "Superscript": text => `<sup>${text}</sup>`,
    "Subscript": text => `<sub>${text}</sub>`,
    "Inverse": text => `<span style="color:white;background-color:black;">${text}</span>`,
    "Shadow": text => `<span style="text-shadow: 2px 2px 4px #888;">${text}</span>`,
    "Outline": text => `<span style="text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;">${text}</span>`,
    "Emboss": text => `<span style="text-shadow: 1px 1px 0 #fff, 2px 2px 0 #eee, 3px 3px 0 #ddd;">${text}</span>`,
    "Engrave": text => `<span style="text-shadow: 1px 1px 0 #000, 2px 2px 0 #111, 3px 3px 0 #222;">${text}</span>`,
    "Pixelate": text => text.split('').map(char => `<span style="font-size:8px;display:inline-block;">${char}</span>`).join(''),
    "Glitch": text => text.split('').map(char => {
      const offsets = [-1, 0, 1];
      return offsets.map(offset => 
        `<span style="position:relative;left:<span class="math-inline">\{offset\}px;"\></span>{char}</span>`
      ).join('');
    }).join(''),
    "Wave": text => text.split('').map(char => {
      const wave = Math.sin(char.charCodeAt(0) / 10) * 5;
      return `<span style="position:relative;top:<span class="math-inline">\{wave\}px;"\></span>{char}</span>`;
    }).join(''),
    "Rotate": text => text.split('').map(char => {
      const rotation = Math.random() * 360;
      return `<span style="transform:rotate(<span class="math-inline">\{rotation\}deg\);display\:inline\-block;"\></span>{char}</span>`;
    }).join(''),
    "Rainbow": text => text.split('').map((char, index) => {
      const hue = index * 30;
      return `<span style="color:hsl(<span class="math-inline">\{hue\}, 100%, 50%\);"\></span>{char}</span>`;
    }).join(''),
    "Grayscale": text => text.split('').map(char => {
      const gray = Math.floor(Math.random() * 256);
      return `<span style="color:rgb(${gray}, ${gray}, <span class="math-inline">\{gray\}\);"\></span>{char}</span>`;
    }).join(''),
    "Invert": text => text.split('').map(char => {
      const rgb = window.getComputedStyle(document.body).color.match(/\d+/g);
      const r = 255 - rgb[0];
      const g = 255 - rgb[1];
      const b = 255 - rgb[2];
      return `<span style="color:rgb(${r}, ${g}, <span class="math-inline">\{b\}\);"\></span>{char}</span>`;
    }).join(''),
    "Sepia": text => text.split('').map(char => {
      return `<span style="filter: sepia(1);">${char}</span>`;
    }).join(''),
    "Blur": text => text.split('').map(char => {
      return `<span style="filter: blur(2px);">${char}</span>`;
    }).join(''),
    "Emboss": text => text.split('').map(char => {
      return `<span style="filter: emboss(1);">${char}</span>`;
    }).join(''),
    "Glow": text => text.split('').map(char => {
      return `<span style="filter: glow(0.5);">${char}</span>`;
    }).join(''),
    "Drop Shadow": text => text.split('').map(char => {
      return `<span style="filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));">${char}</span>`;
