import React from "react";

function LandingPage() {
  //   useffect(() => {
  //     fetch("http://localhost:9292/mechanics")
  //       .then((res) => res.json)
  //       .then((data) => console.log(data));
  //   }, []);

  return (
    <div>
      <div className="cardi">
        <div className="landingpage">
          <div className="landing rightie">
            <h1 className="words">My Mechanic</h1>
            <p className="words2">
              Lorem ipsum dolor sit amet. Ea fugit odit ut internos quis rem
              pariatur adipisci et nemo iure ea minima nesciunt ad magnam
              beatae! Aut fugit blanditiis qui consequatur sapiente sit aliquid
              magnam et nesciunt enim aut totam consequatur At dolore dicta nam
              ipsam officiis.
            </p>
          </div>
        </div>
      </div>
      <div className="header">
        <h1>Get your favourite mechanic</h1>
        <p>
          Id necessitatibus aliquam et reiciendis praesentium est accusamus
          doloremque non voluptatibus dolor sed expedita doloremque? Ut officia
          illo est consequuntur natus aut eveniet minus non quibusdam internos
          sit internos voluptatem sit perferendis quos. Ut voluptatum veniam aut
          aliquid voluptatem vel necessitatibus molestias non repudiandae
          aliquid ut laudantium atque est fuga adipisci vel blanditiis corporis.
          Eum voluptatem voluptatum sit inventore corporis qui delectus
          accusamus.
        </p>
      </div>

      <div className="why-us">
        <h1>Why choose us</h1>
        <p>
          Et omnis odit qui repellendus consectetur et mollitia deleniti est
          porro consequatur. Aut dolorem error qui labore dolore ut sunt
          deserunt eum voluptatum dolores sit illum dolor.
        </p>
        <div className="cardsection">
          <div className="card bodycard">
            <div className="card-body">
              <h5 className="card-title">Why us</h5>
              <ul>
                <li className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </li>
                <li className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </li>
                <li className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </li>
              </ul>
            </div>
          </div>
          <div className="card bodycard">
            <div className="card-body">
              <h5 className="card-title">FAQs</h5>
              <ul>
                <li className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </li>
                <li className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </li>
                <li className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </li>
              </ul>
            </div>
          </div>
          <div className="card bodycard">
            <div className="card-body">
              <h5 className="card-title">Our services</h5>
              <ul>
                <li className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </li>
                <li className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </li>
                <li className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
