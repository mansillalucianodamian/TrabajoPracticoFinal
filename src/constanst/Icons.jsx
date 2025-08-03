
import { BsPlusLg, BsGear, BsPeople, BsChatText, BsDisc, BsChatLeftTextFill, BsCheck2All, BsCheck2, BsTrash3, BsSearch, BsThreeDotsVertical, BsDashCircle, BsInfoCircle} from "react-icons/bs";
import { MdLockOutline, MdOutlineLogout, MdSend } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import { IoMdContact } from "react-icons/io";
import { BiPlusCircle } from "react-icons/bi";


const ICONS = {
    PlusC: BiPlusCircle,
    Lock: MdLockOutline,
    Contact: IoMdContact,
    ArrowLeft: FiArrowLeft,
    CheckAll: BsCheck2All,
    Check: BsCheck2,
    Optiopns: BsThreeDotsVertical,
    Search: BsSearch,
    Delete: BsTrash3,
    Trash: BsDashCircle,
    Info: BsInfoCircle,
    Out: MdOutlineLogout,
    ChatLeft: BsChatLeftTextFill,
    Disc: BsDisc,
    ChatText:BsChatText,
    People:BsPeople,
    Gear:BsGear,
    Plus:BsPlusLg,
    Send: MdSend,
}

export default ICONS
