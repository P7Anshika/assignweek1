import { useState } from 'react'
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import FormComponent from './FormComponent';
import SuccessComponent from './SuccessComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Routes>
    /* <Route path="/" element={<FormComponent />} /> */
    // < BrowserRouter >
    // <Router>
    <BrowserRouter>
      <Routes>
        < Route path="/success" element={< SuccessComponent />} />
      </Routes>
    </BrowserRouter>


    // </Router>


  )
}

export default App;