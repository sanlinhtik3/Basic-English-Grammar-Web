import { Fragment, useState } from "react"
import { Routes, Route, Link, NavLink } from "react-router-dom";

const Aside = () => {
    const [closeAside, setCloseAside] = useState(false);

    const ControlAside = () => {
      setCloseAside(!closeAside);
      console.log(closeAside)
    };

    // Nav Link Active
    const active = "no-underline hover:border-green-100 border-l border-green-300 text-green-500 p-1 px-4";
    const noactive = "no-underline hover:border-green-100 border-l border-transparent p-1 px-4";

    return (
      <Fragment>
        <div onClick={ControlAside} className=" fixed top-0 right-0 lg:hidden">
          Menu
        </div>
        <div
          className={`w-10/12 lg:w-2/12 fixed h-screen lg:h-auto transition-all lg:static top-0 -left-full bg-slate-50 shadow ${closeAside ? "left-0" : "-left-full"}`}
        >
          <ul className="list-none lg:p-0 p-0 border-l border-slate-100 flex flex-col">
            <NavLink onClick={ControlAside} className={({ isActive }) => isActive ? active : noactive} to="/">V to Be</NavLink>
            <NavLink onClick={ControlAside} className={({ isActive }) => isActive ? active : noactive} to="/vtohave">V to Have</NavLink>
          </ul>
        </div>
      </Fragment>
    );
}

export default Aside;