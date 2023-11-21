import React from "react";

const Pqrs = () => {
  return (
    <section className="vh-100" tabIndex={0}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-5 px-5 d-none d-sm-block">
            <img
              src="/img/pqrs.jpeg"
              alt="Login image"
              className="w-100 vh-100"
            />
          </div>
          <div className="col-sm-7 text-black">
            <div className="px-5  ms-xl-4">
              <span className="h1 fw-bold mb-0">LENSES</span>
            </div>
              <form className="px-5 ms-xl-4">
                <h3 className="fw-normal mb-3 pb-3"></h3>
                <div className="mb-3">
                  <label form="FullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="Text"
                    className="form-control"
                    id="FullName"
                    placeholder="Names"
                  />
                </div>
                <div className="mb-3">
                  <label form="EmailAdress" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="EmailAdress"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    form="coment"
                    className="form-label"
                  >
                    Coment
                  </label>
                  <textarea
                    className="form-control"
                    id="coment"
                    rows={3}
                  ></textarea>
                </div>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pqrs;
