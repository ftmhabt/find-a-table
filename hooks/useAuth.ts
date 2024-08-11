import axios from "axios";
import { useContext } from "react";
import { AuthorizationContext } from "../app/context/AuthContext";
import { deleteCookie } from 'cookies-next'

const useAuth = () => {
    const { setAuthState } =
        useContext(AuthorizationContext);

    const signin = async (
        { email, password }: { email: string; password: string },
        handleClose: () => void
    ) => {
        setAuthState({
            data: null,
            error: null,
            loading: true,
        });

        try {
            const response = await axios.post(
                "http://localhost:3000/api/auth/signin",
                {
                    email,
                    password,
                }
            );

            setAuthState({
                data: response.data,
                error: null,
                loading: false,
            });
            handleClose();
        } catch (error: any) {
            setAuthState({
                data: null,
                error: error.response.data.errorMessage,
                loading: false,
            });
        }
    };

    const signup = async (
        {
            email,
            password,
            name,
            phone,
            city,
        }: {
            email: string;
            password: string;
            name: string;
            phone: string;
            city: string;
        },
        handleClose: () => void
    ) => {

        setAuthState({
            data: null,
            error: null,
            loading: true,
        });

        try {
            const response = await axios.post(
                "http://localhost:3000/api/auth/signup",
                {
                    email,
                    password,
                    name,
                    phone,
                    city,
                }
            );

            setAuthState({
                data: response.data,
                error: null,
                loading: false,
            });
            handleClose();
        } catch (error: any) {
            setAuthState({
                data: null,
                error: error.response.data.errorMessage,
                loading: false,
            });
        }
    };

    const signout = () => {
        deleteCookie('jwt');
        setAuthState({
            data: null,
            error: null,
            loading: false,
        });
    }
    return {
        signin,
        signup,
        signout
    };
};

export default useAuth;
