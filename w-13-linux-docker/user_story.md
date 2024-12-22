### **User Stories for Expense App**

---

#### 1. **User Authentication (Login/Signup)**

**As a new user, I want to sign up for an account so that I can securely access my expense data.**

-   **Acceptance Criteria**:
    -   The user can sign up using their first name, last name, gender, email and password.
    -   Upon successful sign-up, the user is directed to the login screen.

**As a returning user, I want to log into my account so that I can view my expense data.**

-   **Acceptance Criteria**:
    -   The user can log in using their email and password.
    -   The user is shown an error message if the login credentials are incorrect.

---

#### 2. **Dashboard (Account Summary, Recent Transactions, Spending Categories)**

**As a user, I want to see an overview of my account, including my income, expense, and balance, so that I can track my financial status.**

-   **Acceptance Criteria**:
    -   The dashboard displays:
        -   Total income.
        -   Total expenses.
        -   Current balance (income - expenses).
    -   The numbers are updated in real-time as new transactions are added.

**As a user, I want to see the last five transactions on my dashboard so that I can quickly review my recent activity.**

-   **Acceptance Criteria**:
    -   The dashboard shows the last five transactions.
    -   Each transaction displays: amount, date, and category.
    -   The user can tap on a transaction to view full details on the transaction history page.

**As a user, I want to see a list of my spending categories so that I can better understand where I’m spending my money.**

-   **Acceptance Criteria**:
    -   The dashboard displays a list of the user’s spending categories (e.g., Food, Rent, Entertainment).
    -   Each category shows total spending for that category.
    -   Users can add, edit, and delete categories.

---

#### 3. **Add Expense**

**As a user, I want to add an expense so that I can keep track of my spending.**

-   **Acceptance Criteria**:
    -   The user can add an expense by providing:
        -   Amount.
        -   Date.
        -   Category (either select from existing or create a new category).
        -   Type (Expense).
        -   Description (optional).
    -   The expense is saved and reflected in the user’s transaction history.
    -   The user is notified upon successful addition of an expense.
    -   The amount is deducted from the balance on the dashboard.

---

#### 4. **Transaction History Page**

**As a user, I want to view a complete list of my transactions so that I can review all my expenses and income.**

-   **Acceptance Criteria**:
    -   The transaction history page displays all transactions, including both expenses and income.
    -   The user can filter transactions by date range (e.g., Today, Last 7 days, Last Month, Custom).
    -   Each transaction displays:
        -   Type (Expense/Income).
        -   Amount.
        -   Date.
        -   Category.
        -   Description (if provided).
    -   The user can view detailed information about each transaction by tapping on it.

---

#### 5. **Spending Page (Expense-Specific View)**

**As a user, I want to see a list of my expenses so that I can monitor my spending.**

-   **Acceptance Criteria**:
    -   The spending page displays only the user's expense transactions (i.e., excluding income).
    -   Users can filter expenses by date range (e.g., Today, Last 7 days, Last Month, Custom).
    -   Each expense shows the following:
        -   Amount.
        -   Date.
        -   Category.
        -   Description (if provided).
    -   Users can tap on individual transactions to view more detailed information.

---

#### 6. **Settings Page (User Preferences)**

**As a user, I want to update my account settings, including my name and password, so that I can manage my account information.**

-   **Acceptance Criteria**:
    -   The settings page allows the user to:
        -   Update their name.
        -   Change their password.
    -   The user is required to confirm their current password before changing it.
    -   Changes are saved and reflected immediately.

---

### **Non-Functional Requirements:**

-   **Security**: User passwords should be securely hashed and stored.
-   **Performance**: The app should load the dashboard, transaction history, and other pages quickly (under 2 seconds).
-   **Mobile Responsiveness**: The app should be optimized for both mobile and tablet screens.

---

### **Additional Notes**:

-   **Data Persistence**: Each user’s transactions and categories should be stored securely in a backend database, and users should only see their own data.
-   **Notification**: Optional: Push notifications for large expenses or daily/weekly spending summaries (could be added later).

---
