import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout, { BoardStatus } from './page/Layout';
import ListBoard from "./page/ListBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route path="/" element={<ListBoard status={BoardStatus.ALL}/>}/>
          <Route path="done" element={<ListBoard status={BoardStatus.DONE}/>} />
          <Route path="not-done" element={<ListBoard status={BoardStatus.NOT_DONE}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
