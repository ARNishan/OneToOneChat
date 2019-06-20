@extends('layouts.app')

@section('content')
       {{-- :user="{{auth()->user()}}" --}}
        <Chat :user="{{auth()->user()}}"></Chat>
@endsection
