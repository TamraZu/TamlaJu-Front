import { useMutation } from "@tanstack/react-query";
import { memberId } from "components/atoms/atoms";
import React, { useState } from "react";
import { useSetRecoilState } from 'recoil';
import axios from "services";
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [id, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const setMemberId = useSetRecoilState(memberId);

  const loginMutation = useMutation(['login'], async () => {
    axios.post('/api/v1/members/sign',
      { username: id, password: password })
  })

  const handleSubmit = (e: any) => {
    // 로그인 버튼이 클릭되었을 때 실행될 코드
    e.preventDefault();

    loginMutation.mutate()
    setMemberId(1) // need to fix;
    navigate('/home');
  }
  return <div>


    <h1>만나서 반가워요,<br />
      탐라주에 오신걸 환영해요</h1>

    <form >
      <label>
        아이디:
        <input type="text" value={id} placeholder='아이디를 입력해주세요' onChange={e => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        비밀번호:
        <input type="password" value={password} placeholder='비밀번호를 입력해주세요' onChange={e => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit" onClick={handleSubmit}>로그인</button>
    </form>
  </div>;
}

export default SignIn;