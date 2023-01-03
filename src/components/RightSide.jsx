import { Fragment } from "react"

const RightSide = () => {
    return (
      <Fragment>
        <div className="w-10/12 lg:w-2/12 lg:px-5 fixed lg:static top-0 -right-full">
          <ul>
            <li>Basic</li>
            <li>Elementary</li>
            <li>Pre-Intermediate A</li>
            <li>Pre-Intermediate B</li>
            <li>Entermediate A</li>
            <li>Entermediate B</li>
            <li>Advenance</li>
          </ul>
        </div>
      </Fragment>
    );
}

export default RightSide;