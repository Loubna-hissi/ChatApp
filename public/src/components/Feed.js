import Share from './Share'
import Post from './Post'
const Feed = () => {
    return ( 
        <div className='feed'>
            <div className="p-5">
                <Share/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
     );
}
 
export default Feed;