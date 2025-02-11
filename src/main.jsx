import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';


createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl mx-auto'>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
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