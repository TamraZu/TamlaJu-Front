import { Suspense } from 'react'
import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import DetailHeader from 'components/details/DetailHeader'
import NavBar from 'components/common/NavBar'
import HasAuth from 'components/auth/Auth'
import DetailCard from 'components/details/DetailCard'
import SkeletonDetail from 'components/details/SkeletonDetail'

function Detail() {
  HasAuth()

  const { id } = useParams()

  return (
    <>
      <DetailLayout>
        <DetailHeader />
        <Suspense fallback={<SkeletonDetail />}>
          <DetailCard alcoholId={Number(id)} />
        </Suspense>
      </DetailLayout>
      <NavBar />
    </>
  )
}

const DetailLayout = styled.div`
  padding: 0 16px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 50px);
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: white;
  }
`

export default Detail
