import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

function sortQuote(quotes, ascending) {
  return quotes.sort((qA, qB) => {
    if (ascending) {
      return qA.id > qB.id ? 1 : -1
    } else {
      return qA.id > qB.id ? -1 : 1
    }
  })
}
const QuoteList = (props) => {
  const quotes = sortQuote(props.quotes, props.asc)
  return (
    <ul className={classes.list}>
      {quotes.map((quote) => (
        <QuoteItem
          key={quote.id}
          id={quote.id}
          author={quote.author}
          text={quote.text}
        />
      ))}
    </ul>
  );
};

export default QuoteList;
