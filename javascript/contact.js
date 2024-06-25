

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Perform validation checks
        if (validateForm()) {
            // Show the confirmation message
            const confirmationMessage = document.getElementById('confirmationMessage');
            confirmationMessage.style.display = 'block';

            // Clear the form fields
            form.reset();

            // Hide the confirmation message after 3 seconds
            setTimeout(function() {
                confirmationMessage.style.display = 'none';
            }, 3000);
        }
    });

    function validateForm() {
        // Get form field values
        const fName = document.getElementById('firstName').value;
        const lName = document.getElementById('l-name').value;
        const schoolId = document.getElementById('school-id').value;
        const tel = document.getElementById('phone').value;
        const message = document.getElementById('send-message').value;

        // Validate First Name (must not be empty)
        if (fName.trim() === '') {
            alert('First Name is required');
            return false;
        }

        // Last Name must not be empty
        if (lName.trim() === '') {
            alert('Last Name is required');
            return false;
        }

        // Validate School ID (must not be empty)
        const schoolIdPattern = /^[A-Z]{3}\/\d{4}\/\d{2}$/;
        if (!schoolIdPattern.test(schoolId)) {
            alert('School ID must be in the format XXX/0000/00. Letters should be in block letters!');
            return false;
        }

        // Validate Phone (must not be empty and must be a valid phone number)
        const phonePattern = /^\+?\d{10,12}$/;
        if (!phonePattern.test(tel)) {
            alert('Phone number must be a numeric value between 10 and 12 digits. (Eg: +251 912 345 678 or 091 234 5678)');
            return false;
        }

        // Validate Message (must not be empty)
        if (message.trim() === '') {
            alert('Message is required');
            return false;
        }

        // All validations passed
        return true;
    }
});