import {useState} from 'react';

export const useForm = (url, initialValues) => {
    const [values, setValues] = useState(initialValues);
    const [isSent, setIsSent] = useState(false);
    const [name, setName] = useState("");

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
            .then(response => {
                setIsSent(response);
                setName(values.name);
                setValues({name: "", email: "", message: ""});
            })
            .catch(error => console.log(error));
}
    return {
        handleChange,
        handleSubmit,
        isSent,
        values,
        name
    };
}



