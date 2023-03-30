import React from 'react'
import Category from 'components/List/Category'
import ListHeader from 'components/List/ListHeader'
import NavBar from 'components/common/NavBar'
import ListCard from 'components/List/ListCard'
import styled from '@emotion/styled'

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
      <ListCard drink={ListCardExample} />
      <NavBar />
    </ListLayout>
  )
}

export default List

const ListLayout = styled.div``
