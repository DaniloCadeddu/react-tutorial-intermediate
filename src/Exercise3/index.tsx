import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { PassangersList } from "./PassangersList";
import { api } from "./redux/passanger";

export const ExerciseThree = () => (
  <ApiProvider api={api}>
    <PassangersList />
  </ApiProvider>
);
