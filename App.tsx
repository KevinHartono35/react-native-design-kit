import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Picker, Input, Radio} from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <Picker
        data={['Banana', 'Melon', 'Orange']}
        keyExtractor={item => item}
        renderItem={({item}) => <Text>{item}</Text>}
        titleExtractor={item => item}
        onSelect={() => {}}
      />
      <Input />
      <Radio radioIds={['Banana', 'Melon', 'Orange']} onSelect={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
