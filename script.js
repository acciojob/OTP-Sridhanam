//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".code");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            // Allow only numbers
            if (!/^\d$/.test(e.data)) {
                input.value = "";
                return;
            }

            // Move to next input if available
            if (input.value && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }

            // Auto-submit when all fields are filled
            if ([...inputs].every((inp) => inp.value !== "")) {
                console.log("OTP entered:", [...inputs].map(inp => inp.value).join(""));
                // You can trigger an API request here
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !input.value && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });
});