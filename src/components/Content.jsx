import { Fragment } from "react"
import { Routes, Route, Link } from "react-router-dom";
import VToBe from "../pages/VToBe";
import VToHave from "../pages/VToHave";

const Content = () => {
    return (
      <Fragment>
        <div className=" lg:w-8/12 px-5">
          <Routes>
            <Route path="/" element={<VToBe />} />
            <Route path="/vtohave" element={<VToHave />} />
          </Routes>
        </div>
      </Fragment>
    );
}

export default Content;