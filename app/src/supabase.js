import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.53.0/+esm';

const config = window.__SUPABASE_CONFIG__;

if (!config?.url || !config?.publishableKey || config.url.includes('YOUR-PROJECT')) {
  throw new Error('Supabase is not configured. Update app/config.js with your project URL and publishable key.');
}

export const supabase = createClient(config.url, config.publishableKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
