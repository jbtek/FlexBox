const fancyLabel = (() =>{
    class FancyLabel extends HTMLElement{
        _customData = {}
        constructor(){
            super();
            this.init();
        }
        get customData(){
            return this._customData
        }
        set customData(newData){
            console.log('newData::',newData);
           this._customData = newData;
        }
        init = () =>{
            console.log('HI INIT')
            this.customData = JSON.parse(this.getAttribute('customData'));
            console.log('customData:::', typeof this.customData)
            const shadowRoot = this.attachShadow({mode:'closed'});
            const div = document.createElement('div');
            div.classList.add('container');
            // div.style.backgroundColor = '#ccccff';
            // div.style.height = 200+ 'px';
            // div.style.width = 200 + 'px';

            const label = document.createElement('slot');
            div.classList.add('slot-container')
            label.textContent = this.customData['value'];
            const style = document.createElement('style');
            style.textContent = `
            .container{
                width:200px;
                height:200px;
                background-color:#ccccff;
            }
            `
            shadowRoot.appendChild(div);
            div.appendChild(label);
            div.appendChild(style);
        }
    }
    customElements.define('fancy-label',FancyLabel);
})();
export {fancyLabel};
