/**
 * author : ramon K shin
 * 소셜 로그인 연동으로 인해 이제 미사용.
 */
import { useMutation } from "@tanstack/react-query";
import { memberId } from "components/atoms/atoms";
import React, { useState } from "react";
import { useSetRecoilState } from 'recoil';
import axios from "services";
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import logo from 'atoms/png/logo_middle.png';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 88px 16px 49px 16px;
`

const Title = styled.h1`
font-size:28px;
font-weight:700;
font-family: 'Pretendard';
letter-spacing: -0.003em;
margin-bottom: 88px;
`

const Label = styled.label`
  position:relative;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Pretendard';
  letter-spacing: -0.003em;
  margin: 24px 0 4px;
`

const Input = styled.input`
  padding: 14px 24px;
  margin:12px 0 40px;
  width:100%;
  border-radius: 26px;
  border: 1px solid #FFD6B2;
  background-color: #FFF7F0;
  transition: all 0.2s;
  &:focus {
    outline:none;
    border: 1px solid #ffb97b;
    box-shadow: 0 0 4px #f3cba6;
  }
`

const Button = styled.button`
  margin: 0 auto 140px auto;
  padding: 12px 48px;
  width:154px;
  height:48px;
  background: #FD6E21;
  border-radius: 24px;
  color:white;
  font-weight: 700;
  font-size: 16px;
`

const Img = styled.img`
`
const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  width:100%;

`

function SignIn() {
  const [id, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const setMemberId = useSetRecoilState(memberId);

  const loginMutation = useMutation(['login'], async () => {
    const response = await axios.post('/api/v1/members/sign', { username: id, password: password });
    return response.data;
  })

  const handleSubmit = async (e: any) => {
    // 로그인 버튼이 클릭되었을 때 실행될 코드
    e.preventDefault();
    try {
      const response = await loginMutation.mutateAsync();
      if (response.success) {
        // setMemberId(1);
        navigate('/home');
      }
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        alert('로그인 실패\nID와 password를 확인해주세요.')
      } else {
        alert('로그인 중 오류가 발생했습니다.');
      }
    }
  }
  return <Container>


    <Title>만나서 반가워요,<br />
      탐라주에 오신걸 환영해요</Title>

    <form >
      <Label >
        아이디
        <Input type="text" value={id} placeholder='아이디를 입력해주세요' onChange={e => setUsername(e.target.value)} />
      </Label>
      <br />
      <Label>
        비밀번호
        <Input type="password" value={password} placeholder='비밀번호를 입력해주세요' onChange={e => setPassword(e.target.value)} />
      </Label>
      <br />
      <ButtonWrapper >
        <Button type="submit" onClick={handleSubmit}>로그인</Button>
        <Img src={logo} width={119} alt='logo' />
      </ButtonWrapper>
    </form>
  </Container>;
}

export default SignIn;