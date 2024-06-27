import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const NavBar = () => {
  const StyledToolBar = styled(Toolbar)(({}) => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="absolute">
      <StyledToolBar>
        <MenuItem onClick={() => handleClick("about")}>About</MenuItem>
        <MenuItem onClick={() => handleClick("skills")}>Skills</MenuItem>
        <MenuItem onClick={() => handleClick("projects")}>Projects</MenuItem>
      </StyledToolBar>
    </AppBar>
  );
};

export default NavBar;
