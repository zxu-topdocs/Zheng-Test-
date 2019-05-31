import React from 'react';

var firstName="ABC";
var lastName="DEFG";


function FooterText(mysize){
    return firstName + "-" + mysize

};

function MyFooter1(props){
    return (
        <div>
           
            <footer style={{display: props.size ? "block" : "none"  } }>{props.name} - {firstName + ' ' + lastName} and {FooterText(props.size)} </footer>
        </div>
    )
}


class MyFooter extends React.Component {
    render() {
        return (<footer  >Hello {firstName + ' ' + lastName} and {FooterText()} </footer>);
    }
}
export default MyFooter1