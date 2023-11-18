import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <>
<div class="container my-5">
  <footer class="bg-light text-center">
    <div class="container p-4 pb-0">
      <section class="">
        <form action="">
          <div class="row d-flex justify-content-center">
            <div class="col-auto">
              <p class="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
            <div class="col-md-5 col-12">
              <div class="form-outline mb-4">
                <input type="email" id="form5Example2" class="form-control" />
                <label class="form-label" for="form5Example2">Email address</label>
              </div>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-4">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>

    <div class="text-center p-3" >
      © 2023 Copyright:
      &nbsp; 
      <a class="text-dark" href="mailto:jobify@gmail.com" >Jobify</a>
    </div>
  </footer>
</div>
</>
    
  );
}
