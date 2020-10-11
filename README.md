### Take home assignment - React.js @ Betsol

- Duration - 48 hours

Hello there 👋 Thank you for taking this interview 🙏 and congratulations on making it this far 🎉.  
Your mission should you choose to accept it, is to create a user interface for an instance management dashboard.

![Instances USD](/mockups/instances-usd.png)

[**View Prototype on Figma**](https://www.figma.com/proto/K8O85fQvyMgMRo40nyZ1LD/Take-home-assignment-Betsol?node-id=1%3A157&scaling=min-zoom)

[**Visit Figma file for Style Guides**](https://www.figma.com/file/K8O85fQvyMgMRo40nyZ1LD/Take-home-assignment-Betsol?node-id=1%3A157)

## Goals

Our end goal here is to develop an interface where

- Users can login / signup to the app.
- View a list of AWS instances. ([Instance interface](https://www.notion.so/adithyanr/Instance-interface-9a2283e449474dbf81b90d42ce5afb12))
- Start / Stop a particular instance.
- Get an overview of hourly cost for both running and stopped instances (In both USD and INR)
  - Show total cost per hour for running instances and stopped instances.
    - Each instance has a `costPerHour` value in USD.
    - Provide a toggle where users can toggle between USD and INR as their currency. The `costPerHour` should be converted to INR rate if INR is selected as the currency. Use 1 INR = 0.015 USD as the conversion rate.
- Logout of the app.

## Evaluation

Please note that we mainly take into consideration the following evaluation criteria:

- How close your app is to the mock-ups?
- Your app is responsive enough on mobiles, tablets and computers.
- How clean, organized and optimized your code is.
- (Bonus) How good your unit test code coverage is (80% is the minimum requirement)
- We prefer you use Function components with React hooks over class components.

## Libraries allowed

You can use the following libraries if you wish to.

- React Router
- Material UI / Chakra UI
- SWR (https://swr.now.sh)
- React Query
- React Table

## Prerequisites

- Node.js runtime (v12 or above)
- npm or yarn
- VSCode / Atom (with Prettier plugin installed for linting and formatting)
- A Terminal

## Usage

- Clone this repository - `git clone https://github.com/AdithyaBhat17/take-home-assignment.git`
- Create a `.env` file in `take-home-assignment/server/.env` and add
  `IRON_KEY = <a 32 character password>`
- Install dependencies and start the development server - `yarn && yarn run dev`
- The server is now up and running at http://localhost:8080
- Now open a new tab on your terminal.
- Switch to the client folder - `cd take-home-assignment/client`
- Install dependencies and start the development server - `yarn && yarn run start`.
- The UI is now running at http://localhost:3000
- Refer the [API endpoints documentation](https://www.notion.so/adithyanr/56ce60f0152e4d3bae081bc6865c4b4e?v=6e32b8cd1a984e6a986bbc8a213e13b5) and get started.

#### Unit tests

You can add your unit tests in `client/src/__tests__` folder.

- `yarn run test` to run your tests.
- `yarn run test:coverage` to check code coverage. This generates a report at `client/src/coverage/lcov-report/src/index.html`

## API

Refer https://www.notion.so/adithyanr/56ce60f0152e4d3bae081bc6865c4b4e?v=6e32b8cd1a984e6a986bbc8a213e13b5 for API documentation.

## Issues

Feel free to create an issue on this GitHub repository if you have any questions regarding this assignment.
