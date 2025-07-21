import { Navigate, Route, Routes } from 'react-router';
import BookView from './pages/BookView';
import BookDetailView from './pages/BookDetailView';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/books' />} />
      <Route path='/books' element={<BookView />} />
      <Route path='/book/:id' element={<BookDetailView />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
