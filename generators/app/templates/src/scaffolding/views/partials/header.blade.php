<header class="main-header">
  <div class="container">
    <div class="menu-container flex-container flex-row">
      <div class="menu-left-wrapper flex-item flex-double">
        <div class="menu-left-container flex-container flex-row items-center">
          <a class="menu-logo flex-item" href="{{ home_url('/') }}"></a>
          @include('partials.mobile-menu')
        </div>
      </div>
      <div class="menu-right-wrapper flex-item">
        <div class="menu-right-container flex-container flex-row justify-end items-center">
          <div class="hamburguer-wrapper flex-item">
            <div class="hamburguer-container">
              <button class="hamburguer button button--clear click--trigger" data-action="openMobileMenu">
                <span class="hamburguer-line flex-item"></span>
                <span class="hamburguer-line flex-item"></span>
                <span class="hamburguer-line flex-item"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
<div class="main-header-spacer"></div>
