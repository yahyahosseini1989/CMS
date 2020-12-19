import React, { useEffect, useState } from 'react';
import { Table, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import Layout from './../Layout/Layout';
import { UserService } from '../../Services/Service.Users';
import useStyles from '../../Components/UseStyle/UseStyle';
import DeleteUser from '../../Components/Dialogs/DeleteUser';
import '../../Styles/Css/Users.min.css';
import ActionButtons from './../../Components/ActionButtons/ActionButtons';
import AddUser from './AddUser';


export default function BasicTable(props) {
    const classes = useStyles();

    let AllUser = new UserService()
    const GetUsers = async () => {
        try {
            let res = await AllUser.getUsers()
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


    const [DeleteConfirm, setDeleteConfirm] = useState(false)
    const [ID, setID] = useState();
    const OpenDeleteConfirm = (id) => {
        setDeleteConfirm(true);
        setID(id);
    }
    const CloseConfirm = () => {
        setDeleteConfirm(false)
    }

    const applyRow = async (id) => {
        try {
            await AllUser.deleteUser(id);
            GetUsers();
            CloseConfirm()
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <Layout>

            <AddUser />
            <ActionButtons aria_label={'add'}  />
            
            {
                /* باید یه دکمه به صورت speedDial در پاین صفحه قرار دهم و آن را به مودال
                 اضافه کردن کاربر متصل کنم */
            }

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
                                        onClick={() => { alert('clicked') }}
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
            
            <DeleteUser Open={DeleteConfirm} Close={CloseConfirm} Id={ID} applyRow={(id) => { applyRow(id) }} />
        </Layout>

    );
}
