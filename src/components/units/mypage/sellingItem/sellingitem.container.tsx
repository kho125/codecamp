import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import SellingItemUI from "./sellingitem.presenter";
import { DELETE_USED_ITEM, FETCH_USED_ITEMS_COUNT_I_SOLD, FETCH_USED_ITEMS_I_PICKED, FETCH_USED_ITEMS_I_SOLD } from "./sellingitem.queries";

export default function SellingItem(){
    const router = useRouter()
    const [isActive01,setIsActive01] = useState(true)
    const [isActive02,setIsActive02] = useState(false)
    const {data} = useQuery(FETCH_USED_ITEMS_I_SOLD)
    const {data:PickData} = useQuery(FETCH_USED_ITEMS_I_PICKED)
    const {data:ISoldData} = useQuery(FETCH_USED_ITEMS_COUNT_I_SOLD)
    const [deleteUseditem] = useMutation(DELETE_USED_ITEM)
    const onClickMeun01 = () => {
        setIsActive01(true)
        setIsActive02(false)
    }
    const onClickMeun02 = () => {
        setIsActive01(false)
        setIsActive02(true)
    }
    const onClickItem = (data:any) => () => {
        router.push(`/market/${data._id}`)
    }
    const onClickDelete = (data:any) => async () => {
        try{
          await deleteUseditem({
            variables:{
              useditemId: data._id
            }
          })
        }catch(error){alert(error.message)}
        router.push('/mypage/')
      }
    return(
        <SellingItemUI
        data={data}
        ISoldData={ISoldData}
        PickData={PickData}
        isActive01={isActive01}
        isActive02={isActive02}
        onClickMenu01={onClickMeun01}
        onClickMenu02={onClickMeun02}
        onClickItem={onClickItem}
        onClickDelete={onClickDelete}
        />
    )
}