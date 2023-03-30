import { useState } from 'react'
import styled from '@emotion/styled'

export default function Category() {
  const [btnActive, setBtnActive] = useState(0)

  const categoryList = [
    {
      id: 0,
      tag: '막걸리',
    },
    {
      id: 1,
      tag: '약주',
    },
    {
      id: 2,
      tag: '소주/증류주',
    },
    {
      id: 3,
      tag: '맥주',
    },
    {
      id: 4,
      tag: '와인',
    },
    {
      id: 5,
      tag: '기타',
    },
  ]

  return (
    <CategoryLayout>
      <CategoryList>
        {categoryList.map((item, index) => {
          return (
            <CategoryItem
              key={item.id}
              idx={index}
              active={btnActive}
              onClick={() => {
                setBtnActive(index)
              }}
            >
              {item.tag}
            </CategoryItem>
          )
        })}
      </CategoryList>
    </CategoryLayout>
  )
}

interface CategoryProps {
  key: number
  idx: number
  active: number
}

export const CategoryLayout = styled.div`
  width: 340px;
`
export const CategoryList = styled.ul`
  display: flex;
  padding: 8px 0;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffe9d4;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    max-width: 10px;
  }
  margin-top: 24px;
`
export const CategoryItem = styled.li<CategoryProps>`
  flex-shrink: 0;
  padding: 5px 10px;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  /* color: #fff; */
  text-shadow: #fff 1px 0 10px;
  border-radius: 32px;
  ${props =>
    props.idx === props.active
      ? 'background: #FEB32B; color:white '
      : 'background: #E7E8EA; color: #858899'};
  &:not(:last-child) {
    margin-right: 7px;
  }
`
