import { RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import router from './router';

function App() {
  return (
    <div className="app">
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </div>
  );
}

export default App;
