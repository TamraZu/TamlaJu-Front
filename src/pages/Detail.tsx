import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import DetailHeader from 'components/details/DetailHeader'
import NavBar from 'components/common/NavBar'
import DetailAteButton from 'components/details/DetailAteButton'
import DetailInfoContainer from 'components/details/DetailInfoContainer'
import { memberId } from 'components/atoms/atoms'
import HasAuth from 'components/auth/Auth'
import { useAlcoholDetail } from 'components/hooks/useAlcoholDetail'

function Detail() {
  HasAuth()

  const { id } = useParams()
  const [mId] = useRecoilState(memberId)
  const alcoholDetail = useAlcoholDetail(Number(id))

  return (
    <>
      <DetailLayout>
        <DetailHeader />
        <DetailImageBox>
          <img src={alcoholDetail?.imageUrl} alt="상세 술 이미지" />
        </DetailImageBox>
        <DetailTitle>
          <DetailCategory>{alcoholDetail?.category}</DetailCategory>
          <DetailName>{alcoholDetail?.name}</DetailName>
        </DetailTitle>
        <DetailInfoContainer detailData={alcoholDetail} />
        <DetailTestingNote>테이스팅 노트</DetailTestingNote>
        <DetailTastingInfo>
          <DetailTastingImage>
            <img
              src={
                alcoholDetail?.tasteImage ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzkaK3E-cG2KkquhpAL_ukNA9RSRmVmiNxg&usqp=CAU'
              }
              alt="테이스팅 노트 이미지"
            />
          </DetailTastingImage>
          <DetailTastingDescription>{alcoholDetail.description}</DetailTastingDescription>
        </DetailTastingInfo>
        <DetailAteButton
          alcoholId={alcoholDetail.alcoholId}
          memberId={mId}
          hasAte={alcoholDetail.hasAte}
        />
      </DetailLayout>
      <NavBar />
    </>
  )
}

const DetailLayout = styled.div`
  padding: 0 16px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 90vh;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: white;
  }
`

const DetailImageBox = styled.div`
  width: 340px;
  height: 340px;
  margin: 0 auto;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    object-fit: cover;
  }
`

const DetailTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 2px;
  height: 50px;
  margin-top: 8px;
  margin-bottom: 8px;
`
const DetailCategory = styled.div`
  color: #fd6e21;
  line-height: 20px;
  font-weight: 500;
  height: 20px;
`
const DetailName = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`

const DetailTestingNote = styled.div`
  height: 28px;
  font-size: 18px;
  line-height: 28px;
  margin-top: 16px;
  margin-bottom: 4px;
  font-weight: 700;
`

const DetailTastingInfo = styled.div`
  width: 340px;
  background: #fff7f0;
  border: 1px solid #ffe9d4;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DetailTastingImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: 20px;
  background-color: white;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`

const DetailTastingDescription = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  width: 320px;
  margin-top: 10px;
  margin-bottom: 13px;
  white-space: pre-line;
`

export default Detail
