# Quality Insight · Supabase Auth

This is a static browser app with a public `auth.html` route and a protected `index.html` dashboard.

## Configure

1. In Supabase, create an email/password user or enable email sign-ups under Authentication.
2. Replace the placeholders in `config.js` with your project URL and publishable/anon key.
3. Serve the `app` directory over HTTP (for example, `npx serve .`) and open `auth.html`. Do not open the HTML with `file://`, because module imports and Supabase redirects require an HTTP origin.

The browser only receives the publishable/anon key. Never put a `service_role` or secret key in this directory.
