"use server"

import { REGISTER_URL, VERIFY_OTP_URL } from "@/lib/apiEndPoints"
import { handleCatchError } from "@/lib/helper";
import axios, { AxiosError } from "axios"

export async function registerAction(prevState: any, formdata: FormData) {
    try {
        const { data } = await axios.post(REGISTER_URL, {
            name: formdata.get("name"),
            email: formdata.get("email"),
            password: formdata.get("password"),
            confirmPassword: formdata.get("confirmPassword")
        });


        return {
            status: 200,
            message: data?.message ?? "Your Account has been created. Please verify your account.",
            error: {}
        }
    } catch (error) {
        return handleCatchError(error)
    }
}


export async function verifyOTP(prevState: any, formdata: FormData) {
    try {
        const { data } = await axios.post(VERIFY_OTP_URL, {
            email: formdata.get('email'),
            otp: Number(formdata.get('otp'))
        });

        return {
            status: 200,
            message: data?.message ?? "Your Account has been created. Please verify your account.",
            error: {}
        }

    } catch (error) {
        return handleCatchError(error)
    }
}