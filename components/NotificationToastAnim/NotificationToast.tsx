import { useState } from "react";
import Message from "./Message";
import { View, Text, TouchableOpacity } from "react-native";

const getRandomMessage = () => {
  const number = Math.trunc(Math.random() * 10000);
  return "Random message " + number;
};

export default function NotificationToast() {
  const [messages, setMessages] = useState([]);

  const appendMessage = () => {
    const message = getRandomMessage();
    setMessages((prev) => [...prev, message]);
  };

  const deleteMessage = (message: string) => {
    setMessages((prev) => prev.filter((item) => message !== item));
  };

  return (
    <View className="flex-1">
      <View className="absolute left-0 right-0 top-10">
        {messages.map((message) => (
          <Message
            key={message}
            message={message}
            deleteMessage={deleteMessage}
          />
        ))}
      </View>
      <View className="flex-1" />
      <TouchableOpacity
        onPress={appendMessage}
        className="px-6 py-3 bg-purple-500"
      >
        <Text className="text-white">Add Message</Text>
      </TouchableOpacity>
    </View>
  );
}
