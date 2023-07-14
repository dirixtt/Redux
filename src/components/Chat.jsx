import robotImage from "../assets/robotImage.jfif";
import humanImage from "../assets/humanImage.jfif";
import { useState, useRef } from "react";
import { MdSend } from "react-icons/md";
import "../App.css";
import Navbar from "./Navbar";
function Chat() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = async () => {
    if (!newMessage.trim()) {
      return;
    }

    const messageObject = {
      message: newMessage,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, messageObject];

    setMessages(newMessages);
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);

    setNewMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = [];
  
    if (chatMessages) {
      apiMessages = chatMessages.map((messageObject) => {
        let role = "";
        if (messageObject.sender === "ChatGPT") {
          role = "system";
        } else {
          role = "user";
        }
        return { role: role, content: messageObject.message };
      });
    }
  
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        ...apiMessages,
        {
          role: "system",
          content:
            "Explain things like you're talking to a software professional with 2 years of experience.",
        },
      ],
    };
  
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer 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",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });
    const data = await response.json();
    console.log(data);
  }
  
  const inputRef = useRef();
  return (
    <>
    <Navbar/>
    <div className="flex pt-2 h-[84vh] justify-center">
      <div className="w-[25%] p-3 bg-[#F8EDE3]">
        Bu yerda sizning reklamangiz bo’lishi mumkin!
      </div>
      <div className="w-[50%] mx-2  h-full">
        <div className="flex-col h-full  px-2 justify-end flex  ">
          <div className="overflow-x-hidden pb-2 px-10 w-full justify-center items-center">
            {messages.map((message, i) => {
              return (
                <div
                  className={
                    message.sender === "ChatGPT"
                      ? "flex flex-col  items-start " // updated class
                      : "flex flex-col  items-end"
                  }
                >
                  <div
                    key={i}
                    className={
                      message.sender === "ChatGPT"
                        ? "outgoing-message" // updated class
                        : "incoming-message" // updated class
                    }
                  >
                    <div>
                      <img
                        className={
                          message.sender === "ChatGPT"
                            ? "outgoing-img" // updated class
                            : "incoming-img" // updated class
                        }
                        src={
                          message.sender === "ChatGPT" ? robotImage : humanImage
                        }
                        alt={message.sender}
                      />
                      {message.message}
                    </div>
                    <div>{message.sentTime}</div>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="typing-container">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            )}
          </div>
          <div className="w-full flex justify-between h-[45px] ">
            <form
              className="w-full flex justify-between h-[45px]"
              onSubmit={handleSend}
            >
              <input
                ref={inputRef}
                className="text-black h-full outline-none bg-[#F6EFEF] w-[89%] p-1"
                placeholder="Type message here"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />

              <button
                className="outline-none flex items-center justify-center bg-[#F8EDE3] rounded-none w-[10%]"
                type={"submit"}
                onClick={handleSend}
                disabled={isTyping}
              >
                <MdSend className="text-[22px]"></MdSend>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-[25%] p-3 bg-[#F8EDE3]">

        Google ads</div>
    </div>
    </>

  );
}

export default Chat;
