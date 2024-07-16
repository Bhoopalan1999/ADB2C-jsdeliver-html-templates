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
        const form = document.getElementById("iframeForm");
        const actionUrl = form.action;

        // Send the redirect URL to the parent window
        event.source.postMessage({ type: "redirect", url: actionUrl }, event.origin);
    }
});