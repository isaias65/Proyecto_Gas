import { useState } from "react";

const useForm = (initialValue: { [key: string]: string }) => {
    const [formValues, setFormValues] = useState(initialValue);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    };

    return { 
        formValues, 
        onInputChange 
    };
  
}

export default useForm