import { FC } from "react";

import { useGetUsersQuery } from "../../app/services/users";
import { Spinner, User } from "../../components";
import { UserList } from "./UserList";
import css from "./styles.module.scss";

export const HomePage: FC = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading || !data) {
    return <Spinner />;
  }

  return (
    <div className={css.content}>
      <h3 className={css.content__title}>Список пользователей</h3>
      {error ? (
        <p>Произошла ошибка</p>
      ) : (
        // @ts-ignore
        <>{!isLoading && data && <UserList data={data} />}</>
      )}
    </div>
  );
};
