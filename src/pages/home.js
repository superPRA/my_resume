import React, { useContext } from "react";
import Nav from "../component/nav";
import PcardStart from "../component/PcardStart";
import AcardStart from "../component/AcartStart";
import { APIcontext } from "../App";
import Loading from "../component/Loading";
import Error from "../component/Error";

export default function Home() {
  const API = useContext(APIcontext);
  if (API.pouryaApi.loading || API.alirezaApi.loading) {
    return <Loading />;
  }
  if (!(API.pouryaApi.loading || API.alirezaApi.loading) && (API.pouryaApi.error || API.alirezaApi.error)) {return <Error />}
  return (
    <>
      <Nav />
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-items-center L">
        <PcardStart />
        <AcardStart />
      </div>
    </>
  );
}
