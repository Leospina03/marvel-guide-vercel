@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500;600;700&display=swap');
@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));

  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-card-border: hsl(var(--card-border));

  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));

  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));

  --font-sans: 'Inter', sans-serif;
  --font-display: 'Oswald', sans-serif;

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  /* Defaulting to a dark cinematic theme */
  --background: 0 0% 4%;
  --foreground: 0 0% 98%;
  --border: 0 0% 15%;
  --input: 0 0% 12%;
  --ring: 356 78% 46%;

  --card: 0 0% 7%;
  --card-foreground: 0 0% 98%;
  --card-border: 0 0% 12%;

  --primary: 356 78% 46%; /* Marvel Red */
  --primary-foreground: 0 0% 100%;

  --secondary: 0 0% 12%;
  --secondary-foreground: 0 0% 98%;

  --muted: 0 0% 15%;
  --muted-foreground: 0 0% 65%;

  --accent: 356 78% 46%;
  --accent-foreground: 0 0% 100%;

  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;

  --radius: 0.5rem;
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply font-sans antialiased bg-background text-foreground;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display tracking-tight uppercase;
  }
}

@layer utilities {
  .text-shadow-sm {
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  }
  .text-shadow-lg {
    text-shadow: 0 4px 8px rgba(0,0,0,0.8);
  }
  .glass-panel {
    @apply bg-card/60 backdrop-blur-md border border-white/5 shadow-xl;
  }
}

/* Custom scrollbar for a sleek look */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: hsl(var(--background));
}
::-webkit-scrollbar-thumb {
  background: hsl(var(--muted));
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary));
}
