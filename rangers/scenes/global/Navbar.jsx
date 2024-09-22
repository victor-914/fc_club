import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, useMediaQuery } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
} from "@mui/icons-material";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import { useRouter } from "next/router";
import logo from "../../assets/RANGERS-web-icon.webp";
import Image from "next/image";
import styled from "styled-components";
import { setIsmMenuOpen } from "../../state/mobilemenu";
import { Color } from "../../utils/color";
const StyledMenuLi = styled.li`
  font-size: 17px;
  font-weight: 600;
  list-style: none;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  width: 15%;
  text-align: center;
  border: 10px solid transparent;
  background-color: ${(props) =>
    props.path === props.link ? "#fff" : "transparent"};
  color: ${(props) => (props.path === props.link ? "#000" : "#fff")};
  border: ${(props) =>
    props.path === props.link
      ? `10px solid ${Color.primaryColor}`
      : "10px solid transparent"};

  :hover {
    background-color: #fff;
    border: 10px solid ${Color.primaryColor};
    color: #000;
    cursor: pointer;
  }
`;

const StyledSecNavBar = styled.section`
  width: 100%;
  margin: auto;
  height: 100px;
  background-color: transparent;
  position: fixed;
  padding-top: 10px;
  z-index: 10;
   background: ${Color.primaryColor};

  .secBar {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    width: 70%;
    margin: auto;
    height: 100%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    display: none;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    display: none;
  }
`;
const secNavbar = [
  {
    _id: "hjxssdhd",
    content: "Fixtures",
    link: "/_fixtures",
  },
  // {
  //   _id: "hjdhddd",
  //   content: "The Club",
  //   link: "/_club",
  // },
  {
    _id: "hjdhwwdsadd",
    content: "News",
    link: "/News",
  },
  {
    _id: "hjdddssaaddhddd",
    content: "Videos",
    link: "/_highlights",
  },
  {
    _id: "hjdddhnajdddd",
    content: "Shop",
    link: "/products",
  },
  // {
  //   _id: "hjdddhddd",
  //   content: "Contact",
  //   link: "accessories",
  // },
  {
    _id: "hjdddhdjkdjddd",
    content: "Profile",
    link: "profile",
  },
];

function Navbar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const router = useRouter();
  const isSmallScreen = useMediaQuery("(max-width:1200px)");

  return (
    <>
    <Box
        display="flex"
        alignItems="center"
        width="100%"
        height="60px"
        backgroundColor="rgba(255, 255, 255, 1)"
        color="black"
        position="fixed"
        top="0px"
        left="0"
        zIndex="40"
      >
        <Box
          width="80%"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            onClick={() => router.push("/")}
            sx={{ "&:hover": { cursor: "pointer" } }}
            color={shades.secondary[500]}
            width="160px"
            height="50px"
            position="relative"
          >
            <Image src={logo} layout="fill" />
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            columnGap="20px"
            zIndex="2"
          >
            <IconButton
              sx={{ color: "black" }}
              onClick={() => router.push("/profile")}
            >
              <PersonOutline />
            </IconButton>
            <Badge
              badgeContent={cart.length}
              color="secondary"
              invisible={cart.length === 0}
              sx={{
                "& .MuiBadge-badge": {
                  right: 5,
                  top: 5,
                  padding: "0 4px",
                  height: "14px",
                  minWidth: "13px",
                },
              }}
            >
              <IconButton
                onClick={() => dispatch(setIsCartOpen({}))}
                sx={{
                  color: "black",
                }}
              >
                <ShoppingBagOutlined />
              </IconButton>
            </Badge>
            <IconButton
              onClick={() => dispatch(setIsmMenuOpen({}))}
              sx={{
                color: "black",
                display: !isSmallScreen ? "none" : "block",
              }}
            >
              <MenuOutlined />
            </IconButton>
          </Box>
        </Box>
      </Box>
  

      <StyledSecNavBar className="">
        <main className="secBar">
          {secNavbar.map((item) => (
            <StyledMenuLi
              path={router.pathname}
              link={item.link}
              // style={{
              //   color:
              //     router.pathname.includes(`${item.page}`) ? "#000" : "#fff",
              //     backgroundColor:  router.pathname === `${item.page}` ? "#000" : "transparent",
              //     border:router.pathname.includes(`${item.page}`) ? `10px solid green` : `10px solid ${Color.primaryColor}`
              // }}
              key={item._id}
              onClick={() => {
                router.replace({
                  pathname: item.link,
                });
              }}
            >
              {item.content}
            </StyledMenuLi>
          ))}
        </main>
      </StyledSecNavBar>
      
    </>
  );
}


export default Navbar;
