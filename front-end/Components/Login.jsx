import React from 'react';

export default function Login() {
  return (
      <div>
      <form>
        <input type="email" placeholder="email@trybeer.com.br" required>
          Login
        </input>
        <input type="password" placeholder="*********">
          Senha
        </input>
        <button type="button">LOGIN</button>
        <button type="button">Ainda não tenho conta</button>
      </form>
      </div>
  );
}
