import React from 'react'
import Category from 'components/List/Category'
import ListHeader from 'components/List/ListHeader'
import NavBar from 'components/common/NavBar'
import ListCard from 'components/List/ListCard'
import styled from '@emotion/styled'
import ListCardContainer from 'components/List/ListCardContainer'

const ListCardExample = {
  drinkImage: 'https://company.lottechilsung.co.kr/common/images/product_view0204_bh2.jpg',
  drinkName: '동백꽃, 제주',
  drinkSize: 365,
  drinkLevel: 16,
  drinkPrice: 13000,
  drinkAteCount: 33,
  drinkIsAte: true,
}

function List() {
  return (
    <ListLayout>
      <ListHeader />
      <Category />
      <ListCardContainer>
        <ListCard drink={ListCardExample} />
        <ListCard drink={ListCardExample} />
        <ListCard drink={ListCardExample} />
        <ListCard drink={ListCardExample} />
        <ListCard drink={ListCardExample} />
        <ListCard drink={ListCardExample} />
      </ListCardContainer>
      <NavBar />
    </ListLayout>
  )
}

export default List

const ListLayout = styled.div`
  padding: 0 16px;
`
