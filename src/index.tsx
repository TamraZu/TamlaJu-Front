import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import Layout from 'components/common/Layout'
import reportWebVitals from './reportWebVitals'
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
      // refetchOnMount:false,
      // staleTime:1000 * 300, // 5분 (300초)
    },
  },
})
root.render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RecoilRoot>
          <Layout>
            <App />
            
          </Layout>
        </RecoilRoot>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
