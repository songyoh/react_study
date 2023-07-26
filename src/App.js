// import logo from './logo.svg';
// import './App.css';
import React from "react";
import MyComponent from "./components/study/MyComponent";
import YourComponent from "./components/study/YourComponent";
import Say from "./components/study/Say";
import ArrayChange from "./components/study/ArrayChange";
import EventPractice from "./components/eventhandling/EventPractice";

function App() {
  return (
    // <>
    //   {/* properties명은 자유롭게 지정해주면 된다.
    //   다만 받는 쪽에서도 전달해줄때 사용해준 명칭을 사용해야 연결된다. */}
    //   <MyComponent name="네이버 클라우드">사이에 적은 내용/</MyComponent> 
    //   <br/>
    //   <YourComponent country="ROK"/>
    //   <br/>
    //   <Say msg="안녕하세요"/>
    //   <br/>
    //   <ArrayChange/>
    // </>

    <>
      <EventPractice/>
    </>
  );
}

export default App;
