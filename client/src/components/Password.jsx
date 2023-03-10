import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { passwordValidate } from "../helper/validate";


const Password = () => {

  const formik = useFormik({
    initialValues: {
      password: ""
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values)
    }
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center">
        <div className={`${styles.glass} mt-5`}>
          <div className="title flex flex-col items-center">
            <h1 className="text-5xl font-bold">Hello There</h1>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by Connecting with Us.
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img src={avatar} alt="avatar" className={styles.profile_img} />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("password")}
                type="password"
                placeholder="password"
                className={styles.text_box}
              />
              <button className={styles.btn} type="submit">Sign In</button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Forget Password? <Link className="text-red-400 hover:text-red-600" to="/recover">Recover Now.</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Password