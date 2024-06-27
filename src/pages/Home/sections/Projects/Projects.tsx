import {Container, Grid, Typography, styled } from "@mui/material"

const Projects = () => {

    const StyledProjects  = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        paddingTop:"30px",
        alignItems: "flex-start",
               
  }))

  return (  
    <>
        <StyledProjects>
            <Container maxWidth="lg">
                <Grid>
                    <Grid item xs={12}>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">Projects</Typography>
                    </Grid>    
                </Grid>     
            </Container>    
        </StyledProjects>
    </>
)}

export default Projects;