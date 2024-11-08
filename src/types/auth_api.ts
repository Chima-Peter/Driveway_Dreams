export interface SignUpRequest {
    first_name: string,
    last_name: string,
    email: string,
    password: string
}

export interface SignUpResponse {
    status: number,
    message: string
}

export interface LoginRequest {
    email: string,
    password: string
}


export interface LoginResponse {
    status: number,
    message: string,
}