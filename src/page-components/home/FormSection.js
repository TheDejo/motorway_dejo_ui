import React, { useState } from 'react';
import helpers from '../../utils/helper';

const { validate } = helpers;

const FormSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dob: '',
        color: '',
        salary: ''
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate(formData);
        if (Object.keys(errors).length === 0) {
            console.log(formData);
        } else {
            setFormErrors(errors);
        }
    };

    const INPUT_FIELDS = [
        {
            name: 'name',
            type: 'text',
            label: 'Name'
        },
        {
            name: 'email',
            type: 'text',
            label: 'Email'
        },
        {
            name: 'dob',
            type: 'date',
            label: 'Date of birth'
        },
        {
            name: 'color',
            type: 'text',
            label: 'Favourite color'
        },
        {
            name: 'salary',
            type: 'range',
            label: 'Salary'
        }
    ];

    return (
        <form onSubmit={handleSubmit} className="form">
            {INPUT_FIELDS.map(({ label, name, type }) => {
                if (type === 'range')
                    return (
                        <div className="form-group" key={name}>
                            <label htmlFor={name} className="label">
                                {label}
                            </label>
                            <input
                                type={type}
                                id={name}
                                name={name}
                                min="0"
                                max="100000"
                                step="1000"
                                value={formData[name]}
                                onChange={handleChange}
                                className="input input--range"
                            />
                            {formErrors[name] && (
                                <div className="salary-value">{formData[name]}</div>
                            )}
                        </div>
                    );
                return (
                    <div className="form-group" key={name}>
                        <label htmlFor={name} className="label">
                            {label}
                        </label>
                        <input
                            type={type}
                            id={name}
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className={formErrors[name] ? 'input input--error' : 'input'}
                        />
                        {formErrors[name] && (
                            <div className="error">{formErrors[name]}</div>
                        )}
                    </div>
                );
            })}
            <button type="submit" className="button" data-testid="submit-button">
                Submit
            </button>
        </form>
    );
};

export default FormSection;
