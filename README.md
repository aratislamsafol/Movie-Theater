movie-reviews-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/              # Images, icons, videos, logos etc.
│   ├── components/          # Reusable UI components (Button, Card, etc.)
│   ├── features/            # Feature-specific folders (like movie, review etc.)
│   │   ├── movie/
│   │   │   ├── components/  # Movie-specific components (MovieCard, MovieList)
│   │   │   ├── hooks/       # Custom hooks related to movie
│   │   │   ├── types.ts     # Type definitions related to movie
│   │   │   └── MoviePage.tsx
│   │   └── review/
│   │       ├── components/  # ReviewCard, ReviewList
│   │       ├── types.ts
│   │       └── ReviewPage.tsx
│   ├── pages/               # Route-level components (Home, About, etc.)
│   ├── routes/              # All routes defined here
│   │   └── AppRoutes.tsx
│   ├── services/            # API calling functions (axios, fetch etc.)
│   │   └── movieService.ts
│   ├── store/               # Redux or Zustand or Context for global state
│   │   └── index.ts
│   ├── types/               # Global reusable types/interfaces
│   ├── utils/               # Helper functions
│   ├── hooks/               # Global custom hooks
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css / tailwind.css
├── tsconfig.json
├── vite.config.ts
└── package.json
