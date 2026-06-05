# Minimalist Developer Portfolio

A sleek, responsive, and highly customizable personal portfolio template built with **React** and **Vite**. Designed specifically for software engineers, developers, and tech professionals to showcase their skills, experience, and projects in a terminal-inspired, premium aesthetic.

![Portfolio Preview](./public/icons.svg) <!-- Replace with an actual screenshot if you have one -->

## ✨ Features

- **Data-Driven Architecture:** All of the portfolio content (skills, projects, experience, contact details) is centralized in a single JavaScript file (`src/data/portfolioData.js`). You never have to touch the React component code to update your resume!
- **Terminal/IDE Aesthetic:** Features a custom "browser window" frame with macOS-style traffic light dots, giving it a developer-centric feel.
- **Fully Responsive:** Scales perfectly from large desktop monitors down to mobile screens.
- **Modern Tech Stack:** Fast hot-module-replacement (HMR) and optimized production builds courtesy of Vite.
- **Pre-configured Styling:** Uses custom CSS variables for easy theming and color adjustments.

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (No heavy CSS frameworks to learn)
- **Deployment-ready:** Easily deploys as a static site to Vercel, Netlify, Render, or GitHub Pages.

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/portfolio_app.git
   cd portfolio_app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/` to see your site live.

## 📝 Customizing Your Portfolio

Editing this portfolio is incredibly simple. You do not need to modify any UI components.

1. Open `src/data/portfolioData.js`.
2. Update the JSON object with your personal information:
   - **`name` & `role`:** Your name and current/target job title.
   - **`socialLinks`:** Your GitHub, LinkedIn, Email, and a link to your Resume (placed in the `public/` folder).
   - **`projects`:** Add your featured work. Including a `link` property will automatically make the project card clickable!
   - **`experience` & `skills`:** Map out your career history and technical proficiency.

### Changing Themes and Colors
To change the colors, fonts, or spacing, open `src/index.css`. At the top of the file, you'll find a `:root` block with CSS variables. Modifying these hex codes will instantly update the theme across the entire application.

## ☁️ Deployment

This project is configured to be deployed as a static site. 

### Deploying to Render
1. Push your code to a GitHub repository.
2. Go to [Render.com](https://render.com/) and create a new **Static Site**.
3. Connect your GitHub repository.
4. Set the **Build Command** to: `npm install && npm run build`
5. Set the **Publish Directory** to: `dist`
6. Click **Create Static Site**.

Render will automatically deploy your site and provide a live URL. Furthermore, any new commits pushed to your `main` branch will automatically trigger a new deployment.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to fork, customize, and use it for your own personal portfolio.
