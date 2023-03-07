import Login from "./Login";
import React from "react";
import Loading from "./Loading";

export default function App() {
  const [isReady, setReady] = React.useState(false);

  React.useEffect(() => {
    // Perform some sort of async data or asset fetching.
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []);

  return (
    <>
      {!isReady && <Loading size={52} />}
      <Login />
    </>
  );
}
