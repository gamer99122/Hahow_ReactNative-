import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [cnt, setCnt] = useState(0);
  const printHighlight = () => {
    setCnt(cnt + 1);
  }

  const printOpacity = () => {
    setCnt(0)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on my great app!</Text>
      <Text>目前數字{cnt}</Text>
      <TouchableHighlight style={{ width: 100, height: 20, backgroundColor: 'gray' }} onPress={() => printHighlight()}>
        <Text>
          點我加一
        </Text>
      </TouchableHighlight>
      <TouchableOpacity style={{ width: 100, height: 20, backgroundColor: 'yellow' }} onPress={() => printOpacity()}>
        <Text>
          點我歸零
        </Text>
      </TouchableOpacity>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
