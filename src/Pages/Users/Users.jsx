import React, { useEffect, useState } from 'react';
import { Table, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import Layout from './../Layout/Layout';
import { UserService } from '../../Services/Service.Users';
import useStyles from '../../Components/UseStyle/UseStyle';
import DeleteUser from '../../Components/Dialogs/DeleteUser';
import '../../Styles/Css/Users.min.css';
import EditUser from '../../Components/Dialogs/EditUser';
import { AddUser } from '../../Components/Dialogs/AddUser';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Snackbars from '../../Components/Snackbar/Snackbar';


export default function Users(props) {
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
    const [ID_exactName, setID_exactName] = useState();
    const OpenDeleteConfirm = (id, name) => {
        setDeleteConfirm(true);
        setID_exactName(name)
        setID(id);
    }
    const closeConfirm = () => {
        setDeleteConfirm(false)
        setEditConfirm(false)
        setAddConfirm(false)
    }
    const applyRow = async (id) => {
        try {
            await AllUser.deleteApi(id);
            GetUsers()
            closeConfirm()
            handleOpenSnakbar()
        }
        catch (error) {
            console.error(error)
        }
    }
    // delete user

    const [AddConfirm, setAddConfirm] = useState(false)
    const OpenAddConfirm = () => { setAddConfirm(true) }
    const LastUser = async (values) => {
        await AllUser.createApi(values);
        GetUsers();
        setAddConfirm(false);
    }
    // create user

    const [editConfirm, setEditConfirm] = useState(false)
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
    const OpenEditConfirm = (UserData) => {
        console.log(UserData, 'mammad')
        setInitialUserData(UserData)
        setEditConfirm(true);
    }
    const modifiedUserData = async (value) => {
        let data = {
            first_name: value.first_name,
            last_name: value.last_name,
            phone_number: value.phone_number,
            email: value.email,
            height: value.height,
            weight: value.weight,
            color_of_body: value.color_of_body,
            color_of_hair: value.color_of_hair,
        }
        await AllUser.updateApi(data, value._id)
        GetUsers()
        closeConfirm()
    }
    // update user

    const [openSnakbar, setOpenSnakbar] = React.useState(false);
    const handleOpenSnakbar = () => {
        setOpenSnakbar(true);
    };
    const handleCloseSnakbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnakbar(false);
    };


    return (
        <Layout>
            <Snackbars open={openSnakbar} CloseSnackbar={handleCloseSnakbar} />

            {/* <ActionButtons aria_label={'add'} /> */}
            <Fab
                color="primary"
                aria-label="add"
                className={classes.fab}
                onClick={() => { OpenAddConfirm() }}
            >
                <AddIcon />
            </Fab>
            <AddUser
                NewUserValue={(values) => { LastUser(values) }}
                Open={AddConfirm}
                Close={closeConfirm}
            />
            <EditUser
                Open={editConfirm}
                Close={closeConfirm}
                initialUserData={initialUserData}
                modifiedUserData={(value) => { modifiedUserData(value) }}
            />
            <DeleteUser
                Open={DeleteConfirm}
                Close={closeConfirm}
                Id={ID}
                applyRow={(id) => { applyRow(id) }}
                Name={ID_exactName}
            />

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
                                        onClick={() => { OpenEditConfirm(row) }}
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
                                        onClick={() => { OpenDeleteConfirm(row._id, row.email) }}
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

        </Layout>

    );
}
