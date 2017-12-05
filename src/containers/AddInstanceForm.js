import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const renderInput = (field) => {
    return (
        <div className='col-7'>
            <input className='form-control' {...field.input} type={field.type}/>
        </div>
    );
};

class AddInstanceForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(data) {
        this.props.onSubmit(data);
        this.props.reset();
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            <form className={'form-horizontal custom-form-styles'} onSubmit={handleSubmit(this.onSubmit)}>
                <div className='form-group row'>
                    <label className='col-5 col-form-label' htmlFor="containerName">Container name: </label>
                    <Field name="containerName" component={renderInput} type="text" />
                </div>
                <div className='form-group row'>
                    <label className='col-5 col-form-label' htmlFor="image">Image: </label>
                    <Field name="image" component={renderInput} type="text" />
                </div>
                <div className='form-group row'>
                    <label className='col-5 col-form-label' htmlFor="volumes_from">Volumes from: </label>
                    <Field name="volumes_from" component={renderInput} type="text" />
                </div>
                <div className='form-group row'>
                    <label className='col-5 col-form-label' htmlFor="ports">Ports: </label>
                    <Field name="ports" component={renderInput} type="text" />
                </div>
                <div className='form-group row'>
                    <label className='col-5 col-form-label' htmlFor="environment">Environment: </label>
                    <Field name="environment" component={renderInput} type="text" />
                </div>
                <div className='form-group row'>
                    <label className='col-5 col-form-label' htmlFor="volumes">Volumes: </label>
                    <Field name="volumes" component={renderInput} type="text" />
                </div>
                <div>
                    <button className='btn btn-primary' type="submit" disabled={pristine || submitting}>Add</button>
                </div>
            </form>
        );
    }
}

export default reduxForm({ form: 'add-docker-item' })(AddInstanceForm);