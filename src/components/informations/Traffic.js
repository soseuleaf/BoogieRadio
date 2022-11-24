import React from "react";
import { Map, MapTypeId } from "react-kakao-maps-sdk";

function Traffic() {
  const { kakao } = window;
  const Main = () => {
    return (
      <>
        <Map // 지도를 표시할 Container
          center={{
            // 지도의 중심좌표 - 서울특별시청
            lat: 37.566826,
            lng: 126.9786567,
          }}
          style={{
            width: "450px",
            height: "450px",
          }}
          level={8} // 지도의 확대 레벨
        >
          {/* 지도에 교통정보를 표시하도록 지도타입을 추가합니다 */}
          <MapTypeId type={kakao.maps.MapTypeId.TRAFFIC} />
        </Map>
      </>
    );
  };
  return <Main />;
}
export default Traffic;
