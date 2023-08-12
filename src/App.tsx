import { Routes, Route, HashRouter } from "react-router-dom";
import Layout, { BoardStatus } from './page/Layout';
import ListBoard from "./page/ListBoard";
import NotFound from "./page/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route path="/" element={<ListBoard status={BoardStatus.ALL}/>}/>
          <Route path="done" element={<ListBoard status={BoardStatus.DONE}/>} />
          <Route path="not-done" element={<ListBoard status={BoardStatus.NOT_DONE}/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
