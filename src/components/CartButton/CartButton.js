import React, { useContext } from "react";
import { styled } from "@mui/system";
import { Fab } from "@mui/material";
import Badge from "@mui/material/Badge";
import { ShoppingCartRounded } from "@mui/icons-material";
import { CartContext } from "../../context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 26,
    top: 26,
    border: `2px solid ${theme.palette.text.primary}`,
    padding: "0 4px",
  },
}));

const CartButton = () => {
  const [cart, setCart] = useContext(CartContext);

  return (
    <Fab size="small" color="primary" aria-label="add">
      <StyledBadge badgeContent={cart.length} color="secondary">
        <ShoppingCartRounded></ShoppingCartRounded>
      </StyledBadge>
    </Fab>
  );
};

export default CartButton;
