import React from "react";

import { AuthProvider } from "contexts/auth";
import { UserProvider } from "contexts/user";
import dayjs from "lib/dayjs"; //eslint-disable-line

import Main from "./components/Main";

const App = props => (
  <AuthProvider>
    <UserProvider>
      <Main {...props} />
    </UserProvider>
  </AuthProvider>
);

export default App;
