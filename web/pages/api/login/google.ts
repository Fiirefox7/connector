import { NextApiRequest, NextApiResponse } from "next";
import { ISDEV, API_ENDPOINT } from "../../../helpers/api";

const GOOGLE_OAUTH_URI = ISDEV ? 'https://test.stytch.com/v1/public/oauth/google/start?public_token=public-token-test-363ed94e-39d5-4a4a-a0e2-7ebc82a5124c' : 'https://api.stytch.com/v1/public/oauth/google/start?public_token=public-token-live-f45a72f8-f406-4a08-a101-a432747bc0d6';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = JSON.stringify({
    method: 'oauth',
    host: req.headers.host,
  })
  const redirectUrl = `${API_ENDPOINT}/routes/user/login?state=${state}`;
  res.redirect(`${GOOGLE_OAUTH_URI}&signup_redirect_url=${redirectUrl}&login_redirect_url=${redirectUrl}`);
}