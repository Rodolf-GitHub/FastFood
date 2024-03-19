<template>
    <Menu></Menu>
    <div class="account-balance">
      <h1 class="title">Account Balance</h1>
      <p class="balance-info">
        Your current account balance is: 
        <span class="balance-amount">$5,000.00</span>
      </p>
      <!-- Add more account-related elements here -->
    </div>
  </template>
  
  <style scoped>
  .account-balance {
    text-align: center;
    padding: 2rem;
    background-image: url("../assets/images/perla.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 600px;
  }
  
  .title {
    font-size: 2.5rem;
    color: var(--primary-200);
    margin-bottom: 1rem;
    color: black;
    background-color:  rgba(255, 228, 196, 0.5);
  }
  
  .balance-info {
    font-size: 1.2rem;
    color: var(--accent-100);
    margin-bottom: 2rem;
    font-size: 50px;
    color: black;
    background-color: rgba(255, 228, 196, 0.5);
    
  }
  
  .balance-amount {
    font-weight: bold;
    color: var(--accent-200);
    color: green;
  }
  </style>
  