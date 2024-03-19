<template>
    <Menu></Menu>
    <div class="personal-info">
      <h1 class="title">Personal Information</h1>
      <p class="info">
        <span class="label">Name:</span> John Doe<br>
        <span class="label">Username:</span> johndoe123<br>
        <span class="label">Address:</span> 123 Main St, Bikini Bottom<br>
        <span class="label">Credit Card Number:</span> **** **** **** 1234
      </p>
      <!-- Add more personal details here -->
    </div>
  </template>
  
  <style scoped>
  .personal-info {
    text-align: center;
    padding: 2rem;
    background-image: url("../assets/images/calamardo.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 600px;
    background-color: rgba(255, 228, 196, 0.2);
  }
  
  .title {
    font-size: 4.5rem;
    color: var(--primary-200);
    margin-bottom: 1rem;
    background-color: rgba(255, 228, 196, 0.2);
  }
  
  .info {
    font-size: 4.2rem;
    color: var(--accent-100);
    margin-bottom: 2rem;
    color: black;
    background-color: rgba(255, 228, 196, 0.2);
  }
  
  .label {
    font-weight: bold;
    color: var(--accent-200);
    color: green;
  }
  </style>
  