import React, {useState} from "react";

const YourComponent = (props) => { 
    // 함수를 만들어 country변수의 상태관리 선언(useState 사용)
    // 초기값은 'ROK'
    const [country, setCountry] = useState(props.country);

    // 이벤트 함수를 선언해 클릭시, 'KOREA'로 바뀌고 화면도 바뀌게하기
    const onClickEvent = () => {
        setCountry('Republic of KOREA');
    } 

    return (
        <>
        {/* 버튼을 만들어서 위에서 만든 이벤트 함수와 연결해보기 */}
        <div>내가 만든 컴포넌트: {country}</div>
        <button onClick={onClickEvent}>ROK란?</button>
        </>
    );
}

export default YourComponent;