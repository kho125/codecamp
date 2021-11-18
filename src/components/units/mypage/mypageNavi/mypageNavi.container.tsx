import { useQuery } from "@apollo/client";
import MyPageNaveUI from "./mypageNavi.presenter";
import { FETCH_USER_LOGGED_IN } from "./mypageNavi.queries";

export default function MyPageNavi(props:any){
    
    const {data} = useQuery(FETCH_USER_LOGGED_IN)
    
    return(
        <MyPageNaveUI
        data={data}
        isActive01={props.isActive01}
        isActive02={props.isActive02}
        isActive03={props.isActive03}
        onClickMyItem={props.onClickMyItem}
        onClickMyPoint={props.onClickMyPoint}
        onClickMyProfile={props.onClickMyProfile}
        />
    )
}