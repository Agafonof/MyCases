import { Button } from "antd";

export const RedirectPage = (): JSX.Element => {
  return (
    <Button
      className="redirectButton"
      type="text"
      onClick={() => window.location.replace("/")}
    >
      Redirect back{" "}
    </Button>
  );
};
