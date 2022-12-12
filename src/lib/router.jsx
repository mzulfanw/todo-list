
import Layout from '@/components/core/Layout'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Index from '@/pages/todo/Index'
import Create from '@/pages/todo/Create'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Index />
      },
      {
        path: '/create',
        element: <Create />
      }
    ]
  }
])