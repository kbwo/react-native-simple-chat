import * as React from 'react';

import { StyleSheet, SafeAreaView } from 'react-native';
import SimpleChat from 'react-native-simple-chat';

const arr = [
  {
    senderFlag: true,
    text: 'hello',
  },
  {
    senderFlag: true,
    text: 'where are you?',
  },
  {
    senderFlag: false,
    text: "I'm in Japan",
  },
  {
    senderFlag: true,
    text: 'Hey',
  },
  {
    senderFlag: false,
    text: 'What?',
  },
  {
    senderFlag: true,
    text: '...',
  },
  {
    senderFlag: true,
    text: 'React Native is amazing solution for mobile app development.',
  },
];

export default function App() {
  const [messages, setMessages] = React.useState(arr);

  const sendMessage = (newMessage: string) => {
    const newMessageObj = { senderFlag: true, text: newMessage };
    setMessages([...messages, newMessageObj]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SimpleChat
        data={messages}
        sendButtonText="送信"
        onPressSendButton={sendMessage}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
