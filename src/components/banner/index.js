import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src="/images/banner/banner.png" />
      <BannerContent>
        <Typography variant="h6">Print Your Product</Typography>
        <BannerTitle variant="h2">
        Design Your Own
        Custom Gifts
        </BannerTitle>

        <BannerDescription variant="subtitle">
        1.Use high-quality images lorem ipsum dolor

        2.Carefully consider colors lorem ipsum <br></br>

        3.Fine tune your fonts
        </BannerDescription>

        <BannerShopButton color="primary">Shop Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
