import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles(theme => ({
    root1: {
      margin: theme.spacing(2),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    root2:{
        margin: theme.spacing(2),
        textAlign:'center',
    },
    icon: {
      margin: theme.spacing(2),
      '&:hover': {
        color: red[800],
      },
    },
    
  }));

  // takes three props first two are part of heading and the last for an
  // optional view all button
  export default function SubHeader(props) {
    const classes = useStyles();
    
      return ( 
          props.viewAll?
          <div className={classes.root1}>
              <div>
              <h1> <span className="partOne">{props.partOne}</span> <span className="partTwo">{props.partTwo}</span></h1> 
              </div>
              <div>
                  <a href="#">View All <AddCircleIcon/></a>
              </div>
          </div> :
          <div className={classes.root2}>
          <h1> <span>{props.partOne}</span> <span>{props.partTwo}</span></h1> 
          </div>
      );

    
}