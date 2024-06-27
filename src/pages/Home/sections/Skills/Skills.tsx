import { Box, Container, Grid, Typography, styled } from "@mui/material";

const Skills = () => {

    const StyledSkills = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        minHeight: "50vh",
        display: "flex",
        alignItems: "flex-start",
        paddingTop: "15px",
        paddingBottom: "15px", // Adicionei um padding inferior para espaçamento extra
    }));

    return (
        <StyledSkills>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12}>
                        <Typography color="secondary.contrastText" variant="h2" textAlign="center" marginBottom="20px">
                            Skills
                        </Typography>
                    </Grid>
                    {["Python", "Java", "SQL", "Javascript", "Cloud", "SCRUM", "Git", "Power BI", "APIs", "React", "Clean Code", "Unitary Tests"].map((skill, index) => (
                        <Grid item xs={6} md={2} key={index}>
                            <Box sx={{
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                border: '1px solid rgba(0, 0, 0, 0.1)',
                                padding: '10px',
                                textAlign: 'center',
                                transition: 'transform 0.2s',
                                '&:hover': { transform: 'scale(1.1)' }
                            }}>
                                <Typography>
                                    {skill}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledSkills>
    );
}

export default Skills;
