<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use HasFactory;

    protected $fillable = ['content_id', 'category', 'description'];

    public function content()
    {
        return $this->belongsTo(Content::class);
    }
}
