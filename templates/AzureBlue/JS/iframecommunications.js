window.addEventListener("message", function(event) {
    if (event.origin !== "https://localhost:8080") {
        return; // Ignore messages from unknown origins
    }

    const data = event.data;
    if (data.type === "update") {
        const input = document.getElementById(data.field);
        if (input) {
            input.value = data.value;
        }
    } else if (data.type === "submit") {
        document.getElementById("next").click();
    }
});