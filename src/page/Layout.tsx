import { createContext, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import NavItem from "./NavItem";
import toast, { Toaster } from 'react-hot-toast';

export enum BoardStatus { ALL = "All",DONE = "Done",NOT_DONE = "Not Done" }
interface Board { id: number,name?: string,status: BoardStatus }
interface IBoardContext {
    board: Board[]
    setBoard: React.Dispatch<React.SetStateAction<Board[]>>
}

export const BoardContext = createContext<IBoardContext>(null as unknown as IBoardContext)
const Layout = () => {
    const [board,setBoard] = useState<Board[]>([])
    const nameRef  = useRef() as React.RefObject<HTMLInputElement>
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const name = nameRef.current?.value
        if (!name || !Boolean(name)) toast.error("You should enter any to-do title!",{ duration: 1000 })
        else if (name.length > 128) toast.error("Text is limit up to 128!",{ duration: 1000 })
        else setBoard((boards) => [ ...boards, { id: board.length, name: nameRef.current?.value, status: BoardStatus.NOT_DONE } ])
    }
    return (
        <BoardContext.Provider value={{board, setBoard}}>
            <div className="w-screen h-screen flex flex-col">
                <div className="w-full flex max-sm:flex-col justify-center items-center uppercase">
                    <NavItem to="/">All</NavItem>
                    <NavItem to="/done">Done</NavItem>
                    <NavItem to="/not-done">Not Done</NavItem>         
                </div>
                <form className="w-full flex justify-center bg-slate-300 p-2">
                    <input maxLength={128} className="w-[26rem] px-3 rounded-s-md py-1" type="text" placeholder="What do you want to do today..." ref={nameRef}></input>
                    <button className="px-3 pb-[0.125rem] bg-emerald-400 border-white text-white hover:bg-emerald-500 transition rounded-e-md" onClick={onClick} type="submit">+</button>
                </form>  
                <div className="p-12"><Outlet /></div>    
                <Toaster/>
            </div>
        </BoardContext.Provider>
    )
}

export default Layout;