import { FC } from "react";
import { useParams } from "react-router";

import { useUserByIdQuery } from "../../app/services/users";
import { Spinner } from "../../components";
import { UserForm } from "./UserForm";

export const UserPage: FC = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useUserByIdQuery(+id!);
  console.log(data);
  if (isLoading || !data) {
    return <Spinner />;
  }

  return (
    <>
      <UserForm {...data} />
    </>
  );
};
