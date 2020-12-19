import { React, Fragment } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button, Grid, Form } from '@material-ui/core';
import Layout from './../Layout/Layout';
import { Formik } from "formik";
import * as Yup from 'yup';
import ActionButtons from '../../Components/ActionButtons/ActionButtons';


const AddUser = () => {


    // const validationForm = Yup.object({
    //     first_name: Yup.string().required('Required'),
    //     last_name: Yup.string().required('Required'),
    //     email: Yup.string().required('Required'),
    // })

    const SubmitForm = async (value) => {
        console.log(value)
        // await _PersonUsers.create(value);
        // props.history.push("/users/users")
    }

    return (
        <Layout>

            <ActionButtons aria_label={'add'} />
            
            <Formik
                // initialValues={initialValueOfForm}
                onSubmit={(e) => SubmitForm(e)}
                // validationSchema={validationForm}
            >
                {({ handleSubmit, handleChange, handleBlur, errors, touched }) => (
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="first_name">First Name</InputLabel>
                                <Input
                                    type="text"
                                    name={"first_name"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
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
                                    id="email"
                                    id="phone_number"
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
                                    onChange={handleChange}
                                    onBlur={handleBlur}
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
                                    onChange={handleChange}
                                    onBlur={handleBlur}
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
                        <Grid item xs={6}>
                            <Button
                                onClick={() => handleSubmit()}
                                type={"submit"}
                                variant="contained"
                                color="primary"
                            >
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </Formik>
        </Layout>
    );
}
export default AddUser;
