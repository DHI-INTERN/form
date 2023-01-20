import Card from "./Card";
import cards1 from "./img/cards1.png";
import cards2 from "./img/cards2.png";
import cards3 from "./img/cards3.png";
import cards4 from "./img/cards4.png";

function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                    <Card title="Reliable Places" img={cards1} text="We do... What we say... We promise for satisfaction and meet the expectation." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="High Credibility" img={cards2} text="Credibility comes with believe in chance to perform the quality. We promise to deliver the best always." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Quick search" img={cards3} text="As you click the button, you get the result. We save your valuable time & give you the answer." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Know better" img={cards4} text="You search for better. we give you the same with your suitability. We have expert to deal your queries." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
