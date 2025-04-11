import { useEffect } from 'react';

function Hello() {
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타났어요!');
  }, []); // 빈 배열이면 "처음 한 번만 실행"

  return <h1>안녕하세요!</h1>;
}

export default Hello