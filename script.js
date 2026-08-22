const SERVER_IP = "play.vergemc.com";

async function copyServerIP(button) {
  const originalText = button.textContent;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(SERVER_IP);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = SERVER_IP;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }

    button.textContent = "✓ IP COPIED!";
  } catch (error) {
    button.textContent = SERVER_IP;
  }

  window.setTimeout(() => {
    button.textContent = originalText;
  }, 2200);
}
