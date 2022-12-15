
import Layout from '@/components/core/Layout'
import React, { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Create from '@/pages/todo/Create'

const IndexPage = lazy(() => import('@/pages/todo/Index'))
const DetailPage = lazy(() => import('@/pages/todo/Detail'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<p>loading</p>}><IndexPage /></Suspense>
      },
      {
        path: '/create',
        element: <Create />
      },
      {
        path: '/detail/:id',
        element: <Suspense fallback={<p>loading</p>}><DetailPage /></Suspense>
      }
    ]
  }
])