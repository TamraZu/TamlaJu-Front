import styled from '@emotion/styled'
import Spinner from './Spinner'

function Loading() {
  return (
    <Container>
      <Spinner/>
    </Container>
  )
}

export default Loading

const Container = styled.div`
  width: 80px;
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 50%;
`