<?php

namespace App\Http\Controllers;

use App\Models\Email;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class NewsletterController extends Controller
{
    /**
     * Store a new email subscription.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|email|unique:emails,email',
            ]);

            Email::create([
                'email' => $request->email,
            ]);

            return response()->json(['success' => 'Thank you for subscribing!']);
        } catch (\Illuminate\Validation\ValidationException $e) {
            Log::error('Validation error: ' . $e->getMessage());
            return response()->json(['error' => 'Validation error. Please check your input.'], 422);
        } catch (\Exception $e) {
            Log::error('General error: ' . $e->getMessage());
            return response()->json(['error' => 'An unexpected error occurred. Please try again later.'], 500);
        }
    }

    /**
     * Retrieve all email subscriptions.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            $emails = Email::all(); // Fetch all emails
            return response()->json($emails);
        } catch (\Exception $e) {
            Log::error('Error fetching emails: ' . $e->getMessage());
            return response()->json(['error' => 'An error occurred while fetching emails.'], 500);
        }
    }
}