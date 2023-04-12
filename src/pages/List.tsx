import React, { useState } from 'react'
import Category from 'components/List/Category'
import Header from 'components/common/Header'
import NavBar from 'components/common/NavBar'
import ListCard from 'components/List/ListCard'
import styled from '@emotion/styled'
import ListCardContainer from 'components/List/ListCardContainer'
import HasAuth from 'components/auth/Auth'
import { useAlcoholList } from 'components/hooks/useAlcoholList'

export interface ListAlcoholData {
  alcoholId: number
  name: string
  imageUrl: string
  volume: number
  level: number
  price: number
  ateCount: number
  hasAte: boolean
}

export interface CategoryData {
  name: string
  id: number
}

function List() {
  HasAuth()

  const [category, setCategory] = useState<CategoryData>({ name: 'Makgeolli', id: 0 })
  const alcoholListData = useAlcoholList(category.name)

  return (
    <>
      <ListLayout>
        <Header>제주도감</Header>
        <Category category={category} setCategory={setCategory} />
        <ListCardContainer>
          {alcoholListData.map(drink => {
            return <ListCard key={drink.alcoholId} drink={drink} category={category.name} />
          })}
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
