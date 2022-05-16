import classNames from "classnames";
import { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";

import { uiActions } from "../../features/ui/slice";
import css from "./styles.module.scss";

interface Props {
  children: ReactNode;
}

export const Aside: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();

  const setSortByCity = () => {
    dispatch(uiActions.setFilter("city"));
  };

  const setSortByCompany = () => {
    dispatch(uiActions.setFilter("company"));
  };

  return (
    <div className={css.main}>
      <div className={css.main__container}>
        <aside className={css.main__sidebar}>
          <span className={css.sidebar__title}>Сортировка</span>
          <div className={css.sidebar__btns}>
            <button
              className={classNames(css.btn, css.sidebar__btn)}
              onClick={setSortByCity}
            >
              по городу
            </button>
            <button
              className={classNames(css.btn, css.sidebar__btn)}
              onClick={setSortByCompany}
            >
              по компании
            </button>
          </div>
        </aside>
        <>{children}</>
      </div>
    </div>
  );
};
