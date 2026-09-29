<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Resend, Postmark, AWS, and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'key' => env('POSTMARK_API_KEY'),
    ],

    'resend' => [
        'key' => env('RESEND_API_KEY'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | RS PKU Muhammadiyah - External Hospital Services
    |--------------------------------------------------------------------------
    */
    'bpjs' => [
        'base_url' => env('BPJS_BASE_URL', 'https://apijkn.bpjs-kesehatan.go.id/vclaim-rest'),
        'cons_id' => env('BPJS_CONS_ID', '12345'),
        'secret_key' => env('BPJS_SECRET_KEY', 'secret987'),
        'user_key' => env('BPJS_USER_KEY', 'userkeyabc'),
        'cache_ttl' => env('BPJS_CACHE_TTL', 300), // 5 minutes cache
    ],

    'simrs' => [
        'base_url' => env('SIMRS_BASE_URL', 'http://simrs-core.local/api/v1'),
        'api_key' => env('SIMRS_API_KEY', 'pku-secret-token'),
        'timeout' => env('SIMRS_TIMEOUT', 5),
        'cache_ttl' => env('SIMRS_CACHE_TTL', 30), // 30s cache
    ],

    'satusehat' => [
        'base_url' => env('SATUSEHAT_BASE_URL', 'https://api-satusehat.kemkes.go.id/fhir-r4/v1'),
        'client_id' => env('SATUSEHAT_CLIENT_ID', ''),
        'client_secret' => env('SATUSEHAT_CLIENT_SECRET', ''),
        'org_id' => env('SATUSEHAT_ORG_ID', 'RS-PKU-GOMBONG'),
    ],

];
