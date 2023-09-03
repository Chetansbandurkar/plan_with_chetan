import Card from "./Card";

function Tours({tours,removeTour}) {
    return (
        <div className="container">
            <div>
                <h2 className="title">Plan With Chetan</h2>
            </div>
            <div className="cards">
               {
                tours.map((tour)=>{
                    // clonning ...tour}{}
                    return <Card {...tour} removeTour={removeTour}></Card>
                })
               }
            </div>
        </div>
    );
}

export default Tours;