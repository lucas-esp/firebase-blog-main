import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Auth = ({ setActive, setUser, handleLogout, userId }) => {
  console.log('🚀 ~ file: Auth.js:16 ~ Auth ~ userId:', userId);
  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);

  const { email, password, firstName, lastName, confirmPassword } = state;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!signUp) {
      if (email && password) {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        setUser(user);
        setActive('home');
      } else {
        return toast.error('Todos os campos devem ser preenchidos');
      }
    } else {
      if (password !== confirmPassword) {
        return toast.error("Senhas não coincidem");
      }
      if (firstName && lastName && email && password) {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user, { displayName: `${firstName} ${lastName}` });
        setActive('home');
      } else {
        return toast.error('Todos os campos devem ser preenchidos');
      }
    }
    navigate('/');
  };

  return (
    <div className="container-fluid mb-4">
      <div className="container">
        <div className="col-12 text-center">
          <div className="text-center heading py-2">{!signUp ? 'Login' : 'Cadastre-se'}</div>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <form className="row" onSubmit={handleAuth}>
              {signUp && (
                <>
                  <div className="col-6 py-3">
                    <input type="text" className="form-control input-text-box" placeholder="Nome" name="firstName" value={firstName} onChange={handleChange} />
                  </div>
                  <div className="col-6 py-3">
                    <input type="text" className="form-control input-text-box" placeholder="Sobrenome" name="lastName" value={lastName} onChange={handleChange} />
                  </div>
                </>
              )}
              <div className="col-12 py-3">
                <input type="email" className="form-control input-text-box" placeholder="Email" name="email" value={email} onChange={handleChange} />
              </div>
              <div className="col-12 py-3">
                <input type="password" className="form-control input-text-box" placeholder="Senha" name="password" value={password} onChange={handleChange} />
              </div>
              {signUp && (
                <div className="col-12 py-3">
                  <input type="password" className="form-control input-text-box" placeholder="Confirme a senha" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                </div>
              )}

              <div className="col-12 py-3 text-center">
                <button className={`btn ${!signUp ? 'btn-sign-in' : 'btn-sign-up'}`} type="submit">
                  {!signUp ? 'Entrar' : 'Sign-up'}
                </button>
              </div>
            </form>
            <div>
              {!signUp ? (
                <>
                  {userId && (
                    <div className="text-center justify-content-center mt-2 pt-2">
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Não possui uma conta ?&nbsp;
                        <span className="link-danger" style={{ textDecoration: 'none', cursor: 'pointer' }} onClick={() => setSignUp(true)}>
                          Cadastre-se
                        </span>
                      </p>
                      {userId && (
                        <button onClick={handleLogout} style={{ marginBlock: '4px' }}>
                          Sair
                        </button>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="text-center justify-content-center mt-2 pt-2">
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Já tem uma conta ?&nbsp;
                      <span
                        style={{
                          textDecoration: 'none',
                          cursor: 'pointer',
                          color: '#298af2',
                        }}
                        onClick={() => setSignUp(false)}
                      >
                        Entrar
                      </span>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
