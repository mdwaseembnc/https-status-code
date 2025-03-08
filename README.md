# HTTP Status Code Dashboard

A responsive React.js application for monitoring and visualizing HTTP status codes with a focus on error tracking. The dashboard provides real-time visualizations of 5xx, 4xx, and other HTTP status codes, along with relevant alerts.

LIVE DEMO:https-status-code.vercel.app

## Features

- **Secure Authentication**
  - Standard email/password login
  - Single Sign-On (SSO) integration
  - Secure session management

- **Interactive Dashboard**
  - Pie charts for HTTP status code distribution (5xx, 4xx, others)
  - Top 10 recent alerts
  - Responsive design for all device sizes

- **Data Range Analysis**
  - Filter data by custom date ranges
  - Visualize trends over time
  - Export filtered data

## Screenshots

*(Add screenshots of your application here once deployed)*

## Technologies

- React.js
- React Router for navigation
- Recharts for data visualization
- CSS3 for styling
- JWT for authentication
- Responsive design with Flexbox/Grid

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/http-status-code.git
   ```

2. Navigate to the project directory
   ```
   cd http-status-code
   ```

3. Install dependencies
   ```
   npm install
   ```

4. Start the development server
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

## Project Structure

```
project-root/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── Alert.jsx
│   │   ├── ErrorChart.jsx
│   │   ├── Navbar.jsx
│   │   └── DateRangePicker.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   └── DataRange.jsx
│   ├── contexts/
│   │   └── AuthContext.jsx
│   ├── utils/
│   │   ├── api.js
│   │   └── helpers.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── Login.css
│   │   ├── Dashboard.css
│   │   └── DataRange.css
│   ├── App.jsx
│   ├── index.js
│   └── routes.js
├── package.json
├── .gitignore
└── README.md
```

## Usage

1. **Login Page**
   - Use your email and password to log in
   - Alternatively, use SSO options if configured

2. **Dashboard**
   - View the distribution of HTTP status codes
   - Check recent alerts
   - Use filters to refine displayed data

3. **Data Range Page**
   - Select custom date ranges to analyze data
   - Export data for reporting

## Configuration

To configure SSO providers, edit the `.env` file in the root directory:

```
REACT_APP_SSO_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_SSO_GITHUB_CLIENT_ID=your_github_client_id
```

## Deployment

This application can be deployed to various platforms:

- **Vercel/Netlify**: Connect your GitHub repo for automatic deployments
- **GitHub Pages**: Run `npm run deploy` after setting up gh-pages
- **AWS/Azure**: Follow cloud provider documentation for React app deployment
LIVE DEMO :# HTTP Status Code Dashboard

A responsive React.js application for monitoring and visualizing HTTP status codes with a focus on error tracking. The dashboard provides real-time visualizations of 5xx, 4xx, and other HTTP status codes, along with relevant alerts.

## Features

- **Secure Authentication**
  - Standard email/password login
  - Single Sign-On (SSO) integration
  - Secure session management

- **Interactive Dashboard**
  - Pie charts for HTTP status code distribution (5xx, 4xx, others)
  - Top 10 recent alerts
  - Responsive design for all device sizes

- **Data Range Analysis**
  - Filter data by custom date ranges
  - Visualize trends over time
  - Export filtered data

## Screenshots

*(Add screenshots of your application here once deployed)*

## Technologies

- React.js
- React Router for navigation
- Recharts for data visualization
- CSS3 for styling
- JWT for authentication
- Responsive design with Flexbox/Grid

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/http-status-code.git
   ```

2. Navigate to the project directory
   ```
   cd http-status-code
   ```

3. Install dependencies
   ```
   npm install
   ```

4. Start the development server
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

## Project Structure

```
project-root/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── Alert.jsx
│   │   ├── ErrorChart.jsx
│   │   ├── Navbar.jsx
│   │   └── DateRangePicker.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   └── DataRange.jsx
│   ├── contexts/
│   │   └── AuthContext.jsx
│   ├── utils/
│   │   ├── api.js
│   │   └── helpers.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── Login.css
│   │   ├── Dashboard.css
│   │   └── DataRange.css
│   ├── App.jsx
│   ├── index.js
│   └── routes.js
├── package.json
├── .gitignore
└── README.md
```

## Usage

1. **Login Page**
   - Use your email and password to log in
   - Alternatively, use SSO options if configured

2. **Dashboard**
   - View the distribution of HTTP status codes
   - Check recent alerts
   - Use filters to refine displayed data

3. **Data Range Page**
   - Select custom date ranges to analyze data
   - Export data for reporting

## Configuration

To configure SSO providers, edit the `.env` file in the root directory:

```
REACT_APP_SSO_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_SSO_GITHUB_CLIENT_ID=your_github_client_id
```

## Deployment

This application can be deployed to various platforms:

- **Vercel/Netlify**: Connect your GitHub repo for automatic deployments
- **GitHub Pages**: Run `npm run deploy` after setting up gh-pages
- **AWS/Azure**: Follow cloud provider documentation for React app deployment

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React.js community for excellent documentation
- Recharts for the visualization library
- All contributors who help improve this project

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React.js community for excellent documentation
- Recharts for the visualization library
- All contributors who help improve this project
