import { Text, TextInput, View } from "react-native";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/Button";

const Login = () => {


    const handleOnPress = () => {
        console.log('clicou');
    }

return (
    <View>
        <ContainerLogin>
            <Text>Login</Text>
            <Input/>
            <Button margin ="16px" title='ENTRAR' onPress={handleOnPress}></Button>
        </ContainerLogin>
        
    </View>
)

}

export default Login;