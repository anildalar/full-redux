import React from 'react'
import { Outlet } from 'react-router-dom'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  return (
    <div className="container">
        <Header />
        
        <main className="row m-0">
            <div className="col-4 h-100 p-0">
              <Aside />
            </div>
            <section className="col-8 p-0">
                <Outlet />
            </section>
        </main>
        <Footer />
    </div>
  )
}
