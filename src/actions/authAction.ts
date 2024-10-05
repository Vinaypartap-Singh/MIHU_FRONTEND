"use server";

import {
    CHECK_CREDENTIALS_URL,
    PASSWORD_RESET_CHANGE,
    PASSWORD_RESET_REQUEST,
    REGISTER_URL,
    VERIFY_OTP_URL,
} from "@/lib/apiEndPoints";
import { handleCatchError } from "@/lib/helper";
import axios, { AxiosError } from "axios";

export async function registerAction(prevState: any, formdata: FormData) {
    try {
        const { data } = await axios.post(REGISTER_URL, {
            name: formdata.get("name"),
            email: formdata.get("email"),
            password: formdata.get("password"),
            confirmPassword: formdata.get("confirmPassword"),
        });

        return {
            status: 200,
            message:
                data?.message ?? "Your Account has been created. Please verify your account.",
            error: {},
            data: {},
        };
    } catch (error) {
        return handleCatchError(error, "while creating account");
    }
}

export async function verifyOTP(prevState: any, formdata: FormData) {
    try {
        const { data } = await axios.post(VERIFY_OTP_URL, {
            email: formdata.get("email"),
            otp: Number(formdata.get("otp")),
        });

        return {
            status: 200,
            message: data?.message ?? "OTP verification successful.",
            error: {},
            data: {}, // Make sure data is always present
        };
    } catch (error) {
        return handleCatchError(error, 'while verifying otp');
    }
}

export async function loginAction(prevState: any, formdata: FormData) {
    try {
        const { data } = await axios.post(CHECK_CREDENTIALS_URL, {
            email: formdata.get("email"),
            password: formdata.get("password"),
        });

        return {
            status: 200,
            message: data?.message ?? "Login successful",
            error: {},
            data: {
                email: formdata.get("email"),
                password: formdata.get("password"),
            },
        };
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.response?.status === 400) {
                return {
                    status: 400,
                    message: error.response?.data?.message,
                    error: error.response?.data?.error,
                    data: {}
                }
            }

        }
        return {
            status: 400,
            message: "An server side error while Log in your account.",
            error: {},
            data: {}
        }
    }
}

export async function requestResetPasswordAction(prevState: any, formdata: FormData) {
    try {
        const { data } = await axios.post(PASSWORD_RESET_REQUEST, {
            email: formdata.get("email"),
        });

        return {
            status: 200,
            message: data?.message ?? "Password Reset OTP sent on your email",
            error: {},
            data: {
                email: formdata.get("email")
            }, // Make sure data is always present
        };
    } catch (error) {
        return handleCatchError(error, 'while verifying otp');
    }
}


export async function resetPasswordOtpVerifyAction(prevState: any, formdata: FormData) {
    try {
        const { data } = await axios.post(PASSWORD_RESET_CHANGE, {
            email: formdata.get("email"),
            otp: Number(formdata.get("otp")),
            password: formdata.get("password"),
            confirmPassword: formdata.get("confirmPassword")
        });

        return {
            status: 200,
            message: data?.message ?? "Password Otp Verified",
            error: {},
            data: {
                email: formdata.get("email")
            }, // Make sure data is always present
        };
    } catch (error) {
        return handleCatchError(error, 'while verifying otp');
    }
}
