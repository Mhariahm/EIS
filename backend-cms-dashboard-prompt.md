# Backend CMS Dashboard Development Prompt
## Excellence International Schools - Admin Dashboard API & Server (Laravel)

Build a secure, scalable RESTful API backend for the Excellence International Schools CMS dashboard using Laravel that handles authentication, content management, file uploads, and data persistence.

---

## Project Overview

Create a robust Laravel backend API that provides secure endpoints for managing all website content. The API should handle authentication, CRUD operations for content types, file uploads, database operations, and integrate with external services.

---

## Technology Stack

**Laravel Stack:**
- **Framework**: Laravel 11.x (latest LTS)
- **Language**: PHP 8.2+
- **Database**: PostgreSQL 14+ (recommended) OR MySQL 8+
- **ORM**: Eloquent (built-in)
- **Authentication**: 
  - Laravel Sanctum (recommended for SPA)
  - Laravel Passport (alternative for OAuth2)
- **File Upload**: 
  - Laravel Storage (local or cloud)
  - Intervention Image for image processing
  - Flysystem drivers (S3, FTP, etc.)
- **Validation**: 
  - Laravel Form Requests
  - Laravel Validation rules
- **API**: 
  - Laravel API Resources (for JSON responses)
  - API Resource Collections
- **Security**:
  - Laravel built-in security features
  - CORS middleware
  - Rate limiting
  - CSRF protection (for web routes)
- **Logging**: 
  - Laravel Logging (Monolog)
  - Laravel Telescope (for debugging)
- **Testing**: 
  - PHPUnit (built-in)
  - Laravel HTTP Testing
- **Cache**: 
  - Redis (recommended)
  - File cache (fallback)

**Additional Packages:**
- `spatie/laravel-permission` - Role and permission management
- `spatie/laravel-activitylog` - Activity logging
- `spatie/laravel-query-builder` - Advanced query filtering
- `intervention/image` - Image processing
- `league/flysystem-aws-s3-v3` - AWS S3 storage
- `barryvdh/laravel-cors` - CORS handling (if needed)

---

## Project Structure

```
backend/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Api/
│   │   │   │   ├── AuthController.php
│   │   │   │   ├── ProgramController.php
│   │   │   │   ├── NewsController.php
│   │   │   │   ├── TestimonialController.php
│   │   │   │   ├── GalleryController.php
│   │   │   │   ├── ContactController.php
│   │   │   │   ├── MediaController.php
│   │   │   │   ├── SettingsController.php
│   │   │   │   └── DashboardController.php
│   │   │   └── Controller.php
│   │   ├── Requests/
│   │   │   ├── Auth/
│   │   │   │   ├── LoginRequest.php
│   │   │   │   └── RegisterRequest.php
│   │   │   ├── ProgramRequest.php
│   │   │   ├── NewsRequest.php
│   │   │   ├── TestimonialRequest.php
│   │   │   └── MediaUploadRequest.php
│   │   ├── Resources/
│   │   │   ├── ProgramResource.php
│   │   │   ├── NewsResource.php
│   │   │   ├── TestimonialResource.php
│   │   │   ├── GalleryResource.php
│   │   │   └── UserResource.php
│   │   └── Middleware/
│   │       ├── Authenticate.php
│   │       └── EnsureUserIsAdmin.php
│   ├── Models/
│   │   ├── User.php
│   │   ├── Program.php
│   │   ├── ProgramDetail.php
│   │   ├── ProgramRecognition.php
│   │   ├── NewsEvent.php
│   │   ├── Testimonial.php
│   │   ├── GalleryImage.php
│   │   ├── MediaFile.php
│   │   ├── ContactSubmission.php
│   │   ├── Setting.php
│   │   └── ActivityLog.php
│   ├── Services/
│   │   ├── AuthService.php
│   │   ├── ProgramService.php
│   │   ├── NewsService.php
│   │   ├── FileUploadService.php
│   │   └── ImageProcessingService.php
│   └── Exceptions/
│       └── Handler.php
├── config/
│   ├── auth.php
│   ├── sanctum.php
│   ├── filesystems.php
│   ├── cors.php
│   └── database.php
├── database/
│   ├── migrations/
│   │   ├── 2024_01_01_000000_create_users_table.php
│   │   ├── 2024_01_01_000001_create_programs_table.php
│   │   ├── 2024_01_01_000002_create_program_details_table.php
│   │   ├── 2024_01_01_000003_create_program_recognitions_table.php
│   │   ├── 2024_01_01_000004_create_news_events_table.php
│   │   ├── 2024_01_01_000005_create_testimonials_table.php
│   │   ├── 2024_01_01_000006_create_gallery_images_table.php
│   │   ├── 2024_01_01_000007_create_media_files_table.php
│   │   ├── 2024_01_01_000008_create_contact_submissions_table.php
│   │   ├── 2024_01_01_000009_create_settings_table.php
│   │   └── 2024_01_01_000010_create_activity_logs_table.php
│   ├── seeders/
│   │   ├── DatabaseSeeder.php
│   │   ├── UserSeeder.php
│   │   └── SettingsSeeder.php
│   └── factories/
│       ├── UserFactory.php
│       ├── ProgramFactory.php
│       └── NewsEventFactory.php
├── routes/
│   ├── api.php
│   └── web.php
├── storage/
│   ├── app/
│   │   ├── public/
│   │   │   ├── images/
│   │   │   └── documents/
│   │   └── private/
│   └── logs/
├── tests/
│   ├── Feature/
│   │   ├── AuthTest.php
│   │   ├── ProgramTest.php
│   │   └── NewsTest.php
│   └── Unit/
│       └── Services/
├── .env.example
├── .gitignore
├── composer.json
├── artisan
└── README.md
```

---

## Database Schema (Laravel Migrations)

### Users Migration
```php
Schema::create('users', function (Blueprint $table) {
    $table->uuid('id')->primary();
    $table->string('name');
    $table->string('email')->unique();
    $table->timestamp('email_verified_at')->nullable();
    $table->string('password');
    $table->enum('role', ['admin', 'editor', 'viewer'])->default('viewer');
    $table->string('avatar_url')->nullable();
    $table->timestamp('last_login')->nullable();
    $table->boolean('is_active')->default(true);
    $table->rememberToken();
    $table->timestamps();
    
    $table->index('email');
    $table->index('role');
});
```

### Programs Migration
```php
Schema::create('programs', function (Blueprint $table) {
    $table->uuid('id')->primary();
    $table->string('name')->unique(); // 'english', 'french', 'arabic'
    $table->string('slug')->unique();
    $table->string('title');
    $table->text('description')->nullable();
    $table->string('image_url')->nullable();
    $table->timestamps();
    
    $table->index('slug');
});
```

### Program Details Migration
```php
Schema::create('program_details', function (Blueprint $table) {
    $table->uuid('id')->primary();
    $table->foreignUuid('program_id')->constrained('programs')->onDelete('cascade');
    $table->enum('field_type', ['instructors', 'skills', 'experience', 'value', 'promise']);
    $table->text('content');
    $table->timestamps();
    
    $table->unique(['program_id', 'field_type']);
    $table->index('program_id');
});
```

### Program Recognitions Migration
```php
Schema::create('program_recognitions', function (Blueprint $table) {
    $table->uuid('id')->primary();
    $table->foreignUuid('program_id')->constrained('programs')->onDelete('cascade');
    $table->string('recognition_text');
    $table->integer('display_order')->default(0);
    $table->timestamps();
    
    $table->index('program_id');
});
```

### Program Media Migration
```php
Schema::create('program_media', function (Blueprint $table) {
    $table->uuid('id')->primary();
    $table->foreignUuid('program_id')->constrained('programs')->onDelete('cascade');
    $table->foreignUuid('media_file_id')->constrained('media_files')->onDelete('cascade');
    $table->enum('media_type', ['certificate', 'gallery']);
    $table->integer('display_order')->default(0);
    $table->timestamps();
    
    $table->index('program_id');
});
```

### News & Events Migration
```php
Schema::create('news_events', function (Blueprint $table) {
    $table->uuid('id')->primary();
    $table->string('title');
    $table->string('slug')->unique();
    $table->date('date');
    $table->string('category'); // 'open-house', 'fundraiser', 'announcement', 'video'
    $table->string('featured_image_url')->nullable();
    $table->text('excerpt')->nullable();
    $table->text('content');
    $table->enum('badge_type', ['featured', 'event', 'news', 'video'])->default('news');
    $table->string('youtube_url')->nullable();
    $table->boolean('published')->default(false);
    $table->integer('display_order')->default(0);
    $table->timestamp('scheduled_publish_at')->nullable();
    $table->foreignUuid('created_by')->nullable()->constrained('users')->nullOnDelete();
    $table->timestamps();
    
    $table->index('date');
    $table->index('published');
    $table->index('category');
    $table->index('slug');
});
```

### Testimonials Migration
```php
Schema::create('testimonials', function (Blueprint $table) {
    $table->uuid('id')->primary();
    $table->text('quote');
    $table->string('author_name');
    $table->string('author_role')->nullable();
    $table->string('author_image_url')->nullable();
    $table->boolean('featured')->default(false);
    $table->integer('display_order')->default(0);
    $table->boolean('published')->default(true);
    $table->timestamps();
    
    $table->index('featured');
    $table->index('published');
});
```

### Gallery Images Migration
```php
Schema::create('gallery_images', function (Blueprint $table) {
    $table->uuid('id')->primary();
    $table->foreignUuid('media_file_id')->constrained('media_files')->onDelete('cascade');
    $table->string('alt_text')->nullable();
    $table->text('caption')->nullable();
    $table->string('category')->nullable();
    $table->json('tags')->nullable(); // Array of tags
    $table->boolean('featured')->default(false);
    $table->integer('display_order')->default(0);
    $table->timestamps();
    
    $table->index('category');
    $table->index('featured');
});
```

### Media Files Migration
```php
Schema::create('media_files', function (Blueprint $table) {
    $table->uuid('id')->primary();
    $table->string('filename');
    $table->string('original_filename');
    $table->string('file_path');
    $table->string('file_url');
    $table->enum('file_type', ['image', 'document', 'video']);
    $table->string('mime_type');
    $table->unsignedBigInteger('file_size'); // in bytes
    $table->integer('width')->nullable(); // for images
    $table->integer('height')->nullable(); // for images
    $table->string('alt_text')->nullable();
    $table->text('caption')->nullable();
    $table->foreignUuid('uploaded_by')->nullable()->constrained('users')->nullOnDelete();
    $table->timestamps();
    
    $table->index('file_type');
    $table->index('uploaded_by');
});
```

### Contact Submissions Migration
```php
Schema::create('contact_submissions', function (Blueprint $table) {
    $table->uuid('id')->primary();
    $table->string('name');
    $table->string('email');
    $table->string('phone')->nullable();
    $table->enum('category', ['parent', 'student', 'partner', 'other'])->nullable();
    $table->string('subject')->nullable();
    $table->text('message');
    $table->enum('communication_method', ['whatsapp', 'email']);
    $table->boolean('read')->default(false);
    $table->timestamps();
    
    $table->index('read');
    $table->index('created_at');
});
```

### Settings Migration
```php
Schema::create('settings', function (Blueprint $table) {
    $table->uuid('id')->primary();
    $table->string('setting_key')->unique();
    $table->text('setting_value')->nullable();
    $table->enum('value_type', ['string', 'number', 'boolean', 'json']);
    $table->text('description')->nullable();
    $table->foreignUuid('updated_by')->nullable()->constrained('users')->nullOnDelete();
    $table->timestamps();
    
    $table->index('setting_key');
});
```

### Activity Logs Migration
```php
Schema::create('activity_logs', function (Blueprint $table) {
    $table->uuid('id')->primary();
    $table->foreignUuid('user_id')->nullable()->constrained('users')->nullOnDelete();
    $table->enum('action', ['create', 'update', 'delete']);
    $table->string('model'); // 'program', 'news', 'testimonial', etc.
    $table->uuid('record_id');
    $table->json('changes')->nullable(); // Store before/after changes
    $table->string('ip_address', 45)->nullable();
    $table->text('user_agent')->nullable();
    $table->timestamps();
    
    $table->index('user_id');
    $table->index('model');
    $table->index('created_at');
});
```

---

## API Endpoints

### Authentication Endpoints

#### POST `/api/auth/login`
**Request Body:**
```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "token": "1|random_token_string",
    "user": {
      "id": "uuid",
      "name": "Admin User",
      "email": "admin@example.com",
      "role": "admin"
    }
  }
}
```

**Laravel Implementation:**
```php
// app/Http/Controllers/Api/AuthController.php
public function login(LoginRequest $request)
{
    if (!Auth::attempt($request->validated())) {
        return response()->json([
            'success' => false,
            'error' => 'Invalid credentials'
        ], 401);
    }

    $user = Auth::user();
    $token = $user->createToken('auth-token')->plainTextToken;

    return response()->json([
        'success' => true,
        'data' => [
            'token' => $token,
            'user' => new UserResource($user)
        ]
    ]);
}
```

#### POST `/api/auth/logout`
**Headers:** `Authorization: Bearer {token}`

**Response (200):**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

#### POST `/api/auth/refresh`
**Headers:** `Authorization: Bearer {token}`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "token": "new_token"
  }
}
```

---

### Programs Endpoints

#### GET `/api/programs`
**Query Parameters:**
- `page` (optional): Page number
- `per_page` (optional): Items per page (default: 15)
- `search` (optional): Search term

**Response (200):**
```json
{
  "success": true,
  "data": {
    "data": [
      {
        "id": "uuid",
        "name": "english",
        "slug": "english-excellence",
        "title": "English Excellence",
        "description": "Master the global language...",
        "image_url": "https://...",
        "created_at": "2024-01-01T00:00:00.000000Z",
        "updated_at": "2024-01-01T00:00:00.000000Z"
      }
    ],
    "current_page": 1,
    "per_page": 15,
    "total": 3,
    "last_page": 1
  }
}
```

**Laravel Implementation:**
```php
// app/Http/Controllers/Api/ProgramController.php
public function index(Request $request)
{
    $query = Program::query();
    
    if ($request->has('search')) {
        $query->where('title', 'like', '%' . $request->search . '%')
              ->orWhere('description', 'like', '%' . $request->search . '%');
    }
    
    $programs = $query->paginate($request->get('per_page', 15));
    
    return ProgramResource::collection($programs);
}
```

#### GET `/api/programs/{id}`
**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "english",
    "title": "English Excellence",
    "description": "...",
    "image_url": "...",
    "details": [
      {
        "field_type": "instructors",
        "content": "..."
      }
    ],
    "recognitions": [
      "Common Entrance (CE)",
      "Junior WAEC"
    ],
    "media": [
      {
        "id": "uuid",
        "type": "certificate",
        "url": "..."
      }
    ]
  }
}
```

#### POST `/api/programs`
**Headers:** `Authorization: Bearer {token}`

**Request Body:**
```json
{
  "name": "english",
  "title": "English Excellence",
  "description": "Program description",
  "image_url": "https://...",
  "details": {
    "instructors": "...",
    "skills": "...",
    "experience": "...",
    "value": "...",
    "promise": "..."
  },
  "recognitions": ["CE", "WAEC"],
  "media": [
    {
      "media_file_id": "uuid",
      "type": "certificate"
    }
  ]
}
```

**Laravel Form Request:**
```php
// app/Http/Requests/ProgramRequest.php
class ProgramRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required', 'in:english,french,arabic'],
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'image_url' => ['nullable', 'url'],
            'details.instructors' => ['required', 'string'],
            'details.skills' => ['required', 'string'],
            'details.experience' => ['required', 'string'],
            'details.value' => ['required', 'string'],
            'details.promise' => ['required', 'string'],
            'recognitions' => ['array'],
            'recognitions.*' => ['string', 'max:255'],
            'media' => ['array'],
            'media.*.media_file_id' => ['required', 'uuid', 'exists:media_files,id'],
            'media.*.type' => ['required', 'in:certificate,gallery'],
        ];
    }
}
```

#### PUT `/api/programs/{id}`
**Headers:** `Authorization: Bearer {token}`

#### DELETE `/api/programs/{id}`
**Headers:** `Authorization: Bearer {token}`

---

### News & Events Endpoints

#### GET `/api/news`
**Query Parameters:**
- `page`, `per_page`, `search`
- `category` (optional): Filter by category
- `published` (optional): Filter by published status
- `sort_by` (optional): 'date', 'title', 'created_at'
- `order` (optional): 'asc', 'desc'

**Response (200):**
```json
{
  "success": true,
  "data": {
    "data": [ ... ],
    "current_page": 1,
    "per_page": 15,
    "total": 20,
    "last_page": 2
  }
}
```

#### GET `/api/news/{id}`
#### POST `/api/news`
**Headers:** `Authorization: Bearer {token}`

**Request Body:**
```json
{
  "title": "Event Title",
  "date": "2024-10-02",
  "category": "open-house",
  "featured_image_url": "https://...",
  "excerpt": "Short description",
  "content": "Full content...",
  "badge_type": "featured",
  "youtube_url": "https://youtube.com/...",
  "published": true,
  "display_order": 0,
  "scheduled_publish_at": "2024-10-02 10:00:00"
}
```

#### PUT `/api/news/{id}`
#### DELETE `/api/news/{id}`

---

### Testimonials Endpoints

#### GET `/api/testimonials`
**Query Parameters:**
- `featured` (optional): Filter featured testimonials
- `published` (optional): Filter published

#### POST `/api/testimonials`
**Headers:** `Authorization: Bearer {token}`

**Request Body:**
```json
{
  "quote": "Testimonial text...",
  "author_name": "John Doe",
  "author_role": "Parent",
  "author_image_url": "https://...",
  "featured": true,
  "display_order": 0,
  "published": true
}
```

#### PUT `/api/testimonials/{id}`
#### DELETE `/api/testimonials/{id}`

---

### Gallery Endpoints

#### GET `/api/gallery`
**Query Parameters:**
- `category` (optional): Filter by category
- `featured` (optional): Filter featured images
- `search` (optional): Search by alt text or caption

#### POST `/api/gallery`
**Headers:** `Authorization: Bearer {token}`

**Request Body:**
```json
{
  "media_file_id": "uuid",
  "alt_text": "Image description",
  "caption": "Caption text",
  "category": "events",
  "tags": ["event", "school"],
  "featured": false,
  "display_order": 0
}
```

---

### Media Upload Endpoints

#### POST `/api/media/upload`
**Headers:** 
- `Authorization: Bearer {token}`
- `Content-Type: multipart/form-data`

**Request Body (Form Data):**
- `file`: File object
- `alt_text` (optional): Alt text
- `caption` (optional): Caption

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "filename": "image.jpg",
    "original_filename": "original.jpg",
    "url": "https://...",
    "file_type": "image",
    "mime_type": "image/jpeg",
    "file_size": 1024000,
    "width": 1920,
    "height": 1080,
    "alt_text": "...",
    "caption": "..."
  }
}
```

**Laravel Implementation:**
```php
// app/Http/Controllers/Api/MediaController.php
public function upload(MediaUploadRequest $request, FileUploadService $uploadService)
{
    $file = $request->file('file');
    
    // Process and store file
    $mediaFile = $uploadService->storeFile($file, [
        'alt_text' => $request->input('alt_text'),
        'caption' => $request->input('caption'),
        'uploaded_by' => auth()->id()
    ]);
    
    return new MediaFileResource($mediaFile);
}
```

**File Upload Service:**
```php
// app/Services/FileUploadService.php
class FileUploadService
{
    public function storeFile($file, array $options = [])
    {
        // Generate unique filename
        $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
        $path = $file->storeAs('uploads/images', $filename, 'public');
        
        // Process image if it's an image
        if (str_starts_with($file->getMimeType(), 'image/')) {
            $this->processImage($file, $path);
        }
        
        // Create media file record
        return MediaFile::create([
            'filename' => $filename,
            'original_filename' => $file->getClientOriginalName(),
            'file_path' => $path,
            'file_url' => Storage::url($path),
            'file_type' => $this->getFileType($file->getMimeType()),
            'mime_type' => $file->getMimeType(),
            'file_size' => $file->getSize(),
            'width' => $options['width'] ?? null,
            'height' => $options['height'] ?? null,
            'alt_text' => $options['alt_text'] ?? null,
            'caption' => $options['caption'] ?? null,
            'uploaded_by' => $options['uploaded_by'] ?? null,
        ]);
    }
    
    private function processImage($file, $path)
    {
        $image = Image::make($file);
        
        // Resize if too large
        if ($image->width() > 1920) {
            $image->resize(1920, null, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
        }
        
        // Save optimized version
        Storage::disk('public')->put($path, $image->encode('jpg', 85));
    }
}
```

#### GET `/api/media`
**Query Parameters:**
- `page`, `per_page`
- `file_type` (optional): 'image', 'document', 'video'
- `search` (optional): Search by filename

#### DELETE `/api/media/{id}`

---

### Contact Endpoints

#### GET `/api/contact/submissions`
**Headers:** `Authorization: Bearer {token}`

**Query Parameters:**
- `page`, `per_page`
- `read` (optional): Filter by read status
- `category` (optional): Filter by category
- `search` (optional): Search by name or email

#### GET `/api/contact/submissions/{id}`
#### PUT `/api/contact/submissions/{id}/read`
**Request Body:**
```json
{
  "read": true
}
```

#### GET `/api/contact/settings`
#### PUT `/api/contact/settings`

---

### Settings Endpoints

#### GET `/api/settings`
**Response (200):**
```json
{
  "success": true,
  "data": {
    "school_name": "Excellence International Schools",
    "school_motto": "Good Readers are Leaders",
    "logo_url": "https://...",
    "favicon_url": "https://...",
    "site_url": "https://excellenceinternational.edu",
    "primary_color": "#2d5a27",
    "secondary_color": "#f4a261",
    "accent_color": "#e76f51"
  }
}
```

#### GET `/api/settings/{key}`
#### PUT `/api/settings/{key}`

---

### Dashboard Statistics Endpoint

#### GET `/api/dashboard/stats`
**Headers:** `Authorization: Bearer {token}`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "total_programs": 3,
    "active_news": 15,
    "testimonials": 8,
    "media_files": 120,
    "unread_submissions": 5,
    "recent_updates": 12
  }
}
```

---

## Authentication & Authorization

### Laravel Sanctum Setup

**Installation:**
```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

**Configuration (config/sanctum.php):**
```php
'guard' => ['web'],
'middleware' => [
    'verify_csrf_token' => App\Http\Middleware\VerifyCsrfToken::class,
    'encrypt_cookies' => App\Http\Middleware\EncryptCookies::class,
],
```

**API Routes (routes/api.php):**
```php
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    
    // Protected routes
    Route::apiResource('programs', ProgramController::class);
    Route::apiResource('news', NewsController::class);
    // ... other routes
});
```

### Password Hashing
- Laravel uses bcrypt by default (configurable in config/hashing.php)
- Password requirements should be enforced in Form Requests
- Minimum 8 characters recommended

### Role-Based Access Control

**Using Spatie Laravel Permission:**
```bash
composer require spatie/laravel-permission
php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
php artisan migrate
```

**Middleware:**
```php
// app/Http/Middleware/EnsureUserIsAdmin.php
public function handle(Request $request, Closure $next)
{
    if (!auth()->user()->hasRole('admin')) {
        return response()->json([
            'success' => false,
            'error' => 'Insufficient permissions'
        ], 403);
    }
    
    return $next($request);
}
```

**Routes with Role Protection:**
```php
Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::delete('/programs/{id}', [ProgramController::class, 'destroy']);
    Route::put('/settings/{key}', [SettingsController::class, 'update']);
});
```

---

## File Upload & Storage

### Storage Configuration

**config/filesystems.php:**
```php
'disks' => [
    'public' => [
        'driver' => 'local',
        'root' => storage_path('app/public'),
        'url' => env('APP_URL').'/storage',
        'visibility' => 'public',
    ],
    
    's3' => [
        'driver' => 's3',
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION'),
        'bucket' => env('AWS_BUCKET'),
    ],
],
```

### Image Processing

**Using Intervention Image:**
```bash
composer require intervention/image
```

**Image Processing Service:**
```php
// app/Services/ImageProcessingService.php
use Intervention\Image\Facades\Image;

class ImageProcessingService
{
    public function processImage($file, $path)
    {
        $image = Image::make($file);
        
        // Resize if too large
        if ($image->width() > 1920) {
            $image->resize(1920, null, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
        }
        
        // Generate thumbnail
        $thumbnail = clone $image;
        $thumbnail->resize(300, 300, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });
        
        // Save images
        $image->save(storage_path('app/public/' . $path));
        $thumbnail->save(storage_path('app/public/' . $path . '_thumb.jpg'));
        
        return [
            'width' => $image->width(),
            'height' => $image->height(),
        ];
    }
}
```

---

## Validation & Error Handling

### Form Requests

**Example:**
```php
// app/Http/Requests/NewsRequest.php
class NewsRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'date' => ['required', 'date'],
            'category' => ['required', 'in:open-house,fundraiser,announcement,video'],
            'featured_image_url' => ['nullable', 'url'],
            'excerpt' => ['nullable', 'string', 'max:500'],
            'content' => ['required', 'string'],
            'badge_type' => ['required', 'in:featured,event,news,video'],
            'youtube_url' => ['nullable', 'url'],
            'published' => ['boolean'],
            'display_order' => ['integer', 'min:0'],
            'scheduled_publish_at' => ['nullable', 'date', 'after:now'],
        ];
    }
    
    public function messages(): array
    {
        return [
            'title.required' => 'The title field is required.',
            'date.required' => 'The date field is required.',
            'category.in' => 'The selected category is invalid.',
        ];
    }
}
```

### Error Response Format

**Laravel automatically returns validation errors:**
```json
{
  "message": "The given data was invalid.",
  "errors": {
    "email": [
      "The email field is required."
    ],
    "password": [
      "The password must be at least 8 characters."
    ]
  }
}
```

**Custom Error Handler:**
```php
// app/Exceptions/Handler.php
public function render($request, Throwable $exception)
{
    if ($request->expectsJson()) {
        return $this->handleApiException($request, $exception);
    }
    
    return parent::render($request, $exception);
}

private function handleApiException($request, Throwable $exception)
{
    if ($exception instanceof ValidationException) {
        return response()->json([
            'success' => false,
            'error' => 'Validation failed',
            'errors' => $exception->errors()
        ], 422);
    }
    
    if ($exception instanceof ModelNotFoundException) {
        return response()->json([
            'success' => false,
            'error' => 'Resource not found'
        ], 404);
    }
    
    return response()->json([
        'success' => false,
        'error' => 'Internal server error'
    ], 500);
}
```

---

## Security Best Practices

### 1. Environment Variables
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://api.excellenceinternational.edu

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=eis_cms
DB_USERNAME=your_username
DB_PASSWORD=your_password

SANCTUM_STATEFUL_DOMAINS=admin.excellenceinternational.edu
SESSION_DOMAIN=.excellenceinternational.edu

AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=your-bucket-name
```

### 2. CORS Configuration

**config/cors.php:**
```php
return [
    'paths' => ['api/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => [env('FRONTEND_URL', 'http://localhost:3000')],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];
```

### 3. Rate Limiting

**routes/api.php:**
```php
Route::middleware(['throttle:60,1'])->group(function () {
    Route::post('/auth/login', [AuthController::class, 'login']);
});

Route::middleware(['auth:sanctum', 'throttle:120,1'])->group(function () {
    // Protected routes
});
```

### 4. SQL Injection Prevention
- Laravel Eloquent uses parameterized queries by default
- Never use raw queries with user input
- Always use query builder or Eloquent

### 5. XSS Prevention
- Laravel automatically escapes output in Blade templates
- For API responses, ensure frontend handles escaping
- Sanitize user inputs in Form Requests

---

## Activity Logging

### Using Spatie Activity Log

**Installation:**
```bash
composer require spatie/laravel-activitylog
php artisan vendor:publish --provider="Spatie\Activitylog\ActivitylogServiceProvider"
php artisan migrate
```

**Usage in Models:**
```php
// app/Models/Program.php
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class Program extends Model
{
    use LogsActivity;
    
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnly(['title', 'description', 'image_url'])
            ->logOnlyDirty()
            ->dontSubmitEmptyLogs();
    }
}
```

**Manual Logging:**
```php
activity()
    ->causedBy(auth()->user())
    ->withProperties(['before' => $old, 'after' => $new])
    ->log('updated program');
```

---

## API Resources

### Program Resource

```php
// app/Http/Resources/ProgramResource.php
class ProgramResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'title' => $this->title,
            'description' => $this->description,
            'image_url' => $this->image_url,
            'details' => ProgramDetailResource::collection($this->details),
            'recognitions' => $this->recognitions->pluck('recognition_text'),
            'media' => ProgramMediaResource::collection($this->media),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
```

---

## Testing

### Feature Tests

```php
// tests/Feature/ProgramTest.php
class ProgramTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_admin_can_create_program(): void
    {
        $user = User::factory()->create(['role' => 'admin']);
        
        $response = $this->actingAs($user, 'sanctum')
            ->postJson('/api/programs', [
                'name' => 'english',
                'title' => 'English Excellence',
                'description' => 'Test description',
            ]);
        
        $response->assertStatus(201)
            ->assertJsonStructure([
                'success',
                'data' => [
                    'id',
                    'name',
                    'title',
                ]
            ]);
        
        $this->assertDatabaseHas('programs', [
            'name' => 'english',
            'title' => 'English Excellence',
        ]);
    }
    
    public function test_editor_cannot_delete_program(): void
    {
        $user = User::factory()->create(['role' => 'editor']);
        $program = Program::factory()->create();
        
        $response = $this->actingAs($user, 'sanctum')
            ->deleteJson("/api/programs/{$program->id}");
        
        $response->assertStatus(403);
    }
}
```

---

## Deployment

### Environment Setup
```env
APP_NAME="EIS CMS API"
APP_ENV=production
APP_KEY=base64:your-generated-key
APP_DEBUG=false
APP_URL=https://api.excellenceinternational.edu

DB_CONNECTION=pgsql
DB_HOST=your-db-host
DB_PORT=5432
DB_DATABASE=eis_cms
DB_USERNAME=your_username
DB_PASSWORD=your_password

CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379
```

### Production Checklist
- [ ] Run `php artisan config:cache`
- [ ] Run `php artisan route:cache`
- [ ] Run `php artisan view:cache`
- [ ] Run `php artisan optimize`
- [ ] Set up queue workers
- [ ] Configure supervisor for queue workers
- [ ] Set up scheduled tasks (cron)
- [ ] Configure SSL certificate
- [ ] Set up database backups
- [ ] Configure log rotation
- [ ] Set up monitoring (Laravel Telescope in production mode)

### Deployment Commands
```bash
# Install dependencies
composer install --no-dev --optimize-autoloader

# Run migrations
php artisan migrate --force

# Cache configuration
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Create storage link
php artisan storage:link

# Clear cache
php artisan cache:clear
php artisan config:clear
```

---

## Performance Optimization

### Database Optimization
- Use eager loading to avoid N+1 queries
- Add database indexes
- Use database query caching
- Optimize slow queries

**Example:**
```php
// Bad (N+1 problem)
$programs = Program::all();
foreach ($programs as $program) {
    echo $program->details->count(); // Query for each program
}

// Good (Eager loading)
$programs = Program::with('details')->get();
foreach ($programs as $program) {
    echo $program->details->count(); // No additional queries
}
```

### Caching
```php
// Cache frequently accessed data
Cache::remember('programs.all', 3600, function () {
    return Program::with('details', 'recognitions')->get();
});
```

### API Response Optimization
- Use pagination for large datasets
- Use API Resources to control response structure
- Compress responses (gzip)
- Use HTTP/2

---

## Deliverables Checklist

- [ ] Laravel 11.x installation and configuration
- [ ] Database migrations for all tables
- [ ] Eloquent models with relationships
- [ ] Laravel Sanctum authentication setup
- [ ] API routes configuration
- [ ] Controllers for all endpoints
- [ ] Form Requests for validation
- [ ] API Resources for JSON responses
- [ ] File upload service with image processing
- [ ] Role-based access control (Spatie Permission)
- [ ] Activity logging (Spatie Activity Log)
- [ ] Error handling middleware
- [ ] CORS configuration
- [ ] Rate limiting
- [ ] Unit tests
- [ ] Feature tests
- [ ] API documentation
- [ ] Environment configuration
- [ ] Deployment configuration
- [ ] Performance optimization

---

## Success Criteria

✅ Secure authentication using Laravel Sanctum
✅ All CRUD endpoints functional
✅ File upload and processing working
✅ Input validation using Form Requests
✅ Activity logging implemented
✅ Database optimized with proper indexes and relationships
✅ API documentation complete
✅ Tests passing with good coverage
✅ Production-ready deployment
✅ Performance optimized with caching and eager loading

---

This Laravel backend API provides a solid foundation for the CMS dashboard, leveraging Laravel's built-in features and ecosystem packages for security, scalability, and maintainability.
