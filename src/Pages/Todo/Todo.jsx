import React from 'react'
import Layout from './../Layout/Layout'
import TodoList from './../Todo/TodoList'
import TodoAppBar from './../Todo/TodoAppBar'

import { Container, Input, Button } from '@material-ui/core';

const Todo = () => {
    return (
        <Layout>

            <Container maxWidth="md">
                <TodoAppBar />
                
                <TodoList />
            </Container>


        </Layout>
    );
}

export default Todo;