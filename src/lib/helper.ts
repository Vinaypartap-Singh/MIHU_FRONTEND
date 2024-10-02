import { AxiosError } from "axios"

export const handleCatchError = (error: any) => {
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
        message: "Error while creating account.",
        error: {},
        data: {}
    }
}