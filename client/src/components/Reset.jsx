import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

import styles from "../styles/Username.module.css";
import { resetPasswordValidation } from "../helper/validate";


const Reset = () => {

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate: resetPasswordValidation,
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
            <h1 className="text-5xl font-bold text-center">Reset <br />Password</h1>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter new password.
            </span>
          </div>

          <form className="pt-20" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("password")}
                type="text"
                placeholder="password"
                className={styles.text_box}
              />

              <input
                {...formik.getFieldProps("confirmPassword")}
                type="text"
                placeholder="confirm password"
                className={styles.text_box}
              />

              <button className={styles.btn} type="submit">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reset