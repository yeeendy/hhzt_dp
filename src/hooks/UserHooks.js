import { useState, useRef } from 'react';

// 정보 입력 hook
export const useInput = () => {
  const [value, setValue] = useState('');
  const ref = useRef(null);
  const handler = (e) => {
    setValue(e.target.value);
  };

  return { value, handler, ref };
};

// 상태 변화 hook
export const useSwitch = () => {
  const [state, setState] = useState(false);

  const handleState = () => {
    setState(!state);
  };

  return { state, handleState };
};
