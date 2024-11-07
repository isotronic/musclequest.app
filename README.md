# MuscleQuest Website

This is the official landing page for the **MuscleQuest** mobile app, built using **Gatsby** and **Tailwind CSS**. The website serves as an informational and promotional platform for the app, showcasing its features, benefits, screenshots, and providing a way for users to request data deletion.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Deploying on Cloudflare Pages](#deploying-on-cloudflare-pages)
- [Contributing](#contributing)

## Overview

The **MuscleQuest** website is designed to provide users with comprehensive information about the app. It includes sections for:

- **Core Features** of the app
- **User Benefits** of using the app
- **Screenshots** of the app interface
- A **Download** section with a Google Play download link
- A **Privacy Policy** page
- A **Request Account and Data Deletion** page

## Features

- **Responsive Design**: Fully responsive and optimized for different screen sizes.
- **Single Page Navigation**: Smooth navigation between sections.
- **Data Request Page**: A dedicated page where users can submit requests to delete their account and data.
- **Modern Styling**: Styled with Tailwind CSS for a sleek and modern look.
- **SEO Optimized**: Basic SEO optimization using Gatsby's SEO tools.
- **Fast Performance**: Built with Gatsby for optimal performance and fast page loads.

## Technologies Used

- **Gatsby**: Static site generator for React.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React**: JavaScript library for building user interfaces.
- **Cloudflare Pages**: Hosting platform for deploying the site.
- **Formspree/Getform**: (optional) For handling form submissions.
- **react-icons**: For adding icons throughout the site.

## Setup and Installation

To run the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/musclequest-website.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd musclequest-website
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the development server**:

   ```bash
   gatsby develop
   ```

   The site will be available at `http://localhost:8000`.

## Deploying on Cloudflare Pages

1. **Connect the repository**: Link your GitHub repository to your Cloudflare Pages project.
2. **Set up build settings**:
   - **Framework preset**: Gatsby
   - **Build command**: `gatsby build`
   - **Output directory**: `public`
3. **Deploy**: Cloudflare Pages will handle the deployment process.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.
