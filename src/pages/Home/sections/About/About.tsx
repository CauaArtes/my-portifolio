import { Box, Container, Grid, Typography, styled } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import theme from "../../../../theme";

const About = () => {

    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
    }));

    return (
        <StyledAbout>
            <Container maxWidth="lg">
                <Typography color="secondary.contrastText" variant="h2" textAlign="center" marginBottom="20px">
                    About me
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} md={5}>
                        <Box sx={{
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            padding: '20px',
                            textAlign: 'center',
                            marginBottom: '20px', // Espaço abaixo do bloco
                        }}>
                            <Typography>
                                <SchoolIcon />
                            </Typography>
                            <Typography fontWeight="bold">
                                Education
                            </Typography>
                            <Typography>
                                Analysis and systems development
                            </Typography>
                            <Typography>
                                Future postgraduate degree in software engineering
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box sx={{
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            padding: '20px',
                            textAlign: 'center',
                            marginBottom: '20px', // Espaço abaixo do bloco
                        }}>
                            <Typography>
                                <WorkspacePremiumIcon />
                            </Typography>
                            <Typography fontWeight="bold">
                                Experience
                            </Typography>
                            <Typography>
                                1 + Years working as a freelancer
                            </Typography>
                            <Typography>
                                Back-end Developer
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ margin: '20px auto', padding: '20px', textAlign: 'justify', width: '81%' }}>
                <Typography>
                    I am a Systems Analysis and Development student, and my passion for programming led me to explore and delve deeper into various areas of software development. As a freelancer, I have specialized in Back-end, using Python and SQL for data analysis and Power BI for visualization. On the Front-end, I work with React, JavaScript, and Node, creating dynamic and intuitive interfaces. I am looking for new challenges and opportunities in this field to apply my knowledge, expand my skills, and continue growing in the technology industry.
                </Typography>
            </Box>
            <Box sx={{ width: '80%', height: '2px', backgroundColor: theme.palette.primary.main, margin: '10px auto 0 auto' }} />
        </StyledAbout>
    );
}

export default About;
