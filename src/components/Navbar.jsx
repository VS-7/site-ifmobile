import { NavLink } from "react-router-dom";
import { FaHome, FaSignInAlt, FaUserPlus, FaUser, FaBook, FaSignOutAlt } from 'react-icons/fa';
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    return (
        <nav className={styles.navbar}>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
                        <FaHome /> Home
                    </NavLink>
                </li>
                {!user && (
                    <>
                        <li>
                            <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>
                                <FaSignInAlt /> Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : "")}>
                                <FaUserPlus /> Registrar
                            </NavLink>
                        </li>
                    </>
                )}
                {user && (
                    <>
                        <li>
                            <NavLink to="/posts/create" className={({ isActive }) => (isActive ? styles.active : "")}>
                                <FaBook /> Postar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : "")}>
                                <FaUser /> Dashboard
                            </NavLink>
                        </li>
                    </>
                )}
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>
                        <FaBook /> Sobre
                    </NavLink>
                </li>
                {user && (
                    <li>
                        <button onClick={logout}><FaSignOutAlt /> Sair</button>
                    </li>
                )}
            </ul>
        </nav>
    );
}
