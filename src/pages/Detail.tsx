import DetailHeader from 'components/details/DetailHeader'
import styled from '@emotion/styled'
import NavBar from 'components/common/NavBar'
import DetailAteButton from 'components/details/DetailAteButton'
import DetailInfoContainer from 'components/details/DetailInfoContainer'

function Detail() {
  return (
    <>
      <DetailLayout>
        <DetailHeader />
        <DetailImageBox>
          <img
            src="data:image/jpeg;base64,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"
            alt="상세 술 이미지"
          />
        </DetailImageBox>
        <DetailTitle>
          <DetailCategory>기타주류</DetailCategory>
          <DetailName>동백꽃, 제주</DetailName>
        </DetailTitle>
        <DetailInfoContainer />
        <DetailTestingNote>테이스팅 노트</DetailTestingNote>
        <DetailTastingInfo>
          <DetailTastingImage>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzkaK3E-cG2KkquhpAL_ukNA9RSRmVmiNxg&usqp=CAU"
              alt="테이스팅 노트 이미지"
            />
          </DetailTastingImage>
          <DetailTastingDescription>
            포도를 씹은듯한 상큼함과 달달한 끝맛이 특징인 동백꽃술 꽃 한송이를 선물하는 듯한 포장
            패키지가 매력적인 동백꽃, 제주
          </DetailTastingDescription>
        </DetailTastingInfo>
        <DetailAteButton />
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
`

export default Detail
