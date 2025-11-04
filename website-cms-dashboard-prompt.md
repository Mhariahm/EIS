# Website Content Management Dashboard Prompt
## Excellence International Schools (EIS) - CMS Development

Build a comprehensive Content Management System (CMS) dashboard that allows administrators to manage all content on the Excellence International Schools website without touching code.

---

## Project Overview

Create a secure, user-friendly admin dashboard that enables non-technical staff to update, manage, and publish content on the EIS website. The dashboard should provide full CRUD (Create, Read, Update, Delete) operations for all website sections while maintaining the site's design integrity and SEO optimization.

---

## Current Website Structure Analysis

### Website Sections Requiring Management:

1. **Hero/H home Section**
   - Main headline text
   - Subtitle/tagline
   - Call-to-action buttons (text and links)
   - Background slider images (4 images)
   - Language indicators (English, French, Arabic)
   - Campus location links (Côte d'Ivoire, Nigeria)

2. **Programs Section**
   - Three programs: English Excellence, French Excellence, Arabic Windows
   - For each program:
     - Title
     - Description
     - Feature tags
     - Program image
     - Certificate/achievement images
     - Detailed content (instructors, skills, experience, value, promise)
     - Official recognitions list
     - Additional images gallery

3. **About Section**
   - Main heading ("Who We Are")
   - Lead paragraph
   - Description paragraphs (3-4 paragraphs)
   - About image
   - Statistics (Students, Teachers, Years)
   - Mission highlights
   - CTA button text and link

4. **Testimonials Section**
   - Testimonial quote text
   - Author name
   - Author role/affiliation
   - Author image (optional)
   - Display order/priority

5. **News & Events Section**
   - News/Event cards:
     - Title
     - Date
     - Category (Open House, Fundraiser, Announcement, etc.)
     - Featured image
     - Excerpt/description
     - Full content
     - Badge type (Featured, Event, News)
     - YouTube video embeds (optional)
     - Display order
     - Published status

6. **Gallery Section**
   - Image upload and management
   - Image organization by categories
   - Image alt text for SEO
   - Image captions
   - Display order

7. **Contact & Location Section**
   - Contact form fields configuration
   - School address
   - Phone numbers (multiple)
   - Email addresses
   - Office hours
   - Google Maps embed URL
   - WhatsApp number configuration
   - Contact form submission handling (WhatsApp/Email)

8. **Footer Section**
   - School description
   - Address information
   - Contact details
   - Quick links configuration
   - Social media links (Facebook, Twitter, Instagram, LinkedIn)
   - Newsletter subscription handling
   - Copyright text
   - Developer credit

9. **SEO & Meta Content**
   - Page title
   - Meta descriptions
   - Meta keywords
   - Open Graph tags (title, description, image)
   - Twitter Card tags
   - Canonical URLs
   - Structured data (JSON-LD) for:
     - Educational Organization schema
     - Local Business schema
   - Geo-location data

10. **Multilingual Content**
    - Translation management for:
      - Navigation items
      - Hero section
      - Programs
      - About section
      - Contact form
      - Footer content
    - Language switching controls
    - Default language setting

11. **Media Library**
    - Image upload and management
    - Image optimization
    - Image categories/tags
    - File size limits
    - Supported formats (JPG, PNG, WebP, AVIF)
    - Image cropping/resizing tools

---

## Required Dashboard Features

### 1. Authentication & Security
- **Secure Login System**
  - Email/password authentication
  - Password strength requirements
  - Password reset functionality
  - Two-factor authentication (optional but recommended)
  - Session management
  - Logout functionality

- **User Roles & Permissions**
  - Super Admin (full access)
  - Content Editor (can edit content, cannot change settings)
  - Media Manager (can only manage images/media)
  - Viewer (read-only access)

- **Activity Logging**
  - Track all content changes
  - User activity history
  - Change timestamps
  - Rollback capability

### 2. Dashboard Home/Overview
- **At-a-Glance Statistics**
  - Total content items (programs, news, testimonials)
  - Recent changes/updates
  - Pending reviews
  - Media library size
  - Last backup date

- **Quick Actions**
  - Create new news/event
  - Add new testimonial
  - Upload images
  - View website preview
  - Check SEO status

- **Recent Activity Feed**
  - Latest content updates
  - User actions
  - System notifications

### 3. Content Management Modules

#### A. Hero Section Manager
- **Text Editor**
  - Main headline (WYSIWYG or plain text)
  - Subtitle/tagline
  - CTA button texts and links
  - Language-specific content

- **Image Manager**
  - Upload/replace background slider images (4 images)
  - Image preview
  - Image order/sequence
  - Image optimization settings

- **Configuration**
  - Slider transition speed
  - Auto-play settings
  - Campus location links

#### B. Programs Manager
- **Program CRUD Interface**
  - Create/Edit/Delete programs
  - Program selection (English, French, Arabic)
  
- **For Each Program:**
  - **Basic Info Tab:**
    - Program title
    - Short description
    - Feature tags (add/remove)
    - Main program image upload
  
  - **Details Tab:**
    - Instructors description (rich text editor)
    - Skills description
    - Learning experience description
    - Value & future opportunities
    - Promise statement
    - Official recognitions (list manager with add/remove)
  
  - **Media Tab:**
    - Certificate image upload
    - Additional images gallery (multiple upload)
    - Image order management
  
  - **SEO Tab:**
    - Meta description
    - Meta keywords
    - Alt text for images

#### C. About Section Manager
- **Content Editor**
  - Rich text editor for paragraphs
  - Text formatting options
  - Link insertion
  - Highlight text feature

- **Image Management**
  - About section image upload
  - Image replacement
  - Image optimization

- **Statistics Manager**
  - Student count
  - Teacher count
  - Years of operation
  - Add/remove statistics

- **Mission Highlights**
  - Bullet point manager
  - Add/edit/remove highlights
  - Reorder functionality

#### D. Testimonials Manager
- **Testimonial CRUD**
  - Create new testimonial
  - Edit existing
  - Delete testimonial
  - Display order/priority

- **Testimonial Fields:**
  - Quote text (text area)
  - Author name
  - Author role/affiliation
  - Author image upload (optional)
  - Published status
  - Featured/priority toggle

- **Preview**
  - Live preview of testimonial card

#### E. News & Events Manager
- **News/Event CRUD**
  - Create new news item
  - Edit existing
  - Delete news item
  - Duplicate/clone feature

- **News/Event Fields:**
  - Title
  - Date picker
  - Category dropdown (Open House, Fundraiser, Announcement, Video, etc.)
  - Featured image upload
  - Excerpt/description (short text)
  - Full content (rich text editor)
  - Badge type (Featured, Event, News, Video)
  - YouTube embed URL (optional)
  - Published status toggle
  - Display order

- **Advanced Features:**
  - Scheduled publishing (future date)
  - Archive/Unarchive
  - Featured news toggle
  - SEO fields (meta description, keywords)

- **Preview**
  - Card preview
  - Modal preview
  - Full article preview

#### F. Gallery Manager
- **Image Management**
  - Bulk upload
  - Single upload
  - Image organization by categories
  - Image tags/labels

- **Image Properties:**
  - Alt text (required for SEO)
  - Caption
  - Category/tag assignment
  - Display order
  - Featured image toggle

- **Image Tools:**
  - Crop/resize
  - Image optimization
  - Replace image
  - Delete image

- **Gallery Display Settings:**
  - Grid layout options
  - Images per row
  - Lightbox settings

#### G. Contact & Location Manager
- **Contact Information**
  - School address (editable)
  - Phone numbers (add/remove multiple)
  - Email addresses (add/remove multiple)
  - Office hours
  - WhatsApp number configuration

- **Contact Form Settings**
  - Form field configuration
  - Required fields selection
  - Form submission method (WhatsApp/Email)
  - Email template customization
  - WhatsApp message template

- **Map Configuration**
  - Google Maps embed URL
  - Map coordinates (latitude/longitude)
  - Map zoom level

- **Contact Form Submissions**
  - View all submissions
  - Filter/search submissions
  - Export submissions (CSV)
  - Mark as read/unread
  - Reply functionality

#### H. Footer Manager
- **Footer Content**
  - School description
  - Address information
  - Contact details
  - Copyright text
  - Developer credit

- **Quick Links Configuration**
  - Add/remove/edit footer links
  - Link order management
  - External/internal link handling

- **Social Media Links**
  - Facebook URL
  - Twitter URL
  - Instagram URL
  - LinkedIn URL
  - Add/remove social platforms

- **Newsletter Settings**
  - Newsletter form configuration
  - Email collection settings
  - Subscriber management
  - Export subscribers

#### I. SEO & Meta Manager
- **Page Meta Tags**
  - Page title
  - Meta description
  - Meta keywords
  - Canonical URL

- **Social Media Tags**
  - Open Graph title
  - Open Graph description
  - Open Graph image upload
  - Twitter Card configuration

- **Structured Data Management**
  - Educational Organization schema editor
  - Local Business schema editor
  - JSON-LD validation
  - Schema preview

- **SEO Analysis**
  - Content score
  - Keyword density
  - Meta tag completeness
  - Image alt text coverage

#### J. Multilingual Content Manager
- **Language Management**
  - Add/remove languages
  - Set default language
  - Language switching controls

- **Translation Interface**
  - Side-by-side translation editor
  - Translation keys management
  - Missing translations indicator
  - Translation status tracking

- **Content Areas for Translation:**
  - Navigation items
  - Hero section
  - Programs (all fields)
  - About section
  - Contact form labels
  - Footer content
  - Buttons and CTAs

#### K. Media Library
- **File Management**
  - Upload files (images, documents)
  - File browser with thumbnails
  - Search functionality
  - Filter by type, date, category

- **File Properties:**
  - File name
  - File size
  - Upload date
  - Alt text
  - Caption
  - Category/tags
  - Usage tracking (where file is used)

- **Bulk Operations:**
  - Bulk delete
  - Bulk tag assignment
  - Bulk category assignment

- **Image Optimization:**
  - Automatic compression
  - Format conversion (WebP, AVIF)
  - Responsive image generation
  - Lazy loading configuration

### 4. Settings & Configuration

#### A. General Settings
- **Site Information**
  - School name
  - School motto
  - School logo upload
  - Favicon upload
  - Site URL

#### B. Appearance Settings
- **Theme Colors**
  - Primary color picker
  - Secondary color picker
  - Accent color picker
  - Preview of color changes

#### C. Backup & Restore
- **Backup Management**
  - Manual backup creation
  - Automatic backup schedule
  - Backup history
  - Restore from backup
  - Export content (JSON/CSV)

#### D. Security Settings
- **Access Control**
  - User management
  - Role permissions configuration
  - IP whitelist (optional)
  - Session timeout settings

---

## Technical Requirements

### Technology Stack Recommendations

**Option 1: Modern JavaScript Stack**
- **Frontend**: React.js or Vue.js with TypeScript
- **Backend**: Node.js with Express.js or Next.js (full-stack)
- **Database**: PostgreSQL or MongoDB
- **File Storage**: Cloud storage (AWS S3, Cloudinary) or local storage
- **Authentication**: JWT tokens with refresh mechanism
- **Rich Text Editor**: TinyMCE, Quill, or Draft.js
- **UI Framework**: Material-UI, Ant Design, or Tailwind CSS

**Option 2: PHP-Based Stack**
- **Framework**: Laravel or Symfony
- **Frontend**: Blade templates with Vue.js/React components
- **Database**: MySQL or PostgreSQL
- **File Storage**: Local storage or cloud storage
- **Authentication**: Laravel Sanctum or Passport

**Option 3: Python-Based Stack**
- **Framework**: Django or Flask
- **Frontend**: Django templates with React/Vue or pure Django
- **Database**: PostgreSQL
- **File Storage**: Django file handling or cloud storage
- **Authentication**: Django authentication system

### Database Schema Requirements

**Core Tables:**
- `users` (id, name, email, password, role, created_at, updated_at)
- `programs` (id, name, slug, title, description, image, created_at, updated_at)
- `program_details` (id, program_id, field_type, content, created_at, updated_at)
- `program_media` (id, program_id, image_url, type, order, created_at)
- `testimonials` (id, quote, author_name, author_role, author_image, order, published, created_at)
- `news_events` (id, title, date, category, image, excerpt, content, badge_type, published, order, created_at)
- `gallery_images` (id, image_url, alt_text, caption, category, order, featured, created_at)
- `contact_submissions` (id, name, email, phone, category, subject, message, method, created_at, read)
- `translations` (id, key, language, value, created_at, updated_at)
- `settings` (id, key, value, type, created_at, updated_at)
- `media_files` (id, filename, path, size, type, alt_text, caption, created_at)
- `activity_logs` (id, user_id, action, model, record_id, changes, created_at)

### API Endpoints Required

**Authentication:**
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/auth/refresh`
- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password`

**Content Management:**
- `GET /api/programs` - List all programs
- `GET /api/programs/:id` - Get program details
- `POST /api/programs` - Create program
- `PUT /api/programs/:id` - Update program
- `DELETE /api/programs/:id` - Delete program

- `GET /api/testimonials` - List testimonials
- `POST /api/testimonials` - Create testimonial
- `PUT /api/testimonials/:id` - Update testimonial
- `DELETE /api/testimonials/:id` - Delete testimonial

- `GET /api/news` - List news/events
- `POST /api/news` - Create news item
- `PUT /api/news/:id` - Update news item
- `DELETE /api/news/:id` - Delete news item

- `GET /api/gallery` - List gallery images
- `POST /api/gallery` - Upload image
- `PUT /api/gallery/:id` - Update image
- `DELETE /api/gallery/:id` - Delete image

**Media:**
- `POST /api/media/upload` - Upload file
- `GET /api/media` - List all media
- `DELETE /api/media/:id` - Delete file

**Settings:**
- `GET /api/settings` - Get all settings
- `PUT /api/settings/:key` - Update setting

**Contact:**
- `GET /api/contact/submissions` - List submissions
- `GET /api/contact/submissions/:id` - Get submission
- `PUT /api/contact/submissions/:id/read` - Mark as read

### Design Requirements

**UI/UX Guidelines:**
- **Modern & Clean Interface**: Clean, professional design matching school's branding
- **Responsive Design**: Fully functional on desktop, tablet, and mobile
- **Intuitive Navigation**: Easy-to-use sidebar navigation
- **Color Scheme**: 
  - Primary: #2d5a27 (Forest Green) - matches school branding
  - Secondary: #f4a261 (Warm Orange)
  - Accent: #e76f51 (Coral Red)
  - Background: Light grays and whites
- **Typography**: Poppins font family (matching website)
- **Icons**: Font Awesome or Material Icons
- **Loading States**: Skeleton loaders or spinners
- **Error Handling**: Clear error messages and validation feedback
- **Success Notifications**: Toast notifications for actions

**Key Pages/Layouts:**
1. **Login Page**: Simple, secure login form
2. **Dashboard Home**: Overview with statistics and quick actions
3. **Content Management Pages**: 
   - List view with search/filter
   - Detail/edit view with form
   - Preview pane
4. **Media Library**: Grid view with thumbnails
5. **Settings Page**: Tabbed interface for different settings

### Security Requirements

- **Input Validation**: All user inputs validated and sanitized
- **XSS Protection**: Content sanitization before display
- **CSRF Protection**: Token-based protection for forms
- **SQL Injection Prevention**: Parameterized queries
- **File Upload Security**: 
  - File type validation
  - File size limits
  - Virus scanning (optional)
  - Secure file storage
- **Password Security**: 
  - Minimum 8 characters
  - Complexity requirements
  - Hashing (bcrypt/argon2)
- **Session Security**: 
  - Secure session cookies
  - Session timeout
  - IP validation (optional)

### Performance Requirements

- **Page Load Time**: Dashboard pages should load within 2 seconds
- **Image Optimization**: Automatic compression and format conversion
- **Lazy Loading**: Images and content loaded on demand
- **Caching**: 
  - API response caching
  - Static asset caching
  - Database query optimization
- **Pagination**: Large lists paginated (20-50 items per page)

### Deployment Requirements

- **Hosting**: Cloud hosting (AWS, DigitalOcean, Heroku) or VPS
- **SSL Certificate**: HTTPS required
- **Domain**: `admin.excellenceinternational.edu` or subdomain
- **Backup**: Automated daily backups
- **Monitoring**: Error tracking and performance monitoring
- **Environment Variables**: Secure configuration management

---

## User Workflow Examples

### Example 1: Adding a New News Event
1. Admin logs into dashboard
2. Navigates to "News & Events" section
3. Clicks "Add New" button
4. Fills in form:
   - Title: "Annual Science Fair 2024"
   - Date: Selects date from date picker
   - Category: Selects "Event"
   - Uploads featured image
   - Writes excerpt
   - Writes full content in rich text editor
   - Sets badge type to "Featured"
   - Sets published status to "Published"
5. Clicks "Preview" to see how it looks
6. Clicks "Save" button
7. News item appears on website immediately

### Example 2: Updating Program Information
1. Admin navigates to "Programs" section
2. Selects "English Excellence" program
3. Clicks "Edit" button
4. Updates content in various tabs:
   - Updates description in "Basic Info" tab
   - Updates instructor description in "Details" tab
   - Uploads new certificate image in "Media" tab
5. Clicks "Save Changes"
6. Changes are reflected on website

### Example 3: Managing Gallery Images
1. Admin navigates to "Gallery" section
2. Clicks "Upload Images" button
3. Selects multiple images (bulk upload)
4. Images appear in media library
5. Admin adds alt text, captions, and categories
6. Drags images to reorder
7. Sets featured images
8. Images appear on website gallery section

---

## Deliverables

### Phase 1: Core System (4-6 weeks)
1. Authentication system
2. Dashboard home page
3. Basic content management (Programs, About, Testimonials)
4. Media library (basic upload)
5. Settings page (basic)

### Phase 2: Advanced Features (3-4 weeks)
1. News & Events manager
2. Gallery manager with advanced features
3. Contact form submissions manager
4. SEO & Meta manager
5. Multilingual content manager

### Phase 3: Polish & Optimization (2-3 weeks)
1. Performance optimization
2. Security hardening
3. User training materials
4. Documentation
5. Testing and bug fixes

### Documentation Requirements
1. **Admin User Guide**: Step-by-step guide for content managers
2. **Technical Documentation**: API docs, database schema, deployment guide
3. **Video Tutorials**: Screen recordings of common tasks
4. **FAQ**: Common questions and answers

---

## Success Criteria

- ✅ All website content editable through dashboard
- ✅ No coding required for content updates
- ✅ Intuitive interface requiring minimal training
- ✅ Secure authentication and authorization
- ✅ Image optimization and media management
- ✅ SEO-friendly content management
- ✅ Multilingual content support
- ✅ Mobile-responsive dashboard
- ✅ Fast performance (<2s page loads)
- ✅ Comprehensive activity logging
- ✅ Backup and restore functionality

---

## Additional Features (Optional but Recommended)

1. **Content Versioning**: Save previous versions of content, ability to revert
2. **Content Scheduling**: Schedule content to publish at future dates
3. **Analytics Integration**: Track content performance
4. **A/B Testing**: Test different content variations
5. **Content Approval Workflow**: Multi-step approval process
6. **Email Notifications**: Notify admins of submissions, changes
7. **Search Functionality**: Search across all content
8. **Bulk Operations**: Bulk edit, delete, publish
9. **Export/Import**: Export content to JSON/CSV, import from files
10. **API Access**: RESTful API for programmatic content management

---

## Budget & Timeline Considerations

**Estimated Development Time**: 10-12 weeks
**Team Size**: 2-3 developers (1 full-stack, 1 frontend, 1 backend/optional)
**Cost Factors**:
- Development time
- Hosting infrastructure
- Third-party services (cloud storage, email services)
- SSL certificates
- Domain/subdomain
- Maintenance and updates

---

This CMS dashboard will empower the EIS team to manage their website content efficiently, keeping the site up-to-date with fresh content, events, and information without requiring technical expertise.

