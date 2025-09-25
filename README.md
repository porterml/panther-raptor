# Salt Flats Psychiatry - Next.js Website

A modern, responsive website for Salt Flats Psychiatry mental health clinic, built with Next.js 14, React 18, and TypeScript.

## Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, and TypeScript
- **Responsive Design**: Mobile-first approach with Bootstrap 5 and custom CSS
- **Performance Optimized**: Image optimization with Next.js Image component
- **SEO Friendly**: Built-in metadata and optimization features
- **Accessibility**: Semantic HTML and ARIA labels
- **Fast Development**: Hot reloading and modern development tools

## Pages

- **Home** (`/`): Welcome page with introduction and mission statement
- **About** (`/about`): Information about the clinic and team
- **Services** (`/services`): Available mental health services
- **Contact** (`/contact`): Contact information and appointment booking

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd salt-flats-wellness
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                    # Next.js 13+ app directory
│   ├── components/        # Reusable React components
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Site footer
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── contact/          # Contact page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
│   └── assets/          # Images, logos, etc.
├── package.json          # Dependencies and scripts
├── next.config.js        # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Bootstrap 5 + Custom CSS
- **UI Components**: Bootstrap 5
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Raleway, Lora)

## Customization

### Colors

The primary color scheme is defined in CSS variables:

- Primary: `#e6a756` (Golden)
- Secondary: `#2f170f` (Dark Brown)

### Fonts

- **Raleway**: Used for headings and navigation
- **Lora**: Used for body text

### Images

All images are stored in `public/assets/` and optimized using Next.js Image component.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

Build the project and deploy the `out` directory:

```bash
npm run build
npm run export  # If using static export
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please contact:

- Email: saltflatswellness@gmail.com
- Phone: (435) 264-7926
- Address: 40A S Main St, Suite 3, Tooele, UT 84074
