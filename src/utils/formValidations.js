export default function formValidations (formData, setFormErrors) {
    let nameError = ''
    let descriptionError = ''


    if (formData.name.match(/[^a-zA-Z_ ]/g) // should not contain special characters or numbers.
    || formData.name.match(/^$|\s+/) !== null // No spaces
    || formData.name.length > 255) { // max length 255 characters
      nameError = "Name cannot contain special characters, numbers or empty spaces"
    }

    if (formData.description.length > 255) { //  max length 255 characters) 
      descriptionError = "Description cannot contain special characters, numbers or empty spaces"
    }

    // Empty form fields validations
    if (!formData.name) { 
      nameError = "Must enter a name"
    }
    if (!formData.description) { // cannon be blank
      descriptionError = "Must enter a description"
    }


    // Setting errors to the state
    if (nameError || descriptionError) {
      setFormErrors({ nameError, descriptionError })
      return false
    }
    return true
}