import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import { useRouter } from "next/router";
import logo from "../../assets/RANGERS-web-icon.webp";
import Image from "next/image";
import styled from "styled-components";
import { setIsmMenuOpen } from "../../state/mobilemenu";
import { AiOutlineHeart } from "react-icons/ai";
import { setIsWishListOpen } from "../../state/wishlist";
import { Color } from "../../utils/color";
const StyledSecNavBar = styled.section`
  width: 100%;
  margin: auto;
  height: 100px;
  background-color: ${Color.primaryColor};
  position: fixed;
  z-index: 10;

  .secBar {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    width: 70%;
    margin: auto;
    height: 100%;
  }

  li {
    font-size: 17px;
    font-weight: 600;
    list-style: none;
    color: #fff;
    letter-spacing: 1.3px;
    text-transform: uppercase;
    /* padding: 10px; */
    width: 15%;
    text-align: center;
    border: 10px solid transparent;
  }

  li:hover {
    background-color: #fff;
    border: 10px solid ${Color.primaryColor};
    color: #000;
    cursor: pointer;
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
    _id: "hjdhd",
    content: "Matches",
    link: "#",
  },
  {
    _id: "hjdhddd",
    content: "The Club",
    link: "men",
  },
  {
    _id: "hjdhwwddd",
    content: "News",
    link: "boys",
  },
  {
    _id: "hjdhdssdd",
    content: "Players",
    link: "girls",
  },
  {
    _id: "hjdddhddd",
    content: "Media",
    link: "accessories",
  },
  {
    _id: "hjdddhddd",
    content: "Shop",
    link: "accessories",
  },
  {
    _id: "hjdddhddd",
    content: "Contact",
    link: "accessories",
  },
];
function Navbar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const wishList = useSelector((state) => state.wishList.wishList);
  const router = useRouter();
  return (
    <>
      <StyledSecNavBar className="">
        <main className="secBar">
          {secNavbar.map((item) => (
            <li
              key={item._id}
              onClick={() => {
                router.push({
                  pathname: "/products",
                });
              }}
            >
              {item.content}
            </li>
          ))}
        </main>
      </StyledSecNavBar>
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        height="60px"
        backgroundColor="rgba(255, 255, 255, 1)"
        color="black"
        position="fixed"
        top="0"
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
            {/* <Badge
              badgeContent={wishList.length}
              color="secondary"
              invisible={wishList.length === 0}
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
                onClick={() => dispatch(setIsWishListOpen({}))}
                sx={{ color: "black" }}
              >
                <AiOutlineHeart />
              </IconButton>
            </Badge> */}

            {/* <IconButton
              sx={{ color: "black" }}
              onClick={() => router.push("/profile")}
            >
              <PersonOutline />
            </IconButton> */}
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
                sx={{ color: "black" }}
              >
                <ShoppingBagOutlined />
              </IconButton>
            </Badge>
            <IconButton
              onClick={() => dispatch(setIsmMenuOpen({}))}
              sx={{ color: "black" }}
            >
              <MenuOutlined />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
