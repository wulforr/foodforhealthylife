import React from "react";
import Display from "./display";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class Others extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/products/others">
                        <Normal />
                    </Route>
                </Switch>
            </div>
        );
    }
}
class Normal extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    images: [
                        require("../images/picture/Puffy Hearts 300g.jpg"),
                        require("../images/picture/Puffy Hearts 300g.jpg"),
                    ],
                    name: "Puffy Hearts",
                    detail: ["Hand Made Classics", "Eggless"],
                    width: "220px"
                },
                {
                    images: [
                        require("../images/picture/CakeRusk 300 g.jpg"),
                        require("../images/picture/CakeRusk 300 g.jpg"),
                    ],
                    name: "Cake Rusk",
                    detail: ["Hand Made Classics", "Eggless"],
                    width: "220px"

                },
                {
                    images: [
                        require("../images/picture/10. Fruit Cake Rusk 300 g.jpg"),
                        require("../images/picture/10. Fruit Cake Rusk 300 g.jpg"),
                    ],
                    name: "Fruit Cake",
                    detail: ["Hand Made Classics", "Eggless"],
                    width: "220px"

                },
                {
                    images: [
                        require("../images/picture/11. Coconut Macaroon 250g.jpg"),
                        require("../images/picture/11. Coconut Macaroon 250g.jpg"),
                    ],
                    name: "Coconut Macaroon",
                    detail: ["Hand Made Classics", "Eggless"],
                    width: "220px"
                },
                {
                    images: [
                        require("../images/picture/12. Puff Fans 300 g.jpg"),
                        require("../images/picture/12. Puff Fans 300 g.jpg"),
                    ],
                    name: "Puff fans",
                    detail: ["Hand Made Classics", "Eggless"],
                    width: "220px"
                },
            ]
        };
    }
    render() {
        return (
            <div className="normal-biscuit">
                {/* <Link to="/products/biscuit/premium">
          <button className="premium-button">
            <span>Healthy Cookies</span>
          </button>
        </Link> */}
                <div className="display-main">
                    {this.state.products.map(product => {
                        return <Display desc={{ ...product }} />;
                    })}
                    {/* <Display desc = {{imageUrl: require('../images/picture/R2.png'), name: 'Coconut Cookie', detail: ['Hand Crafted', 'Eggless', "Suger Free"]}}/>
                      <Display desc = {{imageUrl: require('../images/picture/R2.png'), name: 'Coconut Cookie', detail: ['Hand Crafted', 'Eggless', "Suger Free"]}}/> */}
                </div>
            </div>
        );
    }
}


export default Others;
