import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './store';
import AllRoutes from './AllRoutes';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>,
)
