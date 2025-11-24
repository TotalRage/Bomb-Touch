import { getCurves } from 'crypto';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I am Batman</Text>
      <Image source={require('./assets/bomb-touch-icon.png')} style={{width: 100, height: 100}}/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a5a5aff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
