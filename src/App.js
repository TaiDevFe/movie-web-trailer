import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './routers/ErrorBoundary';
import MobileNavigation from './components/MobileNavigation';


function App() {
  return (
    <ErrorBoundary>
      <main className='pb-14 lg:pb-0'>
        <Header />
        <div className='pt-16'>
          <Outlet />
        </div>
        <Footer />
        <MobileNavigation/>
      </main>
    </ErrorBoundary>

  );
}

export default App
