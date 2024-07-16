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

// Notify the parent window when the iframe URL changes
window.addEventListener('load', function() {
    var iframeLocation = window.location.href;
    window.parent.postMessage(iframeLocation, 'https://localhost:8080'); // Use the parent origin here
});
