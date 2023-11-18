

export default function Login() {

    
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="/">Jobify</a>
    </div>
</nav>

<div class="container mt-4">
    <div class="row justify-content-center align-items-center">
        <div class="col-md-6">
            
            <div class="card">
                <div class="card-header">LogIn</div>
                <div class="card-body">
                    <form>
                        
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" required autocomplete="off" />
                            <div id="emailHelpBlock" class="form-text" style={{display: 'none'}}>
                                Please enter a valid @northeastern.edu email address.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" required autocomplete="off" />
                            <div id="passwordHelpBlock" class="form-text" style={{display: 'none'}}>
                                Your password must be 8-20 characters long, contain letters
                                and numbers, and must not contain spaces, special
                                characters, or emoji.
                            </div>
                        </div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width: 0}} id="progressBar"></div>
                        </div>
                        <br />

                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary" id="signInButton">
                                Sign In
                                <div id="loading-spinner" class="spinner-border spinner-border-sm ms-2" role="status" style={{display: 'none'}}></div>
                            </button>
                        </div>
                        
                        <div class="alert alert-success" role="alert" id="successAlert" style={{display: 'none'}}>
                            Thank you for signing in!
                        </div>


                    </form>
                </div>
            </div>
            <br />
        </div>
       
    </div>
</div>
</>
  );
}
