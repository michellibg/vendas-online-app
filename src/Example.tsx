import { useEffect, useState } from 'react';
import {Text, View, Button} from 'react-native';

interface ExampleProps {
  text?: string;
  children?: string;
}

//const Example = ( props: ExampleProps) => {
// const children = props.children;
// const text = props.text;
// Outra forma de fazer
//   const { children, text : textProps } = props;

const Example = ({children, text}: ExampleProps) => {

  const [newText, setNewText] = useState('');

  useEffect(() =>{
    console.log('passou aqui 3');
  },[newText])

  const handleOnPress = () => {
    setNewText('Mudou');
  }

  return (
    <View>
      <Text style={{color: 'pink'}}>{children}</Text>
      <Text style={{color: 'blue'}}>{newText || text}</Text>

      <Button onPress={handleOnPress} title = "Botão"/> 
    </View>
  );
};

export default Example;
