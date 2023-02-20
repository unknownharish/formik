import './App.css';
import formik, { useFormik } from 'formik'
import { schema } from './schema';

function App() {

  let init = {
    name: "",
    email: "",
    pass:'',
    confirm:''
  }
  const { handleSubmit, values, errors, handleChange } = useFormik({

    initialValues: init,
    validationSchema: schema,
    onSubmit: (e) => {
      console.log(e)
    }
  })




  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

        <label htmlFor="pass">{errors.pass}</label>
        <label htmlFor="confirm">{errors.confirm}</label>
        <input type="text" name="name" placeholder='name' value={values.name} onChange={handleChange} />
        <input type="text" name="email" placeholder='email' value={values.email} onChange={handleChange} />
        <input type="password" name="pass" placeholder='pass' value={values.pass} onChange={handleChange} />
        <input type="password" name="confirm" placeholder='confirm' value={values.confirm} onChange={handleChange} />
        <input type="submit" value={'ok'} id="" />
      </form>
    </div>
  );
}

export default App;
