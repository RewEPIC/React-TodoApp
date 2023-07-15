import { MouseEventHandler } from "react";

type props = {
    title?: string,
    className?: string
    onClick?: MouseEventHandler
    children?: React.ReactNode
}

function Square({ title, onClick, children,className }: props) {
    return (
        <div className={`w-32 h-32 flex flex-col justify-center items-center text-white rounded-md ${className}`} onClick={onClick}>
            <div>{ title }</div>
            <div className="flex flex-col w-full">{ children }</div>
        </div>
    )
}
export default Square;