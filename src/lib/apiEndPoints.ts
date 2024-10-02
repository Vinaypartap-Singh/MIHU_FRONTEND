import ENV from "./ENV"

export const BASE_URL = `${ENV.BACKEND_URL}/api`
export const REGISTER_URL = `${BASE_URL}/auth/register`
export const VERIFY_OTP_URL = `${BASE_URL}/auth/verify-email`