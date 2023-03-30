import React, { useState, useEffect } from 'react'
import Category from 'components/List/Category'
import Header from 'components/common/Header'
import NavBar from 'components/common/NavBar'
import ListCard from 'components/List/ListCard'
import styled from '@emotion/styled'
import ListCardContainer from 'components/List/ListCardContainer'
import { getListAlcohol } from 'apis'

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
  const [category, setCategory] = useState<CategoryData>({ name: 'Makgeolli', id: 0 })
  const [data, setData] = useState<ListAlcoholData[]>([])
  useEffect(() => {
    async function fetchListData() {
      const response = await getListAlcohol(1, category.name)
      setData(response)
    }
    fetchListData()
  }, [category.name, category.id])

  return (
    <ListLayout>
      <Header>제주도감</Header>
      <Category category={category} setCategory={setCategory} />
      <ListCardContainer>
        {data.map(elem => {
          return <ListCard key={elem.alcoholId} drink={elem} />
        })}
      </ListCardContainer>
      <NavBar />
    </ListLayout>
  )
}

export default List

const ListLayout = styled.div`
  padding: 0 16px;
`
