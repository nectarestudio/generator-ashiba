{{--
  Template Name: Custom Template
--}}

@extends('layouts.app')

@section('content')
  <div class="sections-wrapper">
    @while(have_posts()) @php the_post() @endphp
      @include('partials.content-page')
    @endwhile
  </div>
@endsection
