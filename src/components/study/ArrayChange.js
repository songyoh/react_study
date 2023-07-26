import React, { useState } from "react";

const ArrayChange = () => {
    // 사람 이름(key)과 성적(value)을 집어넣는 객체 초기값으로 넣기
    const [humans, setHumans] = useState({kim:100, lee:200});

    const addScoreEvent = () => {
        // setHumans를 이용해 park이라는 사람의 성적을 추가해보자
        // humans.park = 300; // 1. humans에 park:300을 추가한다(화면에 반영x)
        // setHumans(humans);
        console.log(humans);

        // 기본 humans 내부요소 + park:300추가
        setHumans({...humans, park:300, kim:1000});
    };

    return(
        <>
            <button onClick={addScoreEvent}>성적추가하기</button>
            <div>성적 목록: {humans.park}</div>
        </>
    );

}

export default ArrayChange;