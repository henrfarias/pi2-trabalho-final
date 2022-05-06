import { Router } from "express";
import loginFactory from "../../main/login-factory";
import updateUserFactory from "../../main/update-user-factory";
import userRegistrationFactory from "../../main/user-registration-factory";
import { adaptRoute } from "../adapter/router-adapter";
import { auth } from "../middleware/authenticate";

export default (router: Router): void => {
  router.post('/register', adaptRoute(userRegistrationFactory()))
  router.put('/register', auth, adaptRoute(updateUserFactory()))
  router.post('/login', adaptRoute(loginFactory()))
}