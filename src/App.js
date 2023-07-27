import logo from './logo.svg';
import './App.css';
import React from "react";
import CSSModule from './components/cssmodule/CSSModule';

function App() {
  return (
    // <> 
    //   {/* 2-3장 */}
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

    // <> 
    //    {/* 4장, 5장 스킵 */}
    //   <EventPractice />
    // </> 

    // <> 
    //    {/* 6장, 7장은 스킵 */}
    //   <IterationSample />
    //   <IterationSample2 />
    // </> 

    // <>
    //   {/* 8장 */}
    //   {/* <Counter/> */}
    //   {/* <Info /> */}
    //   {/* <Average /> */}
    // </> 

    <>
      {/* 9장 */}
      <CSSModule/>
    </>
    
  );
}

export default App;
