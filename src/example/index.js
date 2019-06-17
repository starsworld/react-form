import React from 'react';
import {Form, Field} from '../form';

function onSubmit() {

}

function Example() {

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{storage: 12}}
            render={({handleSubmit, form}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <Field
                            name='firstName'
                            component='input'
                            type='text'
                            placeholder='first name'
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <Field
                            name='lastName'
                            component='input'
                            type='text'
                            placeholder='last name'
                        />
                    </div>
                </form>
            )}
        >
            <form></form>
        </Form>
    )
}

export default Example;
