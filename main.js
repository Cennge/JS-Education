let styles = [
    { name: "color", value: "blue" },
    { name: "font-size", value: "24px" },
    { name: "text-align", value: "center" },
    { name: "text-decoration", value: "underline" },
    { name: "background-color", value: "lightgrey" }
];

function applyStyles(styles, text) {

    let styleString = styles.map(style => `${style.name}: ${style.value}`).join("; ");

    document.write(`<h2 style="${styleString}">${text}</h2>`);
}

applyStyles(styles, "Hello, world!");