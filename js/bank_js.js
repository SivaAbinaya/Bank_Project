// Toggle the contact sidebar visibility
function toggleContactSidebar() {
    const sidebar = document.getElementById('contact-sidebar');
    sidebar.classList.toggle('show');
}

// Show account details page
function showAccountDetails() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('account-details-page').style.display = 'block';
}

// Show fund transfer page
function showFundTransfer() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('fund-transfer-page').style.display = 'block';
}

// Show add beneficiary page
function showAddBeneficiary() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('add-beneficiary-page').style.display = 'block';
}

// Show view beneficiaries page
function showViewBeneficiaries() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('view-beneficiaries-page').style.display = 'block';
}

// Go back to the home page from any other page
function goBackToHome() {
    document.getElementById('account-details-page').style.display = 'none';
    document.getElementById('fund-transfer-page').style.display = 'none';
    document.getElementById('add-beneficiary-page').style.display = 'none';
    document.getElementById('view-beneficiaries-page').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
}

// Handle fund transfer form submission
function makeFundTransfer(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    const beneficiaryAccount = document.getElementById('beneficiary-account').value;
    const amount = document.getElementById('amount').value;
    
    // Simulate a successful transfer message (in real-world scenario, you would make an API request)
    alert(`Fund transfer of $${amount} to account ${beneficiaryAccount} has been successfully sent.`);
    
    // Redirect back to the home page after the transfer
    goBackToHome();
}

// Handle add beneficiary form submission
function addBeneficiary(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    const beneficiaryName = document.getElementById('beneficiary-name').value;
    const beneficiaryAccount = document.getElementById('beneficiary-account').value;
    
    // Simulate adding beneficiary (in real-world scenario, you would make an API request)
    alert(`Beneficiary ${beneficiaryName} with account ${beneficiaryAccount} has been successfully added.`);
    
    // Redirect back to the home page after adding the beneficiary
    goBackToHome();

}
        // JavaScript to handle form submission and show success message
        document.getElementById("withdraw-page").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form from submitting to server

            // Get the amount entered by the user
            const amount = document.getElementById("amount").value;

            // Simple validation to ensure the amount is greater than 0
            if (amount > 0) {
                // Show success message
                document.getElementById("successMessage").style.display = "block";
            } else {
                alert("Please enter a valid amount to withdraw.");
            }
        });
