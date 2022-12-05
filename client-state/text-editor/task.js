const editor = document.getElementById("editor");
const button = document.getElementById("clearButton");

editor.onchange = function () {
    localStorage.editorContent = this.value;
}

window.onload = function () {
    if (localStorage.editorContent) {
        editor.value = localStorage.editorContent;
    }
}

button.onclick = function () {
    editor.value = "";
    localStorage.removeItem("editorContent");
}