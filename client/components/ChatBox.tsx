import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Predefined responses about Chaitanya
  const responses = {
    greeting: [
      "Hi! I'm here to tell you about Chaitanya Shinde. What would you like to know?",
      "Hello! Feel free to ask me anything about Chaitanya's projects, skills, or experience!",
    ],
    projects: [
      "Chaitanya has worked on 10+ projects including:\n• Real Estate MERN application with JWT authentication\n• AI-powered ChatBot with Gemini integration\n• IoT-based irrigation system\n• MERN stack e-commerce platform\n• Live news web application\n\nWould you like details about any specific project?",
    ],
    skills: [
      "Chaitanya's technical skills include:\n• Frontend: React.js, HTML5, CSS3, JavaScript, TypeScript\n• Backend: Node.js, Express.js, MongoDB\n• Languages: Python, C++, Java\n• Tools: Git, VS Code, Postman\n• Other: AI/ML integration, IoT development\n\nHe's particularly strong in MERN stack development!",
    ],
    education: [
      "Chaitanya is currently pursuing Computer Engineering at PICT, Pune with an impressive 9.56 CGPA. He also achieved 99.27 %ile in MHT CET and 94.51 %ile in JEE Mains!",
    ],
    contact: [
      "You can reach Chaitanya at:\n• Email: 9chaitanyashinde@gmail.com\n• GitHub: cts9505\n• LinkedIn: chaitanya-shinde-computer\n\nHe's actively looking for internship opportunities!",
    ],
    default: [
      "I can help you learn about Chaitanya's projects, skills, education, or contact information. What interests you most?",
      "Feel free to ask about Chaitanya's technical skills, projects, or background!",
    ],
  };

  const addMessage = (text: string, isBot: boolean = false) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const getResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (
      input.includes("hello") ||
      input.includes("hi") ||
      input.includes("hey")
    ) {
      return responses.greeting[
        Math.floor(Math.random() * responses.greeting.length)
      ];
    }

    if (
      input.includes("project") ||
      input.includes("work") ||
      input.includes("portfolio")
    ) {
      return responses.projects[0];
    }

    if (
      input.includes("skill") ||
      input.includes("technology") ||
      input.includes("tech") ||
      input.includes("programming")
    ) {
      return responses.skills[0];
    }

    if (
      input.includes("education") ||
      input.includes("college") ||
      input.includes("cgpa") ||
      input.includes("academic")
    ) {
      return responses.education[0];
    }

    if (
      input.includes("contact") ||
      input.includes("email") ||
      input.includes("reach") ||
      input.includes("linkedin")
    ) {
      return responses.contact[0];
    }

    return responses.default[
      Math.floor(Math.random() * responses.default.length)
    ];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // Add user message
    addMessage(inputText);
    const userText = inputText;
    setInputText("");

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(
      () => {
        setIsTyping(false);
        const response = getResponse(userText);
        addMessage(response, true);
      },
      1000 + Math.random() * 1000,
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addMessage(
          "Hi! I'm Chaitanya's AI assistant. Ask me anything about his projects, skills, or experience! 🚀",
          true,
        );
      }, 500);
    }
  }, [isOpen, messages.length]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 animate-pulse-glow"
          title="Chat with me about Chaitanya!"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-2xl w-80 h-96 flex flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary/10 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Bot size={16} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Chaitanya's Assistant</h3>
                <p className="text-xs text-muted-foreground">
                  Ask me anything!
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? "bg-muted text-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && (
                      <Bot size={16} className="mt-0.5 flex-shrink-0" />
                    )}
                    {!message.isBot && (
                      <User size={16} className="mt-0.5 flex-shrink-0" />
                    )}
                    <p className="text-sm whitespace-pre-line">
                      {message.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-lg flex items-center space-x-2">
                  <Bot size={16} />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about projects, skills..."
                className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-primary text-primary-foreground px-3 py-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
