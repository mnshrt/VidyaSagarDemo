import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
const subjects = [
     {
        value: 'our-programs',
        label: 'Our Programs',
      }, {
        value: 'career-volunteer',
        label: 'Careers/Volunteer',
      }, {
        value: 'giving',
        label: 'Giving',
      }, {
        value: 'other',
        label: 'Other',
      }
  ];
const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width:'50%',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
    submitButton:{
      width:'auto',
      margin: theme.spacing(1),
    }
  }));

export default function ContactForm(){

    const [values, setValues] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };
    const classes = useStyles();
    
     return (
        <form className={classes.container}>
                <TextField
                         id="outlined-name-input"
                         label="Name"
                         className={classes.textField}
                         margin="normal"
                         variant="outlined"/> 
                <TextField
                         id="outlined-email-input"
                         label="Email"
                         className={classes.textField}
                         type="email"
                         margin="normal"
                         variant="outlined"/>
          

            <TextField
                  id="outlined-select-subject"
                  select
                  label="Subject"
                  className={classes.textField}
                  value={values.subject}
                  onChange={handleChange('currency')}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  helperText="Please select your subject"
                  margin="normal"
                  variant="outlined"
                >
                   {subjects.map(option => (
                     <MenuItem key={option.value} value={option.value}>
                       {option.label}
                     </MenuItem>
                   ))}
             </TextField>
                   <TextField
                          id="outlined-multiline-static"
                          label="Message"
                          multiline
                          rows="4"
                          placeholder="your message..."
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"/>
          <Fab color='primary' className={classes.submitButton} variant="extended">
        
        submit
      </Fab>
            
        </form> 
        )   
    
}
