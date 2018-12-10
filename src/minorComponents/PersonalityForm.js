import React, { Component } from 'react';
import {Container,Row} from 'react-bootstrap';

class PersonalityForm extends Component 
{

    constructor(props)
    {
        super(props);
        this.state = 
        {
            nameValue:'Jason',
            passwordValue:'pw123456',
            ageValue:'18',
            sexValue:'Male',
            mailValue:'Artastic@gmail.com',
            pnumberValue:'159-2019-2023',
            addressValue:'No.23/Mapl eStreet/Long Beach/Los Angeles/California',
            jobValue:'College Student',
            descripValue:'Barren',            
        };
    }

    
    edit(myButton)
    {
        var CorresButton = myButton.target;
        switch(myButton.target.id)
        {
            case "0":
            var CorresInput = document.getElementById("nameInput");
            if(CorresButton.innerHTML == "修改")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "black";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "完成";
            }
            else if(CorresButton.innerHTML == "完成")
            {
                if(CorresInput.value == "")
                {
                  alert("Please input your name!");
                }
                else
                {
                  CorresButton.style.backgroundColor = "grey";
                  CorresButton.style.color = "black";
                  CorresButton.innerHTML = "修改";
                }
            }
            break;

            case "1":
            var CorresInput = document.getElementById("passwordInput");
            if(CorresButton.innerHTML == "修改")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "black";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "完成";
            }
            else if(CorresButton.innerHTML == "完成")
            {
                if(CorresInput.value == "")
                {
                  alert("Please input your password!");
                }
                else
                {
                  CorresButton.style.backgroundColor = "grey";
                  CorresButton.style.color = "black";
                  CorresButton.innerHTML = "修改";
                }
            }
            break;

            case "2":
            var CorresInput = document.getElementById("ageInput");
            if(CorresButton.innerHTML == "修改")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "black";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "完成";
            }
            else if(CorresButton.innerHTML == "完成")
            {
                if(CorresInput.value == "")
                {
                  alert("Please input your age!");
                }
                else
                {
                  CorresButton.style.backgroundColor = "grey";
                  CorresButton.style.color = "black";
                  CorresButton.innerHTML = "修改";
                }
            }
            break;

            case "3":
            var CorresInput = document.getElementById("sexInput");
            if(CorresButton.innerHTML == "修改")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "black";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "完成";
            }
            else if(CorresButton.innerHTML == "完成")
            {
                if(CorresInput.value == "")
                {
                  alert("Please input your sex!");
                }
                else
                {
                  CorresButton.style.backgroundColor = "grey";
                  CorresButton.style.color = "black";
                  CorresButton.innerHTML = "修改";
                }
            }
            break;

            case "4":
            var CorresInput = document.getElementById("mailInput");
            if(CorresButton.innerHTML == "修改")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "black";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "完成";
            }
            else if(CorresButton.innerHTML == "完成")
            {
                if(CorresInput.value == "")
                {
                  alert("Please input your mail address!");
                }
                else
                {
                  CorresButton.style.backgroundColor = "grey";
                  CorresButton.style.color = "black";
                  CorresButton.innerHTML = "修改";
                }
            }
            break;

            case "5":
            var CorresInput = document.getElementById("pnumberInput");
            if(CorresButton.innerHTML == "修改")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "black";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "完成";
            }
            else if(CorresButton.innerHTML == "完成")
            {
                if(CorresInput.value == "")
                {
                  alert("Please input your phone number!");
                }
                else
                {
                  CorresButton.style.backgroundColor = "grey";
                  CorresButton.style.color = "black";
                  CorresButton.innerHTML = "修改";
                }
            }
            break;

            case "6":
            var CorresInput = document.getElementById("addressInput");
            if(CorresButton.innerHTML == "修改")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "black";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "完成";
            }
            else if(CorresButton.innerHTML == "完成")
            {
                if(CorresInput.value == "")
                {
                  alert("Please input your address!");
                }
                else
                {
                  CorresButton.style.backgroundColor = "grey";
                  CorresButton.style.color = "black";
                  CorresButton.innerHTML = "修改";
                }
            }
            break;

            case "7":
            var CorresInput = document.getElementById("jobInput");
            if(CorresButton.innerHTML == "修改")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "black";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "完成";
            }
            else if(CorresButton.innerHTML == "完成")
            {
                if(CorresInput.value == "")
                {
                  alert("Please input your job!");
                }
                else
                {
                  CorresButton.style.backgroundColor = "grey";
                  CorresButton.style.color = "black";
                  CorresButton.innerHTML = "修改";
                }
            }
            break;

            case "8":
            var CorresInput = document.getElementById("descripInput");
            if(CorresButton.innerHTML == "修改")
            {
                CorresInput.readOnly = false;
                CorresButton.style.backgroundColor = "black";
                CorresButton.style.color = "white";
                CorresButton.innerHTML = "完成";
            }
            else if(CorresButton.innerHTML == "完成")
            {
                if(CorresInput.value == "")
                {
                  alert("Please input your description!");
                }
                else
                {
                  CorresButton.style.backgroundColor = "grey";
                  CorresButton.style.color = "black";
                  CorresButton.innerHTML = "修改";
                }
            }
            break;
        }
    }
    
    handleChange = (event) =>
    {
        switch(event.target.id)
        {
            case"nameInput":
            this.setState({nameValue:event.target.value});
            break;
            case"passwordInput":
            this.setState({passwordValue:event.target.value});
            break;
            case"ageInput":
            this.setState({ageValue:event.target.value});
            break;
            case"sexInput":
            this.setState({sexValue:event.target.value});
            break;
            case"mailInput":
            this.setState({mailValue:event.target.value});
            break;
            case"pnumberInput":
            this.setState({pnumberValue:event.target.value});
            break;
            case"jobInput":
            this.setState({jobValue:event.target.value});
            break;
            case"addressInput":
            this.setState({addressValue:event.target.value});
            break;
            case"descripInput":
            this.setState({descripValue:event.target.value});
            break;
        }
        
    };

    render() 
    {
    return (
      <Container style={{width:'52rem'}}>
        <br />
        <Row>
           <div class="list-group" style={{width:'49rem'}}>
             <a class="list-group-item">
               <div class="input-group" style={{width:'45rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Name:</span>
                 <input onChange={this.handleChange} value={this.state.nameValue} id="nameInput" type="text" readonly="readonly" class="form-control" aria-describedby="basic-addon1" style={{width:'30rem'}}></input>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="0">修改</button>
                 </span>
               </div>
             </a>
             <a class="list-group-item">
               <div class="input-group" style={{width:'45rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Password:</span>
                 <input onChange={this.handleChange} value={this.state.passwordValue} id="passwordInput" type="text" readonly="readonly" class="form-control" aria-describedby="basic-addon1" style={{width:'30rem'}}></input>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="1">修改</button>
                 </span>
               </div>
             </a>
             <a class="list-group-item">
               <div class="input-group" style={{width:'45rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Age:</span>
                 <input onChange={this.handleChange} value={this.state.ageValue} id="ageInput" type="text" readonly="readonly" class="form-control" aria-describedby="basic-addon1" style={{width:'30rem'}}></input>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="2">修改</button>
                 </span>
               </div>
             </a>

             
             <a class="list-group-item">
               <div class="input-group" style={{width:'45rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Sex:</span>
                 <input onChange={this.handleChange} value={this.state.sexValue} id="sexInput" type="text" readonly="readonly" class="form-control" aria-describedby="basic-addon1" style={{width:'30rem'}}></input>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="3">修改</button>
                 </span>
               </div>
             </a>

             <a class="list-group-item">
               <div class="input-group" style={{width:'45rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Mail:</span>
                 <input onChange={this.handleChange} value={this.state.mailValue} id="mailInput" type="text" readonly="readonly" class="form-control" aria-describedby="basic-addon1" style={{width:'30rem'}}></input>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="4">修改</button>
                 </span>
               </div>
             </a>
             <a class="list-group-item">
               <div class="input-group" style={{width:'45rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Phone Number:</span>
                 <input onChange={this.handleChange} value={this.state.pnumberValue} id="pnumberInput" type="text" readonly="readonly" class="form-control" aria-describedby="basic-addon1" style={{width:'30rem'}}></input>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="5">修改</button>
                 </span>
               </div>
             </a>
             <a class="list-group-item">
               <div class="input-group" style={{width:'45rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Address:</span>
                 <input onChange={this.handleChange} value={this.state.addressValue} id="addressInput" type="text" readonly="readonly" class="form-control" aria-describedby="basic-addon1" style={{width:'30rem'}}></input>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="6">修改</button>
                 </span>
               </div>
             </a>
             <a class="list-group-item">
               <div class="input-group" style={{width:'45rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Job:</span>
                 <input onChange={this.handleChange} value={this.state.jobValue} id="jobInput" type="text" readonly="readonly" class="form-control" aria-describedby="basic-addon1" style={{width:'30rem'}}></input>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="7">修改</button>
                 </span>
               </div>
             </a>
             <a class="list-group-item">
               <div class="input-group" style={{width:'45rem'}}>
                 <span class="input-group-addon" id="basic-addon1" style={{width:'8rem'}}>Description:</span>
                 <textarea onChange={this.handleChange} value={this.state.descripValue} id="descripInput" readonly="readonly" class="form-control" type="text" cols="20" rows="5" name="S1" aria-describedby="basic-addon1" style={{width:'30rem'}}></textarea>
                 <span class="input-group-btn" style={{marginLeft:'1rem'}}>
                   <button class="btn btn-default" type="button" onClick={(dom)=>{this.edit(dom)}} id="8">修改</button>
                 </span>
               </div>
             </a>
           </div>

           
        </Row>
      </Container>
    );
  }
}
export default PersonalityForm;