import React, {useRef, useState} from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { AppBar,Toolbar,Typography,Container,Menu,MenuItem,Box ,styled} from "@mui/material";
const NavItemDiv=styled('div')`
  border-bottom: 5px solid transparent;
  :hover{
  border-bottom: 5px solid white;
  }
`
export default function Login() {
  const navItems={
    Home:{},
    Men:{
      navItemRef:useRef(null),
      menuItems:['T-shirts', 'Shirts','Jeans' ]
    },
    Women:{
      navItemRef:"women-ref",
      menuItems:['T-shirts', 'Shirts','Jeans' ]
    }
  }
  const [menuVisible,setMenuVisible]=useState("")
  const handleMouseOver=(navItem)=>{
    // setMenuVisible(navItem)
  }
  const handleMouseOut=()=> {
    setMenuVisible("")
  }
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Box sx={{flexGrow:1,height:72,display:'flex'}}>
          {
            Object.keys(navItems).map((navItem)=> (
              <NavItemDiv style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div className="mx-3">
                <Typography
                  component="a"
                  id={`nav-item-${navItem}`} 
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                  onMouseOver={()=>handleMouseOver(navItem)}
                >
                  {navItem}
                </Typography>
                {
                  navItems[navItem].menuItems && menuVisible === navItem &&
                  <Menu
                    open={true}
                    sx={{ width:200, marginTop:3}}
                    anchorEl={()=>document.getElementById(`nav-item-${navItem}`)}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    // onMouseOver={()=>handleMouseOver(navItem)}
                    // onMouseOut={()=>setMenuVisible("")}
                  >
                    { 
                      navItems[navItem].menuItems.map((item) => (
                        <MenuItem key={item}>
                          <Typography textAlign="center">{item}</Typography>
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
          <Search/>
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
  );
}
