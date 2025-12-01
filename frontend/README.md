# Frontend Structure - VideoAI Project

## Overview
The frontend has been organized into a modular structure with clear separation of concerns. All components are now organized in the `src/frontend` directory.

## Folder Structure

```
src/frontend/
├── pages/              # Page-level components
│   ├── LandingPage.js         # Landing page with hero and features
│   ├── AuthPage.js            # Sign in/Sign up page
│   ├── Dashboard.js           # Video management dashboard
│   ├── UploadPage.js          # Video upload page with drag-drop
│   └── VideoViewPage.js       # Video player and analytics view
│
├── components/         # Reusable components
│   ├── Navigation.js          # Top navigation bar
│   ├── FeatureCard.js         # Feature card component
│   └── QuizComponent.js       # Quiz interface component
│
├── context/            # React Context for state management
│   └── AuthContext.js         # Authentication context and hooks
│
├── styles/             # Styling
│   └── styles.js              # All inline styles object
│
└── utils/              # Utility functions (ready for expansion)
```

## Component Details

### Pages

#### LandingPage.js
- Hero section with title and call-to-action
- Features grid showcasing app capabilities
- Call-to-action section with gradient background
- Uses FeatureCard component for feature display

#### AuthPage.js
- Tab-based interface for Sign In/Sign Up
- Form validation
- Uses AuthContext for user authentication
- Error handling

#### Dashboard.js
- Video gallery grid
- Empty state when no videos
- Video card display with status
- Navigation to upload and video view pages

#### UploadPage.js
- Drag-and-drop file upload area
- File preview with details
- Progress bar for upload simulation
- Title input field

#### VideoViewPage.js
- Video player placeholder
- Tabbed interface for:
  - Summary
  - Highlights
  - Chapters
  - Subtitles
  - Quiz
- Integrates QuizComponent for quiz tab

### Components

#### Navigation.js
- Logo and branding
- Dynamic navigation based on auth state
- User section with logout button
- Navigation links for authenticated users

#### FeatureCard.js
- Displays feature with icon, title, and description
- Reusable component for features grid

#### QuizComponent.js
- Question-based quiz interface
- Multiple choice options
- Score tracking and results display
- Progress indicator with dots

### Context

#### AuthContext.js
- Manages user authentication state
- localStorage persistence
- `useAuth()` hook for easy access
- login() and logout() functions

### Styles

#### styles.js
- Centralized styling object
- Supports all pages and components
- Dark theme with cyan (#00D9FF) and purple (#9D4EDD) accents
- Responsive design utilities

## Key Features

1. **Modular Architecture**: Each page and component is independently maintained
2. **Reusable Components**: Navigation, FeatureCard, and QuizComponent can be used across pages
3. **Context API**: Centralized authentication state management
4. **Consistent Styling**: All styles in one place for easy maintenance
5. **Clear Separation**: Pages handle routing logic, components are presentational

## Usage

### Main App.js
```javascript
import { AuthProvider } from './frontend/context/AuthContext';
import Navigation from './frontend/components/Navigation';
import styles from './frontend/styles/styles';
```

### Importing in Components
```javascript
import { useAuth } from '../context/AuthContext';
import styles from '../styles/styles';
```

## State Management

- **Global**: Authentication state (AuthContext)
- **Local**: Videos state in MainApp component
- **Component**: Page-specific state in individual pages

## Styling

The application uses inline CSS-in-JS styling with the following design system:

- **Primary Color**: #00D9FF (Cyan)
- **Secondary Color**: #9D4EDD (Purple)
- **Background**: #0F172A (Dark Navy)
- **Cards**: #1E293B (Lighter Navy)
- **Text**: #E2E8F0 (Light Gray)
- **Muted**: #94A3B8 (Medium Gray)

## Future Enhancements

- Move styles to CSS modules or styled-components
- Add utility functions in `utils/` folder
- Create custom hooks for common logic
- Add prop validation with PropTypes
- Implement error boundaries
- Add loading skeletons
- Implement API integration layer

## Notes

- All components use functional React hooks
- No external component libraries (all custom)
- Ready for backend API integration
- Easily scalable structure for feature additions
