

const validate = (data) => {
    const errors = {};
    if (!data.name) {
        errors.name = 'Name is required';
    }
    if (!data.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email is invalid';
    }
    if (!data.dob) {
        errors.dob = 'Date of birth is required';
    }
    if (!data.color) {
        errors.color = 'Favourite color is required';
    }
    if (!data.salary) {
        errors.salary = 'Salary is required';
    }
    return errors;
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}


const helpers = {
    validate,
    formatDate
}

export default helpers