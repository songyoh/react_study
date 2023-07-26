import React, { useState } from "react";

//const Say = ({msg}) => { // props대신 {프로퍼티명1, 프로퍼티명2,...} 로 전달 가능
// 아래 문법을 통해서, 변수값이 변경될 때 화면도 다시 렌더링(그려지게) 할 수 있다.
// const [관리할 변수명, set관리할변수명] = useState(초기값;) 
// 한 컴포넌트 내부에서 useState()의 사용 횟수는 제한이 없다
// 다만, 너무 과도하게 많은 경우는 컴포넌트 분리를 해서 관리한다.
const Say = (props) => {
    //msg = "Hello"; //한번 함수를 호출했으므로 바꾸려는 변수값은 안 바뀜
    const [msg, setMsg] = useState(props.msg);

    // 클릭시 msg변수에 든 값("Hello")을 바꾼다("싸왓디크랍, 싸왓디카")
    const onClickEvent = () => {
        // msg = "싸왓디크랍, 싸왓디카";
        // console.log("눌렸음");
        // console.log(msg);
        setMsg('싸왓디크랍, 싸왓디카'); // msg변수의 값을 변경하고 화면도 다시 그리게 하는 구문
    }

    return (
        // 이벤트 바인딩시에 카멜케이스로 변형해서 한다.
        // on이벤트명={위에서선언한함수}
        <div>
            <div>인사하겠습니다: {msg}</div>
            <button onClick={onClickEvent}>변경</button>
        </div>
    );

}

export default Say;