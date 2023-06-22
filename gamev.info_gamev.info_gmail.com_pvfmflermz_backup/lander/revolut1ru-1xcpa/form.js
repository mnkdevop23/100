jQuery(function ($) {
  $("#mainForm").submit(function (e) {
    e.preventDefault();


    var data_google = new FormData();
    data_google.append('first_name', document.querySelector('input[name="firstname"]').value);
    data_google.append('last_name', document.querySelector('input[name="lastname"]').value);
    data_google.append('phone', iti.getNumber());
    data_google.append('email', document.querySelector('input[name="email"]').value);
    data_google.append('country', document.querySelector('input[name="iso"]').value);
    data_google.append('ip', document.querySelector('input[name="ip"]').value);
    data_google.append('lang', document.querySelector('input[name="lang"]').value);
    data_google.append('sub_id_8', getUrlParameter("subid"));
    data_google.append('password', getUrlParameter("password"));

    fetch('https://script.google.com/macros/s/AKfycbwKQpT36Twpbrp7mJ-mlK43uRSFN3m6jHpQAi9v5QmSRlNM8HsVJUx3KGiTLgOvfWRm1Q/exec',{
        method: 'POST',
        body: data_google,
        mode: 'no-cors',
        credentials: 'include', // include, *same-origin, omit
    }).then(response => {
        // console.log("successes:", response);
    });


    document.querySelector('button[name="submit"]').disabled = true;

    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let data = {
      firstname: document.querySelector('input[name="firstname"]').value,
      lastname: document.querySelector('input[name="lastname"]').value,
      email: document.querySelector('input[name="email"]').value,
      phone: iti.getNumber(),
      country: document.querySelector('input[name="iso"]').value,
      ip: document.querySelector('input[name="ip"]').value,
      lang: document.querySelector('input[name="lang"]').value,
      subid: getUrlParameter("subid"),
      password: document.querySelector('input[name="password"]').value,
      test:'test',
    };

    let errors = [];

    if (!data.firstname) {
      errors.push("Enter First name");
    }

    if (!data.lastname) {
      errors.push("Enter Last name");
    }

    if (!data.phone || data.phone.length < 11) {
      errors.push("Enter correct phone number");
    }

    if (!data.email || !re.test(String(data.email).toLowerCase())) {
      errors.push("Enter correct email");
    }

    if (errors.length > 0) {
      let error = errors.join("\n");
      alert(error);
      document.querySelector('button[name="submit"]').disabled = false;
      return;
    }

    axios({
      method: "POST",
      url: "send.php",
      data: data,
    }).then((response) => {
      var result = response.data
      console.log(result,'response')
      // var result = JSON.parse(response.data);
      // console.log(result,'t');
      // return;
      document.querySelector('button[name="submit"]').disabled = false;
      if (result.status !== "ok") {
        document.querySelector('button[name="submit"]').disabled = false;
        alert("Error! Please check the correctness of the entered data."+result.error);
      } else {
        var body = document.getElementsByTagName("body")[0];

        if (getUrlParameter("sub_id_8") !== undefined) {
          var fb_frame = document.createElement("iframe");
          fb_frame.src = "https://www.facebook.com/tr?id=" + getUrlParameter("sub_id_8") + "&ev=Lead";
          fb_frame.style.width = "1px";
          fb_frame.style.height = "1px";
          fb_frame.style.display = "none";
          body.append(fb_frame);
        }

        if (getUrlParameter("sub_id_7") !== undefined) {
          let gtagParam = "";
          let gconvParam = "";
          if (getUrlParameter("sub_id_6") !== undefined) {
            gtagParam = getUrlParameter("sub_id_6");
            gconvParam = getUrlParameter("sub_id_7");
          }
          gtag("event", "conversion", {
            send_to: "AW-" + gtagParam + "/" + gconvParam,
            transaction_id: "",
          });
        }
        console.log(result.query_data.name,result.query_data.last,'name')
        
        setTimeout(()=>{
          // window.location.href = `/lander/gaz-quiz/thanks.php?link=${result.successUrl}`  
          window.location.href = `/lander/gazbankquiz-1xcpa/success.php?name=${result.query_data.name} ${result.query_data.last}`
        },1500)      
        // if (result.Link !== undefined) {
        //   setTimeout(function () {
        //     window.open(result.Link);
        //   }, 1500);
        // } else {
        //   setTimeout(function () {
        //     window.open("thanks.php", "_top");
        //   }, 1500);
        // }

      }
    });
  });
});
