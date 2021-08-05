<br />
<p align="center">
  <h3 align="center">MDB-lite</h3>

  <p align="center">
    A movie management system built using NodeJS and MongoDB.
    <br />
    <br />
    <a href="https://github.com/SubhradeepSS/MDB-lite"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://mdb-v1.herokuapp.com/">View Website</a>
    ·   
    <a href="https://github.com/SubhradeepSS/MDB-lite/issues">Report Bug</a>
    ·
    <a href="https://github.com/SubhradeepSS/MDB-lite/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#local">Local</a></li>
        <li><a href="#deployment">Deployment</a></li>
      </ul>
    </li>
    <li><a href="#to-do">TO-DO</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A movie management system built using NodeJS, ExpressJS and MongoDB consisting of CRUD features like ratings and blogs for movies, and comments(replies) for a particular blog. Admin have some privileged permissions like CRUD operations for movies, delete any blog/comment/user account. Users can update their profile and also view others’ profile by searching by username.

### Built With

Major Frameworks/Libraries used:

- [NodeJS](https://nodejs.org/en/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [ExpressJS](https://expressjs.com/)

<!-- GETTING STARTED -->

## Getting Started

To setup the project locally, follow the given steps:

### Prerequisites

Following software needs to be setup in the system:

- [git](https://git-scm.com/downloads)
- [github-cli](https://github.com/cli/cli) (optional)
- [nodejs](https://nodejs.org/en/)
- Either [mongodb](https://www.mongodb.com/) installed or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (please refer to corresponding links to setup respective software)

### Installation

1. Clone the repo by
   ```sh
   git clone https://github.com/SubhradeepSS/MDB-lite.git
   ```
   or (if [github-cli](https://github.com/cli/cli) is installed)
   ```sh
   gh repo clone SubhradeepSS/MDB-lite
   ```
2. Navigate to the project directory.
3. To install the required packages, open cli/terminal and run
   ```sh
   npm install
   ```
4. Create a `.env` file in the project root directory which consists of the following content:
   ```sh
   DB = {the mongodb uri either setup locally or the uri from mongodb atlas}
   ```

<!-- USAGE EXAMPLES -->

## Usage

### Local

For running the project, navigate to the project directory and follow the given instructions:

- For running the development server, open terminal/cli and run:
  ```sh
    npm run dev
  ```
- For tesing the server:

  ```sh
    npm run start
  ```

- Open http://localhost:3000/ in browser and the login page of the project will open.

- Create a user(by signing up from the site itself) with username: **admin** so as to give the user privileged permissions of an admin.

- New users can signup by providing details and existing users can login with their credentials.

### Deployment

View deployed site [here](https://mdb-v1.herokuapp.com/).
**NOTE**: the deployment might not function always since mongodb-atlas requires whitelisting of IPs to access the database.

##### Credentials for admin:

| User Type   | Username | Password |
| ----------- | -------- | -------- |
| admin       | admin    | password |
| normal user | user     | password |

## TO-DO

Following features/enhancements are thought to be added later:

- UI enhancement.
- Implement **`CASCADE`** delete for mongoose models.

<!-- CONTRIBUTING -->

## Contributing

Any contributions made to the project are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
