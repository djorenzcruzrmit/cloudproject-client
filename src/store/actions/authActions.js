export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({type: "LOGIN_SUCCESS"});
      })
      .catch((err) => {
        dispatch({type: "LOGIN_ERROR", err});
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({type: "SIGNOUT_SUCCESS"});
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        return firestore.collection("Users").doc(resp.user.uid).set({
          fullName: newUser.fullName,
          userName: newUser.userName,
        });
      })
      .then(() => {
        dispatch({type: "SIGNUP_SUCCESS"});
      })
      .catch((err) => {
        dispatch({type: "SIGNUP_ERROR", err});
      });
  };
};
