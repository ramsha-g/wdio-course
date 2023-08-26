class NavComponent {
  get linksNavMenu() {
    return $$('#zak-primary-menu li[id*=menu]');
  }

  get firstNavMenuList() {
    return $('#zak-primary-menu li');
  }
}

export default new NavComponent();