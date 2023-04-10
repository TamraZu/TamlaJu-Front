import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { alcoholType } from 'types/drinkType';
import { ReactComponent as DrinkIcon } from 'atoms/icons/DrinkIcon.svg'

const CardWrapper = styled.div`
    border-radius: 16px;
    margin:14px 16px 58px 16px;
    display: flex;
    gap:8px;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 138px;
    height: 196px;
    border-radius: 16px;
    border: #ffe9d4 1px solid ;
    background-color: #fff7f0;
`

const DrinkImg = styled.img`
margin:10px;
width: 118px;
height: 126px;
border-radius: 12px;
`

const TitleFont = styled.h1`
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.003em;
    display: inline-block; 
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap; 
`;

const CardTitleWrapper = styled.div`
    width:100%;
    display:flex;
    line-height: 24px;
    gap:2px;
    justify-content: center;
    align-items: center;
`

interface BrewerlydetailCardViewProps {
    alcohols: alcoholType[]
}

const BrewerlyDetailCardView = ({ alcohols }: BrewerlydetailCardViewProps) => {
    return (<CardWrapper>
        <>
            {alcohols.map((t: alcoholType) => {
                return (<Link to={`/details/${t.alcoholId}`} key={t.alcoholId}>
                    <Card>

                        <div style={{ position: 'relative' }}>
                            <DrinkImg width={128} height={128} src={t.imageUrl} />
                        </div>
                        
                            <CardTitleWrapper>
                                <DrinkIcon width="15" fill={'#09121F'} />
                                <TitleFont>{t.name}</TitleFont>
                            </CardTitleWrapper>
                    </Card>
                </Link>)
            })}
        </>

    </CardWrapper>)
}

export default BrewerlyDetailCardView;