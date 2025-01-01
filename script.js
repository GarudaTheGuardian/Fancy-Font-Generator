function generateFancyFonts() {
  const inputText = document.getElementById("textInput").value;
  const outputDiv = document.getElementById("output");

  if (!inputText) {
    outputDiv.innerHTML = "<p>Provide text for font styling</p>";
    return;
  }

  const fancyFonts = {
    "Lobster": `font-family: 'Lobster', cursive;`,
    "Pacifico": `font-family: 'Pacifico', cursive;`,
    "Alex Brush": `font-family: 'Alex Brush', cursive;`,
    "Rock Salt": `font-family: 'Rock Salt', cursive;`,
    "Croissant": `font-family: 'Croissant One', cursive;`,
    "Amita": `font-family: 'Amita', cursive;`,
    "Cookie": `font-family: 'Cookie', cursive;`,
    "Allura": `font-family: 'Allura', cursive;`,
    "Serendipity": `font-family: 'Serendipity', cursive;`,
    "Grape Nuts": `font-family: 'Grape Nuts', cursive;`,
    "Bunya": `font-family: 'Bunya', sans-serif;`,
    "Cutive Mono": `font-family: 'Cutive Mono', monospace;`,
    "Triumvirate Cond": `font-family: 'Triumvirate Condensed', sans-serif;`,
    "Neue Kabel": `font-family: 'Neue Kabel', sans-serif;`,
    "Text Me One": `font-family: 'Text Me One', sans-serif;`,
    "Americana Std": `font-family: 'Americana Std', serif;`,
    "Caribbean Tool": `font-family: 'Caribbean Tool', serif;`,
    "Dove Love": `font-family: 'Dove Love', cursive;`,
    "Monbijoux": `font-family: 'Monbijoux', cursive;`,
    "Roke 1984": `font-family: 'Roke 1984', monospace;`,
    "Sinaloa": `font-family: 'Sinaloa', cursive;`,
    "New Garden Full": `font-family: 'New Garden Full', serif;`,
    "Network Vampires": `font-family: 'Network Vampires', monospace;`,
    "Shatterday ICG Shred": `font-family: 'Shatterday ICG Shred', cursive;`,
    "Xtreem Medium": `font-family: 'Xtreem Medium', sans-serif;`,
    "Body Hunter Embeddable": `font-family: 'Body Hunter Embeddable', serif;`,
    "Affair": `font-family: 'Affair', cursive;`,
    "Mishka": `font-family: 'Mishka', cursive;`,
    "Chopin Script": `font-family: 'Chopin Script', cursive;`,
    "Mardian Pro": `font-family: 'Mardian Pro', cursive;`
  };

  let outputHTML = "";
  for (const [fontName, fontStyle] of Object.entries(fancyFonts)) {
    outputHTML += `<p style="${fontStyle}">${fontName}: ${inputText}</p>`;
  }

  outputDiv.innerHTML = outputHTML;
}
