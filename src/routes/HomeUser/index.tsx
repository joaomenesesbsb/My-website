import { Outlet } from "react-router-dom";
import { HeaderProfile } from "../../components/HeaderProfile";

export default function HomeUser() {
    return (
        <>
        <HeaderProfile />
        <Outlet />
        </>
    )
}