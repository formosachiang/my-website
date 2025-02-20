import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

/**
 * 單一「時間軸區塊」元件：
 * - 若 description 為陣列 => 顯示列點式
 * - 若 description 為字串 => 顯示一般段落
 */
const TimelineBlock = ({ icon, title, date, company, description }) => {
    return (
      <Box
        sx={{
          position: 'relative',
          paddingTop: '1.4rem',
          paddingBottom: '1.4rem',
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
            left: '35%',
            top: '1rem',
            marginLeft: '-1.2rem',
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
            // 平板以下
            '@media (max-width:768px)': {
              float: 'none',
              width: 'auto',
              paddingRight: '15px',
              textAlign: 'left',
              paddingLeft: '6rem',   // 原本是 7rem => 改小
              marginBottom: '1.5rem',
            },
            // 手機以下
            '@media (max-width:480px)': {
              paddingLeft: '5rem',   // 原本是 5.5rem => 改小
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
            // 平板以下
            '@media (max-width:768px)': {
              margin: 0,
              paddingLeft: '6rem',   // 原本是 7rem => 改小
            },
            // 手機以下
            '@media (max-width:480px)': {
              paddingLeft: '5rem',   // 原本是 5.5rem => 改小
            },
          }}
        >
          {/* 公司/學校名稱 */}
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
          {/* 說明文字 */}
          <Typography variant="body1" color="textSecondary" sx={{ marginTop: '1rem', lineHeight: 1.8 }}>
            {description}
          </Typography>
        </Box>
      </Box>
    );
};
  

const ResumeSection = () => {
  const theme = useTheme();

  // 工作經驗資料（改成陣列 => 顯示列點式）
  const workExperience = [
    {
      title: 'UI Designer',
      date: 'July 2015 - Present',
      company: 'Awesome Studio',
      description: [
        'Designing UI mockups and wireframes in Figma',
        'Implementing responsive layouts using CSS frameworks',
        'Collaborating with dev team on user experience flows',
      ],
    },
    {
      title: 'Front-end Developer',
      date: 'July 2014 - June 2015',
      company: 'Super Cool Agency',
      description: [
        'Developing interactive web pages with React',
        'Optimizing site performance for SEO and speed',
        'Integrating RESTful APIs and handling data',
      ],
    },
    {
      title: 'Web Designer',
      date: 'May 2013 - June 2014',
      company: 'Great Designs Studio',
      description: [
        'Creating design prototypes for clients',
        'Ensuring cross-browser compatibility',
        'Maintaining brand consistency across designs',
      ],
    },
  ];

  // 教育背景資料（維持字串 => 顯示一般段落）
  const education = [
    {
      title: 'Bachelor Degree',
      date: 'September 2016 - June 2021',
      company: 'National Seattle University',
      description:
        'Completed a comprehensive curriculum covering software development, data structures, algorithms, and user interface design. Participated in various team projects and coding competitions.',
    },
    {
      title: 'Exchange Program',
      date: 'January 2021 - May 2021',
      company: 'Seattle School of Business',
      description:
        'Studied international business and entrepreneurship. Collaborated with diverse groups on case studies, enhancing communication and teamwork skills.',
    },
  ];

  return (
    <Box
        id="resume"
        sx={{
            backgroundColor: theme.palette.quaternary.main,
            paddingTop: '8rem',
            paddingBottom: '4rem',
            // 手機以下
            '@media (max-width:480px)': {
            paddingTop: '6rem',
            paddingBottom: '3rem',
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
