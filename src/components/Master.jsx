import { Fragment } from "react";
import Aside from "./Aside";
import Content from "./Content";
import NavBar from "./NavBar";
import RightSide from "./RightSide";

const Master = () => {
    return (
      <Fragment>
        <div className="container mx-auto prose prose-sm lg:prose-lg max-w-full lg:px-32">
          <NavBar />
          <div className="flex justify-between h-screen">
            {/* Aside */}
            <Aside />

            {/* Main */}
            <Content />

            {/* Rightside */}
            <RightSide />
          </div>
        </div>
      </Fragment>
    );
}

export default Master;