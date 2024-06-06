import {Container, Grid, Typography, styled } from "@mui/material"

const Skills = () => {

    const StyledSkills  = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.secondary.main,
        height: "100vh",
        display: "flex",
        paddingTop:"120px",
        alignItems: "flex-start",
               
  }))

  return (  
    <>
        <StyledSkills>
            <Container maxWidth="lg">
                <Grid>
                    <Grid item xs={12}>
                        <Typography color="secondary.contrastText" variant="h2" textAlign="center">Skills</Typography>
                    </Grid>    
                </Grid>     
            </Container>    
        </StyledSkills>
    </>
)}

export default Skills;