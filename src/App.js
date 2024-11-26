// import logo from './logo.svg';
// import './App.css';
// import Navbar from './component/Navbar';

// import Class_component from './component/Class_component';
// import Footer from './component/Footer';
// import Functional_components from './component/Functional_components';
// import Greeting_class from './component/Greeting_class';
// import Newcomponent from './component/Newcomponent';
// import Count from './component/Count';


// function App() {
//   return (
//     <div className="App">
//       {/* <Navbar/>
//       <Class_component/>
//       */}
//      <Functional_components name="Sri"/>
//      <Functional_components name="Pajju"/>
//      <Greeting_class name="Raksha" age="21"/>
//      <Newcomponent name="Sriraksha" age="21" dept="MCA"/>
//      <Count/>
     

//      {/* <Footer/> */}
    
//     </div>
//   )
// }

// export default App;
import React from 'react'
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom';  
import Newcomponent from './component/Newcomponent';
import Functional_components from './component/Functional_components';
import CountingFunction from './component/CountingFunction';
import './App.css';
import UseEffect from './component/UseEffect';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/count" element={<Functional_components/>} /> */}
        {/* <Route path="/count" element={<CountingFunction/>} /> */}
        <Route path="/count" element={<UseEffect/>} />

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}
