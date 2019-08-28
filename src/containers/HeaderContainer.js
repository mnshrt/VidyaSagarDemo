import React from 'react';
import ImageCarousel from '../components/image-carousel/ImageCarousel';

// fetch data to be displayed in the slides
// if no state is maintained turn it into a functional component

class HeaderContainer extends React.Component{
    render(){
        return(
            <ImageCarousel/>
        )
    }
}
export default HeaderContainer;