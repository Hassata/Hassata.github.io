/* Add your styles here */
body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: #333; /* Default text color */
    background-color: #f4f4f4; /* Overall background color */
}

header, nav, section, footer {
    padding: 20px;
    margin-bottom: 20px;
}

header {
    background: #005f73; /* Dark blue header background */
    color: #ffffff; /* White text for header */
}

header h1, header p {
    text-align: center;
    margin: 0;
}

nav ul {
    list-style: none;
    background-color: #0a9396; /* Lighter blue for the navbar */
    padding: 0;
    margin: 0;
}

nav ul li {
    display: inline;
}

nav ul li a {
    text-decoration: none;
    color: white;
    padding: 15px 20px;
    display: inline-block;
}

nav ul li a:hover, nav ul li a:focus {
    background-color: #94d2bd; /* Soft green for hover/focus */
}

section {
    background: #ffffff; /* White background for content sections */
    margin-top: 20px;
}

#contact-form {
    max-width: 400px;
    margin: auto;
}

#contact-form label {
    display: block;
    margin-top: 10px;
}

#contact-form input, #contact-form textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #cccccc; /* Light grey border for inputs */
}

footer {
    background: #005f73;
    color: #ffffff;
    text-align: center;
    padding: 10px 0;
    position: relative;
    bottom: 0;
    width: 100%;
}

/* Responsive design */
@media (max-width: 600px) {
    nav ul li {
        display: block;
    }

    nav ul li a {
        display: block;
        width: 100%;
    }
}


#skills, #certifications, #education {
    background: #e8e8e8; /* Light grey background for these sections */
    border-radius: 8px; /* Rounded corners for the containers */
    padding: 20px;
    margin-bottom: 20px;
}

#skills ul, #certifications ul {
    list-style-type: none; /* Remove default list styling */
    padding: 0;
}

#skills li, #certifications li {
    background: #cae8d5; /* Soft green for individual skills and certs */
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
}
