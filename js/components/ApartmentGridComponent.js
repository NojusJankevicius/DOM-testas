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
        if (this.state.apartments.length === 0) {
            this.htmlElement.innerHTML = `<div class="text-center"><img src="assets/loading.gif" /></div>`;
        } else {
            this.htmlElement.innerHTML = "";
            const children = this.state.apartments.map(({apartmentProps}) => new ApartmentCardComponent({
                ...apartmentProps
            }))
            .map(x => x.htmlElement)
            .map(this.wrapChild)
            this.htmlElement.append(...children)
        }
    };
}
