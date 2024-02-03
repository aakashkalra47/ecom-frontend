import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import { AppBar, Toolbar, Typography, Container, Menu, MenuItem, Box, styled } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
const NavItemDiv = styled('div')`
  border-bottom: 5px solid transparent;
  :hover{
  border-bottom: 5px solid white;
  }
`
const navItems = {
  Home: {},
  Men: {
    menuItems: [
      { name: 'T-shirts', category: 'men-tshirts' },
      { name: 'Shirts', category: 'men-shirts' },
      { name: 'Jeans', category: 'men-jeans' }
    ]
  },
  Women: {
    menuItems: [
      { name: 'Dresses', category: 'women-dresses' },
      { name: 'T-shirts', category: 'women-tshirts' },
      { name: 'Shirts', category: 'women-shirts' },
      { name: 'Jeans', category: 'women-jeans' }
    ]
  }
}
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [menu, setMenu] = useState('')
  const handleMouseOver = ({ currentTarget }, navItem) => {
    setTimeout(() => {
      if (anchorEl !== currentTarget) {
        setAnchorEl(currentTarget)
        setMenu(navItem)
      }
    }, 0)
  }
  const closeMenu = (navItem) => {
    setTimeout(() => {
      setMenu('')
      setAnchorEl(null)
    }, 0)
  }
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: 1, height: 72, display: 'flex' }}>
            {
              Object.keys(navItems).map((navItem) => (
                <NavItemDiv
                  key={navItem}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  onMouseOver={(event) => handleMouseOver(event, navItem)}
                  onMouseLeave={() => closeMenu(navItem)}
                >
                  <div className="mx-3">
                    <Typography
                      component="a"
                      sx={{
                        color: 'inherit',
                        textDecoration: 'none'
                      }}
                    >
                      {navItem}
                    </Typography>
                    {
                      navItems[navItem].menuItems && menu === navItem &&
                      <Menu
                        open={Boolean(anchorEl)}
                        autoFocus={false}
                        sx={{ width: 200, marginBottom: 3.5 }}
                        anchorEl={anchorEl}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        MenuListProps={{ onMouseLeave: () => closeMenu(navItem) }}
                      >
                        {
                          navItems[navItem].menuItems.map(({ name, category }) => (
                            <MenuItem key={category}>
                              <Link className="text-decoration-none" to={`/${category}`}>
                                <Typography textAlign="center">{name}</Typography>
                              </Link>
                            </MenuItem>
                          ))
                        }
                      </Menu>
                    }
                  </div>
                </NavItemDiv>
              ))
            }
          </Box>
          <Search />
          <Box className="ml-3">
             <Link to="/user/wishlist" className="nav-item-text ms-3">
               <FavoriteBorderIcon/>
             </Link>
             <Link to="/user/cart" className="nav-item-text ms-3">
               <ShoppingCartIcon/>
             </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    // <div className="nav-main-div">
    //   <div className="nav-flex">
    //     <div className="nav-item  text-center">
    //       <Link to="/" className="nav-item-text">
    //         Home
    //       </Link>
    //     </div>
    //     <div className="nav-item nav-item-pos">
    //       <div className="text-center">
    //         <Link to="#" className="nav-item-text">
    //           Men
    //         </Link>
    //       </div>
    //       <div className="nav-dropdown">
    //         <Link to="/men-tshirts">T-shirt</Link>
    //         <Link to="/men-shirts" className="nav-item-text">
    //           Shirts
    //         </Link>
    //         <Link to="/men-jeans" className="nav-item-text">
    //           Jeans
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="nav-item nav-item-pos">
    //       <div className="text-center">
    //         <Link to="#" className="nav-item-text  text-center">
    //           Women
    //         </Link>
    //       </div>
    //       <div className="nav-dropdown">
    //         <Link to="/women-tshirts" className="nav-item-text">
    //           T-shirt
    //         </Link>
    //         <Link to="/women-full-sleeve-tshirts" className="nav-item-text">
    //           Full Sleeve T-Shirts
    //         </Link>
    //         <Link to="/women-jeans" className="nav-item-text">
    //           Jeans
    //         </Link>
    //       </div>
    //     </div>
    //     <Search />
    //     <div style={{ flex: 1 }}></div>
    //     <div
    //       className="nav-item nav-item-pos d-flex flex-row"
    //       style={{ color: "white", textAlign: "left" }}
    //     >
    //       <div className="col">
    //         <Link to="/user/wishlist" className="nav-item-text">
    //           <i className="far fa-heart"></i>
    //         </Link>
    //       </div>
    //       <div className="col">
    //         <Link
    //           to="/user/cart"
    //           className="nav-item-text ml-3"
    //           style={{ color: "white", textAlign: "right" }}
    //         >
    //           <i className="fas fa-shopping-cart"></i>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="nav-item nav-item-pos">
    //       <Link to="#" className="nav-item-text">
    //         Profile
    //       </Link>
    //       <div className="nav-dropdown">
    //         <Link to="#">Profile</Link>
    //         <Link to="/user/orders" className="nav-item-text">
    //           My Orders
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
export default Navbar
