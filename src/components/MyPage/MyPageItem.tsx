import { useAlcoholMyPage } from 'components/hooks/useAlcoholMyPage'
import MyPageCountHeader from './MyPageCountHeader'
import MyPageContainer from './MyPageContainer'
import MyPageCard from './MyPageCard'
import MyPageNoData from './MyPageNoData'

function MyPageItem() {
  const myPageData = useAlcoholMyPage()

  return (
    <>
      <MyPageCountHeader count={myPageData.count} />
      <MyPageContainer>
        {myPageData.count === 0 ? (
          <MyPageNoData />
        ) : (
          myPageData.alcohols?.map(elem => {
            return (
              <MyPageCard
                key={elem.name}
                imageUrl={elem.imageUrl}
                name={elem.name}
                alcoholId={elem.alcoholId}
              />
            )
          })
        )}
      </MyPageContainer>
    </>
  )
}

export default MyPageItem
