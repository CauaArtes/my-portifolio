import {Container, Grid, Typography, styled } from "@mui/material"

const About = () => {

    const StyledAbout  = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.secondary.main,
        height: "100vh",
        display: "flex",
        paddingTop:"120px",
        alignItems: "flex-start",
               
  }))

  return (  
    <>
        <StyledAbout>
            <Container maxWidth="lg">
                <Grid>
                    <Grid item xs={12}>
                        <Typography color="secondary.contrastText" variant="h2" textAlign="center">About Me</Typography>
                    </Grid>    
                </Grid>     
            </Container>    
        </StyledAbout>
    </>
)}

export default About;