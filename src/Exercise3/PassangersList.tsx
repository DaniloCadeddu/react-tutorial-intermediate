import { useState } from "react";
import { usePassangersListQuery } from "./redux/passanger";

export const PassangersList = () => {
  const [page, setPage] = useState(0);
  const { data: passangers, isLoading } = usePassangersListQuery(page);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!passangers?.data) {
    return <div>No passangers</div>;
  }

  return (
    <>
      {passangers.data.map(({ _id, name, trips }) => (
        <div key={_id}>
          Name: {name} - Trips: {trips}
        </div>
      ))}
      <button disabled={page === 0} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <button
        disabled={page === passangers.totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </>
  );
};
