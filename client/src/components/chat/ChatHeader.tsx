import { Bot, Circle } from "lucide-react";

export default function ChatHeader() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="text-white" size={20} />
          </div>
          <div>
            <h1 className="text-xl font-semibold">SmartChat By.Arvin</h1>
            <p className="text-blue-100 text-sm">AI Chat Assistant</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Circle className="w-3 h-3 text-green-400 fill-green-400 animate-pulse" />
          <span className="text-sm text-blue-100">Online</span>
        </div>
      </div>
    </header>
  );
}
