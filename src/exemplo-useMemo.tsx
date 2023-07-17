import {useMemo, useState} from 'react';

const ExemploUseMemo = () => {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(2);

  const calc = useMemo(() =>{
    let sum = 0;
    for (let i = 0; i < 9 ** 10; i++){
      sum + value1;
    }
    return sum;
  }, [value1]);
  

  return (
    <view>
      <div> 
        <div>{calc}</div>
        <br/>
        {/* poderia ser Value1 + 1 , porém com current, ele garante que é o valor anterior. */}
        <button onClick = {() => setValue1((current) => current + 1)}>{value1}</button>
        <button onClick = {() => setValue2((current) => current + 1)}>{value2}</button>      
      </div>
    </view>
  );
};

export default ExemploUseMemo;