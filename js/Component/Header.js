import React from 'react';


export default class MyHeader extends React.Component{   
    mytime(){
        const mydate = new Date();
        return mydate.getHours(); 
    }
    constructor(){
           super();
           this.state={
              answer: "Sample Text",
              size: 12 
           };
           this.btnBigClick = this.btnBigClick.bind(this)
           this.btnSmallClick = this.btnSmallClick.bind(this)
    }

    btnBigClick(){
        
        /*this.setState( {size: this.state.size+2})         

        Using setState we must bind the function in constructor */
        /*ES6*/
        this.setState(prevState => {
            return {
                size: prevState.size + 2 
            }
        })   
    }
    btnSmallClick(){
       
        /*this.setState( {size: this.state.size+2})         
        Using setState we must bind the function in constructor */
        /* ES5 */
        this.setState(
            function(prevState) {
                console.log("Change size " + prevState.size.toString());
                return {size: prevState.size - 2 }
            }
        )         
      
    }

    render(){
        
        return(
            <div>
                <header className="App-header">My time: {this.mytime()} </header>
                <p style={{fontSize : this.state.size }}>{this.state.answer}</p>
                <p>{this.state.size}</p>
                <buton onClick={this.btnBigClick} >Click to enlarge Sample Text</buton><br/>
                <buton onClick={this.btnSmallClick} >Click to small Sample Text</buton>
            </div>
        );
    }
}
 