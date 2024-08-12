import './itemCards.css'
import Home from "./home"
import "./home.css"
const Cards = ({ isMod }) => (
    <div className='cards-container'>
        
        {isMod && (
            <div className="add-stock">
               <a href>+</a> 
                </div>
        )}
        <div className="card">
            <div className="card-image">
                <img src="https://www.wahlpro.com/media/catalog/product/b/a/baldingclipper-hero-3000x3000-min.jpg?optimize=medium&fit=bounds&height=200&width=200&canvas=200:200" />
            </div>
            <div className="card-description">wahl clippers</div>
            <div className="card-review">5 stars</div>
            <div className="card-price">$76.00</div>
            <div className="card-addCart"><button>Add cart</button></div>
            {isMod && (
                <div className="card-mod-control">
                    Increase/Decrease Stock
                    <input type='number' min="-999" max="999" />
                </div>
            )}
        </div>

        <div className="card">
            <div className="card-image">
                <img src="https://www.wahlpro.com/media/catalog/product/b/a/baldingclipper-hero-3000x3000-min.jpg?optimize=medium&fit=bounds&height=200&width=200&canvas=200:200" />
            </div>
            <div className="card-description">wahl clippers</div>
            <div className="card-review">5 stars</div>
            <div className="card-price">$76.00</div>
            <div className="card-addCart"></div>

        </div>
        <div className="card">
            <div className="card-image">
                <img src="https://www.wahlpro.com/media/catalog/product/b/a/baldingclipper-hero-3000x3000-min.jpg?optimize=medium&fit=bounds&height=200&width=200&canvas=200:200" />
            </div>
            <div className="card-description">wahl clippers</div>
            <div className="card-review">5 stars</div>
            <div className="card-price">$76.00</div>
            <div className="card-addCart"></div>

        </div>
        <div className="card">
            <div className="card-image">
                <img src="https://www.wahlpro.com/media/catalog/product/b/a/baldingclipper-hero-3000x3000-min.jpg?optimize=medium&fit=bounds&height=200&width=200&canvas=200:200" />
            </div>
            <div className="card-description">wahl clippers</div>
            <div className="card-review">5 stars</div>
            <div className="card-price">$76.00</div>
            <div className="card-addCart"></div>

        </div>
        <div className="card">
            <div className="card-image">
                <img src="https://www.wahlpro.com/media/catalog/product/b/a/baldingclipper-hero-3000x3000-min.jpg?optimize=medium&fit=bounds&height=200&width=200&canvas=200:200" />
            </div>
            <div className="card-description">wahl clippers</div>
            <div className="card-review">5 stars</div>
            <div className="card-price">$76.00</div>
            <div className="card-addCart"></div>

        </div>
        <div className="card">
            <div className="card-image">
                <img src="https://www.wahlpro.com/media/catalog/product/b/a/baldingclipper-hero-3000x3000-min.jpg?optimize=medium&fit=bounds&height=200&width=200&canvas=200:200" />
            </div>
            <div className="card-description">wahl clippers</div>
            <div className="card-review">5 stars</div>
            <div className="card-price">$76.00</div>
            <div className="card-addCart"></div>

        </div>
        <div className="card">
            <div className="card-image">
                <img src="https://www.wahlpro.com/media/catalog/product/b/a/baldingclipper-hero-3000x3000-min.jpg?optimize=medium&fit=bounds&height=200&width=200&canvas=200:200" />
            </div>
            <div className="card-description">wahl clippers</div>
            <div className="card-review">5 stars</div>
            <div className="card-price">$76.00</div>
            <div className="card-addCart"></div>

        </div>
        <div className="card">
            <div className="card-image">
                <img src="https://www.wahlpro.com/media/catalog/product/b/a/baldingclipper-hero-3000x3000-min.jpg?optimize=medium&fit=bounds&height=200&width=200&canvas=200:200" />
            </div>
            <div className="card-description">wahl clippers</div>
            <div className="card-review">5 stars</div>
            <div className="card-price">$76.00</div>
            <div className="card-addCart"></div>

        </div>
    </div>
)
export default Cards
