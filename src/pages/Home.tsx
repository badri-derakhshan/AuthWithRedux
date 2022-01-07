import { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../stores/index";
import { logout } from "../stores/auth";
import { fetchUser } from "../stores/user";
import { removeToken } from "../utils/localStorage";

import home from "../assets/home.jpg";

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
    height: "90%",
    width: "90%",
  },
  centerFlex: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
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
  logoutButton: {
    width: "40%",
  },
}));

const Home = () => {
  const classes = useStyles();
  const { user } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const logOut = () => {
    removeToken();
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.centerFlex}>
        <img className={classes.image} src={home} />
      </div>
      <div className={classes.centerFlex}>
        <div>
          <h1>This is your profile</h1>
          <h1>{`Hello ${user.name} ${user.family}`}</h1>
          <Button
            type="submit"
            className={classes.logoutButton}
            variant="contained"
            size="large"
            onClick={logOut}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
