import { Avatar, Button, Card, List, ListItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

import { deepOrange, deepPurple } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";


const DataRow=(props)=>{
    // const handelDelet=(id)=>{
    //     SetData(data.filter((task)=>task.id !== id))
    // }
    return(
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><Avatar sx={{ bgcolor: deepPurple[500] }}>{props.dd}</Avatar></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.number}</TableCell>
            <TableCell>{props.email}</TableCell>
            <TableCell><Button variant="outlined" sx={{ color: deepOrange[500] }} startIcon={<DeleteIcon />}>
  Delete
</Button></TableCell>
        </TableRow>
    )
}
const ContactList = ()=>{
    const [data,SetData] = useState(()=>{
        let saveContact = localStorage.getItem('contact');
        if(saveContact){
            return JSON.parse(saveContact);
        }
        else{
            return [];
        }
    }); 
   
    return(
        <TableContainer sx={{maxHeight:700,marginTop:5}}>
                <Table stickyHeader >
                <TableHead >
                    <TableRow>
                        <TableCell>Id.</TableCell>
                        <TableCell>Action</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Contact</TableCell>
                        {/* <TableCell>Email</TableCell> */}
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {/* <DataRow dd='A' name="Ayush" number="9117685337" email="ayush@gmail.com"/>
                        <DataRow dd='P' name="Prince" number="9117685337" email="ayush@gmail.com"/>
                        <DataRow dd='A' name="Ayush" number="9117685337" email="ayush@gmail.com"/>
                        <DataRow dd='P' name="Prince" number="9117685337" email="ayush@gmail.com"/>
                        <DataRow dd='A' name="Ayush" number="9117685337" email="ayush@gmail.com"/> */}
                                <TableRow>
                                <TableCell> {
                                    data.map((value,key) => (
                                        <DataRow id={value.id} name={value.task.name} dd={value.task.dd} number={value.task.number} email={value.task.email}/>
                                        // <ListItem key={key}>{value.handleInput }</ListItem>
                                    ))
                                    }
                                </TableCell>
                                </TableRow>
                </TableBody>
                        
            </Table>
        </TableContainer>
    )
}
export default ContactList;