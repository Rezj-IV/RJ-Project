"use client";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import * as repository from "../../../RestConfig/RestRequest";
import Link from "next/link";
import { setToken } from "@/Redux/Slices/UserSlice";
import PUincorrect from "./PUincorrect";

const LogIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const validation = Yup.object({
    username: Yup.string().required("نام کاربری را وارد کنید"),
    password: Yup.string().required("پسورد  خود را وارد کنید"),
  });
  const FormFields = {
    username: "",
    password: "",
  };
  const [incorrect, setIncorrect] = useState(false);

  const submitHandler = (values) => {
  //   console.log(values);
  //   fetch("http://194.60.231.181:9095/users/login", {
  //     method: "POST",
  //     body: values,
  //     headers: {

  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success: ", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  //  ;

    repository.Post("users/login", values).then((response) => {
      if (response.data.hasOwnProperty("token")) {
        dispatch(setToken(response.data.token));
        router.back(1);
      } else {
        setIncorrect(true);
      }
    });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.FieldContainer}>
        {incorrect && <PUincorrect />}

        <p className={styles.title}> ورود </p>
        <Formik
          d
          onSubmit={submitHandler}
          initialValues={FormFields}
          validationSchema={validation}
          validateOnBlur={false}
          validateOnChange={false}
        >
          <Form>
            <div className={styles.form__group}>
              <Field
                name="username"
                type="text"
                className={styles.form__field}
                placeholder="نام کاربری"
              />
              <ErrorMessage
                name="username"
                component={"p"}
                className={styles.ErrorMessage}
              />
            </div>

            <div className={styles.form__group}>
              <Field
                name="password"
                type="password"
                className={styles.form__field}
                placeholder="کلمه عبور"
              />
              <ErrorMessage
                name="password"
                component={"p"}
                className={styles.ErrorMessage}
              />
            </div>

            <button> ورود</button>

            <div className={styles.goSign}>
              <span>حساب کاربری ندارید؟</span>
              <Link href="/Signup">ثبت نام</Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LogIn;
