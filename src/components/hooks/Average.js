import React, { useMemo, useState } from "react";
import './Average.css';

const getAverage = numbers => {
    console.log('평균값 계산중..');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]); // 초기값 빈 리스트
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    };
    const onInsert = () => { // 버튼 클릭시 리스트에 숫자 저장
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        console.log(list); // 갱신된 리스트를 콘솔에 보여준다
        setNumber('');
    };

    // 특정 상태변수의 값이 변경되었을때 호출할 로직을 지정하고,
    // [list] 자체의 값이 변할때만 getAverage호출하고, 결과값은 avg 변수에 저장하겠다.
    const avg = useMemo(() => getAverage(list), [list]); // 성능을 최적화 하기위해 사용

    return(
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) =>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            {/* <div className="result"> */}
            <div className="Average-result">
                <b>평균값: </b>{avg} {/*{getAverage(list)}*/}
            </div>
        </div>
    );
};

export default Average;