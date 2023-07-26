import React from "react";

const IterationSample = () => {
    const names = ['눈사람', '얼음', '눈', '바람'];
    // const nameList = names.map((name, idx) => <li key={"li-"+idx}>{name}</li>);
    const nameList = names.map((name, idx) => <li key={"name-"+idx}>{name}</li>);// key값은 예측 불가능한 값이 더 좋다.
    // const nameList = names.map((name, idx) => <li key={Math.random(idx)}>{name}</li>);

    console.log(nameList);

    return(
        <ul>
            {nameList}
        </ul>
    );
}

export default IterationSample;