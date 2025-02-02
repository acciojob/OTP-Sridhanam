//your JS code here. If required.
function moveNext(input) {
    let next = input.nextElementSibling;
    if (input.value && next) {
        next.focus();
    }
}

function handleBackspace(input) {
    if (event.key === "Backspace" && !input.value) {
        let prev = input.previousElementSibling;
        if (prev) {
            prev.focus();
            prev.value = "";
        }
    }
}
