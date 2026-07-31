export function guardProtectedRoute(user, pathname) {
  if (user) return { allowed: true };

  return {
    allowed: false,
    redirectTo: `/auth.html?next=${encodeURIComponent(pathname || '/')}`,
  };
}
