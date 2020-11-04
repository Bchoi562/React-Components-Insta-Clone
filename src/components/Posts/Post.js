import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';
import Posts from './Posts';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { postItem, likePost } = props;

  return (
    <div className='post-border'>
      <PostHeader
        username={postItem.username}
        thumbnailUrl={postItem.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={postItem.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={() => likePost(postItem.id)} numberOfLikes={postItem.likes} />
      {/* Comments also wants its props! */}
      <Comments />
    </div>
  );
};

export default Post;
