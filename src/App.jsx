import { RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import router from './router';

function App() {
  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
}

export default App;
