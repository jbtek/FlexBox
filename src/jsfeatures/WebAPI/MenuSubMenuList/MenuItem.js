const menuItem = (async () =>{
    const menuItem = await fetch('./src/jsfeatures/WebAPI/MenuSubMenuList/MenuItem.html');
    console.log('menuItem:::', menuItem);
    const templateText = await menuItem.text();
    const htmlDom = new DOMParser().parseFromString(templateText, 'text/html');
    const htmlTemplate = htmlDom.querySelector('template');
    const containerElm = htmlDom.querySelector('.container_item_list');
    const containerSubMenuElm = htmlDom.querySelector('#container_sub_menu_list')
    console.log(htmlTemplate, ':::', containerElm);
    class MenuItem extends HTMLElement{
        constructor(props) {
            super(props);
            console.log('props::', props);
            const shadowRoot = this.attachShadow({mode: "closed"});
            shadowRoot.appendChild(htmlTemplate.content.cloneNode(true));
            shadowRoot.appendChild(containerElm);
            console.log('containerElm.className::', containerElm.className);
            const itemList = containerElm.querySelectorAll('.ul-list > li');
            this.addClassInList(itemList);

        }

        addClassInList(itemList){
            for(let item of itemList){
                console.log('item:::',item)
                item.classList.add('item-list');
            }
        }

    }
    customElements.define('menu-item', MenuItem);
})();
export {menuItem}