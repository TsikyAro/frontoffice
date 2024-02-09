import React,{useState} from 'react';
import DownloadAppBanner from '../component/DownloadAppBanner';
// import '../assets/vendor/bootstrap/css/bootstrap.min.css';
// import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
// import '../assets/vendor/boxicons/css/boxicons.min.css';
// import '../assets/vendor/quill/quill.snow.css';
// import '../assets/vendor/quill/quill.bubble.css';
// import '../assets/vendor/remixicon/remixicon.css';
// import '../assets/vendor/simple-datatables/style.css';
// import '../assets/css/style.css';
import useAddObjectLogin from '../hooks/login.js'

const LoginPage = () => {
    const [showBanner, setShowBanner] = useState(false);
  
    const handleRegisterClick = () => {
      setShowBanner(true);
    };
  
    const closeBanner = () => {
      setShowBanner(false);
    };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Gérez la soumission du formulaire  ici
  };
  const[mail,setEmail] = useState();
  const[motdepasse,setMotdepasse] = useState();
  const OnClickButton=()=>{
    console.log("clicccccc");
    const data = {
      mail: "arotsiky59@gmail.com",
      motdepasse :"1230!"
    }
    useAddObjectLogin("compte",data);
  }

  return (
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                {/* <a href="/" className="logo d-flex align-items-center w-auto"> */}
                 <h2> <span className="d-none d-lg-block">Occasion'AUTO</span> </h2>
                {/* </a> */}
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Connectez-vous à votre compte</h5>
                    <p className="text-center small">Entrer votre email  & mot de passe pour se connecter</p>
                  </div>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                      <label htmlFor="yourUsername" className="form-label">Email</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" name="username" className="form-control" id="yourUsername" required value={mail} onChange={(e)=>{setEmail(e.target.value)}} />
                        <div className="invalid-feedback">Veuillez entrer votre adresse email</div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="yourPassword" className="form-label">Mot de passe</label>
                      <input type="password" name="password" className="form-control" id="yourPassword" required value={motdepasse} onChange={(e)=>{setMotdepasse(e.target.value)}} />
                      <div className="invalid-feedback">Veuillez entrer votre mot de passe !</div>
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">Se souvenir de moi</label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-primary w-100" type="submit" onClick={OnClickButton}>Se connecter</button>
                    </div>
                    <div className="mb-3">
                      <p className="small mb-0">Vous n'avez pas de compte ? <a href='' onClick={handleRegisterClick}>Créez un compte</a></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {showBanner && <DownloadAppBanner onClose={closeBanner} />}
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
