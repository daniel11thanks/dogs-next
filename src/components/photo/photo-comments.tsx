'use client';
import React from 'react';
import PhotoCommentsForm from './photo-comments-form';
import PropTypes, { number } from 'prop-types';
import styles from './photo-comments.module.css';
import { useUser } from '@/context/user-context';
import { PhotosComment } from '@/actions/photo-get';

const PhotoComments = (props: {
  single: boolean;
  id: number;
  comments: PhotosComment[];
}) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef<HTMLUListElement>(null);
  const { user } = useUser();

  React.useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ''}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {user && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

PhotoComments.propTypes = {
  id: PropTypes.any,
  comments: PropTypes.any,
  single: PropTypes.any,
};

export default PhotoComments;
