import { useEffect, useState } from "react";

export const useApp = () => {
  const [value, setValue] = useState('abc');

  useEffect(() => {
    console.log('foi')
  }, [value]);
  
  const handleOnPress = () => {
    setValue('def');
  }

  return {
    value,
    handleOnPress,
  }
}