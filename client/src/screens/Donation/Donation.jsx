import React, { useState } from "react"
import "./Donation.css"
import Layout from "../../components/shared/Layout/Layout"
import donationGirls from "../../img/donation-page.png"

function Donation() {
  return (
    <Layout>
      <div>
        <div className="donation-content">
          <div className="img-container">
            <img
              src={donationGirls}
              className="donation-pic"
              alt="Support Black Girls CODE"
            />
          </div>
          <p className="mission-p">
            Our mission is to empower young women of color between the ages of
            7-17 to embrace the current tech marketplace as builders and
            creators by introducing them to skills in computer programming and
            technology.
          </p>
          <div className="form-container">
            <h1 className="form-header">Choose Donation Amount</h1>
            <div className="btn-group-1">
              <button>One-Time</button>
              <button>Monthly</button>
              <button>Quarterly</button>
              <button>Annually</button>
            </div>
            <div className="btn-group-2">
              <button>$25</button>
              <button>$50</button>
              <button>$100</button>
              <button>$250</button>
            </div>
            <form>
              <input
                type="text"
                className="amount"
                placeholder="$ Enter amount"
              ></input>
              <div className="matching">
                <h3>Employer Donation Matching</h3>
                <input
                  type="text"
                  className="company-name"
                  placeholder="Search company name..."
                ></input>
                <h3>
                  Type in your employer's name to find out if they can match
                  your donations
                </h3>
              </div>
              <div className="check-boxes">
                <label htmlFor="dedicate">
                  Dedicate my donation in honor or in memory of someone{" "}
                </label>
                <input type="checkbox" name="dedicate"></input>
                <label hmtlFor="comment"> Write us a comment </label>
                <input type="checkbox" name="comment"></input>
                <label htmlFor="display-to-dw">
                  {" "}
                  Display your donation and comment on the donor wall
                </label>
                <input type="checkbox" name="display-to-dw"></input>
              </div>
            </form>
            <button>Submit</button>
          </div>
          <div className="charity-container">
            <p className="charity">
              We are a 501(c)(3) charitable organization. Our E IN # is
              45-4930530. All donations are fully tax-deductible and no goods or
              services have been exchanged for this donation.
            </p>
          </div>
          <div className="donor-wall-container">
            <h1 className="donor-text">Donor Wall</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Donation
