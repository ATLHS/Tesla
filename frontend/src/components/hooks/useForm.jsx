import {useState} from 'react';

export const useForm = (url, initialValues) => {
    const [values, setValues] = useState(initialValues);
    const [isSent, setIsSent] = useState(false);

    const handleChange = e => { setValues({ ...values, [e.target.name]: e.target.value}); }

    const handleSubmit = e => {
        e.preventDefault();
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(res => res.json())
        .then(response => setIsSent(response))
        .catch(error => console.log(error));

    }
    return {
        handleChange,
        handleSubmit,
        isSent,
        values
    };
}



