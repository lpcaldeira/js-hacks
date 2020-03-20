function removeEscape(string) {
    return String(string).replace(/[&<>"'`=\/?*#.,:;()-]/g, '');
}