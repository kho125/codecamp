import { useQuery } from "@apollo/client";
import { useState } from "react";
import MyPagePointUI from "./MyPagePoint.presenter";
import { FETCH_POINT_TRANSACTIONS, FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING, FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING, FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING, FETCH_POINT_TRANSACTIONS_OF_BUYING, FETCH_POINT_TRANSACTIONS_OF_LOADING, FETCH_POINT_TRANSACTIONS_OF_SELLING } from "./MyPagePoint.queries";

export default function MyPagePoint(){
    const [isActive01,setIsActive01] = useState(true)
    const [isActive02,setIsActive02] = useState(false)
    const [isActive03,setIsActive03] = useState(false)
    const [isActive04,setIsActive04] = useState(false)
    const [startPage,setStartPage] = useState(1)
    const {data,refetch} = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING,{variables:{page:startPage}})
    const {data:AllData,fetchMore, refetch:AllDataRefetch} = useQuery(FETCH_POINT_TRANSACTIONS, {variables:{page:startPage}})
    const {data:BuyData,refetch:BuyRefetch} = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING,{variables:{page:startPage}})
    const {data:SellingData,refetch:SellingRefetch} = useQuery(FETCH_POINT_TRANSACTIONS_OF_SELLING,{variables:{page:startPage}})
    const {data:DataLoadingCount} = useQuery(FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING)
    const {data:DataBuyingCount} = useQuery(FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING)
    const {data:DataSellingCount} = useQuery(FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING)
    const [hasMore,setHasMore] = useState(true)
console.log(AllData?.fetchPointTransactions.length)

    const onLoadMore =() =>{
        if(!AllData) return
        fetchMore({
          variables:{
            page: Math.floor(AllData?.fetchPointTransactions.length / 10) + 1
          },
          updateQuery: (prev,{fetchMoreResult})=>{
            // @ts-ignore
            if(!fetchMoreResult.fetchPointTransactions.length) setHasMore(false)
            return{
              fetchUseditems:[
                // @ts-ignore
                ...prev.fetchPointTransactions, ...fetchMoreResult.fetchPointTransactions
              ]
            }
          }
        })
      }

    const onClickMenu01 = () => {
        setIsActive01(true)
        setIsActive02(false)
        setIsActive03(false)
        setIsActive04(false)
    }
    const onClickMenu02 = () => {
        setIsActive01(false)
        setIsActive02(true)
        setIsActive03(false)
        setIsActive04(false)
    }
    const onClickMenu03 = () => {
        setIsActive01(false)
        setIsActive02(false)
        setIsActive03(true)
        setIsActive04(false)
    }
    const onClickMenu04 = () => {
        setIsActive01(false)
        setIsActive02(false)
        setIsActive03(false)
        setIsActive04(true)
    }
    return(
        <MyPagePointUI
        data={data}
        refetch={refetch}
        BuyRefetch={BuyRefetch}
        SellingRefetch={SellingRefetch}
        AllDataRefetch={AllDataRefetch}
        hasMore={hasMore}
        onLoadMore={onLoadMore}
        AllData={AllData}
        BuyData={BuyData}
        SellingData={SellingData}
        DataLoadingCount={DataLoadingCount}
        DataBuyingCount={DataBuyingCount}
        DataSellingCount={DataSellingCount}
        startPage={startPage}
        setStartPage={setStartPage}
        isActive01={isActive01}
        isActive02={isActive02}
        isActive03={isActive03}
        isActive04={isActive04}
        onClickMenu01={onClickMenu01}
        onClickMenu02={onClickMenu02}
        onClickMenu03={onClickMenu03}
        onClickMenu04={onClickMenu04}
        />
    )
}