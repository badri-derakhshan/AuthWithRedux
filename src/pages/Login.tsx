import { makeStyles } from "@mui/styles";

import Form from "../components/Form";
import login from "../assets/login.png";
import logo from "../assets/logo.png";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    height: "100%",
    minHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "blue",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  centerFlex: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    "& >*": {
      flex: 1,
    },
  },
  headerImage: {
    width: "20rem",
    height: "10rem",
  },
  header: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
}));

const Login = () => {
  const classes = useStyles();

  const renderHeader = () => (
    <div className={classes.header}>
      <img className={classes.headerImage} src={logo} />
    </div>
  );

  return (
    <div className={classes.container}>
      <div className={classes.centerFlex}>
        <img className={classes.image} src={login} />
      </div>
      <div className={`${classes.centerFlex} ${classes.formContainer}`}>
        {renderHeader()}
        <Form />
      </div>
    </div>
  );
};

export default Login;
