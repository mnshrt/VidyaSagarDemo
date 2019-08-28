import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ImageCarousel.css';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from "@material-ui/core/styles"

const carouselSlidesData = [
  {
    content:`<span class="pink">Vidyasagar is a</span> movement <br/> A flight for freedom </br> <span class="pink">A</span> statement <span class="pink">of</span> faith`,
    imgurl: process.env.PUBLIC_URL+"/assets/headliner1.jpg",
    button1 : "Learn More",
    button2 : "Meet Our Alumni"

  }, {
    content:`At <span class="pink">Vidya</span> Sagar <br/> we celebrate <span class="pink">life</span><br/> and celebrate <span class="pink">differences<span>`,
    imgurl:process.env.PUBLIC_URL+"/assets/headliner2.jpg",
    button1 : "Our Mission",
    button2 : "Our Impact"
  }, {
    content:`We beleive <br/> <span class="pink">it is the</span> people <span class="pink">who</span> count <br/> <span class="pink">not</span> the disability`,
    imgurl:process.env.PUBLIC_URL+"/assets/headliner3.jpg",
    button1 : "Read Our Story",
    button2 : "Learn About Our Programs"
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

  extendedButton:{
    width:'auto',
    margin: theme.spacing(1),
  }
}));
export default function ImageCarousel(){

  const classes = useStyles();

  return (
  <Carousel >
    {carouselSlidesData.map((slide,index)=>{
      return (
       <Carousel.Item key={`crs-${index}`}>
         <img
           className="slide"
           src= {slide.imgurl}
           alt={"slide-"+index}
         />
         <Carousel.Caption className="quotes">
         <h3 className="quote" dangerouslySetInnerHTML={{__html: 
        slide.content}}></h3>
         <div className="buttons">  
           <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="add"
                className={classes.extendedButton} >
                {slide.button1}</Fab>
            <Fab
                variant="extended"
                size="medium"
                color="secondary"
                aria-label="add"
                className={classes.extendedButton}
               >{slide.button2}</Fab>
            </div>
         </Carousel.Caption>
       </Carousel.Item>
      )
    })}
 </Carousel>)
 }

