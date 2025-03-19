$("#myForm").on("submit", function (e) {
    e.preventDefault();
    $("#myModal").modal("show");
  });
  
  $(document).ready(function () {
    $("#modalOKBtn").click(function () {
      $("#myToast").toast("show");
      $("#myModal").modal("hide");
    });
  });
  
  $(document).ready(function () {
    $("#modalCancelButton").click(function () {
      $("#myModal").modal("hide");
    });
  });
  
  $(".toast").toast({
    delay: 3000,
  });