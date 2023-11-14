import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Product from "../../components/shopProduct/ShopProduct";
import { BaseFontSize, Color } from "../../utils/color";
import Kit from "../../assets/Rangers Kit1.png";
import Kit2 from "../../assets/Rangers Kit1.png";
const ItemDetails = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const [product, setProduct] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setProduct(data?.data);
  }, [data]);

  console.log(data, "@itemDetail");

  return (
    <StyledItemsPage>
      <header className="breadCrumb"></header>
      <div className="imgCont">
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          swipeable={false}
          showStatus={false}
          autoPlay={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <IconButton
              onClick={onClickHandler}
              sx={{
                position: "absolute",
                top: "50%",
                left: "0",
                color: "white",
                padding: "5px",
                zIndex: "10",
              }}
            >
              <NavigateBeforeIcon sx={{ fontSize: 40 }} />
            </IconButton>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <IconButton
              onClick={onClickHandler}
              sx={{
                position: "absolute",
                top: "50%",
                right: "0",
                color: "white",
                padding: "5px",
                zIndex: "10",
              }}
            >
              <NavigateNextIcon sx={{ fontSize: 40 }} />
            </IconButton>
          )}
        >
          {[1, 2].map((texture, index) => (
            <div className="imageContainer" key={`carousel-image-${index}`}>
              <Image
                src={Kit}
                alt={`carousel-${index}`}
                width={"300px"}
                height={"400px"}
                layout="fixed"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="detailsCont">
        <div className="product_title">
          <main className="title">Arsenal Eco Gunnersaurus Bag Buddy</main>
          <div className="price_details">&#8358;40,000</div>
          <div className="buttonCont">
            <button>ADD TO WISHLIST</button>
            <button>ADD TO CART</button>
          </div>
        </div>
        <div className="product_info">
          <header className="product_info_header">Product info</header>
          <main className="info">
            Our much loved Gunnersaurus is now an adorable, eco-friendly
            miniature. Made from recycled plastic bottles, it's the accessory
            your keys or kids' school bag cannot (and should not!) live without.
            Embroidered Club crest Metal ring and hook Made from recycled
            plastic bottles Product code: N05538 Material: Recycled plastic
          </main>
        </div>
        <div className="product_info">
          <header className="product_info_header">SHIPPING TIMES & COSTS</header>
          <div className="info">
            Delivery costs will be calculated at checkout. For more information
            on shipping options and times, please see our delivery page here.
          </div>
        </div>
      </div>

      <div className="related">
        <header>Related Products</header>
        <main className="related_productCont">
          {[1, 2, 3, 4].map((item, i) => (
            <Product />
          ))}
        </main>
      </div>

      <div className="footer"></div>
    </StyledItemsPage>
  );
};

export default ItemDetails;

const StyledItemsPage = styled.section`
  padding-top: 140px;
  /* background-color: red; */
  width: 90%;
  height: 100vh;
  margin: auto;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(10, 10%);
  grid-template-areas:
    "images images images images images images detail detail detail detail"
    "related related related related related related detail detail detail detail"
    "footer footer footer footer footer footer footer footer footer footer";

  .imgCont {
    background-color: #f3f3f2;
    grid-area: images;
    /* position: relative; */
    width: 100%;
    height: auto;
  }

  .imageContainer {
    width: 80%;
    height: auto;
    margin: auto;
    position: relative;
    padding: 30px;
  }

  .detailsCont {
    grid-area: detail;
    width: auto;
    padding: 10px;
    height: fit-content;
    /* background-color: purple; */
  }

  .product_title {
  }

  .title {
    font-size: calc(${BaseFontSize.bfs} + 0.5vw);
  }

  .price_details {
    font-weight: 700;
    font-size: calc(${BaseFontSize.bfs} + 0.5vw);
    padding: 5px 0px 5px 0px;
  }

  .buttonCont {
    width: 100%;
    display: flex;
    /* background-color: green; */
    padding: 20px 0px 20px 0px;
  }

  .buttonCont button {
    padding: 10px;
    background-color: ${Color.primaryColor};
    font-weight: 700;
    font-size: calc(${BaseFontSize.bfs});
    margin: 0px 10px 0px 0px;
    color: #fff;
  }

  button:last-child {
    background-color: #f3f3f3;
    color: #000;
  }

  .product_info {
    /* background-color: orange; */
    height: max-content;
  }

  .product_info .product_info_header {
    font-weight: 700;
    font-size: calc(${BaseFontSize.bfs} + 0.5vw);
    padding: 5px 0px 5px 0px;
    text-transform: uppercase;
    letter-spacing: -1px;
  }

  .info {
    padding: 10px;
    font-size: calc(${BaseFontSize.bfs} + 0.1vw);
  }

  .related {
    grid-area: related;
    /* background-color: orange; */
    height: auto;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-top: 50px;
    gap: 30px;
  }

  .related header {
    background-color: ${Color.primaryColor};
    font-weight: 700;
    padding: 10px;
    font-size: 20px;
    color: #fff;
  }

  .related_productCont {
    /* background-color: blue; */
    height: auto;
    width: 100%;
    padding-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
  }

  .footer {
    grid-area: footer;
    background-color: #000;
    height: 80px;
  }
`;

{
  /* <Box width="80%" m=" auto">
<Box display="flex" flexWrap="wrap" columnGap="40px">
  {/* IMAGES 
  <section className="imageContainer">
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      swipeable={false}
      showStatus={false}
      autoPlay={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {product?.attributes?.product_images?.data?.map(
        (texture, index) => (
          <div
            className="imageContainer"
            key={`carousel-image-${index}`}
          >
            <Image
              src={texture?.attributes?.url}
              alt={`carousel-${index}`}
              layout="fill"
            />
          </div>
        )
      )}
    </Carousel>
  </section>

  {/* ACTIONS 
  <Box flex="1 1 50%" mb="40px">
    <Box m="65px 0 25px 0">
      <Typography variant="h3">
        title: {product?.attributes?.product_name}
      </Typography>
      <Typography>
        {" "}
        price:&#8358; {product?.attributes?.product_price}
      </Typography>
      <del> &#8358; {product?.attributes?.product_discount_price}</del>

      <Typography sx={{ mt: "20px" }}>
        {product?.attributes?.product_description}
      </Typography>
      <Typography sx={{ mt: "5px" }}>
        catergory: {product?.attributes?.product_catergory}
      </Typography>
      <Typography sx={{ mt: "5px" }}>
        material: {product?.attributes?.product_material}
      </Typography>
      <Typography sx={{ mt: "5px" }}>
        size: {product?.attributes?.product_size}
      </Typography>
      <Typography sx={{ mt: "5px" }}>
        color: {product?.attributes?.product_color}
      </Typography>
    </Box>

    <Box display="flex" alignItems="center" minHeight="50px">
      <Box
        display="flex"
        alignItems="center"
        border={`1.5px solid ${shades.neutral[300]}`}
        mr="20px"
        p="2px 5px"
      >
        <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
          <RemoveIcon />
        </IconButton>
        <Typography sx={{ p: "0 5px" }}>{count}</Typography>
        <IconButton onClick={() => setCount(count + 1)}>
          <AddIcon />
        </IconButton>
      </Box>
      <Button
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: 0,
          minWidth: "150px",
          padding: "10px 40px",
        }}
        onClick={() =>
          dispatch(addToCart({ item: { ...product, count } }))
        }
      >
        ADD TO CART
      </Button>
    </Box>
    <Box>
      <Box m="20px 0 5px 0" display="flex">
        {/* <FavoriteBorderOutlinedIcon /> 
        {/* <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography> 
      </Box>
      {/* <Typography>CATEGORIES: {item?.attributes?.category}</Typography> 
    </Box>
  </Box>
</Box>

{/* INFORMATION 
<Box m="20px 0">
  <Tabs value={value} onChange={handleChange}>
    <Tab label="DESCRIPTION" value="description" />
    <Tab label="REVIEWS" value="reviews" />
  </Tabs>
</Box>
<Box display="flex" flexWrap="wrap" gap="15px">
  {value === "description" && (
    <div>{item?.attributes?.longDescription}</div>
  )}
  {value === "reviews" && <div>reviews</div>}
</Box>

{/* RELATED ITEMS 
<Box mt="50px" width="100%">
  <Typography variant="h3" fontWeight="bold">
    Related Products
  </Typography>
  <Box
    mt="20px"
    display="flex"
    flexWrap="wrap"
    gap="30px"
    justifyContent="space-between"
  >
    {[1, 2, 3, 4].map((item, i) => (
      <Product />
    ))}
  </Box>
</Box>
</Box> */
}
