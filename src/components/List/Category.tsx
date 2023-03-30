import { useState } from 'react'
import styled from '@emotion/styled'

export default function Category() {
  const [btnActive, setBtnActive] = useState(0)

  const categoryList = [
    {
      id: 0,
      tag: '전체',
    },
    {
      id: 1,
      tag: '막걸리',
    },
    {
      id: 2,
      tag: '약주',
    },
    {
      id: 3,
      tag: '소주/증류주',
    },
    {
      id: 4,
      tag: '소주/증류주',
    },
    {
      id: 5,
      tag: '맥주',
    },
    {
      id: 6,
      tag: '와인',
    },
    {
      id: 7,
      tag: '기타',
    },
  ]

  return (
    <>
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
    </>
  )
}

interface CategoryProps {
  key: number
  idx: number
  active: number
}

export const CategoryLayout = styled.div``
export const CategoryList = styled.ul`
  display: flex;
  align-items: center;
  padding: 10px 22px;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #635273;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    max-width: 10px;
    background-color: black;
  }
`
export const CategoryItem = styled.li<CategoryProps>`
  flex-shrink: 0;
  padding: 5px 10px;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  /* color: #fff; */
  text-shadow: #fff 1px 0 10px;
  ${props =>
    props.idx === props.active
      ? 'background: linear-gradient(126.87deg, #b9a1cf 16.19%, #635273 83.65%); border-radius: 25px;'
      : 'background: translate'};
  &:not(:last-child) {
    margin-right: 7px;
  }
`
