import React, { useState, useEffect, useRef } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm SoftBot. How can I help you with software licensing today?", sender: 'bot' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Sample questions users might ask
  const sampleQuestions = [
    "What software do you offer?",
    "How does bulk pricing work?",
    "How do I sell my license?",
    "Do you offer educational discounts?"
  ];

  // Scroll to bottom of messages when new ones are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Function to handle AI response
  const getAIResponse = async (userMessage) => {
    setIsTyping(true);
    
    try {
      // Call OpenAI API
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY || 'your-api-key-here'}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are SoftBot, a helpful assistant for software licensing questions. 
              You work for a company that sells software licenses for various applications.
              Keep responses concise (under 100 words) and friendly. 
              Focus on helping customers with software licensing, purchases, and technical support.
              If you don't know something, suggest contacting the sales team.`
            },
            ...messages.map(msg => ({
              role: msg.sender === 'user' ? 'user' : 'assistant',
              content: msg.text
            })),
            {
              role: 'user',
              content: userMessage
            }
          ],
          max_tokens: 150,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const aiMessage = data.choices[0].message.content.trim();
      
      // Add AI response to messages
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: aiMessage, sender: 'bot' }]);
        setIsTyping(false);
      }, 500);
      
    } catch (error) {
      console.error('Error fetching AI response:', error);
      
      // Fallback responses if API call fails
      const fallbackResponses = {
        "what software do you offer": "We offer licenses for a wide range of software including productivity suites, design tools, development environments, security solutions, and enterprise applications from leading vendors like Microsoft, Adobe, Autodesk, and more.",
        "how does bulk pricing work": "Our bulk pricing offers significant discounts based on volume. For 10+ licenses, you'll save 10%. For 50+ licenses, you'll save 15%. For 100+ licenses, you'll save 20%. Contact us for custom enterprise pricing on larger orders.",
        "how do i sell my license": "To sell your license, you need to initiate a transfer request from your account dashboard. Go to 'My Licenses', select the one you want to sell, and click 'Transfer License'. We'll guide you through the verification process to ensure a secure transfer.",
        "do you offer educational discounts": "Yes! We offer substantial educational discounts for students, teachers, and academic institutions. Discounts range from 30-70% off retail prices depending on the software. Valid academic credentials are required for verification."
      };
      
      const messageLower = userMessage.toLowerCase();
      let fallbackResponse = "I'm having trouble connecting to my knowledge base right now. Could you try again later or contact our support team at support@softsell.com?";
      
      // Check if any predefined question contains the user's message
      for (const [question, answer] of Object.entries(fallbackResponses)) {
        if (messageLower.includes(question)) {
          fallbackResponse = answer;
          break;
        }
      }
      
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: fallbackResponse, sender: 'bot' }]);
        setIsTyping(false);
      }, 500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // Add user message
    const updatedMessages = [...messages, { text: newMessage, sender: 'user' }];
    setMessages(updatedMessages);
    
    // Get AI response
    getAIResponse(newMessage);
    
    // Clear input
    setNewMessage('');
  };

  const askSampleQuestion = (question) => {
    setMessages(prevMessages => [...prevMessages, { text: question, sender: 'user' }]);
    getAIResponse(question);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button */}
      <button 
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
      
      {/* Chat widget */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col" style={{ height: '500px' }}>
          {/* Header */}
          <div className="bg-blue-600 text-white p-4">
            <div className="flex items-center">
              <div className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold">SoftBot</h3>
                <p className="text-sm opacity-75">AI-powered software licensing assistant</p>
              </div>
            </div>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                )}
                <div 
                  className={`rounded-lg p-3 max-w-3/4 ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
                {message.sender === 'user' && (
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ml-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div className="flex items-center">
                  <div className="dot-typing"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Sample questions */}
          <div className="p-3 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-2">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {sampleQuestions.map((question, index) => (
                <button 
                  key={index}
                  className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-2 rounded-full transition duration-300"
                  onClick={() => askSampleQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
          
          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Type your message"
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-lg transition duration-300 flex items-center justify-center"
              disabled={!newMessage.trim()}
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
          
          {/* CSS for typing animation */}
          <style jsx>{`
            .dot-typing {
              position: relative;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background-color: #3B82F6;
              color: #3B82F6;
              animation: dot-typing 1.5s infinite linear;
            }
            
            .dot-typing::before,
            .dot-typing::after {
              content: '';
              position: absolute;
              top: 0;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background-color: #3B82F6;
              color: #3B82F6;
            }
            
            .dot-typing::before {
              left: -10px;
              animation: dot-typing 1.5s infinite linear;
              animation-delay: 0s;
            }
            
            .dot-typing::after {
              left: 10px;
              animation: dot-typing 1.5s infinite linear;
              animation-delay: 0.5s;
            }
            
            @keyframes dot-typing {
              0%, 20%, 100% { opacity: 0; transform: scale(0.7); }
              50% { opacity: 1; transform: scale(1); }
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;