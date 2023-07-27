import React, { useEffect, useState } from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    //화면 렌더링시 실행할 코드를 콜백함수 형식으로 작성
    useEffect(() => {
        console.log('최초 렌더링 되었습니다.');
        alert('화면 변동이 완료되었습니다(렌터링직후)');
        console.log({ // name, nick값을 객체형태로 구성해 콘솔에 찍어보는 구문
            name, nickName
        });

        // 화면 업데이트 직후가 아닌, 업데이트 직전에 호출할 내용은 리턴구문 내에 함수를 작성하면 된다.
        return () => {
            alert('화면 병동이 감지되었습니다.(직전)');
            console.log('cleanUp');
            console.log(nickName);
        }

    }, [nickName]);//},[]); 배열 내부의 상태변수로 인한 랜더링시 실행 //}, [nickName]); nickName만 렌더링해서 보여준다

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeNickName = (e) => {
        setNickName(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickName} onChange={onChangeNickName} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickName}
                </div>
            </div>
        </div>
    );

}

export default Info;