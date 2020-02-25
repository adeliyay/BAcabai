<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SCMController extends Controller
{
    public function index()
    {
        return view('indexscm');
    }
}
