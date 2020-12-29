import React from 'react';
import { useFormik } from 'formik';
import { FormControl, InputLabel, Input, FormHelperText, Grid, Button } from '@material-ui/core';
import Layout from '../Layout/Layout';


const AddUser = (props) => {
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
            height: '',
            weight: '',
            color_of_body: '',
            color_of_hair: '',
        },
        onSubmit: (values) => {
            NewUser(values)
        },
    });

    const NewUser = (values) => {
        props.NewUserValue(values)
    }

    return (
        <Layout>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="first_name">First Name</InputLabel>
                            <Input
                                type="text"
                                name={"first_name"}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.first_name}
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
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.last_name}
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
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone_number}
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
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
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
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.height}
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
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.weight}
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
                                onChange={formik.handleChange} onBlur={formik.handleBlur}
                                value={formik.values.color_of_body}
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
                                onChange={formik.handleChange} onBlur={formik.handleBlur}
                                value={formik.values.color_of_hair}
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
                    {/* <Grid item xs={6}>
                    <Button
                        onClick={() => handleSubmit()}
                        type={"submit"}
                        variant="contained"
                        color="primary"
                    >
                        Register
                            </Button>
                </Grid> */}
                </Grid>
                <Button type="submit">Submit</Button>
            </form>
        </Layout>
    );
};
export default AddUser;