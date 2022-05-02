import { Chat,NotificationAdd,Group} from "@mui/icons-material";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SwitchVideoIcon from '@mui/icons-material/SwitchVideo';
import HelpIcon from '@mui/icons-material/Help';
const Sidebar = () => {
    return (
        <div className='sidebar'>
           <div className="mt-6">
               <ul>
                   <li className="ServiceItem">
                       <img src="assets/profil/9.jpeg" alt="profil" className='ImageProfil'/>
                       <span className='ml-3 font-bold text-black'>Loubna Hissi</span>
                   </li>
                   <li className="ServiceItem">
                       <div><RssFeedIcon className='ImageProfil'/></div>
                       <span className='ServiceItemTextActive'>Feed</span>
                   </li>
                   <li className="ServiceItem">
                       <div><NotificationAdd className='ImageProfil'/></div>
                       <span className='ServiceItemTextActive'>Notifications</span>
                   </li>
                   <li className="ServiceItem">
                       <div><Chat className='ImageProfil'/></div>
                        <span className='ServiceItemTextActive'>Chats</span>
                   </li>
                   <li className="ServiceItem">
                       <div><SwitchVideoIcon className='ImageProfil'/></div>
                        <span className='ServiceItemTextActive'>Vidéos</span>
                   </li>
                   <li className="ServiceItem">
                       <div><Group className='ImageProfil'/></div>
                        <span className='ServiceItemTextActive'>Group</span>
                   </li>
                   <li className="ServiceItem">
                       <div><HelpIcon className='ImageProfil'/></div>
                        <span className='ServiceItemTextActive'>Questions</span>
                   </li>
               </ul>
               <hr className="self-center mt-3 mb-3 ml-12 border-gray-500 "/>
               
               <ul>
               <li className="m-4 flex items-center ml-11 text-blue-700">
                       <span className='text-base font-bold'>All Friends</span>
               </li>
                    <li className='ServiceItem'>
                       <img src="assets/profil/9.jpeg" alt="" height={32} width={32} className='ImageProfil'/>
                       <span className="ServiceItemTextActive">Aicha Elboukili</span>
                    </li>
                    <li className='ServiceItem'>
                       <img src="assets/profil/9.jpeg" alt="" height={32} width={32} className='ImageProfil'/>
                       <span className="ServiceItemTextActive">Aicha Elboukili</span>
                    </li>
                    <li className='ServiceItem'>
                       <img src="assets/profil/9.jpeg" alt="" height={32} width={32} className='ImageProfil'/>
                       <span className="ServiceItemTextActive">Aicha Elboukili</span>
                    </li>
                    <li className='ServiceItem'>
                       <img src="assets/profil/9.jpeg" alt="" height={32} width={32} className='ImageProfil'/>
                       <span className="ServiceItemTextActive">Aicha Elboukili</span>
                    </li>
                    <li className='ServiceItem'>
                       <img src="assets/profil/9.jpeg" alt="" height={32} width={32} className='ImageProfil'/>
                       <span className="ServiceItemTextActive">Aicha Elboukili</span>
                    </li>
                    <li className='ServiceItem'>
                       <img src="assets/profil/9.jpeg" alt="" height={32} width={32} className='ImageProfil'/>
                       <span className="ServiceItemTextActive">Aicha Elboukili</span>
                    </li>
                    <li className='ServiceItem'>
                       <img src="assets/profil/9.jpeg" alt="" height={32} width={32} className='ImageProfil'/>
                       <span className="ServiceItemTextActive">Aicha Elboukili</span>
                    </li>
                    <li className='ServiceItem'>
                       <img src="assets/profil/9.jpeg" alt="" height={32} width={32} className='ImageProfil'/>
                       <span className="ServiceItemTextActive">Aicha Elboukili</span>
                    </li>
                    <li className='ServiceItem'>
                       <img src="assets/profil/9.jpeg" alt="" height={32} width={32} className='ImageProfil'/>
                       <span className="ServiceItemTextActive">Aicha Elboukili</span>
                    </li>
               </ul>
           </div>
        </div>
      );
}
 
export default Sidebar;