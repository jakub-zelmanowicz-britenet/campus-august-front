const openMobileMenu = () => {
    const menu_element = document.querySelector('#dropdown_menu');
    if (menu_element) {
        menu_element.classList.remove('topbar__menu--dropdown--hidden');
    }
    throw new Error('Missing Dropdown menu');
}

const closeMobileMenu = () => {
    const menu_element = document.querySelector('#dropdown_menu');
    if (menu_element) {
        menu_element.classList.add('topbar__menu--dropdown--hidden');
    }
    throw new Error('Missing Dropdown menu');
}