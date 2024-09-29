// Function to automate saving process with dynamic reading list selection
function saveArticles(readingListId) {
    // Find all the "Save" buttons
    const saveButtons = document.querySelectorAll('a.gs_or_sav');

    saveButtons.forEach((saveButton, index) => {
        setTimeout(() => {
            // Click the "Save" button
            saveButton.click();

            // Wait for the dialog to appear
            setTimeout(() => {
                // Select the desired reading list checkbox based on the provided ID
                const desiredCheckbox = document.querySelector(`a.gs_cb_gen[data-id="${readingListId}"]`);
                if (desiredCheckbox) {
                    desiredCheckbox.click();
                }

                // Click the "Done" button
                const doneButton = document.querySelector('button#gs_lbd_apl');
                if (doneButton) {
                    doneButton.click();
                }

            }, 1000); // Adjust delay time if needed
        }, index * 2000); // Adjust delay between iterations if necessary
    });
}

// Call the function with the desired reading list ID
saveArticles('6');