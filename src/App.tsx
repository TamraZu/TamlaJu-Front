import Detail from './pages/Detail'
import List from './pages/List'
import Main from './pages/Main'
import SignIn from './pages/SignIn'
import NotFound from './pages/NotFound'
import MyPage from './pages/MyPage'
import Onboard from './pages/Onboard'
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  // useEffect(() => {
  //     const mapScript = document.createElement('script');
  //     mapScript.async = true;
  //     mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}`;
  //
  //     document.body.appendChild(mapScript);
  // }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboard />} />
        <Route path="/home" element={<Main />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/list" element={<List />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  )
}

export default App
