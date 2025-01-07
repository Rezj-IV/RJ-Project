"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import * as repository from "../../../RestConfig/RestRequest";
import styles from "./Signup.module.scss";
import { setToken } from "@/Components/StoreRedux/slices/UserSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const validation = Yup.object({
    name: Yup.string().required("نام خود را وارد کنید"),
    lastname: Yup.string().required("نام خانوادگی خود را وارد کنید"),
    username: Yup.string().required("نام کاربری خود را وارد کنید"),
    mobilenumber: Yup.string().required("شماره همراه خود را وارد کنید"),
    password: Yup.string().required("پسورد  خود را وارد کنید"),
  });

  const FormFields = {
    name: "",
    lastname: "",
    username: "",
    mobilenumber: "",
    password: "",
  };

  const submitHandler = (values) => {
    console.log(values);
    repository
      .Post("users/register", values)

      .then((response) => {
        console.log(response.data);
        if (response.data.id === 0) {
          alert("!!نام کاربری وجود دارد ");
        } else {
          repository
            .Post("users/login", values)

            .then((loginResponse) => {
              dispatch(setToken(loginResponse.data.token));
              router.push("/");
            });
        }
      });
  };

  return (
    <>
      <div className={styles.mainContainer}>
        {/* <div className={styles.sginContainer}> */}
        <div className={styles.FieldContainer}>
          {/* <Image
            src="/logo/rjLogo.png"
            alt="rj land"
            width={150
              
            }
            height={150
              
            }
          /> */}

          <p className={styles.title}> ثبت نام </p>

          <Formik
            onSubmit={submitHandler}
            initialValues={FormFields}
            validationSchema={validation}
            validateOnBlur={false}
            validateOnChange={false}
          >
            <Form>
              <div className={styles.form__group}>
                <Field
                  name="name"
                  type="text"
                  className={styles.form__field}
                  placeholder="نام"
                />
                <ErrorMessage
                  name="name"
                  component={"p"}
                  className={styles.ErrorMessage}
                />
              </div>

              <div className={styles.form__group}>
                <Field
                  name="lastname"
                  type="text"
                  className={styles.form__field}
                  placeholder="نام خانوادگی"
                />
                <ErrorMessage
                  name="lastname"
                  component={"p"}
                  className={styles.ErrorMessage}
                />
              </div>

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
                  name="mobilenumber"
                  type="number"
                  className={styles.form__field}
                  placeholder="شماره همراه"
                />
                <ErrorMessage
                  name="mobilenumber"
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
           

              <button type="submit">ثبت نام</button>

              <div className={styles.goSign}>
                <span>حساب کاربری دارید؟</span>
                <Link href="/Login">ورود</Link>
              </div>
            </Form>
          </Formik>
        </div>

        {/* <div className={styles.imageSignupContainer}>
          <Image
            className={styles.imageSignup}
            src="/images/signUpImage.webp"
            alt="Signup Image"
            width={500}
            height={450}
          />
        </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default SignUp;
