import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';

import styled from 'styled-components/native';
import Example from './Example';
import ExemploUseMemo from './exemplo-useMemo';
import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState();
  return (
    <View>
      <SafeAreaView>
        <text>teste</text>
      </SafeAreaView>
    </View>
  );
};

export default App;
