import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import extend from "../styles/Profile.module.css";
import { profileValidation } from "../helper/validate";
import { convertToBase64 } from "../helper/convert";


const Profile = () => {

  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      lastName: "",
      mobile: "",
      address: ""
    },
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values, { profile: file || "" })
      console.log(values)
    }
  });

  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center">
        <div className={`${styles.glass} ${extend.glass} mt-1 pb-1`} style={{ width: "45%", paddingTop: "3em" }}>
          <div className="title flex flex-col items-center">
            <h1 className="text-5xl font-bold">Profile</h1>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              You can Udate Profile!
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img src={file || avatar} alt="avatar" className={`${styles.profile_img}`} />
              </label>

              <input
                type="file"
                name="profile"
                id="profile"
                onChange={onUpload}
              />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <div className="name flex gap-10 w-3/4">
                <input
                  {...formik.getFieldProps("firstName")}
                  type="text"
                  placeholder="first name"
                  className={`${styles.text_box} ${extend.text_box}`}
                />

                <input
                  {...formik.getFieldProps("lastName")}
                  type="text"
                  placeholder="last name"
                  className={`${styles.text_box} ${extend.text_box}`}
                />
              </div>

              <div className="name flex gap-10 w-3/4">
                <input
                  {...formik.getFieldProps("mobile")}
                  type="text"
                  placeholder="mobile no"
                  className={`${styles.text_box} ${extend.text_box}`}
                />

                <input
                  {...formik.getFieldProps("email")}
                  type="email"
                  placeholder="email"
                  className={`${styles.text_box} ${extend.text_box}`}
                />
              </div>

              <input
                {...formik.getFieldProps("address")}
                type="text"
                placeholder="address"
                className={`${styles.text_box} ${extend.text_box}`}
              />

              <button className={styles.btn} type="submit">Update</button>


            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Come Back Later? <button className="text-red-400 hover:text-red-600" to="/">Logout.</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile