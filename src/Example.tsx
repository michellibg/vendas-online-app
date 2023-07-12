import {Text, View} from 'react-native';

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
  return (
    <View>
      <Text style={{color: 'pink'}}>{children}</Text>
      <Text style={{color: 'blue'}}>{text}</Text>
    </View>
  );
};

export default Example;
