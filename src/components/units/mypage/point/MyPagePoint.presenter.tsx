
// import Paginations01 from '../../../commons/paginations/01/Paginations01.container'
import InfiniteScroll from 'react-infinite-scroller'
import Paginations01 from '../../../commons/paginations/01/Paginations01.container'
import {Container,Wrapper,StateWrapper,TableTop,TableBottom,MyTotal,StateLine,Row,ColumnHeaderBasic,ColumnBasic, MyCharge, MyBuy, MySell,} from './MyPagePoint.styles'
export default function MyPagePointUI(props:any){
    
    return(
        <>
        <Container>
            <Wrapper>
                <StateWrapper>
                    {/* @ts-ignore */}
                    <MyTotal isActive={props.isActive01} onClick={props.onClickMenu01}>전체내역</MyTotal>
                    <StateLine>|</StateLine>
                    {/* @ts-ignore */}
                    <MyCharge isActive={props.isActive02} onClick={props.onClickMenu02}>충전내역</MyCharge>
                    <StateLine>|</StateLine>
                    {/* @ts-ignore */}
                    <MyBuy isActive={props.isActive03} onClick={props.onClickMenu03}>구매내역</MyBuy>
                    <StateLine>|</StateLine>
                    {/* @ts-ignore */}
                    <MySell isActive={props.isActive04} onClick={props.onClickMenu04}>판매내역</MySell>
                </StateWrapper>
                {props.isActive01 && 
                    <div>
                    <TableTop />
                    <Row>
                        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
                        <ColumnHeaderBasic>내용</ColumnHeaderBasic>
                        <ColumnHeaderBasic>거래 및 충전내역</ColumnHeaderBasic>
                        <ColumnHeaderBasic>잔액</ColumnHeaderBasic>
                    </Row>
                    <InfiniteScroll
              style={{width:"100%"}}
              pageStart={0}
              loadMore={props.onLoadMore}
              hasMore={props.hasMore}
              
            >
                    {props.AllData?.fetchPointTransactions.map((data:any)=>(
                    <Row key={data._id}>
                        <ColumnBasic>{data.createdAt.split('T')[0]}</ColumnBasic>
                        <ColumnBasic>{data.status}</ColumnBasic>
                        <ColumnBasic>{data.amount} <span style={{color:"#ffd400",fontWeight:"bold"}}>P</span></ColumnBasic>
                        <ColumnBasic>{data.balance} <span style={{color:"#ffd400",fontWeight:"bold"}}>P</span></ColumnBasic>
                    </Row>
                    ))}
                    </InfiniteScroll>
                    <TableBottom />
                    </div>
                    }

                {props.isActive02 && 
                    <div>
                    <TableTop />
                    <Row>
                        <ColumnHeaderBasic>충전일</ColumnHeaderBasic>
                        <ColumnHeaderBasic>결제 ID</ColumnHeaderBasic>
                        <ColumnHeaderBasic>충전 내역</ColumnHeaderBasic>
                        <ColumnHeaderBasic>잔액</ColumnHeaderBasic>
                    </Row>
                    {props.data?.fetchPointTransactionsOfLoading.map((data:any)=>(
                    <Row key={data._id}>
                        <ColumnBasic>{data.createdAt.split('T')[0]}</ColumnBasic>
                        <ColumnBasic>{data.impUid}</ColumnBasic>
                        <ColumnBasic>{data.amount} <span style={{color:"#ffd400",fontWeight:"bold"}}>P</span></ColumnBasic>
                        <ColumnBasic>{data.balance} <span style={{color:"#ffd400",fontWeight:"bold"}}>P</span></ColumnBasic>
                    </Row>
                    ))}
                    <TableBottom />
                    <Paginations01
          refetch={props.refetch}
          count={props.DataLoadingCount?.fetchPointTransactionsCountOfLoading}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
        />
                    </div>
                    }

                    {props.isActive03 && 
                    <div>
                    <TableTop />
                    <Row>
                        <ColumnHeaderBasic>거래일</ColumnHeaderBasic>
                        <ColumnHeaderBasic>제목</ColumnHeaderBasic>
                        <ColumnHeaderBasic>거래내역</ColumnHeaderBasic>
                        <ColumnHeaderBasic>거래 후 잔액</ColumnHeaderBasic>
                        <ColumnHeaderBasic>판매자</ColumnHeaderBasic>
                    </Row>
                    {props.BuyData?.fetchPointTransactionsOfBuying.map((data:any)=>(
                    <Row key={data._id}>
                        <ColumnBasic>{data.createdAt.split('T')[0]}</ColumnBasic>
                        <ColumnBasic>{data.useditem.name}</ColumnBasic>
                        <ColumnBasic>{data.amount} <span style={{color:"#ffd400",fontWeight:"bold"}}>P</span></ColumnBasic>
                        <ColumnBasic>{data.balance} <span style={{color:"#ffd400",fontWeight:"bold"}}>P</span></ColumnBasic>
                        <ColumnBasic>{data.user?.name}</ColumnBasic>
                    </Row>
                    ))}
                    <TableBottom />
                    <Paginations01
          refetch={props.BuyRefetch}
          count={props.DataBuyingCount?.fetchPointTransactionsCountOfBuying}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
        />
                    </div>
                    }

                    {props.isActive04 && 
                    <div>
                    <TableTop />
                    <Row>
                        <ColumnHeaderBasic>거래일</ColumnHeaderBasic>
                        <ColumnHeaderBasic>제목</ColumnHeaderBasic>
                        <ColumnHeaderBasic>거래내역</ColumnHeaderBasic>
                        <ColumnHeaderBasic>거래 후 잔액</ColumnHeaderBasic>
                    </Row>
                    {props.SellingData?.fetchPointTransactionsOfSelling.map((data:any)=>(
                    <Row key={data._id}>
                        <ColumnBasic>{data.createdAt.split('T')[0]}</ColumnBasic>
                        <ColumnBasic>{data.useditem.name}</ColumnBasic>
                        <ColumnBasic>{data.amount} <span style={{color:"#ffd400",fontWeight:"bold"}}>P</span></ColumnBasic>
                        <ColumnBasic>{data.balance} <span style={{color:"#ffd400",fontWeight:"bold"}}>P</span></ColumnBasic>
                    </Row>
                    ))}
                    <TableBottom />
                    <Paginations01
          refetch={props.SellingRefetch}
          count={props.DataSellingCount?.fetchPointTransactionsCountOfSelling}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
        />
                    </div>
                    }
            </Wrapper>
        </Container>
        </>
    )
}