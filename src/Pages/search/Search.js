import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
function Search() {
  const [type, setType] = useState(0)
  return <div>
    <div className="search" style={{display : "flex", justifyContent: "center" }}>
      <TextField
       className="searchBox" 
       label="Search" variant="filled" 
       style={{backgroundColor : "#fff", borderRadius : "10px", flex : "1",marginRight: "40px"}} />
      <Button variant="contained"><SearchIcon/></Button>
  </div>
  <Tabs value={type}  >
          <Tab style={{ width: "50%" }} label="Search Movies"  />
          <Tab style={{ width: "50%" }} label="Search TV Series"  />
  
        </Tabs>
  </div>
}

export default Search;
