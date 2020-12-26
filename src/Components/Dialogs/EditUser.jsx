import React, { Fragment } from 'react';
import { Dialog, Button, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, Input, FormHelperText, Grid } from '@material-ui/core';
import CustomizedSnackbars from './../Snackbar/Snackbar';
import { Formik } from 'formik';


export default function EditUser(props) {

    // const sendConfirm = (values) => {
    //     props.modifiedUserData(values)
    // }

    const onSubmit = (value) => {
        console.log(value, "jafar")
        props.modifiedUserData(value)
    }

    return (
        <Fragment>
            <Dialog
                open={props.Open}
                onClose={props.Close}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Formik
                    onSubmit={(value) => { onSubmit(value) }}
                    initialValues={props.initialUserData}
                    enableReinitialize
                >
                    {({ handleSubmit, handleBlur, handleChange, values }) => (
                        <>
                            <DialogTitle id="alert-dialog-title">{"Edit User"}</DialogTitle>
                            <DialogContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="first_name">First Name</InputLabel>
                                            <Input
                                                type="text"
                                                name={"first_name"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.first_name}
                                                id="first_name"
                                                aria-describedby="my-helper-text"
                                            />
                                            <FormHelperText
                                                id="my-helper-text"
                                            >
                                                We'll never share your first name.
                                    </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="last_name">Last Name</InputLabel>
                                            <Input
                                                type="text"
                                                name={"last_name"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.last_name}
                                                id="last_name"
                                                aria-describedby="my-helper-text"
                                            />
                                            <FormHelperText
                                                id="my-helper-text"
                                            >
                                                We'll never share your Last name.
                                    </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="phone_number">Phone Number</InputLabel>
                                            <Input
                                                type="text"
                                                name={"phone_number"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phone_number}
                                                id="phone_number"
                                                aria-describedby="my-helper-text"
                                            />
                                            <FormHelperText
                                                id="my-helper-text"
                                            >
                                                We'll never share your Phone Number.
                                    </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="email">Email</InputLabel>
                                            <Input
                                                type="email"
                                                name={"email"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                id="email"
                                                aria-describedby="my-helper-text"
                                            />
                                            <FormHelperText
                                                id="my-helper-text"
                                            >
                                                We'll never share your Email.
                                    </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="height">Height</InputLabel>
                                            <Input
                                                type="text"
                                                name={"height"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.height}
                                                id="height"
                                                aria-describedby="my-helper-text"
                                            />
                                            <FormHelperText
                                                id="my-helper-text"
                                            >
                                                We'll never share your Height.
                                    </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="weight">Weight</InputLabel>
                                            <Input
                                                type="text"
                                                name={"weight"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.weight}
                                                id="weight"
                                                aria-describedby="my-helper-text"
                                            />
                                            <FormHelperText
                                                id="my-helper-text"
                                            >
                                                We'll never share your Weight.
                                    </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="color_of_body">Color of Body</InputLabel>
                                            <Input
                                                type="text"
                                                name={"color_of_body"}
                                                onChange={handleChange} onBlur={handleBlur}
                                                value={values.color_of_body}
                                                id="color_of_body"
                                                aria-describedby="my-helper-text"
                                            />
                                            <FormHelperText
                                                id="my-helper-text"
                                            >
                                                We'll never share your Color of Body.
                                    </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="color_of_hair">Color of Hair</InputLabel>
                                            <Input
                                                type="text"
                                                name={"color_of_hair"}
                                                onChange={handleChange} onBlur={handleBlur}
                                                value={values.color_of_hair}
                                                id="color_of_hair"
                                                aria-describedby="my-helper-text"
                                            />
                                            <FormHelperText
                                                id="my-helper-text"
                                            >
                                                We'll never share your Color of Hair.
                                    </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                </Grid>

                            </DialogContent>
                            <DialogActions>
                                <Button
                                    onClick={props.Close}
                                    color="secondary"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    onClick={() => handleSubmit()}
                                    color="primary"
                                    autoFocus
                                >
                                    Apply
                                </Button>
                            </DialogActions>
                        </>
                    )}
                </Formik>
            </Dialog>
            <CustomizedSnackbars />
        </Fragment>
    );
}
