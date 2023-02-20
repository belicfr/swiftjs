let html;

const code = document.querySelector("textarea#swiftjs_textarea");
const render = document.querySelector("#render");

code.addEventListener("input", () => {
    run();
});

// run code.
run();

function neutralizeSource(source) {
    return source
        .toString()
        .replace(/\\/g, '\\\\')
        .replace(/\u0008/g, '\\b')
        .replace(/\t/g, '\\t')
        .replace(/\f/g, '\\f')
        .replace(/\r/g, '\\r')
        .replace(/'/g, '&quot;')
        .replace(/"/g, '&quot;');
}

function run() {
    try {
        html = "";

        (new Function(code.value))();

        render.innerHTML = html;
    } catch (e) {
        // empty block
    }
}