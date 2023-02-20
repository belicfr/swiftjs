function Button(text, callback) {
    callback = neutralizeSource(callback);

    html += `<button onclick="(${
        callback
    })()">${text}</button>`;
}