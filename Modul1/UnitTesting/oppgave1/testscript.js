function StorBokstav(text) {
    //if (!text) return text
    let trimmedText = text.trim();
    let fixtLastText = trimmedText.slice(1);

    console.log(fixtLastText);


    return trimmedText.charAt(0).toUpperCase() + fixtLastText.toLowerCase();

}
//.replaceAll(' ','')
//.replaceAll(/\\\\s+/g, '')
//.replace(/\\\\s+/g, '')