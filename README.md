import os

# Content for the README.md file
readme_content = """# 💱 Currency Converter (React Native)

A sleek, high-performance mobile application built with **React Native** that allows users to convert Pakistani Rupees (PKR) into various global currencies in real-time. This project focuses on a clean User Interface (UI), efficient state management, and robust input validation.

## 🚀 Key Features

* **Real-time Conversion:** Instantly calculates exchange values based on pre-defined constants.
* **Custom UI Components:** Features a modular `CurrencyButton` component for a clean, grid-based layout.
* **Robust Validation:** Implements "Guard Clauses" to handle empty inputs or invalid numerical data gracefully.
* **Native Feedback:** Integrated `react-native-root-toast` for non-blocking user notifications.
* **Optimized Performance:** Uses `FlatList` for efficient rendering of currency options, ensuring smooth performance even on budget devices like the Google Pixel 7.

## 🛠️ Tech Stack

* **Framework:** React Native
* **Language:** TypeScript (for type safety)
* **Styling:** StyleSheet (CSS-in-JS)
* **Feedback:** React Native Root Toast

## 📸 Screenshots



## ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone 
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Android SDK:**
    Ensure your `local.properties` file in the `android/` folder correctly points to your local SDK path:
    ```properties
    sdk.dir = C:/Users/YourUsername/AppData/Local/Android/Sdk
    ```

4.  **Run the application:**
    ```bash
    npx react-native run-android
    ```

## 🧠 What I Learned

* **State Management:** Deepened understanding of `useState` for handling reactive UI updates.
* **Problem Solving:** Successfully transitioned from native-linked libraries to JS-based alternatives to ensure cross-device compatibility and resolve complex build failures.
* **Architecture:** Focused on separating business logic (mathematical calculations) from presentation (UI components).

## 👤 Author

**Muhammad Umer Aziz**
* Software Developer | IT Professional
* [LinkedIn Profile](https://www.linkedin.com/in/zestymec/)

---
*Developed as part of a professional learning journey in mobile application development.*
"""

# Define the file path
file_path = '/mnt/data/README.md'

# Write the content to the file
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(readme_content)

print(f"File saved to {file_path}")
