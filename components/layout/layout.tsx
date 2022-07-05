import { Fragment } from "react";
import NAvigation from "./navigation";
import Footer from "./footer";
import stylenav from '../../styles/layout/navigation.module.css'
const layout = (props : any) => {
  return (
    <Fragment>
      <NAvigation />
      <div className={stylenav.div}></div>
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default layout;
