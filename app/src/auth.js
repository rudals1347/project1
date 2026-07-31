import { guardProtectedRoute } from './auth-guard.js';
import { supabase } from './supabase.js';

const form = document.querySelector('#auth-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const nameInput = document.querySelector('#full-name');
const submitButton = document.querySelector('#submit-button');
const modeButton = document.querySelector('#mode-button');
const formTitle = document.querySelector('#form-title');
const formHint = document.querySelector('#form-hint');
const nameField = document.querySelector('#name-field');
const message = document.querySelector('#auth-message');
const nextPath = new URLSearchParams(window.location.search).get('next') || '/index.html';
let mode = 'signin';

function showMessage(text, type = 'error') {
  message.textContent = text;
  message.dataset.type = type;
  message.hidden = !text;
}

function setMode(nextMode) {
  mode = nextMode;
  const signup = mode === 'signup';
  nameField.hidden = !signup;
  formTitle.textContent = signup ? '계정 만들기' : '품질 인사이트 로그인';
  formHint.textContent = signup ? '팀의 품질 데이터를 안전하게 분석하세요.' : '등록한 이메일로 대시보드에 접속하세요.';
  submitButton.textContent = signup ? '계정 만들기' : '로그인';
  modeButton.textContent = signup ? '이미 계정이 있어요' : '처음 방문하셨나요? 계정 만들기';
  showMessage('');
}

modeButton.addEventListener('click', () => setMode(mode === 'signin' ? 'signup' : 'signin'));

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  submitButton.disabled = true;
  showMessage('');

  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const result = mode === 'signin'
    ? await supabase.auth.signInWithPassword({ email, password })
    : await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: nameInput.value.trim() } },
      });

  submitButton.disabled = false;
  if (result.error) {
    showMessage('로그인 정보를 확인하거나 Supabase 설정을 점검해 주세요.');
    return;
  }

  if (mode === 'signup' && !result.data.session) {
    showMessage('확인 이메일을 보냈습니다. 이메일 인증 후 로그인해 주세요.', 'success');
    return;
  }

  window.location.assign(nextPath);
});

const { data: { session } } = await supabase.auth.getSession();
if (session?.user) window.location.assign(nextPath);
