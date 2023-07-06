import {SafeAreaView,StyleSheet, Text, View, Button} from 'react-native';

import styled from 'styled-components/native';


const TextNew = styled.Text`
    font-size: 24px;
    color: blue;
    
`;
  

const App = () => {
  return (
    <View>
      <SafeAreaView>
        <Text style={styles.container}>Testando</Text>
        <TextNew>Titulo teste</TextNew>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'blue',
  },
})

export default App;
