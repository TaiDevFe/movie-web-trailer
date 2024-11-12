import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import ErrorBoundary from './routers/ErrorBoundary';
import MobileNavigation from './components/MobileNavigation';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBannerData, setImageURL } from './store/movieoSlice';


function App() {
  const dispatch = useDispatch()

  const fetchTrendingData = async() => {
    try {
      const reponse = await axios.get('/trending/all/week')
      dispatch(setBannerData(reponse.data.results))
    } catch (error) {
      console.log("error", error)
    }
  }

  const fetchConfiguration = async() => {
    try {
      const reponse = await axios.get("/configuration")
      dispatch(setImageURL(reponse.data.images.secure_base_url+"original"))
    } catch (error) {
     
    }
  }

  useEffect(() => {
    fetchTrendingData()
    fetchConfiguration()
  },[])

  return (
   // <ErrorBoundary>
      <main className='pb-14 lg:pb-0'>
        <Header />
        <div className='min-h-[90vh]'>
          <Outlet />
        </div>
        <Footer />
        <MobileNavigation/>
      </main>
  //  </ErrorBoundary>

  );
}

export default App
