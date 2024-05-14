import Joi from "joi";

const userValidator = Joi.object({
    title: Joi.string().min(4).pattern(/^[a-zA-Z\s\.,!?;:'"]+$/).required().messages({
        "string.pattern.base": "Only chars allowed",
        "string.min": "Title can be at least 4 chars",
    }),

    body: Joi.string().min(10).max(100).pattern(/^[a-zA-Z\s\.,!?;:'"]+$/).required().messages({
        "string.pattern.base": "Only chars allowed",
        "string.min": "body can be at least 10 chars",
        "string.max": "body cannot be great 100 chars",
    }),

    userId: Joi.number().min(1).max(10).required().messages({
        "number.min": "min userId is 1",
        "number.max": "max userId is 10",
    }),
});

export default userValidator;