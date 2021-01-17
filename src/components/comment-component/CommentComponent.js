import React from "react";
import "./CommentComponent.css";

function CommentComponent({}) {
  return (
    <div className='comment'>
      <div className='comment-left'>
        <img
          className='comment-image'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8RdsUdYf4NijOdfoAn94IAJve-p4RBoA2KA&usqp=CAU'
        />
      </div>
      <div className='comment-right'>
        <div className='comment-right-up'>
          <h4>Jon Sina</h4>
          <p>Comment is here. And i think this is the best product ever :). Five
            stars for sure. dsfkasfkldshglksdhgkldfghdklfghdfkghdfklghdkfghdklghdfklgdhgkljh sdflkjasdhglkdjshgkldfjghdlkgjh lkdjfg gslkjghdklfgjhdfklgj hald
          </p>
        </div>
        <div className='comment-right-down'>
          <div className='comment-rating'>
            {Array(5)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}

              
          </div>
          <div className="date">
          27/01/2019
          </div>
           
        </div>
      </div>
    </div>
  );
}

export default CommentComponent;
