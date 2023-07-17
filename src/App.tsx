import {SafeAreaView, StyleSheet, Text, View, Button, useAnimatedValue} from 'react-native';

import styled from 'styled-components/native';
import Example from './Example';
import ExemploUseMemo from './exemplo-useMemo';
import { useState } from 'react';
import { useApp } from './useApp';

const App = () => {
  const { handleOnPress, value}  = useApp();

  return (
    <View>
      <SafeAreaView>
        <Text>{value}</Text>
        <Button title="mude" onPress={handleOnPress}/>
      </SafeAreaView>
    </View>
  );
};

export default App;
