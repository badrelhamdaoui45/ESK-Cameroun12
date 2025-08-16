# ESK Cameroun

This is a NextJS application for ESK Cameroun.

To get started, take a look at src/app/page.tsx.

## Development

```bash
npm run dev
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Prerequisites

1. Ensure your repository is public or you have GitHub Pro/Enterprise
2. Enable GitHub Pages in your repository settings
3. Set the source to "GitHub Actions"

### Automatic Deployment

The project will automatically deploy when you push to the `main` or `master` branch. The GitHub Actions workflow will:

1. Build the project using `npm run export`
2. Deploy the static files to GitHub Pages

### Manual Deployment

To deploy manually:

```bash
npm run export
```

This will create a `out` folder with the static files that can be deployed to any static hosting service.

### Important Notes

- **AI Functionality Removed**: Genkit AI features have been removed to ensure compatibility with static export
- **Client-Side Only**: The application now works entirely on the client side for GitHub Pages compatibility
- **Static Export**: Configured with `output: 'export'` in Next.js config

### GitHub Pages Settings

1. Go to your repository Settings
2. Navigate to Pages section
3. Set Source to "GitHub Actions"
4. The deployment will happen automatically via the workflow
