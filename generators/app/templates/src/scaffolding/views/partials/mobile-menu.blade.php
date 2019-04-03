<nav class="main-menu flex-item flex-double">
  <div class="mobile-menu-container flex-container flex-column">
    <div class="mobile-menu-header flex-item">
      <div class="flex-container flex-row justify-between items-center">
        <a class="menu-logo for-mobile flex-item" href="{{ home_url('/') }}"></a>
        <button class="button-close button button--clear click--trigger" data-action="closeMobileMenu">
          <div class="button__icon icon-close"></div>
        </button>
      </div>
    </div>
    <div class="mobile-menu-content flex-item flex-double">
      <div class="mobile-menu-container flex-container flex-column justify-start">
        <div class="main-nav flex-item">
          @if (has_nav_menu('primary_navigation'))
            {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav nav-container flex-container flex-row--toggle justify-center items-center']) !!}
          @endif
        </div>

        <div class="mobile-menu-social-wrapper flex-item">
          <ul class="mobile-menu-social-container flex-row items-center">
            @if($redes_sociales['facebook'])
            <li class="mobile-menu-social-item flex-item">
              <a href="{{ $redes_sociales['facebook'] }}" target="_blank" class="link-wrapper">
                <button class="button button--link button--rounder button--border-thin button-social">
                  <i class="button__icon icon-facebook"></i>
                </button>
              </a>
            </li>
            @endif
            @if($redes_sociales['twitter'])
            <li class="mobile-menu-social-item flex-item">
              <a href="{{ $redes_sociales['twitter'] }}" target="_blank" class="link-wrapper">
                <button class="button button--link button--rounder button--border-thin button-social">
                  <i class="button__icon icon-twitter"></i>
                </button>
              </a>
            </li>
            @endif
            @if($redes_sociales['instagram'])
            <li class="mobile-menu-social-item flex-item">
              <a href="{{ $redes_sociales['instagram'] }}" target="_blank" class="link-wrapper">
                <button class="button button--link button--rounder button--border-thin button-social">
                  <i class="button__icon icon-instagram"></i>
                </button>
              </a>
            </li>
            @endif
            @if($redes_sociales['youtube'])
            <li class="mobile-menu-social-item flex-item">
              <a href="{{ $redes_sociales['youtube'] }}" target="_blank" class="link-wrapper">
                <button class="button button--link button--rounder button--border-thin button-social">
                  <i class="button__icon icon-youtube"></i>
                </button>
              </a>
            </li>
            @endif
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>