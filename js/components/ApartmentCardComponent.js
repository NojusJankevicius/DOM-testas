class ApartmentCardComponent {
    static USD_EUR = 0.86;

    constructor(props) {
      this.props = props;
      this.init();
    }

    formatPrice = () => {
        const {
            price: { currency, amount },
        } = this.props;
        
      let finalPrice;
      switch (currency) {
        case '$':
          finalPrice = amount * ApartmentCardComponent.USD_EUR;
          break;
        case '€':
          finalPrice = amount;
          break;
      }
  
      return finalPrice;
    }

    init = () => {
        const { type, owner, roomCount, squares, address, imgSrc } = this.props

        const ownerAddress = `${address.street} - ${address.number}, ${address.city}, ${address.country}`
        
        this.htmlElement = document.createElement('article')
        this.htmlElement.className = 'card shadow position-relative';
        this.htmlElement.innerHTML = `
        <img src="${imgSrc}"  height="300px" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${type}</h5>
                <div>
                    <span><strong>Room count</strong>:</span>
                    ${roomCount}
                </div>
                <div>
                    <span><strong>Squares</strong>:</span>
                    ${squares}
                </div>
                <div>
                    <span><strong>Price</strong>:</span>
                    ${this.formatPrice()} €
                </div>
                <div>
                    <span><strong>Address</strong>:</span>
                    ${ownerAddress}
                </div>
                <div>
                    <span><strong>Owner</strong>:</span>
                    <ul>
                        <li><strong>Name</strong>: ${owner.fullname}</li>
                        <li><strong>Email</strong>: ${owner.email}</li>
                        <li><strong>Phone</strong>: ${owner.phone}</li>
                    </ul>
                </div>
            </div>
            <button class="btn btn-dark btn-sm position-absolute top-0 end-0 mt-2 me-2">✕</button>
        `
    }
}