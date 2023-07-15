import { BoardStatus } from "./Layout"
import ListBoard from "./ListBoard"


const Done = () => {
    return (<ListBoard status={BoardStatus.DONE}></ListBoard>)
}

export default Done