import axios from "axios";
import { USER_LOCAL_STORAGE_KEY } from "../components/common/const/localStorage";
import { User } from "../store/slices/login/types/user";

const authDataString: string | null = localStorage.getItem(
    USER_LOCAL_STORAGE_KEY
);

const authData: User | null = authDataString
    ? JSON.parse(authDataString)
    : null;

const token = authData ? authData.token : null;

export const $api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
});

export enum URL {
    LOGIN = "auth/login",
    REGISTRATION = "auth/register",
    CREATE_EVENTS = "events/",
}
