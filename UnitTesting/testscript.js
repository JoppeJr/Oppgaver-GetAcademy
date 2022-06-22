function StorBokstav(text) {
    //if (!text) return text
    return text.charAt(0).toUpperCase() + text.slice(0);
}