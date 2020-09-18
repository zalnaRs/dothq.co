import { Req, Res } from "../../../types";

import User from "../../models/User";

import { api } from "../..";

export default {
    route: '/id/sign-up',
    accepts: ['POST'],
    flags: { 
        requireChallenge: true
    },
    handlers: {
        POST: async (req: Req, res: Res) => {
            const userExists = await User.findOne({ where: { email: req.body.email } }).then(exists => { return !!exists })
            if(userExists) return api.errors.stop(4009, res);

            await User.create(req.body);

            api.errors.stop(200, res);
        }
    }
}