import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/myfoto.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

  const StyledHero  = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        paddingBottom: "40px",

        [theme.breakpoints.up('xs')]:{
          paddingTop: "100px"
        },
        
        [theme.breakpoints.up('md')]:{
          paddingTop: "100px"
        }
  }))

  const StyledImg  = styled("img")(({theme})=> ({
    width: "75%",
    maxWidth: "300%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }))

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"120%"} top={-100} right={30}>
                                <AnimatedBackground/>
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar} />
                            </Box>
                        </Box>
                        
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Cauã Barros </Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Software Enginner</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={2} pt={5}>
                          <Grid item xs={12} md={4} display="flex" justifyContent="center">
                            <StyledButton onClick={()=> console.log("DOWLOAD")}>
                              <DownloadIcon/>
                                <Typography>
                                  Download CV
                                </Typography>
                            </StyledButton>
                          </Grid>                    
                          <Grid item xs={12} md={4} display="flex" justifyContent="center">
                          <StyledButton onClick={()=> console.log("Contact")}>
                              <EmailIcon/>
                                <Typography>
                                  Contact me
                                </Typography>
                          </StyledButton>
                          </Grid>
                        </Grid>                    
                    </Grid>
                </Grid> 
            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero
