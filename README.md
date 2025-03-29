# Resume 2.0

This is a modern, responsive resume app built using Vue 3, Vite, TypeScript, and Vuetify. It allows you to create a customizable resume with a clean design.

## Features

- 📱 Fully responsive design
- 🎨 Customizable theme
- 🖨️ PDF generation
- 📄 Easily configurable content through a single config file
- 🚀 Fast development with Vite

## Quick Start for Your Resume

1. Clone this repository
   ```sh
   git clone https://github.com/gammaSpeck/resume2.0.git
   cd resume2.0
   ```

2. Install dependencies
   ```sh
   pnpm install
   ```

3. **Customize your resume**
   - Edit the file at `src/config/resumeConfig.ts` with your personal information
   - Replace the avatar image in `src/assets/` with your photo (and update the filename in config)

4. Start the development server
   ```sh
   pnpm dev
   ```

5. Generate PDF (in a separate terminal)
   - Start the development server if not already running
   - Run:
   ```sh
   pnpm pdf-gen
   ```

6. Build for production
   ```sh
   pnpm build
   ```

## Customization

### Resume Content

All resume content is stored in a single configuration file at `src/config/resumeConfig.ts`. This file contains:

- Personal information (name, title, summary)
- Contact links
- Experience history
- Languages
- Skills (organized by category)
- Education history
- Theme settings

### Styling

- The theme colors can be customized in the `themeSettings` section of the config file
- Additional styling customizations can be made in the component files

## Development

The app will be available locally at: [http://localhost:3000](http://localhost:3000)

## Technologies Used

- **Vue 3**: JavaScript framework for building user interfaces
- **Vite**: Frontend build tool for fast development
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript
- **Vuetify**: Material Design component framework for Vue
- **pnpm**: Fast, disk space efficient package manager
- **puppeteer**: Used to create a PDF out of a web page

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any feature requests or bug reports.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.