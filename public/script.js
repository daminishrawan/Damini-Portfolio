// =========================================================================
// Global Configuration
// Easily update your external CV Google Drive link here:
// =========================================================================
const CV_DRIVE_LINK = "https://drive.google.com/file/d/19pj_G7YLykD1hVGBqZjUtI8bNQZwOmM8/view?usp=sharing";

document.addEventListener("DOMContentLoaded", () => {
  // =========================================================================
  // Dynamic CV Download Logic
  // Binds all CV download buttons/anchors to CV_DRIVE_LINK and opens in new tab
  // =========================================================================
  const cvButtons = document.querySelectorAll(".cv-download-btn, #download-cv-btn, [data-cv-download]");
  cvButtons.forEach((btn) => {
    // Keep href in sync for browser accessibility (right-click, copy link, middle-click)
    if (btn.tagName === "A") {
      btn.href = CV_DRIVE_LINK;
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
    }

    // Clean click listener to open the Drive link in a new tab
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(CV_DRIVE_LINK, "_blank", "noopener,noreferrer");
    });
  });

  // =========================================================================
  // Floating Portfolio AI Chatbot Widget Logic
  // =========================================================================
  const chatToggleBtn = document.getElementById("chatToggleBtn");
  const chatWindow = document.getElementById("chatWindow");
  const closeChatBtn = document.getElementById("closeChat");
  const sendBtn = document.getElementById("sendBtn");
  const chatInput = document.getElementById("chatInput");
  const chatMessages = document.getElementById("chatMessages");

  // Toggle chat window open/close
  if (chatToggleBtn && chatWindow) {
    chatToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isCurrentlyHidden = chatWindow.classList.contains("hidden");
      if (isCurrentlyHidden) {
        chatWindow.classList.remove("hidden");
        chatToggleBtn.classList.add("dc-open");
        chatToggleBtn.setAttribute("aria-expanded", "true");
        chatWindow.setAttribute("aria-hidden", "false");
        if (chatInput) {
          setTimeout(() => chatInput.focus(), 150);
        }
      } else {
        chatWindow.classList.add("hidden");
        chatToggleBtn.classList.remove("dc-open");
        chatToggleBtn.setAttribute("aria-expanded", "false");
        chatWindow.setAttribute("aria-hidden", "true");
      }
    });
  }

  // Header close button (✕)
  if (closeChatBtn && chatWindow) {
    closeChatBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      chatWindow.classList.add("hidden");
      if (chatToggleBtn) {
        chatToggleBtn.classList.remove("dc-open");
        chatToggleBtn.setAttribute("aria-expanded", "false");
      }
      chatWindow.setAttribute("aria-hidden", "true");
    });
  }

  // Close chat on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && chatWindow && !chatWindow.classList.contains("hidden")) {
      chatWindow.classList.add("hidden");
      if (chatToggleBtn) {
        chatToggleBtn.classList.remove("dc-open");
        chatToggleBtn.setAttribute("aria-expanded", "false");
      }
      chatWindow.setAttribute("aria-hidden", "true");
    }
  });

  // Close when clicking outside chat window
  document.addEventListener("click", (e) => {
    if (!chatWindow || chatWindow.classList.contains("hidden")) return;
    const widget = document.getElementById("damini-chat-widget");
    if (widget && !widget.contains(e.target)) {
      chatWindow.classList.add("hidden");
      if (chatToggleBtn) {
        chatToggleBtn.classList.remove("dc-open");
        chatToggleBtn.setAttribute("aria-expanded", "false");
      }
      chatWindow.setAttribute("aria-hidden", "true");
    }
  });

  // Helper to escape HTML and format basic Markdown for bot replies
  function formatBotText(str) {
    if (!str) return "";
    let safe = str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    // Bold
    safe = safe.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Links [text](url)
    safe = safe.replace(
      /\[(.*?)\]\((https?:\/\/.*?)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );
    // Simple bullet points
    safe = safe.replace(/^\s*[-•]\s*(.*)$/gm, "• $1");
    // Line breaks
    safe = safe.replace(/\n/g, "<br/>");
    return safe;
  }

  // Function to add a message to the chat UI
  function addMessage(text, sender) {
    const isUser = sender === "user";
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message");
    msgDiv.classList.add(isUser ? "user-message" : "bot-message");

    if (isUser) {
      msgDiv.textContent = text;
    } else {
      msgDiv.innerHTML = formatBotText(text);
    }

    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
  }

  // Handle sending the message to the backend
  async function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    // 1. Show user message
    addMessage(text, "user");
    chatInput.value = "";

    // 2. Show a temporary loading message with animated typing dots
    const loadingId = "loading-" + Date.now();
    const loadingDiv = document.createElement("div");
    loadingDiv.classList.add("message", "bot-message");
    loadingDiv.id = loadingId;
    loadingDiv.innerHTML = '<span class="dc-typing-dots"><span></span><span></span><span></span></span>';
    chatMessages.appendChild(loadingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
      // 3. Call your live FastAPI backend on Render
      const response = await fetch("https://rag-project-prbr.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      });

      const data = await response.json();

      // 4. Remove loading message and show real answer
      const loadingEl = document.getElementById(loadingId);
      if (loadingEl) loadingEl.remove();
      addMessage(data.reply || data.response || "No reply received.", "bot");

    } catch (error) {
      const loadingEl = document.getElementById(loadingId);
      if (loadingEl) loadingEl.remove();
      addMessage("Sorry, the backend is currently offline. Please try again later!", "bot");
    }
  }

  // Listen for Send button click or Enter key
  if (sendBtn) {
    sendBtn.addEventListener("click", (e) => {
      if (e) e.preventDefault();
      sendMessage();
    });
  }
  if (chatInput) {
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
      }
    });
  }

  // Quick suggestion chips support
  const chips = document.querySelectorAll(".dc-chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const q = chip.getAttribute("data-q") || chip.innerText;
      if (q && chatInput) {
        chatInput.value = q;
        sendMessage();
      }
    });
  });
});
