import React from "react";
import { Box, Grid, Card, Typography, Avatar, Container } from "@mui/material";
import { styled } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import { useTheme } from "@mui/material/styles";

// 客戶回饋資料
const testimonials = [
  {
    name: "Dianne Russell",
    company: "Starbucks",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    image: "https://via.placeholder.com/50", // 替換成真實圖片
  },
  {
    name: "Kristin Watson",
    company: "Louis Vuitton",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    image: "https://via.placeholder.com/50", // 替換成真實圖片
  },
  {
    name: "Kathryn Murphy",
    company: "McDonald's",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    image: "https://via.placeholder.com/50", // 替換成真實圖片
  },
];

// 自訂卡片樣式
const FeedbackCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: "none",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
  },
}));

const FeedbackSection = () => {
  const theme = useTheme(); // 使用 MUI theme

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.quaternary.main, // 設定背景色
        py: 20, // 上下內邊距
        // my: 6, // 與其他區塊的距離
      }}
    >
      <Container maxWidth="lg">
        {/* 頂部標題區塊 - 置左對齊 */}
        <Box sx={{ textAlign: "left", mb: 8 }}>
          <Typography variant="h6" color="textSecondary">
            Clients Feedback
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            Customer testimonials
          </Typography>
        </Box>

        {/* 回饋列表 */}
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FeedbackCard sx={{ p: 3 }}>
                {/* 星級評分 */}
                <Box sx={{ display: "flex", mb: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} sx={{ color: "#2C7369", fontSize: 20 }} />
                  ))}
                </Box>
                {/* 客戶回饋 */}
                <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                  "{testimonial.feedback}"
                </Typography>
                {/* 客戶資訊 */}
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <Avatar src={testimonial.image} sx={{ width: 48, height: 48, mr: 2 }} />
                  <Box>
                    <Typography variant="body1" fontWeight="bold">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {testimonial.company}
                    </Typography>
                  </Box>
                </Box>
              </FeedbackCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeedbackSection;
