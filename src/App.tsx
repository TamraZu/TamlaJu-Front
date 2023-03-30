import Detail from './pages/Detail'
import List from './pages/List'
import Main from './pages/Main'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
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
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<List />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
