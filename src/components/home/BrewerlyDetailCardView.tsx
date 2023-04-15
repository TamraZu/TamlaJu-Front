import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { AlcoholType } from 'types/DrinkType';
import { ReactComponent as DrinkIcon } from 'atoms/icons/DrinkIcon.svg';
import IsDrinkIcon from 'atoms/icons/IsDrinkedOrange.svg';
import ImageComp, { ImageInterface } from 'components/common/ImageComp';
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

const DrinkImg = styled(ImageComp)<ImageInterface>`
margin:10px;
width: 128px;
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

const DrinkStamp = styled.img`
    position:absolute;
    top:14px;
    right:14px;
`

const StyledDrinkedSubText = styled.div`
    font-size:13px;
    color:#858899;
    width:100%;
    text-align:center;
`

interface BrewerlydetailCardViewProps {
    alcohols: AlcoholType[]
}

const BrewerlyDetailCardView = ({ alcohols }: BrewerlydetailCardViewProps) => {
    return (<CardWrapper>
        <>
            {alcohols.map((t: AlcoholType) => {
                return (<Link to={`/details/${t.alcoholId}`} key={t.alcoholId}>
                    <Card>

                        <div style={{ position: 'relative' }}>
                            <DrinkImg alt={'test'} size={{width:128, height:128}} src={t.imageUrl} />
                            {t.hasAte ? <DrinkStamp src={IsDrinkIcon}/> : null }
                        </div>
                        
                            <CardTitleWrapper>
                                <DrinkIcon width="15" fill={'#09121F'} />
                                <TitleFont>{t.name}</TitleFont>
                                
                            </CardTitleWrapper>
                            {t.hasAte ? <StyledDrinkedSubText>마셔본 술이에요</StyledDrinkedSubText> : null}
                    </Card>
                </Link>)
            })}
        </>

    </CardWrapper>)
}

export default BrewerlyDetailCardView;