import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../redux/auth/selectors";

import { logOutUser } from "../../redux/auth/operations";

import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>

      <button className={css.button} type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
