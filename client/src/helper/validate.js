import { toast } from "react-hot-toast";


/** validate login page username */
export async function usernameValidate(values) {
  const errors = verifyUsername({}, values);

  return errors;
}

/** validate username */
function verifyUsername(error = {}, values) {
  if (!values.username) {
    error.username = toast("Username Required");
  } else if (values.username.includes(" ")) {
    error.username = toast("Invalid Username.")
  }

  return error;
}