{{--
  Template Name: Custom Template
--}}

@extends('layouts.app')

@section('content')
<main class="main-content">
  @while(have_posts()) @php the_post() @endphp
    @include('partials.content')
  @endwhile
</main>
@endsection