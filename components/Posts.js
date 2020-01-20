import React from 'react';


function Comments({ profile_name, profile_pic, comment }) {
  return (
    <div className="post_coment">
      <img src={profile_pic} className="icon_profile" />
      <div>
        <span className="coment_content">
          <b>{profile_name} </b>
          {comment}</span>
      </div>
    </div>
  )
}


function Posts({ profile_name, profile_pic, content, date, comments }) {
  return (
    <>
      <div className="post">
        <div className="post_header">
          <img src={profile_pic} className="icon_profile" />
          <div>
            <span className="name_profile">{profile_name}</span>
            <span className="post_date">{date}</span>
          </div>
        </div>
        <div className="post_content">
          {content}
        </div>
        <hr></hr>
        {comments.map(comment => (Comments(comment)))}
      </div>
    </>
  );
}

export default Posts;