<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Content;
use App\Models\Section;

class ContentController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'author' => 'required|string',
            'date' => 'required|date',
            'body' => 'required|string',
            'sections.*.category' => 'required|string',
            'sections.*.description' => 'required|string',
        ]);

        $content = Content::create($request->only('title', 'author', 'date', 'body'));
        $content->sections()->createMany($request->input('sections'));

        return response()->json(['message' => 'Content saved successfully!']);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'author' => 'required|string',
            'date' => 'required|date',
            'body' => 'required|string',
            'sections.*.category' => 'required|string',
            'sections.*.description' => 'required|string',
        ]);

        $content = Content::findOrFail($id);
        $content->update($request->only('title', 'author', 'date', 'body'));

        $content->sections()->delete();
        $content->sections()->createMany($request->input('sections'));

        return response()->json(['message' => 'Content updated successfully!']);
    }

    public function show($id)
    {
        $content = Content::with('sections')->findOrFail($id);
        return response()->json($content);
    }

    public function destroy($id)
    {
        $content = Content::findOrFail($id);
        $content->sections()->delete();
        $content->delete();

        return response()->json(['message' => 'Content deleted successfully!']);
    }
}