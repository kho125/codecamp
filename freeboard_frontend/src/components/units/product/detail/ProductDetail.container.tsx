import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  FETCH_USED_ITEMS_I_PICKED,
  TOGGLE_USED_ITEM_PICK,
} from "./ProductDetail.queries";
import { useState, useEffect } from "react";

export default function ProductDetail() {
  const router = useRouter();
  const [istoggled, setIstoggled] = useState(false);
  const [toggleitem] = useMutation(TOGGLE_USED_ITEM_PICK);

  const [createpointtransactionofbuyingandselling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
    { variables: { useditemId: router.query.useditemId } }
  );

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });
  console.log(data);
  const { data: isToggled } = useQuery(FETCH_USED_ITEMS_I_PICKED);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=62787850897ee63fa769d58c77900f98&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            37.48535119467572,
            126.90157254106144
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          37.48535119467572,
          126.90157254106144
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            //   var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            //   message += "경도는 " + latlng.getLng() + " 입니다";

            //   var resultDiv = document.getElementById("clickLatlng");
            //   resultDiv.innerHTML = message;
          }
        );
      });
    };
  });

  // console.log(istoggled);

  const gotoMain = () => {
    router.push("/product/main");
  };

  function onClickMoveToEdit() {
    router.push(`/product/detail/${router.query.useditemId}/edit`);
  }

  const toggle = async () => {
    const result = await toggleitem({
      variables: { useditemId: router.query.bbb },
    });
    console.log(result.data.toggleUseditemPick);
    if (istoggled) setIstoggled(false);
    if (!istoggled) setIstoggled(true);
    // console.log(isToggled);
  };
  // console.log(isToggled);

  const purchase = async () => {
    try {
      await createpointtransactionofbuyingandselling({
        variables: {
          useritemId: router.query.useditemId,
        },
      });
      alert("GOOD");
    } catch (error) {
      alert(error.message);
    }
  };

  if (typeof window === "undefined") return <></>;
  // console.log(router.query.useditemId);
  // console.log(data);
  return (
    <ProductDetailUI
      data={data}
      gotoMain={gotoMain}
      onClickMoveToEdit={onClickMoveToEdit}
      purchase={purchase}
      istoggled={istoggled}
      toggle={toggle}
    />
  );
}

// import { useMutation, useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
// import { useContext } from "react";
// import { GlobalContext } from "../../../../../pages/_app";
// import MarketDetailUI from "./ProductDetail.presenter";
// import {
//   DELETE_USED_ITEM,
//   FETCH_USED_ITEM,
//   TOGGLE_USED_ITEM_PICK,
// } from "./ProductDetail.queries";

// export default function MarketDetail() {
//   const router = useRouter();
//   const { userInfo } = useContext(GlobalContext);
//   const { data } = useQuery(FETCH_USED_ITEM, {
//     variables: { useditemId: router.query.detailpages },
//   });
//   const [toggleUseditemPickMutation] = useMutation(TOGGLE_USED_ITEM_PICK);
//   const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

//   function onClickMoveToList() {
//     router.push("/product/main");
//   }

//   // !----- 찜하기 토글 -----!//
//   const onClickToggle = async () => {
//     try {
//       await toggleUseditemPickMutation({
//         variables: { useditemId: router.query.detailpages },
//         refetchQueries: [
//           {
//             query: FETCH_USED_ITEM,
//             variables: {
//               useditemId: router.query.detailpages,
//             },
//           },
//         ],
//       });
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   // !----- 게시글 삭제하기 -----!//
//   const onClickDelete = async () => {
//     try {
//       await deleteUseditem({
//         variables: { useditemId: router.query.detailpages },
//       });
//       alert("해당 글을 삭제합니다.");
//       router.push("/market/list");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <MarketDetailUI
//       data={data}
//       onClickMoveToList={onClickMoveToList}
//       userInfo={userInfo}
//       onClickToggle={onClickToggle}
//       onClickDelete={onClickDelete}
//     />
//   );
// }
