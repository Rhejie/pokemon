<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PokemonAPIController extends Controller
{
    public function getPokemons() {

        $pokemons = Http::get('https://pokeapi.co/api/v2/pokemon/ditto');

        return response()->json($pokemons->json());

    }
}
