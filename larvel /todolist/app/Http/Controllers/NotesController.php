<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Note;

class NotesController extends Controller
{
    public function index(){
        $notes=Note::all();
        return view('index',compact('notes'));
 
     }
}
