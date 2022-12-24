import { Form } from 'react-router-dom';
import classes from './QuoteForm.module.css';


const QuoteForm = (props) => {
  return (
    <Form method='post' action='/new-quote' className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='author'>Author</label>
        <input name="author" type='text' id='author' />
      </div>
      <div className={classes.control}>
        <label htmlFor='text'>Text</label>
        <textarea name="quote_text" id='text' rows='5'></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Quote</button>
      </div>
    </Form>
  );
};

export default QuoteForm;
