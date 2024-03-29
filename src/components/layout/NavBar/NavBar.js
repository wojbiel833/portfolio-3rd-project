import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  createActionLogIn,
  createActionLogOut,
  createActionLogInAdmin,
  createActionLogOutAdmin,
} from '../../../redux/navbarRedux.js';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MoreIcon from '@mui/icons-material/MoreVert';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import { Container as NavContainer } from '@mui/material';

// MUI STYLES--------------------------------------------------
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#3d7c3d',
}));

const StyledFormGroup = styled(FormGroup)(({ theme }) => ({
  flexDirection: 'row',
  display: 'inline-flex',
}));

// COMPONENT-------------------------------------------------
function Component(props) {
  const { isLogged, isAdmin, logIn, logOut, logInAdmin, logOutAdmin, cart } =
    props;

  // COMPONENT SETTINGS --------------------------------------
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const displayCartQuanity = cart => {
    const products = [];

    cart.filter(product => products.push(product.amount));

    let quanity = 0;
    for (let i = 0; i <= products.length - 1; i++) {
      quanity += products[i];
    }

    return quanity;
  };

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Twoje Konto</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          href="/cart"
        >
          <Badge badgeContent={displayCartQuanity(cart)} color="error">
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // RENDERING--------------------------------------------------
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledFormGroup>
        <FormControlLabel
          control={
            <Switch
              onChange={isLogged ? logOut : logIn}
              aria-label="login switch"
            />
          }
          label={isLogged ? 'Logout' : 'Login'}
        />
        <FormControlLabel
          value="admin"
          onChange={isAdmin ? logOutAdmin : logInAdmin}
          control={<Checkbox />}
          label="Admin"
          labelPlacement="end"
        />
      </StyledFormGroup>
      <StyledAppBar position="sticky">
        <NavContainer maxWidth="lg">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              &quot;Jognięci&quot; - Twoja szkoła jogi
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge>
                  <a
                    style={{
                      fontSize: '18px',
                      marginBottom: 0,
                      color: 'white',
                      textDecoration: 'none',
                    }}
                    href="/"
                  >
                    Strona główna
                  </a>
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                href="/cart"
              >
                <Badge badgeContent={displayCartQuanity(cart)} color="error">
                  <ShoppingBasketIcon />
                </Badge>
              </IconButton>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </NavContainer>
      </StyledAppBar>

      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLogged: PropTypes.bool,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
  isAdmin: PropTypes.bool,
  logInAdmin: PropTypes.func,
  logOutAdmin: PropTypes.func,
  cart: PropTypes.array,
};

const mapStateToProps = state => ({
  isLogged: state.login.loggedIn,
  isAdmin: state.login.admin,
  cart: state.cart.data,
});

const mapDispatchToProps = dispatch => ({
  logIn: () => dispatch(createActionLogIn(true)),
  logOut: () => dispatch(createActionLogOut(false)),
  logInAdmin: () => dispatch(createActionLogInAdmin(true)),
  logOutAdmin: () => dispatch(createActionLogOutAdmin(false)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as NavBar, Component as NavBarComponent };
