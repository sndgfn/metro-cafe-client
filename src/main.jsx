import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './Providers/AuthProvider';

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl mx-auto'>

    
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      </AuthProvider>
    </QueryClientProvider>


  </div>


  // <StrictMode>
  //   <AuthProvider>
  //     <QueryClientProvider client={queryClient}>
  //       <HelmetProvider>

  //       </HelmetProvider>
  //     </QueryClientProvider>
  //   </AuthProvider>
  // </StrictMode>,

)