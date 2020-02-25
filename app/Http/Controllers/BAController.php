<?php

namespace App\Http\Controllers;

use App\BA;
use Illuminate\Http\Request;

class BAController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function index()
    {
        return view('indexba');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\BA  $bA
     * @return \Illuminate\Http\Response
     */
    public function show(BA $bA)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\BA  $bA
     * @return \Illuminate\Http\Response
     */
    public function edit(BA $bA)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\BA  $bA
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BA $bA)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\BA  $bA
     * @return \Illuminate\Http\Response
     */
    public function destroy(BA $bA)
    {
        //
    }
}
