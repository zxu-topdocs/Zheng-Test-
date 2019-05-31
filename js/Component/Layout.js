import React from 'react';
import MyHeader from './Header';
import MyFooter from "./MyFooter";
import ProductData from "./ProductData";
import Product from "./Product";
import { tsConstructorType } from '@babel/types';

function MyTime(){
    const mydate = new Date();
    var myword ='';  

    const style1={
        color: "#FF0000", 
        textAlign: "center",
        fontSize : 30
    }

    if (mydate.getHours() >=12) {
        myword='Afternoon '+ mydate.getHours() +"PM";       
        style1.color = "#FF00FF";   
    }
    else {
        myword='Morning '+ mydate.getHours() +"AM";   
        style1.color = "#0000FF";  
    }
   
    return (<p style={style1}>{myword}</p>);
}


function MyApp1(myStats){
   

    /*const productComponent = ProductData.map(item => <Product key={item.id} Product={item} />);*/

    const productComponent = myStats.map(function(myitem) {return (<Product key={myitem.id} myProduct={myitem} />)})

    return (
        <div>
            <MyHeader />
            <p >{MyTime()}</p>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
           
            {productComponent}
            <MyFooter name="Footer1" size="10" />
            <MyFooter name="Footer2" size="20" />
            <MyFooter name="Footer3"  />
            <MyFooter name="Footer4" size="40" />
        </div>
    )
}

export default class Layout extends React.Component{  
    constructor(){
        super();
        this.state={
            mylist: ProductData,
        }
        this.handleChange1 = this.handleChange1.bind(this) 
    }
    handleChange1(myid) {
        this.setState(prevState =>{
            const newProducts = prevState.mylist.map(oneItem=>{
                    if (oneItem.id === myid) {
                        oneItem.available = !oneItem.available
                    }
                    return oneItem
            })
            return {mylist: newProducts}
        })
    }
    
    render(){

        const productComponent = this.state.mylist.map(myItem => <Product key={myItem.id} myProduct={myItem} handleChange2={this.handleChange1}  />)
       
        return(
           //MyApp1(this.state.mylist)
              <div>
                  {productComponent}
              </div>



        );
    }
}

//export default MyApp1;
 