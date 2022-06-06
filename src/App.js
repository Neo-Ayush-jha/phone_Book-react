import Header from './component/Header.jsx';
import Contact from './component/Contact.jsx';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Fab from '@mui/material/Fab';
import { Container } from '@mui/system';
import { Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, List, ListItem, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

function App(){
    const [open,setOpen]= useState(false);
    const handelOpen=()=>{setOpen(true);}
    const handelClose=()=>{setOpen(false);}

    const [task,setTask]= useState({
        name:"",
        number:"",
        email:"",
        dd:"dd"

    });
    const [data,SetData] = useState(()=>{
        let saveContact = localStorage.getItem('contact');
        if(saveContact){
            return JSON.parse(saveContact);
        }
        else{
            return [];
        }
    });
    useEffect(()=>{
        localStorage.setItem('contact',JSON.stringify(data))
    },[data]);
    const handelInsert=()=>{

        console.log(task)
        let newArray = [...data,{id:data.length+1,task}];
        SetData(newArray);
        setTask("");
        console.log('handelInsert');
    }
    //    const handelDelet=(id)=>{
    //     SetData(data.filter((task)=>task.id !== id))
    // }
    const handleInput  = (e) => {
        const newData = { ...task };
        newData[e.target.name] = e.target.value;
        newData[e.target.number] = e.target.value;
        newData[e.target.id] = data.length+1;
        setTask(newData);
        console.log(handleInput);
    }
    return(
        <>
                    <Header />
                    <Contact></Contact>
                    <Fab color="primary" aria-label="add"  sx={{position:'absolute', right:40,bottom:20}}>
                        <Dialog open={open} onClose={handelOpen}>
                            <DialogTitle>Open</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Hello
                                </DialogContentText>
                                <Grid sx={{display: 'flex'}}>
                                    <TextField fullWidth placeholder='Name' name="name" value={task.name} onChange={(e)=>handleInput(e)}  />
                                    <TextField value={task.number} name="number"  onChange={(e)=>handleInput(e)} fullWidth placeholder='Add Contact'/>
                                </Grid>
                                    <TextField value={task.email} name="email"  onChange={(e)=>handleInput(e)} fullWidth placeholder='Add Contact'/>
                            </DialogContent>
                            <DialogActions>
                                <Button color='success'  onClick={handelInsert} >Submit</Button>
                                <Button color='error'onClick={handelClose}>Cancle</Button>
                            </DialogActions>
                        </Dialog>
                        <AddTaskIcon onClick={handelOpen}/>
                    </Fab>
        </>
    );
}
export default App;