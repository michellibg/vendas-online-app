import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';

import styled from 'styled-components/native';
import Example from './Example';

const App = () => {
  return (
    <View>
      <SafeAreaView>
        <Example text="ABC">Children1</Example>
        <Example text="José" />
        <Text>Titulo teste</Text>
      </SafeAreaView>
    </View>
  );
};

export default App;
