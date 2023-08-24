import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Post from './Post';
import { useState } from 'react'; 
import Modal from './Modal';

function PostList({isPosting, onStopPosting}) {
  const [posts, setPosts] = useState([]);
  
  function addPostHandler(postData){
      setPosts((existingPosts) =>[postData, ...existingPosts]);
  }

  return (
   <>
     {isPosting && (
       <Modal onClose={onStopPosting}>
         <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
       </Modal>
     )}
     {posts.length > 0 && (
       <ul className={classes.posts}>
         {posts.map((post) => (
           <Post key={post.body} author={post.author} body={post.body} />
         ))}
       </ul>
     )}
   </>
 );
 
}

export default PostList;

         