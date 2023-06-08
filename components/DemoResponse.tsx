import * as React from 'react';
import {Text, StyleSheet, ViewStyle, TextStyle, ScrollView} from 'react-native';
import Styles from '../interfaces/styles/styles';

export function DemoResponse({children}: React.PropsWithChildren<{}>) {
  if (children == null) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{JSON.stringify(children, null, 2)}</Text>
    </ScrollView>
  );
}



const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: '#dcecfb',
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    maxHeight: 200,
  },
  text: {
    color: 'black',
  },
});