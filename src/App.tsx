import Detail from './pages/Detail'
import List from './pages/List'
import Main from './pages/Main'
import SignIn from './pages/SignIn'
import NotFound from './pages/NotFound'
import MyPage from './pages/MyPage'
import Onboard from './pages/Onboard'
import { Route, Routes } from 'react-router-dom'
import KakaoLogin from 'components/auth/KakaoLogin'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboard />} />
        <Route path="/home" element={<Main />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/list" element={<List />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login/kakao" element={<KakaoLogin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}


export default App
