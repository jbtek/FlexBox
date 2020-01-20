const userCard = (async () => {
        const res = await fetch('./src/jsfeatures/WebAPI/UserCard/UserCard.html');
        const textTemplate = await res.text();
        const HTMLTemplate = new DOMParser().parseFromString(textTemplate, 'text/html')
            .querySelector('template');

        class UserCard extends HTMLElement {
            constructor() {
                super();
            }
            connectedCallback() {
                const shadowRoot = this.attachShadow({ mode: 'closed' });
                const instance = HTMLTemplate.content.cloneNode(true);
                console.log('connectedCallback::', HTMLTemplate);
                shadowRoot.appendChild(instance);

                // You can also put checks to see if attr is present or not
                // and throw errors to make some attributes mandatory
                // Also default values for these variables can be defined here
                this.username = this.getAttribute('username');
                this.address = this.getAttribute('address');
                this.isAdmin = this.getAttribute('is-admin');
            }

        // Define setters to update the DOM whenever these values are set
            set username(value) {
                this._username = value;
                if (this.shadowRoot)
                    this.shadowRoot.querySelector('#card__username').innerHTML = value;
            }

            get username() {
                return this._username;
            }

            set address(value) {
                this._address = value;
                if (this.shadowRoot)
                    this.shadowRoot.querySelector('#card__address').innerHTML = value;
            }

            get address() {
                return this._address;
            }

            set isAdmin(value) {
                this._isAdmin = value;
                if (this.shadowRoot)
                    this.shadowRoot.querySelector('#card__admin-flag').style.display = value == true ? "block" : "none";
            }

            get isAdmin() {
                return this._isAdmin;
            }

            // Getter to let component know what attributes
            // to watch for mutation
            static get observedAttributes() {
                return ['username', 'address', 'is-admin'];
            }

            attributeChangedCallback(attr, oldVal, newVal) {
                console.log('changes happning:::')
                const attribute = attr.toLowerCase()
                console.log(newVal)
                if (attribute === 'username') {
                    this.username = newVal != '' ? newVal : "Not Provided!"
                } else if (attribute === 'address') {
                    this.address = newVal !== '' ? newVal : "Not Provided!"
                } else if (attribute === 'is-admin') {
                    this.isAdmin = newVal == 'true';
                }
            }
        }

        customElements.define('user-card', UserCard);

})();
export {userCard};
