$(document).ready(function () {
  $("#draggable-man").draggable();
  $("#draggable-girl").draggable();
  // End draggable--man-girl

  $(".timeline-nav--ul li:nth-child(1)").click(function () {
    $(".timeline-text--1").toggle();
  });

  $(".timeline-nav--ul li:nth-child(2)").click(function () {
    $(".timeline-text--2").toggle();
  });

  $(".timeline-nav--ul li:nth-child(3)").click(function () {
    $(".timeline-text--3").toggle();
  });

  $(".timeline-nav--ul li:nth-child(4)").click(function () {
    $(".timeline-text--4").toggle();
  });

  $(".timeline-nav--ul li:nth-child(5)").click(function () {
    $(".timeline-text--5").toggle();
  });

  $(".timeline-nav--ul li:nth-child(6)").click(function () {
    $(".timeline-text--6").toggle();
  });

  $(".timeline-nav--ul li:nth-child(7)").click(function () {
    $(".timeline-text--7").toggle();
  });

  $(".timeline-nav--ul li:nth-child(8)").click(function () {
    $(".timeline-text--8").toggle();
  });
  /* ------------------------------------------------------ */

  var timelineButton = $(".timeline-text--1 button:nth-child(1)");
  var timelineButton2 = $(".timeline-text--1 button:nth-child(2)");
  var timelineInput1 = $(".timeline-text--1 input");
  var timelineLinks = $(".timeline-text--1 input").val();

  timelineButton.click(function () {
    timelineInput1.css("display", "block");
  });

  if (timelineLinks !== "") {
    timelineButton2.click(function () {
      alert("Cập nhật đường dẫn thành công");
      timelineInput1.css("display", "none");
    });
  } else {
    timelineButton2.click(function () {
      alert("Chưa có đường dẫn");
      timelineInput1.css("display", "none");
    });
  }
  // ------------------------------------------

  var timelineButton3 = $(".timeline-text--2 button:nth-child(1)");
  var timelineButton4 = $(".timeline-text--2 button:nth-child(2)");
  var timelineInput2 = $(".timeline-text--2 input");
  var timelineLinks2 = $(".timeline-text--2 input").val();

  timelineButton3.click(function () {
    timelineInput2.css("display", "block");
  });

  if (timelineLinks2 !== "") {
    timelineButton4.click(function () {
      alert("Cập nhật đường dẫn thành công");
      timelineInput2.css("display", "none");
    });
  } else {
    timelineButton4.click(function () {
      alert("Chưa có đường dẫn");
      timelineInput2.css("display", "none");
    });
  }
  // ------------------------------------------

  var timelineButton5 = $(".timeline-text--3 button:nth-child(1)");
  var timelineButton6 = $(".timeline-text--3 button:nth-child(2)");
  var timelineInput3 = $(".timeline-text--3 input");
  var timelineLinks3 = $(".timeline-text--3 input").val();

  timelineButton5.click(function () {
    timelineInput3.css("display", "block");
  });

  if (timelineLinks3 !== "") {
    timelineButton6.click(function () {
      alert("Cập nhật đường dẫn thành công");
      timelineInput3.css("display", "none");
    });
  } else {
    timelineButton6.click(function () {
      alert("Chưa có đường dẫn");
      timelineInput3.css("display", "none");
    });
  }
  // ------------------------------------------

  var timelineButton7 = $(".timeline-text--4 button:nth-child(1)");
  var timelineButton8 = $(".timeline-text--4 button:nth-child(2)");
  var timelineInput4 = $(".timeline-text--4 input");
  var timelineLinks4 = $(".timeline-text--4 input").val();

  timelineButton7.click(function () {
    timelineInput4.css("display", "block");
  });

  if (timelineLinks4 !== "") {
    timelineButton8.click(function () {
      alert("Cập nhật đường dẫn thành công");
      timelineInput4.css("display", "none");
    });
  } else {
    timelineButton8.click(function () {
      alert("Chưa có đường dẫn");
      timelineInput4.css("display", "none");
    });
  }
  // ------------------------------------------

  var timelineButton9 = $(".timeline-text--5 button:nth-child(1)");
  var timelineButton10 = $(".timeline-text--5 button:nth-child(2)");
  var timelineInput5 = $(".timeline-text--5 input");
  var timelineLinks5 = $(".timeline-text--5 input").val();

  timelineButton9.click(function () {
    timelineInput5.css("display", "block");
  });

  if (timelineLinks5 !== "") {
    timelineButton10.click(function () {
      alert("Cập nhật đường dẫn thành công");
      timelineInput5.css("display", "none");
    });
  } else {
    timelineButton10.click(function () {
      alert("Chưa có đường dẫn");
      timelineInput5.css("display", "none");
    });
  }
  // ------------------------------------------

  var timelineButton11 = $(".timeline-text--6 button:nth-child(1)");
  var timelineButton12 = $(".timeline-text--6 button:nth-child(2)");
  var timelineInput6 = $(".timeline-text--6 input");
  var timelineLinks6 = $(".timeline-text--6 input").val();

  timelineButton11.click(function () {
    timelineInput6.css("display", "block");
  });

  if (timelineLinks6 !== "") {
    timelineButton10.click(function () {
      alert("Cập nhật đường dẫn thành công");
      timelineInput6.css("display", "none");
    });
  } else {
    timelineButton12.click(function () {
      alert("Chưa có đường dẫn");
      timelineInput6.css("display", "none");
    });
  }
  // ------------------------------------------

  var timelineButton13 = $(".timeline-text--7 button:nth-child(1)");
  var timelineButton14 = $(".timeline-text--7 button:nth-child(2)");
  var timelineInput7 = $(".timeline-text--7 input");
  var timelineLinks7 = $(".timeline-text--7 input").val();

  timelineButton13.click(function () {
    timelineInput7.css("display", "block");
  });

  if (timelineLinks7 !== "") {
    timelineButton14.click(function () {
      alert("Cập nhật đường dẫn thành công");
      timelineInput7.css("display", "none");
    });
  } else {
    timelineButton14.click(function () {
      alert("Chưa có đường dẫn");
      timelineInput7.css("display", "none");
    });
  }
  // ------------------------------------------

  var timelineButton15 = $(".timeline-text--8 button:nth-child(1)");
  var timelineButton16 = $(".timeline-text--8 button:nth-child(2)");
  var timelineInput8 = $(".timeline-text--8 input");
  var timelineLinks8 = $(".timeline-text--8 input").val();

  timelineButton15.click(function () {
    timelineInput8.css("display", "block");
  });

  if (timelineLinks8 !== "") {
    timelineButton16.click(function () {
      alert("Cập nhật đường dẫn thành công");
      timelineInput8.css("display", "none");
    });
  } else {
    timelineButton16.click(function () {
      alert("Chưa có đường dẫn");
      timelineInput8.css("display", "none");
    });
  }
  // ------------------------------------------

  var hours, seconds, minutes, days, minutes;
  var endDay = new Date("04-03-2022 16:30:00").getTime();
  var now = new Date().getTime();
  var countDown = endDay - now;
  setInterval(function () {
    seconds = Math.floor(countDown / 1000);
    hours = Math.floor(seconds / 3600);
    minutes = Math.floor(seconds / 60);
    days = Math.floor(seconds / 86400);
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
    document.querySelector(".timeline-text--1 h6").innerHTML =
      "Thời gian: " +
      hours +
      " giờ " +
      minutes +
      " phút " +
      seconds +
      " Giây";
    countDown -= 1000;
  }, 1000);
  
});
