const menu = document.querySelector('.menu-btn');
const links = document.querySelector('.nav-links');

if (menu && links) {
  menu.onclick = () => links.classList.toggle('open');

  links.querySelectorAll('a').forEach(a => {
    a.onclick = () => links.classList.remove('open');
  });
}


/* Automatic copyright year */

document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});


/* Candidate Application Form */

const candidateForm = document.querySelector('#candidate-form');

if (candidateForm) {

  const submitButton = document.querySelector('#candidate-submit');

  candidateForm.addEventListener('submit', async function (event) {

    event.preventDefault();

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';
    }

    const formData = new FormData(candidateForm);

    try {

      const response = await fetch(candidateForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });


      if (response.ok) {

        const firstName =
          candidateForm.querySelector('[name="first_name"]')?.value || '';

        const lastName =
          candidateForm.querySelector('[name="last_name"]')?.value || '';

        const fullName =
          `${firstName} ${lastName}`.trim();


        candidateForm.parentElement.innerHTML = `

          <div class="application-success">

            <span class="eyebrow">
              Application Received
            </span>

            <h2>
              Thank You${firstName ? `, ${firstName}` : ''}!
            </h2>

            <p>
              We have successfully received your application
              to the Andes AllTalent Talent Network.
            </p>

            <p>
              Our team will review your professional profile
              and contact you if your experience matches
              a current or future opportunity.
            </p>


            <div class="success-next-step">

              <h3>
                Complete Your Application
              </h3>

              <p>
                To complete your application, please send your
                most recent <strong>CV in PDF format</strong>
                to:
              </p>

              <p class="application-email">

                <a href="mailto:andeslegaltalent@gmail.com">
                  andeslegaltalent@gmail.com
                </a>

              </p>


              <p>
                Please use the following email subject:
              </p>


              <div class="email-subject">
                New Candidate${fullName ? ` – ${fullName}` : ''}
              </div>


              <p class="success-note">
                Sending your CV will allow our team to complete
                your candidate profile and consider you for
                suitable professional opportunities.
              </p>

            </div>


            <p class="success-closing">
              We look forward to learning more about your
              professional experience.
            </p>


            <strong class="company-signature">
              Andes AllTalent
            </strong>

            <span class="company-tagline">
              Global Talent. Real Opportunities.
            </span>

          </div>

        `;


      } else {

        const data = await response.json().catch(() => ({}));

        throw new Error(
          data?.errors?.[0]?.message ||
          'Unable to submit your application.'
        );

      }


    } catch (error) {

      console.error(error);

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Join the Talent Network →';
      }

      alert(
        'We were unable to submit your application. Please try again.'
      );

    }

  });

}
