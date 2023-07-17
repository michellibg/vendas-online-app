import {useCallback, useState} from 'react';

const Test = () => {
    const [name, setName] = useState('julio');

    const handleChangeName = useCallback(() => {
      setName('José');
    }, []); 
    //useCallback serve para limitar a renderização de uma função
    //usa [] para renderizar somente na criação
    //caso queira que renderizar quando alguma variável for alterada, informar ela dentro do cochete:
    //exemplos: [setName] ou [setName, Text, OutraVariavel] ou [nomeDeUmaFunção]

    return <div onClick={handleChangeName}>Teste</div>;
}

export default Test;

