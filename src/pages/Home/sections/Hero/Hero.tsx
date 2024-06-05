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
        alignItems: "center"
  }))

  const StyledImg  = styled("img")(({theme})=> ({
    width: "80%",
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
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground/>
                            </Box>
                            <Box position="absolute" textAlign="center">
                                <StyledImg src={Avatar} />
                            </Box>
                        </Box>
                        
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Cauã Barros </Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Software Enginner</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={5}>
                          <Grid item xs={12} md={4} display="flex" justifyContent="center">
                            <StyledButton>
                              <DownloadIcon/>
                                <Typography>
                                  Download CV
                                </Typography>
                            </StyledButton>
                          </Grid>                    
                          <Grid item xs={12} md={4} display="flex" justifyContent="center">
                          <StyledButton>
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