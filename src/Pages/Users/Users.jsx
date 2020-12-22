import React, { useEffect, useState } from 'react';
import { Table, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import Layout from './../Layout/Layout';
import { UserService } from '../../Services/Service.Users';
import useStyles from '../../Components/UseStyle/UseStyle';
import DeleteUser from '../../Components/Dialogs/DeleteUser';
import '../../Styles/Css/Users.min.css';
import ActionButtons from './../../Components/ActionButtons/ActionButtons';
import AddUser from './AddUser';
import EditUser from '../../Components/Dialogs/EditUser';


export default function BasicTable(_props) {
    const classes = useStyles();

    let AllUser = new UserService()
    const GetUsers = async () => {
        try {
            let res = await AllUser.readApi()
            // console.log(res.data)
            setUsers(res.data)
        } catch (error) {
            console.log('error')
        }
    }
    useEffect(() => {
        GetUsers()
    }, [])
    const [Users, setUsers] = useState([]);
    // get user

    const [DeleteConfirm, setDeleteConfirm] = useState(false)
    const [ID, setID] = useState();
    const OpenDeleteConfirm = (id) => {
        setDeleteConfirm(true);
        setID(id);
    }
    const closeConfirm = () => {
        setDeleteConfirm(false)
        setEditConfirm(false);
    }
    const applyRow = async (id) => {
        console.log(id)
        try {
            await AllUser.deleteApi(id);
            GetUsers();
            closeConfirm()
        }
        catch (error) {
            console.error(error)
        }
    }
    // delete user

    const LastUser = async (values) => {
        await AllUser.createApi(values);
        // console.log(values)
        GetUsers();
    }
    // create user
    const [editConfirm, setEditConfirm] = useState(false)
    const OpenEditConfirm = (id) => {
        // console.log(id)
        setEditConfirm(true);
        editUser(id)
    }
    const [initialUserData, setInitialUserData] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        height: '',
        weight: '',
        color_of_body: '',
        color_of_hair: '',
    })
    const editUser = async (id) => {
        let res = await AllUser.getApiById(id)
        setInitialUserData(res.data)
        console.log(initialUserData)
    }
    const modifiedUserData = async (values) => {
        // await AllUser.updateApiById(id)
        // GetUsers()
        alert(values);
    }
    // update user

    return (
        <Layout>

            <EditUser
                Open={editConfirm}
                Close={closeConfirm}
                initialUserData={initialUserData}
                modifiedUserData={(values) => { modifiedUserData(values) }}
            />

            {/* <ActionButtons aria_label={'add'} /> */} 

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Firstname</TableCell>
                            <TableCell align="left">Lastname</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Color of body</TableCell>
                            <TableCell align="left">Color of hair</TableCell>
                            <TableCell align="center">Height&nbsp;(g)</TableCell>
                            <TableCell align="center">Weight&nbsp;(g)</TableCell>
                            <TableCell align="center">Edit</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Users.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.first_name}
                                </TableCell>
                                <TableCell align="left">{row.last_name}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.color_of_body}</TableCell>
                                <TableCell align="center">{row.color_of_hair}</TableCell>
                                <TableCell align="center">{row.height}</TableCell>
                                <TableCell align="center">{row.weight}</TableCell>
                                <TableCell align="center">
                                    <Button
                                        onClick={() => { OpenEditConfirm(row._id) }}
                                        variant="outlined"
                                        classes={{
                                            root: classes.btn_edit, // class name, e.g. `classes-nesting-root-x`
                                            label: classes.label, // class name, e.g. `classes-nesting-label-x`
                                        }}
                                    >
                                        Edit
                                    </Button>
                                </TableCell>
                                <TableCell align="center">
                                    <Button
                                        onClick={() => { OpenDeleteConfirm(row._id) }}
                                        variant="outlined"
                                        classes={{
                                            root: classes.btn_delete, // class name, e.g. `classes-nesting-root-x`
                                            label: classes.label, // class name, e.g. `classes-nesting-label-x`
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <AddUser
                NewUserValue={(values) => { LastUser(values) }}
            />
            <DeleteUser
                Open={DeleteConfirm}
                Close={closeConfirm}
                Id={ID} 
                applyRow={(id) => { applyRow(id) }}
            />
        </Layout>

    );
}
