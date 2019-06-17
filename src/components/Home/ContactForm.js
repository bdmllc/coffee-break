import React from "react"
import Title from "../Globals/Title"

export default function ContactForm() {
  return (
    <section className="contact pt-3 pb-5 px-auto">
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <label className="hidden">
              <input name="bot-field" />
            </label>
            {/* {name} */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="hidden" name="form-name" value="contact" />
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="j. smith"
              />
            </div>
            {/* {email} */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="email@email.com"
              />
            </div>
            {/* {description} */}
            <div className="form-group">
              <label htmlFor="description">Messege</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
                placeholder="your messege here..."
              />
            </div>
            {/* {submit} */}
            <div data-netlify-recaptcha="true" />
            <button
              type="submit"
              className="btn submit btn-block text-capitalize mt-5"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
