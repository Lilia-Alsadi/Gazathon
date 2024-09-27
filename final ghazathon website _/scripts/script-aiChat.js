document.addEventListener("DOMContentLoaded", () => {
const chatInput = document.getElementById("Text");
const sendChatBtn = document.getElementById("enter-button");
const chatBox = document.querySelector(".chatbox");
const chatboxtoggler = document.querySelector(".chatbox-toggler");
const chatBot = document.querySelector(".chatBot");
let userMessage;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : ` <i class="fa-solid fa-user-nurse"></i><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); 
    
    if (!userMessage) return;

    chatBox.appendChild(createChatLi(userMessage, "outgoing"));
    chatInput.value = ""; 

    setTimeout(()=>{
        chatBox.appendChild(createChatLi("Thinking...","incoming"));
    },600)

}
sendChatBtn.addEventListener("click", handleChat);
chatboxtoggler.addEventListener("click", () => {
    chatBot.classList.toggle("visible"); // Toggle a class for visibility
});
});







