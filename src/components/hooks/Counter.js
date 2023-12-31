import React, { useState } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);

    return(
        <>
            <p className="result">
                현재 카운터 값은<b>{value}</b>입니다.
            </p>
            {/* setValue를 이용해 value값이 1이 더해지거나 빼지도록 하기 */}
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </>
    )
}

export default Counter;