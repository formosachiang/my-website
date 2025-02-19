import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

/**
 * 單一「時間軸區塊」元件：
 * 左側：職位／學位名稱 + 期間（皆使用 Typography variant="h4" 及 body1 格式）
 * 中間：圓形 Icon
 * 右側：公司／學校名稱 + 說明文字（說明文字採用 Typography variant="body1" color="textSecondary"）
 */
const TimelineBlock = ({ icon, title, date, company, description }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
      }}
    >
      {/* 中間較小的圓形 Icon */}
      <Box
        sx={{
          height: '3.6rem',
          width: '3.6rem',
          lineHeight: '3.6rem',
          backgroundColor: '#313131',
          borderRadius: '50%',
          textAlign: 'center',
          color: '#FFFFFF',
          position: 'absolute',
          left: '35%',
          top: '1rem',
          marginLeft: '-1.8rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        {icon}
      </Box>

      {/* 左側：職位／學位名稱 + 期間 */}
      <Box
        sx={{
          float: 'left',
          width: '35%',
          paddingRight: '90px',
          textAlign: 'right',
          '@media (max-width:768px)': {
            float: 'none',
            width: 'auto',
            paddingRight: '15px',
            textAlign: 'left',
            paddingLeft: '7rem',
            marginBottom: '1.5rem',
          },
          '@media (max-width:480px)': {
            paddingLeft: '5.5rem',
          },
        }}
      >
        <Typography component="h4" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ marginTop: '0.4rem' }}>
          {date}
        </Typography>
      </Box>

      {/* 右側：公司／學校名稱 + 說明文字 */}
      <Box
        sx={{
          marginLeft: '35%',
          paddingLeft: '60px',
          '@media (max-width:768px)': {
            margin: 0,
            paddingLeft: '7rem',
          },
          '@media (max-width:480px)': {
            paddingLeft: '5.5rem',
          },
        }}
      >
        <Typography
          component="h4"
          sx={{
            position: 'relative',
            margin: 0,
            paddingBottom: '1.2rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            '&::after': {
              content: '""',
              display: 'block',
              height: '3px',
              width: '50px',
              background: 'rgba(0, 0, 0, 0.2)',
              position: 'absolute',
              left: 0,
              bottom: 0,
            },
          }}
        >
          {company}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ marginTop: '1rem', lineHeight: 1.8 }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

const ResumeSection = () => {
  const theme = useTheme();

  // 工作經驗資料
  const workExperience = [
    {
      title: 'UI Designer',
      date: 'July 2015 - Present',
      company: 'Awesome Studio',
      description:
        'Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.',
    },
    {
      title: 'Front-end Developer',
      date: 'July 2014 - June 2015',
      company: 'Super Cool Agency',
      description:
        'Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.',
    },
    {
      title: 'Web Designer',
      date: 'May 2013 - June 2014',
      company: 'Great Designs Studio',
      description:
        'Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.',
    },
  ];

  // 教育背景資料
  const education = [
    {
      title: 'Bachelor Degree',
      date: 'September 2016 - June 2021',
      company: 'National Seattle University',
      description:
        'Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.',
    },
    {
      title: 'Exchange Program',
      date: 'January 2021 - May 2021',
      company: 'Seattle School of Business',
      description:
        'Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.',
    },
  ];

  return (
    <Box
      id="resume"
      sx={{
        backgroundColor: theme.palette.quaternary.main,
        paddingTop: '12rem',
        paddingBottom: '12rem',
      }}
    >
      <Container maxWidth="lg">
        {/* 頂部簡介區塊，更新字型大小與樣式 */}
        <Box sx={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Typography variant="h6" color="textSecondary">
            Resume
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            More of my credentials.
          </Typography>
        </Box>

        {/* 工作經驗 */}
        <Box sx={{ maxWidth: '980px', margin: '0 auto' }}>
          <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
            <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>
              Work Experience
            </Typography>
          </Box>

          <Box
            sx={{
              position: 'relative',
              marginTop: '2rem',
              marginBottom: '7rem',
              '&::before': {
                content: '""',
                display: 'block',
                width: '1px',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.1)',
                position: 'absolute',
                left: '35%',
                top: 0,
                '@media (max-width:768px)': {
                  left: '2.4rem',
                },
                '@media (max-width:480px)': {
                  left: '1.8rem',
                },
              },
            }}
          >
            {workExperience.map((item, index) => (
              <TimelineBlock
                key={index}
                icon={<WorkIcon />}
                title={item.title}
                date={item.date}
                company={item.company}
                description={item.description}
              />
            ))}
          </Box>
        </Box>

        {/* 教育背景 */}
        <Box sx={{ maxWidth: '980px', margin: '0 auto' }}>
          <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
            <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>
              Education
            </Typography>
          </Box>

          <Box
            sx={{
              position: 'relative',
              marginTop: '2rem',
              marginBottom: '7rem',
              '&::before': {
                content: '""',
                display: 'block',
                width: '1px',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.1)',
                position: 'absolute',
                left: '35%',
                top: 0,
                '@media (max-width:768px)': {
                  left: '2.4rem',
                },
                '@media (max-width:480px)': {
                  left: '1.8rem',
                },
              },
            }}
          >
            {education.map((item, index) => (
              <TimelineBlock
                key={index}
                icon={<SchoolIcon />}
                title={item.title}
                date={item.date}
                company={item.company}
                description={item.description}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ResumeSection;
