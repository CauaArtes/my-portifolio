import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps{
    children: ReactNode
    onClick: () => void
}


const StyledButton: React.FC<StyledButtonProps> = ({children , onClick}) => {

    const StyledButton  = styled("button")(({ theme })=> ({
       backgroundColor: "transparent",
       border: `1px solid ${theme.palette.primary.contrastText}`,
       borderRadius: "3px",
       padding: "5px 15px",
       width: "100%",
       color: theme.palette.primary.contrastText,
       display: "inline-flex",
       alignItems: "center",
       justifyContent: "center",
       cursor: 'pointer',
        gap: "10px",
       '&:hover': {
            //color: theme.palette.secondary.contrastText,
            //backgroundColor: theme.palette.secondary.light,
            transform: 'scale(1.05)', // Aumenta o botão em 10%
       }
       }))

  
    return (
      <>
            <StyledButton onClick={onClick}>
                {children}
            </StyledButton>
      </>
    )
  }
  
  export default StyledButton