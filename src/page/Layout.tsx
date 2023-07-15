import { createContext, useRef, useState } from "react";
import { Outlet, Link } from "react-router-dom";

export enum BoardStatus { ALL = "All",DONE = "Done",NOT_DONE = "Not Done" }
interface Board { id: number,name?: string,status: BoardStatus }
interface IBoardContext {
    board: Board[]
    setBoard: React.Dispatch<React.SetStateAction<Board[]>>
}

export const BoardContext = createContext<IBoardContext>(null as unknown as IBoardContext)
const linkClass = "w-full h-full uppercase hover:bg-emerald-600 flex justify-center p-4 transition bg-emerald-400 text-white border-r border-slate-300"
const Layout = () => {
    const [board,setBoard] = useState<Board[]>([])
    const nameRef  = useRef() as React.RefObject<HTMLInputElement>
    const onClick = () => setBoard((boards) => { 
        return [ ...boards, { id: board.length, name: nameRef.current?.value, status: BoardStatus.NOT_DONE } ]
    })
    return (
        <BoardContext.Provider value={{board, setBoard}}>
            <div className="w-screen h-screen flex flex-col">
                <div className="w-full flex justify-evenly">
                    <Link to="/" className={linkClass}>Home</Link>
                    <Link to="/done" className={linkClass}>Done</Link>
                    <Link to="/not-done" className={linkClass}>Not Done</Link>         
                </div>
                <div className="w-full flex justify-center bg-slate-300 p-2">
                    <input className="px-2" type="text" placeholder="Board Name..." ref={nameRef}></input>
                    <button className="px-2 pb-[0.125rem] bg-emerald-400 border-2 border-white text-white hover:bg-emerald-500 transition" onClick={onClick}>+</button>
                </div>  
                <div className="p-6">
                    <Outlet />
                </div>    
            </div>
        </BoardContext.Provider>
    )
}

export default Layout;