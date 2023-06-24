import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, styled } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useDispatch } from "react-redux";
import { addToCart } from "../../feature/cartSlice";
import { AccountContext } from "../../context/Context.js";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px",
  width: "90%",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "46%",
  borderRadius: 2,
  height: 50,
  color: "#FFF",
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("md")]: {
    width: "48%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
}));

//============================================function starts===================================
const ActionItem = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { open, setOpen } = useContext(AccountContext);

  const goToCart = () => {
    let user = localStorage.getItem("signup"); // null
    if (user) {
      navigate("/cart");
    } else {
      setOpen(true);
    }
  };
  const AddToCart = () => {
    /* if user is not logged in we will redirect him to the login 
    modal and not let him add the item to cart*/
    let user = localStorage.getItem("signup"); // null
    if (user) {
      dispatch(addToCart(props.itemData));
    } else {
      setOpen(true);
    }
  };
  return (
    <LeftContainer>
      <Box style={{ padding: "15px 20px", border: "1px solid #f0f0f0" }}>
        <Image src={props.itemData.image} alt="productImage" />
      </Box>
      <StyledButton
        onClick={AddToCart}
        style={{ marginRight: 10, background: "#ff9f00" }}
        variant="contained"
      >
        <ShoppingCartIcon />
        Add to Cart
      </StyledButton>
      <StyledButton
        onClick={goToCart}
        style={{ background: "#fb641b" }}
        variant="contained"
      >
        <FlashOnIcon />
        Go to Cart
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
