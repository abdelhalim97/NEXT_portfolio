import React from "react";
import { Container } from "@mui/material";
import { CustomContainerPropsI } from "@/types/shared/custom-container.interface";

const CustomContainer: React.FC<CustomContainerPropsI> = ({
  isColor = true,
  children,
}: CustomContainerPropsI) => {
  return (
    <div
      style={{
        width: "100wv",
        backgroundColor: isColor ? "#FFF" : "#000",
      }}
    >
      <Container maxWidth="lg" style={{ display: "flex" }}>
        {children}
      </Container>
    </div>
  );
};

export default CustomContainer;
