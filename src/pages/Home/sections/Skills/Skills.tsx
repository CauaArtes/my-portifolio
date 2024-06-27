import { Box, Container, Grid, Typography, styled } from "@mui/material";

const Skills = () => {

    const StyledSkills = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        minHeight: "60vh", // Ajuste a altura conforme necessário
        display: "flex",
        alignItems: "flex-start",
        paddingTop: "15px",
    }));

    return (  
        <StyledSkills>
            <Container maxWidth="lg">
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12}>
                        <Typography color="secondary.contrastText" variant="h2" textAlign="center" marginBottom="20px">
                            Skills
                        </Typography>
                    </Grid>    
                    <Grid item xs={12} md={2}>
                        <Box sx={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',border: '1px solid rgba(0, 0, 0, 0.1)',padding: '10px',textAlign: 'center', transition: 'transform 0.2s','&:hover': {transform: 'scale(1.1)'}}}>
                            <Typography>
                                Python
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box sx={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',border: '1px solid rgba(0, 0, 0, 0.1)',padding: '10px',textAlign: 'center', transition: 'transform 0.2s','&:hover': {transform: 'scale(1.1)'}}}>
                            <Typography>
                                Java
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box sx={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',border: '1px solid rgba(0, 0, 0, 0.1)',padding: '10px',textAlign: 'center', transition: 'transform 0.2s','&:hover': {transform: 'scale(1.1)'}}}>
                            <Typography>
                                SQL
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box sx={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',border: '1px solid rgba(0, 0, 0, 0.1)',padding: '10px',textAlign: 'center', transition: 'transform 0.2s','&:hover': {transform: 'scale(1.1)'}}}>
                            <Typography>
                                Javascript
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box sx={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',border: '1px solid rgba(0, 0, 0, 0.1)',padding: '10px',textAlign: 'center', transition: 'transform 0.2s','&:hover': {transform: 'scale(1.1)'}}}>
                            <Typography>
                                Cloud
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box sx={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',border: '1px solid rgba(0, 0, 0, 0.1)',padding: '10px',textAlign: 'center', transition: 'transform 0.2s','&:hover': {transform: 'scale(1.1)'}}}>
                            <Typography>
                                SCRUM
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box sx={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',border: '1px solid rgba(0, 0, 0, 0.1)',padding: '10px',textAlign: 'center', transition: 'transform 0.2s','&:hover': {transform: 'scale(1.1)'}}}>
                            <Typography>
                                Git
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box sx={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',border: '1px solid rgba(0, 0, 0, 0.1)',padding: '10px',textAlign: 'center', transition: 'transform 0.2s','&:hover': {transform: 'scale(1.1)'}}}>
                            <Typography>
                                Power BI
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box sx={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',border: '1px solid rgba(0, 0, 0, 0.1)',padding: '10px',textAlign: 'center', transition: 'transform 0.2s','&:hover': {transform: 'scale(1.1)'}}}>
                            <Typography>
                                APIs
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box sx={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',border: '1px solid rgba(0, 0, 0, 0.1)',padding: '10px',textAlign: 'center', transition: 'transform 0.2s','&:hover': {transform: 'scale(1.1)'}}}>
                            <Typography>
                                React
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box sx={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',border: '1px solid rgba(0, 0, 0, 0.1)',padding: '10px',textAlign: 'center', transition: 'transform 0.2s','&:hover': {transform: 'scale(1.1)'}}}>
                            <Typography>
                                Clean Code
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box sx={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',border: '1px solid rgba(0, 0, 0, 0.1)',padding: '10px',textAlign: 'center', transition: 'transform 0.2s','&:hover': {transform: 'scale(1.1)'}}}>
                            <Typography>
                                Unitary Tests
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>    
        </StyledSkills>
    );
}

export default Skills;
