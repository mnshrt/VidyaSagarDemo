import React from 'react';
import ValuesCards from '../components/ValuesCards';

const valueList=[
    {
        title:"Equity & Equality",
        content:"is giving everyone what they need to be successful and Equality is treating everyone the same. Equality aims to promote fairness,but it can only work if everyone starts from the same place and needs the same help."
    },
    {
        title:"Building Trust",
        content:"Our work is team work, which cannot succeed without sharing with each , being accountable to each other, our stakeholders and the community. This requires building transparency and trust."
    },
    {
        title:"Innovative Culture",
        content:"This is the core of Vidya Sagars philosophy and work. We persevere and build capacity and look for solutions where others think none exist. We try to think out of the box and do not try to fit square pegs in round holes. We are flexible and build programs around the needs of our stake holders. We can shake up the system if needed, to positively transform the lives of the families we work with."
    },
    {
        title:"Celebrate Life, Celebrate Differences",
        content:"What underlines the life at Vidya Sagar."
    }
]
class ValuesContainer extends React.Component{
    
    render(){
        
        return(
            <div className= "valuesContainer">
            {valueList.map((value,index)=>
                <ValuesCards key={"vl-"+index} title={value.title} content={value.content}/>
                )}
            </div>
            
        )
    }
}
export default ValuesContainer;