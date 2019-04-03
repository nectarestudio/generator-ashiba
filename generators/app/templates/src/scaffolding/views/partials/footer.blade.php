<footer class="main-footer">
  <div class="container">
    <div class="footer-container flex-container flex-column">
      <div class="footer-top-wrapper flex-item">
        <div class="footer-top-container flex-container flex-column items-center">
          <a class="footer-logo flex-item" href="{{ home_url('/') }}"></a>
          <span class="footer-title flex-item d-none d-md-block">{{ $footer['titulo'] }}</span>
          <span class="footer-address flex-item d-none d-md-block">{{ $footer['direccion'] }} · {{ $footer['localidad'] }} · Teléfono {{ $footer['telefono'] }} · <a href="mailto:{{ $footer['email'] }}">{{ $footer['email'] }}</a></span>
        </div>
      </div>
      <div class="footer-bottom-wrapper flex-item flex-double">
        <div class="footer-bottom-container flex-container flex-column items-center justify-end">
          <div class="footer-social-wrapper flex-item">
            <ul class="footer-social-container flex-row items-center">
              @if($redes_sociales['facebook'])
              <li class="footer-social-item flex-item">
                <a href="{{ $redes_sociales['facebook'] }}" target="_blank" class="link-wrapper">
                  <button class="button button--link button--rounder button-social">
                    <i class="button__icon icon-facebook"></i>
                  </button>
                </a>
              </li>
              @endif
              @if($redes_sociales['twitter'])
              <li class="footer-social-item flex-item">
                <a href="{{ $redes_sociales['twitter'] }}" target="_blank" class="link-wrapper">
                  <button class="button button--link button--rounder button-social">
                    <i class="button__icon icon-twitter"></i>
                  </button>
                </a>
              </li>
              @endif
              @if($redes_sociales['instagram'])
              <li class="footer-social-item flex-item">
                <a href="{{ $redes_sociales['instagram'] }}" target="_blank" class="link-wrapper">
                  <button class="button button--link button--rounder button-social">
                    <i class="button__icon icon-instagram"></i>
                  </button>
                </a>
              </li>
              @endif
              @if($redes_sociales['youtube'])
              <li class="footer-social-item flex-item">
                <a href="{{ $redes_sociales['youtube'] }}" target="_blank" class="link-wrapper">
                  <button class="button button--link button--rounder button-social">
                    <i class="button__icon icon-youtube"></i>
                  </button>
                </a>
              </li>
              @endif
            </ul>
          </div>
          <nav class="footer-menu flex-item">
            @if (has_nav_menu('footer_navigation'))
              {!! wp_nav_menu(['theme_location' => 'footer_navigation', 'menu_class' => 'nav-container flex-row flex-wrap justify-center', 'after' => '<li class="menu-item--separator">|</li>']) !!}
            @endif
          </nav>
        </div>
      </div>
    </div>
  </div>
</footer>