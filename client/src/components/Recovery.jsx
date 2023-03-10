import styles from "../styles/Username.module.css";

const Recovery = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <div className={`${styles.glass} mt-5`}>
          <div className="title flex flex-col items-center">
            <h1 className="text-5xl font-bold text-center">Recover <br />Password</h1>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter OTP to recover password.
            </span>
          </div>

          <form className="pt-20">
            <div className="textbox flex flex-col items-center gap-6">
              <div className="input text-center">
                <span className="py-4 text-sm text-left text-gray-500">
                  Enter the 6 digit OTP sent to your email.
                </span>

                <input
                  type="text"
                  placeholder="OTP"
                  className={styles.text_box}
                />
              </div>

              <button className={styles.btn} type="submit">Sign In</button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Can't Get OTP? <button className="text-red-400 hover:text-red-600">Resend Now.</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Recovery