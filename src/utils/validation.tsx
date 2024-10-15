import * as Yup from "yup";

const phoneRegExp = /^\+?1?\d{9,15}$/;

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Tên đăng nhập là bắt buộc"),
  password: Yup.string()
    .required("Mật khẩu là bắt buộc")
    .min(6, "Mật khẩu phải nhiều hơn 6 kí tự"),
});

const PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Mật khẩu phải nhiều hơn 6 kí tự")
    .required("Không được để trống"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password")],
    "Mật khẩu không trùng khớp"
  ),
});

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Không được để trống"),
  userName: Yup.string().required("Không được để trống"),
  password: Yup.string()
    .min(6, "Mật khẩu phải nhiều hơn 6 kí tự")
    .required("Không được để trống"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Mật khẩu không trùng khớp")
    .required("Không được để trống"),
});

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Không được để trống"),
});

const StudentFormSchema = Yup.object().shape({
  name: Yup.string().required("Không được để trống"),
  phone: Yup.string()
    .matches(phoneRegExp, "Số điện thoại không hợp lệ")
    .required("Không được để trống"),
  // class: Yup.number().required("Không được để trống"),
});

const TeacherFormSchema = Yup.object().shape({
  name: Yup.string().required("Không được để trống"),
  phone: Yup.string()
    .matches(phoneRegExp, "Số điện thoại không hợp lệ")
    .required("Không được để trống"),
});

const AttendanceSchema = Yup.object().shape({
  class: Yup.object().required("Không được để trống").nullable(),
  teacher: Yup.array().min(1, "Không được để trống").nullable(),
  location: Yup.object().required("Không được để trống").nullable(),
  date: Yup.date().required("Không được để trống"),
});

const BankSchema = Yup.object().shape({
  fromDate: Yup.date().required("is not empty!"),
  toDate: Yup.date().required("is not empty!"),
});

const BankFormSchema = Yup.object().shape({
  username: Yup.string().required("is not empty!"),
  password: Yup.string().required("is not empty!"),
});

export const DenyFormSchema = Yup.object().shape({
  // url: Yup.string().required("Không được để trống"),
  full_path_url: Yup.string().required("Không được để trống"),
  url_type: Yup.string().required("Không được để trống"),
  level: Yup.string().required("Không được để trống"),
  targeted_brand: Yup.string().required("Không được để trống"),
  ip: Yup.string().required("Không được để trống"),
  description: Yup.string().required("Không được để trống"),
  // red_flags: Yup.array().min(1, "Không được để trống"),
});

export const ReportFormSchema = Yup.object().shape({
  // url: Yup.string().required("Không được để trống"),
  full_path_url: Yup.string().required("Không được để trống"),
  // url_type: Yup.number().required("Không được để trống"),
  level: Yup.string().required("Không được để trống"),
  targeted_brand: Yup.string().required("Không được để trống"),
  // ip: Yup.array().required("Không được để trống"),
  description: Yup.string().required("Không được để trống"),
});

export const FolderFormSchema = Yup.object().shape({
  name: Yup.string().required("Không được để trống"),
  // location: Yup.object().required("Không được để trống"),
});

export const AllowListFormSchema = Yup.object().shape({
  url: Yup.string().required("Không được để trống"),
});

export const ApiTokenFormSchema = Yup.object().shape({
  name: Yup.string().required("Không được để trống"),
  expiry_date: Yup.object().required("Không được để trống"),
  description: Yup.string().required("Không được để trống"),
});

export const RoleFormSchema = Yup.object().shape({
  name: Yup.string().required("Không được để trống"),
  code: Yup.string().required("Không được để trống"),
  active: Yup.object().required("Không được để trống"),
  description: Yup.string().required("Không được để trống"),
});

export const UserFormSchema = Yup.object().shape({
  username: Yup.string().required("Không được để trống"),
  email: Yup.string().required("Không được để trống"),
  role: Yup.string().required("Không được để trống"),
});

export const PostFormSchema = Yup.object().shape({
  title: Yup.string().required("Không được để trống"),
  content: Yup.string().required("Không được để trống"),
  // image: Yup.string().required("Không được để trống"),
  // slug: Yup.string().required("Không được để trống"),
  description: Yup.string().required("Không được để trống"),
});

export const RankingToolbarSchema = Yup.object().shape({});

export {
  LoginSchema,
  PasswordSchema,
  EmailSchema,
  SignUpSchema,
  StudentFormSchema,
  TeacherFormSchema,
  AttendanceSchema,
  BankSchema,
  BankFormSchema,
};
