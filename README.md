# M.A. Enterprises - Official Website

![M.A. Enterprises Logo](public/ma-enterprises-logo.png)

This is the official informational and client-intake website for **M.A. Enterprises**. Our motto is: "We don't just Advertise, We build your Presence."

This project is a modern, responsive, and fast single-page application built with Vite and React.

---

### **Live Site URL: [https://ma-enterprises.onrender.com](https://ma-enterprises.onrender.com)**

---

## Key Features

-   **Service Showcase**: Cleanly presents our core printing and digital marketing services.
-   **Responsive Design**: Looks great and functions perfectly on desktops, tablets, and mobile phones.
-   **Client Inquiry Form**: A seamless registration form that allows potential clients and influencers to submit their requirements directly to our email.
-   **Modern Tech Stack**: Built with the latest frontend technologies for a fast, reliable, and smooth user experience.

## Technologies Used

-   **Framework**: [React](https://reactjs.org/) (with [Vite](https://vitejs.dev/))
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
-   **Form Handling**: [Formspree](https://formspree.io/) for email submissions
-   **Deployment**: [Render](https://render.com/)

---

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 18 or higher is recommended)
-   npm (comes bundled with Node.js)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/mohammadafzalsiddiqui/testing-ma.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd testing-ma
    ```

3.  **Install the necessary dependencies:**
    ```sh
    npm install
    ```

4.  **Set up Environment Variables:**
    The contact form requires a Formspree endpoint URL. To run it locally, you need to tell the application which URL to use.

    -   Create a new file in the root of the project named `.env`.
    -   Add the following line to the `.env` file:
        ```
        VITE_FORMSPREE_ENDPOINT="https://formspree.io/f/xgvzaaln"
        ```

5.  **Run the development server:**
    ```sh
    npm run dev
    ```
    Your website should now be running locally at `http://localhost:8080` (or another port if 8080 is in use). The server will automatically reload when you save changes to the code.

---

## Deployment

This website is configured for continuous deployment on **Render**.

-   **Provider**: Render
-   **Branch**: `main`
-   **Build Command**: `npm install && npm run build`
-   **Publish Directory**: `dist`

Anytime a new commit is pushed to the `main` branch on GitHub, Render will automatically trigger a new build and deploy the latest version of the site.

## Contact

For any inquiries regarding the business, please reach out via the form on the website or directly at:

-   **Email**: `joinwithmaenterprises@gmail.com`
