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

    delApartment = id => API.deleteApartment(id, this.fetchApartments, this.showError)

    showError = (err) => console.error(err);
    
    fetchApartments = () => API.getApartments(this.saveData, this.showError);

    wrapChild = element => {
        const wrapper = document.createElement('div');
        wrapper.className = 'col-12 col-sm-6 col-lg-4 col-xl-3';
        wrapper.append(element);
        return wrapper;
      }

    init = () => {
        this.fetchApartments();
        this.htmlElement = document.createElement('div');
        this.htmlElement.className = 'row g-3';

        this.render()
    };

    render = () => {
        const {apartments} = this.state
        if (apartments.length === 0) {
            this.htmlElement.innerHTML = `<div class="text-center"><img src="assets/loading.gif" /></div>`;
        } else if(apartments.length > 0) {
            this.htmlElement.innerHTML = "";
            const children = apartments
            .map(({ id, ...apartmentProps}) => new ApartmentCardComponent({
                ...apartmentProps,
                onDelete: () => this.delApartment(id)
            }))
            .map(x => x.htmlElement)
            .map(this.wrapChild)
            this.htmlElement.append(...children)
        } else {
            this.htmlElement.innerHTML = "no apartments listed"
        }
    };
}
