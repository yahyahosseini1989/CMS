import React from 'react';

const NewTodo = (props) => {
    return ( 
        <>
            <Input
                    type="text"
                    name={"color_of_hair"}
                    // onChange={formik.handleChange} onBlur={formik.handleBlur}
                    // value={formik.values.color_of_hair}
                    id="color_of_hair"
                    aria-describedby="my-helper-text"
                />
                <Button variant="outlined" color="primary">
                    Add
                </Button>
        </>
     );
}
 
export default NewTodo;