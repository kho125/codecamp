
import {Container,Wrapper,StateWrapper,MyItem,MyPick,TableTop,TableBottom,StateLine,Row,ColumnHeaderBasic,ColumnHeaderTitle,ColumnBasic,ColumnTitle,ColumnBasicDelete} from './sellingitem.styles'
export default function SellingItemUI(props:any){
    return(
        <>
        <Container>
            <Wrapper>
                <StateWrapper>
                    {/* @ts-ignore */}
                    <MyItem isActive={props.isActive01} onClick={props.onClickMenu01}>내가 올린 상품</MyItem>
                    <StateLine>|</StateLine>
                    {/* @ts-ignore */}
                    <MyPick isActive={props.isActive02} onClick={props.onClickMenu02}>내가 찜한 상품</MyPick>
                </StateWrapper>
                    {props.isActive01 &&
                    <div>
                    <TableTop />
                    <Row>
                        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
                        <ColumnHeaderTitle>상품명</ColumnHeaderTitle>
                        <ColumnHeaderBasic></ColumnHeaderBasic>
                        <ColumnHeaderBasic>판매가격</ColumnHeaderBasic>
                        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
                        <ColumnHeaderBasic></ColumnHeaderBasic>
                    </Row>
                    {/* @ts-ignore */}
                {props.data?.fetchUseditemsISold.map((data,index)=>(
                    <Row key={data._id} onClick={props.onClickItem(data)}> 
                        <ColumnBasic>{index+1}</ColumnBasic>
                        <ColumnTitle>{data.name}</ColumnTitle>
                        <ColumnBasic style={{color:"#ffd400"}}>{data.buyer?.name ? '판매완료' : ""}</ColumnBasic>
                        <ColumnBasic>{data.price}  <span style={{color:"#ffd400",fontWeight:"bold"}}>P</span></ColumnBasic>
                        <ColumnBasic>{data.createdAt.split('T')[0]}</ColumnBasic>
                        <ColumnBasicDelete onClick={props.onClickDelete(data)}>삭제</ColumnBasicDelete>
                    </Row>
                    ))}
                    <TableBottom />
                    </div>
                    }

                    {props.isActive02 && 
                    <div>
                    <TableTop />
                    <Row>
                        <ColumnHeaderBasic style={{width:"10%"}}>번호</ColumnHeaderBasic>
                        <ColumnHeaderTitle style={{width:"30%"}}>상품명</ColumnHeaderTitle>
                        <ColumnHeaderBasic style={{width:"10%"}}></ColumnHeaderBasic>
                        <ColumnHeaderBasic style={{width:"20%"}}>판매가격</ColumnHeaderBasic>
                        <ColumnHeaderBasic style={{width:"20%"}}>판매자</ColumnHeaderBasic>
                        <ColumnHeaderBasic style={{width:"10%"}}>날짜</ColumnHeaderBasic>
                    </Row>
                    {/* @ts-ignore */}
                    {props.PickData?.fetchUseditemsIPicked.map((data,index)=>(
                    <Row key={data._id} onClick={props.onClickItem(data)}> 
                        <ColumnBasic style={{width:"10%"}}>{index+1}</ColumnBasic>
                        <ColumnTitle style={{width:"30%"}}>{data.name}</ColumnTitle>
                        <ColumnBasic style={{color:"#ffd400",width:"10%"}}>{data.buyer?.name ? '판매완료' : ""}</ColumnBasic>
                        <ColumnBasic style={{width:"20%"}}>{data.price}  <span style={{color:"#ffd400",fontWeight:"bold"}}>P</span></ColumnBasic>
                        <ColumnBasic style={{width:"20%"}}>{data.seller?.name}</ColumnBasic>
                        <ColumnBasic style={{width:"10%"}}>{data.createdAt.split('T')[0]}</ColumnBasic>
                    </Row>
                    ))}
                    <TableBottom />
                    </div>}
            </Wrapper>
        </Container>
        </>
    )
}