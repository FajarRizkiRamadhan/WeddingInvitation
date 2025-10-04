import React from "react";
import Header from "./header";
const Navbar =({data1, data2}) => {
    return(
        <>
        <Header couple={data1} guest={data2} />
        </>
    )
}
export default Navbar;
