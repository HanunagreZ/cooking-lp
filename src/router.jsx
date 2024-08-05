import { createBrowserRouter } from 'react-router-dom';
import Contacts from './pages/Contacts/Contacts';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />{' '}
      </Layout>
    ),
    errorElement: <div>Error</div>,
  },
  {
    path: '/contacts',
    element: (
      <Layout>
        <Contacts />{' '}
      </Layout>
    ),
    errorElement: <div>Error</div>,
  },
]);

export default router;
