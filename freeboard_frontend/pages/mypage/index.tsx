import { useState } from "react";
import withAuth from "../../src/components/commons/hocs/withAuth";
import MyPageNavi from "../../src/components/units/mypage/mypageNavi/mypageNavi.container";
import MyPagePoint from "../../src/components/units/mypage/point/MyPagePoint.container";
import Profile from "../../src/components/units/mypage/profile/profile.container";
import SellingItem from "../../src/components/units/mypage/sellingItem/sellingitem.container";

function MyPage(){

    const [isActive01,setIsActive01] = useState(true)
    const [isActive02,setIsActive02] = useState(false)
    const [isActive03,setIsActive03] = useState(false)

    const onClickMyItem = () => {
        setIsActive01(true)
        setIsActive02(false)
        setIsActive03(false)
    }
    const onClickMyPoint = () => {
        setIsActive01(false)
        setIsActive02(true)
        setIsActive03(false)
    }
    const onClickMyProfile = () => {
        setIsActive01(false)
        setIsActive02(false)
        setIsActive03(true)
    }
    return(
        <>
        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"center"}}>
            <MyPageNavi 
                isActive01={isActive01}
                isActive02={isActive02}
                isActive03={isActive03}
                onClickMyItem={onClickMyItem}
                onClickMyPoint={onClickMyPoint}
                onClickMyProfile={onClickMyProfile}
            />
            {isActive01 && <SellingItem/>}
            {isActive02 && <MyPagePoint/>}
            {isActive03 && <Profile/>}
            
        </div>
        </>
    )
}
export default withAuth(MyPage)