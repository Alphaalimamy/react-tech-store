import React from "react";
import Title from "../Title";
export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" />
          <form className="mt-5">
            {/* firstName */}
            <div className="form-group my-3">
              <input
                type="text"
                name="firstName"
                placeholder="Alpha Alimamy"
                className="form-control"
              />
            </div>

            {/* email */}
            <div className="form-group my-3">
              <input
                type="email"
                name="email"
                placeholder="email@email.com"
                className="form-control"
              />
            </div>

            {/* subject */}
            <div className="form-group my-3">
              <input
                type="text"
                name="subject"
                placeholder="subject"
                className="form-control"
              />
            </div>

            {/* message */}
            <div className="form-group my-3">
              <textarea
                name="message"
                placeholder=""
                className="form-control"
                row="10"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
