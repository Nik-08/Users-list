import classNames from "classnames";
import { FC } from "react";
import { Link } from "react-router-dom";

import css from "./styles.module.scss";
interface Props extends User {}

export const User: FC<Props> = ({ name, company, address, id }) => {
  return (
    <>
      <div className={css.content__wrapper}>
        <div className={classNames(css.content__item, css.content__name)}>
          <span className={css.content__text}>ФИО:</span>
          <span className={css.content__text}>{name}</span>
        </div>
        <div className={classNames(css.content__item, css.content__city)}>
          <span className={css.content__text}>город:</span>
          <span className={css.content__text}>{address.city}</span>
        </div>
        <div className={classNames(css.content__item, css.content__company)}>
          <span className={css.content__text}>компания:</span>
          <span className={css.content__text}>{company.name}</span>
        </div>
        <Link to={`/${id}`}>
          <span className={css.content__more}>Подробнее</span>
        </Link>
      </div>
    </>
  );
};
