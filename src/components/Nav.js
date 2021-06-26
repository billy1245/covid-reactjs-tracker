import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ReactCountryFlag from "react-country-flag"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar({country , updateCountry}) {
  const classes = useStyles();
  const [inputs ,setInputs] = useState('');
  const [dataCountry , setDataCountry] = useState([])
  const handelSearch = (event) => {
    
    setInputs(event)
    setDataCountry(country.sort().filter(e => e.country.indexOf(inputs) > -1).slice(0 , 20))
    if(!inputs){
      setDataCountry([])
        }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Covid tracker
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onChange={(e)=>handelSearch(e.target.value.toLowerCase())}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={inputs}
              inputProps={{ 'aria-label': 'search' }}
            />
            {inputs ? <ul >
            {dataCountry.map((e,index)=>{
              return (
                <li key={index} className="countryflags" onClick={(el) => updateCountry(e.info.iso2 ,e.country ,setInputs()) } >{e.country} 
                <ReactCountryFlag countryCode={e.info.iso2} svg />
                </li>
              )
            })}
            </ul> : <></>}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
