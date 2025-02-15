import React from "react";
import { Box, Button, Typography } from "@mui/material";
import IntroImage from "../assets/intro.jpg";

const IntroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // 手機版垂直排列，桌面版水平排列
        alignItems: "center",
        justifyContent: "space-between",
        paddingY: { xs: "160px", md: "200px" }, // 上下的 padding
        paddingX: { xs: "100px", md: "180px" }, // 左右的 padding
        backgroundColor: "#F8FAFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 左側：文字與按鈕 */}
      <Box
        sx={{
          maxWidth: "600px",
          textAlign: { xs: "center", md: "left" },
          marginBottom: { xs: "40px", md: "0" }, // 在手機版時增加文字與圖片之間的間距
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            color: "#6C757D",
            marginBottom: "16px",
          }}
        >
          Hey, I am Allen
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "32px", sm: "40px", md: "48px" },
            fontWeight: "700",
            lineHeight: "1.2",
            color: "#000",
            marginBottom: "24px",
          }}
        >
          I create <span style={{ color: "#6C63FF" }}>product design</span> <br />
          and <span style={{ color: "#6C63FF" }}>brand experience</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#6C757D",
            marginBottom: "32px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Suspendisse varius enim in eros elementum tristique.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6C63FF",
            color: "#fff",
            textTransform: "none",
            fontSize: "16px",
            padding: "10px 20px",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#5A54DC",
            },
          }}
        >
          Get In Touch
        </Button>
      </Box>

      {/* 右側：圖片與背景 */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "50%" }, // 小螢幕時寬度佔滿
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" }, // 手機版居中，桌面版右對齊
        }}
      >
        {/* 背景形狀 */}
        <Box
          sx={{
            width: { xs: "300px", sm: "350px", md: "400px" },
            height: { xs: "300px", sm: "350px", md: "400px" },
            backgroundColor: "#E8F0FF",
            borderRadius: "32px",
            position: "absolute",
            right: { xs: "auto", md: "0" }, // 桌面版右對齊，手機版取消右對齊
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        ></Box>

        {/* 主圖片 */}
        <img
          src={IntroImage}
          alt="John"
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "32px",
            objectFit: "cover",
            position: "relative",
            zIndex: 2,
          }}
        />
      </Box>
    </Box>
  );
};

export default IntroSection;
