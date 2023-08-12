import { useContext } from "react";
import { BoardContext, BoardStatus } from "./Layout";
import { MdClose } from "react-icons/md"
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io"
import Square from "../components/Square";

interface Props { status: BoardStatus }

const ListBoard = ({ status }: Props) => {
    const { board, setBoard } = useContext(BoardContext);
    const onDelete = (deleteId: any) => setBoard(board.filter((board) => board.id !== deleteId))
    const isDone = (status: BoardStatus) => status === BoardStatus.DONE
    const onStatus = (doneId: any) => setBoard(
      board.map((board) => board.id === doneId ? 
      { ...board, status: isDone(board.status) ? BoardStatus.NOT_DONE : BoardStatus.DONE } : board)
    )   
    return (
    <div className="flex justify-center flex-wrap gap-x-16 gap-y-14">
      {board.filter((board) => status === BoardStatus.ALL || board.status === status).map((board) => (
        <Square key={board.id} title={board.name} className={`${isDone(board.status) ? 'bg-emerald-400' : 'bg-rose-400'} relative`}>
          <button className="absolute top-4 left-4 hover:text-slate-300" 
                  onClick={() => onStatus(board.id)}>
                    {isDone(board.status) ? <IoMdThumbsDown size={24}/> : <IoMdThumbsUp size={24}/>}
          </button>
          <button className="absolute top-4 right-4 hover:text-rose-600"
                  onClick={() => onDelete(board.id)}><MdClose size={24}/></button>
        </Square>
      ))}
    </div>)
}

export default ListBoard