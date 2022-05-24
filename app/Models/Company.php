<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Company extends Model
{
    use HasFactory;

    public function users(): HasMany
    {
        return $this->hasMany(User::class, 'company_id');
    }

    public function teams(): HasMany
    {
        return $this->hasMany(Teams::class, 'company_id');
    }

    public function locations(): HasMany
    {
        return $this->hasMany(Location::class, 'company_id');
    }
}
