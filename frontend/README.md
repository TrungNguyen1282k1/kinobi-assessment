# My Nuxt Vuetify Upload App

This is a web application built using Nuxt.js and Vuetify.js that allows users to upload images. The application features a file upload interface, a prompt for successful uploads, and a list of previously uploaded files.

## Project Structure

```
my-nuxt-vuetify-upload-app
├── assets
├── components
│   ├── FileUpload.vue
│   ├── UploadSuccessPrompt.vue
│   └── UploadedFilesList.vue
├── layouts
│   └── default.vue
├── pages
│   └── index.vue
├── plugins
│   └── vuetify.js
├── static
├── store
│   └── index.js
├── nuxt.config.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd my-nuxt-vuetify-upload-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

## Running the Application

To run the application in development mode, use the following command:

```
npm run dev
```

This will start the Nuxt.js development server. You can view the application in your browser at `http://localhost:3000`.

## Building for Production

To build the application for production, run:

```
npm run build
```

After building, you can start the production server with:

```
npm run start
```

## Features

- **File Upload**: Users can upload images through a user-friendly interface.
- **Success Prompt**: A prompt is displayed upon successful uploads to inform users.
- **Uploaded Files List**: A list of previously uploaded files is displayed for user reference.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.