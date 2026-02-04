// @ts-nocheck
import { createRemoteJWKSet, jwtVerify } from 'jose';

const TEAM_DOMAIN = 'longbest-ai.cloudflareaccess.com';
const CERTS_URL = `https://${TEAM_DOMAIN}/cdn-cgi/access/certs`;
const JWKS = createRemoteJWKSet(new URL(CERTS_URL));
const AUD = 'fe3c4809568693cb9274ff6dc4781826a50e378e957e7d69d0f46ce75e3e2ef2';

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        // Validate Cloudflare Access JWT
        const jwt = request.headers.get('Cf-Access-Jwt-Assertion');
        if (!jwt) {
            // For local development, you might want to bypass this or check for a specific env var
            // But for production security as requested:
            return new Response('Authentication required: No JWT found', { status: 401 });
        }

        try {
            await jwtVerify(jwt, JWKS, {
                issuer: `https://${TEAM_DOMAIN}`,
                audience: AUD,
            });
        } catch (e) {
            console.error('JWT Validation Failed:', e);
            return new Response('Authentication failed: Invalid JWT', { status: 403 });
        }

        // 1. Try to serve the request as a static asset
        let response = await env.ASSETS.fetch(request);

        // 2. If it's a 404 and looks like a route (not a file), serve index.html
        if (response.status === 404 && !url.pathname.includes('.')) {
            response = await env.ASSETS.fetch(new URL("/index.html", request.url));
        }

        return response;
    },
};
