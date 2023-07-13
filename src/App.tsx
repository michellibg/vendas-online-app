import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';

import styled from 'styled-components/native';
import Example from './Example';

const App = () => {
  return (
    <View>
      <SafeAreaView>
        <Example text="ABC">Children1</Example>
      </SafeAreaView>
    </View>
  );
};

export default App;
