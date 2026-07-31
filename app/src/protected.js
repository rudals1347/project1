import { guardProtectedRoute } from './auth-guard.js';
import { supabase } from './supabase.js';

const { data: { session } } = await supabase.auth.getSession();
const guard = guardProtectedRoute(session?.user ?? null, window.location.pathname);

if (!guard.allowed) {
  window.location.replace(guard.redirectTo);
} else {
  const email = session.user.email || '인증된 사용자';
  document.querySelector('#user-email').textContent = email;
  document.querySelector('#sign-out').addEventListener('click', async () => {
    await supabase.auth.signOut();
    window.location.replace('/auth.html');
  });

  supabase.auth.onAuthStateChange((_event, nextSession) => {
    if (!nextSession?.user) window.location.replace('/auth.html');
  });
}
