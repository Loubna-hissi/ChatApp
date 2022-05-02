import { Search,Add ,Chat,NotificationAdd,Home,Person,Group} from "@mui/icons-material";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="grid grid-cols-3 sticky w-full h-17 shadow-md shadow-gray-300 ">
            <div className="flex items-center justify-around ">
               <img src="assets/log.png" alt="Logo" className="flex items-center justify-center font-bold bg-blue-300 h-14 w-14 rounded-full cursor-pointer ml-6"/>
               <span className="font-bold uppercase text-xl mr-6 ">Heey</span>
                <div className="flex font-bold items-center rounded-full bg-facebookGray p-1">
                <Search className="cursor-pointer"/>
                <input type="text"  placeholder="Search..." className="bg-facebookGray focus:outline-none w-50 " />
                </div>
            </div>
            <div className="flex items-center justify-around" >
                    <div ><Home/></div>
                    <div ><Person/></div>
                    <div ><Group/></div>
            </div>
            <ul className="flex items-center justify-evenly">
                    <li className="ulItems"><Add className="itemsNavbar"/></li>
                    <li className="ulItems"><Link to="/chat"><Chat className="itemsNavbar" /></Link></li>
                    <li className="ulItems"><NotificationAdd className="itemsNavbar"/></li>
                    <li className="ulItems"><ManageAccountsIcon className="itemsNavbar"/></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;