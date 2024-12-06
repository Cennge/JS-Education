function applyStyles(styles, text) {
    let styleString = styles.map(style => style.join(": ")).join("; ");
    
    document.write(`<p style="${styleString}">${text}</p>`);
}

let styles = [
    ["color", "blue"],
    ["font-size", "18px"],
    ["text-align", "center"],
    ["text-decoration", "underline"]
];

let text = "Hello, Stylish World!";

applyStyles(styles, text);