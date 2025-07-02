This project is a simple Node.js script that imports quotes from a JSON file into Firestore.

### Setup Guide

This project uses [Firebase](https://firebase.google.com) to store the quotes. To set up your own Firebase project, follow these steps:

1. Create a Firebase project by following the [Firebase documentation](https://firebase.google.com/docs/web/setup).
2. Clone this repository and navigate to the `stoic-import` directory.
3. Install the required dependencies by running `npm install firebase-admin`.
4. Create a new file named `serviceAccountKey.json` in the root directory of your project settings and copy the contents of the `serviceAccountKey.json` file from the Firebase project you created in step 1.
5. Add json to .gitignore by running `echo "serviceAccountKey.json" >> .gitignore`.
6. Add quotes.json to .gitignore by running `echo "quotes.json" >> .gitignore`.
7. Run the script by executing `npm run import`.

### Quotes Format

The quotes are stored in a JSON file named `quotes.json`. The format of the file is as follows:

```json
[
  {
    "title": "Title of the quote",
    "message": "The actual quote",
    "date": "Optional date timestamp in the format '2025-07-29T00:00:00+08:00'"
  },
  {
    "title": "Title of the quote",
    "message": "The actual quote",
    "date": "Optional date timestamp in the format '2025-07-29T00:00:00+08:00'"
  }
]
```

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.