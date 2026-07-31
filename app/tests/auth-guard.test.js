import test from 'node:test';
import assert from 'node:assert/strict';
import { guardProtectedRoute } from '../src/auth-guard.js';

test('redirects unauthenticated visitors to sign-in and preserves the destination', () => {
  const result = guardProtectedRoute(null, '/');

  assert.deepEqual(result, {
    allowed: false,
    redirectTo: '/auth.html?next=%2F',
  });
});

test('allows a visitor with a Supabase user session', () => {
  const result = guardProtectedRoute({ id: 'user-123' }, '/');

  assert.deepEqual(result, { allowed: true });
});
