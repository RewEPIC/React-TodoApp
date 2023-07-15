import { useContext } from "react";
import { BoardContext, BoardStatus } from "./Layout";
import Square from "../components/Square";

interface Props { status: BoardStatus }

const ListBoard = ({ status }: Props) => {
    const { board, setBoard } = useContext(BoardContext);
    const onDelete = (deleteId: any) => setBoard(board.filter((board) => board.id !== deleteId))
    const onStatus = (doneId: any) => setBoard(board.map((board) => board.id === doneId ? 
        { ...board, status: board.status === BoardStatus.DONE ? BoardStatus.NOT_DONE : BoardStatus.DONE } : board))   
    return (<div className="grid grid-cols-3 gap-y-8 justify-items-center">
      {board.filter((board) => status === BoardStatus.ALL || board.status === status).map((board) => (
        <Square title={board.name} className={board.status === BoardStatus.DONE ? 'bg-emerald-400' : 'bg-rose-400'}>
          <button className="my-4 mx-12 hover:text-slate-700" onClick={() => onStatus(board.id)}>o</button>
          <button className={board.status === BoardStatus.DONE ? 'bg-emerald-500' : 'bg-rose-500'} onClick={() => onDelete(board.id)}>DELETE</button>
        </Square>
      ))}
    </div>)
}

export default ListBoard