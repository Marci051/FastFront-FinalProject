document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); //age enter bzni
    //event submit form ro
    //function hadle konande event = event handeler
    //jologiri az karaye default browser
    //(event) parameter default evennlistener
    // anonymous function
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const title = document.getElementById("title").value.trim();
    const message = document.getElementById("message").value.trim();
    //trim = hazf white space aval o akhar string ha
    const emptyFields = [];

    if (!name) {
      emptyFields.push("نام");
    }
    //null - string khali = false
    if (!phone) {
      emptyFields.push("شماره تلفن");
    }
    if (!email) {
      emptyFields.push("ایمیل");
    }
    if (!message) {
      emptyFields.push("پیام");
    }
    if (!title) {
      emptyFields.push("عنوان");
    }

    if (emptyFields.length > 0) {
      alert(
        `❌ شما فیلدهای زیر را مقداردهی نکرده‌اید: ${emptyFields.join(", ")}`
      );
      return;
    }

    alert(
      `✅ کاربر گرامی ${name} عزیز با شماره تلفن ${phone} و ایمیل ${email} متشکریم از ارسال پیام شما.`
    );

    this.reset();
  });
