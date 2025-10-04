import React from "react";
import Countdown from "./countdown";

const Hitung=({tanggal}) =>{
    return(
    <>
    <Countdown date={tanggal}/>
    </>
    );

};

export default Hitung;