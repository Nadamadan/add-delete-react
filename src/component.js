import {useState} from 'react';

let nextId=5;

export function AddDeleteItems() {

    const[deviceInputValue,setDeviceInputValue]=useState("") // state of input in form
    const[devices,setDevice]=useState([  // devices contains all elements in array , setDevice function edit the array
      {id:1,name:"ipone"},
      {id:2,name:"mac"},
      {id:3,name:"samsung"},
      {id:4,name:"windows"},
    ]) // state of add new element or delete element 
  
    // to display elements
   const devicelist=devices.map((device)=>{
    return<li key={device.id}>
      {device.name}
  
       <button onClick={()=>
        {handleDelete(device.id); // i send to function (handle delete) the id of element i want to delete
        }}>Delete</button>
  
      </li>
   });
  
   // to delete element
  function handleDelete(id){
  const newDevice =devices.filter((device)=>{ // return all element to display expect  the element i want delete
    return device.id!==id
  });
  setDevice(newDevice); // edit the array
  }
  
  // function to add new element
   function handleClick(){
   //const newDevice=[...devices]; // stay all old element in new add
   //newDevice.push(deviceInputValue); // add the new element when i enter it in form 
   //setDevice(newDevice); // add new element to the array
   setDevice([...devices,{id:nextId,name:deviceInputValue}]); // stay all old element and add new one with id and name
   nextId=nextId+1;
   }
  
    return (
      <div style={{marginTop:"100px",fontSize:"30px"}}>
     
       {devicelist}
  
       <div>
        <input style={{height:"25px",width:"190PX", fontSize:"30px"}} 
        value={deviceInputValue} onChange={(event)=>{setDeviceInputValue(event.target.value)}} // here i enter name in form this name save in setDevicesValue
         type='text'/> 
        <button  onClick={handleClick}>Add</button>
       </div>
      </div>
    );
  }


  //********************************************* 
  

  export function RequestTracker() { 

    const [Pending,setPending]=useState(0); // initialize variable his name is pending (initial value = zero) and linked it with state when this variable change thraw the function setpending
    const [completed , setCompleted]=useState(0);
     function handleClick(){
       setPending((Pending)=>{
           return Pending+1;
       }); // to update the variable and increase one
      setTimeout(() => {  // after this time i decrease the same value by one and added one to the next variable
       setPending((Pending)=>{
           return Pending-1;
       });
       setCompleted((completed)=>{
           return completed+1;
       });
      },3000);
      
    }
    return(
       <>
       <h3>
           Pending : {Pending}
       </h3>
       <h3>
           Completed : {completed}
       </h3>
       <button onClick={handleClick}>
           Buy
       </button>
       </>
    )
     }







