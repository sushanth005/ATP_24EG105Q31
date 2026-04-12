import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'


function RootLayout() {
  return (
    <div>
            {/* Header */}
            <Header />

            {/* Placeholder */}
            <div className="min-h-screen mx-16 bg-gray-400">
                <Outlet />
            </div>

            {/* Footer */}
            <Footer />
    </div>
  )
}

export default RootLayout