import { Bot } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="flex justify-start animate-slide-in">
      <div className="bg-white rounded-2xl rounded-bl-sm p-4 max-w-xs shadow-sm border border-gray-200">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
            <Bot className="text-white" size={12} />
          </div>
          <span className="text-sm font-medium text-gray-700">SmartChat</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-gray-600 text-sm">Thinking</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce-dots"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce-dots-delay-1"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce-dots-delay-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
