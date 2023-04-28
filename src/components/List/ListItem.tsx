import React from 'react'
import { useAlcoholList } from 'components/hooks/useAlcoholList'
import { CategoryData } from 'pages/List'
import ListCard from './ListCard'

interface ListItemProps {
  category: CategoryData
}

function ListItem({ category }: ListItemProps) {
  const alcoholListData = useAlcoholList(category.name)

  return (
    <>
      {alcoholListData.map(drink => {
        return <ListCard key={drink.alcoholId} drink={drink} />
      })}
    </>
  )
}

export default ListItem
