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
    };

    render = () => {
        if (this.state.apartments.length === 0) {
            this.htmlElement.innerHTML = "nėr";
        } else {
            this.htmlElement.innerHTML =
                "<pre>" + JSON.stringify(this.state.apartments) + "</pre>";
        }
    };
}
