import React from "react";

export default function Home() {
  return (
    <div>
      <div className="center Logo">
        <div style={{paddingTop: 180, paddingBottom: 40}}>
          <h1
            className="center"
            style={{
              letterSpacing: 2,
              opacity: 0.75,
              fontWeight: "bold",
              color: "black",
              backgroundColor: "white",
            }}
          >
            FIND MOVIES ONLINE
          </h1>
        </div>
      </div>

      <div className="container">
        <br></br>
        <div className="divider"></div>
        <h1 className="center">Cloud x Movies</h1>
        <h5 className="center">
          Your one stop shop to find currently showing movies around your
          neighbourhood.
        </h5>
        <h5 className="center">
          All you need is an account and you're good to go.
        </h5>
        <div className="row" style={{paddingTop: 40}}>
          <h5 className="col offset-s2">Watch a move in three easy steps: </h5>
          <div className="col offset-s2">
            <h5>
              <i class="material-icons small"> looks_one</i> Create an account
              with us
            </h5>
          </div>
          <div className="col offset-s2">
            <h5>
              <i class="material-icons small"> looks_two</i> Search for a
              currently showing movies
            </h5>
          </div>
          <div className="col offset-s2">
            <h5>
              <i class="material-icons small"> looks_3</i> Choose your cinema
            </h5>
          </div>
        </div>
        <h5 className="col offset-s2" style={{paddingTop: 40}}>
          We will direct you using the fastest route to your local cinemas and
          you'll be watching your movie in no time!
        </h5>
        <br></br>
        <br></br> <br></br>
        <div className="divider"></div> <br></br>
        <br></br>
      </div>
    </div>
  );
}
