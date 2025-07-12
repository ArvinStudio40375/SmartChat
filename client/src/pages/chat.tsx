import { useState, useEffect, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatContainer from "@/components/chat/ChatContainer";
import ChatInput from "@/components/chat/ChatInput";
import type { Message } from "@shared/schema";

export default function Chat() {
  const [sessionId] = useState(() => `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { data: messages = [], isLoading } = useQuery<Message[]>({
    queryKey: ["/api/messages", sessionId],
    enabled: !!sessionId,
  });

  const sendMessageMutation = useMutation({
    mutationFn: async (content: string) => {
      const response = await apiRequest("POST", "/api/messages", {
        content,
        sender: "user",
        sessionId,
      });
      return response.json();
    },
    onMutate: () => {
      setIsTyping(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/messages", sessionId] });
      setIsTyping(false);
    },
    onError: (error) => {
      setIsTyping(false);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    },
  });

  const clearChatMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("DELETE", `/api/messages/${sessionId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/messages", sessionId] });
      toast({
        title: "Chat cleared",
        description: "Conversation history has been cleared.",
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to clear chat. Please try again.",
      });
    },
  });

  const handleSendMessage = async () => {
    if (!inputValue.trim() || sendMessageMutation.isPending) return;
    
    const message = inputValue.trim();
    setInputValue("");
    
    try {
      await sendMessageMutation.mutateAsync(message);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleClearChat = () => {
    if (window.confirm("Are you sure you want to clear the conversation history?")) {
      clearChatMutation.mutate();
    }
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

  return (
    <div className="min-h-screen flex flex-col max-w-4xl mx-auto bg-white shadow-xl">
      <ChatHeader />
      <ChatContainer
        messages={messages}
        isLoading={isLoading}
        isTyping={isTyping}
        messagesEndRef={messagesEndRef}
      />
      <ChatInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSendMessage={handleSendMessage}
        onClearChat={handleClearChat}
        onKeyPress={handleKeyPress}
        isLoading={sendMessageMutation.isPending}
      />
    </div>
  );
}
