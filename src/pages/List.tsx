import { Suspense } from 'react'
import Category from 'components/List/Category'
import Header from 'components/common/Header'
import NavBar from 'components/common/NavBar'
import styled from '@emotion/styled'
import ListCardContainer from 'components/List/ListCardContainer'
import HasAuth from 'components/auth/Auth'
import { selectedCategory } from 'components/atoms/atoms'
import { useRecoilState } from 'recoil'
import ListItem from 'components/List/ListItem'
import SkeletonCardList from 'components/List/SkeletonCardList'

export interface CategoryData {
  name: string
  id: number
}

function List() {
  HasAuth()

  const [category, setCategory] = useRecoilState<CategoryData>(selectedCategory)

  return (
    <>
      <ListLayout>
        <Header>제주 술도감</Header>
        <Category category={category} setCategory={setCategory} />
        <ListCardContainer>
          <Suspense fallback={<SkeletonCardList />}>
            <ListItem category={category} />
          </Suspense>
        </ListCardContainer>
      </ListLayout>
      <NavBar />
    </>
  )
}

export default List

const ListLayout = styled.div`
  padding: 0 16px;
`
