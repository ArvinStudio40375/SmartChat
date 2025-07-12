import { useState } from "react";
import { Send, Settings, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";

interface ChatInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  onSendMessage: () => void;
  onClearChat: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  isLoading: boolean;
}

export default function ChatInput({
  inputValue,
  setInputValue,
  onSendMessage,
  onClearChat,
  onKeyPress,
  isLoading,
}: ChatInputProps) {
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useState("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");
  const [selectedModel, setSelectedModel] = useState("anthropic/claude-3-haiku");

  const charCount = inputValue.length;
  const maxChars = 2000;

  return (
    <div className="border-t border-gray-200 p-4 bg-white">
      <div className="flex items-end space-x-3">
        <div className="flex-1">
          <div className="relative">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={onKeyPress}
              placeholder="Type your message here..."
              className="pr-16 py-3 rounded-2xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              maxLength={maxChars}
              disabled={isLoading}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <span className="text-xs">
                {charCount}/{maxChars}
              </span>
            </div>
          </div>
        </div>
        <Button
          onClick={onSendMessage}
          disabled={!inputValue.trim() || isLoading || charCount > maxChars}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 p-3 rounded-full shadow-lg"
          size="icon"
        >
          <Send size={16} />
        </Button>
      </div>

      {/* Settings Panel */}
      <Collapsible open={showSettings} onOpenChange={setShowSettings}>
        <CollapsibleContent>
          <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">API Configuration</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </Button>
            </div>
            <div className="space-y-2">
              <div>
                <Label htmlFor="apiKey" className="text-xs text-gray-600">
                  OpenRouter API Key
                </Label>
                <Input
                  id="apiKey"
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="text-xs font-mono"
                />
              </div>
              <div>
                <Label htmlFor="model" className="text-xs text-gray-600">
                  Model
                </Label>
                <Select value={selectedModel} onValueChange={setSelectedModel}>
                  <SelectTrigger className="text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="anthropic/claude-3-haiku">Claude 3 Haiku</SelectItem>
                    <SelectItem value="openai/gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="openai/gpt-4">GPT-4</SelectItem>
                    <SelectItem value="google/gemini-pro">Gemini Pro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Quick Actions */}
      <div className="flex items-center justify-between mt-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowSettings(!showSettings)}
          className="text-gray-500 hover:text-gray-700 text-sm"
        >
          <Settings size={16} className="mr-1" />
          Settings
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearChat}
          className="text-gray-500 hover:text-gray-700 text-sm"
        >
          <Trash2 size={16} className="mr-1" />
          Clear Chat
        </Button>
      </div>
    </div>
  );
}
