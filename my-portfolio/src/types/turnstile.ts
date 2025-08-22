interface ApiResponse {
    success: boolean,
    data?: {
        verified: boolean
    },
    error?: string,
    codes?: string[] | undefined
}

export {
    type ApiResponse
}