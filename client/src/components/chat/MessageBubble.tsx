import { Bot } from "lucide-react";

interface MessageBubbleProps {
  sender: string;
  content: string;
  timestamp: string;
}

export default function MessageBubble({ sender, content, timestamp }: MessageBubbleProps) {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} animate-slide-in`}>
      <div
        className={`${
          isUser
            ? "bg-blue-600 text-white rounded-2xl rounded-br-sm"
            : "bg-white rounded-2xl rounded-bl-sm border border-gray-200"
        } p-4 max-w-xs lg:max-w-md shadow-sm`}
      >
        {!isUser && (
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <Bot className="text-white" size={12} />
            </div>
            <span className="text-sm font-medium text-gray-700">SmartChat</span>
          </div>
        )}
        <p className={`text-sm leading-relaxed ${isUser ? "text-white" : "text-gray-800"}`}>
          {content}
        </p>
        <div className="flex justify-end mt-2">
          <span className={`text-xs ${isUser ? "text-blue-100" : "text-gray-500"}`}>
            {timestamp}
          </span>
        </div>
      </div>
    </div>
  );
}
