# Frontend CMS Dashboard Development Prompt
## Excellence International Schools - Admin Dashboard UI/UX

Build the complete frontend interface for a Content Management System dashboard that allows administrators to manage the Excellence International Schools website content.

---

## Project Overview

Create a modern, responsive, and intuitive React.js or Vue.js frontend application for the EIS CMS dashboard. The application should provide a beautiful, user-friendly interface for managing all website content including programs, news, testimonials, gallery, contact information, and more.

---

## Technology Stack

**Recommended Stack:**
- **Framework**: React.js 18+ with TypeScript OR Vue.js 3+ with TypeScript
- **State Management**: Redux Toolkit or Zustand (React) / Pinia (Vue)
- **UI Component Library**: 
  - Material-UI (MUI) v5+
  - Ant Design
  - Or custom components with Tailwind CSS
- **Routing**: React Router v6+ (React) / Vue Router 4+ (Vue)
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form + Zod (React) / VeeValidate (Vue)
- **Rich Text Editor**: TinyMCE, Quill, or React Draft WYSIWYG
- **Date Picker**: React DatePicker or Vue DatePicker
- **Image Upload**: React Dropzone or Vue Dropzone
- **Icons**: Font Awesome 6.4+ or Material Icons
- **Charts/Visualizations**: Recharts or Chart.js
- **Notifications**: React Toastify or Vue Toastification

**Build Tools:**
- **Bundler**: Vite (recommended) or Create React App / Vue CLI
- **Styling**: Tailwind CSS or CSS Modules
- **TypeScript**: Strict mode enabled

---

## Design System & Branding

### Color Palette
- **Primary Color**: `#2d5a27` (Forest Green) - Main brand color
- **Secondary Color**: `#f4a261` (Warm Orange) - Accents and highlights
- **Accent Color**: `#e76f51` (Coral Red) - Important actions and alerts
- **Background Colors**:
  - Light: `#f8f9fa`
  - White: `#ffffff`
  - Dark overlay: `rgba(0, 0, 0, 0.7)`
- **Text Colors**:
  - Primary: `#212529`
  - Secondary: `#6c757d`
  - Muted: `#adb5bd`
- **Status Colors**:
  - Success: `#28a745`
  - Warning: `#ffc107`
  - Error: `#dc3545`
  - Info: `#17a2b8`

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Font Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- **Headings**:
  - H1: 32px, Bold
  - H2: 28px, Semi-Bold
  - H3: 24px, Semi-Bold
  - H4: 20px, Medium
  - H5: 18px, Medium
  - H6: 16px, Medium
- **Body Text**: 16px, Regular
- **Small Text**: 14px, Regular

### Spacing & Layout
- **Container Max Width**: 1400px
- **Grid System**: 12-column grid with 24px gutters
- **Border Radius**: 
  - Small: 4px
  - Medium: 8px
  - Large: 12px
- **Shadows**:
  - Small: `0 2px 4px rgba(0,0,0,0.1)`
  - Medium: `0 4px 6px rgba(0,0,0,0.1)`
  - Large: `0 10px 20px rgba(0,0,0,0.15)`

### Component Specifications
- **Button Heights**: 40px (small), 48px (medium), 56px (large)
- **Input Heights**: 40px (standard), 48px (large)
- **Card Padding**: 24px
- **Section Spacing**: 32px vertical spacing

---

## Application Structure

### Folder Structure
```
src/
├── components/
│   ├── common/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Table.tsx
│   │   ├── Badge.tsx
│   │   ├── Loading.tsx
│   │   └── Toast.tsx
│   ├── layout/           # Layout components
│   │   ├── DashboardLayout.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── forms/            # Form components
│   │   ├── ProgramForm.tsx
│   │   ├── NewsForm.tsx
│   │   ├── TestimonialForm.tsx
│   │   └── ContactSettingsForm.tsx
│   └── sections/         # Feature-specific components
│       ├── programs/
│       ├── news/
│       ├── gallery/
│       └── settings/
├── pages/
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   ├── Programs/
│   │   ├── ProgramsList.tsx
│   │   └── ProgramEdit.tsx
│   ├── News/
│   │   ├── NewsList.tsx
│   │   └── NewsEdit.tsx
│   ├── Testimonials/
│   ├── Gallery/
│   ├── Contact/
│   ├── Settings/
│   └── Media/
├── hooks/                # Custom React hooks
│   ├── useAuth.ts
│   ├── useApi.ts
│   └── useMediaUpload.ts
├── services/             # API services
│   ├── api.ts
│   ├── auth.ts
│   ├── programs.ts
│   └── media.ts
├── store/                # State management
│   ├── slices/
│   │   ├── authSlice.ts
│   │   ├── programsSlice.ts
│   │   └── uiSlice.ts
│   └── store.ts
├── utils/                # Utility functions
│   ├── formatters.ts
│   ├── validators.ts
│   └── constants.ts
├── types/                # TypeScript types
│   ├── api.ts
│   ├── models.ts
│   └── index.ts
├── styles/               # Global styles
│   ├── globals.css
│   └── tailwind.config.js
└── App.tsx
```

---

## Core Pages & Components

### 1. Authentication Pages

#### Login Page (`/login`)
**Design Requirements:**
- Centered card layout on a gradient or branded background
- School logo at the top
- Email and password input fields
- "Remember me" checkbox
- "Forgot password?" link
- Submit button with loading state
- Error message display
- Responsive design (mobile-friendly)

**Features:**
- Form validation (email format, password requirements)
- Auto-focus on email input
- Enter key submits form
- Loading spinner during authentication
- Redirect to dashboard on success
- Show error toast on failure

**Component Structure:**
```tsx
<LoginPage>
  <LoginCard>
    <Logo />
    <LoginForm>
      <EmailInput />
      <PasswordInput />
      <RememberMeCheckbox />
      <ForgotPasswordLink />
      <SubmitButton />
      <ErrorMessage />
    </LoginForm>
  </LoginCard>
</LoginPage>
```

#### Forgot Password Page (`/forgot-password`)
- Email input field
- Submit button
- Success message after submission
- Back to login link

---

### 2. Dashboard Layout

#### Main Layout Component
**Structure:**
- **Sidebar** (left, collapsible)
- **Header** (top, fixed)
- **Main Content Area** (scrollable)
- **Footer** (optional, bottom)

#### Sidebar Navigation
**Design:**
- Fixed left sidebar (250px width when expanded, 80px when collapsed)
- School logo at top
- Navigation menu items with icons
- Active state highlighting
- Collapse/expand toggle button
- User profile section at bottom
- Smooth animations on collapse/expand

**Menu Items:**
1. Dashboard (Home icon)
2. Programs (Graduation cap icon)
3. News & Events (Newspaper icon)
4. Testimonials (Quote icon)
5. Gallery (Images icon)
6. Contact & Location (Envelope icon)
7. Media Library (Folder icon)
8. Settings (Gear icon)
9. Logout (Sign out icon)

**Responsive Behavior:**
- On mobile: Hamburger menu, slide-out drawer
- On tablet: Collapsible sidebar
- On desktop: Full sidebar

#### Header Component
**Elements:**
- Page title/breadcrumb
- Search bar (optional, for global search)
- Notifications bell icon with badge
- User profile dropdown menu
- Language switcher (if multilingual)
- Help/Support button

**User Dropdown Menu:**
- User name and email
- Profile link
- Settings link
- Logout button

---

### 3. Dashboard Home Page (`/dashboard`)

**Layout:**
- Welcome section with greeting
- Statistics cards (grid layout)
- Quick actions section
- Recent activity feed
- Quick links

**Statistics Cards:**
1. **Total Programs** - Number with icon
2. **Active News/Events** - Count with trending icon
3. **Testimonials** - Count with star icon
4. **Media Files** - Total with storage size
5. **Contact Submissions** - Unread count with badge
6. **Recent Updates** - Last 7 days count

**Quick Actions:**
- "Add New Program" button
- "Create News Event" button
- "Add Testimonial" button
- "Upload Images" button
- "View Website" link (opens in new tab)

**Recent Activity Feed:**
- List of recent content changes
- User who made changes
- Timestamp
- Action type (Created, Updated, Deleted)
- Link to view/edit item

**Design:**
- Use cards for statistics
- Icon-based quick actions
- Timeline-style activity feed
- Responsive grid layout

---

### 4. Programs Management

#### Programs List Page (`/programs`)
**Features:**
- Table/list view of all programs
- Search bar to filter programs
- Sort by: Name, Last Updated, Status
- Filter by: Program type (English, French, Arabic)
- "Add New Program" button
- Edit/Delete actions for each program
- Preview button
- Bulk actions (delete multiple)

**Table Columns:**
- Thumbnail image
- Program Name
- Type (Badge)
- Last Updated
- Status (Published/Draft)
- Actions (Edit, Delete, Preview)

**Design:**
- Responsive table with horizontal scroll on mobile
- Hover effects on rows
- Empty state with "Add Program" CTA
- Loading skeleton while fetching data

#### Program Edit/Create Page (`/programs/new` or `/programs/:id/edit`)
**Layout:**
- Tabbed interface for organizing content
- Save/Publish buttons (fixed at top or bottom)
- Preview pane (optional, split view)
- Cancel button with confirmation

**Tabs:**
1. **Basic Info**
   - Program type selector (English/French/Arabic)
   - Title input
   - Short description textarea
   - Feature tags (add/remove tags input)
   - Main program image upload with preview

2. **Detailed Content**
   - Instructors description (rich text editor)
   - Skills description (rich text editor)
   - Learning experience (rich text editor)
   - Value & opportunities (rich text editor)
   - Promise statement (rich text editor)

3. **Recognitions**
   - List of official recognitions
   - Add/remove recognition items
   - Reorder functionality (drag and drop)

4. **Media**
   - Certificate image upload
   - Additional images gallery
   - Image upload with drag-and-drop
   - Image preview grid
   - Delete/reorder images

5. **SEO Settings**
   - Meta description
   - Meta keywords
   - Alt text for images
   - Preview of how it appears in search

**Form Features:**
- Auto-save draft (optional)
- Form validation with error messages
- Image upload with progress indicator
- Image preview before upload
- Rich text editor with formatting toolbar
- Character counters for meta fields
- Save button with loading state

---

### 5. News & Events Management

#### News List Page (`/news`)
**Features:**
- Grid or list view toggle
- Search functionality
- Filter by: Category, Date, Status
- Sort by: Date, Title, Popularity
- "Add New News" button
- Bulk actions

**Grid View:**
- Card layout with featured image
- Title, date, category badge
- Excerpt text
- Published status indicator
- Quick actions (Edit, Delete, Preview)

**List View:**
- Table with columns: Image, Title, Date, Category, Status, Actions

#### News Edit/Create Page (`/news/new` or `/news/:id/edit`)
**Form Fields:**
- Title input
- Date picker
- Category dropdown (Open House, Fundraiser, Announcement, Video, etc.)
- Featured image upload with preview
- Excerpt textarea (character limit: 200)
- Full content rich text editor
- Badge type selector (Featured, Event, News, Video)
- YouTube embed URL (optional, shows embed preview)
- Published status toggle
- Display order number input
- Scheduled publish date (optional)

**Features:**
- Live preview of news card
- Image optimization warning if file too large
- YouTube video embed preview
- Auto-generate excerpt from content
- SEO fields (meta description, keywords)
- Save as draft functionality

---

### 6. Testimonials Management

#### Testimonials List Page (`/testimonials`)
**Layout:**
- Grid of testimonial cards
- Each card shows: Quote preview, Author name, Featured status
- Add/Edit/Delete actions
- Reorder functionality (drag and drop)

#### Testimonial Edit/Create Page (`/testimonials/new` or `/testimonials/:id/edit`)
**Form Fields:**
- Quote text (large textarea)
- Author name input
- Author role/affiliation input
- Author image upload (optional, with preview)
- Featured toggle (checkbox)
- Display order input
- Published status toggle

**Features:**
- Character counter for quote
- Image upload with crop tool (optional)
- Live preview of testimonial card

---

### 7. Gallery Management

#### Gallery Page (`/gallery`)
**Layout:**
- Grid view of all images
- Thumbnail previews
- Filter by category
- Search by name/alt text
- Bulk upload button
- Bulk selection with actions

**Features:**
- Image upload with drag-and-drop zone
- Upload progress indicator
- Image categories/tags
- Image details modal on click
- Quick edit (alt text, caption, category)
- Delete with confirmation
- Reorder images (drag and drop)

**Image Card:**
- Thumbnail
- Filename
- Category badge
- Alt text indicator (if missing)
- Quick actions overlay on hover

#### Image Details Modal
**Content:**
- Large image preview
- Edit form:
  - Alt text input
  - Caption textarea
  - Category selector
  - Tags input
  - Featured toggle
- Usage information (where image is used)
- Delete button
- Download original button

---

### 8. Contact & Location Management

#### Contact Settings Page (`/contact`)
**Sections:**

**1. Contact Information**
- School address (textarea)
- Phone numbers (add/remove multiple)
- Email addresses (add/remove multiple)
- Office hours (time pickers)
- WhatsApp number input

**2. Contact Form Settings**
- Form field configuration (checkboxes to enable/disable fields)
- Required fields selection
- Submission method selector (WhatsApp/Email)
- Email template editor
- WhatsApp message template editor

**3. Map Configuration**
- Google Maps embed URL input
- Latitude/Longitude inputs
- Map preview (iframe)
- Zoom level slider

**4. Form Submissions**
- Table of all submissions
- Filter by: Date, Read/Unread, Category
- Search functionality
- View submission details in modal
- Mark as read/unread
- Export to CSV button
- Reply functionality (opens email client)

**Submission Details Modal:**
- All form data displayed
- Submission date/time
- Communication method used
- Reply button
- Mark as read button
- Delete button

---

### 9. Media Library

#### Media Library Page (`/media`)
**Features:**
- Grid view of all media files
- Filter by: Type (Image, Document, Video), Date, Category
- Search by filename
- Upload area (drag-and-drop)
- Bulk operations
- Folder/category organization

**File Card:**
- Thumbnail/preview
- Filename
- File size
- Upload date
- File type badge
- Usage indicator (shows where used)
- Quick actions menu

**Upload Zone:**
- Drag-and-drop area
- Click to browse files
- Multiple file selection
- Upload progress bar
- File type validation
- File size warnings

---

### 10. Settings Page

#### Settings Page (`/settings`)
**Tabbed Interface:**

**1. General Settings**
- School name input
- School motto input
- School logo upload
- Favicon upload
- Site URL input

**2. Appearance**
- Primary color picker
- Secondary color picker
- Accent color picker
- Color preview
- Reset to defaults button

**3. SEO Settings**
- Default meta title
- Default meta description
- Default meta keywords
- Open Graph default image
- Twitter Card settings
- Canonical URL pattern

**4. Backup & Restore**
- Backup history list
- Create backup button
- Restore from backup (file upload)
- Export content button
- Automatic backup schedule

**5. Users & Permissions**
- User list table
- Add user button
- Edit user permissions
- Delete user (with confirmation)
- Role management

---

### 11. Common Components

#### Button Component
**Variants:**
- Primary (green background)
- Secondary (orange background)
- Outline (border only)
- Danger (red, for delete actions)
- Ghost (minimal styling)

**Sizes:**
- Small (40px height)
- Medium (48px height)
- Large (56px height)

**States:**
- Default
- Hover
- Active
- Disabled
- Loading (with spinner)

#### Input Component
**Types:**
- Text
- Email
- Password
- Number
- Textarea
- Select/Dropdown
- Date picker
- File upload

**Features:**
- Label
- Placeholder
- Helper text
- Error message
- Icon (prefix/suffix)
- Validation states

#### Modal Component
**Features:**
- Backdrop overlay
- Centered content
- Close button (X)
- Close on backdrop click
- Close on Escape key
- Smooth animations
- Scrollable content

#### Table Component
**Features:**
- Sortable columns
- Filterable rows
- Pagination
- Row selection (checkbox)
- Responsive design
- Empty state
- Loading state

#### Rich Text Editor
**Toolbar:**
- Bold, Italic, Underline
- Heading styles
- Bullet/numbered lists
- Link insertion
- Image insertion
- Text alignment
- Undo/Redo
- Code view

#### Image Upload Component
**Features:**
- Drag-and-drop zone
- Click to browse
- Multiple file selection
- Image preview
- Progress indicator
- File type validation
- File size validation
- Image cropping tool (optional)
- Remove image button

---

## State Management

### Authentication State
```typescript
{
  user: {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'editor' | 'viewer';
  } | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
```

### Programs State
```typescript
{
  programs: Program[];
  currentProgram: Program | null;
  isLoading: boolean;
  error: string | null;
}
```

### UI State
```typescript
{
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  notifications: Notification[];
  loading: boolean;
}
```

---

## API Integration

### API Service Setup
```typescript
// Base API configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized - redirect to login
    }
    return Promise.reject(error);
  }
);
```

### API Endpoints to Integrate
- `GET /api/programs` - List programs
- `GET /api/programs/:id` - Get program
- `POST /api/programs` - Create program
- `PUT /api/programs/:id` - Update program
- `DELETE /api/programs/:id` - Delete program
- `GET /api/news` - List news
- `POST /api/news` - Create news
- `PUT /api/news/:id` - Update news
- `DELETE /api/news/:id` - Delete news
- `GET /api/testimonials` - List testimonials
- `POST /api/testimonials` - Create testimonial
- `PUT /api/testimonials/:id` - Update testimonial
- `DELETE /api/testimonials/:id` - Delete testimonial
- `GET /api/gallery` - List gallery images
- `POST /api/media/upload` - Upload file
- `GET /api/contact/submissions` - List submissions
- `GET /api/settings` - Get settings
- `PUT /api/settings/:key` - Update setting

---

## Form Validation

### Validation Rules
- **Required Fields**: Show error if empty
- **Email Format**: Validate email pattern
- **URL Format**: Validate URL pattern
- **File Size**: Maximum 5MB for images
- **File Type**: Only allow image formats (jpg, png, webp, gif)
- **Character Limits**: Show counter for limited fields
- **Date Validation**: Ensure dates are not in past (for events)

### Error Display
- Inline error messages below fields
- Red border on invalid fields
- Error summary at top of form (optional)
- Disable submit button if form invalid

---

## Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Considerations
- Collapsible sidebar (hamburger menu)
- Stacked form fields
- Full-width buttons
- Touch-friendly tap targets (min 44px)
- Swipe gestures for navigation
- Bottom navigation bar (optional)

### Tablet Considerations
- Collapsible sidebar
- Two-column forms where appropriate
- Grid layouts adapt to 2 columns

---

## Performance Optimizations

### Code Splitting
- Lazy load routes
- Dynamic imports for heavy components
- Split vendor bundles

### Image Optimization
- Lazy load images
- Use WebP format with fallbacks
- Responsive images (srcset)
- Image compression before upload

### State Management
- Memoize expensive computations
- Use React.memo for components
- Debounce search inputs
- Throttle scroll events

### Caching
- Cache API responses
- Use React Query or SWR for data fetching
- Cache user preferences
- Cache form drafts

---

## Accessibility (a11y)

### Requirements
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **ARIA Labels**: Proper ARIA attributes for screen readers
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliance (4.5:1 ratio)
- **Alt Text**: All images have descriptive alt text
- **Form Labels**: All form fields have associated labels
- **Error Messages**: Descriptive error messages
- **Skip Links**: Skip to main content link

---

## Testing Requirements

### Component Testing
- Unit tests for utility functions
- Component rendering tests
- User interaction tests

### Integration Testing
- Form submission flows
- API integration
- Authentication flows

### E2E Testing (Optional)
- Critical user journeys
- Login flow
- Content creation flow

---

## Deployment

### Build Configuration
- Environment variables for API URL
- Production build optimization
- Asset optimization
- Source maps (optional for production)

### Hosting
- Static site hosting (Netlify, Vercel, AWS S3)
- CDN for assets
- Environment-specific configurations

---

## Deliverables Checklist

- [ ] Login page with authentication
- [ ] Dashboard layout with sidebar and header
- [ ] Dashboard home page with statistics
- [ ] Programs list and edit pages
- [ ] News & Events list and edit pages
- [ ] Testimonials management
- [ ] Gallery management
- [ ] Contact settings and submissions
- [ ] Media library
- [ ] Settings page
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Form validation
- [ ] Error handling
- [ ] Loading states
- [ ] Toast notifications
- [ ] Image upload functionality
- [ ] Rich text editor integration
- [ ] API integration
- [ ] State management
- [ ] Accessibility features
- [ ] TypeScript types

---

## Success Criteria

✅ Intuitive UI requiring minimal training
✅ Fully responsive on all devices
✅ Fast page loads (< 2 seconds)
✅ Smooth animations and transitions
✅ Accessible to users with disabilities
✅ Comprehensive error handling
✅ Professional design matching school branding
✅ All features functional and tested

---

This frontend application should provide a seamless, professional experience for content managers to update the Excellence International Schools website efficiently and effectively.

