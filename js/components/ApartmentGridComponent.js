class ApartmentGridComponent {
    constructor() {
        this.htmlElement = document.createElement("div");
        this.state = {
            apartments: [],
        };
        this.init();
    }

    saveData = (apartments) => {
        this.state.apartments = apartments;

        this.render();
    };

    showError = (err) => console.error(err);
    fetchApartments = () => API.getApartments(this.saveData, this.showError);

    init = () => {
        this.fetchApartments();

        this.render()
    };

    render = () => {
        if (this.state.apartments.length === 0) {
            this.htmlElement.innerHTML = "<p>siunčiama...</p>";
        } else {
            this.htmlElement.innerHTML =
                "<p>parsiųsta</p>";
        }
    };
}
