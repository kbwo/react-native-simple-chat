import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';

interface SimpleChatProps {
  data: {
    senderFlag: boolean;
    text: string;
  }[];
  sendButtonText: string;
  onPressSendButton: (newMessage: string) => void;
  messageColor?: string;
}
const SimpleChat: React.FC<SimpleChatProps> = ({
  data,
  sendButtonText,
  onPressSendButton,
  messageColor = '#66bd32',
}) => {
  const [newMessage, setNewMessage] = useState('');
  return (
    <KeyboardAwareFlatList
      enableAutomaticScroll={true}
      contentContainerStyle={SimpleChatStyles.contentContainer}
      ListFooterComponent={
        <View style={SimpleChatStyles.textInputAreaView}>
          <TextInput
            onChangeText={(v) => setNewMessage(v)}
            style={SimpleChatStyles.textInputArea}
          />
          <TouchableHighlight
            style={SimpleChatStyles.sendButton}
            onPress={() => onPressSendButton(newMessage)}
          >
            <Text style={SimpleChatStyles.sendButtonText}>
              {sendButtonText}
            </Text>
          </TouchableHighlight>
        </View>
      }
      //@ts-ignore
      keyExtractor={(item: any, index: any) =>
        item.toString() + index.toString()
      }
      data={data}
      renderItem={({ item }) =>
        item.senderFlag ? (
          <>
            <View
              style={[
                SimpleChatStyles.messageWrapper,
                { backgroundColor: messageColor },
              ]}
            >
              <Text style={SimpleChatStyles.message}>{item.text}</Text>
            </View>
            <View
              style={[SimpleChatStyles.beak, { borderLeftColor: messageColor }]}
            />
          </>
        ) : (
          <>
            <View style={SimpleChatStyles.opponentMessageWrapper}>
              <Text style={SimpleChatStyles.opponentMessage}>{item.text}</Text>
            </View>
            <View style={SimpleChatStyles.leftBeak} />
          </>
        )
      }
    />
  );
};

const SimpleChatStyles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  messageWrapper: {
    maxWidth: 220,
    minWidth: 100,
    backgroundColor: '#66bd32',
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 13,
    paddingLeft: 13,
  },
  message: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'left',
  },
  beak: {
    position: 'absolute',
    right: -7,
    bottom: 7,
    marginBottom: 15,
    borderLeftColor: '#66bd32',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderWidth: 13,
  },
  opponentMessageWrapper: {
    maxWidth: 220,
    minWidth: 100,
    backgroundColor: '#c8c8c8',
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 13,
    paddingLeft: 13,
  },
  opponentMessage: {
    color: '#000',
    fontSize: 18,
    textAlign: 'left',
  },
  leftBeak: {
    position: 'absolute',
    left: -7,
    bottom: 7,
    marginBottom: 15,
    borderRightColor: '#c8c8c8',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderWidth: 13,
  },
  textInputArea: {
    width: '85%',
    height: 50,
    paddingLeft: '5%',
    backgroundColor: '#fff',
    borderColor: '#c8c8c8',
    borderWidth: 1,
  },
  textInputAreaView: {
    flexDirection: 'row',
    bottom: 0,
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  sendButton: {
    justifyContent: 'center',
    width: '15%',
    backgroundColor: '#66bd32',
  },
  sendButtonText: {
    color: '#fff',
    alignSelf: 'center',
  },
});

export default SimpleChat;
