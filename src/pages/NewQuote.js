import QuoteForm from './../components/quotes/QuoteForm'
import { redirect } from 'react-router-dom';
import classes from './NewQuote.module.css'
import { addQuote } from '../lib/api';

function NewQuote() {

    return <section className={classes.container}>
        <QuoteForm />
    </section>

}
export default NewQuote

export async function action({ request }) {
    const fdata = await request.formData()
    const quote = { author: fdata.get('author'), text: fdata.get('quote_text') }
    try {
        addQuote(quote)
    } catch (error) {
        return error
    }
    return redirect('/quotes')
}