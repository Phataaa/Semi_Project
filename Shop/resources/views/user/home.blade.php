@extends('user.layout');
@section('content')
<div class="slideshow-container">
    <div class="slide">
      <img src="phat.jpg" alt="Slide 1">
    </div>
    <div class="slide">
      <img src="slide2.jpg" alt="Slide 2">
    </div>
    <div class="slide">
      <img src="slide3.jpg" alt="Slide 3">
    </div>
   
  </div>
  <button id="prevBtn"><i class="fa-solid fa-angle-left"></i></button>
  <button id="nextBtn"><i class="fa-solid fa-angle-right"></i></button>
  <script src="slide.js"></script>
@endsection