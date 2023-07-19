import React from "react";
import { Badge, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { ShoppingCartOutlined } from "@mui/icons-material";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  // Tooltip,
  // Avatar,
  Close,
  Container,
  MenuItem,
  Link,
  // Button, 
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleButton from "./ToggleButton";
import { CartState } from "../context/Context";

const pages = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/services",
    name: "Services",
  },
  {
    url: "/eureka",
    name: "Eureka",
  },
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];


function Navbar() {

  const {state : {cart},} = CartState();

  const Nav = styled.div`
  .navbar-list{
    display : flex;
    gap : 4rem;

    .navbar-link{

      &:link,
      &:visited{
      text-decoration : none;
      display : inline-block;
      font-size : 1.4rem;
      font-weight : 600;
      color : ${({theme}) => theme.colors.black};
      transition : color 0.3s linear;

      }
      &:hover,
      &:active {
        color : ${({theme}) => theme.colors.helper};
        transform : scale(1.1);
      }
    }
  }

  .mobile-navbar-btn{
    display : none;
  }

  .close-outline{
    display : none;
  }

  .mobile-navbar-btn[name="close-outline"]{
    display : none;
  }

  @media (max-width: ${({theme}) => theme.media.mobile}){
    .mobile-navbar-btn{
      display : inline-block;
      z-index : 999;
      border : ${({theme}) => theme.colors.black};

      .mobile-nav-icon{
        font-size : 2.3rem;
        color : ${({theme}) => theme.colors.black};
      }
    }

    .navbar-list{
      width :  100vw;
      height : 100vh;
      position : absolute;
      top : 0;
      left : 0;
      background-color: #fff;
      z-index : 9999;
      transform : translateX(100%);

      display : flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      visibility : hidden;
      opacity :0;
    }

    .active .mobile-nav-icon{
      display : none;
      font-size : 2.8rem;
      position : absolute;
      top : 3%;
      right : 10%;
      z-index : 99999;
      color : ${({theme}) => theme.colors.black};
    }

    .active .close-outline{
      display : inline-block;
    }

    .active .navbar-list{
      visibility : visible;
      opacity : 1;
      transform : translateX(0);
      z-index : 999;
    }
  }

 ` ;

  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isGlassy, setIsGlassy] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0 && !isGlassy) {
        setIsGlassy(true);
      } else if (scrollY === 0 && isGlassy) {
        setIsGlassy(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isGlassy]);

  return (
    <AppBar
      position="fixed"
      sx={{
        marginBottom : "2rem",
        backgroundColor: isGlassy
          ? theme.palette.mode === "dark"    
            ? "rgba(0, 0, 0, 0.5)"
            : "rgba(255, 255, 255, 0.5)"
          : theme.palette.mode === "dark"
          ? "transparent"
          : "transparent",
        backdropFilter: isGlassy ? "saturate(180%) blur(5px);" : "none",
        boxShadow: isGlassy ? "inset 0 -1px 0 0 rgba(0,0,0,.1);" : "none",
        transition:
          "background-color 0.5s ease-in-out, backdrop-filter 0.5s ease-in-out",
      }}
      
    >
      
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            margin: "0.2rem 0 0.2rem 0",
            [theme.breakpoints.down("sm")]: {
              margin: "0",
            },
          }}
          variant="dense"
          disableGutters
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <a href="/">
              {theme.palette.mode === "dark" ? (
                <img
                  src="/innotrat-dark.svg"
                  alt="logo"
                  height={30}
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <img
                  src="/innotrat-light.svg"
                  alt="logo"
                  height={30}
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              )}
            </a>
            
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon
                sx={{
                  color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
                }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    handleCloseNavMenu();
                    window.location.href = page.url;
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
           
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              justifyContent: "center",
              mr: 2,
            }}
          >
            <a href="/">
              {theme.palette.mode === "dark" ? (
                <img
                  src="/innotrat-dark.svg"
                  alt="logo"
                  width={140}
                  height={50}
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <img
                  src="/innotrat-light.svg"
                  alt="logo"
                  width={140}
                  height={50}
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              )}
            </a>
            
          </Box>
         

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 4,
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.name}
                href={page.url}
                underline="none"
                color="#666"
                sx={{
                  fontSize: "1.3rem",
                  lineHeight: "1rem",
                  fontWeight: 550,
                }}
              >
                {page.name}
              </Link>
            ))}
            {/* <Button
              variant="contained"
              color="primary"
              size="medium"
              sx={{
                fontWeight: 550,
                textTransform: "none",
              }}
              onClick={() => {
                window.location.href = "/sign-up";
              }}
            >
              Sign Up
            </Button> */}
          </Box>

          <ToggleButton />

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Kiran Gowda" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
           <NavLink to="/cart">
            <StyledBadge>
           <Badge badgeContent={cart.length} color="primary">
              <ShoppingCartOutlined
                className="cart-icon"
                color="action" 
              ></ShoppingCartOutlined>
              </Badge>
              </StyledBadge>
            </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const StyledBadge = styled.div`
  .cart-icon{
    font-size : 2.3rem;
  }

  @media (max-width : ${({theme}) => theme.media.mobile}){
    font-size: 1.3rem;
  }
`;
export default Navbar;
