<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Note;
use App\Http\Resources\NoteResource;
use App\Http\Requests\StoreNoteRequest;

class NotesController extends Controller
{
    public function index(){
        $notes=Note::all();
        return NoteResource::collection($notes);
 
     }
     public function store (StoreNoteRequest $request){
       $note=Note::create($request->all());
       
       return new  NoteResource($note);
 
 
     }
     public function destroy(Note $note)

     {
 
         $note->delete();
   
 
     }
}
