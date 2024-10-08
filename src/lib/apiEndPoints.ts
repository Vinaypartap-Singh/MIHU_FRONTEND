import ENV from "./ENV"

export const BASE_URL = `${ENV.BACKEND_URL}/api`
export const REGISTER_URL = `${BASE_URL}/auth/register`
export const LOGIN_URL = `${BASE_URL}/auth/login`
export const CHECK_CREDENTIALS_URL = `${BASE_URL}/auth/check/credentials`
export const VERIFY_OTP_URL = `${BASE_URL}/auth/verify-email`

// Password Routes

export const PASSWORD_RESET_REQUEST = `${BASE_URL}/password/request-reset-password`
export const PASSWORD_RESET_CHANGE = `${BASE_URL}/password/reset-password`