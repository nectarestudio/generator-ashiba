<!doctype html>
<html {!! get_language_attributes() !!}>
  @include('partials.head')
  <body @php body_class() @endphp>
    @php do_action('get_header') @endphp
    @include('partials.header')
    <div class="content-wrapper" role="document">
        @yield('content')
      @include('partials.footer')
    </div>
    @include('partials.debug')
    @php do_action('get_footer') @endphp
    @php wp_footer() @endphp
  </body>
</html>