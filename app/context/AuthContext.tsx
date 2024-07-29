'use client'

import React, { useState, createContext } from "react"

interface User {
    id: number,
    name: string,
    email: string,
    city: string,
    phone: string
}
interface State {
    loading: boolean,
    data: string | null,
    error: User | null
}

interface AuthState extends State {
    setAuthState: React.Dispatch<React.SetStateAction<State>>
}

export const AuthorizationContext = createContext<AuthState>({
    loading: false,
    data: null,
    error: null,
    setAuthState: () => { }
})

export default function AuthContext({ children }: { children: React.ReactNode }) {

    const [authState, setAuthState] = useState<State>({
        loading: false,
        data: null,
        error: null
    })

    return (
        <AuthorizationContext.Provider value={{
            ...authState,
            setAuthState
        }}>{children}</AuthorizationContext.Provider>
    )
}
