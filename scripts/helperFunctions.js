//Reusable Function for alert Messages
function alertFunc(e, message){
    e.preventDefault();
    $('#dialog').dialog({
        title: "Alert!",
        resizable: false,
        modal: true,
        open: function() {
            let markup = message;
            $(this).html(markup);
          },
    });
};
