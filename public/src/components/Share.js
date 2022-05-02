import { PermMedia,Label,Room,EmojiEmotions} from "@mui/icons-material";
const Share = () => {
    return ( 
        <div className="w-full h-41 rounded-lg bg-white shadow-md shadow-gray-400">
            <div className="p-2.5">
                <div className="flex items-center">
                    <img src="/assets/profil/9.jpeg" alt="profil" className='rounded-full h-10 w-10 object-cover m-2'/>
                    <input type="text" className='border-none outline-none text-sm text-black' placeholder="What's up Loubna ?"/>
                </div>
                <hr className='m-3 ml-7 border-gray-400 w-5/6'/>
                <div className="flex items-center justify-between">
                    <div className="flex ml-5">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className='shareOptionIcon'/>
                            <span className="shareOptionText">Photo or video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className='shareOptionIcon'/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className='shareOptionIcon'/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className='shareOptionIcon'/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                        
                    </div>
                    <button className="p-1.5 border-none rounded-md font-bold bg-gray-200 text-sm hover:bg-green-300">Share</button>
                </div>

            </div>
          
        </div>
     );
}
 
export default Share;