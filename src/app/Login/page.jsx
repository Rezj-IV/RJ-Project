"use client";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "../Signup/Signup.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import * as repository from "../../../RestConfig/RestRequest";
import { setToken } from "@/Components/StoreRedux/slices/UserSlice";
import Link from "next/link";

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

  const submitHandler = (values) => {
    repository.Post("users/login", values).then((response) => {
      console.log(response);
      if (response.data.hasOwnProperty("token")) {
        dispatch(setToken(response.data.token));
        router.push("/");
      } else {
        alert("نام کاربری یا رمزعبور نادرست است");
      }
    });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.FieldContainer}>
        {/* <Image src="/logo/rjLogo.png" alt="rj land" width={150} height={150} /> */}
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
                type="text"
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
