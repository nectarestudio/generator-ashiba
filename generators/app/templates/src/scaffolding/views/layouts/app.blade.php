<!doctype html>
<html {!! get_language_attributes() !!}>
  @include('partials.head')
  <body @php body_class() @endphp>
    @php do_action('get_header') @endphp
    @include('partials.header')
    <div class="content-wrapper" role="document">>
        <main class="main-content">
          @yield('content')
        </main>
        @if (App\display_sidebar())
          <aside class="sidebar">
            @include('partials.sidebar')
          </aside>
        @endif
    </div>
    @php do_action('get_footer') @endphp
    @include('partials.footer')
    @include('partials.footer-cookies')
    @php wp_footer() @endphp
  </body>
</html>
