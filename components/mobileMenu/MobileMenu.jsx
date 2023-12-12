import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setIsmMenuOpen } from "../../state/mobilemenu";
import { useRouter } from "next/router";
import { BaseFontSize, Color } from "../../utils/color";

const secNavbar = [
  {
    _id: "hjdhd",
    content: "Home",
    link: "/",
  },
  // {
  //   _id: "hjdhhjagad",
  //   content: "The Club",
  //   link: "#",
  // },
  // {
  //   _id: "hjdhajauddd",
  //   content: "Shop",
  //   link: "products",
  // },
  {
    _id: "hjddjdjahadhddd",
    content: "News",
    link: "News",
  },
  {
    _id: "hjdhwwdshhsdd",
    content: "Fixtures",
    link: "_fixtures",
  },

  {
    _id: "hjdddauaushddd",
    content: "Videos",
    link: "_highlights",
  },
];

const MobileMenuContainer = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  .menuSubContainer {
    width: 100%;
    height: 80%;
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .closeButton {
    background-color: ${Color.primaryColor};
    padding: 9px;
    font-weight: 800;
    color: #fff;
    border-radius: 4px;
  }
`;

const MenuItem = styled.div`
  font-size: calc(${BaseFontSize} + 1vw);
  margin-bottom: 20px;
  line-height: 2;
  font-weight: 700;
  color: #fff;
  padding: 5px;
  text-decoration: none;
  background-color: ${Color.primaryColor};
  border-radius: 2px;
  width: 70%;
  cursor: pointer;
  letter-spacing: 2px;
  :hover {
    text-decoration: underline;
  }
`;

function MobileMenu() {
  const dispatch = useDispatch();
  const isMobileMenu = useSelector((state) => state.mMenu.isMobileMenuOpen);

  const router = useRouter();
  return (
    <MobileMenuContainer style={{ display: isMobileMenu ? "flex" : "none" }}>
      <div className="menuSubContainer">
        {secNavbar.map((item) => (
          <MenuItem
            key={item._id}
            onClick={() => {
              router.push({
                pathname: `/${item.link}`,
              }),
                dispatch(setIsmMenuOpen({}));
            }}
          >
            <span onClick={() => dispatch(setIsmMenuOpen({}))}>
              {item.content}
            </span>
          </MenuItem>
        ))}
        <button
          className="closeButton"
          onClick={() => dispatch(setIsmMenuOpen({}))}
        >
          Close
        </button>
      </div>
    </MobileMenuContainer>
  );
}

export default MobileMenu;
