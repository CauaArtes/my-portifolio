import {Container, Grid, Typography, styled } from "@mui/material"

const Projects = () => {

    const StyledProjects  = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.secondary.main,
        height: "100vh",
        display: "flex",
        paddingTop:"120px",
        alignItems: "flex-start",
               
  }))

  return (  
    <>
        <StyledProjects>
            <Container maxWidth="lg">
                <Grid>
                    <Grid item xs={12}>
                        <Typography color="secondary.contrastText" variant="h2" textAlign="center">My Projects</Typography>
                    </Grid>    
                </Grid>     
            </Container>    
        </StyledProjects>
    </>
)}

export default Projects;