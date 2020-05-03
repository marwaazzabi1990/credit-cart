import React, {Component} from 'react';
import './card.css';
import pus from '../cards/ff.png';
//var t=e.target.value;
const nameRegex= RegExp(/[a-z]+[/s]*/);
const regex=  RegExp(/^([0-9])+$/);

//copyage de contenu d'input 
  function clearNumber(value = '') 
  {
   console.log(regex.test(value));
    
    return value.replace(/\D+/g, '');
  }

  /*Test sur le format de date d'expiration*/


  function formatExpirationDate(value) {
    const clearValue = clearNumber(value);
  
    if(regex.test(clearValue)==true)
       { 
    if (( clearValue.length <=4)) {
        var jour=`${clearValue.slice(0, 2)}`
        console.log((parseInt(jour)))
        var anne=`${clearValue.slice(2, 4)}`
        console.log(anne)
        //test sur la date experation 
        if(parseInt(anne)<=25 && parseInt(anne)>20)
        {
              if((parseInt(jour)>0 && parseInt(jour)<=12))
             {
                return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
               }
        
         
                }
            }
            else{
              alert('vous avez depassez 4 chifres')
            }
          }else{
            alert('vous devez entrer que des chiffres')
          }
    
  
   
  }


  /*  test de format sur num cart*/


  function formatCreditCardNumber(value) {
   
      
      

        const clearValue = clearNumber(value);
       // console.log(clearValue);
       if(regex.test(clearValue)==true)
       {  
         console.log(regex.test(clearValue))
        if((clearValue.length<=16))
        {
            let arr1=`${clearValue.slice(0, 4)}`
            let arr3=`${clearValue.slice(
                4,
                8,
              )}`
              let arr4=`${clearValue.slice(8, 12)}`
              let arr8=`${clearValue.slice(12, 16)}`
            let arr2=' '
         //  let  arr3='cvc'
           var arr= arr1.concat(arr2);
           var arr5=arr.concat(arr3)
           var arr6=arr5.concat(arr2)
           var arr7=arr6.concat(arr4)
           var arr9=arr7.concat(arr2)
           var arr10 =arr9.concat(arr8)
          // console.log(arr10)
           return arr10}
            
            else{
              alert('vous aveez passer le nombre de 16')
              return ('')
                
            }}else{
              alert('vous devez entrer que  des chifres')
            }
        
        }
      
    
  
/* declaration de state*/
class Card extends Component{
    state={
        name:null,
        exp:'',
        RIB:'************'
    
        
    }
    /* function de handelchange*/

handleChange=e=>{
    e.preventDefault();

  

  
      const {name}=e.target;
      
    switch(name)
    {
        case "first_name":
     /*affectation denom sur la carte*/
       if(nameRegex.test(e.target.value))
        {
            var nn=e.target.value
           console.log(nameRegex.test(e.target.value))
            var n1=nn.toUpperCase();
            this.setState({
        
       name:n1})
            
        }
       
        else{
            e.target.value=""
            this.setState({
        
                name: ""})
                     
                 
            }
        break;
          /* affectation de num de carte */
        case "rib":
        
           
          
           
            this.setState({
              
        
      RIB:formatCreditCardNumber(e.target.value)
    })
          
                     
                 
        
      
        break;
      /*affictation de date d'experation*/
      case "exp":
      if(formatExpirationDate(e.target.value)===null)
      {
        e.target.value='';
      }else{
        this.setState({ exp:formatExpirationDate(e.target.value)
        })
      }
     
      break;
      
    }
} 
   
       
  
  


   
    render()
    { 
        return(
            <div className="glob">
               <h1>React Credit Cards</h1>
          <h4>Beautiful credit cards for your payment forms</h4>
        
            <div  className="card">
              <img  className="pus-img" src={pus} alt="creditcard"></img>
                <div >
                <label className="nn">Name</label><br/>
        <span  className="name"> {this.state.name}</span><br/>
        </div>
        <div >
        <label className="exp1">exp</label><br/>
        <span className="exp">{this.state.exp}</span><br/>
        </div>
        <div className="RIB">
       
        <span className="RIB">{this.state.RIB}</span><br/>
        </div>
            </div>

            
            <div>
              <form>
                <input className="inp-tap" type="text"  name="first_name"  placeholder="your name" onChange={this.handleChange}></input> <br/>
                <input  className="inp-tap" type="text" name="exp" placeholder="YY/MM" pattern="\d\d/\d\d" onChange={this.handleChange}></input><br/>
<input type="text"  className="inp-tap" name="rib"  placeholder="Your RIB"   pattern="[\d| ]{16,22}" onChange={this.handleChange}></input><br/>
               
</form> 
</div>
           
            </div>

            );
        }
    }
export default Card;