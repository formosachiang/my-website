import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

/**
 * TimelineBlock 元件：
 * - 若 description 為陣列則以列點呈現，
 * - 否則直接顯示字串。
 */
const TimelineBlock = ({ icon, title, date, company, description }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        paddingTop: '1.4rem',
        paddingBottom: '1.4rem'
      }}
    >
      {/* 圓形 Icon */}
      <Box
        sx={{
          height: '2.4rem',
          width: '2.4rem',
          lineHeight: '2.4rem',
          backgroundColor: '#313131',
          borderRadius: '50%',
          textAlign: 'center',
          color: '#FFFFFF',
          position: 'absolute',
          left: '35%',           // 桌機版
          top: '1rem',
          marginLeft: '-1.2rem',  // 一半寬度
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          '@media (max-width:768px)': {
            left: '2.4rem',
            marginLeft: '-1.2rem',
          },
          '@media (max-width:480px)': {
            left: '1.8rem',
            marginLeft: '-1.2rem',
          },
        }}
      >
        {React.cloneElement(icon, { sx: { fontSize: '1.2rem' } })}
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
            paddingLeft: '6rem',  // 平板下改成 6rem
            marginBottom: '1.5rem',
          },
          '@media (max-width:480px)': {
            paddingLeft: '5rem',  // 手機下改成 5rem
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
            paddingLeft: '6rem',  // 平板下改成 6rem
          },
          '@media (max-width:480px)': {
            paddingLeft: '5rem',  // 手機下改成 5rem
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
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ marginTop: '1rem', lineHeight: 1.8 }}
          component="div"
        >
          {Array.isArray(description) ? (
            <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
              {description.map((bullet, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>
                  {bullet}
                </li>
              ))}
            </ul>
          ) : (
            description
          )}
        </Typography>
      </Box>
    </Box>
  );
};

const ResumeSection = () => {
  const theme = useTheme();

  // 工作經驗：description 以陣列呈現列點
  const workExperience = [
    {
      title: 'Software Development Engineer',
      date: 'May 2022 - June 2024',
      company: 'IBM',
      description: [
        'Reduced response time by 32% by developing an AI-powered chatbot for an insurance company using Node.js and IBM Watson Assistant, incorporating 10 scenarios and 7 APIs for quick access to the database',
        'Enabled end users from a top semiconductor distributor to easily subscribe to data by creating a user-friendly interface with 4 main modules and 16 web pages using Vue.js, and deploying it on Azure through Docker',
        'Streamlined supply chain operations for a top 3 global semiconductor foundry by developing a Django-based platform, and effectively building 84 data pipelines for data integration and migration',
      ],
    },
    {
      title: 'Software Development Engineer',
      date: 'September 2021 - December 2021',
      company: 'IBM',
      description: [
        'Enhanced site performance and streamlined content delivery by integrating 12 GraphQL APIs into a dynamic website developed with Angular and Adobe Experience Manager',
        'Empowered users to create custom page layouts by designing an intuitive component-based platform, enhancing user experience and layout flexibility',
      ],
    },
    {
      title: 'QA Engineer Intern',
      date: 'March 2021 - August 2021',
      company: 'Shopee',
      description: [
        'Boosted system performance and reliability by developing precise and effective test scripts while working on a team of 6',
        'Improved product value prediction and usability by actively participating in the development process to anticipate usage scenarios'
      ],
    },
    {
      title: 'Software Development Engineer Intern',
      date: 'December 2019 - August 2021',
      company: 'Bright Insight Lab',
      description: [
        'Drove digital transformation for textile companies by developing a business partnerships platform interface using HTML, JavaScript, and Vue.js',
	      'Supported sustainable growth in the textile industry by analyzing internet traffic and user behavior to provide actionable insights',
      ],
    },
  ];

  // 教育背景資料（description 改成陣列，呈現列點）
  const education = [
    {
      title: 'Masters Degree',
      date: 'June 2024 - June 2025',
      company: 'University of Washington',
      description: [
        'Major: Information Systems',
        'Relevent Courses: Business Data Analysis, Advanced Database Systems and Data Warehouse, Advanced Machine Learning, Advanced Business Data Mining',
      ],
    },
    {
      title: 'Bachelors Degree',
      date: 'September 2017 - June 2021',
      company: 'National Taiwan University',
      description: [
        'Major: Business Administration',
        'Relevant Courses: Economics, Statistics, Accounting, Marketing Management, Operation Management'
      ],
    },
  ];

  return (
    <Box
      id="resume"
      sx={{
        backgroundColor: theme.palette.quaternary.main,
        paddingTop: '8rem',
        paddingBottom: '4rem',
        '@media (max-width:480px)': {
          paddingTop: '6rem',
          paddingBottom: '2rem',
        },
      }}
    >
      <Container maxWidth="lg">
        {/* 頂部標題區塊 */}
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Typography variant="h6" color="textSecondary">
            Resume
          </Typography>
          <Typography variant="h3" fontWeight="bold" sx={{ marginTop: '0.5rem' }}>
            More of my credentials
          </Typography>
        </Box>

        {/* Work Experience */}
        <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
          <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
            Work Experience
          </Typography>
        </Box>
        <Box sx={{ maxWidth: '980px', margin: '0 auto' }}>
          <Box
            sx={{
              position: 'relative',
              marginTop: '2rem',
              marginBottom: '5rem',
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

        {/* Education */}
        <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
          <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
            Education
          </Typography>
        </Box>
        <Box sx={{ maxWidth: '980px', margin: '0 auto' }}>
          <Box
            sx={{
              position: 'relative',
              marginTop: '2rem',
              marginBottom: '5rem',
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
