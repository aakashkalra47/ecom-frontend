export const validatePassword = (value) =>
  value && value.length >= 8 ? undefined : "Password is too Short";

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email && re.test(String(email).toLowerCase())
    ? undefined
    : "Email is not valid";
};

export const validateField=(field)=>{
  return field&&field.length<4  ?"Length is too Short":"";
}
