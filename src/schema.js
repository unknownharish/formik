import * as yup from 'yup'

export const schema = yup.object({
    name:yup.string().min(5).required('enter valid name'),
    email:yup.string().email().required('enter valid mail'),
    pass:yup.string().min(2).max(6).required('enter pass'),
    confirm:yup.string().required().oneOf([yup.ref('pass'),null],'password must match')

})