import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';

interface SimpleChatProps {
  data: {
    senderFlag: boolean;
    text: string;
  }[];
}
const SimpleChat: React.FC<SimpleChatProps> = ({ data }) => {
  return (
    <KeyboardAwareFlatList
      contentInset={{ top: 320 }}
      scrollIndicatorInsets={{ top: 320 }}
      contentContainerStyle={SimpleChatStyles.contentContainer}
      enableResetScrollToCoords={true}
      enableAutomaticScroll={false}
      contentInsetAdjustmentBehavior={'automatic'}
      automaticallyAdjustContentInsets={false}
      resetScrollToCoords={{ x: 0, y: 0 }}
      //@ts-ignore
      inverted={-1}
      keyExtractor={(item: any, index: any) =>
        item.toString() + index.toString()
      }
      data={data}
      renderItem={({ item }) =>
        item.senderFlag ? (
          <>
            <View style={SimpleChatStyles.messageWrapper}>
              <Text style={SimpleChatStyles.message}>{item.text}</Text>
            </View>
            <View style={SimpleChatStyles.beak} />
          </>
        ) : (
          <View style={SimpleChatStyles.opponentMessageWrapper}>
            <Text style={SimpleChatStyles.opponentMessage}>{item.text}</Text>
          </View>
        )
      }
    />
  );
};

const SimpleChatStyles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  messageWrapper: {
    maxWidth: '60%',
    minWidth: '30%',
    backgroundColor: '#66bd32',
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginRight: '7%',
    marginBottom: '5%',
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
    alignSelf: 'flex-end',
    position: 'absolute',
    right: '2.5%',
    bottom: 7,
    marginBottom: 15,
    borderLeftColor: '#66bd32',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderWidth: 13,
  },
  opponentMessageWrapper: {
    maxWidth: '60%',
    minWidth: '30%',
    backgroundColor: '#c8c8c8',
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginLeft: '7%',
    marginBottom: '5%',
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
});

export default SimpleChat;
