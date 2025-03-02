//Cole's Task Manager
//===================

//Steps for general use
// Step 1: Launch the Backend application
// Step 2: Launch the Frontend Application

//BEFORE ANY LAUNCHING
//Start a new terminal and run 'npm install' to install all needed libraries

//Launching the backend
//=====================
//Step 1: Start a new terminal
//Step 2: Change direction to the 'backend' folder
//Step 3: Run 'npm install' for installing needed libraries
//Step 4: Run 'npm start' to begin launch
//Step 5: Wait for messages to make sure server is running and MongoDB is connected

//Launching the backend
//=====================
//Step 1: Start a second terminal
//Step 2: Change direction to the 'frontend' folder
//Step 3: Run 'npm install' for installing needed libraries
//Step 4: Run 'npm start' to begin launch
//Step 5: Wait for messages, and following that will be the launch of the webpage
//Step 6: Once webpage is launched, follow 'Guide to use' for understanding how to use the program

//Guide to Use
//============
//Use upon launching both the backend and frontend
//Step 1: When the app has been loaded, you are greeted with a ui of a text box and a 'Create Task Button'
//Step 2: If you have already created tasks, these tasks will have their created models on screen to the right
//Step 3: When creating a new task, Type a task into the text box
//Step 4: Click on the 'Create a Task' button, this will make a new task model of the task you've typed, and the new model will appear to the right
//Step 4a: The new task is also added to the mongoDB database
//Step 5: As for managing tasks, look at task models to the right. Here, you can control the status of tasks
//Step 6: When using a task model, it will intialially load with the status 'pending'
//Step 7: There will be three options to change the status as you go, you can mark the task as 'In-progress', 'Complete' or you can delete the task altogether.
//Step 8: When finished using program, closing the tab will shut down the window but you must terminate the batch job on the terminal using "^C" on the frontend window for full shutdown
//Step 8a: Perform "^C" on the backend to shut down the server, but only nessecary when fully done with all uses of the program.

//Docker Launch:
//Step 1: Open Docker Desktop
//Step 2: When launched, ensure the Docker Engine is running
//Step 3: When confirmed, run the following command from the main director terminal: 'docker-compose up --build'
//Step 4: Wait for installation and launch
//Warning: At the moment, there seems to be an issue when launching the build command. 