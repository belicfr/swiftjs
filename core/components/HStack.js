function HStack(callback) {
    html += `<div class="h-stack">`;
    callback();
    html += `</div>`;
}

/*
HStack (() => {
  Label("Hello");
  Label("Hello");
});
 */