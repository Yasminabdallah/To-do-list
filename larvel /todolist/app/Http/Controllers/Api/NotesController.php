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
       

     $note = Note::create([
        'title'        => $request->title,
        'description' => $request->description,
        'startdate' =>$request->startdate,
        'enddate' =>$request->enddate,
    ]);
       
       return response()->json(['response' => 'success','req'=>$request]);
 
 
     }

     public function show($id){
        $note=Note::find($id);
        return new NoteResource($note); 
        
     }
     public function destroy( $id)

     {
         $note=Note::find($id)->delete();
         
         
         return response()->json(['response' => 'success']);
 
     }
}
