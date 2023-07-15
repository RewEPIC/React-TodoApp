import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Done from './page/Done';
import NotDone from './page/NotDone';
import Layout from './page/Layout';
import All from './page/All';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route path="/" element={<All/>}/>
          <Route path="done" element={<Done />} />
          <Route path="not-done" element={<NotDone />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
