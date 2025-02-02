function moveNext(input) {
    if (isNaN(input.value)) {
        input.value = "";
        return;
    }
    let next = input.nextElementSibling;
    if (input.value && next) {
        next.focus();
    }
}