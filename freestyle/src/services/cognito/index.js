import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails
} from "amazon-cognito-identity-js";

const createCognitoUser = email => {
  const poolData = {
    UserPoolId: process.env.VUE_APP_COGNITO_USER_POOL_ID,
    ClientId: process.env.VUE_APP_COGNITO_CLIENT_ID
  };

  console.log('pool data', poolData);
  const userPool = new CognitoUserPool(poolData);

  const userData = {
    Username: email,
    Pool: userPool
  };

  const cognitoUser = new CognitoUser(userData);

  return cognitoUser;
};

export default {
  async authenticateUser(email, password) {
    const authenticationData = {
      Username: email,
      Password: password
    };

    console.log('authenticate... ', authenticationData);
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const cognitoUser = await createCognitoUser(email);

    // const auth = {};

    const getAuthUser = () => {
      return new Promise((resolve, reject) => {
        cognitoUser.authenticateUser(authenticationDetails, {
          onSuccess: function (result) {
            resolve(result);
          },
          onFailure: function (err) {
            reject(err);
          }
        });
      });
    };

    const authData = await getAuthUser();

    return authData;
  },
  async forgotPassword(email) {
    const cognitoUser = await createCognitoUser(email);

    const getNewPassword = () => {
      return new Promise((resolve, reject) => {
        cognitoUser.forgotPassword({
          onSuccess: result => {
            resolve(result);
          },
          onFailure: err => {
            reject(err);
          }
        });
      });
    };

    await getNewPassword()
      .then(async result => {
        result;
      })
      .catch(err => err);
  },
  async forgotPasswordSubmit(email, code, password) {
    const cognitoUser = await createCognitoUser(email);

    const confirmPassword = () => {
      return new Promise((resolve, reject) => {
        cognitoUser.confirmPassword(code, password, {
          onSuccess: result => {
            resolve(result);
          },
          onFailure: err => {
            reject(err);
          }
        });
      });
    };

    await confirmPassword()
      .then(result => result)
      .catch(err => err);
  }
};
