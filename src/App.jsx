import { BrowserRouter, Routes, Route } from "react-router-dom";

import StackList from './container/List';
import StackContextProvider from './context/QuestionContext';

import './App.css'

function App() {

  return (
    <>
      <StackContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StackList />} />
          </Routes>
          <StackList />
        </BrowserRouter>
      </StackContextProvider>
    </>
  )
}

export default App
