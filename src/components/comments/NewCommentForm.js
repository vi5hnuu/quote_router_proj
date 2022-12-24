import { useRef, useEffect } from 'react';

import classes from './NewCommentForm.module.css';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment)
  const { onAddedComment } = props

  const submitFormHandler = (event) => {
    event.preventDefault();
    sendRequest({
      commentData: { text: commentTextRef.current.value },
      quoteId: props.quoteId
    })
  };

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment()
    }
  }, [status, error, onAddedComment])

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        {
          status === 'pending' && (
            <div className='centered'>
              <LoadingSpinner />
            </div>
          )
        }
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
