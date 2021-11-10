class ApartmentCardComponent {
    constructor(props) {
      this.props = props;
      this.init();
    }

    init = () => {
        
        this.htmlElement = document.createElement('article')
        this.htmlElement.className = 'card shadow position-relative';
        this.htmlElement.innerHTML = `
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flandmarkhunter.com%2Fphotos%2F60%2F53%2F605328-L.jpg&f=1&nofb=1"  height="300px" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">house</h5>
                <div>
                    <span><strong>Room count</strong>:</span>
                    5
                </div>
                <div>
                    <span><strong>Squares</strong>:</span>
                    130
                </div>
                <div>
                    <span><strong>Price</strong>:</span>
                    280000 €
                </div>
                <div>
                    <span><strong>Address</strong>:</span>
                    Naugarduko 33, Lithuania, Vilnius
                </div>
                <div>
                    <span><strong>Owner</strong>:</span>
                    <ul>
                        <li><strong>Name</strong>: Vladimiras Hosovič</li>
                        <li><strong>Email</strong>: vladimir@hosovix.xx</li>
                        <li><strong>Phone</strong>: 865259412</li>
                    </ul>
                </div>
            </div>
            <button class="btn btn-dark btn-sm position-absolute top-0 end-0 mt-2 me-2">✕</button>
        `
    }
}