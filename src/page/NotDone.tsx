
import { BoardStatus } from "./Layout"
import ListBoard from "./ListBoard"


const NotDone = () => {
    return (<ListBoard status={BoardStatus.NOT_DONE}></ListBoard>)
}

export default NotDone