import { MouseEventHandler } from "react";

type props = {
    title?: string,
    className?: string
    onClick?: MouseEventHandler
    children?: React.ReactNode
}

function Square({ title, onClick, children,className }: props) {
    return (
        <div className={`flex flex-col justify-center text-center break-words w-64 h-64 text-white rounded-md ${className}`} onClick={onClick}>
            <div className="p-6">{ title }</div>
            <div>{ children }</div>
        </div>
    )
}
export default Square;