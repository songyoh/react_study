import React, { useState } from "react";

const IterationSample2 = () => {
    const [names, setNames] = useState([
                                        {id: 1, text: "눈사람"},
                                        {id: 2, text: "얼음"},
                                        {id: 3, text: "눈"},
                                        {id: 4, text: "바람"}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id (위에 4번까지 있으므로 5번 부터)

    // 더블클릭시 삭제를 수행해주는 함수 선언
    const onDoubleClickComponent = (id) => {
        alert("해당요소를 삭제합니다");
        // 더블클릭한 번호가 아닌 자바스크립트 객체들만 리스트에 남긴채 저장
        // setNames(names.filter(name => name.id !== id));
        setNames(prevState => prevState.filter(name => name.id !== id));
        //  prevState직전상태에 필터를 걸어서 강제로 호출
    }

    const namesList = names.map(name => 
                    <li key={name.id} 
                        onDoubleClick={() => onDoubleClickComponent(name.id)}>
                        {name.text}
                    </li>);

    const onChange = (e) => setInputText(e.target.value); // 해당 input태그에 작성된 내용이 즉시 inputText 상태변수에 반영(이벤트 바인딩)
    const onClick = () => { // onClick시 inputText에 적힌 내용이 alert로 찍히고, 상태변수는 ''로 변경되게
        alert(`입력하신 문자는 '${inputText}'입니다`);
        // alert(inputText + "데이터를 추가합니다.");
        const nextNames = names.concat({
            id: nextId, // nextId값 id로 설정
            text: inputText
        });
        setNextId(nextId + 1); // nextId값에 1 더하기
        // setNames(nextNames); // names 리스트에 내가 방금 추가한 text정보가 화면에도 반영되도록 수정
        // 기존 데이터 목록에 신규 데이터를 불변성을 지키면서 추가하기
        setNames([...names, {id:nextId, text:inputText}]); 
        setInputText(''); // inputText를 비운다
    }
    //console.log(namesList); 콘솔에 어떻게 나오는지 확인하고 싶을때
    
    return(
        <>
            <input type="text" value={inputText} onChange={onChange} placeholder="입력하세요"/>
            <button onClick={onClick}>목록에 추가</button>
            <ul>{namesList}</ul>
        </>
    );
}

export default IterationSample2;