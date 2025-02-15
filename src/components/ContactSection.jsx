import React from "react";
import { Box, Container, Typography, TextField, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ContactSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        {/* 頂部標題區塊 - 置中對齊 */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h6" color="textSecondary">
            Get In Touch
          </Typography>
          <Typography variant="h3" fontWeight="bold" color="textPrimary">
            Contact me
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Box>

        {/* 表單區塊 */}
        <Grid container spacing={4}>
          {/* 第一行 First name 和 Last name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First name"
              variant="outlined"
              sx={{
                mb: 3,
                borderColor: theme.palette.tertiary.main,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.tertiary.main,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.tertiary.dark,
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last name"
              variant="outlined"
              sx={{
                mb: 3,
                borderColor: theme.palette.tertiary.main,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.tertiary.main,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.tertiary.dark,
                  },
                },
              }}
            />
          </Grid>

          {/* 第二行 Email 和 Phone number */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              sx={{
                mb: 3,
                borderColor: theme.palette.tertiary.main,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.tertiary.main,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.tertiary.dark,
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone number"
              variant="outlined"
              sx={{
                mb: 3,
                borderColor: theme.palette.tertiary.main,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.tertiary.main,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.tertiary.dark,
                  },
                },
              }}
            />
          </Grid>

          {/* 第四行 Message */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={6}
              sx={{
                mb: 3,
                borderColor: theme.palette.tertiary.main,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.tertiary.main,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.tertiary.dark,
                  },
                },
              }}
            />
          </Grid>

          {/* 最後一行 Submit 按鈕 */}
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.tertiary.main,
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                "&:hover": { backgroundColor: theme.palette.tertiary.dark },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
