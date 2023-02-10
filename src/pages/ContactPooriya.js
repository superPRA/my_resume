import React, { useState } from "react";
import PageTitle from "../component/mainPage/PageTitle";
import { useFormik } from "formik";
import * as yup from "yup";
import MassageBox from "../component/mainPage/MassageBox";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../features/counter/counterSlice";

export default function ContactPooriya() {
  const lang = useSelector((state) => state.glob.lang);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      massage: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required(lang==="en"?"Name can't be empty":"اسم نمی تونه خالی باشه")
        .min(3, lang==="en"?"Name is to short":"نام خیلی کوتاهه")
        .max(20, lang==="en"?"Name is to long":"نام خیلی درازه"),
      email: yup
        .string()
        .required(lang==="en"?"Email can't be empty":"ایمیل نمی تونه خالی باشه")
        .email(lang==="en"?"enter a valid email":"یه ایمیل واقعی بنویس"),
      massage: yup.string().required(lang==="en"?"Massage cant be empty":"پیام نمی تونه خالی باشه"),
    }),
    onSubmit: (values) => {
      formik.handleReset();
      dispatch(
        actions.massageBoxHandle({
          exist: true,
          massage: "your massage is sent",
        })
      );
    },
  });
  return (
    <div
      className={`bg-white dark:bg-[#111111] dark:text-white px-8 lg:px-16 ${
        lang === "en" ? "L" : "R"
      } lg:my-10 pt-16 lg:rounded-xl pb-6`}
    >
      <PageTitle
        title={lang === "en" ? "Contact" : "تماس با من"}
        withLine={true}
      />
      <div className="bg-[rgb(252,244,255)] dark:bg-inherit dark:border-2 p-16 mt-12 rounded-xl ">
        <h2 className="text-gray-600 text-[26px]">
          {lang === "en"
            ? "I'm always open to discussing product"
            : "من همیشه برای بحث و پیشنهادات مربوط به"}
        </h2>
        <h2 className="text-[26px]">
          {lang === "en"
            ? "design work or partnerships."
            : "طراحی ,کار و همکاری اماده هستم"}
        </h2>
        <form
          onSubmit={formik.handleSubmit}
          className="my-2 dark:text-gray-400 "
        >
          <div className="relative my-7 flex">
            <input
              id="name"
              className={`w-full peer ${
                formik.errors.name ? "text-red-600" : null
              } text-xl bg-inherit outline-none border-b-2 border-b-black dark:border-b-gray-400 focus:border-b-[#ef4060] dark:focus:border-b-[#ef4060]  py-3`}
              type="text"
              {...formik.getFieldProps("name")}
            />
            {lang === "en" && (
              <label
                htmlFor="name"
                className={`absolute left-0 ${
                  formik.values.name.length === 0
                    ? "top-4 text-lg"
                    : "-top-2 text-sm"
                } peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#ef4060] transition-all duration-300`}
              >
                Name *
              </label>
            )}
            {lang === "fa" && (
              <label
                htmlFor="name"
                className={`absolute right-5 ${
                  formik.values.name.length === 0
                    ? "top-4 text-lg"
                    : "-top-2 text-sm"
                } peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#ef4060] transition-all duration-300`}
              >
                نام *
              </label>
            )}
            {formik.errors.name && formik.touched.name && (
              <div
                className="absolute -right-10 top-5 text-2xl border border-red-600 transition hover:bg-red-600 hover:text-white px-3 rounded-full text-red-600"
                onClick={() =>
                  dispatch(
                    actions.massageBoxHandle({
                      exist: true,
                      massage: formik.errors.name,
                    })
                  )
                }
              >
                !
              </div>
            )}
          </div>
          <div className="relative my-7">
            <input
              id="email"
              className={`w-full peer text-xl bg-inherit ${
                formik.errors.email ? "text-red-600" : null
              } outline-none border-b-2 border-b-black dark:border-b-gray-400 focus:border-b-[#ef4060] dark:focus:border-b-[#ef4060] py-3`}
              type="email"
              {...formik.getFieldProps("email")}
            />
           {lang==="en" && <label
              htmlFor="name"
              className={`absolute left-0 ${
                formik.values.email.length === 0
                  ? "top-4 text-lg"
                  : "-top-2 text-sm"
              } text-sm peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#ef4060] transition-all duration-300`}
            >
              Email *
            </label>}
            {
              lang==="fa" && <label
              htmlFor="name"
              className={`absolute right-5 ${
                formik.values.email.length === 0
                  ? "top-4 text-lg"
                  : "-top-2 text-sm"
              } text-sm peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#ef4060] transition-all duration-300`}
            >
              ایمیل *
            </label>
            }
            {formik.errors.email && formik.touched.email && (
              <div
                className="absolute -right-10 top-5 text-2xl border border-red-600 transition hover:bg-red-600 hover:text-white px-3 rounded-full text-red-600"
                onClick={() =>
                  dispatch(
                    actions.massageBoxHandle({
                      exist: true,
                      massage: formik.errors.email,
                    })
                  )
                }
              >
                !
              </div>
            )}
          </div>
          <div className="relative my-7">
            <input
              id="massage"
              className={`w-full peer text-xl ${
                formik.errors.massage ? "text-red-600" : null
              } bg-inherit outline-none border-b-2 border-b-black dark:border-b-gray-400 focus:border-b-[#ef4060] dark:focus:border-b-[#ef4060] py-3`}
              type="text"
              {...formik.getFieldProps("massage")}
            />
            {lang==="en" && <label
              htmlFor="masage"
              className={`absolute left-0 ${
                formik.values.massage.length === 0
                  ? "top-4 text-lg"
                  : "-top-2 text-sm"
              } text-sm peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#ef4060] transition-all duration-300`}
            >
              Massage *
            </label>}
            {lang==="fa" && <label
              htmlFor="masage"
              className={`absolute right-5 ${
                formik.values.massage.length === 0
                  ? "top-4 text-lg"
                  : "-top-2 text-sm"
              } text-sm peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#ef4060] transition-all duration-300`}
            >
              پیام *
            </label>}
            {formik.errors.massage && formik.touched.massage && (
              <div
                className="absolute -right-10 top-5 text-2xl border border-red-600 transition hover:bg-red-600 hover:text-white px-3 rounded-full text-red-600"
                onClick={() =>
                  dispatch(
                    actions.massageBoxHandle({
                      exist: true,
                      massage: formik.errors.email,
                    })
                  )
                }
              >
                !
              </div>
            )}
          </div>
          <button
            type="submit"
            className="mt-6 border font-semibold hover:bg-[#ef4060] hover:border-[#ef4060] hover:text-white transition rounded-xl py-2 px-6 border-black dark:border-white dark:text-white dark:hover:border-[#ef4060] disabled:hover:text-gray-600 disabled:hover:bg-inherit disabled:hover:border-gray-600"
                disabled={formik.errors!=={}}
          >
            {lang==="en"?"Submit":"ارسال"}
          </button>
        </form>
      </div>
      <MassageBox />
    </div>
  );
}
