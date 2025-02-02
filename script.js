document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".code");
    const verifyBtn = document.getElementById("verify-btn");
    const resendBtn = document.getElementById("resend-btn");
    const message = document.getElementById("message");

    // Function to get OTP value
    function getOTP() {
        return [...inputs].map(inp => inp.value).join("");
    }

    // Function to verify OTP
    async function verifyOTP() {
        const otp = getOTP();
        if (otp.length < 6) {
            message.textContent = "Please enter a 6-digit code.";
            return;
        }

        try {
            let response = await fetch("https://your-backend-api.com/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ otp })
            });
            let data = await response.json();

            if (data.success) {
                message.textContent = "OTP Verified!";
                message.style.color = "green";
            } else {
                message.textContent = "Invalid OTP. Try again.";
                message.style.color = "red";
            }
        } catch (error) {
            message.textContent = "Error verifying OTP. Please try again.";
            message.style.color = "red";
        }
    }

    // Function to request new OTP
    async function resendOTP() {
        resendBtn.disabled = true;
        message.textContent = "Requesting new OTP...";

        try {
            let response = await fetch("https://your-backend-api.com/resend-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });
            let data = await response.json();

            if (data.success) {
                message.textContent = "New OTP sent!";
                message.style.color = "green";
            } else {
                message.textContent = "Failed to send OTP. Try again.";
                message.style.color = "red";
            }
        } catch (error) {
            message.textContent = "Error sending OTP.";
            message.style.color = "red";
        }

        setTimeout(() => {
            resendBtn.disabled = false;
        }, 30000); // Enable resend button after 30 seconds
    }

    // Event listeners
    verifyBtn.addEventListener("click", verifyOTP);
    resendBtn.addEventListener("click", resendOTP);
});