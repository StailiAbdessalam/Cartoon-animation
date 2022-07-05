import React from "react";
import Link from "next/link";
import styleNavigation from "../../styles/layout/navigation.module.css";

const navigation = () => {
  return (
    <>
      <div className={styleNavigation.footer}>
        <ul className={styleNavigation.main}>
          <li className={styleNavigation.li}>
            <a>
              <Link href="/">Home</Link>
            </a>
          </li>
          <li className={styleNavigation.li}>
            <a>
              <Link href="/Blog">Blog</Link>
            </a>
          </li>
          <li className={styleNavigation.li}>
            <a>
              <Link href="/">Favorie</Link>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default navigation;
