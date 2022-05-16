// import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';
import { PureComponent } from "react";
import { connect } from "react-redux";

import { AppState } from "../../../app/store";
import { User } from "../../../components";

interface Props {
  data: User[];
  // id: number;
}

class UserListRoot extends PureComponent<Props> {
  render() {
    return (
      <div>
        {this.props.data.map((obj: User, id: number) => (
          <User key={id} {...obj} />
        ))}
      </div>
    );
  }
}

const sortByCity = (a: User, b: User) => {
  return a.address.city.localeCompare(b.address.city);
};

const sortByCompany = (a: User, b: User) => {
  return a.company.name.localeCompare(b.company.name);
};

const mapStateToProps = (state: AppState, props: Props) => {
  const filter = state.ui.filter;
  const sortedData = [...props.data].sort(
    filter === "city" ? sortByCity : sortByCompany
  );
  return {
    data: sortedData,
  };
};

export const UserList = connect(mapStateToProps)(UserListRoot);
