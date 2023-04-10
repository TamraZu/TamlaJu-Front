import { SetStateAction, Dispatch } from 'react'
import styled from '@emotion/styled'
import { CategoryData } from 'pages/List'
import { useHorizontalScroll } from 'components/hooks/useHorizontalScroll'

interface CategoryProps {
  category: CategoryData
  setCategory: Dispatch<SetStateAction<CategoryData>>
}

interface CategoryItemProps {
  key: number
  idx: number
  active: number
  onClick: () => void
}

export default function Category({ category, setCategory }: CategoryProps) {
  const categoryList = [
    {
      id: 0,
      tag: '막걸리',
      name: 'Makgeolli',
    },
    {
      id: 1,
      tag: '약주',
      name: 'Yakju',
    },
    {
      id: 2,
      tag: '소주/증류주',
      name: 'Soju',
    },
    {
      id: 3,
      tag: '맥주',
      name: 'Beer',
    },
    {
      id: 4,
      tag: '와인',
      name: 'Wine',
    },
    {
      id: 5,
      tag: '기타',
      name: 'ETC',
    },
  ]

  const scrollRef = useHorizontalScroll();

  return (
    <CategoryLayout>
      <CategoryList ref={scrollRef}>
        {categoryList.map((item, index) => {
          return (
            <CategoryItem
              key={item.id}
              idx={index}
              active={category.id}
              onClick={() => {
                setCategory((prev: CategoryData) => ({ ...prev, id: item.id, name: item.name }))
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

export const CategoryLayout = styled.div`
  width: 100%;
  margin-top: 24px;
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
`
export const CategoryItem = styled.li<CategoryItemProps>`
  flex-shrink: 0;
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 32px;
  ${props =>
    props.idx === props.active
      ? 'background: #FD6E21;; color:white '
      : 'background: #E7E8EA; color: #858899'};
  &:not(:last-child) {
    margin-right: 7px;
  }
`
