import {useState} from 'react';

export const useForm = (inputValues) => {
    const [values, setValues] = useState(inputValues);

    
    return [values, e => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        })
    }];
}

