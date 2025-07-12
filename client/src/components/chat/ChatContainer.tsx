import { Skeleton } from "@/components/ui/skeleton";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import type { Message } from "@shared/schema";

interface ChatContainerProps {
  messages: Message[];
  isLoading: boolean;
  isTyping: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export default function ChatContainer({
  messages,
  isLoading,
  isTyping,
  messagesEndRef,
}: ChatContainerProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50" style={{ height: "calc(100vh - 140px)" }}>
      {/* Welcome Message */}
      <MessageBubble
        sender="bot"
        content="Hello! I'm SmartChat, your AI assistant. I'm here to help you with any questions or tasks you have. How can I assist you today?"
        timestamp={new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      />

      {/* Loading State */}
      {isLoading && (
        <div className="space-y-4">
          <Skeleton className="h-20 w-3/4" />
          <div className="flex justify-end">
            <Skeleton className="h-16 w-1/2" />
          </div>
        </div>
      )}

      {/* Messages */}
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          sender={message.sender}
          content={message.content}
          timestamp={new Date(message.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        />
      ))}

      {/* Typing Indicator */}
      {isTyping && <TypingIndicator />}

      <div ref={messagesEndRef} />
    </div>
  );
}
