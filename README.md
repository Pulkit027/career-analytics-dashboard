# Pulkit's Career Tracker

A production-ready React application for tracking Pulkit's Career activities including internship applications, skill development, and professional profile management.

## Features

- **Dashboard**: Overview of Pulkit's Career progress with statistics and charts
- **Internship Tracker**: Manage and track all internship applications with status updates
- **Skills Management**: Track technical skills progress and projects
- **Profile Management**: Maintain professional profile information
- **Responsive Design**: Fully responsive layout that works on all devices
- **Authentication**: Simple login system (frontend-only for demo)

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type-safe JavaScript
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts**: Composable charting library
- **Lucide React**: Beautiful icon library

## Project Structure

```
src/
 ├─ components/
 │   ├─ common/            # Reusable UI components
 │   │   ├─ Badge.jsx
 │   │   ├─ Button.jsx
 │   │   ├─ Card.jsx
 │   │   └─ Input.jsx
 │   ├─ dashboard/         # Dashboard-specific components
 │   │   ├─ ApplicationsChart.jsx
 │   │   ├─ StatusPieChart.jsx
 │   │   └─ StatsCard.jsx
 │   ├─ internships/       # Internship-related components
 │   │   └─ InternshipsTable.jsx
 │   └─ skills/            # Skill-related components
 │       └─ SkillCard.jsx
 ├─ pages/                 # Page components
 │   ├─ Dashboard.jsx
 │   ├─ Internships.jsx
 │   ├─ Login.jsx
 │   ├─ Profile.jsx
 │   └─ Skills.jsx
 ├─ layouts/               # Layout components
 │   └─ MainLayout.jsx
 ├─ data/                  # Mock data
 │   └─ mockData.js
 ├─ App.tsx                # Main app component with routing
 ├─ main.tsx               # Application entry point
 └─ index.css              # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd career-prep-tracker
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Running Production Build Locally

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Usage

### Login

- Navigate to `/login`
- Enter any email and password (demo mode - no validation)
- Click "Sign In" to access the dashboard

### Dashboard

- View overview statistics of applications, interviews, and offers
- See applications trend over time
- Analyze applications by status with pie chart

### Internships

- View all internship applications in a table format
- Filter applications by status
- Search by company or position
- Track application dates and deadlines

### Skills

- View all technical skills with progress indicators
- Filter skills by category
- Search for specific skills
- See project count and last practiced date for each skill

### Profile

- View and edit personal information
- Update contact details
- Manage social media links
- Edit educational information

## Mock Data

The application uses mock data from `src/data/mockData.js` for demonstration purposes. The data includes:

- User profile information
- 8 sample internship applications
- 10 technical skills with progress tracking
- Dashboard statistics and charts data

## Customization

### Adding New Features

1. Create new components in the appropriate directory
2. Add new pages in `src/pages/`
3. Update routing in `src/App.tsx`
4. Add mock data in `src/data/mockData.js`

### Styling

The application uses Tailwind CSS. Modify `tailwind.config.js` to customize:

- Colors
- Spacing
- Breakpoints
- Fonts

### Components

All common components are in `src/components/common/` and can be reused throughout the application:

- `Button`: Reusable button with variants (primary, secondary, success, danger, outline)
- `Card`: Container component with shadow and padding options
- `Input`: Form input with label, error handling, and validation
- `Badge`: Status indicator with color variants

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
