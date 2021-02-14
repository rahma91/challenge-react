import React from 'react'
import { Component } from "react";
import '../App.css'
import { Button } from "react-bootstrap";
// import { Form } from "react-bootstrap";
// import { Label } from "react-bootstrap";
// import { useState } from "react-bootstrap";


class Increments extends React.Component {

    state = {
        count: 0,
        show: true
    }

    handlClickAdd = () => {


        this.id =setInterval(() => { 
            this.setState({
                count : this.state.count + 1
            })
      
        }, 1000);  
        
        console.log(this.id)

            this.setState({
                show: !this.state.show
            })

    }



    handlClickStop = () => {


            clearInterval(this.id)
        

            this.setState({
                show: !this.state.show
            })

    }

       handlClickReset = () => {
                 this.setState({
                   count : 0,
                   show : this.state.show
                   
            })

           
    }



    render() {
        return (
            <div >
                <span className="chronometre" style={{ fontSize:'25px', fontWeight:'5px',color:'white' ,display:'flex' ,justifyContent:'center'  }} > Chronometre : </span> <br />
                <span className="count" style={{ fontSize:'40px', fontWeight:'5px',color:'white'  }} size="lg"> {this.state.count } </span> <br />

              { this.state.show === true ?
                    <Button variant="success" onClick={this.handlClickAdd}>Start</Button> 
                    : 
                  <Button variant="danger" onClick={this.handlClickStop}>Stop</Button>
    
             }
                <Button variant="primary" onClick={this.handlClickReset} >Reset</Button>






            </div>
        )
    }
}

export default Increments;