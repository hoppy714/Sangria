import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer"

const initialState = {
    // user: null,
    user: {
        _id: "6339454dc8364f8557e44f01",
        username: "hoppy",
        email: "hoppy@gmail.com",
        password: "abcdef",
        profilePicture: "",
        coverPicture: "",
        followers: Array,
        followings: Array,
        isAdmin: false,
    },
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(initialState);
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)
    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}