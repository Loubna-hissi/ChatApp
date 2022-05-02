import {MoreVert} from  "@mui/icons-material";
const Post = () => {
    return ( 
        <div className='Post'>
            <div className="p-2.5">
                <div className="flex items-center justify-between">
                    <div className="flex justify-center items-center">
                        <img src="/assets/profil/9.jpeg" alt="profil" className='h-9 w-9 object-cover rounded-full'/>
                        <span className="text-base font-bold ml-2.5 mr-2.5">Loubna Hissi</span>
                        <span className="text-xs">4 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="mt-2.5">
                    <span className='ml-2.5'>Cuteness overload :)</span>
                    <img src="/assets/post/6.jpeg" alt="post" className="mt-5 mb-5 w-full object-contain max-h-96" />
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center">
                        <img src="assets/like.png" alt="likePost" className="h-6 w-6 mr-1" />
                        <img src="assets/heart.png" alt="likePost" className="h-6 w-6 mr-1" />
                        <span className="text-base text-gray-500">4.8 K</span>
                    </div>
                    <div className="postEndRight">
                        <span className="text-base text-gray-500">3.7 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Post;