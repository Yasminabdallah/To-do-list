<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Note;

class NoteCreateTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $stock = new Note;
        $stock->title='First task ';
        $stock->description='it was good to manage your task in application ';
        $this->assertEquals('First task ', $stock->title);
    }
}
