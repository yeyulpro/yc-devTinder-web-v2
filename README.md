# ycTinder Client

This repository contains the **client-side** code for **ycTinder**, a real-world dating application.  
The **server-side** (backend) is hosted separately: [ycTinder Server](https://github.com/yeyulpro/yc-devTinder-server-v2.git).  

**Live Demo:** [yctiner.online](https://yctiner.online)  

**ycTinder Client** is responsible for the user interface, managing state, and providing real-time interactions with the backend. Built with **React**, it delivers a responsive and interactive experience for users.  

---

## Features
- **Profile Browsing**: Users can view other profiles and indicate interest by clicking **Interested** or **Ignored**.  
- **Match Requests**: Accept or reject incoming interest requests to form matches.  
- **Real-time Chat**: Matched users can chat one-on-one using a real-time WebSocket connection.  
- **Responsive UI**: Designed with **Material UI (MUI)** for a modern and responsive user interface.  
- **State Management**: Uses **Redux Toolkit** and **RTK Query** for efficient state handling and data fetching.  
- **Notifications**: Receives real-time match notifications from the server.  

---

## Tech Stack
- **Frontend Framework:** React  
- **UI Library:** Material UI (MUI)  
- **State Management:** Redux Toolkit, RTK Query  
- **Routing:** React Router  
- **Real-time Communication:** Socket.io-client  
- **HTTP Requests:** Axios  

---

## Deployment
The client is deployed and interacts with the **ycTinder Server** hosted on AWS EC2.  
Access the live app: [yctiner.online](https://yctiner.online)  
