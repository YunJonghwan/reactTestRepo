import React, { useState } from 'react';


function useState2() {
  //* 기본값이 false로 지정된 boolean 타입의 변수
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      //* 버튼을 눌를 경우 버튼 이름 변경
      <button onClick={() => setIsOn(!isOn)}>
        //* 처음은 꺼짐으로 버튼을 누를 경우 반대의 값이 나옴
        {isOn ? "켜짐" : "꺼짐"}
      </button>
    </div>
  )
}

export default useState2