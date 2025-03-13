import { useState } from "react";

const useForm = <T extends Record<string, any>>(initialValues: T) => {
    const [formValues, setFormValues] = useState<T>(initialValues);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    return { formValues, onInputChange };
};

export default useForm;
