import React, { useState } from "react";

const EventPractice = () => {
    // P.124 클래스형 컴포넌트로 진행되는 내용을 함수형 컴포넌트로 재구성
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleClick = () => {
        alert(`${username} : ${message}`);
        setUsername('');
        setMessage(''); // 제출버튼 누르면 입력된폼 비우기
    }

    const handleMessageChange = (e) => {
        // message 상태에 change가 발생할때마다 갱신된 값이 들어감
        setMessage(e.target.value);
    }

    const handleUsernameChange = (e) => {
        // username 상태에 change가 발생할때마다 갱신된 값이 들어감
        setUsername(e.target.value);
    }

    // p.135 이벤트 처리를 input태그 2개(username, message)를 사용해
    // 양쪽 입력하고 확인 버튼 누르면
    // username : message가 들어간 alert창이 뜬다
    // 해당 기능을 현재 사용하는 코드를 고쳐서 만들어보자.


    return (
        <>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="name"
                value={username} // message 상태에 든 값으로 폼 내부 자료가 유지됨
                onChange={handleUsernameChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해보세요"
                value={message} // message 상태에 든 값으로 폼 내부 자료가 유지됨
                onChange={handleMessageChange}
            />
            <button onClick={handleClick}>확인</button>
        </>
    );
}

export default EventPractice;