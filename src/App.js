import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuote from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";
import Comments from "./components/comments/Comments";
import { Link } from "react-router-dom";

function App() {
  return <Layout>
    <Routes>
      <Route path='/' element={<Navigate to='/quotes' replace />} />
      <Route path='/quotes' element={<AllQuote />} />
      <Route path='/quotes/:quoteId' element={<QuoteDetail />}>
        <Route
          index
          element={
            <div className='centered'>
              <Link className='btn--flat' to='comments'>
                Load Comments
              </Link>
            </div>
          }
        />
        <Route path='comments' element={<Comments />} />
      </Route>
      <Route path='/new-quote' element={<NewQuote />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Layout>
}

export default App;
