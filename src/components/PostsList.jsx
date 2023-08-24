import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Post from './Post';
import { useState } from 'react'; 
import Modal from './Modal';

function PostList({isPosting, onStopPosting}) {
  const [posts, setPosts] = useState([]);
  
  function addPostHandler(postData){
      setPosts([postData, ...posts]);
  }

    return (
    <>
        {isPosting && (
          <Modal onClose={onStopPosting}>
            <NewPost onCancel = {onStopPosting} onAddPost={addPostHandler}/>
          </Modal> 
        )}

        <ul className={classes.posts}>
        <Post author="Manuel" body="Check out the full course!" /> 
        </ul>
    </>
    );
   
}

export default PostList;