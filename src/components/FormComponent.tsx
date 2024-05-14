import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../validators/user.validator";

interface IFormProps {
    title: string,
    body: string,
    userId: number
}

const FormComponent = () => {
    const {handleSubmit, register, formState: {errors, isValid}}
        = useForm<IFormProps>({mode: 'all', resolver: joiResolver(userValidator)});

    const save = (formValues: IFormProps) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: formValues.title,
                body: formValues.body,
                userId: formValues.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <h3>Write Title of the Post</h3>
                <label>
                    <input type="text" {...register('title')}/>
                    {errors.title && <div>{errors.title.message}</div>}
                </label>

                <h3>Write Body of the Post</h3>
                <label>
                    <input type="text" {...register('body')}/>
                    {errors.body && <div>{errors.body.message}</div>}
                </label>

                <h3>Write UserID of the Post</h3>
                <label>
                    <input type={'number'} {...register('userId')}/>
                    {errors.userId && <div>{errors.userId.message}</div>}
                </label>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;