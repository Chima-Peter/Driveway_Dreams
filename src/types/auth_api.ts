export interface SignUpRequest {
    firstname: string,
    lastname: string,
    email: string,
    password: string
}

export interface SignUpResponse {
    status: boolean,
    message: string
}

export interface LoginRequest {
    email: string,
    password: string
}


export interface LoginResponse {
    status: boolean,
    message: string,
    token: string
}