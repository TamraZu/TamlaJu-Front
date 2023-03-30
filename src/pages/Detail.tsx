import DetailHeader from 'components/details/DetailHeader'
import styled from '@emotion/styled'
import NavBar from 'components/common/NavBar'
import DetailAteButton from 'components/details/DetailAteButton'
import DetailInfoContainer from 'components/details/DetailInfoContainer'
import { useEffect, useState } from 'react'
import { DetailData, getDetailAlcohol } from 'apis'
import { useParams } from 'react-router-dom'

function Detail() {
  const { id } = useParams()
  const [data, setData] = useState<DetailData | null>(null)

  useEffect(() => {
    async function fetchData() {
      const response = await getDetailAlcohol(Number(id), 1)
      setData(response)
    }
    fetchData()
  }, [])

  if (!data) {
    return <div>로딩중...</div>
  }
  return (
    <>
      <DetailLayout>
        <DetailHeader />
        <DetailImageBox>
          <img src={data?.imageUrl} alt="상세 술 이미지" />
        </DetailImageBox>
        <DetailTitle>
          <DetailCategory>{data?.category}</DetailCategory>
          <DetailName>{data?.name}</DetailName>
        </DetailTitle>
        <DetailInfoContainer detailData={data} />
        <DetailTestingNote>테이스팅 노트</DetailTestingNote>
        <DetailTastingInfo>
          <DetailTastingImage>
            <img
              src={
                data?.tasteImage ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzkaK3E-cG2KkquhpAL_ukNA9RSRmVmiNxg&usqp=CAU'
              }
              alt="테이스팅 노트 이미지"
            />
          </DetailTastingImage>
          <DetailTastingDescription>{data.description}</DetailTastingDescription>
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
  white-space: pre-line;
`

export default Detail
