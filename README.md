 MyFreeSchemaProject

This project is a simple To-Do List application built using TypeScript, Visual Studio Code, and the mftsccs-browser framework. It demonstrates key concepts of stateful widgets, dynamic data fetching, and local storage usage.

 Features
- Add Tasks: Users can add new tasks to their to-do list.
- Edit Tasks: Users can edit existing tasks.
- Delete Tasks: Users can remove tasks from their list.
- Dynamic Updates: The task list dynamically updates upon changes, such as adding, editing, or deleting tasks.
- User Data Management: The application integrates with local storage to retrieve and display user information.

---

 Folder Structure

src
├── app
│   ├── default
│   ├── environments
│   ├── interfaces
├── user
│   ├── login.service.ts
├── components
│   ├── createTask.ts
│   ├── taskList.ts
└── styles
    ├── todolist.style.css


---

 Getting Started

 Prerequisites
1. Node.js: Ensure you have Node.js installed on your system. You can download it from [Node.js](https://nodejs.org/).
2. npm: Comes bundled with Node.js. Confirm installation by running:
   
   npm -v
   
3. TypeScript: Install TypeScript globally by running:
   
   npm install -g typescript
   

 Installation
1. Clone this repository:
   
   git clone https://github.com/your-username/MyFreeSchemaProject.git
   
2. Navigate to the project directory:
   
   cd MyFreeSchemaProject
   
3. Install dependencies:
   
   npm install
   
4. Install packages
	npm init -y
   

5. Running the Application
	npm run dev
   

---

 Components

 1. createTask.ts
- Handles the creation and editing of tasks.
- Integrates with local storage to personalize the user experience.
- Dynamically updates tasks using MakeTheInstanceConceptLocal and UpdateComposition methods.

 2. taskList.ts
- Displays the task list in a table format.
- Provides options to edit or delete tasks.
- Refreshes the list dynamically upon any changes.

 3. todolist.style.css
- Contains styles for the application, including layout and design for the task list and forms.

---

 Technologies Used
- TypeScript: For type-safe development.
- mftsccs-browser: Framework for managing stateful widgets and concepts.
- HTML & CSS: For building and styling the user interface.

---

 Known Issues
- Task submission may fail if the MakeTheInstanceConceptLocal or CreateTheConnectionLocal methods encounter an error.
- Ensure local storage permissions are enabled for the application to function correctly.

---

 Future Improvements
- Add user authentication for task privacy.
- Implement search and filter functionality for tasks.
- Enhance the UI/UX with animations and responsive design.

---

 Contact
For any questions or feedback, feel free to contact:
- Name: Ramprakash Sah
- Email: btwitsramprakash@gmail.com

