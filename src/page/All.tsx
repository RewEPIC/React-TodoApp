import { BoardStatus } from "./Layout";
import ListBoard from "./ListBoard";

const All = () => {
  return (<ListBoard status={BoardStatus.ALL}></ListBoard>)
};

export default All;
