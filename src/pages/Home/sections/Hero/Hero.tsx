import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/myfoto.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import { useState } from "react";

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

  const Download = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Caminho para o arquivo PDF na pasta public
    link.download = 'Curriculo.pdf'; // Nome do arquivo para o download
    link.click();
  };

  const [iconVisible, setIconVisible] = useState(false);

  const Apear = () => {
    setIconVisible(true);
  };
 
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
                        <Grid container display="flex" justifyContent="center" spacing={2} pt={3}>
                          <Grid item xs={6} md={4} display="flex" justifyContent="center">
                            <StyledButton onClick={Download}>
                              <DownloadIcon/>
                                <Typography>
                                  Download cv
                                </Typography>
                            </StyledButton>
                          </Grid>                    
                          <Grid item xs={6} md={4} display="flex" justifyContent="center">
                            <StyledButton onClick={Apear}>
                              <EmailIcon/>
                                <Typography>
                                  Contact me
                                </Typography>
                            </StyledButton>
                          </Grid>
                          <Grid item xs={12} md={12} display="flex" justifyContent="center" gap="25px" flexWrap="wrap">
                            <Box>
                              <a href="https://www.instagram.com/_barros07/" target="_blank" rel="noopener noreferrer">
                              {iconVisible && (<InstagramIcon style={{ marginTop: '5px', color: 'white', fontSize: '30px'}} />) }
                              </a>
                            </Box>
                            <Box>
                              <a href="https://www.linkedin.com/in/cauã-barros" target="_blank" rel="noopener noreferrer">
                              {iconVisible && (<LinkedInIcon style={{ marginTop: '5px', color: 'white', fontSize: '30px'}} />) }
                              </a>
                            </Box>
                            <Box>
                              <a href="https://github.com/CauaArtes" target="_blank" rel="noopener noreferrer">
                              {iconVisible && (<GitHubIcon style={{ marginTop: '5px', color: 'white', fontSize: '30px'}} />) }
                              </a>
                            </Box>
                            <Box>
                              <a href="mailto:clagamesbr01@gmail.com" target="_blank" rel="noopener noreferrer">
                              {iconVisible && (<EmailIcon style={{ marginTop: '5px', color: 'white', fontSize: '30px'}} />) }
                              </a>
                            </Box>
                                                                         
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
